(ns connect-jwt
  (:require [clojure.string :as string]
            [clj-time.core :refer [now plus minutes]]
            [clj-jwt.core :as jwt]
            [digest]
            [ring.util.codec :as codec]))


(defn path-encode [path]
  (string/replace path "&" "%26"))

(defn percent-encode [in]
  (-> in
      codec/url-encode
      (string/replace "+" "%2B")
      (string/replace "*" "%2A")
      (string/replace "%7E", "~")))

(defn encode-values [v]
  (if (vector? v)
    (->> v
         (map (comp name percent-encode))
         sort
         (interpose ",")
         (apply str))

    (-> v
        name
        percent-encode)))

(defn map->query [m]
  (some->> (seq m)
           sort
           (map (fn [[k v]]
                  (str (percent-encode (name k))
                       "="
                       (encode-values v))))
           (interpose "&")
           (apply str)))

(defn canonicalize-params [params]
  (-> params
      (dissoc "jwt")
      map->query
      (or "")))

(defn canonicalize-query
  ([method path]
   (canonicalize-query method path {}))

  ([method path params]
   (str (string/upper-case (name method))
        "&"
        (if (= "" path) "/" (path-encode path))
        "&"
        (canonicalize-params params))))

(defn gen-query-hash [method path params]
  (let [canon (canonicalize-query method path params)
        bytes (.getBytes canon)]
    (digest/sha-256 bytes)))


(defn extract-token [request]
  (let [{{qtoken "jwt"} :query-params} request
        {{htoken "authorization"} :headers} request]
    (cond
      ;; Based on authentication.js if both the header and the query param
      ;; are present we should use the query.
      (and qtoken htoken) (jwt/str->jwt qtoken)
      qtoken (jwt/str->jwt qtoken)
      (and htoken (.startsWith htoken "JWT ")) (jwt/str->jwt (second (string/split htoken #" ")))
      :else nil)))


(defn verify-token [token secret]
  (boolean (some-> token
                   (jwt/verify secret))))

(defn verify-qsh [token request]
  (let [local (gen-query-hash (request :request-method)
                              (request :uri)
                              (dissoc (request :query-params) "jwt"))]
    (= local (-> token :claims :qsh))))

(defn verify-jwt [request secret]
  (let [token (some-> request extract-token)]
    (and (verify-token token secret)
         (verify-qsh token request))))


(defn gen-jwt-token [method path params project-key  secret]
  (let [claim  {:iat (now)
               :exp (plus (now) (minutes 5))
               :iss project-key
                :sub "5d56c5237c02be0da04acaae"
               :qsh (gen-query-hash method path params)}]

    (-> claim
        (jwt/jwt)
        (jwt/sign :HS256 secret)
        (jwt/to-str))))

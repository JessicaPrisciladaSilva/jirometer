(ns jirometer.handler
  (:require [cheshire.core :as cheshire]
            [compojure.core :refer :all]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [response]]
            [org.httpkit.client :as http]))

(def event-store (atom '()))

(defn persist!
  "Save event to local in-memory structure"
  [event]
  (swap! event-store conj event)
  (println event) ;; debug info for development
  event)

(defn transform
  "Get the fields we care about from the JIRA payload"
  [e1]
  (let [id        (-> e1 :issue :key)
        user      (-> e1 :user :displayName)
        timestamp (-> e1 :timestamp)
        type      (-> e1 :webhookEvent)
        summary   (-> e1 :issue :fields :summary)]

    {:user user :id id :timestamp timestamp :summary summary :type type}))

(defn handle-event
  [raw]
  (-> raw
      clojure.walk/keywordize-keys
      transform
      persist!))

(defn events
  [_]
  @event-store)

(defn recv
  "Handler function for all events"
  [req]
  (handle-event (:body req))
  {:status 200 :body "OK"})

(defn print-installed
  "Handler function for all events"
  [req]
  (println req)
  {:status 200 :body "OK"})

(defroutes app-routes
           (POST "/installed" req (print-installed req))
           (POST "/recv" req (recv req))
           (GET "/events" req (response (events req))))

(def app
  (-> app-routes
      (wrap-resource "public")
      wrap-json-body
      wrap-json-response
      (wrap-defaults api-defaults)))

(defn issue
  [issue]
    (let [issue-info (http/request {:url        (str "https://jirometer.atlassian.net/rest/api/3/issue/" issue)
                                  :method     :get
                                  :basic-auth ["user" "password"]})]
    (:body @issue-info)))

(defn translate-field
  []
  (let [response (http/request {:url        "https://jirometer.atlassian.net/rest/api/2/field"
                                :method     :get
                                :basic-auth ["user" "password"]})
        fields   (cheshire/parse-string (:body @response))]
    fields))


(defn epics
  []
  (let [response (http/request {:url        "https://jirometer.atlassian.net/rest/api/3/issue/search?jql=issueType=Epic"
                                :method     :get
                                :basic-auth ["user" "password"]})]
    (:body @response)))

(ns jirometer.handler
  (:require [compojure.core :refer :all]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [response]]))

(def event-store (atom '()))

(defn persist!
  "Save event to local in-memory structure"
  [e]
  (swap! event-store conj e)
  (println e) ;; debug info for development
  e)

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

(defroutes app-routes
           (POST "/installed" [] {:status 200 :body "OK"})
           (POST "/recv" req (recv req))
           (GET "/events" req (response (events req))))

(def app
  (-> app-routes
      (wrap-resource "public")
      wrap-json-body
      wrap-json-response
      (wrap-defaults api-defaults)))
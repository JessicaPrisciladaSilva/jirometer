(ns jirometer.core
  (:require [rum.core :refer [defc mount]]
            [ajax.core :refer [GET]]))

(defc heading []
  [:h1 "JIRA Activity Feed"])

(defn fetch-issues
  [handler]
  (GET "/events" {:handler handler :response-format :json :keywords? true}))

(defc issue
  [{:keys [id summary type timestamp]}]
  [:div.issue
   [:div.id id]
   [:div.info
    [:div.title summary]
    [:div.detail type]
    [:div.date timestamp]]])

(defc issues
  [is]
  [:div.issues
   (map issue is)])

(defc content
  [data]
  [:div.container
   (heading)
   (if data
     (issues data)
     [:div "No activity found in feed."])])

(defn handler [data]
  (mount (content data) (.getElementById js/document "content")))


(fetch-issues handler)

(js/setInterval
 #(fetch-issues handler)
 5000)
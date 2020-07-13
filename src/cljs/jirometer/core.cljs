(ns jirometer.core
  (:require [rum.core :refer [defc mount]]))

(defc heading []
  [:h1 "JIRA Activity Feed"])

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

(def fake-issues '({:id "FOO-1" :summary "The Title" :type "jira:issue_updated" :timestamp 123456789}))

(defc content
  [data]
  [:div.container
   (heading)
   (if data
     (issues data)
     [:div "No activity found in feed."])])

(mount (content fake-issues) (.getElementById js/document "content"))
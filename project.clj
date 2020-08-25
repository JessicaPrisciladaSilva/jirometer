(defproject jirometer "0.1.0-SNAPSHOT"
  :description "Jira Plugin to measure the project progress"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.764"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-json "0.5.0"]
                 [rum "0.12.3"]
                 [clj-connect "0.2.4"]
                 [cljs-ajax "0.7.5"]
                 [http-kit "2.3.0"]
                 [cheshire "5.10.0"]]
  :plugins [[lein-ring "0.12.5"]
            [lein-figwheel "0.5.20"]]
  :ring {:handler jirometer.handler/app}
  :source-paths ["src/clj"]
  :resource-paths ["resources" "target/cljsbuild"]
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}}
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :figwheel {:css-dirs ["resources/public/css"]
             :server-port 3000
             :ring-handler jirometer.handler/app}

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:main "jirometer.core"
                                   :asset-path "cljs/out"
                                   :output-to  "resources/public/cljs/main.js"
                                   :output-dir "resources/public/cljs/out"}}]})


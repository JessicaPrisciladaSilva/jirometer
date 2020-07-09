(ns jirometer.core)

(let [el (.getElementById js/document "content")]
  (set! (.-innerText el) "Hello World"))

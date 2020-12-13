(ns cljslib.lib.hello)

(defn hello []
  (.log js/console "Hello"))

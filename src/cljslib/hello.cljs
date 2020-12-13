(ns cljslib.hello
  (:require [applied-science.js-interop :as j]
            ["godot" :as godot]))

(defn v2 [x y]
  (new (.-Vector2 godot) x y))

(defn v3 [x y z]
  (new (.-Vector3 godot) x y z))

(defn hello [obj]
  (.log js/console "Hello there" (j/get obj :msg)))

(defn print-random-vector []
  (.log js/console (new (.-Vector2 godot) 1 2)))

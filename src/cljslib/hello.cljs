(ns cljslib.hello
  (:require [applied-science.js-interop :as j]))

(defn v2 [x y]
  (js/godot.Vector2. x y))

(defn v3 [x y z]
  (js/godot.Vector3. x y z))

(defn hello [obj]
  (.log js/console "Hello there" (j/get obj :msg)))

(defn print-random-vector []
  (.log js/console (js/godot.Vector2. 1 2)))

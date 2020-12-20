(ns cljslib.devtools.client.godot
  (:require [shadow.cljs.modern :refer (defclass)]
            [shadow.cljs.devtools.client.env :as env]
            [shadow.cljs.devtools.client.shared :as cljs-shared]
            [shadow.remote.runtime.shared :as shared]
            [shadow.remote.runtime.api :as api]))

;; todo: update shadow-cljs
;; test: use class implementation
;; test: start -> add to root of scene tree
;; test: stop -> remove from root of scene tree

;; (defonce the-repl (atom nil))


(defclass GodotRepl
  (extends js/godot.Node)

  (field socket nil)
  (field runtime nil)

  (constructor
   [this runtime]
   (super)
   (set! (.-runtime this) runtime))

  Object
  (_ready
   [this]
   (let [ws-url
         (env/get-ws-relay-url)

         runtime
         (.-runtime this)

         socket
         (js/godot.WebSocketClient.)]
    (doto socket
      (.connect "data_received"
                (fn []
                  (let [data (.. socket (get_peer 1) (get_var))]
                    (cljs-shared/remote-msg runtime data))))

      (.connect "connection_closed"
                (fn [e]
                  (cljs-shared/remote-close runtime e)))

      (.connect "connection_error"
                (fn [e]
                  (cljs-shared/remote-error runtime e)))

      (.connect "connection_established"
                (fn [p]
                  (cljs-shared/remote-open runtime p)))

      (.connect_to_url ws-url))
    (set! (.-socket this) socket)))

  (_process
   [this]
   (.poll (.-socket this))))

;; (defn start [runtime]
;;   (let [ws-url
;;         (env/get-ws-relay-url)

;;         socket
;;         (new (.-WebSocketClient js/godot))]
;;     (doto socket
;;       (.connect "data_received"
;;                 (fn []
;;                   (let [data (.. socket (get_peer 1) (get_var))]
;;                     (cljs-shared/remote-msg runtime data))))

;;       (.connect "connection_closed"
;;                 (fn [e]
;;                   (cljs-shared/remote-close runtime e)))

;;       (.connect "connection_error"
;;                 (fn [e]
;;                   (cljs-shared/remote-error runtime e)))

;;       (.connect "connection_established"
;;                 (fn [p]
;;                   (cljs-shared/remote-open runtime p)))

;;       (.connect_to_url ws-url)

;;       (loop [_ (.poll socket)]
;;         (recur (.poll socket))))))

(defn start
  [runtime]
  (let [client (GodotRepl. runtime)
        root-node (.get_root (js/godot.Engine.get_main_loop))]
    (.add_child root-node client)
    client))

(defn send
  [socket msg]
  (.put_var (.get_peer socket 1) msg))

(defn stop
  [socket]
  (let [root-node (.get_root (js/godot.Engine.get_main_loop))]
    (.remove_child root-node socket)))

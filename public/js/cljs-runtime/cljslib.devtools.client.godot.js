import "./cljs_env.js";
goog.provide('cljslib.devtools.client.godot');
cljslib.devtools.client.godot.GodotRepl = class cljslib$devtools$client$godot$GodotRepl extends godot.Node {
  constructor(G__26440) {
var runtime_26442__$1 = G__26440;
super();
var self__ = this;

(self__.runtime = runtime_26442__$1);
  }
};
(cljslib.devtools.client.godot.GodotRepl.prototype._ready = (function (){
var self__ = this;
var this$ = this;
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var runtime__$1 = this$.runtime;
var socket__$1 = (new godot.WebSocketClient());
var G__26441_26443 = socket__$1;
G__26441_26443.connect("data_received",(function (){
var data = socket__$1.get_peer((1)).get_var();
return shadow.cljs.devtools.client.shared.remote_msg(runtime__$1,data);
}));

G__26441_26443.connect("connection_closed",(function (e){
return shadow.cljs.devtools.client.shared.remote_close(runtime__$1,e);
}));

G__26441_26443.connect("connection_error",(function (e){
return shadow.cljs.devtools.client.shared.remote_error(runtime__$1,e);
}));

G__26441_26443.connect("connection_established",(function (p){
return shadow.cljs.devtools.client.shared.remote_open(runtime__$1,p);
}));

G__26441_26443.connect_to_url(ws_url);


return (this$.socket = socket__$1);
}));

(cljslib.devtools.client.godot.GodotRepl.prototype._process = (function (){
var self__ = this;
var this$ = this;
return this$.socket.poll();
}));
cljslib.devtools.client.godot.start = (function cljslib$devtools$client$godot$start(runtime){
var client = (new cljslib.devtools.client.godot.GodotRepl(runtime));
var root_node = godot.Engine.get_main_loop().get_root();
root_node.add_child(client);

return client;
});
cljslib.devtools.client.godot.send = (function cljslib$devtools$client$godot$send(socket,msg){
return socket.get_peer((1)).put_var(msg);
});
cljslib.devtools.client.godot.stop = (function cljslib$devtools$client$godot$stop(socket){
var root_node = godot.Engine.get_main_loop().get_root();
return root_node.remove_child(socket);
});

//# sourceMappingURL=cljslib.devtools.client.godot.js.map

import "./cljs_env.js";
goog.provide('cljslib.hello');
cljslib.hello.v2 = (function cljslib$hello$v2(x,y){
return (new godot.Vector2(x,y));
});
cljslib.hello.v3 = (function cljslib$hello$v3(x,y,z){
return (new godot.Vector3(x,y,z));
});
cljslib.hello.hello = (function cljslib$hello$hello(obj){
return console.log("Hello there",(function (){var obj26468 = obj;
var k26469 = "msg";
if((function (){var obj26470 = obj26468;
return (((!((obj26470 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k26469,obj26470)));
})()){
return (obj26468[k26469]);
} else {
return undefined;
}
})());
});
cljslib.hello.print_random_vector = (function cljslib$hello$print_random_vector(){
return console.log((new godot.Vector2((1),(2))));
});

//# sourceMappingURL=cljslib.hello.js.map

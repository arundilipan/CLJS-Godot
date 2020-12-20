import "./cljs_env.js";
goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34420 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34420(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34421 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34421(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32958 = coll;
var G__32959 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32958,G__32959) : shadow.dom.lazy_native_coll_seq.call(null,G__32958,G__32959));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33039 = arguments.length;
switch (G__33039) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33051 = arguments.length;
switch (G__33051) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33064 = arguments.length;
switch (G__33064) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33077 = arguments.length;
switch (G__33077) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33089 = arguments.length;
switch (G__33089) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33113 = arguments.length;
switch (G__33113) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33129){if((e33129 instanceof Object)){
var e = e33129;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33129;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33141 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33142 = null;
var count__33143 = (0);
var i__33144 = (0);
while(true){
if((i__33144 < count__33143)){
var el = chunk__33142.cljs$core$IIndexed$_nth$arity$2(null,i__33144);
var handler_34437__$1 = ((function (seq__33141,chunk__33142,count__33143,i__33144,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33141,chunk__33142,count__33143,i__33144,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34437__$1);


var G__34438 = seq__33141;
var G__34439 = chunk__33142;
var G__34440 = count__33143;
var G__34441 = (i__33144 + (1));
seq__33141 = G__34438;
chunk__33142 = G__34439;
count__33143 = G__34440;
i__33144 = G__34441;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33141);
if(temp__5735__auto__){
var seq__33141__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33141__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33141__$1);
var G__34442 = cljs.core.chunk_rest(seq__33141__$1);
var G__34443 = c__4556__auto__;
var G__34444 = cljs.core.count(c__4556__auto__);
var G__34445 = (0);
seq__33141 = G__34442;
chunk__33142 = G__34443;
count__33143 = G__34444;
i__33144 = G__34445;
continue;
} else {
var el = cljs.core.first(seq__33141__$1);
var handler_34446__$1 = ((function (seq__33141,chunk__33142,count__33143,i__33144,el,seq__33141__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33141,chunk__33142,count__33143,i__33144,el,seq__33141__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34446__$1);


var G__34447 = cljs.core.next(seq__33141__$1);
var G__34448 = null;
var G__34449 = (0);
var G__34450 = (0);
seq__33141 = G__34447;
chunk__33142 = G__34448;
count__33143 = G__34449;
i__33144 = G__34450;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33164 = arguments.length;
switch (G__33164) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33186 = cljs.core.seq(events);
var chunk__33187 = null;
var count__33188 = (0);
var i__33189 = (0);
while(true){
if((i__33189 < count__33188)){
var vec__33206 = chunk__33187.cljs$core$IIndexed$_nth$arity$2(null,i__33189);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33206,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34454 = seq__33186;
var G__34455 = chunk__33187;
var G__34456 = count__33188;
var G__34457 = (i__33189 + (1));
seq__33186 = G__34454;
chunk__33187 = G__34455;
count__33188 = G__34456;
i__33189 = G__34457;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33186);
if(temp__5735__auto__){
var seq__33186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33186__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33186__$1);
var G__34458 = cljs.core.chunk_rest(seq__33186__$1);
var G__34459 = c__4556__auto__;
var G__34460 = cljs.core.count(c__4556__auto__);
var G__34461 = (0);
seq__33186 = G__34458;
chunk__33187 = G__34459;
count__33188 = G__34460;
i__33189 = G__34461;
continue;
} else {
var vec__33214 = cljs.core.first(seq__33186__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33214,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33214,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34462 = cljs.core.next(seq__33186__$1);
var G__34463 = null;
var G__34464 = (0);
var G__34465 = (0);
seq__33186 = G__34462;
chunk__33187 = G__34463;
count__33188 = G__34464;
i__33189 = G__34465;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33220 = cljs.core.seq(styles);
var chunk__33221 = null;
var count__33222 = (0);
var i__33223 = (0);
while(true){
if((i__33223 < count__33222)){
var vec__33238 = chunk__33221.cljs$core$IIndexed$_nth$arity$2(null,i__33223);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33238,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34466 = seq__33220;
var G__34467 = chunk__33221;
var G__34468 = count__33222;
var G__34469 = (i__33223 + (1));
seq__33220 = G__34466;
chunk__33221 = G__34467;
count__33222 = G__34468;
i__33223 = G__34469;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33220);
if(temp__5735__auto__){
var seq__33220__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33220__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33220__$1);
var G__34470 = cljs.core.chunk_rest(seq__33220__$1);
var G__34471 = c__4556__auto__;
var G__34472 = cljs.core.count(c__4556__auto__);
var G__34473 = (0);
seq__33220 = G__34470;
chunk__33221 = G__34471;
count__33222 = G__34472;
i__33223 = G__34473;
continue;
} else {
var vec__33242 = cljs.core.first(seq__33220__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33242,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34474 = cljs.core.next(seq__33220__$1);
var G__34475 = null;
var G__34476 = (0);
var G__34477 = (0);
seq__33220 = G__34474;
chunk__33221 = G__34475;
count__33222 = G__34476;
i__33223 = G__34477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33250_34478 = key;
var G__33250_34479__$1 = (((G__33250_34478 instanceof cljs.core.Keyword))?G__33250_34478.fqn:null);
switch (G__33250_34479__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34483 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34483,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34483,"aria-");
}
})())){
el.setAttribute(ks_34483,value);
} else {
(el[ks_34483] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33314){
var map__33317 = p__33314;
var map__33317__$1 = (((((!((map__33317 == null))))?(((((map__33317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33317):map__33317);
var props = map__33317__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33317__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33323 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33331 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33331,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33331;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33342 = arguments.length;
switch (G__33342) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33376){
var vec__33379 = p__33376;
var seq__33380 = cljs.core.seq(vec__33379);
var first__33381 = cljs.core.first(seq__33380);
var seq__33380__$1 = cljs.core.next(seq__33380);
var nn = first__33381;
var first__33381__$1 = cljs.core.first(seq__33380__$1);
var seq__33380__$2 = cljs.core.next(seq__33380__$1);
var np = first__33381__$1;
var nc = seq__33380__$2;
var node = vec__33379;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33391 = nn;
var G__33392 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33391,G__33392) : create_fn.call(null,G__33391,G__33392));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33399 = nn;
var G__33400 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33399,G__33400) : create_fn.call(null,G__33399,G__33400));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33427 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33427,(1),null);
var seq__33431_34490 = cljs.core.seq(node_children);
var chunk__33432_34491 = null;
var count__33433_34492 = (0);
var i__33434_34493 = (0);
while(true){
if((i__33434_34493 < count__33433_34492)){
var child_struct_34494 = chunk__33432_34491.cljs$core$IIndexed$_nth$arity$2(null,i__33434_34493);
var children_34495 = shadow.dom.dom_node(child_struct_34494);
if(cljs.core.seq_QMARK_(children_34495)){
var seq__33525_34496 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34495));
var chunk__33527_34497 = null;
var count__33528_34498 = (0);
var i__33529_34499 = (0);
while(true){
if((i__33529_34499 < count__33528_34498)){
var child_34500 = chunk__33527_34497.cljs$core$IIndexed$_nth$arity$2(null,i__33529_34499);
if(cljs.core.truth_(child_34500)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34500);


var G__34503 = seq__33525_34496;
var G__34504 = chunk__33527_34497;
var G__34505 = count__33528_34498;
var G__34506 = (i__33529_34499 + (1));
seq__33525_34496 = G__34503;
chunk__33527_34497 = G__34504;
count__33528_34498 = G__34505;
i__33529_34499 = G__34506;
continue;
} else {
var G__34508 = seq__33525_34496;
var G__34509 = chunk__33527_34497;
var G__34510 = count__33528_34498;
var G__34511 = (i__33529_34499 + (1));
seq__33525_34496 = G__34508;
chunk__33527_34497 = G__34509;
count__33528_34498 = G__34510;
i__33529_34499 = G__34511;
continue;
}
} else {
var temp__5735__auto___34513 = cljs.core.seq(seq__33525_34496);
if(temp__5735__auto___34513){
var seq__33525_34514__$1 = temp__5735__auto___34513;
if(cljs.core.chunked_seq_QMARK_(seq__33525_34514__$1)){
var c__4556__auto___34515 = cljs.core.chunk_first(seq__33525_34514__$1);
var G__34516 = cljs.core.chunk_rest(seq__33525_34514__$1);
var G__34517 = c__4556__auto___34515;
var G__34518 = cljs.core.count(c__4556__auto___34515);
var G__34519 = (0);
seq__33525_34496 = G__34516;
chunk__33527_34497 = G__34517;
count__33528_34498 = G__34518;
i__33529_34499 = G__34519;
continue;
} else {
var child_34520 = cljs.core.first(seq__33525_34514__$1);
if(cljs.core.truth_(child_34520)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34520);


var G__34521 = cljs.core.next(seq__33525_34514__$1);
var G__34522 = null;
var G__34523 = (0);
var G__34524 = (0);
seq__33525_34496 = G__34521;
chunk__33527_34497 = G__34522;
count__33528_34498 = G__34523;
i__33529_34499 = G__34524;
continue;
} else {
var G__34525 = cljs.core.next(seq__33525_34514__$1);
var G__34526 = null;
var G__34527 = (0);
var G__34528 = (0);
seq__33525_34496 = G__34525;
chunk__33527_34497 = G__34526;
count__33528_34498 = G__34527;
i__33529_34499 = G__34528;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34495);
}


var G__34529 = seq__33431_34490;
var G__34530 = chunk__33432_34491;
var G__34531 = count__33433_34492;
var G__34532 = (i__33434_34493 + (1));
seq__33431_34490 = G__34529;
chunk__33432_34491 = G__34530;
count__33433_34492 = G__34531;
i__33434_34493 = G__34532;
continue;
} else {
var temp__5735__auto___34533 = cljs.core.seq(seq__33431_34490);
if(temp__5735__auto___34533){
var seq__33431_34535__$1 = temp__5735__auto___34533;
if(cljs.core.chunked_seq_QMARK_(seq__33431_34535__$1)){
var c__4556__auto___34537 = cljs.core.chunk_first(seq__33431_34535__$1);
var G__34539 = cljs.core.chunk_rest(seq__33431_34535__$1);
var G__34540 = c__4556__auto___34537;
var G__34541 = cljs.core.count(c__4556__auto___34537);
var G__34542 = (0);
seq__33431_34490 = G__34539;
chunk__33432_34491 = G__34540;
count__33433_34492 = G__34541;
i__33434_34493 = G__34542;
continue;
} else {
var child_struct_34543 = cljs.core.first(seq__33431_34535__$1);
var children_34544 = shadow.dom.dom_node(child_struct_34543);
if(cljs.core.seq_QMARK_(children_34544)){
var seq__33562_34545 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34544));
var chunk__33564_34546 = null;
var count__33565_34547 = (0);
var i__33566_34548 = (0);
while(true){
if((i__33566_34548 < count__33565_34547)){
var child_34549 = chunk__33564_34546.cljs$core$IIndexed$_nth$arity$2(null,i__33566_34548);
if(cljs.core.truth_(child_34549)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34549);


var G__34550 = seq__33562_34545;
var G__34551 = chunk__33564_34546;
var G__34552 = count__33565_34547;
var G__34553 = (i__33566_34548 + (1));
seq__33562_34545 = G__34550;
chunk__33564_34546 = G__34551;
count__33565_34547 = G__34552;
i__33566_34548 = G__34553;
continue;
} else {
var G__34554 = seq__33562_34545;
var G__34555 = chunk__33564_34546;
var G__34556 = count__33565_34547;
var G__34557 = (i__33566_34548 + (1));
seq__33562_34545 = G__34554;
chunk__33564_34546 = G__34555;
count__33565_34547 = G__34556;
i__33566_34548 = G__34557;
continue;
}
} else {
var temp__5735__auto___34559__$1 = cljs.core.seq(seq__33562_34545);
if(temp__5735__auto___34559__$1){
var seq__33562_34561__$1 = temp__5735__auto___34559__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33562_34561__$1)){
var c__4556__auto___34562 = cljs.core.chunk_first(seq__33562_34561__$1);
var G__34564 = cljs.core.chunk_rest(seq__33562_34561__$1);
var G__34565 = c__4556__auto___34562;
var G__34566 = cljs.core.count(c__4556__auto___34562);
var G__34567 = (0);
seq__33562_34545 = G__34564;
chunk__33564_34546 = G__34565;
count__33565_34547 = G__34566;
i__33566_34548 = G__34567;
continue;
} else {
var child_34569 = cljs.core.first(seq__33562_34561__$1);
if(cljs.core.truth_(child_34569)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34569);


var G__34570 = cljs.core.next(seq__33562_34561__$1);
var G__34571 = null;
var G__34572 = (0);
var G__34573 = (0);
seq__33562_34545 = G__34570;
chunk__33564_34546 = G__34571;
count__33565_34547 = G__34572;
i__33566_34548 = G__34573;
continue;
} else {
var G__34574 = cljs.core.next(seq__33562_34561__$1);
var G__34575 = null;
var G__34576 = (0);
var G__34577 = (0);
seq__33562_34545 = G__34574;
chunk__33564_34546 = G__34575;
count__33565_34547 = G__34576;
i__33566_34548 = G__34577;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34544);
}


var G__34578 = cljs.core.next(seq__33431_34535__$1);
var G__34579 = null;
var G__34580 = (0);
var G__34581 = (0);
seq__33431_34490 = G__34578;
chunk__33432_34491 = G__34579;
count__33433_34492 = G__34580;
i__33434_34493 = G__34581;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33639 = cljs.core.seq(node);
var chunk__33640 = null;
var count__33641 = (0);
var i__33642 = (0);
while(true){
if((i__33642 < count__33641)){
var n = chunk__33640.cljs$core$IIndexed$_nth$arity$2(null,i__33642);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34582 = seq__33639;
var G__34583 = chunk__33640;
var G__34584 = count__33641;
var G__34585 = (i__33642 + (1));
seq__33639 = G__34582;
chunk__33640 = G__34583;
count__33641 = G__34584;
i__33642 = G__34585;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33639);
if(temp__5735__auto__){
var seq__33639__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33639__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33639__$1);
var G__34586 = cljs.core.chunk_rest(seq__33639__$1);
var G__34587 = c__4556__auto__;
var G__34588 = cljs.core.count(c__4556__auto__);
var G__34589 = (0);
seq__33639 = G__34586;
chunk__33640 = G__34587;
count__33641 = G__34588;
i__33642 = G__34589;
continue;
} else {
var n = cljs.core.first(seq__33639__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34590 = cljs.core.next(seq__33639__$1);
var G__34591 = null;
var G__34592 = (0);
var G__34593 = (0);
seq__33639 = G__34590;
chunk__33640 = G__34591;
count__33641 = G__34592;
i__33642 = G__34593;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33657 = arguments.length;
switch (G__33657) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33678 = arguments.length;
switch (G__33678) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33700 = arguments.length;
switch (G__33700) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34607 = arguments.length;
var i__4737__auto___34608 = (0);
while(true){
if((i__4737__auto___34608 < len__4736__auto___34607)){
args__4742__auto__.push((arguments[i__4737__auto___34608]));

var G__34609 = (i__4737__auto___34608 + (1));
i__4737__auto___34608 = G__34609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33733_34610 = cljs.core.seq(nodes);
var chunk__33734_34611 = null;
var count__33735_34612 = (0);
var i__33736_34613 = (0);
while(true){
if((i__33736_34613 < count__33735_34612)){
var node_34614 = chunk__33734_34611.cljs$core$IIndexed$_nth$arity$2(null,i__33736_34613);
fragment.appendChild(shadow.dom._to_dom(node_34614));


var G__34615 = seq__33733_34610;
var G__34616 = chunk__33734_34611;
var G__34617 = count__33735_34612;
var G__34618 = (i__33736_34613 + (1));
seq__33733_34610 = G__34615;
chunk__33734_34611 = G__34616;
count__33735_34612 = G__34617;
i__33736_34613 = G__34618;
continue;
} else {
var temp__5735__auto___34619 = cljs.core.seq(seq__33733_34610);
if(temp__5735__auto___34619){
var seq__33733_34621__$1 = temp__5735__auto___34619;
if(cljs.core.chunked_seq_QMARK_(seq__33733_34621__$1)){
var c__4556__auto___34622 = cljs.core.chunk_first(seq__33733_34621__$1);
var G__34623 = cljs.core.chunk_rest(seq__33733_34621__$1);
var G__34624 = c__4556__auto___34622;
var G__34625 = cljs.core.count(c__4556__auto___34622);
var G__34626 = (0);
seq__33733_34610 = G__34623;
chunk__33734_34611 = G__34624;
count__33735_34612 = G__34625;
i__33736_34613 = G__34626;
continue;
} else {
var node_34631 = cljs.core.first(seq__33733_34621__$1);
fragment.appendChild(shadow.dom._to_dom(node_34631));


var G__34632 = cljs.core.next(seq__33733_34621__$1);
var G__34633 = null;
var G__34634 = (0);
var G__34635 = (0);
seq__33733_34610 = G__34632;
chunk__33734_34611 = G__34633;
count__33735_34612 = G__34634;
i__33736_34613 = G__34635;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33728){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33728));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33763_34637 = cljs.core.seq(scripts);
var chunk__33764_34638 = null;
var count__33765_34639 = (0);
var i__33766_34640 = (0);
while(true){
if((i__33766_34640 < count__33765_34639)){
var vec__33787_34641 = chunk__33764_34638.cljs$core$IIndexed$_nth$arity$2(null,i__33766_34640);
var script_tag_34642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787_34641,(0),null);
var script_body_34643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787_34641,(1),null);
eval(script_body_34643);


var G__34644 = seq__33763_34637;
var G__34645 = chunk__33764_34638;
var G__34646 = count__33765_34639;
var G__34647 = (i__33766_34640 + (1));
seq__33763_34637 = G__34644;
chunk__33764_34638 = G__34645;
count__33765_34639 = G__34646;
i__33766_34640 = G__34647;
continue;
} else {
var temp__5735__auto___34648 = cljs.core.seq(seq__33763_34637);
if(temp__5735__auto___34648){
var seq__33763_34649__$1 = temp__5735__auto___34648;
if(cljs.core.chunked_seq_QMARK_(seq__33763_34649__$1)){
var c__4556__auto___34650 = cljs.core.chunk_first(seq__33763_34649__$1);
var G__34651 = cljs.core.chunk_rest(seq__33763_34649__$1);
var G__34652 = c__4556__auto___34650;
var G__34653 = cljs.core.count(c__4556__auto___34650);
var G__34654 = (0);
seq__33763_34637 = G__34651;
chunk__33764_34638 = G__34652;
count__33765_34639 = G__34653;
i__33766_34640 = G__34654;
continue;
} else {
var vec__33794_34656 = cljs.core.first(seq__33763_34649__$1);
var script_tag_34657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33794_34656,(0),null);
var script_body_34658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33794_34656,(1),null);
eval(script_body_34658);


var G__34659 = cljs.core.next(seq__33763_34649__$1);
var G__34660 = null;
var G__34661 = (0);
var G__34662 = (0);
seq__33763_34637 = G__34659;
chunk__33764_34638 = G__34660;
count__33765_34639 = G__34661;
i__33766_34640 = G__34662;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33798){
var vec__33803 = p__33798;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33833 = arguments.length;
switch (G__33833) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33888 = cljs.core.seq(style_keys);
var chunk__33889 = null;
var count__33890 = (0);
var i__33891 = (0);
while(true){
if((i__33891 < count__33890)){
var it = chunk__33889.cljs$core$IIndexed$_nth$arity$2(null,i__33891);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34672 = seq__33888;
var G__34673 = chunk__33889;
var G__34674 = count__33890;
var G__34675 = (i__33891 + (1));
seq__33888 = G__34672;
chunk__33889 = G__34673;
count__33890 = G__34674;
i__33891 = G__34675;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33888);
if(temp__5735__auto__){
var seq__33888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33888__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33888__$1);
var G__34677 = cljs.core.chunk_rest(seq__33888__$1);
var G__34678 = c__4556__auto__;
var G__34679 = cljs.core.count(c__4556__auto__);
var G__34680 = (0);
seq__33888 = G__34677;
chunk__33889 = G__34678;
count__33890 = G__34679;
i__33891 = G__34680;
continue;
} else {
var it = cljs.core.first(seq__33888__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34683 = cljs.core.next(seq__33888__$1);
var G__34684 = null;
var G__34685 = (0);
var G__34686 = (0);
seq__33888 = G__34683;
chunk__33889 = G__34684;
count__33890 = G__34685;
i__33891 = G__34686;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33905,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33938 = k33905;
var G__33938__$1 = (((G__33938 instanceof cljs.core.Keyword))?G__33938.fqn:null);
switch (G__33938__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33905,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33953){
var vec__33958 = p__33953;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33958,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33904){
var self__ = this;
var G__33904__$1 = this;
return (new cljs.core.RecordIter((0),G__33904__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33906,other33907){
var self__ = this;
var this33906__$1 = this;
return (((!((other33907 == null)))) && ((this33906__$1.constructor === other33907.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33906__$1.x,other33907.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33906__$1.y,other33907.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33906__$1.__extmap,other33907.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33904){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33986 = cljs.core.keyword_identical_QMARK_;
var expr__33987 = k__4388__auto__;
if(cljs.core.truth_((pred__33986.cljs$core$IFn$_invoke$arity$2 ? pred__33986.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33987) : pred__33986.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33987)))){
return (new shadow.dom.Coordinate(G__33904,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33986.cljs$core$IFn$_invoke$arity$2 ? pred__33986.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33987) : pred__33986.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33987)))){
return (new shadow.dom.Coordinate(self__.x,G__33904,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33904),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33904){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33904,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33914){
var extmap__4419__auto__ = (function (){var G__34007 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33914,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33914)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34007);
} else {
return G__34007;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33914),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33914),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34024,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34040 = k34024;
var G__34040__$1 = (((G__34040 instanceof cljs.core.Keyword))?G__34040.fqn:null);
switch (G__34040__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34024,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34048){
var vec__34050 = p__34048;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34050,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34050,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34023){
var self__ = this;
var G__34023__$1 = this;
return (new cljs.core.RecordIter((0),G__34023__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34025,other34026){
var self__ = this;
var this34025__$1 = this;
return (((!((other34026 == null)))) && ((this34025__$1.constructor === other34026.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34025__$1.w,other34026.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34025__$1.h,other34026.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34025__$1.__extmap,other34026.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34023){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34088 = cljs.core.keyword_identical_QMARK_;
var expr__34089 = k__4388__auto__;
if(cljs.core.truth_((pred__34088.cljs$core$IFn$_invoke$arity$2 ? pred__34088.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34089) : pred__34088.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34089)))){
return (new shadow.dom.Size(G__34023,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34088.cljs$core$IFn$_invoke$arity$2 ? pred__34088.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34089) : pred__34088.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34089)))){
return (new shadow.dom.Size(self__.w,G__34023,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34023),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34023){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34023,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34032){
var extmap__4419__auto__ = (function (){var G__34116 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34032,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34032)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34116);
} else {
return G__34116;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34032),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34032),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34769 = (i + (1));
var G__34770 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34769;
ret = G__34770;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34161){
var vec__34162 = p__34161;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34176 = arguments.length;
switch (G__34176) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34781 = ps;
var G__34782 = (i + (1));
el__$1 = G__34781;
i = G__34782;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34215 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34215,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34215,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34215,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34219_34790 = cljs.core.seq(props);
var chunk__34220_34791 = null;
var count__34221_34792 = (0);
var i__34222_34793 = (0);
while(true){
if((i__34222_34793 < count__34221_34792)){
var vec__34255_34794 = chunk__34220_34791.cljs$core$IIndexed$_nth$arity$2(null,i__34222_34793);
var k_34795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34255_34794,(0),null);
var v_34796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34255_34794,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34795);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34795),v_34796);


var G__34798 = seq__34219_34790;
var G__34799 = chunk__34220_34791;
var G__34800 = count__34221_34792;
var G__34801 = (i__34222_34793 + (1));
seq__34219_34790 = G__34798;
chunk__34220_34791 = G__34799;
count__34221_34792 = G__34800;
i__34222_34793 = G__34801;
continue;
} else {
var temp__5735__auto___34802 = cljs.core.seq(seq__34219_34790);
if(temp__5735__auto___34802){
var seq__34219_34803__$1 = temp__5735__auto___34802;
if(cljs.core.chunked_seq_QMARK_(seq__34219_34803__$1)){
var c__4556__auto___34804 = cljs.core.chunk_first(seq__34219_34803__$1);
var G__34805 = cljs.core.chunk_rest(seq__34219_34803__$1);
var G__34806 = c__4556__auto___34804;
var G__34807 = cljs.core.count(c__4556__auto___34804);
var G__34808 = (0);
seq__34219_34790 = G__34805;
chunk__34220_34791 = G__34806;
count__34221_34792 = G__34807;
i__34222_34793 = G__34808;
continue;
} else {
var vec__34259_34809 = cljs.core.first(seq__34219_34803__$1);
var k_34810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34259_34809,(0),null);
var v_34811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34259_34809,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34810);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34810),v_34811);


var G__34812 = cljs.core.next(seq__34219_34803__$1);
var G__34813 = null;
var G__34814 = (0);
var G__34815 = (0);
seq__34219_34790 = G__34812;
chunk__34220_34791 = G__34813;
count__34221_34792 = G__34814;
i__34222_34793 = G__34815;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34274 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34274,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34274,(1),null);
var seq__34279_34819 = cljs.core.seq(node_children);
var chunk__34281_34820 = null;
var count__34282_34821 = (0);
var i__34283_34822 = (0);
while(true){
if((i__34283_34822 < count__34282_34821)){
var child_struct_34823 = chunk__34281_34820.cljs$core$IIndexed$_nth$arity$2(null,i__34283_34822);
if((!((child_struct_34823 == null)))){
if(typeof child_struct_34823 === 'string'){
var text_34824 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34824),child_struct_34823].join(''));
} else {
var children_34825 = shadow.dom.svg_node(child_struct_34823);
if(cljs.core.seq_QMARK_(children_34825)){
var seq__34322_34827 = cljs.core.seq(children_34825);
var chunk__34324_34828 = null;
var count__34325_34829 = (0);
var i__34326_34830 = (0);
while(true){
if((i__34326_34830 < count__34325_34829)){
var child_34833 = chunk__34324_34828.cljs$core$IIndexed$_nth$arity$2(null,i__34326_34830);
if(cljs.core.truth_(child_34833)){
node.appendChild(child_34833);


var G__34834 = seq__34322_34827;
var G__34835 = chunk__34324_34828;
var G__34836 = count__34325_34829;
var G__34837 = (i__34326_34830 + (1));
seq__34322_34827 = G__34834;
chunk__34324_34828 = G__34835;
count__34325_34829 = G__34836;
i__34326_34830 = G__34837;
continue;
} else {
var G__34838 = seq__34322_34827;
var G__34839 = chunk__34324_34828;
var G__34840 = count__34325_34829;
var G__34841 = (i__34326_34830 + (1));
seq__34322_34827 = G__34838;
chunk__34324_34828 = G__34839;
count__34325_34829 = G__34840;
i__34326_34830 = G__34841;
continue;
}
} else {
var temp__5735__auto___34842 = cljs.core.seq(seq__34322_34827);
if(temp__5735__auto___34842){
var seq__34322_34843__$1 = temp__5735__auto___34842;
if(cljs.core.chunked_seq_QMARK_(seq__34322_34843__$1)){
var c__4556__auto___34844 = cljs.core.chunk_first(seq__34322_34843__$1);
var G__34845 = cljs.core.chunk_rest(seq__34322_34843__$1);
var G__34846 = c__4556__auto___34844;
var G__34847 = cljs.core.count(c__4556__auto___34844);
var G__34848 = (0);
seq__34322_34827 = G__34845;
chunk__34324_34828 = G__34846;
count__34325_34829 = G__34847;
i__34326_34830 = G__34848;
continue;
} else {
var child_34850 = cljs.core.first(seq__34322_34843__$1);
if(cljs.core.truth_(child_34850)){
node.appendChild(child_34850);


var G__34851 = cljs.core.next(seq__34322_34843__$1);
var G__34852 = null;
var G__34853 = (0);
var G__34854 = (0);
seq__34322_34827 = G__34851;
chunk__34324_34828 = G__34852;
count__34325_34829 = G__34853;
i__34326_34830 = G__34854;
continue;
} else {
var G__34855 = cljs.core.next(seq__34322_34843__$1);
var G__34856 = null;
var G__34857 = (0);
var G__34858 = (0);
seq__34322_34827 = G__34855;
chunk__34324_34828 = G__34856;
count__34325_34829 = G__34857;
i__34326_34830 = G__34858;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34825);
}
}


var G__34859 = seq__34279_34819;
var G__34860 = chunk__34281_34820;
var G__34861 = count__34282_34821;
var G__34862 = (i__34283_34822 + (1));
seq__34279_34819 = G__34859;
chunk__34281_34820 = G__34860;
count__34282_34821 = G__34861;
i__34283_34822 = G__34862;
continue;
} else {
var G__34863 = seq__34279_34819;
var G__34864 = chunk__34281_34820;
var G__34865 = count__34282_34821;
var G__34866 = (i__34283_34822 + (1));
seq__34279_34819 = G__34863;
chunk__34281_34820 = G__34864;
count__34282_34821 = G__34865;
i__34283_34822 = G__34866;
continue;
}
} else {
var temp__5735__auto___34868 = cljs.core.seq(seq__34279_34819);
if(temp__5735__auto___34868){
var seq__34279_34869__$1 = temp__5735__auto___34868;
if(cljs.core.chunked_seq_QMARK_(seq__34279_34869__$1)){
var c__4556__auto___34871 = cljs.core.chunk_first(seq__34279_34869__$1);
var G__34872 = cljs.core.chunk_rest(seq__34279_34869__$1);
var G__34873 = c__4556__auto___34871;
var G__34874 = cljs.core.count(c__4556__auto___34871);
var G__34875 = (0);
seq__34279_34819 = G__34872;
chunk__34281_34820 = G__34873;
count__34282_34821 = G__34874;
i__34283_34822 = G__34875;
continue;
} else {
var child_struct_34876 = cljs.core.first(seq__34279_34869__$1);
if((!((child_struct_34876 == null)))){
if(typeof child_struct_34876 === 'string'){
var text_34877 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34877),child_struct_34876].join(''));
} else {
var children_34878 = shadow.dom.svg_node(child_struct_34876);
if(cljs.core.seq_QMARK_(children_34878)){
var seq__34354_34879 = cljs.core.seq(children_34878);
var chunk__34356_34880 = null;
var count__34357_34881 = (0);
var i__34358_34882 = (0);
while(true){
if((i__34358_34882 < count__34357_34881)){
var child_34883 = chunk__34356_34880.cljs$core$IIndexed$_nth$arity$2(null,i__34358_34882);
if(cljs.core.truth_(child_34883)){
node.appendChild(child_34883);


var G__34884 = seq__34354_34879;
var G__34885 = chunk__34356_34880;
var G__34886 = count__34357_34881;
var G__34887 = (i__34358_34882 + (1));
seq__34354_34879 = G__34884;
chunk__34356_34880 = G__34885;
count__34357_34881 = G__34886;
i__34358_34882 = G__34887;
continue;
} else {
var G__34888 = seq__34354_34879;
var G__34889 = chunk__34356_34880;
var G__34890 = count__34357_34881;
var G__34891 = (i__34358_34882 + (1));
seq__34354_34879 = G__34888;
chunk__34356_34880 = G__34889;
count__34357_34881 = G__34890;
i__34358_34882 = G__34891;
continue;
}
} else {
var temp__5735__auto___34892__$1 = cljs.core.seq(seq__34354_34879);
if(temp__5735__auto___34892__$1){
var seq__34354_34893__$1 = temp__5735__auto___34892__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34354_34893__$1)){
var c__4556__auto___34894 = cljs.core.chunk_first(seq__34354_34893__$1);
var G__34895 = cljs.core.chunk_rest(seq__34354_34893__$1);
var G__34896 = c__4556__auto___34894;
var G__34897 = cljs.core.count(c__4556__auto___34894);
var G__34898 = (0);
seq__34354_34879 = G__34895;
chunk__34356_34880 = G__34896;
count__34357_34881 = G__34897;
i__34358_34882 = G__34898;
continue;
} else {
var child_34899 = cljs.core.first(seq__34354_34893__$1);
if(cljs.core.truth_(child_34899)){
node.appendChild(child_34899);


var G__34900 = cljs.core.next(seq__34354_34893__$1);
var G__34901 = null;
var G__34902 = (0);
var G__34903 = (0);
seq__34354_34879 = G__34900;
chunk__34356_34880 = G__34901;
count__34357_34881 = G__34902;
i__34358_34882 = G__34903;
continue;
} else {
var G__34904 = cljs.core.next(seq__34354_34893__$1);
var G__34905 = null;
var G__34906 = (0);
var G__34907 = (0);
seq__34354_34879 = G__34904;
chunk__34356_34880 = G__34905;
count__34357_34881 = G__34906;
i__34358_34882 = G__34907;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34878);
}
}


var G__34908 = cljs.core.next(seq__34279_34869__$1);
var G__34909 = null;
var G__34910 = (0);
var G__34911 = (0);
seq__34279_34819 = G__34908;
chunk__34281_34820 = G__34909;
count__34282_34821 = G__34910;
i__34283_34822 = G__34911;
continue;
} else {
var G__34912 = cljs.core.next(seq__34279_34869__$1);
var G__34913 = null;
var G__34914 = (0);
var G__34915 = (0);
seq__34279_34819 = G__34912;
chunk__34281_34820 = G__34913;
count__34282_34821 = G__34914;
i__34283_34822 = G__34915;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34919 = arguments.length;
var i__4737__auto___34920 = (0);
while(true){
if((i__4737__auto___34920 < len__4736__auto___34919)){
args__4742__auto__.push((arguments[i__4737__auto___34920]));

var G__34921 = (i__4737__auto___34920 + (1));
i__4737__auto___34920 = G__34921;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34368){
var G__34369 = cljs.core.first(seq34368);
var seq34368__$1 = cljs.core.next(seq34368);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34369,seq34368__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34379 = arguments.length;
switch (G__34379) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__28780__auto___34928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_34392){
var state_val_34393 = (state_34392[(1)]);
if((state_val_34393 === (1))){
var state_34392__$1 = state_34392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34392__$1,(2),once_or_cleanup);
} else {
if((state_val_34393 === (2))){
var inst_34389 = (state_34392[(2)]);
var inst_34390 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34392__$1 = (function (){var statearr_34399 = state_34392;
(statearr_34399[(7)] = inst_34389);

return statearr_34399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34392__$1,inst_34390);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28286__auto__ = null;
var shadow$dom$state_machine__28286__auto____0 = (function (){
var statearr_34401 = [null,null,null,null,null,null,null,null];
(statearr_34401[(0)] = shadow$dom$state_machine__28286__auto__);

(statearr_34401[(1)] = (1));

return statearr_34401;
});
var shadow$dom$state_machine__28286__auto____1 = (function (state_34392){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_34392);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e34402){var ex__28289__auto__ = e34402;
var statearr_34404_34932 = state_34392;
(statearr_34404_34932[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_34392[(4)]))){
var statearr_34407_34933 = state_34392;
(statearr_34407_34933[(1)] = cljs.core.first((state_34392[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34934 = state_34392;
state_34392 = G__34934;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
shadow$dom$state_machine__28286__auto__ = function(state_34392){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28286__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28286__auto____1.call(this,state_34392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28286__auto____0;
shadow$dom$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28286__auto____1;
return shadow$dom$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_34410 = f__28781__auto__();
(statearr_34410[(6)] = c__28780__auto___34928);

return statearr_34410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

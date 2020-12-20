import "./cljs_env.js";
goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__28175,p__28176){
var map__28177 = p__28175;
var map__28177__$1 = (((((!((map__28177 == null))))?(((((map__28177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28177):map__28177);
var svc = map__28177__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28177__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28177__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28177__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28178 = p__28176;
var map__28178__$1 = (((((!((map__28178 == null))))?(((((map__28178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28178):map__28178);
var msg = map__28178__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28178__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28178__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28178__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28178__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__28191,p__28192){
var map__28193 = p__28191;
var map__28193__$1 = (((((!((map__28193 == null))))?(((((map__28193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28193):map__28193);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28193__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__28194 = p__28192;
var map__28194__$1 = (((((!((map__28194 == null))))?(((((map__28194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28194):map__28194);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28194__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__28199,p__28200){
var map__28201 = p__28199;
var map__28201__$1 = (((((!((map__28201 == null))))?(((((map__28201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28201):map__28201);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28201__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28201__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28202 = p__28200;
var map__28202__$1 = (((((!((map__28202 == null))))?(((((map__28202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28202):map__28202);
var msg = map__28202__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28202__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__28212,tid){
var map__28215 = p__28212;
var map__28215__$1 = (((((!((map__28215 == null))))?(((((map__28215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28215):map__28215);
var svc = map__28215__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28215__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__28224 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__28225 = null;
var count__28226 = (0);
var i__28227 = (0);
while(true){
if((i__28227 < count__28226)){
var vec__28240 = chunk__28225.cljs$core$IIndexed$_nth$arity$2(null,i__28227);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28240,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28240,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28277 = seq__28224;
var G__28278 = chunk__28225;
var G__28279 = count__28226;
var G__28280 = (i__28227 + (1));
seq__28224 = G__28277;
chunk__28225 = G__28278;
count__28226 = G__28279;
i__28227 = G__28280;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28224);
if(temp__5735__auto__){
var seq__28224__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28224__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28224__$1);
var G__28281 = cljs.core.chunk_rest(seq__28224__$1);
var G__28282 = c__4556__auto__;
var G__28283 = cljs.core.count(c__4556__auto__);
var G__28284 = (0);
seq__28224 = G__28281;
chunk__28225 = G__28282;
count__28226 = G__28283;
i__28227 = G__28284;
continue;
} else {
var vec__28244 = cljs.core.first(seq__28224__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28244,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28244,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__28285 = cljs.core.next(seq__28224__$1);
var G__28286 = null;
var G__28287 = (0);
var G__28288 = (0);
seq__28224 = G__28285;
chunk__28225 = G__28286;
count__28226 = G__28287;
i__28227 = G__28288;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__28217_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__28217_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__28218_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__28218_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__28219_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__28219_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__28220_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__28220_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__28251){
var map__28252 = p__28251;
var map__28252__$1 = (((((!((map__28252 == null))))?(((((map__28252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28252):map__28252);
var svc = map__28252__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

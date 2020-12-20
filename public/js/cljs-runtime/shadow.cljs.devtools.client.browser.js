import "./cljs_env.js";
goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35903 = arguments.length;
var i__4737__auto___35904 = (0);
while(true){
if((i__4737__auto___35904 < len__4736__auto___35903)){
args__4742__auto__.push((arguments[i__4737__auto___35904]));

var G__35905 = (i__4737__auto___35904 + (1));
i__4737__auto___35904 = G__35905;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35741){
var G__35743 = cljs.core.first(seq35741);
var seq35741__$1 = cljs.core.next(seq35741);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35743,seq35741__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35753 = cljs.core.seq(sources);
var chunk__35754 = null;
var count__35755 = (0);
var i__35756 = (0);
while(true){
if((i__35756 < count__35755)){
var map__35765 = chunk__35754.cljs$core$IIndexed$_nth$arity$2(null,i__35756);
var map__35765__$1 = (((((!((map__35765 == null))))?(((((map__35765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35765):map__35765);
var src = map__35765__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35767){var e_35906 = e35767;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35906);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35906.message)].join('')));
}

var G__35907 = seq__35753;
var G__35908 = chunk__35754;
var G__35909 = count__35755;
var G__35910 = (i__35756 + (1));
seq__35753 = G__35907;
chunk__35754 = G__35908;
count__35755 = G__35909;
i__35756 = G__35910;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35753);
if(temp__5735__auto__){
var seq__35753__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35753__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35753__$1);
var G__35911 = cljs.core.chunk_rest(seq__35753__$1);
var G__35912 = c__4556__auto__;
var G__35913 = cljs.core.count(c__4556__auto__);
var G__35914 = (0);
seq__35753 = G__35911;
chunk__35754 = G__35912;
count__35755 = G__35913;
i__35756 = G__35914;
continue;
} else {
var map__35768 = cljs.core.first(seq__35753__$1);
var map__35768__$1 = (((((!((map__35768 == null))))?(((((map__35768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35768):map__35768);
var src = map__35768__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35771){var e_35915 = e35771;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35915);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35915.message)].join('')));
}

var G__35916 = cljs.core.next(seq__35753__$1);
var G__35917 = null;
var G__35918 = (0);
var G__35919 = (0);
seq__35753 = G__35916;
chunk__35754 = G__35917;
count__35755 = G__35918;
i__35756 = G__35919;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35774 = cljs.core.seq(js_requires);
var chunk__35775 = null;
var count__35776 = (0);
var i__35777 = (0);
while(true){
if((i__35777 < count__35776)){
var js_ns = chunk__35775.cljs$core$IIndexed$_nth$arity$2(null,i__35777);
var require_str_35920 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35920);


var G__35921 = seq__35774;
var G__35922 = chunk__35775;
var G__35923 = count__35776;
var G__35924 = (i__35777 + (1));
seq__35774 = G__35921;
chunk__35775 = G__35922;
count__35776 = G__35923;
i__35777 = G__35924;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35774);
if(temp__5735__auto__){
var seq__35774__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35774__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35774__$1);
var G__35925 = cljs.core.chunk_rest(seq__35774__$1);
var G__35926 = c__4556__auto__;
var G__35927 = cljs.core.count(c__4556__auto__);
var G__35928 = (0);
seq__35774 = G__35925;
chunk__35775 = G__35926;
count__35776 = G__35927;
i__35777 = G__35928;
continue;
} else {
var js_ns = cljs.core.first(seq__35774__$1);
var require_str_35929 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35929);


var G__35930 = cljs.core.next(seq__35774__$1);
var G__35931 = null;
var G__35932 = (0);
var G__35933 = (0);
seq__35774 = G__35930;
chunk__35775 = G__35931;
count__35776 = G__35932;
i__35777 = G__35933;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35781){
var map__35782 = p__35781;
var map__35782__$1 = (((((!((map__35782 == null))))?(((((map__35782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35782):map__35782);
var msg = map__35782__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35782__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35782__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35784(s__35785){
return (new cljs.core.LazySeq(null,(function (){
var s__35785__$1 = s__35785;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35785__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35790 = cljs.core.first(xs__6292__auto__);
var map__35790__$1 = (((((!((map__35790 == null))))?(((((map__35790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35790):map__35790);
var src = map__35790__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35790__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35790__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35785__$1,map__35790,map__35790__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35782,map__35782__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35784_$_iter__35786(s__35787){
return (new cljs.core.LazySeq(null,((function (s__35785__$1,map__35790,map__35790__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35782,map__35782__$1,msg,info,reload_info){
return (function (){
var s__35787__$1 = s__35787;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35787__$1);
if(temp__5735__auto____$1){
var s__35787__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35787__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35787__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35789 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35788 = (0);
while(true){
if((i__35788 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35788);
cljs.core.chunk_append(b__35789,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35934 = (i__35788 + (1));
i__35788 = G__35934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35789),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35784_$_iter__35786(cljs.core.chunk_rest(s__35787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35789),null);
}
} else {
var warning = cljs.core.first(s__35787__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35784_$_iter__35786(cljs.core.rest(s__35787__$2)));
}
} else {
return null;
}
break;
}
});})(s__35785__$1,map__35790,map__35790__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35782,map__35782__$1,msg,info,reload_info))
,null,null));
});})(s__35785__$1,map__35790,map__35790__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35782,map__35782__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35784(cljs.core.rest(s__35785__$1)));
} else {
var G__35935 = cljs.core.rest(s__35785__$1);
s__35785__$1 = G__35935;
continue;
}
} else {
var G__35936 = cljs.core.rest(s__35785__$1);
s__35785__$1 = G__35936;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35792_35937 = cljs.core.seq(warnings);
var chunk__35793_35938 = null;
var count__35794_35939 = (0);
var i__35795_35940 = (0);
while(true){
if((i__35795_35940 < count__35794_35939)){
var map__35800_35941 = chunk__35793_35938.cljs$core$IIndexed$_nth$arity$2(null,i__35795_35940);
var map__35800_35942__$1 = (((((!((map__35800_35941 == null))))?(((((map__35800_35941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35800_35941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35800_35941):map__35800_35941);
var w_35943 = map__35800_35942__$1;
var msg_35944__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800_35942__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800_35942__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800_35942__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800_35942__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35947)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35945),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35946),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35944__$1)].join(''));


var G__35948 = seq__35792_35937;
var G__35949 = chunk__35793_35938;
var G__35950 = count__35794_35939;
var G__35951 = (i__35795_35940 + (1));
seq__35792_35937 = G__35948;
chunk__35793_35938 = G__35949;
count__35794_35939 = G__35950;
i__35795_35940 = G__35951;
continue;
} else {
var temp__5735__auto___35952 = cljs.core.seq(seq__35792_35937);
if(temp__5735__auto___35952){
var seq__35792_35953__$1 = temp__5735__auto___35952;
if(cljs.core.chunked_seq_QMARK_(seq__35792_35953__$1)){
var c__4556__auto___35954 = cljs.core.chunk_first(seq__35792_35953__$1);
var G__35955 = cljs.core.chunk_rest(seq__35792_35953__$1);
var G__35956 = c__4556__auto___35954;
var G__35957 = cljs.core.count(c__4556__auto___35954);
var G__35958 = (0);
seq__35792_35937 = G__35955;
chunk__35793_35938 = G__35956;
count__35794_35939 = G__35957;
i__35795_35940 = G__35958;
continue;
} else {
var map__35802_35959 = cljs.core.first(seq__35792_35953__$1);
var map__35802_35960__$1 = (((((!((map__35802_35959 == null))))?(((((map__35802_35959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35802_35959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35802_35959):map__35802_35959);
var w_35961 = map__35802_35960__$1;
var msg_35962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35802_35960__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35802_35960__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35802_35960__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35802_35960__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35965)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35963),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35964),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35962__$1)].join(''));


var G__35966 = cljs.core.next(seq__35792_35953__$1);
var G__35967 = null;
var G__35968 = (0);
var G__35969 = (0);
seq__35792_35937 = G__35966;
chunk__35793_35938 = G__35967;
count__35794_35939 = G__35968;
i__35795_35940 = G__35969;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35780_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35780_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35806){
var map__35807 = p__35806;
var map__35807__$1 = (((((!((map__35807 == null))))?(((((map__35807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35807):map__35807);
var msg = map__35807__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35807__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35809 = cljs.core.seq(updates);
var chunk__35811 = null;
var count__35812 = (0);
var i__35813 = (0);
while(true){
if((i__35813 < count__35812)){
var path = chunk__35811.cljs$core$IIndexed$_nth$arity$2(null,i__35813);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35843_35970 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35847_35971 = null;
var count__35848_35972 = (0);
var i__35849_35973 = (0);
while(true){
if((i__35849_35973 < count__35848_35972)){
var node_35974 = chunk__35847_35971.cljs$core$IIndexed$_nth$arity$2(null,i__35849_35973);
if(cljs.core.not(node_35974.shadow$old)){
var path_match_35975 = shadow.cljs.devtools.client.browser.match_paths(node_35974.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35975)){
var new_link_35976 = (function (){var G__35855 = node_35974.cloneNode(true);
G__35855.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35975),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35855;
})();
(node_35974.shadow$old = true);

(new_link_35976.onload = ((function (seq__35843_35970,chunk__35847_35971,count__35848_35972,i__35849_35973,seq__35809,chunk__35811,count__35812,i__35813,new_link_35976,path_match_35975,node_35974,path,map__35807,map__35807__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35974);
});})(seq__35843_35970,chunk__35847_35971,count__35848_35972,i__35849_35973,seq__35809,chunk__35811,count__35812,i__35813,new_link_35976,path_match_35975,node_35974,path,map__35807,map__35807__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35975], 0));

goog.dom.insertSiblingAfter(new_link_35976,node_35974);


var G__35977 = seq__35843_35970;
var G__35978 = chunk__35847_35971;
var G__35979 = count__35848_35972;
var G__35980 = (i__35849_35973 + (1));
seq__35843_35970 = G__35977;
chunk__35847_35971 = G__35978;
count__35848_35972 = G__35979;
i__35849_35973 = G__35980;
continue;
} else {
var G__35981 = seq__35843_35970;
var G__35982 = chunk__35847_35971;
var G__35983 = count__35848_35972;
var G__35984 = (i__35849_35973 + (1));
seq__35843_35970 = G__35981;
chunk__35847_35971 = G__35982;
count__35848_35972 = G__35983;
i__35849_35973 = G__35984;
continue;
}
} else {
var G__35985 = seq__35843_35970;
var G__35986 = chunk__35847_35971;
var G__35987 = count__35848_35972;
var G__35988 = (i__35849_35973 + (1));
seq__35843_35970 = G__35985;
chunk__35847_35971 = G__35986;
count__35848_35972 = G__35987;
i__35849_35973 = G__35988;
continue;
}
} else {
var temp__5735__auto___35989 = cljs.core.seq(seq__35843_35970);
if(temp__5735__auto___35989){
var seq__35843_35990__$1 = temp__5735__auto___35989;
if(cljs.core.chunked_seq_QMARK_(seq__35843_35990__$1)){
var c__4556__auto___35991 = cljs.core.chunk_first(seq__35843_35990__$1);
var G__35992 = cljs.core.chunk_rest(seq__35843_35990__$1);
var G__35993 = c__4556__auto___35991;
var G__35994 = cljs.core.count(c__4556__auto___35991);
var G__35995 = (0);
seq__35843_35970 = G__35992;
chunk__35847_35971 = G__35993;
count__35848_35972 = G__35994;
i__35849_35973 = G__35995;
continue;
} else {
var node_35996 = cljs.core.first(seq__35843_35990__$1);
if(cljs.core.not(node_35996.shadow$old)){
var path_match_35997 = shadow.cljs.devtools.client.browser.match_paths(node_35996.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35997)){
var new_link_35998 = (function (){var G__35856 = node_35996.cloneNode(true);
G__35856.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35997),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35856;
})();
(node_35996.shadow$old = true);

(new_link_35998.onload = ((function (seq__35843_35970,chunk__35847_35971,count__35848_35972,i__35849_35973,seq__35809,chunk__35811,count__35812,i__35813,new_link_35998,path_match_35997,node_35996,seq__35843_35990__$1,temp__5735__auto___35989,path,map__35807,map__35807__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35996);
});})(seq__35843_35970,chunk__35847_35971,count__35848_35972,i__35849_35973,seq__35809,chunk__35811,count__35812,i__35813,new_link_35998,path_match_35997,node_35996,seq__35843_35990__$1,temp__5735__auto___35989,path,map__35807,map__35807__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35997], 0));

goog.dom.insertSiblingAfter(new_link_35998,node_35996);


var G__35999 = cljs.core.next(seq__35843_35990__$1);
var G__36000 = null;
var G__36001 = (0);
var G__36002 = (0);
seq__35843_35970 = G__35999;
chunk__35847_35971 = G__36000;
count__35848_35972 = G__36001;
i__35849_35973 = G__36002;
continue;
} else {
var G__36003 = cljs.core.next(seq__35843_35990__$1);
var G__36004 = null;
var G__36005 = (0);
var G__36006 = (0);
seq__35843_35970 = G__36003;
chunk__35847_35971 = G__36004;
count__35848_35972 = G__36005;
i__35849_35973 = G__36006;
continue;
}
} else {
var G__36007 = cljs.core.next(seq__35843_35990__$1);
var G__36008 = null;
var G__36009 = (0);
var G__36010 = (0);
seq__35843_35970 = G__36007;
chunk__35847_35971 = G__36008;
count__35848_35972 = G__36009;
i__35849_35973 = G__36010;
continue;
}
}
} else {
}
}
break;
}


var G__36011 = seq__35809;
var G__36012 = chunk__35811;
var G__36013 = count__35812;
var G__36014 = (i__35813 + (1));
seq__35809 = G__36011;
chunk__35811 = G__36012;
count__35812 = G__36013;
i__35813 = G__36014;
continue;
} else {
var G__36015 = seq__35809;
var G__36016 = chunk__35811;
var G__36017 = count__35812;
var G__36018 = (i__35813 + (1));
seq__35809 = G__36015;
chunk__35811 = G__36016;
count__35812 = G__36017;
i__35813 = G__36018;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35809);
if(temp__5735__auto__){
var seq__35809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35809__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35809__$1);
var G__36019 = cljs.core.chunk_rest(seq__35809__$1);
var G__36020 = c__4556__auto__;
var G__36021 = cljs.core.count(c__4556__auto__);
var G__36022 = (0);
seq__35809 = G__36019;
chunk__35811 = G__36020;
count__35812 = G__36021;
i__35813 = G__36022;
continue;
} else {
var path = cljs.core.first(seq__35809__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35857_36023 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35861_36024 = null;
var count__35862_36025 = (0);
var i__35863_36026 = (0);
while(true){
if((i__35863_36026 < count__35862_36025)){
var node_36027 = chunk__35861_36024.cljs$core$IIndexed$_nth$arity$2(null,i__35863_36026);
if(cljs.core.not(node_36027.shadow$old)){
var path_match_36028 = shadow.cljs.devtools.client.browser.match_paths(node_36027.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36028)){
var new_link_36029 = (function (){var G__35869 = node_36027.cloneNode(true);
G__35869.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36028),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35869;
})();
(node_36027.shadow$old = true);

(new_link_36029.onload = ((function (seq__35857_36023,chunk__35861_36024,count__35862_36025,i__35863_36026,seq__35809,chunk__35811,count__35812,i__35813,new_link_36029,path_match_36028,node_36027,path,seq__35809__$1,temp__5735__auto__,map__35807,map__35807__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36027);
});})(seq__35857_36023,chunk__35861_36024,count__35862_36025,i__35863_36026,seq__35809,chunk__35811,count__35812,i__35813,new_link_36029,path_match_36028,node_36027,path,seq__35809__$1,temp__5735__auto__,map__35807,map__35807__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36028], 0));

goog.dom.insertSiblingAfter(new_link_36029,node_36027);


var G__36030 = seq__35857_36023;
var G__36031 = chunk__35861_36024;
var G__36032 = count__35862_36025;
var G__36033 = (i__35863_36026 + (1));
seq__35857_36023 = G__36030;
chunk__35861_36024 = G__36031;
count__35862_36025 = G__36032;
i__35863_36026 = G__36033;
continue;
} else {
var G__36034 = seq__35857_36023;
var G__36035 = chunk__35861_36024;
var G__36036 = count__35862_36025;
var G__36037 = (i__35863_36026 + (1));
seq__35857_36023 = G__36034;
chunk__35861_36024 = G__36035;
count__35862_36025 = G__36036;
i__35863_36026 = G__36037;
continue;
}
} else {
var G__36038 = seq__35857_36023;
var G__36039 = chunk__35861_36024;
var G__36040 = count__35862_36025;
var G__36041 = (i__35863_36026 + (1));
seq__35857_36023 = G__36038;
chunk__35861_36024 = G__36039;
count__35862_36025 = G__36040;
i__35863_36026 = G__36041;
continue;
}
} else {
var temp__5735__auto___36042__$1 = cljs.core.seq(seq__35857_36023);
if(temp__5735__auto___36042__$1){
var seq__35857_36043__$1 = temp__5735__auto___36042__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35857_36043__$1)){
var c__4556__auto___36044 = cljs.core.chunk_first(seq__35857_36043__$1);
var G__36045 = cljs.core.chunk_rest(seq__35857_36043__$1);
var G__36046 = c__4556__auto___36044;
var G__36047 = cljs.core.count(c__4556__auto___36044);
var G__36048 = (0);
seq__35857_36023 = G__36045;
chunk__35861_36024 = G__36046;
count__35862_36025 = G__36047;
i__35863_36026 = G__36048;
continue;
} else {
var node_36049 = cljs.core.first(seq__35857_36043__$1);
if(cljs.core.not(node_36049.shadow$old)){
var path_match_36050 = shadow.cljs.devtools.client.browser.match_paths(node_36049.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36050)){
var new_link_36051 = (function (){var G__35870 = node_36049.cloneNode(true);
G__35870.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36050),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35870;
})();
(node_36049.shadow$old = true);

(new_link_36051.onload = ((function (seq__35857_36023,chunk__35861_36024,count__35862_36025,i__35863_36026,seq__35809,chunk__35811,count__35812,i__35813,new_link_36051,path_match_36050,node_36049,seq__35857_36043__$1,temp__5735__auto___36042__$1,path,seq__35809__$1,temp__5735__auto__,map__35807,map__35807__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36049);
});})(seq__35857_36023,chunk__35861_36024,count__35862_36025,i__35863_36026,seq__35809,chunk__35811,count__35812,i__35813,new_link_36051,path_match_36050,node_36049,seq__35857_36043__$1,temp__5735__auto___36042__$1,path,seq__35809__$1,temp__5735__auto__,map__35807,map__35807__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36050], 0));

goog.dom.insertSiblingAfter(new_link_36051,node_36049);


var G__36052 = cljs.core.next(seq__35857_36043__$1);
var G__36053 = null;
var G__36054 = (0);
var G__36055 = (0);
seq__35857_36023 = G__36052;
chunk__35861_36024 = G__36053;
count__35862_36025 = G__36054;
i__35863_36026 = G__36055;
continue;
} else {
var G__36056 = cljs.core.next(seq__35857_36043__$1);
var G__36057 = null;
var G__36058 = (0);
var G__36059 = (0);
seq__35857_36023 = G__36056;
chunk__35861_36024 = G__36057;
count__35862_36025 = G__36058;
i__35863_36026 = G__36059;
continue;
}
} else {
var G__36060 = cljs.core.next(seq__35857_36043__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__35857_36023 = G__36060;
chunk__35861_36024 = G__36061;
count__35862_36025 = G__36062;
i__35863_36026 = G__36063;
continue;
}
}
} else {
}
}
break;
}


var G__36064 = cljs.core.next(seq__35809__$1);
var G__36065 = null;
var G__36066 = (0);
var G__36067 = (0);
seq__35809 = G__36064;
chunk__35811 = G__36065;
count__35812 = G__36066;
i__35813 = G__36067;
continue;
} else {
var G__36068 = cljs.core.next(seq__35809__$1);
var G__36069 = null;
var G__36070 = (0);
var G__36071 = (0);
seq__35809 = G__36068;
chunk__35811 = G__36069;
count__35812 = G__36070;
i__35813 = G__36071;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35871){
var map__35872 = p__35871;
var map__35872__$1 = (((((!((map__35872 == null))))?(((((map__35872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35872):map__35872);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35872__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35874){
var map__35875 = p__35874;
var map__35875__$1 = (((((!((map__35875 == null))))?(((((map__35875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35875):map__35875);
var _ = map__35875__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35875__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35877,done,error){
var map__35878 = p__35877;
var map__35878__$1 = (((((!((map__35878 == null))))?(((((map__35878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35878):map__35878);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35878__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35880,done,error){
var map__35881 = p__35880;
var map__35881__$1 = (((((!((map__35881 == null))))?(((((map__35881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35881):map__35881);
var msg = map__35881__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35883){
var map__35884 = p__35883;
var map__35884__$1 = (((((!((map__35884 == null))))?(((((map__35884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35884):map__35884);
var src = map__35884__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35886 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35886) : done.call(null,G__35886));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35887){
var map__35888 = p__35887;
var map__35888__$1 = (((((!((map__35888 == null))))?(((((map__35888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35888):map__35888);
var msg__$1 = map__35888__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35888__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35890){var ex = e35890;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35891){
var map__35892 = p__35891;
var map__35892__$1 = (((((!((map__35892 == null))))?(((((map__35892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35892):map__35892);
var env = map__35892__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35892__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35894){
var map__35895 = p__35894;
var map__35895__$1 = (((((!((map__35895 == null))))?(((((map__35895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35895):map__35895);
var msg = map__35895__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35895__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35897){
var map__35898 = p__35897;
var map__35898__$1 = (((((!((map__35898 == null))))?(((((map__35898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35898):map__35898);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35898__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35898__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35900){
var map__35901 = p__35900;
var map__35901__$1 = (((((!((map__35901 == null))))?(((((map__35901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35901):map__35901);
var svc = map__35901__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35901__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

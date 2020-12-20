goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27205){
var map__27206 = p__27205;
var map__27206__$1 = (((((!((map__27206 == null))))?(((((map__27206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27206):map__27206);
var m = map__27206__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27206__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27206__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27210_27421 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27211_27422 = null;
var count__27212_27423 = (0);
var i__27213_27424 = (0);
while(true){
if((i__27213_27424 < count__27212_27423)){
var f_27426 = chunk__27211_27422.cljs$core$IIndexed$_nth$arity$2(null,i__27213_27424);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27426], 0));


var G__27427 = seq__27210_27421;
var G__27428 = chunk__27211_27422;
var G__27429 = count__27212_27423;
var G__27430 = (i__27213_27424 + (1));
seq__27210_27421 = G__27427;
chunk__27211_27422 = G__27428;
count__27212_27423 = G__27429;
i__27213_27424 = G__27430;
continue;
} else {
var temp__5735__auto___27431 = cljs.core.seq(seq__27210_27421);
if(temp__5735__auto___27431){
var seq__27210_27432__$1 = temp__5735__auto___27431;
if(cljs.core.chunked_seq_QMARK_(seq__27210_27432__$1)){
var c__4556__auto___27433 = cljs.core.chunk_first(seq__27210_27432__$1);
var G__27434 = cljs.core.chunk_rest(seq__27210_27432__$1);
var G__27435 = c__4556__auto___27433;
var G__27436 = cljs.core.count(c__4556__auto___27433);
var G__27437 = (0);
seq__27210_27421 = G__27434;
chunk__27211_27422 = G__27435;
count__27212_27423 = G__27436;
i__27213_27424 = G__27437;
continue;
} else {
var f_27438 = cljs.core.first(seq__27210_27432__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27438], 0));


var G__27439 = cljs.core.next(seq__27210_27432__$1);
var G__27440 = null;
var G__27441 = (0);
var G__27442 = (0);
seq__27210_27421 = G__27439;
chunk__27211_27422 = G__27440;
count__27212_27423 = G__27441;
i__27213_27424 = G__27442;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27443 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27443], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27443)))?cljs.core.second(arglists_27443):arglists_27443)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27217_27444 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27218_27445 = null;
var count__27219_27446 = (0);
var i__27220_27447 = (0);
while(true){
if((i__27220_27447 < count__27219_27446)){
var vec__27233_27448 = chunk__27218_27445.cljs$core$IIndexed$_nth$arity$2(null,i__27220_27447);
var name_27449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27233_27448,(0),null);
var map__27236_27450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27233_27448,(1),null);
var map__27236_27451__$1 = (((((!((map__27236_27450 == null))))?(((((map__27236_27450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27236_27450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27236_27450):map__27236_27450);
var doc_27452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27236_27451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27236_27451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27449], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27453], 0));

if(cljs.core.truth_(doc_27452)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27452], 0));
} else {
}


var G__27454 = seq__27217_27444;
var G__27455 = chunk__27218_27445;
var G__27456 = count__27219_27446;
var G__27457 = (i__27220_27447 + (1));
seq__27217_27444 = G__27454;
chunk__27218_27445 = G__27455;
count__27219_27446 = G__27456;
i__27220_27447 = G__27457;
continue;
} else {
var temp__5735__auto___27458 = cljs.core.seq(seq__27217_27444);
if(temp__5735__auto___27458){
var seq__27217_27459__$1 = temp__5735__auto___27458;
if(cljs.core.chunked_seq_QMARK_(seq__27217_27459__$1)){
var c__4556__auto___27460 = cljs.core.chunk_first(seq__27217_27459__$1);
var G__27461 = cljs.core.chunk_rest(seq__27217_27459__$1);
var G__27462 = c__4556__auto___27460;
var G__27463 = cljs.core.count(c__4556__auto___27460);
var G__27464 = (0);
seq__27217_27444 = G__27461;
chunk__27218_27445 = G__27462;
count__27219_27446 = G__27463;
i__27220_27447 = G__27464;
continue;
} else {
var vec__27238_27465 = cljs.core.first(seq__27217_27459__$1);
var name_27466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27238_27465,(0),null);
var map__27241_27467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27238_27465,(1),null);
var map__27241_27468__$1 = (((((!((map__27241_27467 == null))))?(((((map__27241_27467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27241_27467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27241_27467):map__27241_27467);
var doc_27469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27241_27468__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27241_27468__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27466], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27470], 0));

if(cljs.core.truth_(doc_27469)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27469], 0));
} else {
}


var G__27471 = cljs.core.next(seq__27217_27459__$1);
var G__27472 = null;
var G__27473 = (0);
var G__27474 = (0);
seq__27217_27444 = G__27471;
chunk__27218_27445 = G__27472;
count__27219_27446 = G__27473;
i__27220_27447 = G__27474;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27245 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27246 = null;
var count__27247 = (0);
var i__27248 = (0);
while(true){
if((i__27248 < count__27247)){
var role = chunk__27246.cljs$core$IIndexed$_nth$arity$2(null,i__27248);
var temp__5735__auto___27475__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27475__$1)){
var spec_27476 = temp__5735__auto___27475__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27476)], 0));
} else {
}


var G__27477 = seq__27245;
var G__27478 = chunk__27246;
var G__27479 = count__27247;
var G__27480 = (i__27248 + (1));
seq__27245 = G__27477;
chunk__27246 = G__27478;
count__27247 = G__27479;
i__27248 = G__27480;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__27245);
if(temp__5735__auto____$1){
var seq__27245__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27245__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27245__$1);
var G__27485 = cljs.core.chunk_rest(seq__27245__$1);
var G__27486 = c__4556__auto__;
var G__27487 = cljs.core.count(c__4556__auto__);
var G__27488 = (0);
seq__27245 = G__27485;
chunk__27246 = G__27486;
count__27247 = G__27487;
i__27248 = G__27488;
continue;
} else {
var role = cljs.core.first(seq__27245__$1);
var temp__5735__auto___27489__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27489__$2)){
var spec_27490 = temp__5735__auto___27489__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27490)], 0));
} else {
}


var G__27491 = cljs.core.next(seq__27245__$1);
var G__27492 = null;
var G__27493 = (0);
var G__27494 = (0);
seq__27245 = G__27491;
chunk__27246 = G__27492;
count__27247 = G__27493;
i__27248 = G__27494;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27499 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27500 = cljs.core.ex_cause(t);
via = G__27499;
t = G__27500;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27258 = datafied_throwable;
var map__27258__$1 = (((((!((map__27258 == null))))?(((((map__27258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27258):map__27258);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27258__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27258__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27258__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27259 = cljs.core.last(via);
var map__27259__$1 = (((((!((map__27259 == null))))?(((((map__27259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27259):map__27259);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27259__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27259__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27259__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27260 = data;
var map__27260__$1 = (((((!((map__27260 == null))))?(((((map__27260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27260):map__27260);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27265 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27265__$1 = (((((!((map__27265 == null))))?(((((map__27265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27265):map__27265);
var top_data = map__27265__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27265__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27286 = phase;
var G__27286__$1 = (((G__27286 instanceof cljs.core.Keyword))?G__27286.fqn:null);
switch (G__27286__$1) {
case "read-source":
var map__27291 = data;
var map__27291__$1 = (((((!((map__27291 == null))))?(((((map__27291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27291):map__27291);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27291__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27291__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27303 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27303__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27303,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27303);
var G__27303__$2 = (cljs.core.truth_((function (){var fexpr__27304 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27304.cljs$core$IFn$_invoke$arity$1 ? fexpr__27304.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27304.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27303__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27303__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27303__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27303__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27309 = top_data;
var G__27309__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27309,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27309);
var G__27309__$2 = (cljs.core.truth_((function (){var fexpr__27314 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27314.cljs$core$IFn$_invoke$arity$1 ? fexpr__27314.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27314.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27309__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27309__$1);
var G__27309__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27309__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27309__$2);
var G__27309__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27309__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27309__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27309__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27309__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27331 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331,(3),null);
var G__27334 = top_data;
var G__27334__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27334,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27334);
var G__27334__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27334__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27334__$1);
var G__27334__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27334__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27334__$2);
var G__27334__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27334__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27334__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27334__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27334__$4;
}

break;
case "execution":
var vec__27342 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27342,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27342,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27342,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27342,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27253_SHARP_){
var or__4126__auto__ = (p1__27253_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__27350 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27350.cljs$core$IFn$_invoke$arity$1 ? fexpr__27350.cljs$core$IFn$_invoke$arity$1(p1__27253_SHARP_) : fexpr__27350.call(null,p1__27253_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__27361 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27361__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27361,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27361);
var G__27361__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27361__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27361__$1);
var G__27361__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27361__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27361__$2);
var G__27361__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27361__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27361__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27361__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27361__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27286__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27376){
var map__27377 = p__27376;
var map__27377__$1 = (((((!((map__27377 == null))))?(((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27377):map__27377);
var triage_data = map__27377__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27381 = phase;
var G__27381__$1 = (((G__27381 instanceof cljs.core.Keyword))?G__27381.fqn:null);
switch (G__27381__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27382 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27383 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27384 = loc;
var G__27385 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27386_27504 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27387_27505 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27388_27506 = true;
var _STAR_print_fn_STAR__temp_val__27389_27507 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27388_27506);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27389_27507);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27374_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27374_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27387_27505);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27386_27504);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27382,G__27383,G__27384,G__27385) : format.call(null,G__27382,G__27383,G__27384,G__27385));

break;
case "macroexpansion":
var G__27390 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27391 = cause_type;
var G__27392 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27393 = loc;
var G__27394 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27390,G__27391,G__27392,G__27393,G__27394) : format.call(null,G__27390,G__27391,G__27392,G__27393,G__27394));

break;
case "compile-syntax-check":
var G__27395 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27396 = cause_type;
var G__27397 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27398 = loc;
var G__27399 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27395,G__27396,G__27397,G__27398,G__27399) : format.call(null,G__27395,G__27396,G__27397,G__27398,G__27399));

break;
case "compilation":
var G__27401 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27402 = cause_type;
var G__27403 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27404 = loc;
var G__27405 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27401,G__27402,G__27403,G__27404,G__27405) : format.call(null,G__27401,G__27402,G__27403,G__27404,G__27405));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27406 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27407 = symbol;
var G__27408 = loc;
var G__27409 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27410_27509 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27411_27510 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27412_27511 = true;
var _STAR_print_fn_STAR__temp_val__27413_27512 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27412_27511);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27413_27512);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27375_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27375_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27411_27510);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27410_27509);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27406,G__27407,G__27408,G__27409) : format.call(null,G__27406,G__27407,G__27408,G__27409));
} else {
var G__27415 = "Execution error%s at %s(%s).\n%s\n";
var G__27416 = cause_type;
var G__27417 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27418 = loc;
var G__27419 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27415,G__27416,G__27417,G__27418,G__27419) : format.call(null,G__27415,G__27416,G__27417,G__27418,G__27419));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27381__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

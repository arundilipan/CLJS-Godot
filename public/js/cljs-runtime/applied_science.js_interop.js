import "./cljs_env.js";
goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9319 = arguments.length;
var i__4737__auto___9320 = (0);
while(true){
if((i__4737__auto___9320 < len__4736__auto___9319)){
args__4742__auto__.push((arguments[i__4737__auto___9320]));

var G__9321 = (i__4737__auto___9320 + (1));
i__4737__auto___9320 = G__9321;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__9199_9322 = keyvals;
var vec__9200_9323 = G__9199_9322;
var seq__9201_9324 = cljs.core.seq(vec__9200_9323);
var first__9202_9325 = cljs.core.first(seq__9201_9324);
var seq__9201_9326__$1 = cljs.core.next(seq__9201_9324);
var k_9327 = first__9202_9325;
var first__9202_9328__$1 = cljs.core.first(seq__9201_9326__$1);
var seq__9201_9329__$2 = cljs.core.next(seq__9201_9326__$1);
var v_9330 = first__9202_9328__$1;
var keyvals_9331__$1 = seq__9201_9329__$2;
var G__9199_9333__$1 = G__9199_9322;
while(true){
var vec__9203_9334 = G__9199_9333__$1;
var seq__9204_9335 = cljs.core.seq(vec__9203_9334);
var first__9205_9336 = cljs.core.first(seq__9204_9335);
var seq__9204_9337__$1 = cljs.core.next(seq__9204_9335);
var k_9338__$1 = first__9205_9336;
var first__9205_9339__$1 = cljs.core.first(seq__9204_9337__$1);
var seq__9204_9340__$2 = cljs.core.next(seq__9204_9337__$1);
var v_9341__$1 = first__9205_9339__$1;
var keyvals_9342__$2 = seq__9204_9340__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_9338__$1)] = v_9341__$1);

if(keyvals_9342__$2){
var G__9343 = keyvals_9342__$2;
G__9199_9333__$1 = G__9343;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq9193){
var G__9194 = cljs.core.first(seq9193);
var seq9193__$1 = cljs.core.next(seq9193);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9194,seq9193__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__9207 = arguments.length;
switch (G__9207) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj9208 = obj;
var k9209 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj9210 = obj9208;
return (((!((obj9210 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k9209,obj9210)));
})()){
return (obj9208[k9209]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj9211 = obj;
var k9212 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj9213 = obj9211;
return (((!((obj9213 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k9212,obj9213)));
})()){
return (obj9211[k9212]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__9215 = arguments.length;
switch (G__9215) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj9216 = self__.obj;
var k9217 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj9218 = obj9216;
return (((!((obj9218 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k9217,obj9218)));
})()){
return (obj9216[k9217]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj9219 = self__.obj;
var k9220 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj9221 = obj9219;
return (((!((obj9221 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k9220,obj9221)));
})()){
return (obj9219[k9220]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9356 = arguments.length;
var i__4737__auto___9357 = (0);
while(true){
if((i__4737__auto___9357 < len__4736__auto___9356)){
args__4742__auto__.push((arguments[i__4737__auto___9357]));

var G__9358 = (i__4737__auto___9357 + (1));
i__4737__auto___9357 = G__9358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__9227 = keyvals;
var vec__9228 = G__9227;
var seq__9229 = cljs.core.seq(vec__9228);
var first__9230 = cljs.core.first(seq__9229);
var seq__9229__$1 = cljs.core.next(seq__9229);
var k = first__9230;
var first__9230__$1 = cljs.core.first(seq__9229__$1);
var seq__9229__$2 = cljs.core.next(seq__9229__$1);
var v = first__9230__$1;
var kvs = seq__9229__$2;
var G__9227__$1 = G__9227;
while(true){
var vec__9231 = G__9227__$1;
var seq__9232 = cljs.core.seq(vec__9231);
var first__9233 = cljs.core.first(seq__9232);
var seq__9232__$1 = cljs.core.next(seq__9232);
var k__$1 = first__9233;
var first__9233__$1 = cljs.core.first(seq__9232__$1);
var seq__9232__$2 = cljs.core.next(seq__9232__$1);
var v__$1 = first__9233__$1;
var kvs__$1 = seq__9232__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__9361 = kvs__$1;
G__9227__$1 = G__9361;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq9222){
var G__9223 = cljs.core.first(seq9222);
var seq9222__$1 = cljs.core.next(seq9222);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9223,seq9222__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9362 = arguments.length;
var i__4737__auto___9363 = (0);
while(true){
if((i__4737__auto___9363 < len__4736__auto___9362)){
args__4742__auto__.push((arguments[i__4737__auto___9363]));

var G__9364 = (i__4737__auto___9363 + (1));
i__4737__auto___9363 = G__9364;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq9234){
var G__9235 = cljs.core.first(seq9234);
var seq9234__$1 = cljs.core.next(seq9234);
var G__9236 = cljs.core.first(seq9234__$1);
var seq9234__$2 = cljs.core.next(seq9234__$1);
var G__9237 = cljs.core.first(seq9234__$2);
var seq9234__$3 = cljs.core.next(seq9234__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9235,G__9236,G__9237,seq9234__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9367 = arguments.length;
var i__4737__auto___9368 = (0);
while(true){
if((i__4737__auto___9368 < len__4736__auto___9367)){
args__4742__auto__.push((arguments[i__4737__auto___9368]));

var G__9369 = (i__4737__auto___9368 + (1));
i__4737__auto___9368 = G__9369;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq9238){
var G__9239 = cljs.core.first(seq9238);
var seq9238__$1 = cljs.core.next(seq9238);
var G__9240 = cljs.core.first(seq9238__$1);
var seq9238__$2 = cljs.core.next(seq9238__$1);
var G__9241 = cljs.core.first(seq9238__$2);
var seq9238__$3 = cljs.core.next(seq9238__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9239,G__9240,G__9241,seq9238__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__9246 = arguments.length;
switch (G__9246) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___9372 = arguments.length;
var i__4737__auto___9373 = (0);
while(true){
if((i__4737__auto___9373 < len__4736__auto___9372)){
args_arr__4757__auto__.push((arguments[i__4737__auto___9373]));

var G__9374 = (i__4737__auto___9373 + (1));
i__4737__auto___9373 = G__9374;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__9249_9375 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__9250_9376 = null;
var count__9251_9377 = (0);
var i__9252_9378 = (0);
while(true){
if((i__9252_9378 < count__9251_9377)){
var k_9379 = chunk__9250_9376.cljs$core$IIndexed$_nth$arity$2(null,i__9252_9378);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_9379,applied_science.js_interop.unchecked_get(x,k_9379)], 0));


var G__9381 = seq__9249_9375;
var G__9382 = chunk__9250_9376;
var G__9383 = count__9251_9377;
var G__9384 = (i__9252_9378 + (1));
seq__9249_9375 = G__9381;
chunk__9250_9376 = G__9382;
count__9251_9377 = G__9383;
i__9252_9378 = G__9384;
continue;
} else {
var temp__5735__auto___9385 = cljs.core.seq(seq__9249_9375);
if(temp__5735__auto___9385){
var seq__9249_9386__$1 = temp__5735__auto___9385;
if(cljs.core.chunked_seq_QMARK_(seq__9249_9386__$1)){
var c__4556__auto___9387 = cljs.core.chunk_first(seq__9249_9386__$1);
var G__9388 = cljs.core.chunk_rest(seq__9249_9386__$1);
var G__9389 = c__4556__auto___9387;
var G__9390 = cljs.core.count(c__4556__auto___9387);
var G__9391 = (0);
seq__9249_9375 = G__9388;
chunk__9250_9376 = G__9389;
count__9251_9377 = G__9390;
i__9252_9378 = G__9391;
continue;
} else {
var k_9392 = cljs.core.first(seq__9249_9386__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_9392,applied_science.js_interop.unchecked_get(x,k_9392)], 0));


var G__9394 = cljs.core.next(seq__9249_9386__$1);
var G__9395 = null;
var G__9396 = (0);
var G__9397 = (0);
seq__9249_9375 = G__9394;
chunk__9250_9376 = G__9395;
count__9251_9377 = G__9396;
i__9252_9378 = G__9397;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq9243){
var G__9244 = cljs.core.first(seq9243);
var seq9243__$1 = cljs.core.next(seq9243);
var G__9245 = cljs.core.first(seq9243__$1);
var seq9243__$2 = cljs.core.next(seq9243__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9244,G__9245,seq9243__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__9257 = array;
G__9257.push(x);

return G__9257;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__9258 = array;
G__9258.unshift(x);

return G__9258;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9399 = arguments.length;
var i__4737__auto___9400 = (0);
while(true){
if((i__4737__auto___9400 < len__4736__auto___9399)){
args__4742__auto__.push((arguments[i__4737__auto___9400]));

var G__9402 = (i__4737__auto___9400 + (1));
i__4737__auto___9400 = G__9402;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj9263 = obj;
var k9264 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj9265 = obj9263;
return (((!((obj9265 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k9264,obj9265)));
})()){
return (obj9263[k9264]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq9260){
var G__9261 = cljs.core.first(seq9260);
var seq9260__$1 = cljs.core.next(seq9260);
var G__9262 = cljs.core.first(seq9260__$1);
var seq9260__$2 = cljs.core.next(seq9260__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9261,G__9262,seq9260__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj9268 = obj;
var k9269 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj9270 = obj9268;
return (((!((obj9270 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k9269,obj9270)));
})()){
return (obj9268[k9269]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9404 = arguments.length;
var i__4737__auto___9405 = (0);
while(true){
if((i__4737__auto___9405 < len__4736__auto___9404)){
args__4742__auto__.push((arguments[i__4737__auto___9405]));

var G__9407 = (i__4737__auto___9405 + (1));
i__4737__auto___9405 = G__9407;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq9271){
var G__9272 = cljs.core.first(seq9271);
var seq9271__$1 = cljs.core.next(seq9271);
var G__9273 = cljs.core.first(seq9271__$1);
var seq9271__$2 = cljs.core.next(seq9271__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9272,G__9273,seq9271__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9409 = arguments.length;
var i__4737__auto___9410 = (0);
while(true){
if((i__4737__auto___9410 < len__4736__auto___9409)){
args__4742__auto__.push((arguments[i__4737__auto___9410]));

var G__9411 = (i__4737__auto___9410 + (1));
i__4737__auto___9410 = G__9411;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__9281_9412 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__9282_9413 = null;
var count__9283_9414 = (0);
var i__9284_9415 = (0);
while(true){
if((i__9284_9415 < count__9283_9414)){
var vec__9302_9417 = chunk__9282_9413.cljs$core$IIndexed$_nth$arity$2(null,i__9284_9415);
var k_9418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9302_9417,(0),null);
var v_9419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9302_9417,(1),null);
var obj9305_9420 = obj;
var obj9306_9421 = (((!((obj9305_9420 == null))))?obj9305_9420:({}));
(obj9306_9421[applied_science.js_interop.impl.wrap_key(k_9418)] = v_9419);



var G__9422 = seq__9281_9412;
var G__9423 = chunk__9282_9413;
var G__9424 = count__9283_9414;
var G__9425 = (i__9284_9415 + (1));
seq__9281_9412 = G__9422;
chunk__9282_9413 = G__9423;
count__9283_9414 = G__9424;
i__9284_9415 = G__9425;
continue;
} else {
var temp__5735__auto___9426 = cljs.core.seq(seq__9281_9412);
if(temp__5735__auto___9426){
var seq__9281_9427__$1 = temp__5735__auto___9426;
if(cljs.core.chunked_seq_QMARK_(seq__9281_9427__$1)){
var c__4556__auto___9429 = cljs.core.chunk_first(seq__9281_9427__$1);
var G__9430 = cljs.core.chunk_rest(seq__9281_9427__$1);
var G__9431 = c__4556__auto___9429;
var G__9432 = cljs.core.count(c__4556__auto___9429);
var G__9433 = (0);
seq__9281_9412 = G__9430;
chunk__9282_9413 = G__9431;
count__9283_9414 = G__9432;
i__9284_9415 = G__9433;
continue;
} else {
var vec__9310_9434 = cljs.core.first(seq__9281_9427__$1);
var k_9435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9310_9434,(0),null);
var v_9436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9310_9434,(1),null);
var obj9313_9437 = obj;
var obj9314_9438 = (((!((obj9313_9437 == null))))?obj9313_9437:({}));
(obj9314_9438[applied_science.js_interop.impl.wrap_key(k_9435)] = v_9436);



var G__9439 = cljs.core.next(seq__9281_9427__$1);
var G__9440 = null;
var G__9441 = (0);
var G__9442 = (0);
seq__9281_9412 = G__9439;
chunk__9282_9413 = G__9440;
count__9283_9414 = G__9441;
i__9284_9415 = G__9442;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq9277){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9277));
}));


//# sourceMappingURL=applied_science.js_interop.js.map

import "./cljs_env.js";
goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6754 = arguments.length;
var i__4737__auto___6755 = (0);
while(true){
if((i__4737__auto___6755 < len__4736__auto___6754)){
args__4742__auto__.push((arguments[i__4737__auto___6755]));

var G__6756 = (i__4737__auto___6755 + (1));
i__4737__auto___6755 = G__6756;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__6653_6757 = keyvals;
var vec__6654_6758 = G__6653_6757;
var seq__6655_6759 = cljs.core.seq(vec__6654_6758);
var first__6656_6760 = cljs.core.first(seq__6655_6759);
var seq__6655_6761__$1 = cljs.core.next(seq__6655_6759);
var k_6762 = first__6656_6760;
var first__6656_6763__$1 = cljs.core.first(seq__6655_6761__$1);
var seq__6655_6764__$2 = cljs.core.next(seq__6655_6761__$1);
var v_6765 = first__6656_6763__$1;
var keyvals_6766__$1 = seq__6655_6764__$2;
var G__6653_6767__$1 = G__6653_6757;
while(true){
var vec__6657_6768 = G__6653_6767__$1;
var seq__6658_6769 = cljs.core.seq(vec__6657_6768);
var first__6659_6770 = cljs.core.first(seq__6658_6769);
var seq__6658_6771__$1 = cljs.core.next(seq__6658_6769);
var k_6772__$1 = first__6659_6770;
var first__6659_6773__$1 = cljs.core.first(seq__6658_6771__$1);
var seq__6658_6774__$2 = cljs.core.next(seq__6658_6771__$1);
var v_6775__$1 = first__6659_6773__$1;
var keyvals_6776__$2 = seq__6658_6774__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_6772__$1)] = v_6775__$1);

if(keyvals_6776__$2){
var G__6780 = keyvals_6776__$2;
G__6653_6767__$1 = G__6780;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq6645){
var G__6646 = cljs.core.first(seq6645);
var seq6645__$1 = cljs.core.next(seq6645);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6646,seq6645__$1);
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
var G__6661 = arguments.length;
switch (G__6661) {
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
var obj6662 = obj;
var k6663 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj6664 = obj6662;
return (((!((obj6664 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k6663,obj6664)));
})()){
return (obj6662[k6663]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj6665 = obj;
var k6666 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj6667 = obj6665;
return (((!((obj6667 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k6666,obj6667)));
})()){
return (obj6665[k6666]);
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
var G__6669 = arguments.length;
switch (G__6669) {
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
var obj6670 = self__.obj;
var k6671 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj6672 = obj6670;
return (((!((obj6672 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k6671,obj6672)));
})()){
return (obj6670[k6671]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj6673 = self__.obj;
var k6674 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj6675 = obj6673;
return (((!((obj6675 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k6674,obj6675)));
})()){
return (obj6673[k6674]);
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
var len__4736__auto___6783 = arguments.length;
var i__4737__auto___6784 = (0);
while(true){
if((i__4737__auto___6784 < len__4736__auto___6783)){
args__4742__auto__.push((arguments[i__4737__auto___6784]));

var G__6785 = (i__4737__auto___6784 + (1));
i__4737__auto___6784 = G__6785;
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
var G__6681 = keyvals;
var vec__6682 = G__6681;
var seq__6683 = cljs.core.seq(vec__6682);
var first__6684 = cljs.core.first(seq__6683);
var seq__6683__$1 = cljs.core.next(seq__6683);
var k = first__6684;
var first__6684__$1 = cljs.core.first(seq__6683__$1);
var seq__6683__$2 = cljs.core.next(seq__6683__$1);
var v = first__6684__$1;
var kvs = seq__6683__$2;
var G__6681__$1 = G__6681;
while(true){
var vec__6685 = G__6681__$1;
var seq__6686 = cljs.core.seq(vec__6685);
var first__6687 = cljs.core.first(seq__6686);
var seq__6686__$1 = cljs.core.next(seq__6686);
var k__$1 = first__6687;
var first__6687__$1 = cljs.core.first(seq__6686__$1);
var seq__6686__$2 = cljs.core.next(seq__6686__$1);
var v__$1 = first__6687__$1;
var kvs__$1 = seq__6686__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__6786 = kvs__$1;
G__6681__$1 = G__6786;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq6676){
var G__6677 = cljs.core.first(seq6676);
var seq6676__$1 = cljs.core.next(seq6676);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6677,seq6676__$1);
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
var len__4736__auto___6787 = arguments.length;
var i__4737__auto___6788 = (0);
while(true){
if((i__4737__auto___6788 < len__4736__auto___6787)){
args__4742__auto__.push((arguments[i__4737__auto___6788]));

var G__6789 = (i__4737__auto___6788 + (1));
i__4737__auto___6788 = G__6789;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq6688){
var G__6689 = cljs.core.first(seq6688);
var seq6688__$1 = cljs.core.next(seq6688);
var G__6690 = cljs.core.first(seq6688__$1);
var seq6688__$2 = cljs.core.next(seq6688__$1);
var G__6691 = cljs.core.first(seq6688__$2);
var seq6688__$3 = cljs.core.next(seq6688__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6689,G__6690,G__6691,seq6688__$3);
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
var len__4736__auto___6790 = arguments.length;
var i__4737__auto___6791 = (0);
while(true){
if((i__4737__auto___6791 < len__4736__auto___6790)){
args__4742__auto__.push((arguments[i__4737__auto___6791]));

var G__6792 = (i__4737__auto___6791 + (1));
i__4737__auto___6791 = G__6792;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq6692){
var G__6693 = cljs.core.first(seq6692);
var seq6692__$1 = cljs.core.next(seq6692);
var G__6694 = cljs.core.first(seq6692__$1);
var seq6692__$2 = cljs.core.next(seq6692__$1);
var G__6695 = cljs.core.first(seq6692__$2);
var seq6692__$3 = cljs.core.next(seq6692__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6693,G__6694,G__6695,seq6692__$3);
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
var G__6700 = arguments.length;
switch (G__6700) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___6794 = arguments.length;
var i__4737__auto___6795 = (0);
while(true){
if((i__4737__auto___6795 < len__4736__auto___6794)){
args_arr__4757__auto__.push((arguments[i__4737__auto___6795]));

var G__6796 = (i__4737__auto___6795 + (1));
i__4737__auto___6795 = G__6796;
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
var seq__6701_6797 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__6702_6798 = null;
var count__6703_6799 = (0);
var i__6704_6800 = (0);
while(true){
if((i__6704_6800 < count__6703_6799)){
var k_6801 = chunk__6702_6798.cljs$core$IIndexed$_nth$arity$2(null,i__6704_6800);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_6801,applied_science.js_interop.unchecked_get(x,k_6801)], 0));


var G__6802 = seq__6701_6797;
var G__6803 = chunk__6702_6798;
var G__6804 = count__6703_6799;
var G__6805 = (i__6704_6800 + (1));
seq__6701_6797 = G__6802;
chunk__6702_6798 = G__6803;
count__6703_6799 = G__6804;
i__6704_6800 = G__6805;
continue;
} else {
var temp__5735__auto___6806 = cljs.core.seq(seq__6701_6797);
if(temp__5735__auto___6806){
var seq__6701_6807__$1 = temp__5735__auto___6806;
if(cljs.core.chunked_seq_QMARK_(seq__6701_6807__$1)){
var c__4556__auto___6808 = cljs.core.chunk_first(seq__6701_6807__$1);
var G__6809 = cljs.core.chunk_rest(seq__6701_6807__$1);
var G__6810 = c__4556__auto___6808;
var G__6811 = cljs.core.count(c__4556__auto___6808);
var G__6812 = (0);
seq__6701_6797 = G__6809;
chunk__6702_6798 = G__6810;
count__6703_6799 = G__6811;
i__6704_6800 = G__6812;
continue;
} else {
var k_6813 = cljs.core.first(seq__6701_6807__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_6813,applied_science.js_interop.unchecked_get(x,k_6813)], 0));


var G__6814 = cljs.core.next(seq__6701_6807__$1);
var G__6815 = null;
var G__6816 = (0);
var G__6817 = (0);
seq__6701_6797 = G__6814;
chunk__6702_6798 = G__6815;
count__6703_6799 = G__6816;
i__6704_6800 = G__6817;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq6697){
var G__6698 = cljs.core.first(seq6697);
var seq6697__$1 = cljs.core.next(seq6697);
var G__6699 = cljs.core.first(seq6697__$1);
var seq6697__$2 = cljs.core.next(seq6697__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6698,G__6699,seq6697__$2);
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
var G__6705 = array;
G__6705.push(x);

return G__6705;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__6706 = array;
G__6706.unshift(x);

return G__6706;
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
var len__4736__auto___6818 = arguments.length;
var i__4737__auto___6819 = (0);
while(true){
if((i__4737__auto___6819 < len__4736__auto___6818)){
args__4742__auto__.push((arguments[i__4737__auto___6819]));

var G__6820 = (i__4737__auto___6819 + (1));
i__4737__auto___6819 = G__6820;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj6710 = obj;
var k6711 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj6712 = obj6710;
return (((!((obj6712 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k6711,obj6712)));
})()){
return (obj6710[k6711]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq6707){
var G__6708 = cljs.core.first(seq6707);
var seq6707__$1 = cljs.core.next(seq6707);
var G__6709 = cljs.core.first(seq6707__$1);
var seq6707__$2 = cljs.core.next(seq6707__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6708,G__6709,seq6707__$2);
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
return (function (){var obj6713 = obj;
var k6714 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj6715 = obj6713;
return (((!((obj6715 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k6714,obj6715)));
})()){
return (obj6713[k6714]);
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
var len__4736__auto___6821 = arguments.length;
var i__4737__auto___6822 = (0);
while(true){
if((i__4737__auto___6822 < len__4736__auto___6821)){
args__4742__auto__.push((arguments[i__4737__auto___6822]));

var G__6823 = (i__4737__auto___6822 + (1));
i__4737__auto___6822 = G__6823;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq6716){
var G__6717 = cljs.core.first(seq6716);
var seq6716__$1 = cljs.core.next(seq6716);
var G__6718 = cljs.core.first(seq6716__$1);
var seq6716__$2 = cljs.core.next(seq6716__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6717,G__6718,seq6716__$2);
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
var len__4736__auto___6824 = arguments.length;
var i__4737__auto___6825 = (0);
while(true){
if((i__4737__auto___6825 < len__4736__auto___6824)){
args__4742__auto__.push((arguments[i__4737__auto___6825]));

var G__6826 = (i__4737__auto___6825 + (1));
i__4737__auto___6825 = G__6826;
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
var seq__6722_6827 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__6723_6828 = null;
var count__6724_6829 = (0);
var i__6725_6830 = (0);
while(true){
if((i__6725_6830 < count__6724_6829)){
var vec__6740_6831 = chunk__6723_6828.cljs$core$IIndexed$_nth$arity$2(null,i__6725_6830);
var k_6832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6740_6831,(0),null);
var v_6833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6740_6831,(1),null);
var obj6743_6834 = obj;
var obj6744_6835 = (((!((obj6743_6834 == null))))?obj6743_6834:({}));
(obj6744_6835[applied_science.js_interop.impl.wrap_key(k_6832)] = v_6833);



var G__6836 = seq__6722_6827;
var G__6837 = chunk__6723_6828;
var G__6838 = count__6724_6829;
var G__6839 = (i__6725_6830 + (1));
seq__6722_6827 = G__6836;
chunk__6723_6828 = G__6837;
count__6724_6829 = G__6838;
i__6725_6830 = G__6839;
continue;
} else {
var temp__5735__auto___6840 = cljs.core.seq(seq__6722_6827);
if(temp__5735__auto___6840){
var seq__6722_6841__$1 = temp__5735__auto___6840;
if(cljs.core.chunked_seq_QMARK_(seq__6722_6841__$1)){
var c__4556__auto___6842 = cljs.core.chunk_first(seq__6722_6841__$1);
var G__6843 = cljs.core.chunk_rest(seq__6722_6841__$1);
var G__6844 = c__4556__auto___6842;
var G__6845 = cljs.core.count(c__4556__auto___6842);
var G__6846 = (0);
seq__6722_6827 = G__6843;
chunk__6723_6828 = G__6844;
count__6724_6829 = G__6845;
i__6725_6830 = G__6846;
continue;
} else {
var vec__6747_6847 = cljs.core.first(seq__6722_6841__$1);
var k_6848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747_6847,(0),null);
var v_6849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747_6847,(1),null);
var obj6750_6850 = obj;
var obj6751_6851 = (((!((obj6750_6850 == null))))?obj6750_6850:({}));
(obj6751_6851[applied_science.js_interop.impl.wrap_key(k_6848)] = v_6849);



var G__6852 = cljs.core.next(seq__6722_6841__$1);
var G__6853 = null;
var G__6854 = (0);
var G__6855 = (0);
seq__6722_6827 = G__6852;
chunk__6723_6828 = G__6853;
count__6724_6829 = G__6854;
i__6725_6830 = G__6855;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq6719){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6719));
}));


//# sourceMappingURL=applied_science.js_interop.js.map

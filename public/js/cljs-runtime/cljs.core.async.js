import "./cljs_env.js";
goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28871 = arguments.length;
switch (G__28871) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28888 = (function (f,blockable,meta28889){
this.f = f;
this.blockable = blockable;
this.meta28889 = meta28889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28890,meta28889__$1){
var self__ = this;
var _28890__$1 = this;
return (new cljs.core.async.t_cljs$core$async28888(self__.f,self__.blockable,meta28889__$1));
}));

(cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28890){
var self__ = this;
var _28890__$1 = this;
return self__.meta28889;
}));

(cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28889","meta28889",939680376,null)], null);
}));

(cljs.core.async.t_cljs$core$async28888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28888");

(cljs.core.async.t_cljs$core$async28888.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async28888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28888.
 */
cljs.core.async.__GT_t_cljs$core$async28888 = (function cljs$core$async$__GT_t_cljs$core$async28888(f__$1,blockable__$1,meta28889){
return (new cljs.core.async.t_cljs$core$async28888(f__$1,blockable__$1,meta28889));
});

}

return (new cljs.core.async.t_cljs$core$async28888(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28909 = arguments.length;
switch (G__28909) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28944 = arguments.length;
switch (G__28944) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28968 = arguments.length;
switch (G__28968) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32465 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32465) : fn1.call(null,val_32465));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32465) : fn1.call(null,val_32465));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29007 = arguments.length;
switch (G__29007) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32482 = n;
var x_32483 = (0);
while(true){
if((x_32483 < n__4613__auto___32482)){
(a[x_32483] = x_32483);

var G__32484 = (x_32483 + (1));
x_32483 = G__32484;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29025 = (function (flag,meta29026){
this.flag = flag;
this.meta29026 = meta29026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29027,meta29026__$1){
var self__ = this;
var _29027__$1 = this;
return (new cljs.core.async.t_cljs$core$async29025(self__.flag,meta29026__$1));
}));

(cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29027){
var self__ = this;
var _29027__$1 = this;
return self__.meta29026;
}));

(cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29026","meta29026",-281919398,null)], null);
}));

(cljs.core.async.t_cljs$core$async29025.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29025");

(cljs.core.async.t_cljs$core$async29025.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29025");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29025.
 */
cljs.core.async.__GT_t_cljs$core$async29025 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29025(flag__$1,meta29026){
return (new cljs.core.async.t_cljs$core$async29025(flag__$1,meta29026));
});

}

return (new cljs.core.async.t_cljs$core$async29025(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29047 = (function (flag,cb,meta29048){
this.flag = flag;
this.cb = cb;
this.meta29048 = meta29048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29049,meta29048__$1){
var self__ = this;
var _29049__$1 = this;
return (new cljs.core.async.t_cljs$core$async29047(self__.flag,self__.cb,meta29048__$1));
}));

(cljs.core.async.t_cljs$core$async29047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29049){
var self__ = this;
var _29049__$1 = this;
return self__.meta29048;
}));

(cljs.core.async.t_cljs$core$async29047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29048","meta29048",-120761507,null)], null);
}));

(cljs.core.async.t_cljs$core$async29047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29047");

(cljs.core.async.t_cljs$core$async29047.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29047.
 */
cljs.core.async.__GT_t_cljs$core$async29047 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29047(flag__$1,cb__$1,meta29048){
return (new cljs.core.async.t_cljs$core$async29047(flag__$1,cb__$1,meta29048));
});

}

return (new cljs.core.async.t_cljs$core$async29047(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29054_SHARP_){
var G__29070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29054_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29070) : fret.call(null,G__29070));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29055_SHARP_){
var G__29071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29055_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29071) : fret.call(null,G__29071));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32507 = (i + (1));
i = G__32507;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32512 = arguments.length;
var i__4737__auto___32513 = (0);
while(true){
if((i__4737__auto___32513 < len__4736__auto___32512)){
args__4742__auto__.push((arguments[i__4737__auto___32513]));

var G__32515 = (i__4737__auto___32513 + (1));
i__4737__auto___32513 = G__32515;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29094){
var map__29095 = p__29094;
var map__29095__$1 = (((((!((map__29095 == null))))?(((((map__29095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29095):map__29095);
var opts = map__29095__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29085){
var G__29086 = cljs.core.first(seq29085);
var seq29085__$1 = cljs.core.next(seq29085);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29086,seq29085__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29110 = arguments.length;
switch (G__29110) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28780__auto___32528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_29181){
var state_val_29182 = (state_29181[(1)]);
if((state_val_29182 === (7))){
var inst_29166 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
var statearr_29200_32530 = state_29181__$1;
(statearr_29200_32530[(2)] = inst_29166);

(statearr_29200_32530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (1))){
var state_29181__$1 = state_29181;
var statearr_29201_32531 = state_29181__$1;
(statearr_29201_32531[(2)] = null);

(statearr_29201_32531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (4))){
var inst_29135 = (state_29181[(7)]);
var inst_29135__$1 = (state_29181[(2)]);
var inst_29149 = (inst_29135__$1 == null);
var state_29181__$1 = (function (){var statearr_29202 = state_29181;
(statearr_29202[(7)] = inst_29135__$1);

return statearr_29202;
})();
if(cljs.core.truth_(inst_29149)){
var statearr_29206_32534 = state_29181__$1;
(statearr_29206_32534[(1)] = (5));

} else {
var statearr_29207_32535 = state_29181__$1;
(statearr_29207_32535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (13))){
var state_29181__$1 = state_29181;
var statearr_29212_32536 = state_29181__$1;
(statearr_29212_32536[(2)] = null);

(statearr_29212_32536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (6))){
var inst_29135 = (state_29181[(7)]);
var state_29181__$1 = state_29181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29181__$1,(11),to,inst_29135);
} else {
if((state_val_29182 === (3))){
var inst_29171 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29181__$1,inst_29171);
} else {
if((state_val_29182 === (12))){
var state_29181__$1 = state_29181;
var statearr_29222_32546 = state_29181__$1;
(statearr_29222_32546[(2)] = null);

(statearr_29222_32546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (2))){
var state_29181__$1 = state_29181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29181__$1,(4),from);
} else {
if((state_val_29182 === (11))){
var inst_29158 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
if(cljs.core.truth_(inst_29158)){
var statearr_29227_32547 = state_29181__$1;
(statearr_29227_32547[(1)] = (12));

} else {
var statearr_29228_32548 = state_29181__$1;
(statearr_29228_32548[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (9))){
var state_29181__$1 = state_29181;
var statearr_29229_32550 = state_29181__$1;
(statearr_29229_32550[(2)] = null);

(statearr_29229_32550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (5))){
var state_29181__$1 = state_29181;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29230_32551 = state_29181__$1;
(statearr_29230_32551[(1)] = (8));

} else {
var statearr_29231_32552 = state_29181__$1;
(statearr_29231_32552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (14))){
var inst_29164 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
var statearr_29232_32553 = state_29181__$1;
(statearr_29232_32553[(2)] = inst_29164);

(statearr_29232_32553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (10))){
var inst_29155 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
var statearr_29234_32555 = state_29181__$1;
(statearr_29234_32555[(2)] = inst_29155);

(statearr_29234_32555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (8))){
var inst_29152 = cljs.core.async.close_BANG_(to);
var state_29181__$1 = state_29181;
var statearr_29236_32557 = state_29181__$1;
(statearr_29236_32557[(2)] = inst_29152);

(statearr_29236_32557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_29242 = [null,null,null,null,null,null,null,null];
(statearr_29242[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_29242[(1)] = (1));

return statearr_29242;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_29181){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29181);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29243){var ex__28289__auto__ = e29243;
var statearr_29244_32561 = state_29181;
(statearr_29244_32561[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29181[(4)]))){
var statearr_29245_32562 = state_29181;
(statearr_29245_32562[(1)] = cljs.core.first((state_29181[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32563 = state_29181;
state_29181 = G__32563;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_29181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_29181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_29251 = f__28781__auto__();
(statearr_29251[(6)] = c__28780__auto___32528);

return statearr_29251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29253){
var vec__29254 = p__29253;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29254,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29254,(1),null);
var job = vec__29254;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28780__auto___32571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_29273){
var state_val_29274 = (state_29273[(1)]);
if((state_val_29274 === (1))){
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29273__$1,(2),res,v);
} else {
if((state_val_29274 === (2))){
var inst_29270 = (state_29273[(2)]);
var inst_29271 = cljs.core.async.close_BANG_(res);
var state_29273__$1 = (function (){var statearr_29281 = state_29273;
(statearr_29281[(7)] = inst_29270);

return statearr_29281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29273__$1,inst_29271);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_29282 = [null,null,null,null,null,null,null,null];
(statearr_29282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_29282[(1)] = (1));

return statearr_29282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_29273){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29273);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29285){var ex__28289__auto__ = e29285;
var statearr_29287_32581 = state_29273;
(statearr_29287_32581[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29273[(4)]))){
var statearr_29289_32586 = state_29273;
(statearr_29289_32586[(1)] = cljs.core.first((state_29273[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32588 = state_29273;
state_29273 = G__32588;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_29273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_29273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_29292 = f__28781__auto__();
(statearr_29292[(6)] = c__28780__auto___32571);

return statearr_29292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29293){
var vec__29294 = p__29293;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(1),null);
var job = vec__29294;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32591 = n;
var __32593 = (0);
while(true){
if((__32593 < n__4613__auto___32591)){
var G__29302_32594 = type;
var G__29302_32595__$1 = (((G__29302_32594 instanceof cljs.core.Keyword))?G__29302_32594.fqn:null);
switch (G__29302_32595__$1) {
case "compute":
var c__28780__auto___32599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32593,c__28780__auto___32599,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async){
return (function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = ((function (__32593,c__28780__auto___32599,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async){
return (function (state_29316){
var state_val_29317 = (state_29316[(1)]);
if((state_val_29317 === (1))){
var state_29316__$1 = state_29316;
var statearr_29325_32602 = state_29316__$1;
(statearr_29325_32602[(2)] = null);

(statearr_29325_32602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (2))){
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29316__$1,(4),jobs);
} else {
if((state_val_29317 === (3))){
var inst_29314 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29316__$1,inst_29314);
} else {
if((state_val_29317 === (4))){
var inst_29306 = (state_29316[(2)]);
var inst_29307 = process(inst_29306);
var state_29316__$1 = state_29316;
if(cljs.core.truth_(inst_29307)){
var statearr_29329_32606 = state_29316__$1;
(statearr_29329_32606[(1)] = (5));

} else {
var statearr_29330_32607 = state_29316__$1;
(statearr_29330_32607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (5))){
var state_29316__$1 = state_29316;
var statearr_29333_32611 = state_29316__$1;
(statearr_29333_32611[(2)] = null);

(statearr_29333_32611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (6))){
var state_29316__$1 = state_29316;
var statearr_29338_32614 = state_29316__$1;
(statearr_29338_32614[(2)] = null);

(statearr_29338_32614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (7))){
var inst_29312 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29339_32617 = state_29316__$1;
(statearr_29339_32617[(2)] = inst_29312);

(statearr_29339_32617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32593,c__28780__auto___32599,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async))
;
return ((function (__32593,switch__28285__auto__,c__28780__auto___32599,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_29345 = [null,null,null,null,null,null,null];
(statearr_29345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_29345[(1)] = (1));

return statearr_29345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_29316){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29316);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29347){var ex__28289__auto__ = e29347;
var statearr_29348_32622 = state_29316;
(statearr_29348_32622[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29316[(4)]))){
var statearr_29349_32625 = state_29316;
(statearr_29349_32625[(1)] = cljs.core.first((state_29316[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32626 = state_29316;
state_29316 = G__32626;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_29316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_29316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
;})(__32593,switch__28285__auto__,c__28780__auto___32599,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async))
})();
var state__28782__auto__ = (function (){var statearr_29353 = f__28781__auto__();
(statearr_29353[(6)] = c__28780__auto___32599);

return statearr_29353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
});})(__32593,c__28780__auto___32599,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async))
);


break;
case "async":
var c__28780__auto___32631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32593,c__28780__auto___32631,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async){
return (function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = ((function (__32593,c__28780__auto___32631,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async){
return (function (state_29369){
var state_val_29370 = (state_29369[(1)]);
if((state_val_29370 === (1))){
var state_29369__$1 = state_29369;
var statearr_29382_32632 = state_29369__$1;
(statearr_29382_32632[(2)] = null);

(statearr_29382_32632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (2))){
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29369__$1,(4),jobs);
} else {
if((state_val_29370 === (3))){
var inst_29367 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29369__$1,inst_29367);
} else {
if((state_val_29370 === (4))){
var inst_29359 = (state_29369[(2)]);
var inst_29360 = async(inst_29359);
var state_29369__$1 = state_29369;
if(cljs.core.truth_(inst_29360)){
var statearr_29398_32643 = state_29369__$1;
(statearr_29398_32643[(1)] = (5));

} else {
var statearr_29400_32644 = state_29369__$1;
(statearr_29400_32644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (5))){
var state_29369__$1 = state_29369;
var statearr_29405_32646 = state_29369__$1;
(statearr_29405_32646[(2)] = null);

(statearr_29405_32646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (6))){
var state_29369__$1 = state_29369;
var statearr_29406_32648 = state_29369__$1;
(statearr_29406_32648[(2)] = null);

(statearr_29406_32648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (7))){
var inst_29365 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29407_32653 = state_29369__$1;
(statearr_29407_32653[(2)] = inst_29365);

(statearr_29407_32653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32593,c__28780__auto___32631,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async))
;
return ((function (__32593,switch__28285__auto__,c__28780__auto___32631,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_29408 = [null,null,null,null,null,null,null];
(statearr_29408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_29408[(1)] = (1));

return statearr_29408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_29369){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29369);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29409){var ex__28289__auto__ = e29409;
var statearr_29413_32657 = state_29369;
(statearr_29413_32657[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29369[(4)]))){
var statearr_29415_32659 = state_29369;
(statearr_29415_32659[(1)] = cljs.core.first((state_29369[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32661 = state_29369;
state_29369 = G__32661;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_29369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_29369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
;})(__32593,switch__28285__auto__,c__28780__auto___32631,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async))
})();
var state__28782__auto__ = (function (){var statearr_29420 = f__28781__auto__();
(statearr_29420[(6)] = c__28780__auto___32631);

return statearr_29420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
});})(__32593,c__28780__auto___32631,G__29302_32594,G__29302_32595__$1,n__4613__auto___32591,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29302_32595__$1)].join('')));

}

var G__32664 = (__32593 + (1));
__32593 = G__32664;
continue;
} else {
}
break;
}

var c__28780__auto___32665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_29453){
var state_val_29454 = (state_29453[(1)]);
if((state_val_29454 === (7))){
var inst_29449 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
var statearr_29465_32668 = state_29453__$1;
(statearr_29465_32668[(2)] = inst_29449);

(statearr_29465_32668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (1))){
var state_29453__$1 = state_29453;
var statearr_29469_32671 = state_29453__$1;
(statearr_29469_32671[(2)] = null);

(statearr_29469_32671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (4))){
var inst_29428 = (state_29453[(7)]);
var inst_29428__$1 = (state_29453[(2)]);
var inst_29429 = (inst_29428__$1 == null);
var state_29453__$1 = (function (){var statearr_29474 = state_29453;
(statearr_29474[(7)] = inst_29428__$1);

return statearr_29474;
})();
if(cljs.core.truth_(inst_29429)){
var statearr_29477_32674 = state_29453__$1;
(statearr_29477_32674[(1)] = (5));

} else {
var statearr_29482_32675 = state_29453__$1;
(statearr_29482_32675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (6))){
var inst_29433 = (state_29453[(8)]);
var inst_29428 = (state_29453[(7)]);
var inst_29433__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29441 = [inst_29428,inst_29433__$1];
var inst_29442 = (new cljs.core.PersistentVector(null,2,(5),inst_29439,inst_29441,null));
var state_29453__$1 = (function (){var statearr_29498 = state_29453;
(statearr_29498[(8)] = inst_29433__$1);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29453__$1,(8),jobs,inst_29442);
} else {
if((state_val_29454 === (3))){
var inst_29451 = (state_29453[(2)]);
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29453__$1,inst_29451);
} else {
if((state_val_29454 === (2))){
var state_29453__$1 = state_29453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29453__$1,(4),from);
} else {
if((state_val_29454 === (9))){
var inst_29446 = (state_29453[(2)]);
var state_29453__$1 = (function (){var statearr_29506 = state_29453;
(statearr_29506[(9)] = inst_29446);

return statearr_29506;
})();
var statearr_29507_32679 = state_29453__$1;
(statearr_29507_32679[(2)] = null);

(statearr_29507_32679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (5))){
var inst_29431 = cljs.core.async.close_BANG_(jobs);
var state_29453__$1 = state_29453;
var statearr_29509_32682 = state_29453__$1;
(statearr_29509_32682[(2)] = inst_29431);

(statearr_29509_32682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29454 === (8))){
var inst_29433 = (state_29453[(8)]);
var inst_29444 = (state_29453[(2)]);
var state_29453__$1 = (function (){var statearr_29513 = state_29453;
(statearr_29513[(10)] = inst_29444);

return statearr_29513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29453__$1,(9),results,inst_29433);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_29524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_29524[(1)] = (1));

return statearr_29524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_29453){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29453);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29531){var ex__28289__auto__ = e29531;
var statearr_29533_32687 = state_29453;
(statearr_29533_32687[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29453[(4)]))){
var statearr_29538_32688 = state_29453;
(statearr_29538_32688[(1)] = cljs.core.first((state_29453[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32689 = state_29453;
state_29453 = G__32689;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_29453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_29453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_29539 = f__28781__auto__();
(statearr_29539[(6)] = c__28780__auto___32665);

return statearr_29539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


var c__28780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_29604){
var state_val_29605 = (state_29604[(1)]);
if((state_val_29605 === (7))){
var inst_29597 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29606_32696 = state_29604__$1;
(statearr_29606_32696[(2)] = inst_29597);

(statearr_29606_32696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (20))){
var state_29604__$1 = state_29604;
var statearr_29607_32697 = state_29604__$1;
(statearr_29607_32697[(2)] = null);

(statearr_29607_32697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (1))){
var state_29604__$1 = state_29604;
var statearr_29608_32699 = state_29604__$1;
(statearr_29608_32699[(2)] = null);

(statearr_29608_32699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (4))){
var inst_29547 = (state_29604[(7)]);
var inst_29547__$1 = (state_29604[(2)]);
var inst_29551 = (inst_29547__$1 == null);
var state_29604__$1 = (function (){var statearr_29609 = state_29604;
(statearr_29609[(7)] = inst_29547__$1);

return statearr_29609;
})();
if(cljs.core.truth_(inst_29551)){
var statearr_29610_32706 = state_29604__$1;
(statearr_29610_32706[(1)] = (5));

} else {
var statearr_29614_32707 = state_29604__$1;
(statearr_29614_32707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (15))){
var inst_29570 = (state_29604[(8)]);
var state_29604__$1 = state_29604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29604__$1,(18),to,inst_29570);
} else {
if((state_val_29605 === (21))){
var inst_29592 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29616_32709 = state_29604__$1;
(statearr_29616_32709[(2)] = inst_29592);

(statearr_29616_32709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (13))){
var inst_29594 = (state_29604[(2)]);
var state_29604__$1 = (function (){var statearr_29617 = state_29604;
(statearr_29617[(9)] = inst_29594);

return statearr_29617;
})();
var statearr_29618_32711 = state_29604__$1;
(statearr_29618_32711[(2)] = null);

(statearr_29618_32711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (6))){
var inst_29547 = (state_29604[(7)]);
var state_29604__$1 = state_29604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29604__$1,(11),inst_29547);
} else {
if((state_val_29605 === (17))){
var inst_29587 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
if(cljs.core.truth_(inst_29587)){
var statearr_29619_32716 = state_29604__$1;
(statearr_29619_32716[(1)] = (19));

} else {
var statearr_29620_32717 = state_29604__$1;
(statearr_29620_32717[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (3))){
var inst_29599 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29604__$1,inst_29599);
} else {
if((state_val_29605 === (12))){
var inst_29565 = (state_29604[(10)]);
var state_29604__$1 = state_29604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29604__$1,(14),inst_29565);
} else {
if((state_val_29605 === (2))){
var state_29604__$1 = state_29604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29604__$1,(4),results);
} else {
if((state_val_29605 === (19))){
var state_29604__$1 = state_29604;
var statearr_29621_32725 = state_29604__$1;
(statearr_29621_32725[(2)] = null);

(statearr_29621_32725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (11))){
var inst_29565 = (state_29604[(2)]);
var state_29604__$1 = (function (){var statearr_29622 = state_29604;
(statearr_29622[(10)] = inst_29565);

return statearr_29622;
})();
var statearr_29623_32738 = state_29604__$1;
(statearr_29623_32738[(2)] = null);

(statearr_29623_32738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (9))){
var state_29604__$1 = state_29604;
var statearr_29625_32739 = state_29604__$1;
(statearr_29625_32739[(2)] = null);

(statearr_29625_32739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (5))){
var state_29604__$1 = state_29604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29627_32751 = state_29604__$1;
(statearr_29627_32751[(1)] = (8));

} else {
var statearr_29628_32752 = state_29604__$1;
(statearr_29628_32752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (14))){
var inst_29570 = (state_29604[(8)]);
var inst_29570__$1 = (state_29604[(2)]);
var inst_29580 = (inst_29570__$1 == null);
var inst_29581 = cljs.core.not(inst_29580);
var state_29604__$1 = (function (){var statearr_29634 = state_29604;
(statearr_29634[(8)] = inst_29570__$1);

return statearr_29634;
})();
if(inst_29581){
var statearr_29635_32756 = state_29604__$1;
(statearr_29635_32756[(1)] = (15));

} else {
var statearr_29636_32757 = state_29604__$1;
(statearr_29636_32757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (16))){
var state_29604__$1 = state_29604;
var statearr_29641_32760 = state_29604__$1;
(statearr_29641_32760[(2)] = false);

(statearr_29641_32760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (10))){
var inst_29561 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29642_32763 = state_29604__$1;
(statearr_29642_32763[(2)] = inst_29561);

(statearr_29642_32763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (18))){
var inst_29584 = (state_29604[(2)]);
var state_29604__$1 = state_29604;
var statearr_29646_32765 = state_29604__$1;
(statearr_29646_32765[(2)] = inst_29584);

(statearr_29646_32765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29605 === (8))){
var inst_29558 = cljs.core.async.close_BANG_(to);
var state_29604__$1 = state_29604;
var statearr_29651_32767 = state_29604__$1;
(statearr_29651_32767[(2)] = inst_29558);

(statearr_29651_32767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_29653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__);

(statearr_29653[(1)] = (1));

return statearr_29653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1 = (function (state_29604){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29604);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29654){var ex__28289__auto__ = e29654;
var statearr_29655_32771 = state_29604;
(statearr_29655_32771[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29604[(4)]))){
var statearr_29657_32773 = state_29604;
(statearr_29657_32773[(1)] = cljs.core.first((state_29604[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32775 = state_29604;
state_29604 = G__32775;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__ = function(state_29604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1.call(this,state_29604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_29660 = f__28781__auto__();
(statearr_29660[(6)] = c__28780__auto__);

return statearr_29660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));

return c__28780__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29664 = arguments.length;
switch (G__29664) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29669 = arguments.length;
switch (G__29669) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29676 = arguments.length;
switch (G__29676) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28780__auto___32824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_29709){
var state_val_29710 = (state_29709[(1)]);
if((state_val_29710 === (7))){
var inst_29705 = (state_29709[(2)]);
var state_29709__$1 = state_29709;
var statearr_29720_32827 = state_29709__$1;
(statearr_29720_32827[(2)] = inst_29705);

(statearr_29720_32827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (1))){
var state_29709__$1 = state_29709;
var statearr_29727_32832 = state_29709__$1;
(statearr_29727_32832[(2)] = null);

(statearr_29727_32832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (4))){
var inst_29684 = (state_29709[(7)]);
var inst_29684__$1 = (state_29709[(2)]);
var inst_29686 = (inst_29684__$1 == null);
var state_29709__$1 = (function (){var statearr_29737 = state_29709;
(statearr_29737[(7)] = inst_29684__$1);

return statearr_29737;
})();
if(cljs.core.truth_(inst_29686)){
var statearr_29744_32841 = state_29709__$1;
(statearr_29744_32841[(1)] = (5));

} else {
var statearr_29751_32843 = state_29709__$1;
(statearr_29751_32843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (13))){
var state_29709__$1 = state_29709;
var statearr_29752_32844 = state_29709__$1;
(statearr_29752_32844[(2)] = null);

(statearr_29752_32844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (6))){
var inst_29684 = (state_29709[(7)]);
var inst_29691 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29684) : p.call(null,inst_29684));
var state_29709__$1 = state_29709;
if(cljs.core.truth_(inst_29691)){
var statearr_29753_32850 = state_29709__$1;
(statearr_29753_32850[(1)] = (9));

} else {
var statearr_29754_32851 = state_29709__$1;
(statearr_29754_32851[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (3))){
var inst_29707 = (state_29709[(2)]);
var state_29709__$1 = state_29709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29709__$1,inst_29707);
} else {
if((state_val_29710 === (12))){
var state_29709__$1 = state_29709;
var statearr_29762_32852 = state_29709__$1;
(statearr_29762_32852[(2)] = null);

(statearr_29762_32852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (2))){
var state_29709__$1 = state_29709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29709__$1,(4),ch);
} else {
if((state_val_29710 === (11))){
var inst_29684 = (state_29709[(7)]);
var inst_29695 = (state_29709[(2)]);
var state_29709__$1 = state_29709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29709__$1,(8),inst_29695,inst_29684);
} else {
if((state_val_29710 === (9))){
var state_29709__$1 = state_29709;
var statearr_29767_32855 = state_29709__$1;
(statearr_29767_32855[(2)] = tc);

(statearr_29767_32855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (5))){
var inst_29688 = cljs.core.async.close_BANG_(tc);
var inst_29689 = cljs.core.async.close_BANG_(fc);
var state_29709__$1 = (function (){var statearr_29768 = state_29709;
(statearr_29768[(8)] = inst_29688);

return statearr_29768;
})();
var statearr_29769_32860 = state_29709__$1;
(statearr_29769_32860[(2)] = inst_29689);

(statearr_29769_32860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (14))){
var inst_29703 = (state_29709[(2)]);
var state_29709__$1 = state_29709;
var statearr_29770_32862 = state_29709__$1;
(statearr_29770_32862[(2)] = inst_29703);

(statearr_29770_32862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (10))){
var state_29709__$1 = state_29709;
var statearr_29772_32864 = state_29709__$1;
(statearr_29772_32864[(2)] = fc);

(statearr_29772_32864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (8))){
var inst_29697 = (state_29709[(2)]);
var state_29709__$1 = state_29709;
if(cljs.core.truth_(inst_29697)){
var statearr_29775_32865 = state_29709__$1;
(statearr_29775_32865[(1)] = (12));

} else {
var statearr_29776_32866 = state_29709__$1;
(statearr_29776_32866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_29781 = [null,null,null,null,null,null,null,null,null];
(statearr_29781[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_29781[(1)] = (1));

return statearr_29781;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_29709){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29709);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29782){var ex__28289__auto__ = e29782;
var statearr_29783_32868 = state_29709;
(statearr_29783_32868[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29709[(4)]))){
var statearr_29784_32870 = state_29709;
(statearr_29784_32870[(1)] = cljs.core.first((state_29709[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32872 = state_29709;
state_29709 = G__32872;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_29709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_29709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_29787 = f__28781__auto__();
(statearr_29787[(6)] = c__28780__auto___32824);

return statearr_29787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_29813){
var state_val_29814 = (state_29813[(1)]);
if((state_val_29814 === (7))){
var inst_29809 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29819_32877 = state_29813__$1;
(statearr_29819_32877[(2)] = inst_29809);

(statearr_29819_32877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (1))){
var inst_29791 = init;
var inst_29793 = inst_29791;
var state_29813__$1 = (function (){var statearr_29823 = state_29813;
(statearr_29823[(7)] = inst_29793);

return statearr_29823;
})();
var statearr_29824_32878 = state_29813__$1;
(statearr_29824_32878[(2)] = null);

(statearr_29824_32878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (4))){
var inst_29796 = (state_29813[(8)]);
var inst_29796__$1 = (state_29813[(2)]);
var inst_29797 = (inst_29796__$1 == null);
var state_29813__$1 = (function (){var statearr_29826 = state_29813;
(statearr_29826[(8)] = inst_29796__$1);

return statearr_29826;
})();
if(cljs.core.truth_(inst_29797)){
var statearr_29827_32880 = state_29813__$1;
(statearr_29827_32880[(1)] = (5));

} else {
var statearr_29828_32881 = state_29813__$1;
(statearr_29828_32881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (6))){
var inst_29796 = (state_29813[(8)]);
var inst_29800 = (state_29813[(9)]);
var inst_29793 = (state_29813[(7)]);
var inst_29800__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29793,inst_29796) : f.call(null,inst_29793,inst_29796));
var inst_29801 = cljs.core.reduced_QMARK_(inst_29800__$1);
var state_29813__$1 = (function (){var statearr_29829 = state_29813;
(statearr_29829[(9)] = inst_29800__$1);

return statearr_29829;
})();
if(inst_29801){
var statearr_29830_32886 = state_29813__$1;
(statearr_29830_32886[(1)] = (8));

} else {
var statearr_29831_32887 = state_29813__$1;
(statearr_29831_32887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (3))){
var inst_29811 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29813__$1,inst_29811);
} else {
if((state_val_29814 === (2))){
var state_29813__$1 = state_29813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29813__$1,(4),ch);
} else {
if((state_val_29814 === (9))){
var inst_29800 = (state_29813[(9)]);
var inst_29793 = inst_29800;
var state_29813__$1 = (function (){var statearr_29837 = state_29813;
(statearr_29837[(7)] = inst_29793);

return statearr_29837;
})();
var statearr_29838_32888 = state_29813__$1;
(statearr_29838_32888[(2)] = null);

(statearr_29838_32888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (5))){
var inst_29793 = (state_29813[(7)]);
var state_29813__$1 = state_29813;
var statearr_29839_32889 = state_29813__$1;
(statearr_29839_32889[(2)] = inst_29793);

(statearr_29839_32889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (10))){
var inst_29807 = (state_29813[(2)]);
var state_29813__$1 = state_29813;
var statearr_29840_32892 = state_29813__$1;
(statearr_29840_32892[(2)] = inst_29807);

(statearr_29840_32892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29814 === (8))){
var inst_29800 = (state_29813[(9)]);
var inst_29803 = cljs.core.deref(inst_29800);
var state_29813__$1 = state_29813;
var statearr_29841_32893 = state_29813__$1;
(statearr_29841_32893[(2)] = inst_29803);

(statearr_29841_32893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28286__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28286__auto____0 = (function (){
var statearr_29843 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29843[(0)] = cljs$core$async$reduce_$_state_machine__28286__auto__);

(statearr_29843[(1)] = (1));

return statearr_29843;
});
var cljs$core$async$reduce_$_state_machine__28286__auto____1 = (function (state_29813){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29813);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29845){var ex__28289__auto__ = e29845;
var statearr_29846_32897 = state_29813;
(statearr_29846_32897[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29813[(4)]))){
var statearr_29847_32899 = state_29813;
(statearr_29847_32899[(1)] = cljs.core.first((state_29813[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32900 = state_29813;
state_29813 = G__32900;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28286__auto__ = function(state_29813){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28286__auto____1.call(this,state_29813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28286__auto____0;
cljs$core$async$reduce_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28286__auto____1;
return cljs$core$async$reduce_$_state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_29848 = f__28781__auto__();
(statearr_29848[(6)] = c__28780__auto__);

return statearr_29848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));

return c__28780__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_29854){
var state_val_29855 = (state_29854[(1)]);
if((state_val_29855 === (1))){
var inst_29849 = cljs.core.async.reduce(f__$1,init,ch);
var state_29854__$1 = state_29854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29854__$1,(2),inst_29849);
} else {
if((state_val_29855 === (2))){
var inst_29851 = (state_29854[(2)]);
var inst_29852 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29851) : f__$1.call(null,inst_29851));
var state_29854__$1 = state_29854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29854__$1,inst_29852);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28286__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28286__auto____0 = (function (){
var statearr_29859 = [null,null,null,null,null,null,null];
(statearr_29859[(0)] = cljs$core$async$transduce_$_state_machine__28286__auto__);

(statearr_29859[(1)] = (1));

return statearr_29859;
});
var cljs$core$async$transduce_$_state_machine__28286__auto____1 = (function (state_29854){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29854);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29860){var ex__28289__auto__ = e29860;
var statearr_29861_32908 = state_29854;
(statearr_29861_32908[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29854[(4)]))){
var statearr_29865_32911 = state_29854;
(statearr_29865_32911[(1)] = cljs.core.first((state_29854[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32912 = state_29854;
state_29854 = G__32912;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28286__auto__ = function(state_29854){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28286__auto____1.call(this,state_29854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28286__auto____0;
cljs$core$async$transduce_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28286__auto____1;
return cljs$core$async$transduce_$_state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_29875 = f__28781__auto__();
(statearr_29875[(6)] = c__28780__auto__);

return statearr_29875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));

return c__28780__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29884 = arguments.length;
switch (G__29884) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_29913){
var state_val_29914 = (state_29913[(1)]);
if((state_val_29914 === (7))){
var inst_29892 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29916_32921 = state_29913__$1;
(statearr_29916_32921[(2)] = inst_29892);

(statearr_29916_32921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (1))){
var inst_29886 = cljs.core.seq(coll);
var inst_29887 = inst_29886;
var state_29913__$1 = (function (){var statearr_29923 = state_29913;
(statearr_29923[(7)] = inst_29887);

return statearr_29923;
})();
var statearr_29924_32923 = state_29913__$1;
(statearr_29924_32923[(2)] = null);

(statearr_29924_32923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (4))){
var inst_29887 = (state_29913[(7)]);
var inst_29890 = cljs.core.first(inst_29887);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29913__$1,(7),ch,inst_29890);
} else {
if((state_val_29914 === (13))){
var inst_29904 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29928_32928 = state_29913__$1;
(statearr_29928_32928[(2)] = inst_29904);

(statearr_29928_32928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (6))){
var inst_29895 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29895)){
var statearr_29929_32933 = state_29913__$1;
(statearr_29929_32933[(1)] = (8));

} else {
var statearr_29930_32934 = state_29913__$1;
(statearr_29930_32934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (3))){
var inst_29911 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29913__$1,inst_29911);
} else {
if((state_val_29914 === (12))){
var state_29913__$1 = state_29913;
var statearr_29931_32936 = state_29913__$1;
(statearr_29931_32936[(2)] = null);

(statearr_29931_32936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (2))){
var inst_29887 = (state_29913[(7)]);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29887)){
var statearr_29932_32937 = state_29913__$1;
(statearr_29932_32937[(1)] = (4));

} else {
var statearr_29935_32938 = state_29913__$1;
(statearr_29935_32938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (11))){
var inst_29901 = cljs.core.async.close_BANG_(ch);
var state_29913__$1 = state_29913;
var statearr_29942_32946 = state_29913__$1;
(statearr_29942_32946[(2)] = inst_29901);

(statearr_29942_32946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (9))){
var state_29913__$1 = state_29913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29945_32950 = state_29913__$1;
(statearr_29945_32950[(1)] = (11));

} else {
var statearr_29946_32952 = state_29913__$1;
(statearr_29946_32952[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (5))){
var inst_29887 = (state_29913[(7)]);
var state_29913__$1 = state_29913;
var statearr_29950_32954 = state_29913__$1;
(statearr_29950_32954[(2)] = inst_29887);

(statearr_29950_32954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (10))){
var inst_29906 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29951_32957 = state_29913__$1;
(statearr_29951_32957[(2)] = inst_29906);

(statearr_29951_32957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (8))){
var inst_29887 = (state_29913[(7)]);
var inst_29897 = cljs.core.next(inst_29887);
var inst_29887__$1 = inst_29897;
var state_29913__$1 = (function (){var statearr_29952 = state_29913;
(statearr_29952[(7)] = inst_29887__$1);

return statearr_29952;
})();
var statearr_29955_32960 = state_29913__$1;
(statearr_29955_32960[(2)] = null);

(statearr_29955_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_29957 = [null,null,null,null,null,null,null,null];
(statearr_29957[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_29957[(1)] = (1));

return statearr_29957;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_29913){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_29913);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e29959){var ex__28289__auto__ = e29959;
var statearr_29961_32970 = state_29913;
(statearr_29961_32970[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_29913[(4)]))){
var statearr_29965_32972 = state_29913;
(statearr_29965_32972[(1)] = cljs.core.first((state_29913[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32976 = state_29913;
state_29913 = G__32976;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_29913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_29913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_29967 = f__28781__auto__();
(statearr_29967[(6)] = c__28780__auto__);

return statearr_29967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));

return c__28780__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29981 = arguments.length;
switch (G__29981) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32988 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32988(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33000 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33000(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33022 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33022(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33036 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33036(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30038 = (function (ch,cs,meta30039){
this.ch = ch;
this.cs = cs;
this.meta30039 = meta30039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30040,meta30039__$1){
var self__ = this;
var _30040__$1 = this;
return (new cljs.core.async.t_cljs$core$async30038(self__.ch,self__.cs,meta30039__$1));
}));

(cljs.core.async.t_cljs$core$async30038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30040){
var self__ = this;
var _30040__$1 = this;
return self__.meta30039;
}));

(cljs.core.async.t_cljs$core$async30038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30038.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30038.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30038.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30038.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30039","meta30039",575255638,null)], null);
}));

(cljs.core.async.t_cljs$core$async30038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30038");

(cljs.core.async.t_cljs$core$async30038.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30038.
 */
cljs.core.async.__GT_t_cljs$core$async30038 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30038(ch__$1,cs__$1,meta30039){
return (new cljs.core.async.t_cljs$core$async30038(ch__$1,cs__$1,meta30039));
});

}

return (new cljs.core.async.t_cljs$core$async30038(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28780__auto___33066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_30247){
var state_val_30248 = (state_30247[(1)]);
if((state_val_30248 === (7))){
var inst_30243 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30256_33068 = state_30247__$1;
(statearr_30256_33068[(2)] = inst_30243);

(statearr_30256_33068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (20))){
var inst_30128 = (state_30247[(7)]);
var inst_30142 = cljs.core.first(inst_30128);
var inst_30143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30142,(0),null);
var inst_30144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30142,(1),null);
var state_30247__$1 = (function (){var statearr_30258 = state_30247;
(statearr_30258[(8)] = inst_30143);

return statearr_30258;
})();
if(cljs.core.truth_(inst_30144)){
var statearr_30260_33073 = state_30247__$1;
(statearr_30260_33073[(1)] = (22));

} else {
var statearr_30261_33074 = state_30247__$1;
(statearr_30261_33074[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (27))){
var inst_30186 = (state_30247[(9)]);
var inst_30181 = (state_30247[(10)]);
var inst_30079 = (state_30247[(11)]);
var inst_30179 = (state_30247[(12)]);
var inst_30186__$1 = cljs.core._nth(inst_30179,inst_30181);
var inst_30187 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30186__$1,inst_30079,done);
var state_30247__$1 = (function (){var statearr_30265 = state_30247;
(statearr_30265[(9)] = inst_30186__$1);

return statearr_30265;
})();
if(cljs.core.truth_(inst_30187)){
var statearr_30266_33078 = state_30247__$1;
(statearr_30266_33078[(1)] = (30));

} else {
var statearr_30267_33079 = state_30247__$1;
(statearr_30267_33079[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (1))){
var state_30247__$1 = state_30247;
var statearr_30268_33080 = state_30247__$1;
(statearr_30268_33080[(2)] = null);

(statearr_30268_33080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (24))){
var inst_30128 = (state_30247[(7)]);
var inst_30150 = (state_30247[(2)]);
var inst_30153 = cljs.core.next(inst_30128);
var inst_30088 = inst_30153;
var inst_30089 = null;
var inst_30090 = (0);
var inst_30091 = (0);
var state_30247__$1 = (function (){var statearr_30270 = state_30247;
(statearr_30270[(13)] = inst_30090);

(statearr_30270[(14)] = inst_30150);

(statearr_30270[(15)] = inst_30089);

(statearr_30270[(16)] = inst_30088);

(statearr_30270[(17)] = inst_30091);

return statearr_30270;
})();
var statearr_30277_33081 = state_30247__$1;
(statearr_30277_33081[(2)] = null);

(statearr_30277_33081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (39))){
var state_30247__$1 = state_30247;
var statearr_30288_33082 = state_30247__$1;
(statearr_30288_33082[(2)] = null);

(statearr_30288_33082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (4))){
var inst_30079 = (state_30247[(11)]);
var inst_30079__$1 = (state_30247[(2)]);
var inst_30080 = (inst_30079__$1 == null);
var state_30247__$1 = (function (){var statearr_30289 = state_30247;
(statearr_30289[(11)] = inst_30079__$1);

return statearr_30289;
})();
if(cljs.core.truth_(inst_30080)){
var statearr_30291_33086 = state_30247__$1;
(statearr_30291_33086[(1)] = (5));

} else {
var statearr_30292_33087 = state_30247__$1;
(statearr_30292_33087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (15))){
var inst_30090 = (state_30247[(13)]);
var inst_30089 = (state_30247[(15)]);
var inst_30088 = (state_30247[(16)]);
var inst_30091 = (state_30247[(17)]);
var inst_30123 = (state_30247[(2)]);
var inst_30124 = (inst_30091 + (1));
var tmp30285 = inst_30090;
var tmp30286 = inst_30089;
var tmp30287 = inst_30088;
var inst_30088__$1 = tmp30287;
var inst_30089__$1 = tmp30286;
var inst_30090__$1 = tmp30285;
var inst_30091__$1 = inst_30124;
var state_30247__$1 = (function (){var statearr_30293 = state_30247;
(statearr_30293[(13)] = inst_30090__$1);

(statearr_30293[(15)] = inst_30089__$1);

(statearr_30293[(18)] = inst_30123);

(statearr_30293[(16)] = inst_30088__$1);

(statearr_30293[(17)] = inst_30091__$1);

return statearr_30293;
})();
var statearr_30294_33093 = state_30247__$1;
(statearr_30294_33093[(2)] = null);

(statearr_30294_33093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (21))){
var inst_30156 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30304_33099 = state_30247__$1;
(statearr_30304_33099[(2)] = inst_30156);

(statearr_30304_33099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (31))){
var inst_30186 = (state_30247[(9)]);
var inst_30191 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30186);
var state_30247__$1 = state_30247;
var statearr_30312_33105 = state_30247__$1;
(statearr_30312_33105[(2)] = inst_30191);

(statearr_30312_33105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (32))){
var inst_30180 = (state_30247[(19)]);
var inst_30178 = (state_30247[(20)]);
var inst_30181 = (state_30247[(10)]);
var inst_30179 = (state_30247[(12)]);
var inst_30193 = (state_30247[(2)]);
var inst_30194 = (inst_30181 + (1));
var tmp30295 = inst_30180;
var tmp30296 = inst_30178;
var tmp30297 = inst_30179;
var inst_30178__$1 = tmp30296;
var inst_30179__$1 = tmp30297;
var inst_30180__$1 = tmp30295;
var inst_30181__$1 = inst_30194;
var state_30247__$1 = (function (){var statearr_30316 = state_30247;
(statearr_30316[(21)] = inst_30193);

(statearr_30316[(19)] = inst_30180__$1);

(statearr_30316[(20)] = inst_30178__$1);

(statearr_30316[(10)] = inst_30181__$1);

(statearr_30316[(12)] = inst_30179__$1);

return statearr_30316;
})();
var statearr_30322_33112 = state_30247__$1;
(statearr_30322_33112[(2)] = null);

(statearr_30322_33112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (40))){
var inst_30213 = (state_30247[(22)]);
var inst_30218 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30213);
var state_30247__$1 = state_30247;
var statearr_30323_33114 = state_30247__$1;
(statearr_30323_33114[(2)] = inst_30218);

(statearr_30323_33114[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (33))){
var inst_30198 = (state_30247[(23)]);
var inst_30203 = cljs.core.chunked_seq_QMARK_(inst_30198);
var state_30247__$1 = state_30247;
if(inst_30203){
var statearr_30325_33117 = state_30247__$1;
(statearr_30325_33117[(1)] = (36));

} else {
var statearr_30328_33118 = state_30247__$1;
(statearr_30328_33118[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (13))){
var inst_30103 = (state_30247[(24)]);
var inst_30119 = cljs.core.async.close_BANG_(inst_30103);
var state_30247__$1 = state_30247;
var statearr_30335_33119 = state_30247__$1;
(statearr_30335_33119[(2)] = inst_30119);

(statearr_30335_33119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (22))){
var inst_30143 = (state_30247[(8)]);
var inst_30147 = cljs.core.async.close_BANG_(inst_30143);
var state_30247__$1 = state_30247;
var statearr_30345_33120 = state_30247__$1;
(statearr_30345_33120[(2)] = inst_30147);

(statearr_30345_33120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (36))){
var inst_30198 = (state_30247[(23)]);
var inst_30206 = cljs.core.chunk_first(inst_30198);
var inst_30207 = cljs.core.chunk_rest(inst_30198);
var inst_30210 = cljs.core.count(inst_30206);
var inst_30178 = inst_30207;
var inst_30179 = inst_30206;
var inst_30180 = inst_30210;
var inst_30181 = (0);
var state_30247__$1 = (function (){var statearr_30347 = state_30247;
(statearr_30347[(19)] = inst_30180);

(statearr_30347[(20)] = inst_30178);

(statearr_30347[(10)] = inst_30181);

(statearr_30347[(12)] = inst_30179);

return statearr_30347;
})();
var statearr_30350_33128 = state_30247__$1;
(statearr_30350_33128[(2)] = null);

(statearr_30350_33128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (41))){
var inst_30198 = (state_30247[(23)]);
var inst_30220 = (state_30247[(2)]);
var inst_30221 = cljs.core.next(inst_30198);
var inst_30178 = inst_30221;
var inst_30179 = null;
var inst_30180 = (0);
var inst_30181 = (0);
var state_30247__$1 = (function (){var statearr_30357 = state_30247;
(statearr_30357[(19)] = inst_30180);

(statearr_30357[(20)] = inst_30178);

(statearr_30357[(10)] = inst_30181);

(statearr_30357[(25)] = inst_30220);

(statearr_30357[(12)] = inst_30179);

return statearr_30357;
})();
var statearr_30360_33133 = state_30247__$1;
(statearr_30360_33133[(2)] = null);

(statearr_30360_33133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (43))){
var state_30247__$1 = state_30247;
var statearr_30361_33134 = state_30247__$1;
(statearr_30361_33134[(2)] = null);

(statearr_30361_33134[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (29))){
var inst_30229 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30367_33135 = state_30247__$1;
(statearr_30367_33135[(2)] = inst_30229);

(statearr_30367_33135[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (44))){
var inst_30240 = (state_30247[(2)]);
var state_30247__$1 = (function (){var statearr_30369 = state_30247;
(statearr_30369[(26)] = inst_30240);

return statearr_30369;
})();
var statearr_30372_33136 = state_30247__$1;
(statearr_30372_33136[(2)] = null);

(statearr_30372_33136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (6))){
var inst_30169 = (state_30247[(27)]);
var inst_30168 = cljs.core.deref(cs);
var inst_30169__$1 = cljs.core.keys(inst_30168);
var inst_30170 = cljs.core.count(inst_30169__$1);
var inst_30171 = cljs.core.reset_BANG_(dctr,inst_30170);
var inst_30177 = cljs.core.seq(inst_30169__$1);
var inst_30178 = inst_30177;
var inst_30179 = null;
var inst_30180 = (0);
var inst_30181 = (0);
var state_30247__$1 = (function (){var statearr_30374 = state_30247;
(statearr_30374[(27)] = inst_30169__$1);

(statearr_30374[(19)] = inst_30180);

(statearr_30374[(20)] = inst_30178);

(statearr_30374[(28)] = inst_30171);

(statearr_30374[(10)] = inst_30181);

(statearr_30374[(12)] = inst_30179);

return statearr_30374;
})();
var statearr_30376_33145 = state_30247__$1;
(statearr_30376_33145[(2)] = null);

(statearr_30376_33145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (28))){
var inst_30178 = (state_30247[(20)]);
var inst_30198 = (state_30247[(23)]);
var inst_30198__$1 = cljs.core.seq(inst_30178);
var state_30247__$1 = (function (){var statearr_30378 = state_30247;
(statearr_30378[(23)] = inst_30198__$1);

return statearr_30378;
})();
if(inst_30198__$1){
var statearr_30380_33146 = state_30247__$1;
(statearr_30380_33146[(1)] = (33));

} else {
var statearr_30381_33147 = state_30247__$1;
(statearr_30381_33147[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (25))){
var inst_30180 = (state_30247[(19)]);
var inst_30181 = (state_30247[(10)]);
var inst_30183 = (inst_30181 < inst_30180);
var inst_30184 = inst_30183;
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30184)){
var statearr_30383_33148 = state_30247__$1;
(statearr_30383_33148[(1)] = (27));

} else {
var statearr_30384_33149 = state_30247__$1;
(statearr_30384_33149[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (34))){
var state_30247__$1 = state_30247;
var statearr_30387_33150 = state_30247__$1;
(statearr_30387_33150[(2)] = null);

(statearr_30387_33150[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (17))){
var state_30247__$1 = state_30247;
var statearr_30388_33151 = state_30247__$1;
(statearr_30388_33151[(2)] = null);

(statearr_30388_33151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (3))){
var inst_30245 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30247__$1,inst_30245);
} else {
if((state_val_30248 === (12))){
var inst_30161 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30390_33152 = state_30247__$1;
(statearr_30390_33152[(2)] = inst_30161);

(statearr_30390_33152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (2))){
var state_30247__$1 = state_30247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30247__$1,(4),ch);
} else {
if((state_val_30248 === (23))){
var state_30247__$1 = state_30247;
var statearr_30399_33153 = state_30247__$1;
(statearr_30399_33153[(2)] = null);

(statearr_30399_33153[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (35))){
var inst_30227 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30401_33158 = state_30247__$1;
(statearr_30401_33158[(2)] = inst_30227);

(statearr_30401_33158[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (19))){
var inst_30128 = (state_30247[(7)]);
var inst_30132 = cljs.core.chunk_first(inst_30128);
var inst_30133 = cljs.core.chunk_rest(inst_30128);
var inst_30134 = cljs.core.count(inst_30132);
var inst_30088 = inst_30133;
var inst_30089 = inst_30132;
var inst_30090 = inst_30134;
var inst_30091 = (0);
var state_30247__$1 = (function (){var statearr_30402 = state_30247;
(statearr_30402[(13)] = inst_30090);

(statearr_30402[(15)] = inst_30089);

(statearr_30402[(16)] = inst_30088);

(statearr_30402[(17)] = inst_30091);

return statearr_30402;
})();
var statearr_30405_33159 = state_30247__$1;
(statearr_30405_33159[(2)] = null);

(statearr_30405_33159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (11))){
var inst_30128 = (state_30247[(7)]);
var inst_30088 = (state_30247[(16)]);
var inst_30128__$1 = cljs.core.seq(inst_30088);
var state_30247__$1 = (function (){var statearr_30407 = state_30247;
(statearr_30407[(7)] = inst_30128__$1);

return statearr_30407;
})();
if(inst_30128__$1){
var statearr_30408_33162 = state_30247__$1;
(statearr_30408_33162[(1)] = (16));

} else {
var statearr_30409_33163 = state_30247__$1;
(statearr_30409_33163[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (9))){
var inst_30163 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30410_33165 = state_30247__$1;
(statearr_30410_33165[(2)] = inst_30163);

(statearr_30410_33165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (5))){
var inst_30086 = cljs.core.deref(cs);
var inst_30087 = cljs.core.seq(inst_30086);
var inst_30088 = inst_30087;
var inst_30089 = null;
var inst_30090 = (0);
var inst_30091 = (0);
var state_30247__$1 = (function (){var statearr_30419 = state_30247;
(statearr_30419[(13)] = inst_30090);

(statearr_30419[(15)] = inst_30089);

(statearr_30419[(16)] = inst_30088);

(statearr_30419[(17)] = inst_30091);

return statearr_30419;
})();
var statearr_30420_33169 = state_30247__$1;
(statearr_30420_33169[(2)] = null);

(statearr_30420_33169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (14))){
var state_30247__$1 = state_30247;
var statearr_30422_33171 = state_30247__$1;
(statearr_30422_33171[(2)] = null);

(statearr_30422_33171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (45))){
var inst_30237 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30423_33176 = state_30247__$1;
(statearr_30423_33176[(2)] = inst_30237);

(statearr_30423_33176[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (26))){
var inst_30169 = (state_30247[(27)]);
var inst_30231 = (state_30247[(2)]);
var inst_30234 = cljs.core.seq(inst_30169);
var state_30247__$1 = (function (){var statearr_30428 = state_30247;
(statearr_30428[(29)] = inst_30231);

return statearr_30428;
})();
if(inst_30234){
var statearr_30429_33177 = state_30247__$1;
(statearr_30429_33177[(1)] = (42));

} else {
var statearr_30430_33178 = state_30247__$1;
(statearr_30430_33178[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (16))){
var inst_30128 = (state_30247[(7)]);
var inst_30130 = cljs.core.chunked_seq_QMARK_(inst_30128);
var state_30247__$1 = state_30247;
if(inst_30130){
var statearr_30432_33181 = state_30247__$1;
(statearr_30432_33181[(1)] = (19));

} else {
var statearr_30433_33183 = state_30247__$1;
(statearr_30433_33183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (38))){
var inst_30224 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30435_33184 = state_30247__$1;
(statearr_30435_33184[(2)] = inst_30224);

(statearr_30435_33184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (30))){
var state_30247__$1 = state_30247;
var statearr_30437_33185 = state_30247__$1;
(statearr_30437_33185[(2)] = null);

(statearr_30437_33185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (10))){
var inst_30089 = (state_30247[(15)]);
var inst_30091 = (state_30247[(17)]);
var inst_30102 = cljs.core._nth(inst_30089,inst_30091);
var inst_30103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30102,(0),null);
var inst_30104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30102,(1),null);
var state_30247__$1 = (function (){var statearr_30438 = state_30247;
(statearr_30438[(24)] = inst_30103);

return statearr_30438;
})();
if(cljs.core.truth_(inst_30104)){
var statearr_30439_33198 = state_30247__$1;
(statearr_30439_33198[(1)] = (13));

} else {
var statearr_30440_33200 = state_30247__$1;
(statearr_30440_33200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (18))){
var inst_30159 = (state_30247[(2)]);
var state_30247__$1 = state_30247;
var statearr_30441_33201 = state_30247__$1;
(statearr_30441_33201[(2)] = inst_30159);

(statearr_30441_33201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (42))){
var state_30247__$1 = state_30247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30247__$1,(45),dchan);
} else {
if((state_val_30248 === (37))){
var inst_30198 = (state_30247[(23)]);
var inst_30213 = (state_30247[(22)]);
var inst_30079 = (state_30247[(11)]);
var inst_30213__$1 = cljs.core.first(inst_30198);
var inst_30215 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30213__$1,inst_30079,done);
var state_30247__$1 = (function (){var statearr_30454 = state_30247;
(statearr_30454[(22)] = inst_30213__$1);

return statearr_30454;
})();
if(cljs.core.truth_(inst_30215)){
var statearr_30455_33205 = state_30247__$1;
(statearr_30455_33205[(1)] = (39));

} else {
var statearr_30456_33209 = state_30247__$1;
(statearr_30456_33209[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (8))){
var inst_30090 = (state_30247[(13)]);
var inst_30091 = (state_30247[(17)]);
var inst_30094 = (inst_30091 < inst_30090);
var inst_30095 = inst_30094;
var state_30247__$1 = state_30247;
if(cljs.core.truth_(inst_30095)){
var statearr_30457_33212 = state_30247__$1;
(statearr_30457_33212[(1)] = (10));

} else {
var statearr_30458_33213 = state_30247__$1;
(statearr_30458_33213[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28286__auto__ = null;
var cljs$core$async$mult_$_state_machine__28286__auto____0 = (function (){
var statearr_30462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30462[(0)] = cljs$core$async$mult_$_state_machine__28286__auto__);

(statearr_30462[(1)] = (1));

return statearr_30462;
});
var cljs$core$async$mult_$_state_machine__28286__auto____1 = (function (state_30247){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_30247);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30466){var ex__28289__auto__ = e30466;
var statearr_30467_33217 = state_30247;
(statearr_30467_33217[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_30247[(4)]))){
var statearr_30475_33218 = state_30247;
(statearr_30475_33218[(1)] = cljs.core.first((state_30247[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33219 = state_30247;
state_30247 = G__33219;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28286__auto__ = function(state_30247){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28286__auto____1.call(this,state_30247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28286__auto____0;
cljs$core$async$mult_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28286__auto____1;
return cljs$core$async$mult_$_state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_30476 = f__28781__auto__();
(statearr_30476[(6)] = c__28780__auto___33066);

return statearr_30476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30482 = arguments.length;
switch (G__30482) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33241 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33241(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33247 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33247(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33254 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33254(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33278 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33278(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33283 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33283(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33290 = arguments.length;
var i__4737__auto___33291 = (0);
while(true){
if((i__4737__auto___33291 < len__4736__auto___33290)){
args__4742__auto__.push((arguments[i__4737__auto___33291]));

var G__33292 = (i__4737__auto___33291 + (1));
i__4737__auto___33291 = G__33292;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30550){
var map__30552 = p__30550;
var map__30552__$1 = (((((!((map__30552 == null))))?(((((map__30552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30552):map__30552);
var opts = map__30552__$1;
var statearr_30554_33294 = state;
(statearr_30554_33294[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30557_33295 = state;
(statearr_30557_33295[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30560_33296 = state;
(statearr_30560_33296[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30543){
var G__30544 = cljs.core.first(seq30543);
var seq30543__$1 = cljs.core.next(seq30543);
var G__30545 = cljs.core.first(seq30543__$1);
var seq30543__$2 = cljs.core.next(seq30543__$1);
var G__30546 = cljs.core.first(seq30543__$2);
var seq30543__$3 = cljs.core.next(seq30543__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30544,G__30545,G__30546,seq30543__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30570 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30571){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30571 = meta30571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30572,meta30571__$1){
var self__ = this;
var _30572__$1 = this;
return (new cljs.core.async.t_cljs$core$async30570(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30571__$1));
}));

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30572){
var self__ = this;
var _30572__$1 = this;
return self__.meta30571;
}));

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30570.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30571","meta30571",1113911264,null)], null);
}));

(cljs.core.async.t_cljs$core$async30570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30570");

(cljs.core.async.t_cljs$core$async30570.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30570.
 */
cljs.core.async.__GT_t_cljs$core$async30570 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30570(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30571){
return (new cljs.core.async.t_cljs$core$async30570(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30571));
});

}

return (new cljs.core.async.t_cljs$core$async30570(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28780__auto___33366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_30778){
var state_val_30779 = (state_30778[(1)]);
if((state_val_30779 === (7))){
var inst_30666 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30780_33370 = state_30778__$1;
(statearr_30780_33370[(2)] = inst_30666);

(statearr_30780_33370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (20))){
var inst_30679 = (state_30778[(7)]);
var state_30778__$1 = state_30778;
var statearr_30781_33371 = state_30778__$1;
(statearr_30781_33371[(2)] = inst_30679);

(statearr_30781_33371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (27))){
var state_30778__$1 = state_30778;
var statearr_30782_33374 = state_30778__$1;
(statearr_30782_33374[(2)] = null);

(statearr_30782_33374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (1))){
var inst_30650 = (state_30778[(8)]);
var inst_30650__$1 = calc_state();
var inst_30655 = (inst_30650__$1 == null);
var inst_30656 = cljs.core.not(inst_30655);
var state_30778__$1 = (function (){var statearr_30784 = state_30778;
(statearr_30784[(8)] = inst_30650__$1);

return statearr_30784;
})();
if(inst_30656){
var statearr_30785_33383 = state_30778__$1;
(statearr_30785_33383[(1)] = (2));

} else {
var statearr_30786_33384 = state_30778__$1;
(statearr_30786_33384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (24))){
var inst_30707 = (state_30778[(9)]);
var inst_30718 = (state_30778[(10)]);
var inst_30745 = (state_30778[(11)]);
var inst_30745__$1 = (inst_30707.cljs$core$IFn$_invoke$arity$1 ? inst_30707.cljs$core$IFn$_invoke$arity$1(inst_30718) : inst_30707.call(null,inst_30718));
var state_30778__$1 = (function (){var statearr_30788 = state_30778;
(statearr_30788[(11)] = inst_30745__$1);

return statearr_30788;
})();
if(cljs.core.truth_(inst_30745__$1)){
var statearr_30789_33386 = state_30778__$1;
(statearr_30789_33386[(1)] = (29));

} else {
var statearr_30790_33390 = state_30778__$1;
(statearr_30790_33390[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (4))){
var inst_30669 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30669)){
var statearr_30791_33394 = state_30778__$1;
(statearr_30791_33394[(1)] = (8));

} else {
var statearr_30792_33396 = state_30778__$1;
(statearr_30792_33396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (15))){
var inst_30701 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30701)){
var statearr_30793_33401 = state_30778__$1;
(statearr_30793_33401[(1)] = (19));

} else {
var statearr_30795_33402 = state_30778__$1;
(statearr_30795_33402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (21))){
var inst_30706 = (state_30778[(12)]);
var inst_30706__$1 = (state_30778[(2)]);
var inst_30707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30706__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30706__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30706__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30778__$1 = (function (){var statearr_30797 = state_30778;
(statearr_30797[(9)] = inst_30707);

(statearr_30797[(12)] = inst_30706__$1);

(statearr_30797[(13)] = inst_30708);

return statearr_30797;
})();
return cljs.core.async.ioc_alts_BANG_(state_30778__$1,(22),inst_30709);
} else {
if((state_val_30779 === (31))){
var inst_30755 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30755)){
var statearr_30798_33426 = state_30778__$1;
(statearr_30798_33426[(1)] = (32));

} else {
var statearr_30799_33430 = state_30778__$1;
(statearr_30799_33430[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (32))){
var inst_30716 = (state_30778[(14)]);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30778__$1,(35),out,inst_30716);
} else {
if((state_val_30779 === (33))){
var inst_30706 = (state_30778[(12)]);
var inst_30679 = inst_30706;
var state_30778__$1 = (function (){var statearr_30800 = state_30778;
(statearr_30800[(7)] = inst_30679);

return statearr_30800;
})();
var statearr_30803_33441 = state_30778__$1;
(statearr_30803_33441[(2)] = null);

(statearr_30803_33441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (13))){
var inst_30679 = (state_30778[(7)]);
var inst_30689 = inst_30679.cljs$lang$protocol_mask$partition0$;
var inst_30690 = (inst_30689 & (64));
var inst_30691 = inst_30679.cljs$core$ISeq$;
var inst_30692 = (cljs.core.PROTOCOL_SENTINEL === inst_30691);
var inst_30694 = ((inst_30690) || (inst_30692));
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30694)){
var statearr_30805_33444 = state_30778__$1;
(statearr_30805_33444[(1)] = (16));

} else {
var statearr_30806_33445 = state_30778__$1;
(statearr_30806_33445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (22))){
var inst_30718 = (state_30778[(10)]);
var inst_30716 = (state_30778[(14)]);
var inst_30715 = (state_30778[(2)]);
var inst_30716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30715,(0),null);
var inst_30718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30715,(1),null);
var inst_30721 = (inst_30716__$1 == null);
var inst_30722 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30718__$1,change);
var inst_30723 = ((inst_30721) || (inst_30722));
var state_30778__$1 = (function (){var statearr_30811 = state_30778;
(statearr_30811[(10)] = inst_30718__$1);

(statearr_30811[(14)] = inst_30716__$1);

return statearr_30811;
})();
if(cljs.core.truth_(inst_30723)){
var statearr_30812_33453 = state_30778__$1;
(statearr_30812_33453[(1)] = (23));

} else {
var statearr_30813_33454 = state_30778__$1;
(statearr_30813_33454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (36))){
var inst_30706 = (state_30778[(12)]);
var inst_30679 = inst_30706;
var state_30778__$1 = (function (){var statearr_30816 = state_30778;
(statearr_30816[(7)] = inst_30679);

return statearr_30816;
})();
var statearr_30817_33458 = state_30778__$1;
(statearr_30817_33458[(2)] = null);

(statearr_30817_33458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (29))){
var inst_30745 = (state_30778[(11)]);
var state_30778__$1 = state_30778;
var statearr_30828_33465 = state_30778__$1;
(statearr_30828_33465[(2)] = inst_30745);

(statearr_30828_33465[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (6))){
var state_30778__$1 = state_30778;
var statearr_30830_33470 = state_30778__$1;
(statearr_30830_33470[(2)] = false);

(statearr_30830_33470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (28))){
var inst_30741 = (state_30778[(2)]);
var inst_30742 = calc_state();
var inst_30679 = inst_30742;
var state_30778__$1 = (function (){var statearr_30831 = state_30778;
(statearr_30831[(15)] = inst_30741);

(statearr_30831[(7)] = inst_30679);

return statearr_30831;
})();
var statearr_30836_33474 = state_30778__$1;
(statearr_30836_33474[(2)] = null);

(statearr_30836_33474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (25))){
var inst_30770 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30837_33480 = state_30778__$1;
(statearr_30837_33480[(2)] = inst_30770);

(statearr_30837_33480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (34))){
var inst_30768 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30840_33482 = state_30778__$1;
(statearr_30840_33482[(2)] = inst_30768);

(statearr_30840_33482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (17))){
var state_30778__$1 = state_30778;
var statearr_30841_33487 = state_30778__$1;
(statearr_30841_33487[(2)] = false);

(statearr_30841_33487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (3))){
var state_30778__$1 = state_30778;
var statearr_30844_33488 = state_30778__$1;
(statearr_30844_33488[(2)] = false);

(statearr_30844_33488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (12))){
var inst_30772 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30778__$1,inst_30772);
} else {
if((state_val_30779 === (2))){
var inst_30650 = (state_30778[(8)]);
var inst_30658 = inst_30650.cljs$lang$protocol_mask$partition0$;
var inst_30659 = (inst_30658 & (64));
var inst_30660 = inst_30650.cljs$core$ISeq$;
var inst_30661 = (cljs.core.PROTOCOL_SENTINEL === inst_30660);
var inst_30662 = ((inst_30659) || (inst_30661));
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30662)){
var statearr_30845_33497 = state_30778__$1;
(statearr_30845_33497[(1)] = (5));

} else {
var statearr_30846_33498 = state_30778__$1;
(statearr_30846_33498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (23))){
var inst_30716 = (state_30778[(14)]);
var inst_30727 = (inst_30716 == null);
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30727)){
var statearr_30847_33502 = state_30778__$1;
(statearr_30847_33502[(1)] = (26));

} else {
var statearr_30848_33504 = state_30778__$1;
(statearr_30848_33504[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (35))){
var inst_30758 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30758)){
var statearr_30849_33508 = state_30778__$1;
(statearr_30849_33508[(1)] = (36));

} else {
var statearr_30850_33510 = state_30778__$1;
(statearr_30850_33510[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (19))){
var inst_30679 = (state_30778[(7)]);
var inst_30703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30679);
var state_30778__$1 = state_30778;
var statearr_30851_33511 = state_30778__$1;
(statearr_30851_33511[(2)] = inst_30703);

(statearr_30851_33511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (11))){
var inst_30679 = (state_30778[(7)]);
var inst_30685 = (inst_30679 == null);
var inst_30686 = cljs.core.not(inst_30685);
var state_30778__$1 = state_30778;
if(inst_30686){
var statearr_30856_33514 = state_30778__$1;
(statearr_30856_33514[(1)] = (13));

} else {
var statearr_30857_33515 = state_30778__$1;
(statearr_30857_33515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (9))){
var inst_30650 = (state_30778[(8)]);
var state_30778__$1 = state_30778;
var statearr_30859_33517 = state_30778__$1;
(statearr_30859_33517[(2)] = inst_30650);

(statearr_30859_33517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (5))){
var state_30778__$1 = state_30778;
var statearr_30865_33518 = state_30778__$1;
(statearr_30865_33518[(2)] = true);

(statearr_30865_33518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (14))){
var state_30778__$1 = state_30778;
var statearr_30867_33519 = state_30778__$1;
(statearr_30867_33519[(2)] = false);

(statearr_30867_33519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (26))){
var inst_30718 = (state_30778[(10)]);
var inst_30738 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30718);
var state_30778__$1 = state_30778;
var statearr_30868_33523 = state_30778__$1;
(statearr_30868_33523[(2)] = inst_30738);

(statearr_30868_33523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (16))){
var state_30778__$1 = state_30778;
var statearr_30869_33524 = state_30778__$1;
(statearr_30869_33524[(2)] = true);

(statearr_30869_33524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (38))){
var inst_30763 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30870_33531 = state_30778__$1;
(statearr_30870_33531[(2)] = inst_30763);

(statearr_30870_33531[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (30))){
var inst_30707 = (state_30778[(9)]);
var inst_30718 = (state_30778[(10)]);
var inst_30708 = (state_30778[(13)]);
var inst_30750 = cljs.core.empty_QMARK_(inst_30707);
var inst_30751 = (inst_30708.cljs$core$IFn$_invoke$arity$1 ? inst_30708.cljs$core$IFn$_invoke$arity$1(inst_30718) : inst_30708.call(null,inst_30718));
var inst_30752 = cljs.core.not(inst_30751);
var inst_30753 = ((inst_30750) && (inst_30752));
var state_30778__$1 = state_30778;
var statearr_30872_33533 = state_30778__$1;
(statearr_30872_33533[(2)] = inst_30753);

(statearr_30872_33533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (10))){
var inst_30650 = (state_30778[(8)]);
var inst_30675 = (state_30778[(2)]);
var inst_30676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30675,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30675,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30675,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30679 = inst_30650;
var state_30778__$1 = (function (){var statearr_30879 = state_30778;
(statearr_30879[(16)] = inst_30677);

(statearr_30879[(17)] = inst_30678);

(statearr_30879[(18)] = inst_30676);

(statearr_30879[(7)] = inst_30679);

return statearr_30879;
})();
var statearr_30880_33541 = state_30778__$1;
(statearr_30880_33541[(2)] = null);

(statearr_30880_33541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (18))){
var inst_30698 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30882_33542 = state_30778__$1;
(statearr_30882_33542[(2)] = inst_30698);

(statearr_30882_33542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (37))){
var state_30778__$1 = state_30778;
var statearr_30883_33543 = state_30778__$1;
(statearr_30883_33543[(2)] = null);

(statearr_30883_33543[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (8))){
var inst_30650 = (state_30778[(8)]);
var inst_30671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30650);
var state_30778__$1 = state_30778;
var statearr_30886_33545 = state_30778__$1;
(statearr_30886_33545[(2)] = inst_30671);

(statearr_30886_33545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28286__auto__ = null;
var cljs$core$async$mix_$_state_machine__28286__auto____0 = (function (){
var statearr_30887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30887[(0)] = cljs$core$async$mix_$_state_machine__28286__auto__);

(statearr_30887[(1)] = (1));

return statearr_30887;
});
var cljs$core$async$mix_$_state_machine__28286__auto____1 = (function (state_30778){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_30778);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e30888){var ex__28289__auto__ = e30888;
var statearr_30889_33554 = state_30778;
(statearr_30889_33554[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_30778[(4)]))){
var statearr_30890_33557 = state_30778;
(statearr_30890_33557[(1)] = cljs.core.first((state_30778[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33570 = state_30778;
state_30778 = G__33570;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28286__auto__ = function(state_30778){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28286__auto____1.call(this,state_30778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28286__auto____0;
cljs$core$async$mix_$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28286__auto____1;
return cljs$core$async$mix_$_state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_30892 = f__28781__auto__();
(statearr_30892[(6)] = c__28780__auto___33366);

return statearr_30892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33581 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33581(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33585 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33585(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33589 = (function() {
var G__33590 = null;
var G__33590__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33590__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33590 = function(p,v){
switch(arguments.length){
case 1:
return G__33590__1.call(this,p);
case 2:
return G__33590__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33590.cljs$core$IFn$_invoke$arity$1 = G__33590__1;
G__33590.cljs$core$IFn$_invoke$arity$2 = G__33590__2;
return G__33590;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30926 = arguments.length;
switch (G__30926) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33589(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33589(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30939 = arguments.length;
switch (G__30939) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30933_SHARP_){
if(cljs.core.truth_((p1__30933_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30933_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30933_SHARP_.call(null,topic)))){
return p1__30933_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30933_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30946 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30947){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30947 = meta30947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30948,meta30947__$1){
var self__ = this;
var _30948__$1 = this;
return (new cljs.core.async.t_cljs$core$async30946(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30947__$1));
}));

(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30948){
var self__ = this;
var _30948__$1 = this;
return self__.meta30947;
}));

(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30947","meta30947",1590682601,null)], null);
}));

(cljs.core.async.t_cljs$core$async30946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30946");

(cljs.core.async.t_cljs$core$async30946.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30946.
 */
cljs.core.async.__GT_t_cljs$core$async30946 = (function cljs$core$async$__GT_t_cljs$core$async30946(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30947){
return (new cljs.core.async.t_cljs$core$async30946(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30947));
});

}

return (new cljs.core.async.t_cljs$core$async30946(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28780__auto___33646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_31034){
var state_val_31035 = (state_31034[(1)]);
if((state_val_31035 === (7))){
var inst_31029 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31037_33647 = state_31034__$1;
(statearr_31037_33647[(2)] = inst_31029);

(statearr_31037_33647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (20))){
var state_31034__$1 = state_31034;
var statearr_31038_33651 = state_31034__$1;
(statearr_31038_33651[(2)] = null);

(statearr_31038_33651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (1))){
var state_31034__$1 = state_31034;
var statearr_31039_33652 = state_31034__$1;
(statearr_31039_33652[(2)] = null);

(statearr_31039_33652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (24))){
var inst_31012 = (state_31034[(7)]);
var inst_31021 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31012);
var state_31034__$1 = state_31034;
var statearr_31040_33653 = state_31034__$1;
(statearr_31040_33653[(2)] = inst_31021);

(statearr_31040_33653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (4))){
var inst_30960 = (state_31034[(8)]);
var inst_30960__$1 = (state_31034[(2)]);
var inst_30961 = (inst_30960__$1 == null);
var state_31034__$1 = (function (){var statearr_31044 = state_31034;
(statearr_31044[(8)] = inst_30960__$1);

return statearr_31044;
})();
if(cljs.core.truth_(inst_30961)){
var statearr_31046_33655 = state_31034__$1;
(statearr_31046_33655[(1)] = (5));

} else {
var statearr_31047_33656 = state_31034__$1;
(statearr_31047_33656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (15))){
var inst_31006 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31050_33658 = state_31034__$1;
(statearr_31050_33658[(2)] = inst_31006);

(statearr_31050_33658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (21))){
var inst_31026 = (state_31034[(2)]);
var state_31034__$1 = (function (){var statearr_31054 = state_31034;
(statearr_31054[(9)] = inst_31026);

return statearr_31054;
})();
var statearr_31055_33663 = state_31034__$1;
(statearr_31055_33663[(2)] = null);

(statearr_31055_33663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (13))){
var inst_30988 = (state_31034[(10)]);
var inst_30990 = cljs.core.chunked_seq_QMARK_(inst_30988);
var state_31034__$1 = state_31034;
if(inst_30990){
var statearr_31056_33664 = state_31034__$1;
(statearr_31056_33664[(1)] = (16));

} else {
var statearr_31057_33665 = state_31034__$1;
(statearr_31057_33665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (22))){
var inst_31018 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_31018)){
var statearr_31058_33670 = state_31034__$1;
(statearr_31058_33670[(1)] = (23));

} else {
var statearr_31059_33671 = state_31034__$1;
(statearr_31059_33671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (6))){
var inst_31014 = (state_31034[(11)]);
var inst_30960 = (state_31034[(8)]);
var inst_31012 = (state_31034[(7)]);
var inst_31012__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30960) : topic_fn.call(null,inst_30960));
var inst_31013 = cljs.core.deref(mults);
var inst_31014__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31013,inst_31012__$1);
var state_31034__$1 = (function (){var statearr_31064 = state_31034;
(statearr_31064[(11)] = inst_31014__$1);

(statearr_31064[(7)] = inst_31012__$1);

return statearr_31064;
})();
if(cljs.core.truth_(inst_31014__$1)){
var statearr_31065_33679 = state_31034__$1;
(statearr_31065_33679[(1)] = (19));

} else {
var statearr_31067_33680 = state_31034__$1;
(statearr_31067_33680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (25))){
var inst_31023 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31071_33681 = state_31034__$1;
(statearr_31071_33681[(2)] = inst_31023);

(statearr_31071_33681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (17))){
var inst_30988 = (state_31034[(10)]);
var inst_30997 = cljs.core.first(inst_30988);
var inst_30998 = cljs.core.async.muxch_STAR_(inst_30997);
var inst_30999 = cljs.core.async.close_BANG_(inst_30998);
var inst_31000 = cljs.core.next(inst_30988);
var inst_30971 = inst_31000;
var inst_30972 = null;
var inst_30973 = (0);
var inst_30974 = (0);
var state_31034__$1 = (function (){var statearr_31075 = state_31034;
(statearr_31075[(12)] = inst_30972);

(statearr_31075[(13)] = inst_30973);

(statearr_31075[(14)] = inst_30974);

(statearr_31075[(15)] = inst_30971);

(statearr_31075[(16)] = inst_30999);

return statearr_31075;
})();
var statearr_31079_33682 = state_31034__$1;
(statearr_31079_33682[(2)] = null);

(statearr_31079_33682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (3))){
var inst_31032 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31034__$1,inst_31032);
} else {
if((state_val_31035 === (12))){
var inst_31008 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31080_33685 = state_31034__$1;
(statearr_31080_33685[(2)] = inst_31008);

(statearr_31080_33685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (2))){
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31034__$1,(4),ch);
} else {
if((state_val_31035 === (23))){
var state_31034__$1 = state_31034;
var statearr_31085_33688 = state_31034__$1;
(statearr_31085_33688[(2)] = null);

(statearr_31085_33688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (19))){
var inst_31014 = (state_31034[(11)]);
var inst_30960 = (state_31034[(8)]);
var inst_31016 = cljs.core.async.muxch_STAR_(inst_31014);
var state_31034__$1 = state_31034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31034__$1,(22),inst_31016,inst_30960);
} else {
if((state_val_31035 === (11))){
var inst_30988 = (state_31034[(10)]);
var inst_30971 = (state_31034[(15)]);
var inst_30988__$1 = cljs.core.seq(inst_30971);
var state_31034__$1 = (function (){var statearr_31089 = state_31034;
(statearr_31089[(10)] = inst_30988__$1);

return statearr_31089;
})();
if(inst_30988__$1){
var statearr_31090_33691 = state_31034__$1;
(statearr_31090_33691[(1)] = (13));

} else {
var statearr_31091_33692 = state_31034__$1;
(statearr_31091_33692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (9))){
var inst_31010 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31095_33693 = state_31034__$1;
(statearr_31095_33693[(2)] = inst_31010);

(statearr_31095_33693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (5))){
var inst_30968 = cljs.core.deref(mults);
var inst_30969 = cljs.core.vals(inst_30968);
var inst_30970 = cljs.core.seq(inst_30969);
var inst_30971 = inst_30970;
var inst_30972 = null;
var inst_30973 = (0);
var inst_30974 = (0);
var state_31034__$1 = (function (){var statearr_31096 = state_31034;
(statearr_31096[(12)] = inst_30972);

(statearr_31096[(13)] = inst_30973);

(statearr_31096[(14)] = inst_30974);

(statearr_31096[(15)] = inst_30971);

return statearr_31096;
})();
var statearr_31097_33698 = state_31034__$1;
(statearr_31097_33698[(2)] = null);

(statearr_31097_33698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (14))){
var state_31034__$1 = state_31034;
var statearr_31105_33699 = state_31034__$1;
(statearr_31105_33699[(2)] = null);

(statearr_31105_33699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (16))){
var inst_30988 = (state_31034[(10)]);
var inst_30992 = cljs.core.chunk_first(inst_30988);
var inst_30993 = cljs.core.chunk_rest(inst_30988);
var inst_30994 = cljs.core.count(inst_30992);
var inst_30971 = inst_30993;
var inst_30972 = inst_30992;
var inst_30973 = inst_30994;
var inst_30974 = (0);
var state_31034__$1 = (function (){var statearr_31106 = state_31034;
(statearr_31106[(12)] = inst_30972);

(statearr_31106[(13)] = inst_30973);

(statearr_31106[(14)] = inst_30974);

(statearr_31106[(15)] = inst_30971);

return statearr_31106;
})();
var statearr_31108_33702 = state_31034__$1;
(statearr_31108_33702[(2)] = null);

(statearr_31108_33702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (10))){
var inst_30972 = (state_31034[(12)]);
var inst_30973 = (state_31034[(13)]);
var inst_30974 = (state_31034[(14)]);
var inst_30971 = (state_31034[(15)]);
var inst_30981 = cljs.core._nth(inst_30972,inst_30974);
var inst_30982 = cljs.core.async.muxch_STAR_(inst_30981);
var inst_30983 = cljs.core.async.close_BANG_(inst_30982);
var inst_30985 = (inst_30974 + (1));
var tmp31102 = inst_30972;
var tmp31103 = inst_30973;
var tmp31104 = inst_30971;
var inst_30971__$1 = tmp31104;
var inst_30972__$1 = tmp31102;
var inst_30973__$1 = tmp31103;
var inst_30974__$1 = inst_30985;
var state_31034__$1 = (function (){var statearr_31112 = state_31034;
(statearr_31112[(12)] = inst_30972__$1);

(statearr_31112[(17)] = inst_30983);

(statearr_31112[(13)] = inst_30973__$1);

(statearr_31112[(14)] = inst_30974__$1);

(statearr_31112[(15)] = inst_30971__$1);

return statearr_31112;
})();
var statearr_31113_33703 = state_31034__$1;
(statearr_31113_33703[(2)] = null);

(statearr_31113_33703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (18))){
var inst_31003 = (state_31034[(2)]);
var state_31034__$1 = state_31034;
var statearr_31114_33706 = state_31034__$1;
(statearr_31114_33706[(2)] = inst_31003);

(statearr_31114_33706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31035 === (8))){
var inst_30973 = (state_31034[(13)]);
var inst_30974 = (state_31034[(14)]);
var inst_30976 = (inst_30974 < inst_30973);
var inst_30977 = inst_30976;
var state_31034__$1 = state_31034;
if(cljs.core.truth_(inst_30977)){
var statearr_31115_33709 = state_31034__$1;
(statearr_31115_33709[(1)] = (10));

} else {
var statearr_31116_33711 = state_31034__$1;
(statearr_31116_33711[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_31117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31117[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_31117[(1)] = (1));

return statearr_31117;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_31034){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_31034);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31118){var ex__28289__auto__ = e31118;
var statearr_31119_33719 = state_31034;
(statearr_31119_33719[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_31034[(4)]))){
var statearr_31120_33722 = state_31034;
(statearr_31120_33722[(1)] = cljs.core.first((state_31034[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33725 = state_31034;
state_31034 = G__33725;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_31034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_31034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_31121 = f__28781__auto__();
(statearr_31121[(6)] = c__28780__auto___33646);

return statearr_31121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31125 = arguments.length;
switch (G__31125) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31135 = arguments.length;
switch (G__31135) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31139 = arguments.length;
switch (G__31139) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28780__auto___33738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_31221){
var state_val_31222 = (state_31221[(1)]);
if((state_val_31222 === (7))){
var state_31221__$1 = state_31221;
var statearr_31223_33739 = state_31221__$1;
(statearr_31223_33739[(2)] = null);

(statearr_31223_33739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (1))){
var state_31221__$1 = state_31221;
var statearr_31228_33741 = state_31221__$1;
(statearr_31228_33741[(2)] = null);

(statearr_31228_33741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (4))){
var inst_31153 = (state_31221[(7)]);
var inst_31155 = (state_31221[(8)]);
var inst_31157 = (inst_31155 < inst_31153);
var state_31221__$1 = state_31221;
if(cljs.core.truth_(inst_31157)){
var statearr_31238_33744 = state_31221__$1;
(statearr_31238_33744[(1)] = (6));

} else {
var statearr_31239_33745 = state_31221__$1;
(statearr_31239_33745[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (15))){
var inst_31202 = (state_31221[(9)]);
var inst_31210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31202);
var state_31221__$1 = state_31221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31221__$1,(17),out,inst_31210);
} else {
if((state_val_31222 === (13))){
var inst_31202 = (state_31221[(9)]);
var inst_31202__$1 = (state_31221[(2)]);
var inst_31203 = cljs.core.some(cljs.core.nil_QMARK_,inst_31202__$1);
var state_31221__$1 = (function (){var statearr_31249 = state_31221;
(statearr_31249[(9)] = inst_31202__$1);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31203)){
var statearr_31250_33747 = state_31221__$1;
(statearr_31250_33747[(1)] = (14));

} else {
var statearr_31251_33750 = state_31221__$1;
(statearr_31251_33750[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (6))){
var state_31221__$1 = state_31221;
var statearr_31254_33757 = state_31221__$1;
(statearr_31254_33757[(2)] = null);

(statearr_31254_33757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (17))){
var inst_31212 = (state_31221[(2)]);
var state_31221__$1 = (function (){var statearr_31259 = state_31221;
(statearr_31259[(10)] = inst_31212);

return statearr_31259;
})();
var statearr_31261_33767 = state_31221__$1;
(statearr_31261_33767[(2)] = null);

(statearr_31261_33767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (3))){
var inst_31217 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31221__$1,inst_31217);
} else {
if((state_val_31222 === (12))){
var _ = (function (){var statearr_31269 = state_31221;
(statearr_31269[(4)] = cljs.core.rest((state_31221[(4)])));

return statearr_31269;
})();
var state_31221__$1 = state_31221;
var ex31258 = (state_31221__$1[(2)]);
var statearr_31270_33778 = state_31221__$1;
(statearr_31270_33778[(5)] = ex31258);


if((ex31258 instanceof Object)){
var statearr_31275_33779 = state_31221__$1;
(statearr_31275_33779[(1)] = (11));

(statearr_31275_33779[(5)] = null);

} else {
throw ex31258;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (2))){
var inst_31151 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31153 = cnt;
var inst_31155 = (0);
var state_31221__$1 = (function (){var statearr_31281 = state_31221;
(statearr_31281[(7)] = inst_31153);

(statearr_31281[(11)] = inst_31151);

(statearr_31281[(8)] = inst_31155);

return statearr_31281;
})();
var statearr_31282_33786 = state_31221__$1;
(statearr_31282_33786[(2)] = null);

(statearr_31282_33786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (11))){
var inst_31178 = (state_31221[(2)]);
var inst_31179 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31221__$1 = (function (){var statearr_31289 = state_31221;
(statearr_31289[(12)] = inst_31178);

return statearr_31289;
})();
var statearr_31290_33790 = state_31221__$1;
(statearr_31290_33790[(2)] = inst_31179);

(statearr_31290_33790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (9))){
var inst_31155 = (state_31221[(8)]);
var _ = (function (){var statearr_31292 = state_31221;
(statearr_31292[(4)] = cljs.core.cons((12),(state_31221[(4)])));

return statearr_31292;
})();
var inst_31186 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31155) : chs__$1.call(null,inst_31155));
var inst_31187 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31155) : done.call(null,inst_31155));
var inst_31188 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31186,inst_31187);
var ___$1 = (function (){var statearr_31300 = state_31221;
(statearr_31300[(4)] = cljs.core.rest((state_31221[(4)])));

return statearr_31300;
})();
var state_31221__$1 = state_31221;
var statearr_31302_33797 = state_31221__$1;
(statearr_31302_33797[(2)] = inst_31188);

(statearr_31302_33797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (5))){
var inst_31198 = (state_31221[(2)]);
var state_31221__$1 = (function (){var statearr_31305 = state_31221;
(statearr_31305[(13)] = inst_31198);

return statearr_31305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31221__$1,(13),dchan);
} else {
if((state_val_31222 === (14))){
var inst_31208 = cljs.core.async.close_BANG_(out);
var state_31221__$1 = state_31221;
var statearr_31306_33806 = state_31221__$1;
(statearr_31306_33806[(2)] = inst_31208);

(statearr_31306_33806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (16))){
var inst_31215 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
var statearr_31309_33809 = state_31221__$1;
(statearr_31309_33809[(2)] = inst_31215);

(statearr_31309_33809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (10))){
var inst_31155 = (state_31221[(8)]);
var inst_31191 = (state_31221[(2)]);
var inst_31192 = (inst_31155 + (1));
var inst_31155__$1 = inst_31192;
var state_31221__$1 = (function (){var statearr_31310 = state_31221;
(statearr_31310[(8)] = inst_31155__$1);

(statearr_31310[(14)] = inst_31191);

return statearr_31310;
})();
var statearr_31311_33813 = state_31221__$1;
(statearr_31311_33813[(2)] = null);

(statearr_31311_33813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31222 === (8))){
var inst_31196 = (state_31221[(2)]);
var state_31221__$1 = state_31221;
var statearr_31318_33820 = state_31221__$1;
(statearr_31318_33820[(2)] = inst_31196);

(statearr_31318_33820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_31326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31326[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_31326[(1)] = (1));

return statearr_31326;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_31221){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_31221);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31334){var ex__28289__auto__ = e31334;
var statearr_31335_33826 = state_31221;
(statearr_31335_33826[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_31221[(4)]))){
var statearr_31336_33827 = state_31221;
(statearr_31336_33827[(1)] = cljs.core.first((state_31221[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33829 = state_31221;
state_31221 = G__33829;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_31221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_31221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_31340 = f__28781__auto__();
(statearr_31340[(6)] = c__28780__auto___33738);

return statearr_31340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31345 = arguments.length;
switch (G__31345) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28780__auto___33840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_31389){
var state_val_31390 = (state_31389[(1)]);
if((state_val_31390 === (7))){
var inst_31364 = (state_31389[(7)]);
var inst_31363 = (state_31389[(8)]);
var inst_31363__$1 = (state_31389[(2)]);
var inst_31364__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31363__$1,(0),null);
var inst_31366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31363__$1,(1),null);
var inst_31367 = (inst_31364__$1 == null);
var state_31389__$1 = (function (){var statearr_31395 = state_31389;
(statearr_31395[(7)] = inst_31364__$1);

(statearr_31395[(9)] = inst_31366);

(statearr_31395[(8)] = inst_31363__$1);

return statearr_31395;
})();
if(cljs.core.truth_(inst_31367)){
var statearr_31398_33851 = state_31389__$1;
(statearr_31398_33851[(1)] = (8));

} else {
var statearr_31401_33853 = state_31389__$1;
(statearr_31401_33853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (1))){
var inst_31351 = cljs.core.vec(chs);
var inst_31352 = inst_31351;
var state_31389__$1 = (function (){var statearr_31403 = state_31389;
(statearr_31403[(10)] = inst_31352);

return statearr_31403;
})();
var statearr_31404_33858 = state_31389__$1;
(statearr_31404_33858[(2)] = null);

(statearr_31404_33858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (4))){
var inst_31352 = (state_31389[(10)]);
var state_31389__$1 = state_31389;
return cljs.core.async.ioc_alts_BANG_(state_31389__$1,(7),inst_31352);
} else {
if((state_val_31390 === (6))){
var inst_31382 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31407_33860 = state_31389__$1;
(statearr_31407_33860[(2)] = inst_31382);

(statearr_31407_33860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (3))){
var inst_31384 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31389__$1,inst_31384);
} else {
if((state_val_31390 === (2))){
var inst_31352 = (state_31389[(10)]);
var inst_31354 = cljs.core.count(inst_31352);
var inst_31355 = (inst_31354 > (0));
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31355)){
var statearr_31409_33865 = state_31389__$1;
(statearr_31409_33865[(1)] = (4));

} else {
var statearr_31410_33867 = state_31389__$1;
(statearr_31410_33867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (11))){
var inst_31352 = (state_31389[(10)]);
var inst_31375 = (state_31389[(2)]);
var tmp31408 = inst_31352;
var inst_31352__$1 = tmp31408;
var state_31389__$1 = (function (){var statearr_31411 = state_31389;
(statearr_31411[(10)] = inst_31352__$1);

(statearr_31411[(11)] = inst_31375);

return statearr_31411;
})();
var statearr_31412_33869 = state_31389__$1;
(statearr_31412_33869[(2)] = null);

(statearr_31412_33869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (9))){
var inst_31364 = (state_31389[(7)]);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31389__$1,(11),out,inst_31364);
} else {
if((state_val_31390 === (5))){
var inst_31380 = cljs.core.async.close_BANG_(out);
var state_31389__$1 = state_31389;
var statearr_31426_33874 = state_31389__$1;
(statearr_31426_33874[(2)] = inst_31380);

(statearr_31426_33874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (10))){
var inst_31378 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31428_33879 = state_31389__$1;
(statearr_31428_33879[(2)] = inst_31378);

(statearr_31428_33879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (8))){
var inst_31352 = (state_31389[(10)]);
var inst_31364 = (state_31389[(7)]);
var inst_31366 = (state_31389[(9)]);
var inst_31363 = (state_31389[(8)]);
var inst_31370 = (function (){var cs = inst_31352;
var vec__31358 = inst_31363;
var v = inst_31364;
var c = inst_31366;
return (function (p1__31342_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31342_SHARP_);
});
})();
var inst_31371 = cljs.core.filterv(inst_31370,inst_31352);
var inst_31352__$1 = inst_31371;
var state_31389__$1 = (function (){var statearr_31436 = state_31389;
(statearr_31436[(10)] = inst_31352__$1);

return statearr_31436;
})();
var statearr_31437_33884 = state_31389__$1;
(statearr_31437_33884[(2)] = null);

(statearr_31437_33884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_31442 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31442[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_31442[(1)] = (1));

return statearr_31442;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_31389){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_31389);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31444){var ex__28289__auto__ = e31444;
var statearr_31445_33886 = state_31389;
(statearr_31445_33886[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_31389[(4)]))){
var statearr_31446_33892 = state_31389;
(statearr_31446_33892[(1)] = cljs.core.first((state_31389[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33893 = state_31389;
state_31389 = G__33893;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_31389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_31389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_31452 = f__28781__auto__();
(statearr_31452[(6)] = c__28780__auto___33840);

return statearr_31452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31457 = arguments.length;
switch (G__31457) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28780__auto___33897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_31498){
var state_val_31499 = (state_31498[(1)]);
if((state_val_31499 === (7))){
var inst_31472 = (state_31498[(7)]);
var inst_31472__$1 = (state_31498[(2)]);
var inst_31473 = (inst_31472__$1 == null);
var inst_31474 = cljs.core.not(inst_31473);
var state_31498__$1 = (function (){var statearr_31518 = state_31498;
(statearr_31518[(7)] = inst_31472__$1);

return statearr_31518;
})();
if(inst_31474){
var statearr_31524_33908 = state_31498__$1;
(statearr_31524_33908[(1)] = (8));

} else {
var statearr_31525_33909 = state_31498__$1;
(statearr_31525_33909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (1))){
var inst_31467 = (0);
var state_31498__$1 = (function (){var statearr_31530 = state_31498;
(statearr_31530[(8)] = inst_31467);

return statearr_31530;
})();
var statearr_31531_33911 = state_31498__$1;
(statearr_31531_33911[(2)] = null);

(statearr_31531_33911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (4))){
var state_31498__$1 = state_31498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31498__$1,(7),ch);
} else {
if((state_val_31499 === (6))){
var inst_31489 = (state_31498[(2)]);
var state_31498__$1 = state_31498;
var statearr_31545_33917 = state_31498__$1;
(statearr_31545_33917[(2)] = inst_31489);

(statearr_31545_33917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (3))){
var inst_31491 = (state_31498[(2)]);
var inst_31492 = cljs.core.async.close_BANG_(out);
var state_31498__$1 = (function (){var statearr_31547 = state_31498;
(statearr_31547[(9)] = inst_31491);

return statearr_31547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31498__$1,inst_31492);
} else {
if((state_val_31499 === (2))){
var inst_31467 = (state_31498[(8)]);
var inst_31469 = (inst_31467 < n);
var state_31498__$1 = state_31498;
if(cljs.core.truth_(inst_31469)){
var statearr_31548_33920 = state_31498__$1;
(statearr_31548_33920[(1)] = (4));

} else {
var statearr_31549_33922 = state_31498__$1;
(statearr_31549_33922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (11))){
var inst_31467 = (state_31498[(8)]);
var inst_31477 = (state_31498[(2)]);
var inst_31481 = (inst_31467 + (1));
var inst_31467__$1 = inst_31481;
var state_31498__$1 = (function (){var statearr_31550 = state_31498;
(statearr_31550[(10)] = inst_31477);

(statearr_31550[(8)] = inst_31467__$1);

return statearr_31550;
})();
var statearr_31551_33928 = state_31498__$1;
(statearr_31551_33928[(2)] = null);

(statearr_31551_33928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (9))){
var state_31498__$1 = state_31498;
var statearr_31552_33934 = state_31498__$1;
(statearr_31552_33934[(2)] = null);

(statearr_31552_33934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (5))){
var state_31498__$1 = state_31498;
var statearr_31556_33937 = state_31498__$1;
(statearr_31556_33937[(2)] = null);

(statearr_31556_33937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (10))){
var inst_31486 = (state_31498[(2)]);
var state_31498__$1 = state_31498;
var statearr_31559_33944 = state_31498__$1;
(statearr_31559_33944[(2)] = inst_31486);

(statearr_31559_33944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31499 === (8))){
var inst_31472 = (state_31498[(7)]);
var state_31498__$1 = state_31498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31498__$1,(11),out,inst_31472);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_31560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31560[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_31560[(1)] = (1));

return statearr_31560;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_31498){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_31498);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31564){var ex__28289__auto__ = e31564;
var statearr_31565_33961 = state_31498;
(statearr_31565_33961[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_31498[(4)]))){
var statearr_31566_33963 = state_31498;
(statearr_31566_33963[(1)] = cljs.core.first((state_31498[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33965 = state_31498;
state_31498 = G__33965;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_31498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_31498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_31569 = f__28781__auto__();
(statearr_31569[(6)] = c__28780__auto___33897);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31571 = (function (f,ch,meta31572){
this.f = f;
this.ch = ch;
this.meta31572 = meta31572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31573,meta31572__$1){
var self__ = this;
var _31573__$1 = this;
return (new cljs.core.async.t_cljs$core$async31571(self__.f,self__.ch,meta31572__$1));
}));

(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31573){
var self__ = this;
var _31573__$1 = this;
return self__.meta31572;
}));

(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31576 = (function (f,ch,meta31572,_,fn1,meta31577){
this.f = f;
this.ch = ch;
this.meta31572 = meta31572;
this._ = _;
this.fn1 = fn1;
this.meta31577 = meta31577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31578,meta31577__$1){
var self__ = this;
var _31578__$1 = this;
return (new cljs.core.async.t_cljs$core$async31576(self__.f,self__.ch,self__.meta31572,self__._,self__.fn1,meta31577__$1));
}));

(cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31578){
var self__ = this;
var _31578__$1 = this;
return self__.meta31577;
}));

(cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31570_SHARP_){
var G__31579 = (((p1__31570_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31570_SHARP_) : self__.f.call(null,p1__31570_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31579) : f1.call(null,G__31579));
});
}));

(cljs.core.async.t_cljs$core$async31576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31572","meta31572",150642392,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31571","cljs.core.async/t_cljs$core$async31571",2013515125,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31577","meta31577",-1324187780,null)], null);
}));

(cljs.core.async.t_cljs$core$async31576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31576");

(cljs.core.async.t_cljs$core$async31576.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31576.
 */
cljs.core.async.__GT_t_cljs$core$async31576 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31576(f__$1,ch__$1,meta31572__$1,___$2,fn1__$1,meta31577){
return (new cljs.core.async.t_cljs$core$async31576(f__$1,ch__$1,meta31572__$1,___$2,fn1__$1,meta31577));
});

}

return (new cljs.core.async.t_cljs$core$async31576(self__.f,self__.ch,self__.meta31572,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31604 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31604) : self__.f.call(null,G__31604));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31572","meta31572",150642392,null)], null);
}));

(cljs.core.async.t_cljs$core$async31571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31571");

(cljs.core.async.t_cljs$core$async31571.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31571.
 */
cljs.core.async.__GT_t_cljs$core$async31571 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31571(f__$1,ch__$1,meta31572){
return (new cljs.core.async.t_cljs$core$async31571(f__$1,ch__$1,meta31572));
});

}

return (new cljs.core.async.t_cljs$core$async31571(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31612 = (function (f,ch,meta31613){
this.f = f;
this.ch = ch;
this.meta31613 = meta31613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31614,meta31613__$1){
var self__ = this;
var _31614__$1 = this;
return (new cljs.core.async.t_cljs$core$async31612(self__.f,self__.ch,meta31613__$1));
}));

(cljs.core.async.t_cljs$core$async31612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31614){
var self__ = this;
var _31614__$1 = this;
return self__.meta31613;
}));

(cljs.core.async.t_cljs$core$async31612.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31612.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31612.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31613","meta31613",-1106449047,null)], null);
}));

(cljs.core.async.t_cljs$core$async31612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31612");

(cljs.core.async.t_cljs$core$async31612.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31612.
 */
cljs.core.async.__GT_t_cljs$core$async31612 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31612(f__$1,ch__$1,meta31613){
return (new cljs.core.async.t_cljs$core$async31612(f__$1,ch__$1,meta31613));
});

}

return (new cljs.core.async.t_cljs$core$async31612(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31629 = (function (p,ch,meta31630){
this.p = p;
this.ch = ch;
this.meta31630 = meta31630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31631,meta31630__$1){
var self__ = this;
var _31631__$1 = this;
return (new cljs.core.async.t_cljs$core$async31629(self__.p,self__.ch,meta31630__$1));
}));

(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31631){
var self__ = this;
var _31631__$1 = this;
return self__.meta31630;
}));

(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31630","meta31630",1145520699,null)], null);
}));

(cljs.core.async.t_cljs$core$async31629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31629");

(cljs.core.async.t_cljs$core$async31629.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31629.
 */
cljs.core.async.__GT_t_cljs$core$async31629 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31629(p__$1,ch__$1,meta31630){
return (new cljs.core.async.t_cljs$core$async31629(p__$1,ch__$1,meta31630));
});

}

return (new cljs.core.async.t_cljs$core$async31629(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31657 = arguments.length;
switch (G__31657) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28780__auto___34019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_31685){
var state_val_31686 = (state_31685[(1)]);
if((state_val_31686 === (7))){
var inst_31681 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
var statearr_31690_34028 = state_31685__$1;
(statearr_31690_34028[(2)] = inst_31681);

(statearr_31690_34028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (1))){
var state_31685__$1 = state_31685;
var statearr_31691_34031 = state_31685__$1;
(statearr_31691_34031[(2)] = null);

(statearr_31691_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (4))){
var inst_31667 = (state_31685[(7)]);
var inst_31667__$1 = (state_31685[(2)]);
var inst_31668 = (inst_31667__$1 == null);
var state_31685__$1 = (function (){var statearr_31694 = state_31685;
(statearr_31694[(7)] = inst_31667__$1);

return statearr_31694;
})();
if(cljs.core.truth_(inst_31668)){
var statearr_31696_34036 = state_31685__$1;
(statearr_31696_34036[(1)] = (5));

} else {
var statearr_31697_34037 = state_31685__$1;
(statearr_31697_34037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (6))){
var inst_31667 = (state_31685[(7)]);
var inst_31672 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31667) : p.call(null,inst_31667));
var state_31685__$1 = state_31685;
if(cljs.core.truth_(inst_31672)){
var statearr_31701_34038 = state_31685__$1;
(statearr_31701_34038[(1)] = (8));

} else {
var statearr_31702_34039 = state_31685__$1;
(statearr_31702_34039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (3))){
var inst_31683 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31685__$1,inst_31683);
} else {
if((state_val_31686 === (2))){
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31685__$1,(4),ch);
} else {
if((state_val_31686 === (11))){
var inst_31675 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
var statearr_31704_34046 = state_31685__$1;
(statearr_31704_34046[(2)] = inst_31675);

(statearr_31704_34046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (9))){
var state_31685__$1 = state_31685;
var statearr_31705_34047 = state_31685__$1;
(statearr_31705_34047[(2)] = null);

(statearr_31705_34047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (5))){
var inst_31670 = cljs.core.async.close_BANG_(out);
var state_31685__$1 = state_31685;
var statearr_31712_34053 = state_31685__$1;
(statearr_31712_34053[(2)] = inst_31670);

(statearr_31712_34053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (10))){
var inst_31678 = (state_31685[(2)]);
var state_31685__$1 = (function (){var statearr_31715 = state_31685;
(statearr_31715[(8)] = inst_31678);

return statearr_31715;
})();
var statearr_31718_34057 = state_31685__$1;
(statearr_31718_34057[(2)] = null);

(statearr_31718_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (8))){
var inst_31667 = (state_31685[(7)]);
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31685__$1,(11),out,inst_31667);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_31724 = [null,null,null,null,null,null,null,null,null];
(statearr_31724[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_31724[(1)] = (1));

return statearr_31724;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_31685){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_31685);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31727){var ex__28289__auto__ = e31727;
var statearr_31729_34063 = state_31685;
(statearr_31729_34063[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_31685[(4)]))){
var statearr_31730_34064 = state_31685;
(statearr_31730_34064[(1)] = cljs.core.first((state_31685[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34065 = state_31685;
state_31685 = G__34065;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_31685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_31685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_31734 = f__28781__auto__();
(statearr_31734[(6)] = c__28780__auto___34019);

return statearr_31734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31743 = arguments.length;
switch (G__31743) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_31819){
var state_val_31821 = (state_31819[(1)]);
if((state_val_31821 === (7))){
var inst_31814 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31825_34081 = state_31819__$1;
(statearr_31825_34081[(2)] = inst_31814);

(statearr_31825_34081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (20))){
var inst_31779 = (state_31819[(7)]);
var inst_31792 = (state_31819[(2)]);
var inst_31795 = cljs.core.next(inst_31779);
var inst_31763 = inst_31795;
var inst_31764 = null;
var inst_31765 = (0);
var inst_31766 = (0);
var state_31819__$1 = (function (){var statearr_31829 = state_31819;
(statearr_31829[(8)] = inst_31764);

(statearr_31829[(9)] = inst_31766);

(statearr_31829[(10)] = inst_31763);

(statearr_31829[(11)] = inst_31792);

(statearr_31829[(12)] = inst_31765);

return statearr_31829;
})();
var statearr_31830_34087 = state_31819__$1;
(statearr_31830_34087[(2)] = null);

(statearr_31830_34087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (1))){
var state_31819__$1 = state_31819;
var statearr_31831_34093 = state_31819__$1;
(statearr_31831_34093[(2)] = null);

(statearr_31831_34093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (4))){
var inst_31752 = (state_31819[(13)]);
var inst_31752__$1 = (state_31819[(2)]);
var inst_31753 = (inst_31752__$1 == null);
var state_31819__$1 = (function (){var statearr_31832 = state_31819;
(statearr_31832[(13)] = inst_31752__$1);

return statearr_31832;
})();
if(cljs.core.truth_(inst_31753)){
var statearr_31834_34096 = state_31819__$1;
(statearr_31834_34096[(1)] = (5));

} else {
var statearr_31836_34098 = state_31819__$1;
(statearr_31836_34098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (15))){
var state_31819__$1 = state_31819;
var statearr_31843_34099 = state_31819__$1;
(statearr_31843_34099[(2)] = null);

(statearr_31843_34099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (21))){
var state_31819__$1 = state_31819;
var statearr_31846_34100 = state_31819__$1;
(statearr_31846_34100[(2)] = null);

(statearr_31846_34100[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (13))){
var inst_31764 = (state_31819[(8)]);
var inst_31766 = (state_31819[(9)]);
var inst_31763 = (state_31819[(10)]);
var inst_31765 = (state_31819[(12)]);
var inst_31773 = (state_31819[(2)]);
var inst_31775 = (inst_31766 + (1));
var tmp31840 = inst_31764;
var tmp31841 = inst_31763;
var tmp31842 = inst_31765;
var inst_31763__$1 = tmp31841;
var inst_31764__$1 = tmp31840;
var inst_31765__$1 = tmp31842;
var inst_31766__$1 = inst_31775;
var state_31819__$1 = (function (){var statearr_31853 = state_31819;
(statearr_31853[(14)] = inst_31773);

(statearr_31853[(8)] = inst_31764__$1);

(statearr_31853[(9)] = inst_31766__$1);

(statearr_31853[(10)] = inst_31763__$1);

(statearr_31853[(12)] = inst_31765__$1);

return statearr_31853;
})();
var statearr_31855_34110 = state_31819__$1;
(statearr_31855_34110[(2)] = null);

(statearr_31855_34110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (22))){
var state_31819__$1 = state_31819;
var statearr_31861_34115 = state_31819__$1;
(statearr_31861_34115[(2)] = null);

(statearr_31861_34115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (6))){
var inst_31752 = (state_31819[(13)]);
var inst_31761 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31752) : f.call(null,inst_31752));
var inst_31762 = cljs.core.seq(inst_31761);
var inst_31763 = inst_31762;
var inst_31764 = null;
var inst_31765 = (0);
var inst_31766 = (0);
var state_31819__$1 = (function (){var statearr_31865 = state_31819;
(statearr_31865[(8)] = inst_31764);

(statearr_31865[(9)] = inst_31766);

(statearr_31865[(10)] = inst_31763);

(statearr_31865[(12)] = inst_31765);

return statearr_31865;
})();
var statearr_31867_34121 = state_31819__$1;
(statearr_31867_34121[(2)] = null);

(statearr_31867_34121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (17))){
var inst_31779 = (state_31819[(7)]);
var inst_31784 = cljs.core.chunk_first(inst_31779);
var inst_31786 = cljs.core.chunk_rest(inst_31779);
var inst_31787 = cljs.core.count(inst_31784);
var inst_31763 = inst_31786;
var inst_31764 = inst_31784;
var inst_31765 = inst_31787;
var inst_31766 = (0);
var state_31819__$1 = (function (){var statearr_31870 = state_31819;
(statearr_31870[(8)] = inst_31764);

(statearr_31870[(9)] = inst_31766);

(statearr_31870[(10)] = inst_31763);

(statearr_31870[(12)] = inst_31765);

return statearr_31870;
})();
var statearr_31873_34126 = state_31819__$1;
(statearr_31873_34126[(2)] = null);

(statearr_31873_34126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (3))){
var inst_31816 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31819__$1,inst_31816);
} else {
if((state_val_31821 === (12))){
var inst_31804 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31876_34128 = state_31819__$1;
(statearr_31876_34128[(2)] = inst_31804);

(statearr_31876_34128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (2))){
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31819__$1,(4),in$);
} else {
if((state_val_31821 === (23))){
var inst_31812 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31881_34133 = state_31819__$1;
(statearr_31881_34133[(2)] = inst_31812);

(statearr_31881_34133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (19))){
var inst_31799 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31886_34138 = state_31819__$1;
(statearr_31886_34138[(2)] = inst_31799);

(statearr_31886_34138[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (11))){
var inst_31779 = (state_31819[(7)]);
var inst_31763 = (state_31819[(10)]);
var inst_31779__$1 = cljs.core.seq(inst_31763);
var state_31819__$1 = (function (){var statearr_31888 = state_31819;
(statearr_31888[(7)] = inst_31779__$1);

return statearr_31888;
})();
if(inst_31779__$1){
var statearr_31891_34140 = state_31819__$1;
(statearr_31891_34140[(1)] = (14));

} else {
var statearr_31894_34141 = state_31819__$1;
(statearr_31894_34141[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (9))){
var inst_31806 = (state_31819[(2)]);
var inst_31807 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31819__$1 = (function (){var statearr_31899 = state_31819;
(statearr_31899[(15)] = inst_31806);

return statearr_31899;
})();
if(cljs.core.truth_(inst_31807)){
var statearr_31902_34144 = state_31819__$1;
(statearr_31902_34144[(1)] = (21));

} else {
var statearr_31906_34145 = state_31819__$1;
(statearr_31906_34145[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (5))){
var inst_31755 = cljs.core.async.close_BANG_(out);
var state_31819__$1 = state_31819;
var statearr_31912_34148 = state_31819__$1;
(statearr_31912_34148[(2)] = inst_31755);

(statearr_31912_34148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (14))){
var inst_31779 = (state_31819[(7)]);
var inst_31782 = cljs.core.chunked_seq_QMARK_(inst_31779);
var state_31819__$1 = state_31819;
if(inst_31782){
var statearr_31917_34150 = state_31819__$1;
(statearr_31917_34150[(1)] = (17));

} else {
var statearr_31919_34151 = state_31819__$1;
(statearr_31919_34151[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (16))){
var inst_31802 = (state_31819[(2)]);
var state_31819__$1 = state_31819;
var statearr_31928_34156 = state_31819__$1;
(statearr_31928_34156[(2)] = inst_31802);

(statearr_31928_34156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (10))){
var inst_31764 = (state_31819[(8)]);
var inst_31766 = (state_31819[(9)]);
var inst_31771 = cljs.core._nth(inst_31764,inst_31766);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31819__$1,(13),out,inst_31771);
} else {
if((state_val_31821 === (18))){
var inst_31779 = (state_31819[(7)]);
var inst_31790 = cljs.core.first(inst_31779);
var state_31819__$1 = state_31819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31819__$1,(20),out,inst_31790);
} else {
if((state_val_31821 === (8))){
var inst_31766 = (state_31819[(9)]);
var inst_31765 = (state_31819[(12)]);
var inst_31768 = (inst_31766 < inst_31765);
var inst_31769 = inst_31768;
var state_31819__$1 = state_31819;
if(cljs.core.truth_(inst_31769)){
var statearr_31934_34171 = state_31819__$1;
(statearr_31934_34171[(1)] = (10));

} else {
var statearr_31935_34172 = state_31819__$1;
(statearr_31935_34172[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____0 = (function (){
var statearr_31947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31947[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__);

(statearr_31947[(1)] = (1));

return statearr_31947;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____1 = (function (state_31819){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_31819);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e31949){var ex__28289__auto__ = e31949;
var statearr_31950_34178 = state_31819;
(statearr_31950_34178[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_31819[(4)]))){
var statearr_31952_34179 = state_31819;
(statearr_31952_34179[(1)] = cljs.core.first((state_31819[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34180 = state_31819;
state_31819 = G__34180;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__ = function(state_31819){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____1.call(this,state_31819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28286__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_31959 = f__28781__auto__();
(statearr_31959[(6)] = c__28780__auto__);

return statearr_31959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));

return c__28780__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31975 = arguments.length;
switch (G__31975) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32002 = arguments.length;
switch (G__32002) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32015 = arguments.length;
switch (G__32015) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28780__auto___34186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_32047){
var state_val_32048 = (state_32047[(1)]);
if((state_val_32048 === (7))){
var inst_32038 = (state_32047[(2)]);
var state_32047__$1 = state_32047;
var statearr_32059_34187 = state_32047__$1;
(statearr_32059_34187[(2)] = inst_32038);

(statearr_32059_34187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (1))){
var inst_32018 = null;
var state_32047__$1 = (function (){var statearr_32065 = state_32047;
(statearr_32065[(7)] = inst_32018);

return statearr_32065;
})();
var statearr_32066_34188 = state_32047__$1;
(statearr_32066_34188[(2)] = null);

(statearr_32066_34188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (4))){
var inst_32021 = (state_32047[(8)]);
var inst_32021__$1 = (state_32047[(2)]);
var inst_32022 = (inst_32021__$1 == null);
var inst_32023 = cljs.core.not(inst_32022);
var state_32047__$1 = (function (){var statearr_32077 = state_32047;
(statearr_32077[(8)] = inst_32021__$1);

return statearr_32077;
})();
if(inst_32023){
var statearr_32078_34189 = state_32047__$1;
(statearr_32078_34189[(1)] = (5));

} else {
var statearr_32079_34191 = state_32047__$1;
(statearr_32079_34191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (6))){
var state_32047__$1 = state_32047;
var statearr_32080_34192 = state_32047__$1;
(statearr_32080_34192[(2)] = null);

(statearr_32080_34192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (3))){
var inst_32040 = (state_32047[(2)]);
var inst_32041 = cljs.core.async.close_BANG_(out);
var state_32047__$1 = (function (){var statearr_32081 = state_32047;
(statearr_32081[(9)] = inst_32040);

return statearr_32081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32047__$1,inst_32041);
} else {
if((state_val_32048 === (2))){
var state_32047__$1 = state_32047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32047__$1,(4),ch);
} else {
if((state_val_32048 === (11))){
var inst_32021 = (state_32047[(8)]);
var inst_32030 = (state_32047[(2)]);
var inst_32018 = inst_32021;
var state_32047__$1 = (function (){var statearr_32085 = state_32047;
(statearr_32085[(7)] = inst_32018);

(statearr_32085[(10)] = inst_32030);

return statearr_32085;
})();
var statearr_32088_34193 = state_32047__$1;
(statearr_32088_34193[(2)] = null);

(statearr_32088_34193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (9))){
var inst_32021 = (state_32047[(8)]);
var state_32047__$1 = state_32047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32047__$1,(11),out,inst_32021);
} else {
if((state_val_32048 === (5))){
var inst_32018 = (state_32047[(7)]);
var inst_32021 = (state_32047[(8)]);
var inst_32025 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32021,inst_32018);
var state_32047__$1 = state_32047;
if(inst_32025){
var statearr_32091_34195 = state_32047__$1;
(statearr_32091_34195[(1)] = (8));

} else {
var statearr_32093_34198 = state_32047__$1;
(statearr_32093_34198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (10))){
var inst_32034 = (state_32047[(2)]);
var state_32047__$1 = state_32047;
var statearr_32099_34200 = state_32047__$1;
(statearr_32099_34200[(2)] = inst_32034);

(statearr_32099_34200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (8))){
var inst_32018 = (state_32047[(7)]);
var tmp32089 = inst_32018;
var inst_32018__$1 = tmp32089;
var state_32047__$1 = (function (){var statearr_32101 = state_32047;
(statearr_32101[(7)] = inst_32018__$1);

return statearr_32101;
})();
var statearr_32102_34203 = state_32047__$1;
(statearr_32102_34203[(2)] = null);

(statearr_32102_34203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_32104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32104[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_32104[(1)] = (1));

return statearr_32104;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_32047){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_32047);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e32105){var ex__28289__auto__ = e32105;
var statearr_32108_34206 = state_32047;
(statearr_32108_34206[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_32047[(4)]))){
var statearr_32109_34208 = state_32047;
(statearr_32109_34208[(1)] = cljs.core.first((state_32047[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34209 = state_32047;
state_32047 = G__34209;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_32047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_32047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_32119 = f__28781__auto__();
(statearr_32119[(6)] = c__28780__auto___34186);

return statearr_32119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32140 = arguments.length;
switch (G__32140) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28780__auto___34218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_32197){
var state_val_32198 = (state_32197[(1)]);
if((state_val_32198 === (7))){
var inst_32192 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32200_34230 = state_32197__$1;
(statearr_32200_34230[(2)] = inst_32192);

(statearr_32200_34230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (1))){
var inst_32150 = (new Array(n));
var inst_32151 = inst_32150;
var inst_32152 = (0);
var state_32197__$1 = (function (){var statearr_32206 = state_32197;
(statearr_32206[(7)] = inst_32152);

(statearr_32206[(8)] = inst_32151);

return statearr_32206;
})();
var statearr_32207_34236 = state_32197__$1;
(statearr_32207_34236[(2)] = null);

(statearr_32207_34236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (4))){
var inst_32156 = (state_32197[(9)]);
var inst_32156__$1 = (state_32197[(2)]);
var inst_32157 = (inst_32156__$1 == null);
var inst_32158 = cljs.core.not(inst_32157);
var state_32197__$1 = (function (){var statearr_32216 = state_32197;
(statearr_32216[(9)] = inst_32156__$1);

return statearr_32216;
})();
if(inst_32158){
var statearr_32218_34242 = state_32197__$1;
(statearr_32218_34242[(1)] = (5));

} else {
var statearr_32220_34244 = state_32197__$1;
(statearr_32220_34244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (15))){
var inst_32186 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32223_34248 = state_32197__$1;
(statearr_32223_34248[(2)] = inst_32186);

(statearr_32223_34248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (13))){
var state_32197__$1 = state_32197;
var statearr_32228_34251 = state_32197__$1;
(statearr_32228_34251[(2)] = null);

(statearr_32228_34251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (6))){
var inst_32152 = (state_32197[(7)]);
var inst_32180 = (inst_32152 > (0));
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32180)){
var statearr_32231_34253 = state_32197__$1;
(statearr_32231_34253[(1)] = (12));

} else {
var statearr_32233_34254 = state_32197__$1;
(statearr_32233_34254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (3))){
var inst_32194 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32197__$1,inst_32194);
} else {
if((state_val_32198 === (12))){
var inst_32151 = (state_32197[(8)]);
var inst_32183 = cljs.core.vec(inst_32151);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32197__$1,(15),out,inst_32183);
} else {
if((state_val_32198 === (2))){
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32197__$1,(4),ch);
} else {
if((state_val_32198 === (11))){
var inst_32171 = (state_32197[(2)]);
var inst_32174 = (new Array(n));
var inst_32151 = inst_32174;
var inst_32152 = (0);
var state_32197__$1 = (function (){var statearr_32236 = state_32197;
(statearr_32236[(7)] = inst_32152);

(statearr_32236[(8)] = inst_32151);

(statearr_32236[(10)] = inst_32171);

return statearr_32236;
})();
var statearr_32238_34258 = state_32197__$1;
(statearr_32238_34258[(2)] = null);

(statearr_32238_34258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (9))){
var inst_32151 = (state_32197[(8)]);
var inst_32169 = cljs.core.vec(inst_32151);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32197__$1,(11),out,inst_32169);
} else {
if((state_val_32198 === (5))){
var inst_32152 = (state_32197[(7)]);
var inst_32156 = (state_32197[(9)]);
var inst_32163 = (state_32197[(11)]);
var inst_32151 = (state_32197[(8)]);
var inst_32160 = (inst_32151[inst_32152] = inst_32156);
var inst_32163__$1 = (inst_32152 + (1));
var inst_32164 = (inst_32163__$1 < n);
var state_32197__$1 = (function (){var statearr_32242 = state_32197;
(statearr_32242[(12)] = inst_32160);

(statearr_32242[(11)] = inst_32163__$1);

return statearr_32242;
})();
if(cljs.core.truth_(inst_32164)){
var statearr_32243_34265 = state_32197__$1;
(statearr_32243_34265[(1)] = (8));

} else {
var statearr_32244_34266 = state_32197__$1;
(statearr_32244_34266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (14))){
var inst_32189 = (state_32197[(2)]);
var inst_32190 = cljs.core.async.close_BANG_(out);
var state_32197__$1 = (function (){var statearr_32248 = state_32197;
(statearr_32248[(13)] = inst_32189);

return statearr_32248;
})();
var statearr_32252_34269 = state_32197__$1;
(statearr_32252_34269[(2)] = inst_32190);

(statearr_32252_34269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (10))){
var inst_32177 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32255_34271 = state_32197__$1;
(statearr_32255_34271[(2)] = inst_32177);

(statearr_32255_34271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (8))){
var inst_32163 = (state_32197[(11)]);
var inst_32151 = (state_32197[(8)]);
var tmp32247 = inst_32151;
var inst_32151__$1 = tmp32247;
var inst_32152 = inst_32163;
var state_32197__$1 = (function (){var statearr_32256 = state_32197;
(statearr_32256[(7)] = inst_32152);

(statearr_32256[(8)] = inst_32151__$1);

return statearr_32256;
})();
var statearr_32257_34273 = state_32197__$1;
(statearr_32257_34273[(2)] = null);

(statearr_32257_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_32258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32258[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_32258[(1)] = (1));

return statearr_32258;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_32197){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_32197);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e32263){var ex__28289__auto__ = e32263;
var statearr_32264_34277 = state_32197;
(statearr_32264_34277[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_32197[(4)]))){
var statearr_32266_34285 = state_32197;
(statearr_32266_34285[(1)] = cljs.core.first((state_32197[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34286 = state_32197;
state_32197 = G__34286;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_32197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_32197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_32267 = f__28781__auto__();
(statearr_32267[(6)] = c__28780__auto___34218);

return statearr_32267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32273 = arguments.length;
switch (G__32273) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28780__auto___34299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28781__auto__ = (function (){var switch__28285__auto__ = (function (state_32325){
var state_val_32327 = (state_32325[(1)]);
if((state_val_32327 === (7))){
var inst_32321 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
var statearr_32335_34300 = state_32325__$1;
(statearr_32335_34300[(2)] = inst_32321);

(statearr_32335_34300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (1))){
var inst_32282 = [];
var inst_32283 = inst_32282;
var inst_32284 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32325__$1 = (function (){var statearr_32337 = state_32325;
(statearr_32337[(7)] = inst_32283);

(statearr_32337[(8)] = inst_32284);

return statearr_32337;
})();
var statearr_32342_34304 = state_32325__$1;
(statearr_32342_34304[(2)] = null);

(statearr_32342_34304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (4))){
var inst_32287 = (state_32325[(9)]);
var inst_32287__$1 = (state_32325[(2)]);
var inst_32288 = (inst_32287__$1 == null);
var inst_32289 = cljs.core.not(inst_32288);
var state_32325__$1 = (function (){var statearr_32347 = state_32325;
(statearr_32347[(9)] = inst_32287__$1);

return statearr_32347;
})();
if(inst_32289){
var statearr_32348_34306 = state_32325__$1;
(statearr_32348_34306[(1)] = (5));

} else {
var statearr_32349_34307 = state_32325__$1;
(statearr_32349_34307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (15))){
var inst_32315 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
var statearr_32354_34308 = state_32325__$1;
(statearr_32354_34308[(2)] = inst_32315);

(statearr_32354_34308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (13))){
var state_32325__$1 = state_32325;
var statearr_32358_34315 = state_32325__$1;
(statearr_32358_34315[(2)] = null);

(statearr_32358_34315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (6))){
var inst_32283 = (state_32325[(7)]);
var inst_32310 = inst_32283.length;
var inst_32311 = (inst_32310 > (0));
var state_32325__$1 = state_32325;
if(cljs.core.truth_(inst_32311)){
var statearr_32363_34316 = state_32325__$1;
(statearr_32363_34316[(1)] = (12));

} else {
var statearr_32364_34317 = state_32325__$1;
(statearr_32364_34317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (3))){
var inst_32323 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32325__$1,inst_32323);
} else {
if((state_val_32327 === (12))){
var inst_32283 = (state_32325[(7)]);
var inst_32313 = cljs.core.vec(inst_32283);
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32325__$1,(15),out,inst_32313);
} else {
if((state_val_32327 === (2))){
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32325__$1,(4),ch);
} else {
if((state_val_32327 === (11))){
var inst_32291 = (state_32325[(10)]);
var inst_32287 = (state_32325[(9)]);
var inst_32302 = (state_32325[(2)]);
var inst_32303 = [];
var inst_32304 = inst_32303.push(inst_32287);
var inst_32283 = inst_32303;
var inst_32284 = inst_32291;
var state_32325__$1 = (function (){var statearr_32375 = state_32325;
(statearr_32375[(7)] = inst_32283);

(statearr_32375[(8)] = inst_32284);

(statearr_32375[(11)] = inst_32302);

(statearr_32375[(12)] = inst_32304);

return statearr_32375;
})();
var statearr_32377_34318 = state_32325__$1;
(statearr_32377_34318[(2)] = null);

(statearr_32377_34318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (9))){
var inst_32283 = (state_32325[(7)]);
var inst_32300 = cljs.core.vec(inst_32283);
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32325__$1,(11),out,inst_32300);
} else {
if((state_val_32327 === (5))){
var inst_32291 = (state_32325[(10)]);
var inst_32284 = (state_32325[(8)]);
var inst_32287 = (state_32325[(9)]);
var inst_32291__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32287) : f.call(null,inst_32287));
var inst_32292 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32291__$1,inst_32284);
var inst_32293 = cljs.core.keyword_identical_QMARK_(inst_32284,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32295 = ((inst_32292) || (inst_32293));
var state_32325__$1 = (function (){var statearr_32386 = state_32325;
(statearr_32386[(10)] = inst_32291__$1);

return statearr_32386;
})();
if(cljs.core.truth_(inst_32295)){
var statearr_32388_34319 = state_32325__$1;
(statearr_32388_34319[(1)] = (8));

} else {
var statearr_32389_34320 = state_32325__$1;
(statearr_32389_34320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (14))){
var inst_32318 = (state_32325[(2)]);
var inst_32319 = cljs.core.async.close_BANG_(out);
var state_32325__$1 = (function (){var statearr_32394 = state_32325;
(statearr_32394[(13)] = inst_32318);

return statearr_32394;
})();
var statearr_32395_34321 = state_32325__$1;
(statearr_32395_34321[(2)] = inst_32319);

(statearr_32395_34321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (10))){
var inst_32308 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
var statearr_32398_34328 = state_32325__$1;
(statearr_32398_34328[(2)] = inst_32308);

(statearr_32398_34328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (8))){
var inst_32291 = (state_32325[(10)]);
var inst_32283 = (state_32325[(7)]);
var inst_32287 = (state_32325[(9)]);
var inst_32297 = inst_32283.push(inst_32287);
var tmp32391 = inst_32283;
var inst_32283__$1 = tmp32391;
var inst_32284 = inst_32291;
var state_32325__$1 = (function (){var statearr_32399 = state_32325;
(statearr_32399[(14)] = inst_32297);

(statearr_32399[(7)] = inst_32283__$1);

(statearr_32399[(8)] = inst_32284);

return statearr_32399;
})();
var statearr_32401_34334 = state_32325__$1;
(statearr_32401_34334[(2)] = null);

(statearr_32401_34334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28286__auto__ = null;
var cljs$core$async$state_machine__28286__auto____0 = (function (){
var statearr_32405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32405[(0)] = cljs$core$async$state_machine__28286__auto__);

(statearr_32405[(1)] = (1));

return statearr_32405;
});
var cljs$core$async$state_machine__28286__auto____1 = (function (state_32325){
while(true){
var ret_value__28287__auto__ = (function (){try{while(true){
var result__28288__auto__ = switch__28285__auto__(state_32325);
if(cljs.core.keyword_identical_QMARK_(result__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28288__auto__;
}
break;
}
}catch (e32408){var ex__28289__auto__ = e32408;
var statearr_32409_34340 = state_32325;
(statearr_32409_34340[(2)] = ex__28289__auto__);


if(cljs.core.seq((state_32325[(4)]))){
var statearr_32410_34341 = state_32325;
(statearr_32410_34341[(1)] = cljs.core.first((state_32325[(4)])));

} else {
throw ex__28289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34345 = state_32325;
state_32325 = G__34345;
continue;
} else {
return ret_value__28287__auto__;
}
break;
}
});
cljs$core$async$state_machine__28286__auto__ = function(state_32325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28286__auto____1.call(this,state_32325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28286__auto____0;
cljs$core$async$state_machine__28286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28286__auto____1;
return cljs$core$async$state_machine__28286__auto__;
})()
})();
var state__28782__auto__ = (function (){var statearr_32417 = f__28781__auto__();
(statearr_32417[(6)] = c__28780__auto___34299);

return statearr_32417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28782__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

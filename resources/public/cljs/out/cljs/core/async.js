// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27820 = arguments.length;
switch (G__27820) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27821 = (function (f,blockable,meta27822){
this.f = f;
this.blockable = blockable;
this.meta27822 = meta27822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27823,meta27822__$1){
var self__ = this;
var _27823__$1 = this;
return (new cljs.core.async.t_cljs$core$async27821(self__.f,self__.blockable,meta27822__$1));
}));

(cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27823){
var self__ = this;
var _27823__$1 = this;
return self__.meta27822;
}));

(cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27822","meta27822",1230899773,null)], null);
}));

(cljs.core.async.t_cljs$core$async27821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27821");

(cljs.core.async.t_cljs$core$async27821.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27821.
 */
cljs.core.async.__GT_t_cljs$core$async27821 = (function cljs$core$async$__GT_t_cljs$core$async27821(f__$1,blockable__$1,meta27822){
return (new cljs.core.async.t_cljs$core$async27821(f__$1,blockable__$1,meta27822));
});

}

return (new cljs.core.async.t_cljs$core$async27821(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__27827 = arguments.length;
switch (G__27827) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__27830 = arguments.length;
switch (G__27830) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__27833 = arguments.length;
switch (G__27833) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27835 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27835);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27835);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27837 = arguments.length;
switch (G__27837) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___27839 = n;
var x_27840 = (0);
while(true){
if((x_27840 < n__4613__auto___27839)){
(a[x_27840] = (0));

var G__27841 = (x_27840 + (1));
x_27840 = G__27841;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27842 = (i + (1));
i = G__27842;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27843 = (function (flag,meta27844){
this.flag = flag;
this.meta27844 = meta27844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27845,meta27844__$1){
var self__ = this;
var _27845__$1 = this;
return (new cljs.core.async.t_cljs$core$async27843(self__.flag,meta27844__$1));
}));

(cljs.core.async.t_cljs$core$async27843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27845){
var self__ = this;
var _27845__$1 = this;
return self__.meta27844;
}));

(cljs.core.async.t_cljs$core$async27843.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27844","meta27844",1166105184,null)], null);
}));

(cljs.core.async.t_cljs$core$async27843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27843");

(cljs.core.async.t_cljs$core$async27843.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27843.
 */
cljs.core.async.__GT_t_cljs$core$async27843 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27843(flag__$1,meta27844){
return (new cljs.core.async.t_cljs$core$async27843(flag__$1,meta27844));
});

}

return (new cljs.core.async.t_cljs$core$async27843(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27846 = (function (flag,cb,meta27847){
this.flag = flag;
this.cb = cb;
this.meta27847 = meta27847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27848,meta27847__$1){
var self__ = this;
var _27848__$1 = this;
return (new cljs.core.async.t_cljs$core$async27846(self__.flag,self__.cb,meta27847__$1));
}));

(cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27848){
var self__ = this;
var _27848__$1 = this;
return self__.meta27847;
}));

(cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27847","meta27847",-1735684649,null)], null);
}));

(cljs.core.async.t_cljs$core$async27846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27846");

(cljs.core.async.t_cljs$core$async27846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27846.
 */
cljs.core.async.__GT_t_cljs$core$async27846 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27846(flag__$1,cb__$1,meta27847){
return (new cljs.core.async.t_cljs$core$async27846(flag__$1,cb__$1,meta27847));
});

}

return (new cljs.core.async.t_cljs$core$async27846(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27849_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27849_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27850_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27850_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27851 = (i + (1));
i = G__27851;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4736__auto___27857 = arguments.length;
var i__4737__auto___27858 = (0);
while(true){
if((i__4737__auto___27858 < len__4736__auto___27857)){
args__4742__auto__.push((arguments[i__4737__auto___27858]));

var G__27859 = (i__4737__auto___27858 + (1));
i__4737__auto___27858 = G__27859;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27854){
var map__27855 = p__27854;
var map__27855__$1 = (((((!((map__27855 == null))))?(((((map__27855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27855):map__27855);
var opts = map__27855__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27852){
var G__27853 = cljs.core.first.call(null,seq27852);
var seq27852__$1 = cljs.core.next.call(null,seq27852);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27853,seq27852__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__27861 = arguments.length;
switch (G__27861) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27760__auto___27907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_27885){
var state_val_27886 = (state_27885[(1)]);
if((state_val_27886 === (7))){
var inst_27881 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
var statearr_27887_27908 = state_27885__$1;
(statearr_27887_27908[(2)] = inst_27881);

(statearr_27887_27908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (1))){
var state_27885__$1 = state_27885;
var statearr_27888_27909 = state_27885__$1;
(statearr_27888_27909[(2)] = null);

(statearr_27888_27909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (4))){
var inst_27864 = (state_27885[(7)]);
var inst_27864__$1 = (state_27885[(2)]);
var inst_27865 = (inst_27864__$1 == null);
var state_27885__$1 = (function (){var statearr_27889 = state_27885;
(statearr_27889[(7)] = inst_27864__$1);

return statearr_27889;
})();
if(cljs.core.truth_(inst_27865)){
var statearr_27890_27910 = state_27885__$1;
(statearr_27890_27910[(1)] = (5));

} else {
var statearr_27891_27911 = state_27885__$1;
(statearr_27891_27911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (13))){
var state_27885__$1 = state_27885;
var statearr_27892_27912 = state_27885__$1;
(statearr_27892_27912[(2)] = null);

(statearr_27892_27912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (6))){
var inst_27864 = (state_27885[(7)]);
var state_27885__$1 = state_27885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27885__$1,(11),to,inst_27864);
} else {
if((state_val_27886 === (3))){
var inst_27883 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27885__$1,inst_27883);
} else {
if((state_val_27886 === (12))){
var state_27885__$1 = state_27885;
var statearr_27893_27913 = state_27885__$1;
(statearr_27893_27913[(2)] = null);

(statearr_27893_27913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (2))){
var state_27885__$1 = state_27885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27885__$1,(4),from);
} else {
if((state_val_27886 === (11))){
var inst_27874 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
if(cljs.core.truth_(inst_27874)){
var statearr_27894_27914 = state_27885__$1;
(statearr_27894_27914[(1)] = (12));

} else {
var statearr_27895_27915 = state_27885__$1;
(statearr_27895_27915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (9))){
var state_27885__$1 = state_27885;
var statearr_27896_27916 = state_27885__$1;
(statearr_27896_27916[(2)] = null);

(statearr_27896_27916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (5))){
var state_27885__$1 = state_27885;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27897_27917 = state_27885__$1;
(statearr_27897_27917[(1)] = (8));

} else {
var statearr_27898_27918 = state_27885__$1;
(statearr_27898_27918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (14))){
var inst_27879 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
var statearr_27899_27919 = state_27885__$1;
(statearr_27899_27919[(2)] = inst_27879);

(statearr_27899_27919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (10))){
var inst_27871 = (state_27885[(2)]);
var state_27885__$1 = state_27885;
var statearr_27900_27920 = state_27885__$1;
(statearr_27900_27920[(2)] = inst_27871);

(statearr_27900_27920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27886 === (8))){
var inst_27868 = cljs.core.async.close_BANG_.call(null,to);
var state_27885__$1 = state_27885;
var statearr_27901_27921 = state_27885__$1;
(statearr_27901_27921[(2)] = inst_27868);

(statearr_27901_27921[(1)] = (10));


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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_27902 = [null,null,null,null,null,null,null,null];
(statearr_27902[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_27902[(1)] = (1));

return statearr_27902;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_27885){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_27885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e27903){if((e27903 instanceof Object)){
var ex__27669__auto__ = e27903;
var statearr_27904_27922 = state_27885;
(statearr_27904_27922[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27923 = state_27885;
state_27885 = G__27923;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_27885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_27885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_27905 = f__27761__auto__.call(null);
(statearr_27905[(6)] = c__27760__auto___27907);

return statearr_27905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__27924){
var vec__27925 = p__27924;
var v = cljs.core.nth.call(null,vec__27925,(0),null);
var p = cljs.core.nth.call(null,vec__27925,(1),null);
var job = vec__27925;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27760__auto___28096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_27932){
var state_val_27933 = (state_27932[(1)]);
if((state_val_27933 === (1))){
var state_27932__$1 = state_27932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27932__$1,(2),res,v);
} else {
if((state_val_27933 === (2))){
var inst_27929 = (state_27932[(2)]);
var inst_27930 = cljs.core.async.close_BANG_.call(null,res);
var state_27932__$1 = (function (){var statearr_27934 = state_27932;
(statearr_27934[(7)] = inst_27929);

return statearr_27934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27932__$1,inst_27930);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0 = (function (){
var statearr_27935 = [null,null,null,null,null,null,null,null];
(statearr_27935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__);

(statearr_27935[(1)] = (1));

return statearr_27935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1 = (function (state_27932){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_27932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e27936){if((e27936 instanceof Object)){
var ex__27669__auto__ = e27936;
var statearr_27937_28097 = state_27932;
(statearr_27937_28097[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28098 = state_27932;
state_27932 = G__28098;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = function(state_27932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1.call(this,state_27932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_27938 = f__27761__auto__.call(null);
(statearr_27938[(6)] = c__27760__auto___28096);

return statearr_27938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27939){
var vec__27940 = p__27939;
var v = cljs.core.nth.call(null,vec__27940,(0),null);
var p = cljs.core.nth.call(null,vec__27940,(1),null);
var job = vec__27940;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___28099 = n;
var __28100 = (0);
while(true){
if((__28100 < n__4613__auto___28099)){
var G__27943_28101 = type;
var G__27943_28102__$1 = (((G__27943_28101 instanceof cljs.core.Keyword))?G__27943_28101.fqn:null);
switch (G__27943_28102__$1) {
case "compute":
var c__27760__auto___28104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28100,c__27760__auto___28104,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async){
return (function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = ((function (__28100,c__27760__auto___28104,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async){
return (function (state_27956){
var state_val_27957 = (state_27956[(1)]);
if((state_val_27957 === (1))){
var state_27956__$1 = state_27956;
var statearr_27958_28105 = state_27956__$1;
(statearr_27958_28105[(2)] = null);

(statearr_27958_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (2))){
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27956__$1,(4),jobs);
} else {
if((state_val_27957 === (3))){
var inst_27954 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27956__$1,inst_27954);
} else {
if((state_val_27957 === (4))){
var inst_27946 = (state_27956[(2)]);
var inst_27947 = process.call(null,inst_27946);
var state_27956__$1 = state_27956;
if(cljs.core.truth_(inst_27947)){
var statearr_27959_28106 = state_27956__$1;
(statearr_27959_28106[(1)] = (5));

} else {
var statearr_27960_28107 = state_27956__$1;
(statearr_27960_28107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (5))){
var state_27956__$1 = state_27956;
var statearr_27961_28108 = state_27956__$1;
(statearr_27961_28108[(2)] = null);

(statearr_27961_28108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (6))){
var state_27956__$1 = state_27956;
var statearr_27962_28109 = state_27956__$1;
(statearr_27962_28109[(2)] = null);

(statearr_27962_28109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27957 === (7))){
var inst_27952 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
var statearr_27963_28110 = state_27956__$1;
(statearr_27963_28110[(2)] = inst_27952);

(statearr_27963_28110[(1)] = (3));


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
});})(__28100,c__27760__auto___28104,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async))
;
return ((function (__28100,switch__27665__auto__,c__27760__auto___28104,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0 = (function (){
var statearr_27964 = [null,null,null,null,null,null,null];
(statearr_27964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__);

(statearr_27964[(1)] = (1));

return statearr_27964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1 = (function (state_27956){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_27956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e27965){if((e27965 instanceof Object)){
var ex__27669__auto__ = e27965;
var statearr_27966_28111 = state_27956;
(statearr_27966_28111[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28112 = state_27956;
state_27956 = G__28112;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = function(state_27956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1.call(this,state_27956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__;
})()
;})(__28100,switch__27665__auto__,c__27760__auto___28104,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async))
})();
var state__27762__auto__ = (function (){var statearr_27967 = f__27761__auto__.call(null);
(statearr_27967[(6)] = c__27760__auto___28104);

return statearr_27967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
});})(__28100,c__27760__auto___28104,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async))
);


break;
case "async":
var c__27760__auto___28113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28100,c__27760__auto___28113,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async){
return (function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = ((function (__28100,c__27760__auto___28113,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async){
return (function (state_27980){
var state_val_27981 = (state_27980[(1)]);
if((state_val_27981 === (1))){
var state_27980__$1 = state_27980;
var statearr_27982_28114 = state_27980__$1;
(statearr_27982_28114[(2)] = null);

(statearr_27982_28114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (2))){
var state_27980__$1 = state_27980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27980__$1,(4),jobs);
} else {
if((state_val_27981 === (3))){
var inst_27978 = (state_27980[(2)]);
var state_27980__$1 = state_27980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27980__$1,inst_27978);
} else {
if((state_val_27981 === (4))){
var inst_27970 = (state_27980[(2)]);
var inst_27971 = async.call(null,inst_27970);
var state_27980__$1 = state_27980;
if(cljs.core.truth_(inst_27971)){
var statearr_27983_28115 = state_27980__$1;
(statearr_27983_28115[(1)] = (5));

} else {
var statearr_27984_28116 = state_27980__$1;
(statearr_27984_28116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (5))){
var state_27980__$1 = state_27980;
var statearr_27985_28117 = state_27980__$1;
(statearr_27985_28117[(2)] = null);

(statearr_27985_28117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (6))){
var state_27980__$1 = state_27980;
var statearr_27986_28118 = state_27980__$1;
(statearr_27986_28118[(2)] = null);

(statearr_27986_28118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27981 === (7))){
var inst_27976 = (state_27980[(2)]);
var state_27980__$1 = state_27980;
var statearr_27987_28119 = state_27980__$1;
(statearr_27987_28119[(2)] = inst_27976);

(statearr_27987_28119[(1)] = (3));


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
});})(__28100,c__27760__auto___28113,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async))
;
return ((function (__28100,switch__27665__auto__,c__27760__auto___28113,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0 = (function (){
var statearr_27988 = [null,null,null,null,null,null,null];
(statearr_27988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__);

(statearr_27988[(1)] = (1));

return statearr_27988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1 = (function (state_27980){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_27980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e27989){if((e27989 instanceof Object)){
var ex__27669__auto__ = e27989;
var statearr_27990_28120 = state_27980;
(statearr_27990_28120[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28121 = state_27980;
state_27980 = G__28121;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = function(state_27980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1.call(this,state_27980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__;
})()
;})(__28100,switch__27665__auto__,c__27760__auto___28113,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async))
})();
var state__27762__auto__ = (function (){var statearr_27991 = f__27761__auto__.call(null);
(statearr_27991[(6)] = c__27760__auto___28113);

return statearr_27991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
});})(__28100,c__27760__auto___28113,G__27943_28101,G__27943_28102__$1,n__4613__auto___28099,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27943_28102__$1)].join('')));

}

var G__28122 = (__28100 + (1));
__28100 = G__28122;
continue;
} else {
}
break;
}

var c__27760__auto___28123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28013){
var state_val_28014 = (state_28013[(1)]);
if((state_val_28014 === (7))){
var inst_28009 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
var statearr_28015_28124 = state_28013__$1;
(statearr_28015_28124[(2)] = inst_28009);

(statearr_28015_28124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (1))){
var state_28013__$1 = state_28013;
var statearr_28016_28125 = state_28013__$1;
(statearr_28016_28125[(2)] = null);

(statearr_28016_28125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (4))){
var inst_27994 = (state_28013[(7)]);
var inst_27994__$1 = (state_28013[(2)]);
var inst_27995 = (inst_27994__$1 == null);
var state_28013__$1 = (function (){var statearr_28017 = state_28013;
(statearr_28017[(7)] = inst_27994__$1);

return statearr_28017;
})();
if(cljs.core.truth_(inst_27995)){
var statearr_28018_28126 = state_28013__$1;
(statearr_28018_28126[(1)] = (5));

} else {
var statearr_28019_28127 = state_28013__$1;
(statearr_28019_28127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (6))){
var inst_27994 = (state_28013[(7)]);
var inst_27999 = (state_28013[(8)]);
var inst_27999__$1 = cljs.core.async.chan.call(null,(1));
var inst_28000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28001 = [inst_27994,inst_27999__$1];
var inst_28002 = (new cljs.core.PersistentVector(null,2,(5),inst_28000,inst_28001,null));
var state_28013__$1 = (function (){var statearr_28020 = state_28013;
(statearr_28020[(8)] = inst_27999__$1);

return statearr_28020;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28013__$1,(8),jobs,inst_28002);
} else {
if((state_val_28014 === (3))){
var inst_28011 = (state_28013[(2)]);
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28013__$1,inst_28011);
} else {
if((state_val_28014 === (2))){
var state_28013__$1 = state_28013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28013__$1,(4),from);
} else {
if((state_val_28014 === (9))){
var inst_28006 = (state_28013[(2)]);
var state_28013__$1 = (function (){var statearr_28021 = state_28013;
(statearr_28021[(9)] = inst_28006);

return statearr_28021;
})();
var statearr_28022_28128 = state_28013__$1;
(statearr_28022_28128[(2)] = null);

(statearr_28022_28128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (5))){
var inst_27997 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28013__$1 = state_28013;
var statearr_28023_28129 = state_28013__$1;
(statearr_28023_28129[(2)] = inst_27997);

(statearr_28023_28129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28014 === (8))){
var inst_27999 = (state_28013[(8)]);
var inst_28004 = (state_28013[(2)]);
var state_28013__$1 = (function (){var statearr_28024 = state_28013;
(statearr_28024[(10)] = inst_28004);

return statearr_28024;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28013__$1,(9),results,inst_27999);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0 = (function (){
var statearr_28025 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__);

(statearr_28025[(1)] = (1));

return statearr_28025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1 = (function (state_28013){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e28026){if((e28026 instanceof Object)){
var ex__27669__auto__ = e28026;
var statearr_28027_28130 = state_28013;
(statearr_28027_28130[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28131 = state_28013;
state_28013 = G__28131;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = function(state_28013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1.call(this,state_28013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_28028 = f__27761__auto__.call(null);
(statearr_28028[(6)] = c__27760__auto___28123);

return statearr_28028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28066){
var state_val_28067 = (state_28066[(1)]);
if((state_val_28067 === (7))){
var inst_28062 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28068_28132 = state_28066__$1;
(statearr_28068_28132[(2)] = inst_28062);

(statearr_28068_28132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (20))){
var state_28066__$1 = state_28066;
var statearr_28069_28133 = state_28066__$1;
(statearr_28069_28133[(2)] = null);

(statearr_28069_28133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (1))){
var state_28066__$1 = state_28066;
var statearr_28070_28134 = state_28066__$1;
(statearr_28070_28134[(2)] = null);

(statearr_28070_28134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (4))){
var inst_28031 = (state_28066[(7)]);
var inst_28031__$1 = (state_28066[(2)]);
var inst_28032 = (inst_28031__$1 == null);
var state_28066__$1 = (function (){var statearr_28071 = state_28066;
(statearr_28071[(7)] = inst_28031__$1);

return statearr_28071;
})();
if(cljs.core.truth_(inst_28032)){
var statearr_28072_28135 = state_28066__$1;
(statearr_28072_28135[(1)] = (5));

} else {
var statearr_28073_28136 = state_28066__$1;
(statearr_28073_28136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (15))){
var inst_28044 = (state_28066[(8)]);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28066__$1,(18),to,inst_28044);
} else {
if((state_val_28067 === (21))){
var inst_28057 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28074_28137 = state_28066__$1;
(statearr_28074_28137[(2)] = inst_28057);

(statearr_28074_28137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (13))){
var inst_28059 = (state_28066[(2)]);
var state_28066__$1 = (function (){var statearr_28075 = state_28066;
(statearr_28075[(9)] = inst_28059);

return statearr_28075;
})();
var statearr_28076_28138 = state_28066__$1;
(statearr_28076_28138[(2)] = null);

(statearr_28076_28138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (6))){
var inst_28031 = (state_28066[(7)]);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28066__$1,(11),inst_28031);
} else {
if((state_val_28067 === (17))){
var inst_28052 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
if(cljs.core.truth_(inst_28052)){
var statearr_28077_28139 = state_28066__$1;
(statearr_28077_28139[(1)] = (19));

} else {
var statearr_28078_28140 = state_28066__$1;
(statearr_28078_28140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (3))){
var inst_28064 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28066__$1,inst_28064);
} else {
if((state_val_28067 === (12))){
var inst_28041 = (state_28066[(10)]);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28066__$1,(14),inst_28041);
} else {
if((state_val_28067 === (2))){
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28066__$1,(4),results);
} else {
if((state_val_28067 === (19))){
var state_28066__$1 = state_28066;
var statearr_28079_28141 = state_28066__$1;
(statearr_28079_28141[(2)] = null);

(statearr_28079_28141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (11))){
var inst_28041 = (state_28066[(2)]);
var state_28066__$1 = (function (){var statearr_28080 = state_28066;
(statearr_28080[(10)] = inst_28041);

return statearr_28080;
})();
var statearr_28081_28142 = state_28066__$1;
(statearr_28081_28142[(2)] = null);

(statearr_28081_28142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (9))){
var state_28066__$1 = state_28066;
var statearr_28082_28143 = state_28066__$1;
(statearr_28082_28143[(2)] = null);

(statearr_28082_28143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (5))){
var state_28066__$1 = state_28066;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28083_28144 = state_28066__$1;
(statearr_28083_28144[(1)] = (8));

} else {
var statearr_28084_28145 = state_28066__$1;
(statearr_28084_28145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (14))){
var inst_28044 = (state_28066[(8)]);
var inst_28044__$1 = (state_28066[(2)]);
var inst_28045 = (inst_28044__$1 == null);
var inst_28046 = cljs.core.not.call(null,inst_28045);
var state_28066__$1 = (function (){var statearr_28085 = state_28066;
(statearr_28085[(8)] = inst_28044__$1);

return statearr_28085;
})();
if(inst_28046){
var statearr_28086_28146 = state_28066__$1;
(statearr_28086_28146[(1)] = (15));

} else {
var statearr_28087_28147 = state_28066__$1;
(statearr_28087_28147[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (16))){
var state_28066__$1 = state_28066;
var statearr_28088_28148 = state_28066__$1;
(statearr_28088_28148[(2)] = false);

(statearr_28088_28148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (10))){
var inst_28038 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28089_28149 = state_28066__$1;
(statearr_28089_28149[(2)] = inst_28038);

(statearr_28089_28149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (18))){
var inst_28049 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28090_28150 = state_28066__$1;
(statearr_28090_28150[(2)] = inst_28049);

(statearr_28090_28150[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (8))){
var inst_28035 = cljs.core.async.close_BANG_.call(null,to);
var state_28066__$1 = state_28066;
var statearr_28091_28151 = state_28066__$1;
(statearr_28091_28151[(2)] = inst_28035);

(statearr_28091_28151[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0 = (function (){
var statearr_28092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__);

(statearr_28092[(1)] = (1));

return statearr_28092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1 = (function (state_28066){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e28093){if((e28093 instanceof Object)){
var ex__27669__auto__ = e28093;
var statearr_28094_28152 = state_28066;
(statearr_28094_28152[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28153 = state_28066;
state_28066 = G__28153;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__ = function(state_28066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1.call(this,state_28066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_28095 = f__27761__auto__.call(null);
(statearr_28095[(6)] = c__27760__auto__);

return statearr_28095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
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
var G__28155 = arguments.length;
switch (G__28155) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__28158 = arguments.length;
switch (G__28158) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__28161 = arguments.length;
switch (G__28161) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27760__auto___28210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28187){
var state_val_28188 = (state_28187[(1)]);
if((state_val_28188 === (7))){
var inst_28183 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
var statearr_28189_28211 = state_28187__$1;
(statearr_28189_28211[(2)] = inst_28183);

(statearr_28189_28211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (1))){
var state_28187__$1 = state_28187;
var statearr_28190_28212 = state_28187__$1;
(statearr_28190_28212[(2)] = null);

(statearr_28190_28212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (4))){
var inst_28164 = (state_28187[(7)]);
var inst_28164__$1 = (state_28187[(2)]);
var inst_28165 = (inst_28164__$1 == null);
var state_28187__$1 = (function (){var statearr_28191 = state_28187;
(statearr_28191[(7)] = inst_28164__$1);

return statearr_28191;
})();
if(cljs.core.truth_(inst_28165)){
var statearr_28192_28213 = state_28187__$1;
(statearr_28192_28213[(1)] = (5));

} else {
var statearr_28193_28214 = state_28187__$1;
(statearr_28193_28214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (13))){
var state_28187__$1 = state_28187;
var statearr_28194_28215 = state_28187__$1;
(statearr_28194_28215[(2)] = null);

(statearr_28194_28215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (6))){
var inst_28164 = (state_28187[(7)]);
var inst_28170 = p.call(null,inst_28164);
var state_28187__$1 = state_28187;
if(cljs.core.truth_(inst_28170)){
var statearr_28195_28216 = state_28187__$1;
(statearr_28195_28216[(1)] = (9));

} else {
var statearr_28196_28217 = state_28187__$1;
(statearr_28196_28217[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (3))){
var inst_28185 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28187__$1,inst_28185);
} else {
if((state_val_28188 === (12))){
var state_28187__$1 = state_28187;
var statearr_28197_28218 = state_28187__$1;
(statearr_28197_28218[(2)] = null);

(statearr_28197_28218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (2))){
var state_28187__$1 = state_28187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28187__$1,(4),ch);
} else {
if((state_val_28188 === (11))){
var inst_28164 = (state_28187[(7)]);
var inst_28174 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28187__$1,(8),inst_28174,inst_28164);
} else {
if((state_val_28188 === (9))){
var state_28187__$1 = state_28187;
var statearr_28198_28219 = state_28187__$1;
(statearr_28198_28219[(2)] = tc);

(statearr_28198_28219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (5))){
var inst_28167 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28168 = cljs.core.async.close_BANG_.call(null,fc);
var state_28187__$1 = (function (){var statearr_28199 = state_28187;
(statearr_28199[(8)] = inst_28167);

return statearr_28199;
})();
var statearr_28200_28220 = state_28187__$1;
(statearr_28200_28220[(2)] = inst_28168);

(statearr_28200_28220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (14))){
var inst_28181 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
var statearr_28201_28221 = state_28187__$1;
(statearr_28201_28221[(2)] = inst_28181);

(statearr_28201_28221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (10))){
var state_28187__$1 = state_28187;
var statearr_28202_28222 = state_28187__$1;
(statearr_28202_28222[(2)] = fc);

(statearr_28202_28222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28188 === (8))){
var inst_28176 = (state_28187[(2)]);
var state_28187__$1 = state_28187;
if(cljs.core.truth_(inst_28176)){
var statearr_28203_28223 = state_28187__$1;
(statearr_28203_28223[(1)] = (12));

} else {
var statearr_28204_28224 = state_28187__$1;
(statearr_28204_28224[(1)] = (13));

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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_28205 = [null,null,null,null,null,null,null,null,null];
(statearr_28205[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_28205[(1)] = (1));

return statearr_28205;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_28187){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e28206){if((e28206 instanceof Object)){
var ex__27669__auto__ = e28206;
var statearr_28207_28225 = state_28187;
(statearr_28207_28225[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28226 = state_28187;
state_28187 = G__28226;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_28187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_28187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_28208 = f__27761__auto__.call(null);
(statearr_28208[(6)] = c__27760__auto___28210);

return statearr_28208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
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
var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28247){
var state_val_28248 = (state_28247[(1)]);
if((state_val_28248 === (7))){
var inst_28243 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
var statearr_28249_28267 = state_28247__$1;
(statearr_28249_28267[(2)] = inst_28243);

(statearr_28249_28267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (1))){
var inst_28227 = init;
var state_28247__$1 = (function (){var statearr_28250 = state_28247;
(statearr_28250[(7)] = inst_28227);

return statearr_28250;
})();
var statearr_28251_28268 = state_28247__$1;
(statearr_28251_28268[(2)] = null);

(statearr_28251_28268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (4))){
var inst_28230 = (state_28247[(8)]);
var inst_28230__$1 = (state_28247[(2)]);
var inst_28231 = (inst_28230__$1 == null);
var state_28247__$1 = (function (){var statearr_28252 = state_28247;
(statearr_28252[(8)] = inst_28230__$1);

return statearr_28252;
})();
if(cljs.core.truth_(inst_28231)){
var statearr_28253_28269 = state_28247__$1;
(statearr_28253_28269[(1)] = (5));

} else {
var statearr_28254_28270 = state_28247__$1;
(statearr_28254_28270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (6))){
var inst_28234 = (state_28247[(9)]);
var inst_28230 = (state_28247[(8)]);
var inst_28227 = (state_28247[(7)]);
var inst_28234__$1 = f.call(null,inst_28227,inst_28230);
var inst_28235 = cljs.core.reduced_QMARK_.call(null,inst_28234__$1);
var state_28247__$1 = (function (){var statearr_28255 = state_28247;
(statearr_28255[(9)] = inst_28234__$1);

return statearr_28255;
})();
if(inst_28235){
var statearr_28256_28271 = state_28247__$1;
(statearr_28256_28271[(1)] = (8));

} else {
var statearr_28257_28272 = state_28247__$1;
(statearr_28257_28272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (3))){
var inst_28245 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28247__$1,inst_28245);
} else {
if((state_val_28248 === (2))){
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28247__$1,(4),ch);
} else {
if((state_val_28248 === (9))){
var inst_28234 = (state_28247[(9)]);
var inst_28227 = inst_28234;
var state_28247__$1 = (function (){var statearr_28258 = state_28247;
(statearr_28258[(7)] = inst_28227);

return statearr_28258;
})();
var statearr_28259_28273 = state_28247__$1;
(statearr_28259_28273[(2)] = null);

(statearr_28259_28273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (5))){
var inst_28227 = (state_28247[(7)]);
var state_28247__$1 = state_28247;
var statearr_28260_28274 = state_28247__$1;
(statearr_28260_28274[(2)] = inst_28227);

(statearr_28260_28274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (10))){
var inst_28241 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
var statearr_28261_28275 = state_28247__$1;
(statearr_28261_28275[(2)] = inst_28241);

(statearr_28261_28275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (8))){
var inst_28234 = (state_28247[(9)]);
var inst_28237 = cljs.core.deref.call(null,inst_28234);
var state_28247__$1 = state_28247;
var statearr_28262_28276 = state_28247__$1;
(statearr_28262_28276[(2)] = inst_28237);

(statearr_28262_28276[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27666__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27666__auto____0 = (function (){
var statearr_28263 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28263[(0)] = cljs$core$async$reduce_$_state_machine__27666__auto__);

(statearr_28263[(1)] = (1));

return statearr_28263;
});
var cljs$core$async$reduce_$_state_machine__27666__auto____1 = (function (state_28247){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e28264){if((e28264 instanceof Object)){
var ex__27669__auto__ = e28264;
var statearr_28265_28277 = state_28247;
(statearr_28265_28277[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28278 = state_28247;
state_28247 = G__28278;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27666__auto__ = function(state_28247){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27666__auto____1.call(this,state_28247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27666__auto____0;
cljs$core$async$reduce_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27666__auto____1;
return cljs$core$async$reduce_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_28266 = f__27761__auto__.call(null);
(statearr_28266[(6)] = c__27760__auto__);

return statearr_28266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28284){
var state_val_28285 = (state_28284[(1)]);
if((state_val_28285 === (1))){
var inst_28279 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28284__$1,(2),inst_28279);
} else {
if((state_val_28285 === (2))){
var inst_28281 = (state_28284[(2)]);
var inst_28282 = f__$1.call(null,inst_28281);
var state_28284__$1 = state_28284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28284__$1,inst_28282);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27666__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27666__auto____0 = (function (){
var statearr_28286 = [null,null,null,null,null,null,null];
(statearr_28286[(0)] = cljs$core$async$transduce_$_state_machine__27666__auto__);

(statearr_28286[(1)] = (1));

return statearr_28286;
});
var cljs$core$async$transduce_$_state_machine__27666__auto____1 = (function (state_28284){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e28287){if((e28287 instanceof Object)){
var ex__27669__auto__ = e28287;
var statearr_28288_28290 = state_28284;
(statearr_28288_28290[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28291 = state_28284;
state_28284 = G__28291;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27666__auto__ = function(state_28284){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27666__auto____1.call(this,state_28284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27666__auto____0;
cljs$core$async$transduce_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27666__auto____1;
return cljs$core$async$transduce_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_28289 = f__27761__auto__.call(null);
(statearr_28289[(6)] = c__27760__auto__);

return statearr_28289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28293 = arguments.length;
switch (G__28293) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28318){
var state_val_28319 = (state_28318[(1)]);
if((state_val_28319 === (7))){
var inst_28300 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28320_28341 = state_28318__$1;
(statearr_28320_28341[(2)] = inst_28300);

(statearr_28320_28341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (1))){
var inst_28294 = cljs.core.seq.call(null,coll);
var inst_28295 = inst_28294;
var state_28318__$1 = (function (){var statearr_28321 = state_28318;
(statearr_28321[(7)] = inst_28295);

return statearr_28321;
})();
var statearr_28322_28342 = state_28318__$1;
(statearr_28322_28342[(2)] = null);

(statearr_28322_28342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (4))){
var inst_28295 = (state_28318[(7)]);
var inst_28298 = cljs.core.first.call(null,inst_28295);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28318__$1,(7),ch,inst_28298);
} else {
if((state_val_28319 === (13))){
var inst_28312 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28323_28343 = state_28318__$1;
(statearr_28323_28343[(2)] = inst_28312);

(statearr_28323_28343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (6))){
var inst_28303 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
if(cljs.core.truth_(inst_28303)){
var statearr_28324_28344 = state_28318__$1;
(statearr_28324_28344[(1)] = (8));

} else {
var statearr_28325_28345 = state_28318__$1;
(statearr_28325_28345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (3))){
var inst_28316 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28318__$1,inst_28316);
} else {
if((state_val_28319 === (12))){
var state_28318__$1 = state_28318;
var statearr_28326_28346 = state_28318__$1;
(statearr_28326_28346[(2)] = null);

(statearr_28326_28346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (2))){
var inst_28295 = (state_28318[(7)]);
var state_28318__$1 = state_28318;
if(cljs.core.truth_(inst_28295)){
var statearr_28327_28347 = state_28318__$1;
(statearr_28327_28347[(1)] = (4));

} else {
var statearr_28328_28348 = state_28318__$1;
(statearr_28328_28348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (11))){
var inst_28309 = cljs.core.async.close_BANG_.call(null,ch);
var state_28318__$1 = state_28318;
var statearr_28329_28349 = state_28318__$1;
(statearr_28329_28349[(2)] = inst_28309);

(statearr_28329_28349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (9))){
var state_28318__$1 = state_28318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28330_28350 = state_28318__$1;
(statearr_28330_28350[(1)] = (11));

} else {
var statearr_28331_28351 = state_28318__$1;
(statearr_28331_28351[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (5))){
var inst_28295 = (state_28318[(7)]);
var state_28318__$1 = state_28318;
var statearr_28332_28352 = state_28318__$1;
(statearr_28332_28352[(2)] = inst_28295);

(statearr_28332_28352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (10))){
var inst_28314 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28333_28353 = state_28318__$1;
(statearr_28333_28353[(2)] = inst_28314);

(statearr_28333_28353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (8))){
var inst_28295 = (state_28318[(7)]);
var inst_28305 = cljs.core.next.call(null,inst_28295);
var inst_28295__$1 = inst_28305;
var state_28318__$1 = (function (){var statearr_28334 = state_28318;
(statearr_28334[(7)] = inst_28295__$1);

return statearr_28334;
})();
var statearr_28335_28354 = state_28318__$1;
(statearr_28335_28354[(2)] = null);

(statearr_28335_28354[(1)] = (2));


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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_28336 = [null,null,null,null,null,null,null,null];
(statearr_28336[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_28336[(1)] = (1));

return statearr_28336;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_28318){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e28337){if((e28337 instanceof Object)){
var ex__27669__auto__ = e28337;
var statearr_28338_28355 = state_28318;
(statearr_28338_28355[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28356 = state_28318;
state_28318 = G__28356;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_28318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_28318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_28339 = f__27761__auto__.call(null);
(statearr_28339[(6)] = c__27760__auto__);

return statearr_28339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_28357 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_28357.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28358 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_28358.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28359 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_28359.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28360 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_28360.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28361 = (function (ch,cs,meta28362){
this.ch = ch;
this.cs = cs;
this.meta28362 = meta28362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28363,meta28362__$1){
var self__ = this;
var _28363__$1 = this;
return (new cljs.core.async.t_cljs$core$async28361(self__.ch,self__.cs,meta28362__$1));
}));

(cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28363){
var self__ = this;
var _28363__$1 = this;
return self__.meta28362;
}));

(cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28362","meta28362",-1467845262,null)], null);
}));

(cljs.core.async.t_cljs$core$async28361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28361");

(cljs.core.async.t_cljs$core$async28361.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28361.
 */
cljs.core.async.__GT_t_cljs$core$async28361 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28361(ch__$1,cs__$1,meta28362){
return (new cljs.core.async.t_cljs$core$async28361(ch__$1,cs__$1,meta28362));
});

}

return (new cljs.core.async.t_cljs$core$async28361(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__27760__auto___28583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28498){
var state_val_28499 = (state_28498[(1)]);
if((state_val_28499 === (7))){
var inst_28494 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28500_28584 = state_28498__$1;
(statearr_28500_28584[(2)] = inst_28494);

(statearr_28500_28584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (20))){
var inst_28397 = (state_28498[(7)]);
var inst_28409 = cljs.core.first.call(null,inst_28397);
var inst_28410 = cljs.core.nth.call(null,inst_28409,(0),null);
var inst_28411 = cljs.core.nth.call(null,inst_28409,(1),null);
var state_28498__$1 = (function (){var statearr_28501 = state_28498;
(statearr_28501[(8)] = inst_28410);

return statearr_28501;
})();
if(cljs.core.truth_(inst_28411)){
var statearr_28502_28585 = state_28498__$1;
(statearr_28502_28585[(1)] = (22));

} else {
var statearr_28503_28586 = state_28498__$1;
(statearr_28503_28586[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (27))){
var inst_28366 = (state_28498[(9)]);
var inst_28446 = (state_28498[(10)]);
var inst_28439 = (state_28498[(11)]);
var inst_28441 = (state_28498[(12)]);
var inst_28446__$1 = cljs.core._nth.call(null,inst_28439,inst_28441);
var inst_28447 = cljs.core.async.put_BANG_.call(null,inst_28446__$1,inst_28366,done);
var state_28498__$1 = (function (){var statearr_28504 = state_28498;
(statearr_28504[(10)] = inst_28446__$1);

return statearr_28504;
})();
if(cljs.core.truth_(inst_28447)){
var statearr_28505_28587 = state_28498__$1;
(statearr_28505_28587[(1)] = (30));

} else {
var statearr_28506_28588 = state_28498__$1;
(statearr_28506_28588[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (1))){
var state_28498__$1 = state_28498;
var statearr_28507_28589 = state_28498__$1;
(statearr_28507_28589[(2)] = null);

(statearr_28507_28589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (24))){
var inst_28397 = (state_28498[(7)]);
var inst_28416 = (state_28498[(2)]);
var inst_28417 = cljs.core.next.call(null,inst_28397);
var inst_28375 = inst_28417;
var inst_28376 = null;
var inst_28377 = (0);
var inst_28378 = (0);
var state_28498__$1 = (function (){var statearr_28508 = state_28498;
(statearr_28508[(13)] = inst_28375);

(statearr_28508[(14)] = inst_28378);

(statearr_28508[(15)] = inst_28377);

(statearr_28508[(16)] = inst_28416);

(statearr_28508[(17)] = inst_28376);

return statearr_28508;
})();
var statearr_28509_28590 = state_28498__$1;
(statearr_28509_28590[(2)] = null);

(statearr_28509_28590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (39))){
var state_28498__$1 = state_28498;
var statearr_28513_28591 = state_28498__$1;
(statearr_28513_28591[(2)] = null);

(statearr_28513_28591[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (4))){
var inst_28366 = (state_28498[(9)]);
var inst_28366__$1 = (state_28498[(2)]);
var inst_28367 = (inst_28366__$1 == null);
var state_28498__$1 = (function (){var statearr_28514 = state_28498;
(statearr_28514[(9)] = inst_28366__$1);

return statearr_28514;
})();
if(cljs.core.truth_(inst_28367)){
var statearr_28515_28592 = state_28498__$1;
(statearr_28515_28592[(1)] = (5));

} else {
var statearr_28516_28593 = state_28498__$1;
(statearr_28516_28593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (15))){
var inst_28375 = (state_28498[(13)]);
var inst_28378 = (state_28498[(14)]);
var inst_28377 = (state_28498[(15)]);
var inst_28376 = (state_28498[(17)]);
var inst_28393 = (state_28498[(2)]);
var inst_28394 = (inst_28378 + (1));
var tmp28510 = inst_28375;
var tmp28511 = inst_28377;
var tmp28512 = inst_28376;
var inst_28375__$1 = tmp28510;
var inst_28376__$1 = tmp28512;
var inst_28377__$1 = tmp28511;
var inst_28378__$1 = inst_28394;
var state_28498__$1 = (function (){var statearr_28517 = state_28498;
(statearr_28517[(13)] = inst_28375__$1);

(statearr_28517[(14)] = inst_28378__$1);

(statearr_28517[(15)] = inst_28377__$1);

(statearr_28517[(17)] = inst_28376__$1);

(statearr_28517[(18)] = inst_28393);

return statearr_28517;
})();
var statearr_28518_28594 = state_28498__$1;
(statearr_28518_28594[(2)] = null);

(statearr_28518_28594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (21))){
var inst_28420 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28522_28595 = state_28498__$1;
(statearr_28522_28595[(2)] = inst_28420);

(statearr_28522_28595[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (31))){
var inst_28446 = (state_28498[(10)]);
var inst_28450 = done.call(null,null);
var inst_28451 = cljs.core.async.untap_STAR_.call(null,m,inst_28446);
var state_28498__$1 = (function (){var statearr_28523 = state_28498;
(statearr_28523[(19)] = inst_28450);

return statearr_28523;
})();
var statearr_28524_28596 = state_28498__$1;
(statearr_28524_28596[(2)] = inst_28451);

(statearr_28524_28596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (32))){
var inst_28440 = (state_28498[(20)]);
var inst_28439 = (state_28498[(11)]);
var inst_28441 = (state_28498[(12)]);
var inst_28438 = (state_28498[(21)]);
var inst_28453 = (state_28498[(2)]);
var inst_28454 = (inst_28441 + (1));
var tmp28519 = inst_28440;
var tmp28520 = inst_28439;
var tmp28521 = inst_28438;
var inst_28438__$1 = tmp28521;
var inst_28439__$1 = tmp28520;
var inst_28440__$1 = tmp28519;
var inst_28441__$1 = inst_28454;
var state_28498__$1 = (function (){var statearr_28525 = state_28498;
(statearr_28525[(20)] = inst_28440__$1);

(statearr_28525[(11)] = inst_28439__$1);

(statearr_28525[(12)] = inst_28441__$1);

(statearr_28525[(21)] = inst_28438__$1);

(statearr_28525[(22)] = inst_28453);

return statearr_28525;
})();
var statearr_28526_28597 = state_28498__$1;
(statearr_28526_28597[(2)] = null);

(statearr_28526_28597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (40))){
var inst_28466 = (state_28498[(23)]);
var inst_28470 = done.call(null,null);
var inst_28471 = cljs.core.async.untap_STAR_.call(null,m,inst_28466);
var state_28498__$1 = (function (){var statearr_28527 = state_28498;
(statearr_28527[(24)] = inst_28470);

return statearr_28527;
})();
var statearr_28528_28598 = state_28498__$1;
(statearr_28528_28598[(2)] = inst_28471);

(statearr_28528_28598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (33))){
var inst_28457 = (state_28498[(25)]);
var inst_28459 = cljs.core.chunked_seq_QMARK_.call(null,inst_28457);
var state_28498__$1 = state_28498;
if(inst_28459){
var statearr_28529_28599 = state_28498__$1;
(statearr_28529_28599[(1)] = (36));

} else {
var statearr_28530_28600 = state_28498__$1;
(statearr_28530_28600[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (13))){
var inst_28387 = (state_28498[(26)]);
var inst_28390 = cljs.core.async.close_BANG_.call(null,inst_28387);
var state_28498__$1 = state_28498;
var statearr_28531_28601 = state_28498__$1;
(statearr_28531_28601[(2)] = inst_28390);

(statearr_28531_28601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (22))){
var inst_28410 = (state_28498[(8)]);
var inst_28413 = cljs.core.async.close_BANG_.call(null,inst_28410);
var state_28498__$1 = state_28498;
var statearr_28532_28602 = state_28498__$1;
(statearr_28532_28602[(2)] = inst_28413);

(statearr_28532_28602[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (36))){
var inst_28457 = (state_28498[(25)]);
var inst_28461 = cljs.core.chunk_first.call(null,inst_28457);
var inst_28462 = cljs.core.chunk_rest.call(null,inst_28457);
var inst_28463 = cljs.core.count.call(null,inst_28461);
var inst_28438 = inst_28462;
var inst_28439 = inst_28461;
var inst_28440 = inst_28463;
var inst_28441 = (0);
var state_28498__$1 = (function (){var statearr_28533 = state_28498;
(statearr_28533[(20)] = inst_28440);

(statearr_28533[(11)] = inst_28439);

(statearr_28533[(12)] = inst_28441);

(statearr_28533[(21)] = inst_28438);

return statearr_28533;
})();
var statearr_28534_28603 = state_28498__$1;
(statearr_28534_28603[(2)] = null);

(statearr_28534_28603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (41))){
var inst_28457 = (state_28498[(25)]);
var inst_28473 = (state_28498[(2)]);
var inst_28474 = cljs.core.next.call(null,inst_28457);
var inst_28438 = inst_28474;
var inst_28439 = null;
var inst_28440 = (0);
var inst_28441 = (0);
var state_28498__$1 = (function (){var statearr_28535 = state_28498;
(statearr_28535[(20)] = inst_28440);

(statearr_28535[(11)] = inst_28439);

(statearr_28535[(12)] = inst_28441);

(statearr_28535[(21)] = inst_28438);

(statearr_28535[(27)] = inst_28473);

return statearr_28535;
})();
var statearr_28536_28604 = state_28498__$1;
(statearr_28536_28604[(2)] = null);

(statearr_28536_28604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (43))){
var state_28498__$1 = state_28498;
var statearr_28537_28605 = state_28498__$1;
(statearr_28537_28605[(2)] = null);

(statearr_28537_28605[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (29))){
var inst_28482 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28538_28606 = state_28498__$1;
(statearr_28538_28606[(2)] = inst_28482);

(statearr_28538_28606[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (44))){
var inst_28491 = (state_28498[(2)]);
var state_28498__$1 = (function (){var statearr_28539 = state_28498;
(statearr_28539[(28)] = inst_28491);

return statearr_28539;
})();
var statearr_28540_28607 = state_28498__$1;
(statearr_28540_28607[(2)] = null);

(statearr_28540_28607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (6))){
var inst_28430 = (state_28498[(29)]);
var inst_28429 = cljs.core.deref.call(null,cs);
var inst_28430__$1 = cljs.core.keys.call(null,inst_28429);
var inst_28431 = cljs.core.count.call(null,inst_28430__$1);
var inst_28432 = cljs.core.reset_BANG_.call(null,dctr,inst_28431);
var inst_28437 = cljs.core.seq.call(null,inst_28430__$1);
var inst_28438 = inst_28437;
var inst_28439 = null;
var inst_28440 = (0);
var inst_28441 = (0);
var state_28498__$1 = (function (){var statearr_28541 = state_28498;
(statearr_28541[(20)] = inst_28440);

(statearr_28541[(30)] = inst_28432);

(statearr_28541[(11)] = inst_28439);

(statearr_28541[(12)] = inst_28441);

(statearr_28541[(21)] = inst_28438);

(statearr_28541[(29)] = inst_28430__$1);

return statearr_28541;
})();
var statearr_28542_28608 = state_28498__$1;
(statearr_28542_28608[(2)] = null);

(statearr_28542_28608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (28))){
var inst_28457 = (state_28498[(25)]);
var inst_28438 = (state_28498[(21)]);
var inst_28457__$1 = cljs.core.seq.call(null,inst_28438);
var state_28498__$1 = (function (){var statearr_28543 = state_28498;
(statearr_28543[(25)] = inst_28457__$1);

return statearr_28543;
})();
if(inst_28457__$1){
var statearr_28544_28609 = state_28498__$1;
(statearr_28544_28609[(1)] = (33));

} else {
var statearr_28545_28610 = state_28498__$1;
(statearr_28545_28610[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (25))){
var inst_28440 = (state_28498[(20)]);
var inst_28441 = (state_28498[(12)]);
var inst_28443 = (inst_28441 < inst_28440);
var inst_28444 = inst_28443;
var state_28498__$1 = state_28498;
if(cljs.core.truth_(inst_28444)){
var statearr_28546_28611 = state_28498__$1;
(statearr_28546_28611[(1)] = (27));

} else {
var statearr_28547_28612 = state_28498__$1;
(statearr_28547_28612[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (34))){
var state_28498__$1 = state_28498;
var statearr_28548_28613 = state_28498__$1;
(statearr_28548_28613[(2)] = null);

(statearr_28548_28613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (17))){
var state_28498__$1 = state_28498;
var statearr_28549_28614 = state_28498__$1;
(statearr_28549_28614[(2)] = null);

(statearr_28549_28614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (3))){
var inst_28496 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28498__$1,inst_28496);
} else {
if((state_val_28499 === (12))){
var inst_28425 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28550_28615 = state_28498__$1;
(statearr_28550_28615[(2)] = inst_28425);

(statearr_28550_28615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (2))){
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28498__$1,(4),ch);
} else {
if((state_val_28499 === (23))){
var state_28498__$1 = state_28498;
var statearr_28551_28616 = state_28498__$1;
(statearr_28551_28616[(2)] = null);

(statearr_28551_28616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (35))){
var inst_28480 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28552_28617 = state_28498__$1;
(statearr_28552_28617[(2)] = inst_28480);

(statearr_28552_28617[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (19))){
var inst_28397 = (state_28498[(7)]);
var inst_28401 = cljs.core.chunk_first.call(null,inst_28397);
var inst_28402 = cljs.core.chunk_rest.call(null,inst_28397);
var inst_28403 = cljs.core.count.call(null,inst_28401);
var inst_28375 = inst_28402;
var inst_28376 = inst_28401;
var inst_28377 = inst_28403;
var inst_28378 = (0);
var state_28498__$1 = (function (){var statearr_28553 = state_28498;
(statearr_28553[(13)] = inst_28375);

(statearr_28553[(14)] = inst_28378);

(statearr_28553[(15)] = inst_28377);

(statearr_28553[(17)] = inst_28376);

return statearr_28553;
})();
var statearr_28554_28618 = state_28498__$1;
(statearr_28554_28618[(2)] = null);

(statearr_28554_28618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (11))){
var inst_28375 = (state_28498[(13)]);
var inst_28397 = (state_28498[(7)]);
var inst_28397__$1 = cljs.core.seq.call(null,inst_28375);
var state_28498__$1 = (function (){var statearr_28555 = state_28498;
(statearr_28555[(7)] = inst_28397__$1);

return statearr_28555;
})();
if(inst_28397__$1){
var statearr_28556_28619 = state_28498__$1;
(statearr_28556_28619[(1)] = (16));

} else {
var statearr_28557_28620 = state_28498__$1;
(statearr_28557_28620[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (9))){
var inst_28427 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28558_28621 = state_28498__$1;
(statearr_28558_28621[(2)] = inst_28427);

(statearr_28558_28621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (5))){
var inst_28373 = cljs.core.deref.call(null,cs);
var inst_28374 = cljs.core.seq.call(null,inst_28373);
var inst_28375 = inst_28374;
var inst_28376 = null;
var inst_28377 = (0);
var inst_28378 = (0);
var state_28498__$1 = (function (){var statearr_28559 = state_28498;
(statearr_28559[(13)] = inst_28375);

(statearr_28559[(14)] = inst_28378);

(statearr_28559[(15)] = inst_28377);

(statearr_28559[(17)] = inst_28376);

return statearr_28559;
})();
var statearr_28560_28622 = state_28498__$1;
(statearr_28560_28622[(2)] = null);

(statearr_28560_28622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (14))){
var state_28498__$1 = state_28498;
var statearr_28561_28623 = state_28498__$1;
(statearr_28561_28623[(2)] = null);

(statearr_28561_28623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (45))){
var inst_28488 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28562_28624 = state_28498__$1;
(statearr_28562_28624[(2)] = inst_28488);

(statearr_28562_28624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (26))){
var inst_28430 = (state_28498[(29)]);
var inst_28484 = (state_28498[(2)]);
var inst_28485 = cljs.core.seq.call(null,inst_28430);
var state_28498__$1 = (function (){var statearr_28563 = state_28498;
(statearr_28563[(31)] = inst_28484);

return statearr_28563;
})();
if(inst_28485){
var statearr_28564_28625 = state_28498__$1;
(statearr_28564_28625[(1)] = (42));

} else {
var statearr_28565_28626 = state_28498__$1;
(statearr_28565_28626[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (16))){
var inst_28397 = (state_28498[(7)]);
var inst_28399 = cljs.core.chunked_seq_QMARK_.call(null,inst_28397);
var state_28498__$1 = state_28498;
if(inst_28399){
var statearr_28566_28627 = state_28498__$1;
(statearr_28566_28627[(1)] = (19));

} else {
var statearr_28567_28628 = state_28498__$1;
(statearr_28567_28628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (38))){
var inst_28477 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28568_28629 = state_28498__$1;
(statearr_28568_28629[(2)] = inst_28477);

(statearr_28568_28629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (30))){
var state_28498__$1 = state_28498;
var statearr_28569_28630 = state_28498__$1;
(statearr_28569_28630[(2)] = null);

(statearr_28569_28630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (10))){
var inst_28378 = (state_28498[(14)]);
var inst_28376 = (state_28498[(17)]);
var inst_28386 = cljs.core._nth.call(null,inst_28376,inst_28378);
var inst_28387 = cljs.core.nth.call(null,inst_28386,(0),null);
var inst_28388 = cljs.core.nth.call(null,inst_28386,(1),null);
var state_28498__$1 = (function (){var statearr_28570 = state_28498;
(statearr_28570[(26)] = inst_28387);

return statearr_28570;
})();
if(cljs.core.truth_(inst_28388)){
var statearr_28571_28631 = state_28498__$1;
(statearr_28571_28631[(1)] = (13));

} else {
var statearr_28572_28632 = state_28498__$1;
(statearr_28572_28632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (18))){
var inst_28423 = (state_28498[(2)]);
var state_28498__$1 = state_28498;
var statearr_28573_28633 = state_28498__$1;
(statearr_28573_28633[(2)] = inst_28423);

(statearr_28573_28633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (42))){
var state_28498__$1 = state_28498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28498__$1,(45),dchan);
} else {
if((state_val_28499 === (37))){
var inst_28366 = (state_28498[(9)]);
var inst_28457 = (state_28498[(25)]);
var inst_28466 = (state_28498[(23)]);
var inst_28466__$1 = cljs.core.first.call(null,inst_28457);
var inst_28467 = cljs.core.async.put_BANG_.call(null,inst_28466__$1,inst_28366,done);
var state_28498__$1 = (function (){var statearr_28574 = state_28498;
(statearr_28574[(23)] = inst_28466__$1);

return statearr_28574;
})();
if(cljs.core.truth_(inst_28467)){
var statearr_28575_28634 = state_28498__$1;
(statearr_28575_28634[(1)] = (39));

} else {
var statearr_28576_28635 = state_28498__$1;
(statearr_28576_28635[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28499 === (8))){
var inst_28378 = (state_28498[(14)]);
var inst_28377 = (state_28498[(15)]);
var inst_28380 = (inst_28378 < inst_28377);
var inst_28381 = inst_28380;
var state_28498__$1 = state_28498;
if(cljs.core.truth_(inst_28381)){
var statearr_28577_28636 = state_28498__$1;
(statearr_28577_28636[(1)] = (10));

} else {
var statearr_28578_28637 = state_28498__$1;
(statearr_28578_28637[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27666__auto__ = null;
var cljs$core$async$mult_$_state_machine__27666__auto____0 = (function (){
var statearr_28579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28579[(0)] = cljs$core$async$mult_$_state_machine__27666__auto__);

(statearr_28579[(1)] = (1));

return statearr_28579;
});
var cljs$core$async$mult_$_state_machine__27666__auto____1 = (function (state_28498){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e28580){if((e28580 instanceof Object)){
var ex__27669__auto__ = e28580;
var statearr_28581_28638 = state_28498;
(statearr_28581_28638[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28639 = state_28498;
state_28498 = G__28639;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27666__auto__ = function(state_28498){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27666__auto____1.call(this,state_28498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27666__auto____0;
cljs$core$async$mult_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27666__auto____1;
return cljs$core$async$mult_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_28582 = f__27761__auto__.call(null);
(statearr_28582[(6)] = c__27760__auto___28583);

return statearr_28582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
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
var G__28641 = arguments.length;
switch (G__28641) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_28643 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_28643.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28644 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_28644.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28645 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28645.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28646 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_28646.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28647 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28647.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28658 = arguments.length;
var i__4737__auto___28659 = (0);
while(true){
if((i__4737__auto___28659 < len__4736__auto___28658)){
args__4742__auto__.push((arguments[i__4737__auto___28659]));

var G__28660 = (i__4737__auto___28659 + (1));
i__4737__auto___28659 = G__28660;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28652){
var map__28653 = p__28652;
var map__28653__$1 = (((((!((map__28653 == null))))?(((((map__28653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28653):map__28653);
var opts = map__28653__$1;
var statearr_28655_28661 = state;
(statearr_28655_28661[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28656_28662 = state;
(statearr_28656_28662[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28657_28663 = state;
(statearr_28657_28663[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28648){
var G__28649 = cljs.core.first.call(null,seq28648);
var seq28648__$1 = cljs.core.next.call(null,seq28648);
var G__28650 = cljs.core.first.call(null,seq28648__$1);
var seq28648__$2 = cljs.core.next.call(null,seq28648__$1);
var G__28651 = cljs.core.first.call(null,seq28648__$2);
var seq28648__$3 = cljs.core.next.call(null,seq28648__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28649,G__28650,G__28651,seq28648__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28664 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28665){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28665 = meta28665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28666,meta28665__$1){
var self__ = this;
var _28666__$1 = this;
return (new cljs.core.async.t_cljs$core$async28664(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28665__$1));
}));

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28666){
var self__ = this;
var _28666__$1 = this;
return self__.meta28665;
}));

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28664.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28665","meta28665",2104632797,null)], null);
}));

(cljs.core.async.t_cljs$core$async28664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28664");

(cljs.core.async.t_cljs$core$async28664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28664.
 */
cljs.core.async.__GT_t_cljs$core$async28664 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28664(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28665){
return (new cljs.core.async.t_cljs$core$async28664(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28665));
});

}

return (new cljs.core.async.t_cljs$core$async28664(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27760__auto___28828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28768){
var state_val_28769 = (state_28768[(1)]);
if((state_val_28769 === (7))){
var inst_28683 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28770_28829 = state_28768__$1;
(statearr_28770_28829[(2)] = inst_28683);

(statearr_28770_28829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (20))){
var inst_28695 = (state_28768[(7)]);
var state_28768__$1 = state_28768;
var statearr_28771_28830 = state_28768__$1;
(statearr_28771_28830[(2)] = inst_28695);

(statearr_28771_28830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (27))){
var state_28768__$1 = state_28768;
var statearr_28772_28831 = state_28768__$1;
(statearr_28772_28831[(2)] = null);

(statearr_28772_28831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (1))){
var inst_28670 = (state_28768[(8)]);
var inst_28670__$1 = calc_state.call(null);
var inst_28672 = (inst_28670__$1 == null);
var inst_28673 = cljs.core.not.call(null,inst_28672);
var state_28768__$1 = (function (){var statearr_28773 = state_28768;
(statearr_28773[(8)] = inst_28670__$1);

return statearr_28773;
})();
if(inst_28673){
var statearr_28774_28832 = state_28768__$1;
(statearr_28774_28832[(1)] = (2));

} else {
var statearr_28775_28833 = state_28768__$1;
(statearr_28775_28833[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (24))){
var inst_28742 = (state_28768[(9)]);
var inst_28728 = (state_28768[(10)]);
var inst_28719 = (state_28768[(11)]);
var inst_28742__$1 = inst_28719.call(null,inst_28728);
var state_28768__$1 = (function (){var statearr_28776 = state_28768;
(statearr_28776[(9)] = inst_28742__$1);

return statearr_28776;
})();
if(cljs.core.truth_(inst_28742__$1)){
var statearr_28777_28834 = state_28768__$1;
(statearr_28777_28834[(1)] = (29));

} else {
var statearr_28778_28835 = state_28768__$1;
(statearr_28778_28835[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (4))){
var inst_28686 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28686)){
var statearr_28779_28836 = state_28768__$1;
(statearr_28779_28836[(1)] = (8));

} else {
var statearr_28780_28837 = state_28768__$1;
(statearr_28780_28837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (15))){
var inst_28713 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28713)){
var statearr_28781_28838 = state_28768__$1;
(statearr_28781_28838[(1)] = (19));

} else {
var statearr_28782_28839 = state_28768__$1;
(statearr_28782_28839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (21))){
var inst_28718 = (state_28768[(12)]);
var inst_28718__$1 = (state_28768[(2)]);
var inst_28719 = cljs.core.get.call(null,inst_28718__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28720 = cljs.core.get.call(null,inst_28718__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28721 = cljs.core.get.call(null,inst_28718__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28768__$1 = (function (){var statearr_28783 = state_28768;
(statearr_28783[(12)] = inst_28718__$1);

(statearr_28783[(13)] = inst_28720);

(statearr_28783[(11)] = inst_28719);

return statearr_28783;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28768__$1,(22),inst_28721);
} else {
if((state_val_28769 === (31))){
var inst_28750 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28750)){
var statearr_28784_28840 = state_28768__$1;
(statearr_28784_28840[(1)] = (32));

} else {
var statearr_28785_28841 = state_28768__$1;
(statearr_28785_28841[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (32))){
var inst_28727 = (state_28768[(14)]);
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28768__$1,(35),out,inst_28727);
} else {
if((state_val_28769 === (33))){
var inst_28718 = (state_28768[(12)]);
var inst_28695 = inst_28718;
var state_28768__$1 = (function (){var statearr_28786 = state_28768;
(statearr_28786[(7)] = inst_28695);

return statearr_28786;
})();
var statearr_28787_28842 = state_28768__$1;
(statearr_28787_28842[(2)] = null);

(statearr_28787_28842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (13))){
var inst_28695 = (state_28768[(7)]);
var inst_28702 = inst_28695.cljs$lang$protocol_mask$partition0$;
var inst_28703 = (inst_28702 & (64));
var inst_28704 = inst_28695.cljs$core$ISeq$;
var inst_28705 = (cljs.core.PROTOCOL_SENTINEL === inst_28704);
var inst_28706 = ((inst_28703) || (inst_28705));
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28706)){
var statearr_28788_28843 = state_28768__$1;
(statearr_28788_28843[(1)] = (16));

} else {
var statearr_28789_28844 = state_28768__$1;
(statearr_28789_28844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (22))){
var inst_28728 = (state_28768[(10)]);
var inst_28727 = (state_28768[(14)]);
var inst_28726 = (state_28768[(2)]);
var inst_28727__$1 = cljs.core.nth.call(null,inst_28726,(0),null);
var inst_28728__$1 = cljs.core.nth.call(null,inst_28726,(1),null);
var inst_28729 = (inst_28727__$1 == null);
var inst_28730 = cljs.core._EQ_.call(null,inst_28728__$1,change);
var inst_28731 = ((inst_28729) || (inst_28730));
var state_28768__$1 = (function (){var statearr_28790 = state_28768;
(statearr_28790[(10)] = inst_28728__$1);

(statearr_28790[(14)] = inst_28727__$1);

return statearr_28790;
})();
if(cljs.core.truth_(inst_28731)){
var statearr_28791_28845 = state_28768__$1;
(statearr_28791_28845[(1)] = (23));

} else {
var statearr_28792_28846 = state_28768__$1;
(statearr_28792_28846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (36))){
var inst_28718 = (state_28768[(12)]);
var inst_28695 = inst_28718;
var state_28768__$1 = (function (){var statearr_28793 = state_28768;
(statearr_28793[(7)] = inst_28695);

return statearr_28793;
})();
var statearr_28794_28847 = state_28768__$1;
(statearr_28794_28847[(2)] = null);

(statearr_28794_28847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (29))){
var inst_28742 = (state_28768[(9)]);
var state_28768__$1 = state_28768;
var statearr_28795_28848 = state_28768__$1;
(statearr_28795_28848[(2)] = inst_28742);

(statearr_28795_28848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (6))){
var state_28768__$1 = state_28768;
var statearr_28796_28849 = state_28768__$1;
(statearr_28796_28849[(2)] = false);

(statearr_28796_28849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (28))){
var inst_28738 = (state_28768[(2)]);
var inst_28739 = calc_state.call(null);
var inst_28695 = inst_28739;
var state_28768__$1 = (function (){var statearr_28797 = state_28768;
(statearr_28797[(15)] = inst_28738);

(statearr_28797[(7)] = inst_28695);

return statearr_28797;
})();
var statearr_28798_28850 = state_28768__$1;
(statearr_28798_28850[(2)] = null);

(statearr_28798_28850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (25))){
var inst_28764 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28799_28851 = state_28768__$1;
(statearr_28799_28851[(2)] = inst_28764);

(statearr_28799_28851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (34))){
var inst_28762 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28800_28852 = state_28768__$1;
(statearr_28800_28852[(2)] = inst_28762);

(statearr_28800_28852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (17))){
var state_28768__$1 = state_28768;
var statearr_28801_28853 = state_28768__$1;
(statearr_28801_28853[(2)] = false);

(statearr_28801_28853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (3))){
var state_28768__$1 = state_28768;
var statearr_28802_28854 = state_28768__$1;
(statearr_28802_28854[(2)] = false);

(statearr_28802_28854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (12))){
var inst_28766 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28768__$1,inst_28766);
} else {
if((state_val_28769 === (2))){
var inst_28670 = (state_28768[(8)]);
var inst_28675 = inst_28670.cljs$lang$protocol_mask$partition0$;
var inst_28676 = (inst_28675 & (64));
var inst_28677 = inst_28670.cljs$core$ISeq$;
var inst_28678 = (cljs.core.PROTOCOL_SENTINEL === inst_28677);
var inst_28679 = ((inst_28676) || (inst_28678));
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28679)){
var statearr_28803_28855 = state_28768__$1;
(statearr_28803_28855[(1)] = (5));

} else {
var statearr_28804_28856 = state_28768__$1;
(statearr_28804_28856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (23))){
var inst_28727 = (state_28768[(14)]);
var inst_28733 = (inst_28727 == null);
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28733)){
var statearr_28805_28857 = state_28768__$1;
(statearr_28805_28857[(1)] = (26));

} else {
var statearr_28806_28858 = state_28768__$1;
(statearr_28806_28858[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (35))){
var inst_28753 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
if(cljs.core.truth_(inst_28753)){
var statearr_28807_28859 = state_28768__$1;
(statearr_28807_28859[(1)] = (36));

} else {
var statearr_28808_28860 = state_28768__$1;
(statearr_28808_28860[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (19))){
var inst_28695 = (state_28768[(7)]);
var inst_28715 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28695);
var state_28768__$1 = state_28768;
var statearr_28809_28861 = state_28768__$1;
(statearr_28809_28861[(2)] = inst_28715);

(statearr_28809_28861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (11))){
var inst_28695 = (state_28768[(7)]);
var inst_28699 = (inst_28695 == null);
var inst_28700 = cljs.core.not.call(null,inst_28699);
var state_28768__$1 = state_28768;
if(inst_28700){
var statearr_28810_28862 = state_28768__$1;
(statearr_28810_28862[(1)] = (13));

} else {
var statearr_28811_28863 = state_28768__$1;
(statearr_28811_28863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (9))){
var inst_28670 = (state_28768[(8)]);
var state_28768__$1 = state_28768;
var statearr_28812_28864 = state_28768__$1;
(statearr_28812_28864[(2)] = inst_28670);

(statearr_28812_28864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (5))){
var state_28768__$1 = state_28768;
var statearr_28813_28865 = state_28768__$1;
(statearr_28813_28865[(2)] = true);

(statearr_28813_28865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (14))){
var state_28768__$1 = state_28768;
var statearr_28814_28866 = state_28768__$1;
(statearr_28814_28866[(2)] = false);

(statearr_28814_28866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (26))){
var inst_28728 = (state_28768[(10)]);
var inst_28735 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28728);
var state_28768__$1 = state_28768;
var statearr_28815_28867 = state_28768__$1;
(statearr_28815_28867[(2)] = inst_28735);

(statearr_28815_28867[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (16))){
var state_28768__$1 = state_28768;
var statearr_28816_28868 = state_28768__$1;
(statearr_28816_28868[(2)] = true);

(statearr_28816_28868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (38))){
var inst_28758 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28817_28869 = state_28768__$1;
(statearr_28817_28869[(2)] = inst_28758);

(statearr_28817_28869[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (30))){
var inst_28720 = (state_28768[(13)]);
var inst_28728 = (state_28768[(10)]);
var inst_28719 = (state_28768[(11)]);
var inst_28745 = cljs.core.empty_QMARK_.call(null,inst_28719);
var inst_28746 = inst_28720.call(null,inst_28728);
var inst_28747 = cljs.core.not.call(null,inst_28746);
var inst_28748 = ((inst_28745) && (inst_28747));
var state_28768__$1 = state_28768;
var statearr_28818_28870 = state_28768__$1;
(statearr_28818_28870[(2)] = inst_28748);

(statearr_28818_28870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (10))){
var inst_28670 = (state_28768[(8)]);
var inst_28691 = (state_28768[(2)]);
var inst_28692 = cljs.core.get.call(null,inst_28691,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28693 = cljs.core.get.call(null,inst_28691,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28694 = cljs.core.get.call(null,inst_28691,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28695 = inst_28670;
var state_28768__$1 = (function (){var statearr_28819 = state_28768;
(statearr_28819[(16)] = inst_28694);

(statearr_28819[(7)] = inst_28695);

(statearr_28819[(17)] = inst_28692);

(statearr_28819[(18)] = inst_28693);

return statearr_28819;
})();
var statearr_28820_28871 = state_28768__$1;
(statearr_28820_28871[(2)] = null);

(statearr_28820_28871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (18))){
var inst_28710 = (state_28768[(2)]);
var state_28768__$1 = state_28768;
var statearr_28821_28872 = state_28768__$1;
(statearr_28821_28872[(2)] = inst_28710);

(statearr_28821_28872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (37))){
var state_28768__$1 = state_28768;
var statearr_28822_28873 = state_28768__$1;
(statearr_28822_28873[(2)] = null);

(statearr_28822_28873[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28769 === (8))){
var inst_28670 = (state_28768[(8)]);
var inst_28688 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28670);
var state_28768__$1 = state_28768;
var statearr_28823_28874 = state_28768__$1;
(statearr_28823_28874[(2)] = inst_28688);

(statearr_28823_28874[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27666__auto__ = null;
var cljs$core$async$mix_$_state_machine__27666__auto____0 = (function (){
var statearr_28824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28824[(0)] = cljs$core$async$mix_$_state_machine__27666__auto__);

(statearr_28824[(1)] = (1));

return statearr_28824;
});
var cljs$core$async$mix_$_state_machine__27666__auto____1 = (function (state_28768){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e28825){if((e28825 instanceof Object)){
var ex__27669__auto__ = e28825;
var statearr_28826_28875 = state_28768;
(statearr_28826_28875[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28876 = state_28768;
state_28768 = G__28876;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27666__auto__ = function(state_28768){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27666__auto____1.call(this,state_28768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27666__auto____0;
cljs$core$async$mix_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27666__auto____1;
return cljs$core$async$mix_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_28827 = f__27761__auto__.call(null);
(statearr_28827[(6)] = c__27760__auto___28828);

return statearr_28827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_28879 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_28879.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28880 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_28880.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28881 = (function() {
var G__28882 = null;
var G__28882__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__28882__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__28882 = function(p,v){
switch(arguments.length){
case 1:
return G__28882__1.call(this,p);
case 2:
return G__28882__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28882.cljs$core$IFn$_invoke$arity$1 = G__28882__1;
G__28882.cljs$core$IFn$_invoke$arity$2 = G__28882__2;
return G__28882;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28878 = arguments.length;
switch (G__28878) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28881.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28881.call(null,p,v);
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
var G__28886 = arguments.length;
switch (G__28886) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28884_SHARP_){
if(cljs.core.truth_(p1__28884_SHARP_.call(null,topic))){
return p1__28884_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28884_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28887 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28888){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28888 = meta28888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28889,meta28888__$1){
var self__ = this;
var _28889__$1 = this;
return (new cljs.core.async.t_cljs$core$async28887(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28888__$1));
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28889){
var self__ = this;
var _28889__$1 = this;
return self__.meta28888;
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28888","meta28888",-887366168,null)], null);
}));

(cljs.core.async.t_cljs$core$async28887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28887");

(cljs.core.async.t_cljs$core$async28887.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28887.
 */
cljs.core.async.__GT_t_cljs$core$async28887 = (function cljs$core$async$__GT_t_cljs$core$async28887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28888){
return (new cljs.core.async.t_cljs$core$async28887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28888));
});

}

return (new cljs.core.async.t_cljs$core$async28887(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27760__auto___29007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_28961){
var state_val_28962 = (state_28961[(1)]);
if((state_val_28962 === (7))){
var inst_28957 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
var statearr_28963_29008 = state_28961__$1;
(statearr_28963_29008[(2)] = inst_28957);

(statearr_28963_29008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (20))){
var state_28961__$1 = state_28961;
var statearr_28964_29009 = state_28961__$1;
(statearr_28964_29009[(2)] = null);

(statearr_28964_29009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (1))){
var state_28961__$1 = state_28961;
var statearr_28965_29010 = state_28961__$1;
(statearr_28965_29010[(2)] = null);

(statearr_28965_29010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (24))){
var inst_28940 = (state_28961[(7)]);
var inst_28949 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28940);
var state_28961__$1 = state_28961;
var statearr_28966_29011 = state_28961__$1;
(statearr_28966_29011[(2)] = inst_28949);

(statearr_28966_29011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (4))){
var inst_28892 = (state_28961[(8)]);
var inst_28892__$1 = (state_28961[(2)]);
var inst_28893 = (inst_28892__$1 == null);
var state_28961__$1 = (function (){var statearr_28967 = state_28961;
(statearr_28967[(8)] = inst_28892__$1);

return statearr_28967;
})();
if(cljs.core.truth_(inst_28893)){
var statearr_28968_29012 = state_28961__$1;
(statearr_28968_29012[(1)] = (5));

} else {
var statearr_28969_29013 = state_28961__$1;
(statearr_28969_29013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (15))){
var inst_28934 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
var statearr_28970_29014 = state_28961__$1;
(statearr_28970_29014[(2)] = inst_28934);

(statearr_28970_29014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (21))){
var inst_28954 = (state_28961[(2)]);
var state_28961__$1 = (function (){var statearr_28971 = state_28961;
(statearr_28971[(9)] = inst_28954);

return statearr_28971;
})();
var statearr_28972_29015 = state_28961__$1;
(statearr_28972_29015[(2)] = null);

(statearr_28972_29015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (13))){
var inst_28916 = (state_28961[(10)]);
var inst_28918 = cljs.core.chunked_seq_QMARK_.call(null,inst_28916);
var state_28961__$1 = state_28961;
if(inst_28918){
var statearr_28973_29016 = state_28961__$1;
(statearr_28973_29016[(1)] = (16));

} else {
var statearr_28974_29017 = state_28961__$1;
(statearr_28974_29017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (22))){
var inst_28946 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
if(cljs.core.truth_(inst_28946)){
var statearr_28975_29018 = state_28961__$1;
(statearr_28975_29018[(1)] = (23));

} else {
var statearr_28976_29019 = state_28961__$1;
(statearr_28976_29019[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (6))){
var inst_28940 = (state_28961[(7)]);
var inst_28892 = (state_28961[(8)]);
var inst_28942 = (state_28961[(11)]);
var inst_28940__$1 = topic_fn.call(null,inst_28892);
var inst_28941 = cljs.core.deref.call(null,mults);
var inst_28942__$1 = cljs.core.get.call(null,inst_28941,inst_28940__$1);
var state_28961__$1 = (function (){var statearr_28977 = state_28961;
(statearr_28977[(7)] = inst_28940__$1);

(statearr_28977[(11)] = inst_28942__$1);

return statearr_28977;
})();
if(cljs.core.truth_(inst_28942__$1)){
var statearr_28978_29020 = state_28961__$1;
(statearr_28978_29020[(1)] = (19));

} else {
var statearr_28979_29021 = state_28961__$1;
(statearr_28979_29021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (25))){
var inst_28951 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
var statearr_28980_29022 = state_28961__$1;
(statearr_28980_29022[(2)] = inst_28951);

(statearr_28980_29022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (17))){
var inst_28916 = (state_28961[(10)]);
var inst_28925 = cljs.core.first.call(null,inst_28916);
var inst_28926 = cljs.core.async.muxch_STAR_.call(null,inst_28925);
var inst_28927 = cljs.core.async.close_BANG_.call(null,inst_28926);
var inst_28928 = cljs.core.next.call(null,inst_28916);
var inst_28902 = inst_28928;
var inst_28903 = null;
var inst_28904 = (0);
var inst_28905 = (0);
var state_28961__$1 = (function (){var statearr_28981 = state_28961;
(statearr_28981[(12)] = inst_28903);

(statearr_28981[(13)] = inst_28904);

(statearr_28981[(14)] = inst_28905);

(statearr_28981[(15)] = inst_28902);

(statearr_28981[(16)] = inst_28927);

return statearr_28981;
})();
var statearr_28982_29023 = state_28961__$1;
(statearr_28982_29023[(2)] = null);

(statearr_28982_29023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (3))){
var inst_28959 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28961__$1,inst_28959);
} else {
if((state_val_28962 === (12))){
var inst_28936 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
var statearr_28983_29024 = state_28961__$1;
(statearr_28983_29024[(2)] = inst_28936);

(statearr_28983_29024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (2))){
var state_28961__$1 = state_28961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28961__$1,(4),ch);
} else {
if((state_val_28962 === (23))){
var state_28961__$1 = state_28961;
var statearr_28984_29025 = state_28961__$1;
(statearr_28984_29025[(2)] = null);

(statearr_28984_29025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (19))){
var inst_28892 = (state_28961[(8)]);
var inst_28942 = (state_28961[(11)]);
var inst_28944 = cljs.core.async.muxch_STAR_.call(null,inst_28942);
var state_28961__$1 = state_28961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28961__$1,(22),inst_28944,inst_28892);
} else {
if((state_val_28962 === (11))){
var inst_28902 = (state_28961[(15)]);
var inst_28916 = (state_28961[(10)]);
var inst_28916__$1 = cljs.core.seq.call(null,inst_28902);
var state_28961__$1 = (function (){var statearr_28985 = state_28961;
(statearr_28985[(10)] = inst_28916__$1);

return statearr_28985;
})();
if(inst_28916__$1){
var statearr_28986_29026 = state_28961__$1;
(statearr_28986_29026[(1)] = (13));

} else {
var statearr_28987_29027 = state_28961__$1;
(statearr_28987_29027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (9))){
var inst_28938 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
var statearr_28988_29028 = state_28961__$1;
(statearr_28988_29028[(2)] = inst_28938);

(statearr_28988_29028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (5))){
var inst_28899 = cljs.core.deref.call(null,mults);
var inst_28900 = cljs.core.vals.call(null,inst_28899);
var inst_28901 = cljs.core.seq.call(null,inst_28900);
var inst_28902 = inst_28901;
var inst_28903 = null;
var inst_28904 = (0);
var inst_28905 = (0);
var state_28961__$1 = (function (){var statearr_28989 = state_28961;
(statearr_28989[(12)] = inst_28903);

(statearr_28989[(13)] = inst_28904);

(statearr_28989[(14)] = inst_28905);

(statearr_28989[(15)] = inst_28902);

return statearr_28989;
})();
var statearr_28990_29029 = state_28961__$1;
(statearr_28990_29029[(2)] = null);

(statearr_28990_29029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (14))){
var state_28961__$1 = state_28961;
var statearr_28994_29030 = state_28961__$1;
(statearr_28994_29030[(2)] = null);

(statearr_28994_29030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (16))){
var inst_28916 = (state_28961[(10)]);
var inst_28920 = cljs.core.chunk_first.call(null,inst_28916);
var inst_28921 = cljs.core.chunk_rest.call(null,inst_28916);
var inst_28922 = cljs.core.count.call(null,inst_28920);
var inst_28902 = inst_28921;
var inst_28903 = inst_28920;
var inst_28904 = inst_28922;
var inst_28905 = (0);
var state_28961__$1 = (function (){var statearr_28995 = state_28961;
(statearr_28995[(12)] = inst_28903);

(statearr_28995[(13)] = inst_28904);

(statearr_28995[(14)] = inst_28905);

(statearr_28995[(15)] = inst_28902);

return statearr_28995;
})();
var statearr_28996_29031 = state_28961__$1;
(statearr_28996_29031[(2)] = null);

(statearr_28996_29031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (10))){
var inst_28903 = (state_28961[(12)]);
var inst_28904 = (state_28961[(13)]);
var inst_28905 = (state_28961[(14)]);
var inst_28902 = (state_28961[(15)]);
var inst_28910 = cljs.core._nth.call(null,inst_28903,inst_28905);
var inst_28911 = cljs.core.async.muxch_STAR_.call(null,inst_28910);
var inst_28912 = cljs.core.async.close_BANG_.call(null,inst_28911);
var inst_28913 = (inst_28905 + (1));
var tmp28991 = inst_28903;
var tmp28992 = inst_28904;
var tmp28993 = inst_28902;
var inst_28902__$1 = tmp28993;
var inst_28903__$1 = tmp28991;
var inst_28904__$1 = tmp28992;
var inst_28905__$1 = inst_28913;
var state_28961__$1 = (function (){var statearr_28997 = state_28961;
(statearr_28997[(12)] = inst_28903__$1);

(statearr_28997[(13)] = inst_28904__$1);

(statearr_28997[(14)] = inst_28905__$1);

(statearr_28997[(17)] = inst_28912);

(statearr_28997[(15)] = inst_28902__$1);

return statearr_28997;
})();
var statearr_28998_29032 = state_28961__$1;
(statearr_28998_29032[(2)] = null);

(statearr_28998_29032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (18))){
var inst_28931 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
var statearr_28999_29033 = state_28961__$1;
(statearr_28999_29033[(2)] = inst_28931);

(statearr_28999_29033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28962 === (8))){
var inst_28904 = (state_28961[(13)]);
var inst_28905 = (state_28961[(14)]);
var inst_28907 = (inst_28905 < inst_28904);
var inst_28908 = inst_28907;
var state_28961__$1 = state_28961;
if(cljs.core.truth_(inst_28908)){
var statearr_29000_29034 = state_28961__$1;
(statearr_29000_29034[(1)] = (10));

} else {
var statearr_29001_29035 = state_28961__$1;
(statearr_29001_29035[(1)] = (11));

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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_29002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29002[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_29002[(1)] = (1));

return statearr_29002;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_28961){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_28961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29003){if((e29003 instanceof Object)){
var ex__27669__auto__ = e29003;
var statearr_29004_29036 = state_28961;
(statearr_29004_29036[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29037 = state_28961;
state_28961 = G__29037;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_28961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_28961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29005 = f__27761__auto__.call(null);
(statearr_29005[(6)] = c__27760__auto___29007);

return statearr_29005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
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
var G__29039 = arguments.length;
switch (G__29039) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29042 = arguments.length;
switch (G__29042) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__29045 = arguments.length;
switch (G__29045) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__27760__auto___29112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_29084){
var state_val_29085 = (state_29084[(1)]);
if((state_val_29085 === (7))){
var state_29084__$1 = state_29084;
var statearr_29086_29113 = state_29084__$1;
(statearr_29086_29113[(2)] = null);

(statearr_29086_29113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (1))){
var state_29084__$1 = state_29084;
var statearr_29087_29114 = state_29084__$1;
(statearr_29087_29114[(2)] = null);

(statearr_29087_29114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (4))){
var inst_29048 = (state_29084[(7)]);
var inst_29050 = (inst_29048 < cnt);
var state_29084__$1 = state_29084;
if(cljs.core.truth_(inst_29050)){
var statearr_29088_29115 = state_29084__$1;
(statearr_29088_29115[(1)] = (6));

} else {
var statearr_29089_29116 = state_29084__$1;
(statearr_29089_29116[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (15))){
var inst_29080 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29090_29117 = state_29084__$1;
(statearr_29090_29117[(2)] = inst_29080);

(statearr_29090_29117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (13))){
var inst_29073 = cljs.core.async.close_BANG_.call(null,out);
var state_29084__$1 = state_29084;
var statearr_29091_29118 = state_29084__$1;
(statearr_29091_29118[(2)] = inst_29073);

(statearr_29091_29118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (6))){
var state_29084__$1 = state_29084;
var statearr_29092_29119 = state_29084__$1;
(statearr_29092_29119[(2)] = null);

(statearr_29092_29119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (3))){
var inst_29082 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29084__$1,inst_29082);
} else {
if((state_val_29085 === (12))){
var inst_29070 = (state_29084[(8)]);
var inst_29070__$1 = (state_29084[(2)]);
var inst_29071 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29070__$1);
var state_29084__$1 = (function (){var statearr_29093 = state_29084;
(statearr_29093[(8)] = inst_29070__$1);

return statearr_29093;
})();
if(cljs.core.truth_(inst_29071)){
var statearr_29094_29120 = state_29084__$1;
(statearr_29094_29120[(1)] = (13));

} else {
var statearr_29095_29121 = state_29084__$1;
(statearr_29095_29121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (2))){
var inst_29047 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29048 = (0);
var state_29084__$1 = (function (){var statearr_29096 = state_29084;
(statearr_29096[(9)] = inst_29047);

(statearr_29096[(7)] = inst_29048);

return statearr_29096;
})();
var statearr_29097_29122 = state_29084__$1;
(statearr_29097_29122[(2)] = null);

(statearr_29097_29122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (11))){
var inst_29048 = (state_29084[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29084,(10),Object,null,(9));
var inst_29057 = chs__$1.call(null,inst_29048);
var inst_29058 = done.call(null,inst_29048);
var inst_29059 = cljs.core.async.take_BANG_.call(null,inst_29057,inst_29058);
var state_29084__$1 = state_29084;
var statearr_29098_29123 = state_29084__$1;
(statearr_29098_29123[(2)] = inst_29059);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (9))){
var inst_29048 = (state_29084[(7)]);
var inst_29061 = (state_29084[(2)]);
var inst_29062 = (inst_29048 + (1));
var inst_29048__$1 = inst_29062;
var state_29084__$1 = (function (){var statearr_29099 = state_29084;
(statearr_29099[(10)] = inst_29061);

(statearr_29099[(7)] = inst_29048__$1);

return statearr_29099;
})();
var statearr_29100_29124 = state_29084__$1;
(statearr_29100_29124[(2)] = null);

(statearr_29100_29124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (5))){
var inst_29068 = (state_29084[(2)]);
var state_29084__$1 = (function (){var statearr_29101 = state_29084;
(statearr_29101[(11)] = inst_29068);

return statearr_29101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29084__$1,(12),dchan);
} else {
if((state_val_29085 === (14))){
var inst_29070 = (state_29084[(8)]);
var inst_29075 = cljs.core.apply.call(null,f,inst_29070);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29084__$1,(16),out,inst_29075);
} else {
if((state_val_29085 === (16))){
var inst_29077 = (state_29084[(2)]);
var state_29084__$1 = (function (){var statearr_29102 = state_29084;
(statearr_29102[(12)] = inst_29077);

return statearr_29102;
})();
var statearr_29103_29125 = state_29084__$1;
(statearr_29103_29125[(2)] = null);

(statearr_29103_29125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (10))){
var inst_29052 = (state_29084[(2)]);
var inst_29053 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29084__$1 = (function (){var statearr_29104 = state_29084;
(statearr_29104[(13)] = inst_29052);

return statearr_29104;
})();
var statearr_29105_29126 = state_29084__$1;
(statearr_29105_29126[(2)] = inst_29053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (8))){
var inst_29066 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29106_29127 = state_29084__$1;
(statearr_29106_29127[(2)] = inst_29066);

(statearr_29106_29127[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_29107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29107[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_29107[(1)] = (1));

return statearr_29107;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_29084){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_29084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29108){if((e29108 instanceof Object)){
var ex__27669__auto__ = e29108;
var statearr_29109_29128 = state_29084;
(statearr_29109_29128[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29129 = state_29084;
state_29084 = G__29129;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_29084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_29084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29110 = f__27761__auto__.call(null);
(statearr_29110[(6)] = c__27760__auto___29112);

return statearr_29110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
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
var G__29132 = arguments.length;
switch (G__29132) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27760__auto___29186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_29164){
var state_val_29165 = (state_29164[(1)]);
if((state_val_29165 === (7))){
var inst_29143 = (state_29164[(7)]);
var inst_29144 = (state_29164[(8)]);
var inst_29143__$1 = (state_29164[(2)]);
var inst_29144__$1 = cljs.core.nth.call(null,inst_29143__$1,(0),null);
var inst_29145 = cljs.core.nth.call(null,inst_29143__$1,(1),null);
var inst_29146 = (inst_29144__$1 == null);
var state_29164__$1 = (function (){var statearr_29166 = state_29164;
(statearr_29166[(9)] = inst_29145);

(statearr_29166[(7)] = inst_29143__$1);

(statearr_29166[(8)] = inst_29144__$1);

return statearr_29166;
})();
if(cljs.core.truth_(inst_29146)){
var statearr_29167_29187 = state_29164__$1;
(statearr_29167_29187[(1)] = (8));

} else {
var statearr_29168_29188 = state_29164__$1;
(statearr_29168_29188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (1))){
var inst_29133 = cljs.core.vec.call(null,chs);
var inst_29134 = inst_29133;
var state_29164__$1 = (function (){var statearr_29169 = state_29164;
(statearr_29169[(10)] = inst_29134);

return statearr_29169;
})();
var statearr_29170_29189 = state_29164__$1;
(statearr_29170_29189[(2)] = null);

(statearr_29170_29189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (4))){
var inst_29134 = (state_29164[(10)]);
var state_29164__$1 = state_29164;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29164__$1,(7),inst_29134);
} else {
if((state_val_29165 === (6))){
var inst_29160 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29171_29190 = state_29164__$1;
(statearr_29171_29190[(2)] = inst_29160);

(statearr_29171_29190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (3))){
var inst_29162 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29164__$1,inst_29162);
} else {
if((state_val_29165 === (2))){
var inst_29134 = (state_29164[(10)]);
var inst_29136 = cljs.core.count.call(null,inst_29134);
var inst_29137 = (inst_29136 > (0));
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29137)){
var statearr_29173_29191 = state_29164__$1;
(statearr_29173_29191[(1)] = (4));

} else {
var statearr_29174_29192 = state_29164__$1;
(statearr_29174_29192[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (11))){
var inst_29134 = (state_29164[(10)]);
var inst_29153 = (state_29164[(2)]);
var tmp29172 = inst_29134;
var inst_29134__$1 = tmp29172;
var state_29164__$1 = (function (){var statearr_29175 = state_29164;
(statearr_29175[(11)] = inst_29153);

(statearr_29175[(10)] = inst_29134__$1);

return statearr_29175;
})();
var statearr_29176_29193 = state_29164__$1;
(statearr_29176_29193[(2)] = null);

(statearr_29176_29193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (9))){
var inst_29144 = (state_29164[(8)]);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29164__$1,(11),out,inst_29144);
} else {
if((state_val_29165 === (5))){
var inst_29158 = cljs.core.async.close_BANG_.call(null,out);
var state_29164__$1 = state_29164;
var statearr_29177_29194 = state_29164__$1;
(statearr_29177_29194[(2)] = inst_29158);

(statearr_29177_29194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (10))){
var inst_29156 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29178_29195 = state_29164__$1;
(statearr_29178_29195[(2)] = inst_29156);

(statearr_29178_29195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (8))){
var inst_29134 = (state_29164[(10)]);
var inst_29145 = (state_29164[(9)]);
var inst_29143 = (state_29164[(7)]);
var inst_29144 = (state_29164[(8)]);
var inst_29148 = (function (){var cs = inst_29134;
var vec__29139 = inst_29143;
var v = inst_29144;
var c = inst_29145;
return (function (p1__29130_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29130_SHARP_);
});
})();
var inst_29149 = cljs.core.filterv.call(null,inst_29148,inst_29134);
var inst_29134__$1 = inst_29149;
var state_29164__$1 = (function (){var statearr_29179 = state_29164;
(statearr_29179[(10)] = inst_29134__$1);

return statearr_29179;
})();
var statearr_29180_29196 = state_29164__$1;
(statearr_29180_29196[(2)] = null);

(statearr_29180_29196[(1)] = (2));


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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_29181 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29181[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_29181[(1)] = (1));

return statearr_29181;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_29164){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_29164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29182){if((e29182 instanceof Object)){
var ex__27669__auto__ = e29182;
var statearr_29183_29197 = state_29164;
(statearr_29183_29197[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29198 = state_29164;
state_29164 = G__29198;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_29164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_29164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29184 = f__27761__auto__.call(null);
(statearr_29184[(6)] = c__27760__auto___29186);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29200 = arguments.length;
switch (G__29200) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27760__auto___29245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_29224){
var state_val_29225 = (state_29224[(1)]);
if((state_val_29225 === (7))){
var inst_29206 = (state_29224[(7)]);
var inst_29206__$1 = (state_29224[(2)]);
var inst_29207 = (inst_29206__$1 == null);
var inst_29208 = cljs.core.not.call(null,inst_29207);
var state_29224__$1 = (function (){var statearr_29226 = state_29224;
(statearr_29226[(7)] = inst_29206__$1);

return statearr_29226;
})();
if(inst_29208){
var statearr_29227_29246 = state_29224__$1;
(statearr_29227_29246[(1)] = (8));

} else {
var statearr_29228_29247 = state_29224__$1;
(statearr_29228_29247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (1))){
var inst_29201 = (0);
var state_29224__$1 = (function (){var statearr_29229 = state_29224;
(statearr_29229[(8)] = inst_29201);

return statearr_29229;
})();
var statearr_29230_29248 = state_29224__$1;
(statearr_29230_29248[(2)] = null);

(statearr_29230_29248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (4))){
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(7),ch);
} else {
if((state_val_29225 === (6))){
var inst_29219 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29231_29249 = state_29224__$1;
(statearr_29231_29249[(2)] = inst_29219);

(statearr_29231_29249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (3))){
var inst_29221 = (state_29224[(2)]);
var inst_29222 = cljs.core.async.close_BANG_.call(null,out);
var state_29224__$1 = (function (){var statearr_29232 = state_29224;
(statearr_29232[(9)] = inst_29221);

return statearr_29232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29224__$1,inst_29222);
} else {
if((state_val_29225 === (2))){
var inst_29201 = (state_29224[(8)]);
var inst_29203 = (inst_29201 < n);
var state_29224__$1 = state_29224;
if(cljs.core.truth_(inst_29203)){
var statearr_29233_29250 = state_29224__$1;
(statearr_29233_29250[(1)] = (4));

} else {
var statearr_29234_29251 = state_29224__$1;
(statearr_29234_29251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (11))){
var inst_29201 = (state_29224[(8)]);
var inst_29211 = (state_29224[(2)]);
var inst_29212 = (inst_29201 + (1));
var inst_29201__$1 = inst_29212;
var state_29224__$1 = (function (){var statearr_29235 = state_29224;
(statearr_29235[(8)] = inst_29201__$1);

(statearr_29235[(10)] = inst_29211);

return statearr_29235;
})();
var statearr_29236_29252 = state_29224__$1;
(statearr_29236_29252[(2)] = null);

(statearr_29236_29252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (9))){
var state_29224__$1 = state_29224;
var statearr_29237_29253 = state_29224__$1;
(statearr_29237_29253[(2)] = null);

(statearr_29237_29253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (5))){
var state_29224__$1 = state_29224;
var statearr_29238_29254 = state_29224__$1;
(statearr_29238_29254[(2)] = null);

(statearr_29238_29254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (10))){
var inst_29216 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29239_29255 = state_29224__$1;
(statearr_29239_29255[(2)] = inst_29216);

(statearr_29239_29255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (8))){
var inst_29206 = (state_29224[(7)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29224__$1,(11),out,inst_29206);
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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_29240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29240[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_29240[(1)] = (1));

return statearr_29240;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_29224){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_29224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29241){if((e29241 instanceof Object)){
var ex__27669__auto__ = e29241;
var statearr_29242_29256 = state_29224;
(statearr_29242_29256[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29257 = state_29224;
state_29224 = G__29257;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_29224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29243 = f__27761__auto__.call(null);
(statearr_29243[(6)] = c__27760__auto___29245);

return statearr_29243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29259 = (function (f,ch,meta29260){
this.f = f;
this.ch = ch;
this.meta29260 = meta29260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29261,meta29260__$1){
var self__ = this;
var _29261__$1 = this;
return (new cljs.core.async.t_cljs$core$async29259(self__.f,self__.ch,meta29260__$1));
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29261){
var self__ = this;
var _29261__$1 = this;
return self__.meta29260;
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29262 = (function (f,ch,meta29260,_,fn1,meta29263){
this.f = f;
this.ch = ch;
this.meta29260 = meta29260;
this._ = _;
this.fn1 = fn1;
this.meta29263 = meta29263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29264,meta29263__$1){
var self__ = this;
var _29264__$1 = this;
return (new cljs.core.async.t_cljs$core$async29262(self__.f,self__.ch,self__.meta29260,self__._,self__.fn1,meta29263__$1));
}));

(cljs.core.async.t_cljs$core$async29262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29264){
var self__ = this;
var _29264__$1 = this;
return self__.meta29263;
}));

(cljs.core.async.t_cljs$core$async29262.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29262.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__29258_SHARP_){
return f1.call(null,(((p1__29258_SHARP_ == null))?null:self__.f.call(null,p1__29258_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async29262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29260","meta29260",-647621711,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29259","cljs.core.async/t_cljs$core$async29259",-200070059,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29263","meta29263",910179309,null)], null);
}));

(cljs.core.async.t_cljs$core$async29262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29262");

(cljs.core.async.t_cljs$core$async29262.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29262.
 */
cljs.core.async.__GT_t_cljs$core$async29262 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29262(f__$1,ch__$1,meta29260__$1,___$2,fn1__$1,meta29263){
return (new cljs.core.async.t_cljs$core$async29262(f__$1,ch__$1,meta29260__$1,___$2,fn1__$1,meta29263));
});

}

return (new cljs.core.async.t_cljs$core$async29262(self__.f,self__.ch,self__.meta29260,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29260","meta29260",-647621711,null)], null);
}));

(cljs.core.async.t_cljs$core$async29259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29259");

(cljs.core.async.t_cljs$core$async29259.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29259.
 */
cljs.core.async.__GT_t_cljs$core$async29259 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29259(f__$1,ch__$1,meta29260){
return (new cljs.core.async.t_cljs$core$async29259(f__$1,ch__$1,meta29260));
});

}

return (new cljs.core.async.t_cljs$core$async29259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29265 = (function (f,ch,meta29266){
this.f = f;
this.ch = ch;
this.meta29266 = meta29266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29267,meta29266__$1){
var self__ = this;
var _29267__$1 = this;
return (new cljs.core.async.t_cljs$core$async29265(self__.f,self__.ch,meta29266__$1));
}));

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29267){
var self__ = this;
var _29267__$1 = this;
return self__.meta29266;
}));

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async29265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29266","meta29266",-886204401,null)], null);
}));

(cljs.core.async.t_cljs$core$async29265.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29265");

(cljs.core.async.t_cljs$core$async29265.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29265");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29265.
 */
cljs.core.async.__GT_t_cljs$core$async29265 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29265(f__$1,ch__$1,meta29266){
return (new cljs.core.async.t_cljs$core$async29265(f__$1,ch__$1,meta29266));
});

}

return (new cljs.core.async.t_cljs$core$async29265(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29268 = (function (p,ch,meta29269){
this.p = p;
this.ch = ch;
this.meta29269 = meta29269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29270,meta29269__$1){
var self__ = this;
var _29270__$1 = this;
return (new cljs.core.async.t_cljs$core$async29268(self__.p,self__.ch,meta29269__$1));
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29270){
var self__ = this;
var _29270__$1 = this;
return self__.meta29269;
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29269","meta29269",224749849,null)], null);
}));

(cljs.core.async.t_cljs$core$async29268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29268");

(cljs.core.async.t_cljs$core$async29268.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async29268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29268.
 */
cljs.core.async.__GT_t_cljs$core$async29268 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29268(p__$1,ch__$1,meta29269){
return (new cljs.core.async.t_cljs$core$async29268(p__$1,ch__$1,meta29269));
});

}

return (new cljs.core.async.t_cljs$core$async29268(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29272 = arguments.length;
switch (G__29272) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27760__auto___29312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_29293){
var state_val_29294 = (state_29293[(1)]);
if((state_val_29294 === (7))){
var inst_29289 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
var statearr_29295_29313 = state_29293__$1;
(statearr_29295_29313[(2)] = inst_29289);

(statearr_29295_29313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (1))){
var state_29293__$1 = state_29293;
var statearr_29296_29314 = state_29293__$1;
(statearr_29296_29314[(2)] = null);

(statearr_29296_29314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (4))){
var inst_29275 = (state_29293[(7)]);
var inst_29275__$1 = (state_29293[(2)]);
var inst_29276 = (inst_29275__$1 == null);
var state_29293__$1 = (function (){var statearr_29297 = state_29293;
(statearr_29297[(7)] = inst_29275__$1);

return statearr_29297;
})();
if(cljs.core.truth_(inst_29276)){
var statearr_29298_29315 = state_29293__$1;
(statearr_29298_29315[(1)] = (5));

} else {
var statearr_29299_29316 = state_29293__$1;
(statearr_29299_29316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (6))){
var inst_29275 = (state_29293[(7)]);
var inst_29280 = p.call(null,inst_29275);
var state_29293__$1 = state_29293;
if(cljs.core.truth_(inst_29280)){
var statearr_29300_29317 = state_29293__$1;
(statearr_29300_29317[(1)] = (8));

} else {
var statearr_29301_29318 = state_29293__$1;
(statearr_29301_29318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (3))){
var inst_29291 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29293__$1,inst_29291);
} else {
if((state_val_29294 === (2))){
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29293__$1,(4),ch);
} else {
if((state_val_29294 === (11))){
var inst_29283 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
var statearr_29302_29319 = state_29293__$1;
(statearr_29302_29319[(2)] = inst_29283);

(statearr_29302_29319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (9))){
var state_29293__$1 = state_29293;
var statearr_29303_29320 = state_29293__$1;
(statearr_29303_29320[(2)] = null);

(statearr_29303_29320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (5))){
var inst_29278 = cljs.core.async.close_BANG_.call(null,out);
var state_29293__$1 = state_29293;
var statearr_29304_29321 = state_29293__$1;
(statearr_29304_29321[(2)] = inst_29278);

(statearr_29304_29321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (10))){
var inst_29286 = (state_29293[(2)]);
var state_29293__$1 = (function (){var statearr_29305 = state_29293;
(statearr_29305[(8)] = inst_29286);

return statearr_29305;
})();
var statearr_29306_29322 = state_29293__$1;
(statearr_29306_29322[(2)] = null);

(statearr_29306_29322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (8))){
var inst_29275 = (state_29293[(7)]);
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29293__$1,(11),out,inst_29275);
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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_29307 = [null,null,null,null,null,null,null,null,null];
(statearr_29307[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_29307[(1)] = (1));

return statearr_29307;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_29293){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_29293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29308){if((e29308 instanceof Object)){
var ex__27669__auto__ = e29308;
var statearr_29309_29323 = state_29293;
(statearr_29309_29323[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29324 = state_29293;
state_29293 = G__29324;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_29293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_29293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29310 = f__27761__auto__.call(null);
(statearr_29310[(6)] = c__27760__auto___29312);

return statearr_29310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29326 = arguments.length;
switch (G__29326) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_29389){
var state_val_29390 = (state_29389[(1)]);
if((state_val_29390 === (7))){
var inst_29385 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29391_29429 = state_29389__$1;
(statearr_29391_29429[(2)] = inst_29385);

(statearr_29391_29429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (20))){
var inst_29355 = (state_29389[(7)]);
var inst_29366 = (state_29389[(2)]);
var inst_29367 = cljs.core.next.call(null,inst_29355);
var inst_29341 = inst_29367;
var inst_29342 = null;
var inst_29343 = (0);
var inst_29344 = (0);
var state_29389__$1 = (function (){var statearr_29392 = state_29389;
(statearr_29392[(8)] = inst_29341);

(statearr_29392[(9)] = inst_29344);

(statearr_29392[(10)] = inst_29366);

(statearr_29392[(11)] = inst_29343);

(statearr_29392[(12)] = inst_29342);

return statearr_29392;
})();
var statearr_29393_29430 = state_29389__$1;
(statearr_29393_29430[(2)] = null);

(statearr_29393_29430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (1))){
var state_29389__$1 = state_29389;
var statearr_29394_29431 = state_29389__$1;
(statearr_29394_29431[(2)] = null);

(statearr_29394_29431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (4))){
var inst_29330 = (state_29389[(13)]);
var inst_29330__$1 = (state_29389[(2)]);
var inst_29331 = (inst_29330__$1 == null);
var state_29389__$1 = (function (){var statearr_29395 = state_29389;
(statearr_29395[(13)] = inst_29330__$1);

return statearr_29395;
})();
if(cljs.core.truth_(inst_29331)){
var statearr_29396_29432 = state_29389__$1;
(statearr_29396_29432[(1)] = (5));

} else {
var statearr_29397_29433 = state_29389__$1;
(statearr_29397_29433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (15))){
var state_29389__$1 = state_29389;
var statearr_29401_29434 = state_29389__$1;
(statearr_29401_29434[(2)] = null);

(statearr_29401_29434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (21))){
var state_29389__$1 = state_29389;
var statearr_29402_29435 = state_29389__$1;
(statearr_29402_29435[(2)] = null);

(statearr_29402_29435[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (13))){
var inst_29341 = (state_29389[(8)]);
var inst_29344 = (state_29389[(9)]);
var inst_29343 = (state_29389[(11)]);
var inst_29342 = (state_29389[(12)]);
var inst_29351 = (state_29389[(2)]);
var inst_29352 = (inst_29344 + (1));
var tmp29398 = inst_29341;
var tmp29399 = inst_29343;
var tmp29400 = inst_29342;
var inst_29341__$1 = tmp29398;
var inst_29342__$1 = tmp29400;
var inst_29343__$1 = tmp29399;
var inst_29344__$1 = inst_29352;
var state_29389__$1 = (function (){var statearr_29403 = state_29389;
(statearr_29403[(14)] = inst_29351);

(statearr_29403[(8)] = inst_29341__$1);

(statearr_29403[(9)] = inst_29344__$1);

(statearr_29403[(11)] = inst_29343__$1);

(statearr_29403[(12)] = inst_29342__$1);

return statearr_29403;
})();
var statearr_29404_29436 = state_29389__$1;
(statearr_29404_29436[(2)] = null);

(statearr_29404_29436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (22))){
var state_29389__$1 = state_29389;
var statearr_29405_29437 = state_29389__$1;
(statearr_29405_29437[(2)] = null);

(statearr_29405_29437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (6))){
var inst_29330 = (state_29389[(13)]);
var inst_29339 = f.call(null,inst_29330);
var inst_29340 = cljs.core.seq.call(null,inst_29339);
var inst_29341 = inst_29340;
var inst_29342 = null;
var inst_29343 = (0);
var inst_29344 = (0);
var state_29389__$1 = (function (){var statearr_29406 = state_29389;
(statearr_29406[(8)] = inst_29341);

(statearr_29406[(9)] = inst_29344);

(statearr_29406[(11)] = inst_29343);

(statearr_29406[(12)] = inst_29342);

return statearr_29406;
})();
var statearr_29407_29438 = state_29389__$1;
(statearr_29407_29438[(2)] = null);

(statearr_29407_29438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (17))){
var inst_29355 = (state_29389[(7)]);
var inst_29359 = cljs.core.chunk_first.call(null,inst_29355);
var inst_29360 = cljs.core.chunk_rest.call(null,inst_29355);
var inst_29361 = cljs.core.count.call(null,inst_29359);
var inst_29341 = inst_29360;
var inst_29342 = inst_29359;
var inst_29343 = inst_29361;
var inst_29344 = (0);
var state_29389__$1 = (function (){var statearr_29408 = state_29389;
(statearr_29408[(8)] = inst_29341);

(statearr_29408[(9)] = inst_29344);

(statearr_29408[(11)] = inst_29343);

(statearr_29408[(12)] = inst_29342);

return statearr_29408;
})();
var statearr_29409_29439 = state_29389__$1;
(statearr_29409_29439[(2)] = null);

(statearr_29409_29439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (3))){
var inst_29387 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29389__$1,inst_29387);
} else {
if((state_val_29390 === (12))){
var inst_29375 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29410_29440 = state_29389__$1;
(statearr_29410_29440[(2)] = inst_29375);

(statearr_29410_29440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (2))){
var state_29389__$1 = state_29389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29389__$1,(4),in$);
} else {
if((state_val_29390 === (23))){
var inst_29383 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29411_29441 = state_29389__$1;
(statearr_29411_29441[(2)] = inst_29383);

(statearr_29411_29441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (19))){
var inst_29370 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29412_29442 = state_29389__$1;
(statearr_29412_29442[(2)] = inst_29370);

(statearr_29412_29442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (11))){
var inst_29341 = (state_29389[(8)]);
var inst_29355 = (state_29389[(7)]);
var inst_29355__$1 = cljs.core.seq.call(null,inst_29341);
var state_29389__$1 = (function (){var statearr_29413 = state_29389;
(statearr_29413[(7)] = inst_29355__$1);

return statearr_29413;
})();
if(inst_29355__$1){
var statearr_29414_29443 = state_29389__$1;
(statearr_29414_29443[(1)] = (14));

} else {
var statearr_29415_29444 = state_29389__$1;
(statearr_29415_29444[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (9))){
var inst_29377 = (state_29389[(2)]);
var inst_29378 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29389__$1 = (function (){var statearr_29416 = state_29389;
(statearr_29416[(15)] = inst_29377);

return statearr_29416;
})();
if(cljs.core.truth_(inst_29378)){
var statearr_29417_29445 = state_29389__$1;
(statearr_29417_29445[(1)] = (21));

} else {
var statearr_29418_29446 = state_29389__$1;
(statearr_29418_29446[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (5))){
var inst_29333 = cljs.core.async.close_BANG_.call(null,out);
var state_29389__$1 = state_29389;
var statearr_29419_29447 = state_29389__$1;
(statearr_29419_29447[(2)] = inst_29333);

(statearr_29419_29447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (14))){
var inst_29355 = (state_29389[(7)]);
var inst_29357 = cljs.core.chunked_seq_QMARK_.call(null,inst_29355);
var state_29389__$1 = state_29389;
if(inst_29357){
var statearr_29420_29448 = state_29389__$1;
(statearr_29420_29448[(1)] = (17));

} else {
var statearr_29421_29449 = state_29389__$1;
(statearr_29421_29449[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (16))){
var inst_29373 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
var statearr_29422_29450 = state_29389__$1;
(statearr_29422_29450[(2)] = inst_29373);

(statearr_29422_29450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (10))){
var inst_29344 = (state_29389[(9)]);
var inst_29342 = (state_29389[(12)]);
var inst_29349 = cljs.core._nth.call(null,inst_29342,inst_29344);
var state_29389__$1 = state_29389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29389__$1,(13),out,inst_29349);
} else {
if((state_val_29390 === (18))){
var inst_29355 = (state_29389[(7)]);
var inst_29364 = cljs.core.first.call(null,inst_29355);
var state_29389__$1 = state_29389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29389__$1,(20),out,inst_29364);
} else {
if((state_val_29390 === (8))){
var inst_29344 = (state_29389[(9)]);
var inst_29343 = (state_29389[(11)]);
var inst_29346 = (inst_29344 < inst_29343);
var inst_29347 = inst_29346;
var state_29389__$1 = state_29389;
if(cljs.core.truth_(inst_29347)){
var statearr_29423_29451 = state_29389__$1;
(statearr_29423_29451[(1)] = (10));

} else {
var statearr_29424_29452 = state_29389__$1;
(statearr_29424_29452[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27666__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27666__auto____0 = (function (){
var statearr_29425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29425[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27666__auto__);

(statearr_29425[(1)] = (1));

return statearr_29425;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27666__auto____1 = (function (state_29389){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_29389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29426){if((e29426 instanceof Object)){
var ex__27669__auto__ = e29426;
var statearr_29427_29453 = state_29389;
(statearr_29427_29453[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29454 = state_29389;
state_29389 = G__29454;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27666__auto__ = function(state_29389){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27666__auto____1.call(this,state_29389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27666__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27666__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29428 = f__27761__auto__.call(null);
(statearr_29428[(6)] = c__27760__auto__);

return statearr_29428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29456 = arguments.length;
switch (G__29456) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29459 = arguments.length;
switch (G__29459) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29462 = arguments.length;
switch (G__29462) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27760__auto___29509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_29486){
var state_val_29487 = (state_29486[(1)]);
if((state_val_29487 === (7))){
var inst_29481 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29488_29510 = state_29486__$1;
(statearr_29488_29510[(2)] = inst_29481);

(statearr_29488_29510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (1))){
var inst_29463 = null;
var state_29486__$1 = (function (){var statearr_29489 = state_29486;
(statearr_29489[(7)] = inst_29463);

return statearr_29489;
})();
var statearr_29490_29511 = state_29486__$1;
(statearr_29490_29511[(2)] = null);

(statearr_29490_29511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (4))){
var inst_29466 = (state_29486[(8)]);
var inst_29466__$1 = (state_29486[(2)]);
var inst_29467 = (inst_29466__$1 == null);
var inst_29468 = cljs.core.not.call(null,inst_29467);
var state_29486__$1 = (function (){var statearr_29491 = state_29486;
(statearr_29491[(8)] = inst_29466__$1);

return statearr_29491;
})();
if(inst_29468){
var statearr_29492_29512 = state_29486__$1;
(statearr_29492_29512[(1)] = (5));

} else {
var statearr_29493_29513 = state_29486__$1;
(statearr_29493_29513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (6))){
var state_29486__$1 = state_29486;
var statearr_29494_29514 = state_29486__$1;
(statearr_29494_29514[(2)] = null);

(statearr_29494_29514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (3))){
var inst_29483 = (state_29486[(2)]);
var inst_29484 = cljs.core.async.close_BANG_.call(null,out);
var state_29486__$1 = (function (){var statearr_29495 = state_29486;
(statearr_29495[(9)] = inst_29483);

return statearr_29495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29486__$1,inst_29484);
} else {
if((state_val_29487 === (2))){
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29486__$1,(4),ch);
} else {
if((state_val_29487 === (11))){
var inst_29466 = (state_29486[(8)]);
var inst_29475 = (state_29486[(2)]);
var inst_29463 = inst_29466;
var state_29486__$1 = (function (){var statearr_29496 = state_29486;
(statearr_29496[(10)] = inst_29475);

(statearr_29496[(7)] = inst_29463);

return statearr_29496;
})();
var statearr_29497_29515 = state_29486__$1;
(statearr_29497_29515[(2)] = null);

(statearr_29497_29515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (9))){
var inst_29466 = (state_29486[(8)]);
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29486__$1,(11),out,inst_29466);
} else {
if((state_val_29487 === (5))){
var inst_29463 = (state_29486[(7)]);
var inst_29466 = (state_29486[(8)]);
var inst_29470 = cljs.core._EQ_.call(null,inst_29466,inst_29463);
var state_29486__$1 = state_29486;
if(inst_29470){
var statearr_29499_29516 = state_29486__$1;
(statearr_29499_29516[(1)] = (8));

} else {
var statearr_29500_29517 = state_29486__$1;
(statearr_29500_29517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (10))){
var inst_29478 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29501_29518 = state_29486__$1;
(statearr_29501_29518[(2)] = inst_29478);

(statearr_29501_29518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (8))){
var inst_29463 = (state_29486[(7)]);
var tmp29498 = inst_29463;
var inst_29463__$1 = tmp29498;
var state_29486__$1 = (function (){var statearr_29502 = state_29486;
(statearr_29502[(7)] = inst_29463__$1);

return statearr_29502;
})();
var statearr_29503_29519 = state_29486__$1;
(statearr_29503_29519[(2)] = null);

(statearr_29503_29519[(1)] = (2));


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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_29504 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29504[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_29504[(1)] = (1));

return statearr_29504;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_29486){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_29486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29505){if((e29505 instanceof Object)){
var ex__27669__auto__ = e29505;
var statearr_29506_29520 = state_29486;
(statearr_29506_29520[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29521 = state_29486;
state_29486 = G__29521;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_29486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_29486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29507 = f__27761__auto__.call(null);
(statearr_29507[(6)] = c__27760__auto___29509);

return statearr_29507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29523 = arguments.length;
switch (G__29523) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27760__auto___29589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_29561){
var state_val_29562 = (state_29561[(1)]);
if((state_val_29562 === (7))){
var inst_29557 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
var statearr_29563_29590 = state_29561__$1;
(statearr_29563_29590[(2)] = inst_29557);

(statearr_29563_29590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (1))){
var inst_29524 = (new Array(n));
var inst_29525 = inst_29524;
var inst_29526 = (0);
var state_29561__$1 = (function (){var statearr_29564 = state_29561;
(statearr_29564[(7)] = inst_29525);

(statearr_29564[(8)] = inst_29526);

return statearr_29564;
})();
var statearr_29565_29591 = state_29561__$1;
(statearr_29565_29591[(2)] = null);

(statearr_29565_29591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (4))){
var inst_29529 = (state_29561[(9)]);
var inst_29529__$1 = (state_29561[(2)]);
var inst_29530 = (inst_29529__$1 == null);
var inst_29531 = cljs.core.not.call(null,inst_29530);
var state_29561__$1 = (function (){var statearr_29566 = state_29561;
(statearr_29566[(9)] = inst_29529__$1);

return statearr_29566;
})();
if(inst_29531){
var statearr_29567_29592 = state_29561__$1;
(statearr_29567_29592[(1)] = (5));

} else {
var statearr_29568_29593 = state_29561__$1;
(statearr_29568_29593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (15))){
var inst_29551 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
var statearr_29569_29594 = state_29561__$1;
(statearr_29569_29594[(2)] = inst_29551);

(statearr_29569_29594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (13))){
var state_29561__$1 = state_29561;
var statearr_29570_29595 = state_29561__$1;
(statearr_29570_29595[(2)] = null);

(statearr_29570_29595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (6))){
var inst_29526 = (state_29561[(8)]);
var inst_29547 = (inst_29526 > (0));
var state_29561__$1 = state_29561;
if(cljs.core.truth_(inst_29547)){
var statearr_29571_29596 = state_29561__$1;
(statearr_29571_29596[(1)] = (12));

} else {
var statearr_29572_29597 = state_29561__$1;
(statearr_29572_29597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (3))){
var inst_29559 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29561__$1,inst_29559);
} else {
if((state_val_29562 === (12))){
var inst_29525 = (state_29561[(7)]);
var inst_29549 = cljs.core.vec.call(null,inst_29525);
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29561__$1,(15),out,inst_29549);
} else {
if((state_val_29562 === (2))){
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29561__$1,(4),ch);
} else {
if((state_val_29562 === (11))){
var inst_29541 = (state_29561[(2)]);
var inst_29542 = (new Array(n));
var inst_29525 = inst_29542;
var inst_29526 = (0);
var state_29561__$1 = (function (){var statearr_29573 = state_29561;
(statearr_29573[(7)] = inst_29525);

(statearr_29573[(8)] = inst_29526);

(statearr_29573[(10)] = inst_29541);

return statearr_29573;
})();
var statearr_29574_29598 = state_29561__$1;
(statearr_29574_29598[(2)] = null);

(statearr_29574_29598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (9))){
var inst_29525 = (state_29561[(7)]);
var inst_29539 = cljs.core.vec.call(null,inst_29525);
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29561__$1,(11),out,inst_29539);
} else {
if((state_val_29562 === (5))){
var inst_29529 = (state_29561[(9)]);
var inst_29525 = (state_29561[(7)]);
var inst_29526 = (state_29561[(8)]);
var inst_29534 = (state_29561[(11)]);
var inst_29533 = (inst_29525[inst_29526] = inst_29529);
var inst_29534__$1 = (inst_29526 + (1));
var inst_29535 = (inst_29534__$1 < n);
var state_29561__$1 = (function (){var statearr_29575 = state_29561;
(statearr_29575[(12)] = inst_29533);

(statearr_29575[(11)] = inst_29534__$1);

return statearr_29575;
})();
if(cljs.core.truth_(inst_29535)){
var statearr_29576_29599 = state_29561__$1;
(statearr_29576_29599[(1)] = (8));

} else {
var statearr_29577_29600 = state_29561__$1;
(statearr_29577_29600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (14))){
var inst_29554 = (state_29561[(2)]);
var inst_29555 = cljs.core.async.close_BANG_.call(null,out);
var state_29561__$1 = (function (){var statearr_29579 = state_29561;
(statearr_29579[(13)] = inst_29554);

return statearr_29579;
})();
var statearr_29580_29601 = state_29561__$1;
(statearr_29580_29601[(2)] = inst_29555);

(statearr_29580_29601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (10))){
var inst_29545 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
var statearr_29581_29602 = state_29561__$1;
(statearr_29581_29602[(2)] = inst_29545);

(statearr_29581_29602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (8))){
var inst_29525 = (state_29561[(7)]);
var inst_29534 = (state_29561[(11)]);
var tmp29578 = inst_29525;
var inst_29525__$1 = tmp29578;
var inst_29526 = inst_29534;
var state_29561__$1 = (function (){var statearr_29582 = state_29561;
(statearr_29582[(7)] = inst_29525__$1);

(statearr_29582[(8)] = inst_29526);

return statearr_29582;
})();
var statearr_29583_29603 = state_29561__$1;
(statearr_29583_29603[(2)] = null);

(statearr_29583_29603[(1)] = (2));


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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_29584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29584[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_29584[(1)] = (1));

return statearr_29584;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_29561){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_29561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29585){if((e29585 instanceof Object)){
var ex__27669__auto__ = e29585;
var statearr_29586_29604 = state_29561;
(statearr_29586_29604[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29605 = state_29561;
state_29561 = G__29605;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_29561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_29561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29587 = f__27761__auto__.call(null);
(statearr_29587[(6)] = c__27760__auto___29589);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29607 = arguments.length;
switch (G__29607) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27760__auto___29677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_29649){
var state_val_29650 = (state_29649[(1)]);
if((state_val_29650 === (7))){
var inst_29645 = (state_29649[(2)]);
var state_29649__$1 = state_29649;
var statearr_29651_29678 = state_29649__$1;
(statearr_29651_29678[(2)] = inst_29645);

(statearr_29651_29678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (1))){
var inst_29608 = [];
var inst_29609 = inst_29608;
var inst_29610 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29649__$1 = (function (){var statearr_29652 = state_29649;
(statearr_29652[(7)] = inst_29609);

(statearr_29652[(8)] = inst_29610);

return statearr_29652;
})();
var statearr_29653_29679 = state_29649__$1;
(statearr_29653_29679[(2)] = null);

(statearr_29653_29679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (4))){
var inst_29613 = (state_29649[(9)]);
var inst_29613__$1 = (state_29649[(2)]);
var inst_29614 = (inst_29613__$1 == null);
var inst_29615 = cljs.core.not.call(null,inst_29614);
var state_29649__$1 = (function (){var statearr_29654 = state_29649;
(statearr_29654[(9)] = inst_29613__$1);

return statearr_29654;
})();
if(inst_29615){
var statearr_29655_29680 = state_29649__$1;
(statearr_29655_29680[(1)] = (5));

} else {
var statearr_29656_29681 = state_29649__$1;
(statearr_29656_29681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (15))){
var inst_29639 = (state_29649[(2)]);
var state_29649__$1 = state_29649;
var statearr_29657_29682 = state_29649__$1;
(statearr_29657_29682[(2)] = inst_29639);

(statearr_29657_29682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (13))){
var state_29649__$1 = state_29649;
var statearr_29658_29683 = state_29649__$1;
(statearr_29658_29683[(2)] = null);

(statearr_29658_29683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (6))){
var inst_29609 = (state_29649[(7)]);
var inst_29634 = inst_29609.length;
var inst_29635 = (inst_29634 > (0));
var state_29649__$1 = state_29649;
if(cljs.core.truth_(inst_29635)){
var statearr_29659_29684 = state_29649__$1;
(statearr_29659_29684[(1)] = (12));

} else {
var statearr_29660_29685 = state_29649__$1;
(statearr_29660_29685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (3))){
var inst_29647 = (state_29649[(2)]);
var state_29649__$1 = state_29649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29649__$1,inst_29647);
} else {
if((state_val_29650 === (12))){
var inst_29609 = (state_29649[(7)]);
var inst_29637 = cljs.core.vec.call(null,inst_29609);
var state_29649__$1 = state_29649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29649__$1,(15),out,inst_29637);
} else {
if((state_val_29650 === (2))){
var state_29649__$1 = state_29649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29649__$1,(4),ch);
} else {
if((state_val_29650 === (11))){
var inst_29617 = (state_29649[(10)]);
var inst_29613 = (state_29649[(9)]);
var inst_29627 = (state_29649[(2)]);
var inst_29628 = [];
var inst_29629 = inst_29628.push(inst_29613);
var inst_29609 = inst_29628;
var inst_29610 = inst_29617;
var state_29649__$1 = (function (){var statearr_29661 = state_29649;
(statearr_29661[(7)] = inst_29609);

(statearr_29661[(11)] = inst_29627);

(statearr_29661[(12)] = inst_29629);

(statearr_29661[(8)] = inst_29610);

return statearr_29661;
})();
var statearr_29662_29686 = state_29649__$1;
(statearr_29662_29686[(2)] = null);

(statearr_29662_29686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (9))){
var inst_29609 = (state_29649[(7)]);
var inst_29625 = cljs.core.vec.call(null,inst_29609);
var state_29649__$1 = state_29649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29649__$1,(11),out,inst_29625);
} else {
if((state_val_29650 === (5))){
var inst_29617 = (state_29649[(10)]);
var inst_29613 = (state_29649[(9)]);
var inst_29610 = (state_29649[(8)]);
var inst_29617__$1 = f.call(null,inst_29613);
var inst_29618 = cljs.core._EQ_.call(null,inst_29617__$1,inst_29610);
var inst_29619 = cljs.core.keyword_identical_QMARK_.call(null,inst_29610,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29620 = ((inst_29618) || (inst_29619));
var state_29649__$1 = (function (){var statearr_29663 = state_29649;
(statearr_29663[(10)] = inst_29617__$1);

return statearr_29663;
})();
if(cljs.core.truth_(inst_29620)){
var statearr_29664_29687 = state_29649__$1;
(statearr_29664_29687[(1)] = (8));

} else {
var statearr_29665_29688 = state_29649__$1;
(statearr_29665_29688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (14))){
var inst_29642 = (state_29649[(2)]);
var inst_29643 = cljs.core.async.close_BANG_.call(null,out);
var state_29649__$1 = (function (){var statearr_29667 = state_29649;
(statearr_29667[(13)] = inst_29642);

return statearr_29667;
})();
var statearr_29668_29689 = state_29649__$1;
(statearr_29668_29689[(2)] = inst_29643);

(statearr_29668_29689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (10))){
var inst_29632 = (state_29649[(2)]);
var state_29649__$1 = state_29649;
var statearr_29669_29690 = state_29649__$1;
(statearr_29669_29690[(2)] = inst_29632);

(statearr_29669_29690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29650 === (8))){
var inst_29617 = (state_29649[(10)]);
var inst_29613 = (state_29649[(9)]);
var inst_29609 = (state_29649[(7)]);
var inst_29622 = inst_29609.push(inst_29613);
var tmp29666 = inst_29609;
var inst_29609__$1 = tmp29666;
var inst_29610 = inst_29617;
var state_29649__$1 = (function (){var statearr_29670 = state_29649;
(statearr_29670[(7)] = inst_29609__$1);

(statearr_29670[(14)] = inst_29622);

(statearr_29670[(8)] = inst_29610);

return statearr_29670;
})();
var statearr_29671_29691 = state_29649__$1;
(statearr_29671_29691[(2)] = null);

(statearr_29671_29691[(1)] = (2));


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
var cljs$core$async$state_machine__27666__auto__ = null;
var cljs$core$async$state_machine__27666__auto____0 = (function (){
var statearr_29672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29672[(0)] = cljs$core$async$state_machine__27666__auto__);

(statearr_29672[(1)] = (1));

return statearr_29672;
});
var cljs$core$async$state_machine__27666__auto____1 = (function (state_29649){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_29649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e29673){if((e29673 instanceof Object)){
var ex__27669__auto__ = e29673;
var statearr_29674_29692 = state_29649;
(statearr_29674_29692[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29693 = state_29649;
state_29649 = G__29693;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
cljs$core$async$state_machine__27666__auto__ = function(state_29649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27666__auto____1.call(this,state_29649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27666__auto____0;
cljs$core$async$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27666__auto____1;
return cljs$core$async$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_29675 = f__27761__auto__.call(null);
(statearr_29675[(6)] = c__27760__auto___29677);

return statearr_29675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1594268124461

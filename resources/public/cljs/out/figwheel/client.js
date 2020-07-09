// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33188){if((e33188 instanceof Error)){
var e = e33188;
return "Error: Unable to stringify";
} else {
throw e33188;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33191 = arguments.length;
switch (G__33191) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33189_SHARP_){
if(typeof p1__33189_SHARP_ === 'string'){
return p1__33189_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33189_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33194 = arguments.length;
var i__4737__auto___33195 = (0);
while(true){
if((i__4737__auto___33195 < len__4736__auto___33194)){
args__4742__auto__.push((arguments[i__4737__auto___33195]));

var G__33196 = (i__4737__auto___33195 + (1));
i__4737__auto___33195 = G__33196;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33193){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33193));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33198 = arguments.length;
var i__4737__auto___33199 = (0);
while(true){
if((i__4737__auto___33199 < len__4736__auto___33198)){
args__4742__auto__.push((arguments[i__4737__auto___33199]));

var G__33200 = (i__4737__auto___33199 + (1));
i__4737__auto___33199 = G__33200;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33197){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33197));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33201){
var map__33202 = p__33201;
var map__33202__$1 = (((((!((map__33202 == null))))?(((((map__33202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33202):map__33202);
var message = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27760__auto___33281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_33253){
var state_val_33254 = (state_33253[(1)]);
if((state_val_33254 === (7))){
var inst_33249 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33255_33282 = state_33253__$1;
(statearr_33255_33282[(2)] = inst_33249);

(statearr_33255_33282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (1))){
var state_33253__$1 = state_33253;
var statearr_33256_33283 = state_33253__$1;
(statearr_33256_33283[(2)] = null);

(statearr_33256_33283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (4))){
var inst_33206 = (state_33253[(7)]);
var inst_33206__$1 = (state_33253[(2)]);
var state_33253__$1 = (function (){var statearr_33257 = state_33253;
(statearr_33257[(7)] = inst_33206__$1);

return statearr_33257;
})();
if(cljs.core.truth_(inst_33206__$1)){
var statearr_33258_33284 = state_33253__$1;
(statearr_33258_33284[(1)] = (5));

} else {
var statearr_33259_33285 = state_33253__$1;
(statearr_33259_33285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (15))){
var inst_33213 = (state_33253[(8)]);
var inst_33228 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33213);
var inst_33229 = cljs.core.first.call(null,inst_33228);
var inst_33230 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33229);
var inst_33231 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33230)].join('');
var inst_33232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33231);
var state_33253__$1 = state_33253;
var statearr_33260_33286 = state_33253__$1;
(statearr_33260_33286[(2)] = inst_33232);

(statearr_33260_33286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (13))){
var inst_33237 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33261_33287 = state_33253__$1;
(statearr_33261_33287[(2)] = inst_33237);

(statearr_33261_33287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (6))){
var state_33253__$1 = state_33253;
var statearr_33262_33288 = state_33253__$1;
(statearr_33262_33288[(2)] = null);

(statearr_33262_33288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (17))){
var inst_33235 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33263_33289 = state_33253__$1;
(statearr_33263_33289[(2)] = inst_33235);

(statearr_33263_33289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (3))){
var inst_33251 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33253__$1,inst_33251);
} else {
if((state_val_33254 === (12))){
var inst_33212 = (state_33253[(9)]);
var inst_33226 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33212,opts);
var state_33253__$1 = state_33253;
if(inst_33226){
var statearr_33264_33290 = state_33253__$1;
(statearr_33264_33290[(1)] = (15));

} else {
var statearr_33265_33291 = state_33253__$1;
(statearr_33265_33291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (2))){
var state_33253__$1 = state_33253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33253__$1,(4),ch);
} else {
if((state_val_33254 === (11))){
var inst_33213 = (state_33253[(8)]);
var inst_33218 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33219 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33213);
var inst_33220 = cljs.core.async.timeout.call(null,(1000));
var inst_33221 = [inst_33219,inst_33220];
var inst_33222 = (new cljs.core.PersistentVector(null,2,(5),inst_33218,inst_33221,null));
var state_33253__$1 = state_33253;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33253__$1,(14),inst_33222);
} else {
if((state_val_33254 === (9))){
var inst_33213 = (state_33253[(8)]);
var inst_33239 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33240 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33213);
var inst_33241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33240);
var inst_33242 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33241)].join('');
var inst_33243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33242);
var state_33253__$1 = (function (){var statearr_33266 = state_33253;
(statearr_33266[(10)] = inst_33239);

return statearr_33266;
})();
var statearr_33267_33292 = state_33253__$1;
(statearr_33267_33292[(2)] = inst_33243);

(statearr_33267_33292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (5))){
var inst_33206 = (state_33253[(7)]);
var inst_33208 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33209 = (new cljs.core.PersistentArrayMap(null,2,inst_33208,null));
var inst_33210 = (new cljs.core.PersistentHashSet(null,inst_33209,null));
var inst_33211 = figwheel.client.focus_msgs.call(null,inst_33210,inst_33206);
var inst_33212 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33211);
var inst_33213 = cljs.core.first.call(null,inst_33211);
var inst_33214 = figwheel.client.autoload_QMARK_.call(null);
var state_33253__$1 = (function (){var statearr_33268 = state_33253;
(statearr_33268[(8)] = inst_33213);

(statearr_33268[(9)] = inst_33212);

return statearr_33268;
})();
if(cljs.core.truth_(inst_33214)){
var statearr_33269_33293 = state_33253__$1;
(statearr_33269_33293[(1)] = (8));

} else {
var statearr_33270_33294 = state_33253__$1;
(statearr_33270_33294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (14))){
var inst_33224 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33271_33295 = state_33253__$1;
(statearr_33271_33295[(2)] = inst_33224);

(statearr_33271_33295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (16))){
var state_33253__$1 = state_33253;
var statearr_33272_33296 = state_33253__$1;
(statearr_33272_33296[(2)] = null);

(statearr_33272_33296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (10))){
var inst_33245 = (state_33253[(2)]);
var state_33253__$1 = (function (){var statearr_33273 = state_33253;
(statearr_33273[(11)] = inst_33245);

return statearr_33273;
})();
var statearr_33274_33297 = state_33253__$1;
(statearr_33274_33297[(2)] = null);

(statearr_33274_33297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (8))){
var inst_33212 = (state_33253[(9)]);
var inst_33216 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33212,opts);
var state_33253__$1 = state_33253;
if(cljs.core.truth_(inst_33216)){
var statearr_33275_33298 = state_33253__$1;
(statearr_33275_33298[(1)] = (11));

} else {
var statearr_33276_33299 = state_33253__$1;
(statearr_33276_33299[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27666__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27666__auto____0 = (function (){
var statearr_33277 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33277[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27666__auto__);

(statearr_33277[(1)] = (1));

return statearr_33277;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27666__auto____1 = (function (state_33253){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_33253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e33278){if((e33278 instanceof Object)){
var ex__27669__auto__ = e33278;
var statearr_33279_33300 = state_33253;
(statearr_33279_33300[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33301 = state_33253;
state_33253 = G__33301;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27666__auto__ = function(state_33253){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27666__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27666__auto____1.call(this,state_33253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27666__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27666__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_33280 = f__27761__auto__.call(null);
(statearr_33280[(6)] = c__27760__auto___33281);

return statearr_33280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33302_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33302_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33308 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33304 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33305 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33306 = true;
var _STAR_print_fn_STAR__temp_val__33307 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33306);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33307);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33305);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33304);
}}catch (e33303){if((e33303 instanceof Error)){
var e = e33303;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33308], null));
} else {
var e = e33303;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33309){
var map__33310 = p__33309;
var map__33310__$1 = (((((!((map__33310 == null))))?(((((map__33310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33310):map__33310);
var opts = map__33310__$1;
var build_id = cljs.core.get.call(null,map__33310__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__33312){
var vec__33313 = p__33312;
var seq__33314 = cljs.core.seq.call(null,vec__33313);
var first__33315 = cljs.core.first.call(null,seq__33314);
var seq__33314__$1 = cljs.core.next.call(null,seq__33314);
var map__33316 = first__33315;
var map__33316__$1 = (((((!((map__33316 == null))))?(((((map__33316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33316):map__33316);
var msg = map__33316__$1;
var msg_name = cljs.core.get.call(null,map__33316__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33314__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33318){
var vec__33319 = p__33318;
var seq__33320 = cljs.core.seq.call(null,vec__33319);
var first__33321 = cljs.core.first.call(null,seq__33320);
var seq__33320__$1 = cljs.core.next.call(null,seq__33320);
var map__33322 = first__33321;
var map__33322__$1 = (((((!((map__33322 == null))))?(((((map__33322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);
var msg = map__33322__$1;
var msg_name = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33320__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33324){
var map__33325 = p__33324;
var map__33325__$1 = (((((!((map__33325 == null))))?(((((map__33325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33325):map__33325);
var on_compile_warning = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__33327){
var vec__33328 = p__33327;
var seq__33329 = cljs.core.seq.call(null,vec__33328);
var first__33330 = cljs.core.first.call(null,seq__33329);
var seq__33329__$1 = cljs.core.next.call(null,seq__33329);
var map__33331 = first__33330;
var map__33331__$1 = (((((!((map__33331 == null))))?(((((map__33331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33331):map__33331);
var msg = map__33331__$1;
var msg_name = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33329__$1;
var pred__33333 = cljs.core._EQ_;
var expr__33334 = msg_name;
if(cljs.core.truth_(pred__33333.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33334))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33333.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33334))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_33423){
var state_val_33424 = (state_33423[(1)]);
if((state_val_33424 === (7))){
var inst_33343 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33343)){
var statearr_33425_33472 = state_33423__$1;
(statearr_33425_33472[(1)] = (8));

} else {
var statearr_33426_33473 = state_33423__$1;
(statearr_33426_33473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (20))){
var inst_33417 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33427_33474 = state_33423__$1;
(statearr_33427_33474[(2)] = inst_33417);

(statearr_33427_33474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (27))){
var inst_33413 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33428_33475 = state_33423__$1;
(statearr_33428_33475[(2)] = inst_33413);

(statearr_33428_33475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (1))){
var inst_33336 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33423__$1 = state_33423;
if(cljs.core.truth_(inst_33336)){
var statearr_33429_33476 = state_33423__$1;
(statearr_33429_33476[(1)] = (2));

} else {
var statearr_33430_33477 = state_33423__$1;
(statearr_33430_33477[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (24))){
var inst_33415 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33431_33478 = state_33423__$1;
(statearr_33431_33478[(2)] = inst_33415);

(statearr_33431_33478[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (4))){
var inst_33421 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33423__$1,inst_33421);
} else {
if((state_val_33424 === (15))){
var inst_33419 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33432_33479 = state_33423__$1;
(statearr_33432_33479[(2)] = inst_33419);

(statearr_33432_33479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (21))){
var inst_33372 = (state_33423[(2)]);
var inst_33373 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33374 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33373);
var state_33423__$1 = (function (){var statearr_33433 = state_33423;
(statearr_33433[(7)] = inst_33372);

return statearr_33433;
})();
var statearr_33434_33480 = state_33423__$1;
(statearr_33434_33480[(2)] = inst_33374);

(statearr_33434_33480[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (31))){
var inst_33402 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33423__$1 = state_33423;
if(inst_33402){
var statearr_33435_33481 = state_33423__$1;
(statearr_33435_33481[(1)] = (34));

} else {
var statearr_33436_33482 = state_33423__$1;
(statearr_33436_33482[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (32))){
var inst_33411 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33437_33483 = state_33423__$1;
(statearr_33437_33483[(2)] = inst_33411);

(statearr_33437_33483[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (33))){
var inst_33398 = (state_33423[(2)]);
var inst_33399 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33400 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33399);
var state_33423__$1 = (function (){var statearr_33438 = state_33423;
(statearr_33438[(8)] = inst_33398);

return statearr_33438;
})();
var statearr_33439_33484 = state_33423__$1;
(statearr_33439_33484[(2)] = inst_33400);

(statearr_33439_33484[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (13))){
var inst_33357 = figwheel.client.heads_up.clear.call(null);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(16),inst_33357);
} else {
if((state_val_33424 === (22))){
var inst_33378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33379 = figwheel.client.heads_up.append_warning_message.call(null,inst_33378);
var state_33423__$1 = state_33423;
var statearr_33440_33485 = state_33423__$1;
(statearr_33440_33485[(2)] = inst_33379);

(statearr_33440_33485[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (36))){
var inst_33409 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33441_33486 = state_33423__$1;
(statearr_33441_33486[(2)] = inst_33409);

(statearr_33441_33486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (29))){
var inst_33389 = (state_33423[(2)]);
var inst_33390 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33391 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33390);
var state_33423__$1 = (function (){var statearr_33442 = state_33423;
(statearr_33442[(9)] = inst_33389);

return statearr_33442;
})();
var statearr_33443_33487 = state_33423__$1;
(statearr_33443_33487[(2)] = inst_33391);

(statearr_33443_33487[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (6))){
var inst_33338 = (state_33423[(10)]);
var state_33423__$1 = state_33423;
var statearr_33444_33488 = state_33423__$1;
(statearr_33444_33488[(2)] = inst_33338);

(statearr_33444_33488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (28))){
var inst_33385 = (state_33423[(2)]);
var inst_33386 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33387 = figwheel.client.heads_up.display_warning.call(null,inst_33386);
var state_33423__$1 = (function (){var statearr_33445 = state_33423;
(statearr_33445[(11)] = inst_33385);

return statearr_33445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(29),inst_33387);
} else {
if((state_val_33424 === (25))){
var inst_33383 = figwheel.client.heads_up.clear.call(null);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(28),inst_33383);
} else {
if((state_val_33424 === (34))){
var inst_33404 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(37),inst_33404);
} else {
if((state_val_33424 === (17))){
var inst_33363 = (state_33423[(2)]);
var inst_33364 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33365 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33364);
var state_33423__$1 = (function (){var statearr_33446 = state_33423;
(statearr_33446[(12)] = inst_33363);

return statearr_33446;
})();
var statearr_33447_33489 = state_33423__$1;
(statearr_33447_33489[(2)] = inst_33365);

(statearr_33447_33489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (3))){
var inst_33355 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33423__$1 = state_33423;
if(inst_33355){
var statearr_33448_33490 = state_33423__$1;
(statearr_33448_33490[(1)] = (13));

} else {
var statearr_33449_33491 = state_33423__$1;
(statearr_33449_33491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (12))){
var inst_33351 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33450_33492 = state_33423__$1;
(statearr_33450_33492[(2)] = inst_33351);

(statearr_33450_33492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (2))){
var inst_33338 = (state_33423[(10)]);
var inst_33338__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33423__$1 = (function (){var statearr_33451 = state_33423;
(statearr_33451[(10)] = inst_33338__$1);

return statearr_33451;
})();
if(cljs.core.truth_(inst_33338__$1)){
var statearr_33452_33493 = state_33423__$1;
(statearr_33452_33493[(1)] = (5));

} else {
var statearr_33453_33494 = state_33423__$1;
(statearr_33453_33494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (23))){
var inst_33381 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33423__$1 = state_33423;
if(inst_33381){
var statearr_33454_33495 = state_33423__$1;
(statearr_33454_33495[(1)] = (25));

} else {
var statearr_33455_33496 = state_33423__$1;
(statearr_33455_33496[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (35))){
var state_33423__$1 = state_33423;
var statearr_33456_33497 = state_33423__$1;
(statearr_33456_33497[(2)] = null);

(statearr_33456_33497[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (19))){
var inst_33376 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33423__$1 = state_33423;
if(inst_33376){
var statearr_33457_33498 = state_33423__$1;
(statearr_33457_33498[(1)] = (22));

} else {
var statearr_33458_33499 = state_33423__$1;
(statearr_33458_33499[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (11))){
var inst_33347 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33459_33500 = state_33423__$1;
(statearr_33459_33500[(2)] = inst_33347);

(statearr_33459_33500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (9))){
var inst_33349 = figwheel.client.heads_up.clear.call(null);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(12),inst_33349);
} else {
if((state_val_33424 === (5))){
var inst_33340 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33423__$1 = state_33423;
var statearr_33460_33501 = state_33423__$1;
(statearr_33460_33501[(2)] = inst_33340);

(statearr_33460_33501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (14))){
var inst_33367 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33423__$1 = state_33423;
if(inst_33367){
var statearr_33461_33502 = state_33423__$1;
(statearr_33461_33502[(1)] = (18));

} else {
var statearr_33462_33503 = state_33423__$1;
(statearr_33462_33503[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (26))){
var inst_33393 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33423__$1 = state_33423;
if(inst_33393){
var statearr_33463_33504 = state_33423__$1;
(statearr_33463_33504[(1)] = (30));

} else {
var statearr_33464_33505 = state_33423__$1;
(statearr_33464_33505[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (16))){
var inst_33359 = (state_33423[(2)]);
var inst_33360 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33361 = figwheel.client.heads_up.display_exception.call(null,inst_33360);
var state_33423__$1 = (function (){var statearr_33465 = state_33423;
(statearr_33465[(13)] = inst_33359);

return statearr_33465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(17),inst_33361);
} else {
if((state_val_33424 === (30))){
var inst_33395 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33396 = figwheel.client.heads_up.display_warning.call(null,inst_33395);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(33),inst_33396);
} else {
if((state_val_33424 === (10))){
var inst_33353 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33466_33506 = state_33423__$1;
(statearr_33466_33506[(2)] = inst_33353);

(statearr_33466_33506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (18))){
var inst_33369 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33370 = figwheel.client.heads_up.display_exception.call(null,inst_33369);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(21),inst_33370);
} else {
if((state_val_33424 === (37))){
var inst_33406 = (state_33423[(2)]);
var state_33423__$1 = state_33423;
var statearr_33467_33507 = state_33423__$1;
(statearr_33467_33507[(2)] = inst_33406);

(statearr_33467_33507[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33424 === (8))){
var inst_33345 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33423__$1 = state_33423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33423__$1,(11),inst_33345);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto____0 = (function (){
var statearr_33468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33468[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto__);

(statearr_33468[(1)] = (1));

return statearr_33468;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto____1 = (function (state_33423){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_33423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e33469){if((e33469 instanceof Object)){
var ex__27669__auto__ = e33469;
var statearr_33470_33508 = state_33423;
(statearr_33470_33508[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33509 = state_33423;
state_33423 = G__33509;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto__ = function(state_33423){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto____1.call(this,state_33423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_33471 = f__27761__auto__.call(null);
(statearr_33471[(6)] = c__27760__auto__);

return statearr_33471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27760__auto___33538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_33524){
var state_val_33525 = (state_33524[(1)]);
if((state_val_33525 === (1))){
var state_33524__$1 = state_33524;
var statearr_33526_33539 = state_33524__$1;
(statearr_33526_33539[(2)] = null);

(statearr_33526_33539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (2))){
var state_33524__$1 = state_33524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33524__$1,(4),ch);
} else {
if((state_val_33525 === (3))){
var inst_33522 = (state_33524[(2)]);
var state_33524__$1 = state_33524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33524__$1,inst_33522);
} else {
if((state_val_33525 === (4))){
var inst_33512 = (state_33524[(7)]);
var inst_33512__$1 = (state_33524[(2)]);
var state_33524__$1 = (function (){var statearr_33527 = state_33524;
(statearr_33527[(7)] = inst_33512__$1);

return statearr_33527;
})();
if(cljs.core.truth_(inst_33512__$1)){
var statearr_33528_33540 = state_33524__$1;
(statearr_33528_33540[(1)] = (5));

} else {
var statearr_33529_33541 = state_33524__$1;
(statearr_33529_33541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (5))){
var inst_33512 = (state_33524[(7)]);
var inst_33514 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33512);
var state_33524__$1 = state_33524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33524__$1,(8),inst_33514);
} else {
if((state_val_33525 === (6))){
var state_33524__$1 = state_33524;
var statearr_33530_33542 = state_33524__$1;
(statearr_33530_33542[(2)] = null);

(statearr_33530_33542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (7))){
var inst_33520 = (state_33524[(2)]);
var state_33524__$1 = state_33524;
var statearr_33531_33543 = state_33524__$1;
(statearr_33531_33543[(2)] = inst_33520);

(statearr_33531_33543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33525 === (8))){
var inst_33516 = (state_33524[(2)]);
var state_33524__$1 = (function (){var statearr_33532 = state_33524;
(statearr_33532[(8)] = inst_33516);

return statearr_33532;
})();
var statearr_33533_33544 = state_33524__$1;
(statearr_33533_33544[(2)] = null);

(statearr_33533_33544[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27666__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27666__auto____0 = (function (){
var statearr_33534 = [null,null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27666__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var figwheel$client$heads_up_plugin_$_state_machine__27666__auto____1 = (function (state_33524){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_33524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e33535){if((e33535 instanceof Object)){
var ex__27669__auto__ = e33535;
var statearr_33536_33545 = state_33524;
(statearr_33536_33545[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33546 = state_33524;
state_33524 = G__33546;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27666__auto__ = function(state_33524){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27666__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27666__auto____1.call(this,state_33524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27666__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27666__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_33537 = f__27761__auto__.call(null);
(statearr_33537[(6)] = c__27760__auto___33538);

return statearr_33537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_33552){
var state_val_33553 = (state_33552[(1)]);
if((state_val_33553 === (1))){
var inst_33547 = cljs.core.async.timeout.call(null,(3000));
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33552__$1,(2),inst_33547);
} else {
if((state_val_33553 === (2))){
var inst_33549 = (state_33552[(2)]);
var inst_33550 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33552__$1 = (function (){var statearr_33554 = state_33552;
(statearr_33554[(7)] = inst_33549);

return statearr_33554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33552__$1,inst_33550);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27666__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27666__auto____0 = (function (){
var statearr_33555 = [null,null,null,null,null,null,null,null];
(statearr_33555[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27666__auto__);

(statearr_33555[(1)] = (1));

return statearr_33555;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27666__auto____1 = (function (state_33552){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_33552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e33556){if((e33556 instanceof Object)){
var ex__27669__auto__ = e33556;
var statearr_33557_33559 = state_33552;
(statearr_33557_33559[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33560 = state_33552;
state_33552 = G__33560;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27666__auto__ = function(state_33552){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27666__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27666__auto____1.call(this,state_33552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27666__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27666__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_33558 = f__27761__auto__.call(null);
(statearr_33558[(6)] = c__27760__auto__);

return statearr_33558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_33567){
var state_val_33568 = (state_33567[(1)]);
if((state_val_33568 === (1))){
var inst_33561 = cljs.core.async.timeout.call(null,(2000));
var state_33567__$1 = state_33567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33567__$1,(2),inst_33561);
} else {
if((state_val_33568 === (2))){
var inst_33563 = (state_33567[(2)]);
var inst_33564 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33565 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33564);
var state_33567__$1 = (function (){var statearr_33569 = state_33567;
(statearr_33569[(7)] = inst_33563);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33567__$1,inst_33565);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto____0 = (function (){
var statearr_33570 = [null,null,null,null,null,null,null,null];
(statearr_33570[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto__);

(statearr_33570[(1)] = (1));

return statearr_33570;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto____1 = (function (state_33567){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_33567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e33571){if((e33571 instanceof Object)){
var ex__27669__auto__ = e33571;
var statearr_33572_33574 = state_33567;
(statearr_33572_33574[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33575 = state_33567;
state_33567 = G__33575;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto__ = function(state_33567){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto____1.call(this,state_33567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_33573 = f__27761__auto__.call(null);
(statearr_33573[(6)] = c__27760__auto__);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33576){
var map__33577 = p__33576;
var map__33577__$1 = (((((!((map__33577 == null))))?(((((map__33577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33577):map__33577);
var file = cljs.core.get.call(null,map__33577__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33577__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33577__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33579 = "";
var G__33579__$1 = (cljs.core.truth_(file)?[G__33579,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33579);
var G__33579__$2 = (cljs.core.truth_(line)?[G__33579__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33579__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__33579__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33579__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33580){
var map__33581 = p__33580;
var map__33581__$1 = (((((!((map__33581 == null))))?(((((map__33581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33581):map__33581);
var ed = map__33581__$1;
var exception_data = cljs.core.get.call(null,map__33581__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33581__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_33584 = (function (){var G__33583 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33583)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__33583;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_33584);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33585){
var map__33586 = p__33585;
var map__33586__$1 = (((((!((map__33586 == null))))?(((((map__33586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33586):map__33586);
var w = map__33586__$1;
var message = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33588 = cljs.core.seq.call(null,plugins);
var chunk__33589 = null;
var count__33590 = (0);
var i__33591 = (0);
while(true){
if((i__33591 < count__33590)){
var vec__33598 = cljs.core._nth.call(null,chunk__33589,i__33591);
var k = cljs.core.nth.call(null,vec__33598,(0),null);
var plugin = cljs.core.nth.call(null,vec__33598,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33604 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33588,chunk__33589,count__33590,i__33591,pl_33604,vec__33598,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33604.call(null,msg_hist);
});})(seq__33588,chunk__33589,count__33590,i__33591,pl_33604,vec__33598,k,plugin))
);
} else {
}


var G__33605 = seq__33588;
var G__33606 = chunk__33589;
var G__33607 = count__33590;
var G__33608 = (i__33591 + (1));
seq__33588 = G__33605;
chunk__33589 = G__33606;
count__33590 = G__33607;
i__33591 = G__33608;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__33588);
if(temp__5720__auto__){
var seq__33588__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33588__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__33588__$1);
var G__33609 = cljs.core.chunk_rest.call(null,seq__33588__$1);
var G__33610 = c__4556__auto__;
var G__33611 = cljs.core.count.call(null,c__4556__auto__);
var G__33612 = (0);
seq__33588 = G__33609;
chunk__33589 = G__33610;
count__33590 = G__33611;
i__33591 = G__33612;
continue;
} else {
var vec__33601 = cljs.core.first.call(null,seq__33588__$1);
var k = cljs.core.nth.call(null,vec__33601,(0),null);
var plugin = cljs.core.nth.call(null,vec__33601,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33613 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33588,chunk__33589,count__33590,i__33591,pl_33613,vec__33601,k,plugin,seq__33588__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33613.call(null,msg_hist);
});})(seq__33588,chunk__33589,count__33590,i__33591,pl_33613,vec__33601,k,plugin,seq__33588__$1,temp__5720__auto__))
);
} else {
}


var G__33614 = cljs.core.next.call(null,seq__33588__$1);
var G__33615 = null;
var G__33616 = (0);
var G__33617 = (0);
seq__33588 = G__33614;
chunk__33589 = G__33615;
count__33590 = G__33616;
i__33591 = G__33617;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33619 = arguments.length;
switch (G__33619) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33620_33625 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33621_33626 = null;
var count__33622_33627 = (0);
var i__33623_33628 = (0);
while(true){
if((i__33623_33628 < count__33622_33627)){
var msg_33629 = cljs.core._nth.call(null,chunk__33621_33626,i__33623_33628);
figwheel.client.socket.handle_incoming_message.call(null,msg_33629);


var G__33630 = seq__33620_33625;
var G__33631 = chunk__33621_33626;
var G__33632 = count__33622_33627;
var G__33633 = (i__33623_33628 + (1));
seq__33620_33625 = G__33630;
chunk__33621_33626 = G__33631;
count__33622_33627 = G__33632;
i__33623_33628 = G__33633;
continue;
} else {
var temp__5720__auto___33634 = cljs.core.seq.call(null,seq__33620_33625);
if(temp__5720__auto___33634){
var seq__33620_33635__$1 = temp__5720__auto___33634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33620_33635__$1)){
var c__4556__auto___33636 = cljs.core.chunk_first.call(null,seq__33620_33635__$1);
var G__33637 = cljs.core.chunk_rest.call(null,seq__33620_33635__$1);
var G__33638 = c__4556__auto___33636;
var G__33639 = cljs.core.count.call(null,c__4556__auto___33636);
var G__33640 = (0);
seq__33620_33625 = G__33637;
chunk__33621_33626 = G__33638;
count__33622_33627 = G__33639;
i__33623_33628 = G__33640;
continue;
} else {
var msg_33641 = cljs.core.first.call(null,seq__33620_33635__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33641);


var G__33642 = cljs.core.next.call(null,seq__33620_33635__$1);
var G__33643 = null;
var G__33644 = (0);
var G__33645 = (0);
seq__33620_33625 = G__33642;
chunk__33621_33626 = G__33643;
count__33622_33627 = G__33644;
i__33623_33628 = G__33645;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33650 = arguments.length;
var i__4737__auto___33651 = (0);
while(true){
if((i__4737__auto___33651 < len__4736__auto___33650)){
args__4742__auto__.push((arguments[i__4737__auto___33651]));

var G__33652 = (i__4737__auto___33651 + (1));
i__4737__auto___33651 = G__33652;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33647){
var map__33648 = p__33647;
var map__33648__$1 = (((((!((map__33648 == null))))?(((((map__33648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33648):map__33648);
var opts = map__33648__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33646){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33646));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33653){if((e33653 instanceof Error)){
var e = e33653;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33653;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__33654){
var map__33655 = p__33654;
var map__33655__$1 = (((((!((map__33655 == null))))?(((((map__33655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33655):map__33655);
var msg_name = cljs.core.get.call(null,map__33655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1594268127632

// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__31215 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__31215 == null)){
return null;
} else {
return goog.object.get(G__31215,"requires");
}
}):(function (path){
var G__31216 = goog.object.get(goog.dependencies_.requires,path);
if((G__31216 == null)){
return null;
} else {
return goog.object.getKeys(G__31216);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31217_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31217_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__31218 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__31218__$1 = (((G__31218 == null))?null:goog.object.get(G__31218,"provides"));
if((G__31218__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__31218__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__31219 = cljs.core.seq.call(null,provides);
var chunk__31220 = null;
var count__31221 = (0);
var i__31222 = (0);
while(true){
if((i__31222 < count__31221)){
var prov = cljs.core._nth.call(null,chunk__31220,i__31222);
var seq__31231_31243 = cljs.core.seq.call(null,requires);
var chunk__31232_31244 = null;
var count__31233_31245 = (0);
var i__31234_31246 = (0);
while(true){
if((i__31234_31246 < count__31233_31245)){
var req_31247 = cljs.core._nth.call(null,chunk__31232_31244,i__31234_31246);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31247,prov);


var G__31248 = seq__31231_31243;
var G__31249 = chunk__31232_31244;
var G__31250 = count__31233_31245;
var G__31251 = (i__31234_31246 + (1));
seq__31231_31243 = G__31248;
chunk__31232_31244 = G__31249;
count__31233_31245 = G__31250;
i__31234_31246 = G__31251;
continue;
} else {
var temp__5720__auto___31252 = cljs.core.seq.call(null,seq__31231_31243);
if(temp__5720__auto___31252){
var seq__31231_31253__$1 = temp__5720__auto___31252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31231_31253__$1)){
var c__4556__auto___31254 = cljs.core.chunk_first.call(null,seq__31231_31253__$1);
var G__31255 = cljs.core.chunk_rest.call(null,seq__31231_31253__$1);
var G__31256 = c__4556__auto___31254;
var G__31257 = cljs.core.count.call(null,c__4556__auto___31254);
var G__31258 = (0);
seq__31231_31243 = G__31255;
chunk__31232_31244 = G__31256;
count__31233_31245 = G__31257;
i__31234_31246 = G__31258;
continue;
} else {
var req_31259 = cljs.core.first.call(null,seq__31231_31253__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31259,prov);


var G__31260 = cljs.core.next.call(null,seq__31231_31253__$1);
var G__31261 = null;
var G__31262 = (0);
var G__31263 = (0);
seq__31231_31243 = G__31260;
chunk__31232_31244 = G__31261;
count__31233_31245 = G__31262;
i__31234_31246 = G__31263;
continue;
}
} else {
}
}
break;
}


var G__31264 = seq__31219;
var G__31265 = chunk__31220;
var G__31266 = count__31221;
var G__31267 = (i__31222 + (1));
seq__31219 = G__31264;
chunk__31220 = G__31265;
count__31221 = G__31266;
i__31222 = G__31267;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31219);
if(temp__5720__auto__){
var seq__31219__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31219__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31219__$1);
var G__31268 = cljs.core.chunk_rest.call(null,seq__31219__$1);
var G__31269 = c__4556__auto__;
var G__31270 = cljs.core.count.call(null,c__4556__auto__);
var G__31271 = (0);
seq__31219 = G__31268;
chunk__31220 = G__31269;
count__31221 = G__31270;
i__31222 = G__31271;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31219__$1);
var seq__31235_31272 = cljs.core.seq.call(null,requires);
var chunk__31236_31273 = null;
var count__31237_31274 = (0);
var i__31238_31275 = (0);
while(true){
if((i__31238_31275 < count__31237_31274)){
var req_31276 = cljs.core._nth.call(null,chunk__31236_31273,i__31238_31275);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31276,prov);


var G__31277 = seq__31235_31272;
var G__31278 = chunk__31236_31273;
var G__31279 = count__31237_31274;
var G__31280 = (i__31238_31275 + (1));
seq__31235_31272 = G__31277;
chunk__31236_31273 = G__31278;
count__31237_31274 = G__31279;
i__31238_31275 = G__31280;
continue;
} else {
var temp__5720__auto___31281__$1 = cljs.core.seq.call(null,seq__31235_31272);
if(temp__5720__auto___31281__$1){
var seq__31235_31282__$1 = temp__5720__auto___31281__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31235_31282__$1)){
var c__4556__auto___31283 = cljs.core.chunk_first.call(null,seq__31235_31282__$1);
var G__31284 = cljs.core.chunk_rest.call(null,seq__31235_31282__$1);
var G__31285 = c__4556__auto___31283;
var G__31286 = cljs.core.count.call(null,c__4556__auto___31283);
var G__31287 = (0);
seq__31235_31272 = G__31284;
chunk__31236_31273 = G__31285;
count__31237_31274 = G__31286;
i__31238_31275 = G__31287;
continue;
} else {
var req_31288 = cljs.core.first.call(null,seq__31235_31282__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31288,prov);


var G__31289 = cljs.core.next.call(null,seq__31235_31282__$1);
var G__31290 = null;
var G__31291 = (0);
var G__31292 = (0);
seq__31235_31272 = G__31289;
chunk__31236_31273 = G__31290;
count__31237_31274 = G__31291;
i__31238_31275 = G__31292;
continue;
}
} else {
}
}
break;
}


var G__31293 = cljs.core.next.call(null,seq__31219__$1);
var G__31294 = null;
var G__31295 = (0);
var G__31296 = (0);
seq__31219 = G__31293;
chunk__31220 = G__31294;
count__31221 = G__31295;
i__31222 = G__31296;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__31239 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__31240 = null;
var count__31241 = (0);
var i__31242 = (0);
while(true){
if((i__31242 < count__31241)){
var prov = cljs.core._nth.call(null,chunk__31240,i__31242);
goog.object.forEach(deps,((function (seq__31239,chunk__31240,count__31241,i__31242,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31239,chunk__31240,count__31241,i__31242,prov,requires))
);


var G__31297 = seq__31239;
var G__31298 = chunk__31240;
var G__31299 = count__31241;
var G__31300 = (i__31242 + (1));
seq__31239 = G__31297;
chunk__31240 = G__31298;
count__31241 = G__31299;
i__31242 = G__31300;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31239);
if(temp__5720__auto__){
var seq__31239__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31239__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31239__$1);
var G__31301 = cljs.core.chunk_rest.call(null,seq__31239__$1);
var G__31302 = c__4556__auto__;
var G__31303 = cljs.core.count.call(null,c__4556__auto__);
var G__31304 = (0);
seq__31239 = G__31301;
chunk__31240 = G__31302;
count__31241 = G__31303;
i__31242 = G__31304;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31239__$1);
goog.object.forEach(deps,((function (seq__31239,chunk__31240,count__31241,i__31242,prov,seq__31239__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31239,chunk__31240,count__31241,i__31242,prov,seq__31239__$1,temp__5720__auto__,requires))
);


var G__31305 = cljs.core.next.call(null,seq__31239__$1);
var G__31306 = null;
var G__31307 = (0);
var G__31308 = (0);
seq__31239 = G__31305;
chunk__31240 = G__31306;
count__31241 = G__31307;
i__31242 = G__31308;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31309){
var vec__31310 = p__31309;
var _ = cljs.core.nth.call(null,vec__31310,(0),null);
var v = cljs.core.nth.call(null,vec__31310,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__31313){
var vec__31314 = p__31313;
var k = cljs.core.nth.call(null,vec__31314,(0),null);
var v = cljs.core.nth.call(null,vec__31314,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31326_31334 = cljs.core.seq.call(null,deps);
var chunk__31327_31335 = null;
var count__31328_31336 = (0);
var i__31329_31337 = (0);
while(true){
if((i__31329_31337 < count__31328_31336)){
var dep_31338 = cljs.core._nth.call(null,chunk__31327_31335,i__31329_31337);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_31338;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31338));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31338,(depth + (1)),state);
} else {
}


var G__31339 = seq__31326_31334;
var G__31340 = chunk__31327_31335;
var G__31341 = count__31328_31336;
var G__31342 = (i__31329_31337 + (1));
seq__31326_31334 = G__31339;
chunk__31327_31335 = G__31340;
count__31328_31336 = G__31341;
i__31329_31337 = G__31342;
continue;
} else {
var temp__5720__auto___31343 = cljs.core.seq.call(null,seq__31326_31334);
if(temp__5720__auto___31343){
var seq__31326_31344__$1 = temp__5720__auto___31343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31326_31344__$1)){
var c__4556__auto___31345 = cljs.core.chunk_first.call(null,seq__31326_31344__$1);
var G__31346 = cljs.core.chunk_rest.call(null,seq__31326_31344__$1);
var G__31347 = c__4556__auto___31345;
var G__31348 = cljs.core.count.call(null,c__4556__auto___31345);
var G__31349 = (0);
seq__31326_31334 = G__31346;
chunk__31327_31335 = G__31347;
count__31328_31336 = G__31348;
i__31329_31337 = G__31349;
continue;
} else {
var dep_31350 = cljs.core.first.call(null,seq__31326_31344__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_31350;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31350));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31350,(depth + (1)),state);
} else {
}


var G__31351 = cljs.core.next.call(null,seq__31326_31344__$1);
var G__31352 = null;
var G__31353 = (0);
var G__31354 = (0);
seq__31326_31334 = G__31351;
chunk__31327_31335 = G__31352;
count__31328_31336 = G__31353;
i__31329_31337 = G__31354;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31330){
var vec__31331 = p__31330;
var seq__31332 = cljs.core.seq.call(null,vec__31331);
var first__31333 = cljs.core.first.call(null,seq__31332);
var seq__31332__$1 = cljs.core.next.call(null,seq__31332);
var x = first__31333;
var xs = seq__31332__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__31317_SHARP_){
return clojure.set.difference.call(null,p1__31317_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__31355_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__31355_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31356 = cljs.core.seq.call(null,provides);
var chunk__31357 = null;
var count__31358 = (0);
var i__31359 = (0);
while(true){
if((i__31359 < count__31358)){
var prov = cljs.core._nth.call(null,chunk__31357,i__31359);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31368_31376 = cljs.core.seq.call(null,requires);
var chunk__31369_31377 = null;
var count__31370_31378 = (0);
var i__31371_31379 = (0);
while(true){
if((i__31371_31379 < count__31370_31378)){
var req_31380 = cljs.core._nth.call(null,chunk__31369_31377,i__31371_31379);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31380,prov);


var G__31381 = seq__31368_31376;
var G__31382 = chunk__31369_31377;
var G__31383 = count__31370_31378;
var G__31384 = (i__31371_31379 + (1));
seq__31368_31376 = G__31381;
chunk__31369_31377 = G__31382;
count__31370_31378 = G__31383;
i__31371_31379 = G__31384;
continue;
} else {
var temp__5720__auto___31385 = cljs.core.seq.call(null,seq__31368_31376);
if(temp__5720__auto___31385){
var seq__31368_31386__$1 = temp__5720__auto___31385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31368_31386__$1)){
var c__4556__auto___31387 = cljs.core.chunk_first.call(null,seq__31368_31386__$1);
var G__31388 = cljs.core.chunk_rest.call(null,seq__31368_31386__$1);
var G__31389 = c__4556__auto___31387;
var G__31390 = cljs.core.count.call(null,c__4556__auto___31387);
var G__31391 = (0);
seq__31368_31376 = G__31388;
chunk__31369_31377 = G__31389;
count__31370_31378 = G__31390;
i__31371_31379 = G__31391;
continue;
} else {
var req_31392 = cljs.core.first.call(null,seq__31368_31386__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31392,prov);


var G__31393 = cljs.core.next.call(null,seq__31368_31386__$1);
var G__31394 = null;
var G__31395 = (0);
var G__31396 = (0);
seq__31368_31376 = G__31393;
chunk__31369_31377 = G__31394;
count__31370_31378 = G__31395;
i__31371_31379 = G__31396;
continue;
}
} else {
}
}
break;
}


var G__31397 = seq__31356;
var G__31398 = chunk__31357;
var G__31399 = count__31358;
var G__31400 = (i__31359 + (1));
seq__31356 = G__31397;
chunk__31357 = G__31398;
count__31358 = G__31399;
i__31359 = G__31400;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31356);
if(temp__5720__auto__){
var seq__31356__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31356__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31356__$1);
var G__31401 = cljs.core.chunk_rest.call(null,seq__31356__$1);
var G__31402 = c__4556__auto__;
var G__31403 = cljs.core.count.call(null,c__4556__auto__);
var G__31404 = (0);
seq__31356 = G__31401;
chunk__31357 = G__31402;
count__31358 = G__31403;
i__31359 = G__31404;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31356__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31372_31405 = cljs.core.seq.call(null,requires);
var chunk__31373_31406 = null;
var count__31374_31407 = (0);
var i__31375_31408 = (0);
while(true){
if((i__31375_31408 < count__31374_31407)){
var req_31409 = cljs.core._nth.call(null,chunk__31373_31406,i__31375_31408);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31409,prov);


var G__31410 = seq__31372_31405;
var G__31411 = chunk__31373_31406;
var G__31412 = count__31374_31407;
var G__31413 = (i__31375_31408 + (1));
seq__31372_31405 = G__31410;
chunk__31373_31406 = G__31411;
count__31374_31407 = G__31412;
i__31375_31408 = G__31413;
continue;
} else {
var temp__5720__auto___31414__$1 = cljs.core.seq.call(null,seq__31372_31405);
if(temp__5720__auto___31414__$1){
var seq__31372_31415__$1 = temp__5720__auto___31414__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31372_31415__$1)){
var c__4556__auto___31416 = cljs.core.chunk_first.call(null,seq__31372_31415__$1);
var G__31417 = cljs.core.chunk_rest.call(null,seq__31372_31415__$1);
var G__31418 = c__4556__auto___31416;
var G__31419 = cljs.core.count.call(null,c__4556__auto___31416);
var G__31420 = (0);
seq__31372_31405 = G__31417;
chunk__31373_31406 = G__31418;
count__31374_31407 = G__31419;
i__31375_31408 = G__31420;
continue;
} else {
var req_31421 = cljs.core.first.call(null,seq__31372_31415__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31421,prov);


var G__31422 = cljs.core.next.call(null,seq__31372_31415__$1);
var G__31423 = null;
var G__31424 = (0);
var G__31425 = (0);
seq__31372_31405 = G__31422;
chunk__31373_31406 = G__31423;
count__31374_31407 = G__31424;
i__31375_31408 = G__31425;
continue;
}
} else {
}
}
break;
}


var G__31426 = cljs.core.next.call(null,seq__31356__$1);
var G__31427 = null;
var G__31428 = (0);
var G__31429 = (0);
seq__31356 = G__31426;
chunk__31357 = G__31427;
count__31358 = G__31428;
i__31359 = G__31429;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31430_31434 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31431_31435 = null;
var count__31432_31436 = (0);
var i__31433_31437 = (0);
while(true){
if((i__31433_31437 < count__31432_31436)){
var ns_31438 = cljs.core._nth.call(null,chunk__31431_31435,i__31433_31437);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31438);


var G__31439 = seq__31430_31434;
var G__31440 = chunk__31431_31435;
var G__31441 = count__31432_31436;
var G__31442 = (i__31433_31437 + (1));
seq__31430_31434 = G__31439;
chunk__31431_31435 = G__31440;
count__31432_31436 = G__31441;
i__31433_31437 = G__31442;
continue;
} else {
var temp__5720__auto___31443 = cljs.core.seq.call(null,seq__31430_31434);
if(temp__5720__auto___31443){
var seq__31430_31444__$1 = temp__5720__auto___31443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31430_31444__$1)){
var c__4556__auto___31445 = cljs.core.chunk_first.call(null,seq__31430_31444__$1);
var G__31446 = cljs.core.chunk_rest.call(null,seq__31430_31444__$1);
var G__31447 = c__4556__auto___31445;
var G__31448 = cljs.core.count.call(null,c__4556__auto___31445);
var G__31449 = (0);
seq__31430_31434 = G__31446;
chunk__31431_31435 = G__31447;
count__31432_31436 = G__31448;
i__31433_31437 = G__31449;
continue;
} else {
var ns_31450 = cljs.core.first.call(null,seq__31430_31444__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31450);


var G__31451 = cljs.core.next.call(null,seq__31430_31444__$1);
var G__31452 = null;
var G__31453 = (0);
var G__31454 = (0);
seq__31430_31434 = G__31451;
chunk__31431_31435 = G__31452;
count__31432_31436 = G__31453;
i__31433_31437 = G__31454;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__31455__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31456__i = 0, G__31456__a = new Array(arguments.length -  0);
while (G__31456__i < G__31456__a.length) {G__31456__a[G__31456__i] = arguments[G__31456__i + 0]; ++G__31456__i;}
  args = new cljs.core.IndexedSeq(G__31456__a,0,null);
} 
return G__31455__delegate.call(this,args);};
G__31455.cljs$lang$maxFixedArity = 0;
G__31455.cljs$lang$applyTo = (function (arglist__31457){
var args = cljs.core.seq(arglist__31457);
return G__31455__delegate(args);
});
G__31455.cljs$core$IFn$_invoke$arity$variadic = G__31455__delegate;
return G__31455;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31458_SHARP_,p2__31459_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31458_SHARP_)),p2__31459_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31460_SHARP_,p2__31461_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31460_SHARP_),p2__31461_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31462 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31462.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__31462.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__31462;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31463){if((e31463 instanceof Error)){
var e = e31463;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31463;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31464){if((e31464 instanceof Error)){
var e = e31464;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31464;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31465 = cljs.core._EQ_;
var expr__31466 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31465.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31466))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31465.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31466))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31465.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31466))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31468,callback){
var map__31469 = p__31468;
var map__31469__$1 = (((((!((map__31469 == null))))?(((((map__31469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31469):map__31469);
var file_msg = map__31469__$1;
var request_url = cljs.core.get.call(null,map__31469__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_31507){
var state_val_31508 = (state_31507[(1)]);
if((state_val_31508 === (7))){
var inst_31503 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
var statearr_31509_31535 = state_31507__$1;
(statearr_31509_31535[(2)] = inst_31503);

(statearr_31509_31535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (1))){
var state_31507__$1 = state_31507;
var statearr_31510_31536 = state_31507__$1;
(statearr_31510_31536[(2)] = null);

(statearr_31510_31536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (4))){
var inst_31473 = (state_31507[(7)]);
var inst_31473__$1 = (state_31507[(2)]);
var state_31507__$1 = (function (){var statearr_31511 = state_31507;
(statearr_31511[(7)] = inst_31473__$1);

return statearr_31511;
})();
if(cljs.core.truth_(inst_31473__$1)){
var statearr_31512_31537 = state_31507__$1;
(statearr_31512_31537[(1)] = (5));

} else {
var statearr_31513_31538 = state_31507__$1;
(statearr_31513_31538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (15))){
var inst_31486 = (state_31507[(8)]);
var inst_31488 = (state_31507[(9)]);
var inst_31490 = inst_31488.call(null,inst_31486);
var state_31507__$1 = state_31507;
var statearr_31514_31539 = state_31507__$1;
(statearr_31514_31539[(2)] = inst_31490);

(statearr_31514_31539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (13))){
var inst_31497 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
var statearr_31515_31540 = state_31507__$1;
(statearr_31515_31540[(2)] = inst_31497);

(statearr_31515_31540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (6))){
var state_31507__$1 = state_31507;
var statearr_31516_31541 = state_31507__$1;
(statearr_31516_31541[(2)] = null);

(statearr_31516_31541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (17))){
var inst_31494 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
var statearr_31517_31542 = state_31507__$1;
(statearr_31517_31542[(2)] = inst_31494);

(statearr_31517_31542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (3))){
var inst_31505 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31507__$1,inst_31505);
} else {
if((state_val_31508 === (12))){
var state_31507__$1 = state_31507;
var statearr_31518_31543 = state_31507__$1;
(statearr_31518_31543[(2)] = null);

(statearr_31518_31543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (2))){
var state_31507__$1 = state_31507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31507__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31508 === (11))){
var inst_31478 = (state_31507[(10)]);
var inst_31484 = figwheel.client.file_reloading.blocking_load.call(null,inst_31478);
var state_31507__$1 = state_31507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31507__$1,(14),inst_31484);
} else {
if((state_val_31508 === (9))){
var inst_31478 = (state_31507[(10)]);
var state_31507__$1 = state_31507;
if(cljs.core.truth_(inst_31478)){
var statearr_31519_31544 = state_31507__$1;
(statearr_31519_31544[(1)] = (11));

} else {
var statearr_31520_31545 = state_31507__$1;
(statearr_31520_31545[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (5))){
var inst_31473 = (state_31507[(7)]);
var inst_31479 = (state_31507[(11)]);
var inst_31478 = cljs.core.nth.call(null,inst_31473,(0),null);
var inst_31479__$1 = cljs.core.nth.call(null,inst_31473,(1),null);
var state_31507__$1 = (function (){var statearr_31521 = state_31507;
(statearr_31521[(10)] = inst_31478);

(statearr_31521[(11)] = inst_31479__$1);

return statearr_31521;
})();
if(cljs.core.truth_(inst_31479__$1)){
var statearr_31522_31546 = state_31507__$1;
(statearr_31522_31546[(1)] = (8));

} else {
var statearr_31523_31547 = state_31507__$1;
(statearr_31523_31547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (14))){
var inst_31478 = (state_31507[(10)]);
var inst_31488 = (state_31507[(9)]);
var inst_31486 = (state_31507[(2)]);
var inst_31487 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31488__$1 = cljs.core.get.call(null,inst_31487,inst_31478);
var state_31507__$1 = (function (){var statearr_31524 = state_31507;
(statearr_31524[(8)] = inst_31486);

(statearr_31524[(9)] = inst_31488__$1);

return statearr_31524;
})();
if(cljs.core.truth_(inst_31488__$1)){
var statearr_31525_31548 = state_31507__$1;
(statearr_31525_31548[(1)] = (15));

} else {
var statearr_31526_31549 = state_31507__$1;
(statearr_31526_31549[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (16))){
var inst_31486 = (state_31507[(8)]);
var inst_31492 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31486);
var state_31507__$1 = state_31507;
var statearr_31527_31550 = state_31507__$1;
(statearr_31527_31550[(2)] = inst_31492);

(statearr_31527_31550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (10))){
var inst_31499 = (state_31507[(2)]);
var state_31507__$1 = (function (){var statearr_31528 = state_31507;
(statearr_31528[(12)] = inst_31499);

return statearr_31528;
})();
var statearr_31529_31551 = state_31507__$1;
(statearr_31529_31551[(2)] = null);

(statearr_31529_31551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (8))){
var inst_31479 = (state_31507[(11)]);
var inst_31481 = eval(inst_31479);
var state_31507__$1 = state_31507;
var statearr_31530_31552 = state_31507__$1;
(statearr_31530_31552[(2)] = inst_31481);

(statearr_31530_31552[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27666__auto__ = null;
var figwheel$client$file_reloading$state_machine__27666__auto____0 = (function (){
var statearr_31531 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31531[(0)] = figwheel$client$file_reloading$state_machine__27666__auto__);

(statearr_31531[(1)] = (1));

return statearr_31531;
});
var figwheel$client$file_reloading$state_machine__27666__auto____1 = (function (state_31507){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_31507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e31532){if((e31532 instanceof Object)){
var ex__27669__auto__ = e31532;
var statearr_31533_31553 = state_31507;
(statearr_31533_31553[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31554 = state_31507;
state_31507 = G__31554;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27666__auto__ = function(state_31507){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27666__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27666__auto____1.call(this,state_31507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27666__auto____0;
figwheel$client$file_reloading$state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27666__auto____1;
return figwheel$client$file_reloading$state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_31534 = f__27761__auto__.call(null);
(statearr_31534[(6)] = c__27760__auto__);

return statearr_31534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31556 = arguments.length;
switch (G__31556) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31558,callback){
var map__31559 = p__31558;
var map__31559__$1 = (((((!((map__31559 == null))))?(((((map__31559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31559):map__31559);
var file_msg = map__31559__$1;
var namespace = cljs.core.get.call(null,map__31559__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31561){
var map__31562 = p__31561;
var map__31562__$1 = (((((!((map__31562 == null))))?(((((map__31562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31562):map__31562);
var file_msg = map__31562__$1;
var namespace = cljs.core.get.call(null,map__31562__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31564){
var map__31565 = p__31564;
var map__31565__$1 = (((((!((map__31565 == null))))?(((((map__31565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31565):map__31565);
var file_msg = map__31565__$1;
var namespace = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31567,callback){
var map__31568 = p__31567;
var map__31568__$1 = (((((!((map__31568 == null))))?(((((map__31568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31568):map__31568);
var file_msg = map__31568__$1;
var request_url = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27760__auto___31618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_31603){
var state_val_31604 = (state_31603[(1)]);
if((state_val_31604 === (1))){
var inst_31577 = cljs.core.seq.call(null,files);
var inst_31578 = cljs.core.first.call(null,inst_31577);
var inst_31579 = cljs.core.next.call(null,inst_31577);
var inst_31580 = files;
var state_31603__$1 = (function (){var statearr_31605 = state_31603;
(statearr_31605[(7)] = inst_31578);

(statearr_31605[(8)] = inst_31580);

(statearr_31605[(9)] = inst_31579);

return statearr_31605;
})();
var statearr_31606_31619 = state_31603__$1;
(statearr_31606_31619[(2)] = null);

(statearr_31606_31619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (2))){
var inst_31586 = (state_31603[(10)]);
var inst_31580 = (state_31603[(8)]);
var inst_31585 = cljs.core.seq.call(null,inst_31580);
var inst_31586__$1 = cljs.core.first.call(null,inst_31585);
var inst_31587 = cljs.core.next.call(null,inst_31585);
var inst_31588 = (inst_31586__$1 == null);
var inst_31589 = cljs.core.not.call(null,inst_31588);
var state_31603__$1 = (function (){var statearr_31607 = state_31603;
(statearr_31607[(10)] = inst_31586__$1);

(statearr_31607[(11)] = inst_31587);

return statearr_31607;
})();
if(inst_31589){
var statearr_31608_31620 = state_31603__$1;
(statearr_31608_31620[(1)] = (4));

} else {
var statearr_31609_31621 = state_31603__$1;
(statearr_31609_31621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (3))){
var inst_31601 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31603__$1,inst_31601);
} else {
if((state_val_31604 === (4))){
var inst_31586 = (state_31603[(10)]);
var inst_31591 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31586);
var state_31603__$1 = state_31603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31603__$1,(7),inst_31591);
} else {
if((state_val_31604 === (5))){
var inst_31597 = cljs.core.async.close_BANG_.call(null,out);
var state_31603__$1 = state_31603;
var statearr_31610_31622 = state_31603__$1;
(statearr_31610_31622[(2)] = inst_31597);

(statearr_31610_31622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (6))){
var inst_31599 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31611_31623 = state_31603__$1;
(statearr_31611_31623[(2)] = inst_31599);

(statearr_31611_31623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (7))){
var inst_31587 = (state_31603[(11)]);
var inst_31593 = (state_31603[(2)]);
var inst_31594 = cljs.core.async.put_BANG_.call(null,out,inst_31593);
var inst_31580 = inst_31587;
var state_31603__$1 = (function (){var statearr_31612 = state_31603;
(statearr_31612[(12)] = inst_31594);

(statearr_31612[(8)] = inst_31580);

return statearr_31612;
})();
var statearr_31613_31624 = state_31603__$1;
(statearr_31613_31624[(2)] = null);

(statearr_31613_31624[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto____0 = (function (){
var statearr_31614 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31614[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto__);

(statearr_31614[(1)] = (1));

return statearr_31614;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto____1 = (function (state_31603){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_31603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e31615){if((e31615 instanceof Object)){
var ex__27669__auto__ = e31615;
var statearr_31616_31625 = state_31603;
(statearr_31616_31625[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31626 = state_31603;
state_31603 = G__31626;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto__ = function(state_31603){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto____1.call(this,state_31603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_31617 = f__27761__auto__.call(null);
(statearr_31617[(6)] = c__27760__auto___31618);

return statearr_31617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31627,opts){
var map__31628 = p__31627;
var map__31628__$1 = (((((!((map__31628 == null))))?(((((map__31628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31628):map__31628);
var eval_body = cljs.core.get.call(null,map__31628__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31628__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31630){var e = e31630;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31631_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31631_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31632){
var vec__31633 = p__31632;
var k = cljs.core.nth.call(null,vec__31633,(0),null);
var v = cljs.core.nth.call(null,vec__31633,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31636){
var vec__31637 = p__31636;
var k = cljs.core.nth.call(null,vec__31637,(0),null);
var v = cljs.core.nth.call(null,vec__31637,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31643,p__31644){
var map__31645 = p__31643;
var map__31645__$1 = (((((!((map__31645 == null))))?(((((map__31645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31645):map__31645);
var opts = map__31645__$1;
var before_jsload = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31645__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31646 = p__31644;
var map__31646__$1 = (((((!((map__31646 == null))))?(((((map__31646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31646):map__31646);
var msg = map__31646__$1;
var files = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31646__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27761__auto__ = (function (){var switch__27665__auto__ = (function (state_31800){
var state_val_31801 = (state_31800[(1)]);
if((state_val_31801 === (7))){
var inst_31661 = (state_31800[(7)]);
var inst_31663 = (state_31800[(8)]);
var inst_31662 = (state_31800[(9)]);
var inst_31660 = (state_31800[(10)]);
var inst_31668 = cljs.core._nth.call(null,inst_31661,inst_31663);
var inst_31669 = figwheel.client.file_reloading.eval_body.call(null,inst_31668,opts);
var inst_31670 = (inst_31663 + (1));
var tmp31802 = inst_31661;
var tmp31803 = inst_31662;
var tmp31804 = inst_31660;
var inst_31660__$1 = tmp31804;
var inst_31661__$1 = tmp31802;
var inst_31662__$1 = tmp31803;
var inst_31663__$1 = inst_31670;
var state_31800__$1 = (function (){var statearr_31805 = state_31800;
(statearr_31805[(11)] = inst_31669);

(statearr_31805[(7)] = inst_31661__$1);

(statearr_31805[(8)] = inst_31663__$1);

(statearr_31805[(9)] = inst_31662__$1);

(statearr_31805[(10)] = inst_31660__$1);

return statearr_31805;
})();
var statearr_31806_31889 = state_31800__$1;
(statearr_31806_31889[(2)] = null);

(statearr_31806_31889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (20))){
var inst_31703 = (state_31800[(12)]);
var inst_31711 = figwheel.client.file_reloading.sort_files.call(null,inst_31703);
var state_31800__$1 = state_31800;
var statearr_31807_31890 = state_31800__$1;
(statearr_31807_31890[(2)] = inst_31711);

(statearr_31807_31890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (27))){
var state_31800__$1 = state_31800;
var statearr_31808_31891 = state_31800__$1;
(statearr_31808_31891[(2)] = null);

(statearr_31808_31891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (1))){
var inst_31652 = (state_31800[(13)]);
var inst_31649 = before_jsload.call(null,files);
var inst_31650 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31651 = (function (){return (function (p1__31640_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31640_SHARP_);
});
})();
var inst_31652__$1 = cljs.core.filter.call(null,inst_31651,files);
var inst_31653 = cljs.core.not_empty.call(null,inst_31652__$1);
var state_31800__$1 = (function (){var statearr_31809 = state_31800;
(statearr_31809[(13)] = inst_31652__$1);

(statearr_31809[(14)] = inst_31649);

(statearr_31809[(15)] = inst_31650);

return statearr_31809;
})();
if(cljs.core.truth_(inst_31653)){
var statearr_31810_31892 = state_31800__$1;
(statearr_31810_31892[(1)] = (2));

} else {
var statearr_31811_31893 = state_31800__$1;
(statearr_31811_31893[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (24))){
var state_31800__$1 = state_31800;
var statearr_31812_31894 = state_31800__$1;
(statearr_31812_31894[(2)] = null);

(statearr_31812_31894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (39))){
var inst_31753 = (state_31800[(16)]);
var state_31800__$1 = state_31800;
var statearr_31813_31895 = state_31800__$1;
(statearr_31813_31895[(2)] = inst_31753);

(statearr_31813_31895[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (46))){
var inst_31795 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31814_31896 = state_31800__$1;
(statearr_31814_31896[(2)] = inst_31795);

(statearr_31814_31896[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (4))){
var inst_31697 = (state_31800[(2)]);
var inst_31698 = cljs.core.List.EMPTY;
var inst_31699 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31698);
var inst_31700 = (function (){return (function (p1__31641_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31641_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31641_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31641_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_31701 = cljs.core.filter.call(null,inst_31700,files);
var inst_31702 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31703 = cljs.core.concat.call(null,inst_31701,inst_31702);
var state_31800__$1 = (function (){var statearr_31815 = state_31800;
(statearr_31815[(17)] = inst_31699);

(statearr_31815[(18)] = inst_31697);

(statearr_31815[(12)] = inst_31703);

return statearr_31815;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31816_31897 = state_31800__$1;
(statearr_31816_31897[(1)] = (16));

} else {
var statearr_31817_31898 = state_31800__$1;
(statearr_31817_31898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (15))){
var inst_31687 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31818_31899 = state_31800__$1;
(statearr_31818_31899[(2)] = inst_31687);

(statearr_31818_31899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (21))){
var inst_31713 = (state_31800[(19)]);
var inst_31713__$1 = (state_31800[(2)]);
var inst_31714 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31713__$1);
var state_31800__$1 = (function (){var statearr_31819 = state_31800;
(statearr_31819[(19)] = inst_31713__$1);

return statearr_31819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31800__$1,(22),inst_31714);
} else {
if((state_val_31801 === (31))){
var inst_31798 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31800__$1,inst_31798);
} else {
if((state_val_31801 === (32))){
var inst_31753 = (state_31800[(16)]);
var inst_31758 = inst_31753.cljs$lang$protocol_mask$partition0$;
var inst_31759 = (inst_31758 & (64));
var inst_31760 = inst_31753.cljs$core$ISeq$;
var inst_31761 = (cljs.core.PROTOCOL_SENTINEL === inst_31760);
var inst_31762 = ((inst_31759) || (inst_31761));
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31762)){
var statearr_31820_31900 = state_31800__$1;
(statearr_31820_31900[(1)] = (35));

} else {
var statearr_31821_31901 = state_31800__$1;
(statearr_31821_31901[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (40))){
var inst_31775 = (state_31800[(20)]);
var inst_31774 = (state_31800[(2)]);
var inst_31775__$1 = cljs.core.get.call(null,inst_31774,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31776 = cljs.core.get.call(null,inst_31774,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31777 = cljs.core.not_empty.call(null,inst_31775__$1);
var state_31800__$1 = (function (){var statearr_31822 = state_31800;
(statearr_31822[(20)] = inst_31775__$1);

(statearr_31822[(21)] = inst_31776);

return statearr_31822;
})();
if(cljs.core.truth_(inst_31777)){
var statearr_31823_31902 = state_31800__$1;
(statearr_31823_31902[(1)] = (41));

} else {
var statearr_31824_31903 = state_31800__$1;
(statearr_31824_31903[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (33))){
var state_31800__$1 = state_31800;
var statearr_31825_31904 = state_31800__$1;
(statearr_31825_31904[(2)] = false);

(statearr_31825_31904[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (13))){
var inst_31673 = (state_31800[(22)]);
var inst_31677 = cljs.core.chunk_first.call(null,inst_31673);
var inst_31678 = cljs.core.chunk_rest.call(null,inst_31673);
var inst_31679 = cljs.core.count.call(null,inst_31677);
var inst_31660 = inst_31678;
var inst_31661 = inst_31677;
var inst_31662 = inst_31679;
var inst_31663 = (0);
var state_31800__$1 = (function (){var statearr_31826 = state_31800;
(statearr_31826[(7)] = inst_31661);

(statearr_31826[(8)] = inst_31663);

(statearr_31826[(9)] = inst_31662);

(statearr_31826[(10)] = inst_31660);

return statearr_31826;
})();
var statearr_31827_31905 = state_31800__$1;
(statearr_31827_31905[(2)] = null);

(statearr_31827_31905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (22))){
var inst_31721 = (state_31800[(23)]);
var inst_31716 = (state_31800[(24)]);
var inst_31717 = (state_31800[(25)]);
var inst_31713 = (state_31800[(19)]);
var inst_31716__$1 = (state_31800[(2)]);
var inst_31717__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31716__$1);
var inst_31718 = (function (){var all_files = inst_31713;
var res_SINGLEQUOTE_ = inst_31716__$1;
var res = inst_31717__$1;
return (function (p1__31642_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31642_SHARP_));
});
})();
var inst_31719 = cljs.core.filter.call(null,inst_31718,inst_31716__$1);
var inst_31720 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31721__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31720);
var inst_31722 = cljs.core.not_empty.call(null,inst_31721__$1);
var state_31800__$1 = (function (){var statearr_31828 = state_31800;
(statearr_31828[(23)] = inst_31721__$1);

(statearr_31828[(24)] = inst_31716__$1);

(statearr_31828[(25)] = inst_31717__$1);

(statearr_31828[(26)] = inst_31719);

return statearr_31828;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31829_31906 = state_31800__$1;
(statearr_31829_31906[(1)] = (23));

} else {
var statearr_31830_31907 = state_31800__$1;
(statearr_31830_31907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (36))){
var state_31800__$1 = state_31800;
var statearr_31831_31908 = state_31800__$1;
(statearr_31831_31908[(2)] = false);

(statearr_31831_31908[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (41))){
var inst_31775 = (state_31800[(20)]);
var inst_31779 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31780 = cljs.core.map.call(null,inst_31779,inst_31775);
var inst_31781 = cljs.core.pr_str.call(null,inst_31780);
var inst_31782 = ["figwheel-no-load meta-data: ",inst_31781].join('');
var inst_31783 = figwheel.client.utils.log.call(null,inst_31782);
var state_31800__$1 = state_31800;
var statearr_31832_31909 = state_31800__$1;
(statearr_31832_31909[(2)] = inst_31783);

(statearr_31832_31909[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (43))){
var inst_31776 = (state_31800[(21)]);
var inst_31786 = (state_31800[(2)]);
var inst_31787 = cljs.core.not_empty.call(null,inst_31776);
var state_31800__$1 = (function (){var statearr_31833 = state_31800;
(statearr_31833[(27)] = inst_31786);

return statearr_31833;
})();
if(cljs.core.truth_(inst_31787)){
var statearr_31834_31910 = state_31800__$1;
(statearr_31834_31910[(1)] = (44));

} else {
var statearr_31835_31911 = state_31800__$1;
(statearr_31835_31911[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (29))){
var inst_31721 = (state_31800[(23)]);
var inst_31716 = (state_31800[(24)]);
var inst_31717 = (state_31800[(25)]);
var inst_31713 = (state_31800[(19)]);
var inst_31753 = (state_31800[(16)]);
var inst_31719 = (state_31800[(26)]);
var inst_31749 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31752 = (function (){var all_files = inst_31713;
var res_SINGLEQUOTE_ = inst_31716;
var res = inst_31717;
var files_not_loaded = inst_31719;
var dependencies_that_loaded = inst_31721;
return (function (p__31751){
var map__31836 = p__31751;
var map__31836__$1 = (((((!((map__31836 == null))))?(((((map__31836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31836):map__31836);
var namespace = cljs.core.get.call(null,map__31836__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_31753__$1 = cljs.core.group_by.call(null,inst_31752,inst_31719);
var inst_31755 = (inst_31753__$1 == null);
var inst_31756 = cljs.core.not.call(null,inst_31755);
var state_31800__$1 = (function (){var statearr_31838 = state_31800;
(statearr_31838[(28)] = inst_31749);

(statearr_31838[(16)] = inst_31753__$1);

return statearr_31838;
})();
if(inst_31756){
var statearr_31839_31912 = state_31800__$1;
(statearr_31839_31912[(1)] = (32));

} else {
var statearr_31840_31913 = state_31800__$1;
(statearr_31840_31913[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (44))){
var inst_31776 = (state_31800[(21)]);
var inst_31789 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31776);
var inst_31790 = cljs.core.pr_str.call(null,inst_31789);
var inst_31791 = ["not required: ",inst_31790].join('');
var inst_31792 = figwheel.client.utils.log.call(null,inst_31791);
var state_31800__$1 = state_31800;
var statearr_31841_31914 = state_31800__$1;
(statearr_31841_31914[(2)] = inst_31792);

(statearr_31841_31914[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (6))){
var inst_31694 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31842_31915 = state_31800__$1;
(statearr_31842_31915[(2)] = inst_31694);

(statearr_31842_31915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (28))){
var inst_31719 = (state_31800[(26)]);
var inst_31746 = (state_31800[(2)]);
var inst_31747 = cljs.core.not_empty.call(null,inst_31719);
var state_31800__$1 = (function (){var statearr_31843 = state_31800;
(statearr_31843[(29)] = inst_31746);

return statearr_31843;
})();
if(cljs.core.truth_(inst_31747)){
var statearr_31844_31916 = state_31800__$1;
(statearr_31844_31916[(1)] = (29));

} else {
var statearr_31845_31917 = state_31800__$1;
(statearr_31845_31917[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (25))){
var inst_31717 = (state_31800[(25)]);
var inst_31733 = (state_31800[(2)]);
var inst_31734 = cljs.core.not_empty.call(null,inst_31717);
var state_31800__$1 = (function (){var statearr_31846 = state_31800;
(statearr_31846[(30)] = inst_31733);

return statearr_31846;
})();
if(cljs.core.truth_(inst_31734)){
var statearr_31847_31918 = state_31800__$1;
(statearr_31847_31918[(1)] = (26));

} else {
var statearr_31848_31919 = state_31800__$1;
(statearr_31848_31919[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (34))){
var inst_31769 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31769)){
var statearr_31849_31920 = state_31800__$1;
(statearr_31849_31920[(1)] = (38));

} else {
var statearr_31850_31921 = state_31800__$1;
(statearr_31850_31921[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (17))){
var state_31800__$1 = state_31800;
var statearr_31851_31922 = state_31800__$1;
(statearr_31851_31922[(2)] = recompile_dependents);

(statearr_31851_31922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (3))){
var state_31800__$1 = state_31800;
var statearr_31852_31923 = state_31800__$1;
(statearr_31852_31923[(2)] = null);

(statearr_31852_31923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (12))){
var inst_31690 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31853_31924 = state_31800__$1;
(statearr_31853_31924[(2)] = inst_31690);

(statearr_31853_31924[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (2))){
var inst_31652 = (state_31800[(13)]);
var inst_31659 = cljs.core.seq.call(null,inst_31652);
var inst_31660 = inst_31659;
var inst_31661 = null;
var inst_31662 = (0);
var inst_31663 = (0);
var state_31800__$1 = (function (){var statearr_31854 = state_31800;
(statearr_31854[(7)] = inst_31661);

(statearr_31854[(8)] = inst_31663);

(statearr_31854[(9)] = inst_31662);

(statearr_31854[(10)] = inst_31660);

return statearr_31854;
})();
var statearr_31855_31925 = state_31800__$1;
(statearr_31855_31925[(2)] = null);

(statearr_31855_31925[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (23))){
var inst_31721 = (state_31800[(23)]);
var inst_31716 = (state_31800[(24)]);
var inst_31717 = (state_31800[(25)]);
var inst_31713 = (state_31800[(19)]);
var inst_31719 = (state_31800[(26)]);
var inst_31724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31726 = (function (){var all_files = inst_31713;
var res_SINGLEQUOTE_ = inst_31716;
var res = inst_31717;
var files_not_loaded = inst_31719;
var dependencies_that_loaded = inst_31721;
return (function (p__31725){
var map__31856 = p__31725;
var map__31856__$1 = (((((!((map__31856 == null))))?(((((map__31856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31856):map__31856);
var request_url = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_31727 = cljs.core.reverse.call(null,inst_31721);
var inst_31728 = cljs.core.map.call(null,inst_31726,inst_31727);
var inst_31729 = cljs.core.pr_str.call(null,inst_31728);
var inst_31730 = figwheel.client.utils.log.call(null,inst_31729);
var state_31800__$1 = (function (){var statearr_31858 = state_31800;
(statearr_31858[(31)] = inst_31724);

return statearr_31858;
})();
var statearr_31859_31926 = state_31800__$1;
(statearr_31859_31926[(2)] = inst_31730);

(statearr_31859_31926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (35))){
var state_31800__$1 = state_31800;
var statearr_31860_31927 = state_31800__$1;
(statearr_31860_31927[(2)] = true);

(statearr_31860_31927[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (19))){
var inst_31703 = (state_31800[(12)]);
var inst_31709 = figwheel.client.file_reloading.expand_files.call(null,inst_31703);
var state_31800__$1 = state_31800;
var statearr_31861_31928 = state_31800__$1;
(statearr_31861_31928[(2)] = inst_31709);

(statearr_31861_31928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (11))){
var state_31800__$1 = state_31800;
var statearr_31862_31929 = state_31800__$1;
(statearr_31862_31929[(2)] = null);

(statearr_31862_31929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (9))){
var inst_31692 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31863_31930 = state_31800__$1;
(statearr_31863_31930[(2)] = inst_31692);

(statearr_31863_31930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (5))){
var inst_31663 = (state_31800[(8)]);
var inst_31662 = (state_31800[(9)]);
var inst_31665 = (inst_31663 < inst_31662);
var inst_31666 = inst_31665;
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31666)){
var statearr_31864_31931 = state_31800__$1;
(statearr_31864_31931[(1)] = (7));

} else {
var statearr_31865_31932 = state_31800__$1;
(statearr_31865_31932[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (14))){
var inst_31673 = (state_31800[(22)]);
var inst_31682 = cljs.core.first.call(null,inst_31673);
var inst_31683 = figwheel.client.file_reloading.eval_body.call(null,inst_31682,opts);
var inst_31684 = cljs.core.next.call(null,inst_31673);
var inst_31660 = inst_31684;
var inst_31661 = null;
var inst_31662 = (0);
var inst_31663 = (0);
var state_31800__$1 = (function (){var statearr_31866 = state_31800;
(statearr_31866[(7)] = inst_31661);

(statearr_31866[(8)] = inst_31663);

(statearr_31866[(9)] = inst_31662);

(statearr_31866[(10)] = inst_31660);

(statearr_31866[(32)] = inst_31683);

return statearr_31866;
})();
var statearr_31867_31933 = state_31800__$1;
(statearr_31867_31933[(2)] = null);

(statearr_31867_31933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (45))){
var state_31800__$1 = state_31800;
var statearr_31868_31934 = state_31800__$1;
(statearr_31868_31934[(2)] = null);

(statearr_31868_31934[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (26))){
var inst_31721 = (state_31800[(23)]);
var inst_31716 = (state_31800[(24)]);
var inst_31717 = (state_31800[(25)]);
var inst_31713 = (state_31800[(19)]);
var inst_31719 = (state_31800[(26)]);
var inst_31736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31738 = (function (){var all_files = inst_31713;
var res_SINGLEQUOTE_ = inst_31716;
var res = inst_31717;
var files_not_loaded = inst_31719;
var dependencies_that_loaded = inst_31721;
return (function (p__31737){
var map__31869 = p__31737;
var map__31869__$1 = (((((!((map__31869 == null))))?(((((map__31869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31869):map__31869);
var namespace = cljs.core.get.call(null,map__31869__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_31739 = cljs.core.map.call(null,inst_31738,inst_31717);
var inst_31740 = cljs.core.pr_str.call(null,inst_31739);
var inst_31741 = figwheel.client.utils.log.call(null,inst_31740);
var inst_31742 = (function (){var all_files = inst_31713;
var res_SINGLEQUOTE_ = inst_31716;
var res = inst_31717;
var files_not_loaded = inst_31719;
var dependencies_that_loaded = inst_31721;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_31743 = setTimeout(inst_31742,(10));
var state_31800__$1 = (function (){var statearr_31871 = state_31800;
(statearr_31871[(33)] = inst_31736);

(statearr_31871[(34)] = inst_31741);

return statearr_31871;
})();
var statearr_31872_31935 = state_31800__$1;
(statearr_31872_31935[(2)] = inst_31743);

(statearr_31872_31935[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (16))){
var state_31800__$1 = state_31800;
var statearr_31873_31936 = state_31800__$1;
(statearr_31873_31936[(2)] = reload_dependents);

(statearr_31873_31936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (38))){
var inst_31753 = (state_31800[(16)]);
var inst_31771 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31753);
var state_31800__$1 = state_31800;
var statearr_31874_31937 = state_31800__$1;
(statearr_31874_31937[(2)] = inst_31771);

(statearr_31874_31937[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (30))){
var state_31800__$1 = state_31800;
var statearr_31875_31938 = state_31800__$1;
(statearr_31875_31938[(2)] = null);

(statearr_31875_31938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (10))){
var inst_31673 = (state_31800[(22)]);
var inst_31675 = cljs.core.chunked_seq_QMARK_.call(null,inst_31673);
var state_31800__$1 = state_31800;
if(inst_31675){
var statearr_31876_31939 = state_31800__$1;
(statearr_31876_31939[(1)] = (13));

} else {
var statearr_31877_31940 = state_31800__$1;
(statearr_31877_31940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (18))){
var inst_31707 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
if(cljs.core.truth_(inst_31707)){
var statearr_31878_31941 = state_31800__$1;
(statearr_31878_31941[(1)] = (19));

} else {
var statearr_31879_31942 = state_31800__$1;
(statearr_31879_31942[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (42))){
var state_31800__$1 = state_31800;
var statearr_31880_31943 = state_31800__$1;
(statearr_31880_31943[(2)] = null);

(statearr_31880_31943[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (37))){
var inst_31766 = (state_31800[(2)]);
var state_31800__$1 = state_31800;
var statearr_31881_31944 = state_31800__$1;
(statearr_31881_31944[(2)] = inst_31766);

(statearr_31881_31944[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31801 === (8))){
var inst_31660 = (state_31800[(10)]);
var inst_31673 = (state_31800[(22)]);
var inst_31673__$1 = cljs.core.seq.call(null,inst_31660);
var state_31800__$1 = (function (){var statearr_31882 = state_31800;
(statearr_31882[(22)] = inst_31673__$1);

return statearr_31882;
})();
if(inst_31673__$1){
var statearr_31883_31945 = state_31800__$1;
(statearr_31883_31945[(1)] = (10));

} else {
var statearr_31884_31946 = state_31800__$1;
(statearr_31884_31946[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto____0 = (function (){
var statearr_31885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31885[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto__);

(statearr_31885[(1)] = (1));

return statearr_31885;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto____1 = (function (state_31800){
while(true){
var ret_value__27667__auto__ = (function (){try{while(true){
var result__27668__auto__ = switch__27665__auto__.call(null,state_31800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27668__auto__;
}
break;
}
}catch (e31886){if((e31886 instanceof Object)){
var ex__27669__auto__ = e31886;
var statearr_31887_31947 = state_31800;
(statearr_31887_31947[(5)] = ex__27669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31948 = state_31800;
state_31800 = G__31948;
continue;
} else {
return ret_value__27667__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto__ = function(state_31800){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto____1.call(this,state_31800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27666__auto__;
})()
})();
var state__27762__auto__ = (function (){var statearr_31888 = f__27761__auto__.call(null);
(statearr_31888[(6)] = c__27760__auto__);

return statearr_31888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27762__auto__);
}));

return c__27760__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31951,link){
var map__31952 = p__31951;
var map__31952__$1 = (((((!((map__31952 == null))))?(((((map__31952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31952):map__31952);
var file = cljs.core.get.call(null,map__31952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__31949_SHARP_,p2__31950_SHARP_){
if(cljs.core._EQ_.call(null,p1__31949_SHARP_,p2__31950_SHARP_)){
return p1__31949_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31955){
var map__31956 = p__31955;
var map__31956__$1 = (((((!((map__31956 == null))))?(((((map__31956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31956):map__31956);
var match_length = cljs.core.get.call(null,map__31956__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31956__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31954_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31954_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31958_SHARP_,p2__31959_SHARP_){
return cljs.core.assoc.call(null,p1__31958_SHARP_,cljs.core.get.call(null,p2__31959_SHARP_,key),p2__31959_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31960 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31960);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31960);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31961,p__31962){
var map__31963 = p__31961;
var map__31963__$1 = (((((!((map__31963 == null))))?(((((map__31963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31963):map__31963);
var on_cssload = cljs.core.get.call(null,map__31963__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31964 = p__31962;
var map__31964__$1 = (((((!((map__31964 == null))))?(((((map__31964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31964):map__31964);
var files_msg = map__31964__$1;
var files = cljs.core.get.call(null,map__31964__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1594268126264

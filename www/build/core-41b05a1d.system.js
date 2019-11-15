var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
System.register([], function (exports, module) {
    'use strict';
    return {
        execute: function () {
            var _this = this;
            var BUILD = { "allRenderFn": true, "cmpDidLoad": false, "cmpShouldUpdate": false, "cmpDidUnload": false, "cmpDidUpdate": false, "cmpDidRender": false, "cmpWillLoad": false, "cmpWillUpdate": false, "cmpWillRender": false, "connectedCallback": true, "disconnectedCallback": false, "element": false, "event": false, "hasRenderFn": true, "lifecycle": false, "asyncLoading": true, "hostListener": false, "hostListenerTargetWindow": false, "hostListenerTargetDocument": false, "hostListenerTargetBody": false, "hostListenerTargetParent": false, "hostListenerTarget": false, "member": true, "method": false, "mode": false, "noVdomRender": false, "observeAttribute": false, "prop": false, "propBoolean": false, "propNumber": false, "propString": false, "propMutable": false, "reflect": false, "scoped": false, "shadowDom": true, "slot": true, "slotRelocation": true, "state": false, "style": true, "svg": false, "updatable": true, "vdomAttribute": false, "vdomXlink": false, "vdomClass": false, "vdomFunctional": false, "vdomKey": false, "vdomListener": false, "vdomRef": false, "vdomRender": true, "vdomStyle": false, "vdomText": true, "watchCallback": false, "taskQueue": true, "lazyLoad": true, "hydrateServerSide": false, "cssVarShim": true, "initializeNextTick": true, "hydrateClientSide": false, "isDebug": false, "isDev": true, "devTools": true, "lifecycleDOMEvents": false, "profile": true, "hotModuleReplacement": true, "constructableCSS": false, "cssAnnotations": true };
            var NAMESPACE = 'demo';
            var queueCongestion = 0;
            var queuePending = false;
            var i = 0;
            var scopeId;
            var contentRef;
            var hostTagName;
            var useNativeShadowDom = false;
            var checkSlotFallbackVisibility = false;
            var checkSlotRelocate = false;
            var isSvgMode = false;
            var win = window;
            var doc = document;
            var H = HTMLElement;
            var plt = {
                $flags$: 0,
                $resourcesUrl$: '',
                jmp: function (h) { return h(); },
                raf: function (h) { return requestAnimationFrame(h); },
                ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
                rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
            };
            var supportsShadowDom = (BUILD.shadowDom) ? /*@__PURE__*/ (function () { return !!doc.documentElement.attachShadow; })() : false;
            var supportsListenerOptions = /*@__PURE__*/ (function () {
                var supportsListenerOptions = false;
                try {
                    doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
                        get: function () { supportsListenerOptions = true; }
                    }));
                }
                catch (e) { }
                return supportsListenerOptions;
            })();
            var supportsConstructibleStylesheets = BUILD.constructableCSS ? /*@__PURE__*/ (function () {
                try {
                    new CSSStyleSheet();
                    return true;
                }
                catch (e) { }
                return false;
            })() : false;
            var Context = {};
            var hostRefs = new WeakMap();
            var getHostRef = function (ref) { return hostRefs.get(ref); };
            var registerInstance = exports('r', function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); });
            var registerHost = function (elm) {
                var hostRef = {
                    $flags$: 0,
                    $hostElement$: elm,
                    $instanceValues$: new Map()
                };
                if (BUILD.isDev) {
                    hostRef.$renderCount$ = 0;
                }
                if (BUILD.method && BUILD.lazyLoad) {
                    hostRef.$onInstancePromise$ = new Promise(function (r) { return hostRef.$onInstanceResolve$ = r; });
                }
                if (BUILD.asyncLoading) {
                    hostRef.$onReadyPromise$ = new Promise(function (r) { return hostRef.$onReadyResolve$ = r; });
                    elm['s-p'] = [];
                    elm['s-rc'] = [];
                }
                return hostRefs.set(elm, hostRef);
            };
            var isMemberInElement = function (elm, memberName) { return memberName in elm; };
            var STENCIL_DEV_MODE = ['%c[STENCIL-DEV-MODE]', 'color:#4c47ff;font-weight: bold'];
            var consoleDevError = function () {
                var m = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    m[_i] = arguments[_i];
                }
                return console.error.apply(console, __spreadArrays(STENCIL_DEV_MODE, m));
            };
            var consoleDevWarn = function () {
                var m = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    m[_i] = arguments[_i];
                }
                return console.warn.apply(console, __spreadArrays(STENCIL_DEV_MODE, m));
            };
            var consoleDevInfo = function () {
                var m = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    m[_i] = arguments[_i];
                }
                return console.info.apply(console, __spreadArrays(STENCIL_DEV_MODE, m));
            };
            var consoleError = function (e) { return console.error(e); };
            var moduleCache = /*@__PURE__*/ new Map();
            var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
                // loadModuleImport
                var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
                var bundleId = ((BUILD.mode && typeof cmpMeta.$lazyBundleIds$ !== 'string')
                    ? cmpMeta.$lazyBundleIds$[hostRef.$modeName$]
                    : cmpMeta.$lazyBundleIds$);
                var module$1 = !BUILD.hotModuleReplacement ? moduleCache.get(bundleId) : false;
                if (module$1) {
                    return module$1[exportName];
                }
                return module.import(
                /* webpackInclude: /\.entry\.js$/ */
                /* webpackExclude: /\.system\.entry\.js$/ */
                /* webpackMode: "lazy" */
                "./" + bundleId + ".entry.js" + (BUILD.hotModuleReplacement && hmrVersionId ? '?s-hmr=' + hmrVersionId : '')).then(function (importedModule) {
                    if (!BUILD.hotModuleReplacement) {
                        moduleCache.set(bundleId, importedModule);
                    }
                    return importedModule[exportName];
                }, consoleError);
            };
            var styles = new Map();
            var queueDomReads = [];
            var queueDomWrites = [];
            var queueDomWritesLow = [];
            var queueTask = function (queue, write) { return function (cb) {
                queue.push(cb);
                if (!queuePending) {
                    queuePending = true;
                    if (write && plt.$flags$ & 4 /* queueSync */) {
                        nextTick(flush);
                    }
                    else {
                        plt.raf(flush);
                    }
                }
            }; };
            var consume = function (queue) {
                for (var i_1 = 0; i_1 < queue.length; i_1++) {
                    try {
                        queue[i_1](performance.now());
                    }
                    catch (e) {
                        consoleError(e);
                    }
                }
                queue.length = 0;
            };
            var consumeTimeout = function (queue, timeout) {
                var i = 0;
                var ts = 0;
                while (i < queue.length && (ts = performance.now()) < timeout) {
                    try {
                        queue[i++](ts);
                    }
                    catch (e) {
                        consoleError(e);
                    }
                }
                if (i === queue.length) {
                    queue.length = 0;
                }
                else if (i !== 0) {
                    queue.splice(0, i);
                }
            };
            var flush = function () {
                queueCongestion++;
                // always force a bunch of medium callbacks to run, but still have
                // a throttle on how many can run in a certain time
                // DOM READS!!!
                consume(queueDomReads);
                var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
                    ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
                    : Infinity;
                // DOM WRITES!!!
                consumeTimeout(queueDomWrites, timeout);
                consumeTimeout(queueDomWritesLow, timeout);
                if (queueDomWrites.length > 0) {
                    queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
                    queueDomWrites.length = 0;
                }
                if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
                    // still more to do yet, but we've run out of time
                    // let's let this thing cool off and try again in the next tick
                    plt.raf(flush);
                }
                else {
                    queueCongestion = 0;
                }
            };
            var nextTick = /*@__PURE__*/ function (cb) { return Promise.resolve().then(cb); };
            var readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
            var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
            var Build = {
                isDev: BUILD.isDev ? true : false,
                isBrowser: true
            };
            /**
             * Default style mode id
             */
            /**
             * Reusable empty obj/array
             * Don't add values to these!!
             */
            var EMPTY_OBJ = {};
            /**
             * Namespaces
             */
            var SVG_NS = 'http://www.w3.org/2000/svg';
            var HTML_NS = 'http://www.w3.org/1999/xhtml';
            var isDef = function (v) { return v != null; };
            var isComplexType = function (o) {
                // https://jsperf.com/typeof-fn-object/5
                o = typeof o;
                return o === 'object' || o === 'function';
            };
            var getDynamicImportFunction = function (namespace) {
                return "__sc_import_" + namespace.replace(/\s|-/g, '_');
            };
            var patchEsm = exports('a', function () {
                // @ts-ignore
                if (BUILD.cssVarShim && !(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
                    // @ts-ignore
                    return module.import('./css-shim-978387b1-45911f05.system.js').then(function () {
                        plt.$cssShim$ = win.__stencil_cssshim;
                        if (plt.$cssShim$) {
                            return plt.$cssShim$.initShim();
                        }
                    });
                }
                return Promise.resolve();
            });
            var patchBrowser = exports('p', function () { return __awaiter(_this, void 0, void 0, function () {
                var importMeta, regex, scriptElm, opts, resourcesUrl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (BUILD.isDev) {
                                consoleDevInfo('Stencil is running in the development mode.');
                            }
                            if (BUILD.cssVarShim) {
                                plt.$cssShim$ = win.__stencil_cssshim;
                            }
                            importMeta = module.meta.url;
                            regex = new RegExp("/" + NAMESPACE + "(\\.esm)?\\.js($|\\?|#)");
                            scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (regex.test(s.src) ||
                                s.getAttribute('data-stencil-namespace') === NAMESPACE); });
                            opts = scriptElm['data-opts'];
                            if (!(importMeta !== '')) return [3 /*break*/, 1];
                            return [2 /*return*/, Object.assign(Object.assign({}, opts), { resourcesUrl: new URL('.', importMeta).href })];
                        case 1:
                            resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                            patchDynamicImport(resourcesUrl.href);
                            if (!!window.customElements) return [3 /*break*/, 3];
                            // @ts-ignore
                            return [4 /*yield*/, module.import('./dom-96781eef-c3e269f7.system.js')];
                        case 2:
                            // @ts-ignore
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/, Object.assign(Object.assign({}, opts), { resourcesUrl: resourcesUrl.href })];
                    }
                });
            }); });
            var patchDynamicImport = function (base) {
                var importFunctionName = getDynamicImportFunction(NAMESPACE);
                try {
                    // There is a caching issue in V8, that breaks using import() in Function
                    // By generating a random string, we can workaround it
                    // Check https://bugs.chromium.org/p/v8/issues/detail?id=9558 for more info
                    win[importFunctionName] = new Function('w', "return import(w);//" + Math.random());
                }
                catch (e) {
                    var moduleMap_1 = new Map();
                    win[importFunctionName] = function (src) {
                        var url = new URL(src, base).href;
                        var mod = moduleMap_1.get(url);
                        if (!mod) {
                            var script_1 = doc.createElement('script');
                            script_1.type = 'module';
                            script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                            mod = new Promise(function (resolve) {
                                script_1.onload = function () {
                                    resolve(win[importFunctionName].m);
                                    script_1.remove();
                                };
                            });
                            moduleMap_1.set(url, mod);
                            doc.head.appendChild(script_1);
                        }
                        return mod;
                    };
                }
            };
            var parsePropertyValue = function (propValue, propType) {
                // ensure this value is of the correct prop type
                if (propValue != null && !isComplexType(propValue)) {
                    if (BUILD.propBoolean && propType & 4 /* Boolean */) {
                        // per the HTML spec, any string value means it is a boolean true value
                        // but we'll cheat here and say that the string "false" is the boolean false
                        return (propValue === 'false' ? false : propValue === '' || !!propValue);
                    }
                    if (BUILD.propNumber && propType & 2 /* Number */) {
                        // force it to be a number
                        return parseFloat(propValue);
                    }
                    if (BUILD.propString && propType & 1 /* String */) {
                        // could have been passed as a number or boolean
                        // but we still want it as a string
                        return String(propValue);
                    }
                    // redundant return here for better minification
                    return propValue;
                }
                // not sure exactly what type we want
                // so no need to change to a different type
                return propValue;
            };
            var CONTENT_REF_ID = 'r';
            var ORG_LOCATION_ID = 'o';
            var SLOT_NODE_ID = 's';
            var TEXT_NODE_ID = 't';
            var HYDRATED_CLASS = 'hydrated';
            var HYDRATE_ID = 's-id';
            var HYDRATE_CHILD_ID = 'c-id';
            var XLINK_NS = 'http://www.w3.org/1999/xlink';
            var createTime = function (fnName, tagName) {
                if (tagName === void 0) { tagName = ''; }
                if (BUILD.profile) {
                    var key_1 = "st:" + fnName + ":" + tagName + ":" + i++;
                    // Start
                    performance.mark(key_1);
                    // End
                    return function () { return performance.measure("[Stencil] " + fnName + "() <" + tagName + ">", key_1); };
                }
                else {
                    return function () { return; };
                }
            };
            var uniqueTime = function (key, measureText) {
                if (BUILD.profile) {
                    if (performance.getEntriesByName(key).length === 0) {
                        performance.mark(key);
                    }
                    return function () {
                        if (performance.getEntriesByName(measureText).length === 0) {
                            performance.measure(measureText, key);
                        }
                    };
                }
                else {
                    return function () { return; };
                }
            };
            var inspect = function (ref) {
                var _a;
                var hostRef = getHostRef(ref);
                if (!hostRef) {
                    return undefined;
                }
                var flags = hostRef.$flags$;
                var hostElement = hostRef.$hostElement$;
                return _a = {
                        renderCount: hostRef.$renderCount$,
                        flags: {
                            hasRendered: !!(flags & 2 /* hasRendered */),
                            hasConnected: !!(flags & 1 /* hasConnected */),
                            isWaitingForChildren: !!(flags & 4 /* isWaitingForChildren */),
                            isConstructingInstance: !!(flags & 8 /* isConstructingInstance */),
                            isQueuedForUpdate: !!(flags & 16 /* isQueuedForUpdate */),
                            hasInitializedComponent: !!(flags & 32 /* hasInitializedComponent */),
                            hasLoadedComponent: !!(flags & 64 /* hasLoadedComponent */),
                            isWatchReady: !!(flags & 128 /* isWatchReady */),
                            isListenReady: !!(flags & 256 /* isListenReady */),
                            needsRerender: !!(flags & 512 /* needsRerender */),
                        },
                        instanceValues: hostRef.$instanceValues$,
                        ancestorComponent: hostRef.$ancestorComponent$,
                        hostElement: hostElement,
                        lazyInstance: hostRef.$lazyInstance$,
                        vnode: hostRef.$vnode$,
                        modeName: hostRef.$modeName$,
                        onReadyPromise: hostRef.$onReadyPromise$,
                        onReadyResolve: hostRef.$onReadyResolve$,
                        onInstancePromise: hostRef.$onInstancePromise$,
                        onInstanceResolve: hostRef.$onInstanceResolve$,
                        onRenderResolve: hostRef.$onRenderResolve$,
                        queuedListeners: hostRef.$queuedListeners$,
                        rmListeners: hostRef.$rmListeners$
                    },
                    _a['s-id'] = hostElement['s-id'],
                    _a['s-cr'] = hostElement['s-cr'],
                    _a['s-lr'] = hostElement['s-lr'],
                    _a['s-p'] = hostElement['s-p'],
                    _a['s-rc'] = hostElement['s-rc'],
                    _a['s-sc'] = hostElement['s-sc'],
                    _a;
            };
            var installDevTools = function () {
                if (BUILD.devTools) {
                    var stencil = win.stencil = win.stencil || {};
                    var originalInspect_1 = stencil.inspect;
                    stencil.inspect = function (ref) {
                        var result = inspect(ref);
                        if (!result && typeof originalInspect_1 === 'function') {
                            result = originalInspect_1(ref);
                        }
                        return result;
                    };
                }
            };
            var rootAppliedStyles = new WeakMap();
            var registerStyle = function (scopeId, cssText, allowCS) {
                var style = styles.get(scopeId);
                if (supportsConstructibleStylesheets && allowCS) {
                    style = (style || new CSSStyleSheet());
                    style.replace(cssText);
                }
                else {
                    style = cssText;
                }
                styles.set(scopeId, style);
            };
            var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
                var scopeId = BUILD.mode ? getScopeId(cmpMeta.$tagName$, mode) : getScopeId(cmpMeta.$tagName$);
                var style = styles.get(scopeId);
                // if an element is NOT connected then getRootNode() will return the wrong root node
                // so the fallback is to always use the document for the root node in those cases
                styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
                if (BUILD.mode && !style) {
                    scopeId = getScopeId(cmpMeta.$tagName$);
                    style = styles.get(scopeId);
                }
                if (style) {
                    if (typeof style === 'string') {
                        styleContainerNode = styleContainerNode.head || styleContainerNode;
                        var appliedStyles = rootAppliedStyles.get(styleContainerNode);
                        var styleElm = void 0;
                        if (!appliedStyles) {
                            rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
                        }
                        if (!appliedStyles.has(scopeId)) {
                            if (BUILD.hydrateClientSide && styleContainerNode.host && (styleElm = styleContainerNode.firstElementChild) && styleElm.tagName === 'STYLE') {
                                // This is only happening on native shadow-dom, do not needs CSS var shim
                                styleElm.innerHTML = style;
                            }
                            else {
                                if (BUILD.cssVarShim && plt.$cssShim$) {
                                    styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                                    var newScopeId = styleElm['s-sc'];
                                    if (newScopeId) {
                                        scopeId = newScopeId;
                                        // we don't want to add this styleID to the appliedStyles Set
                                        // since the cssVarShim might need to apply several different
                                        // stylesheets for the same component
                                        appliedStyles = null;
                                    }
                                }
                                else {
                                    styleElm = doc.createElement('style');
                                    styleElm.innerHTML = style;
                                }
                                if (BUILD.hydrateServerSide || BUILD.hotModuleReplacement) {
                                    styleElm.setAttribute(HYDRATE_ID, scopeId);
                                }
                                styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                            }
                            if (appliedStyles) {
                                appliedStyles.add(scopeId);
                            }
                        }
                    }
                    else if (BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
                        styleContainerNode.adoptedStyleSheets = __spreadArrays(styleContainerNode.adoptedStyleSheets, [
                            style
                        ]);
                    }
                }
                return scopeId;
            };
            var attachStyles = function (elm, cmpMeta, mode) {
                var endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
                var scopeId = addStyle((BUILD.shadowDom && supportsShadowDom && elm.shadowRoot)
                    ? elm.shadowRoot
                    : elm.getRootNode(), cmpMeta, mode, elm);
                if ((BUILD.shadowDom || BUILD.scoped) && BUILD.cssAnnotations && cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
                    // only required when we're NOT using native shadow dom (slot)
                    // or this browser doesn't support native shadow dom
                    // and this host element was NOT created with SSR
                    // let's pick out the inner content for slot projection
                    // create a node to represent where the original
                    // content was first placed, which is useful later on
                    // DOM WRITE!!
                    elm['s-sc'] = scopeId;
                    elm.classList.add(scopeId + '-h');
                    if (BUILD.scoped && cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
                        elm.classList.add(scopeId + '-s');
                    }
                }
                endAttachStyles();
            };
            var getScopeId = function (tagName, mode) { return 'sc-' + ((BUILD.mode && mode) ? tagName + '-' + mode : tagName); };
            var convertScopedToShadow = function (css) { return css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'); };
            /**
             * Production h() function based on Preact by
             * Jason Miller (@developit)
             * Licensed under the MIT License
             * https://github.com/developit/preact/blob/master/LICENSE
             *
             * Modified for Stencil's compiler and vdom
             */
            // const stack: any[] = [];
            // export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
            // export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
            var h = exports('h', function (nodeName, vnodeData) {
                var children = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    children[_i - 2] = arguments[_i];
                }
                var child = null;
                var key = null;
                var slotName = null;
                var simple = false;
                var lastSimple = false;
                var vNodeChildren = [];
                var walk = function (c) {
                    for (var i_2 = 0; i_2 < c.length; i_2++) {
                        child = c[i_2];
                        if (Array.isArray(child)) {
                            walk(child);
                        }
                        else if (child != null && typeof child !== 'boolean') {
                            if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                                child = String(child);
                            }
                            else if (BUILD.isDev && child.$flags$ === undefined) {
                                consoleDevError("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects.");
                            }
                            if (simple && lastSimple) {
                                // If the previous child was simple (string), we merge both
                                vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                            }
                            else {
                                // Append a new vNode, if it's text, we create a text vNode
                                vNodeChildren.push(simple ? newVNode(null, child) : child);
                            }
                            lastSimple = simple;
                        }
                    }
                };
                walk(children);
                if (vnodeData) {
                    // normalize class / classname attributes
                    if (BUILD.vdomKey && vnodeData.key) {
                        key = vnodeData.key;
                    }
                    if (BUILD.slotRelocation && vnodeData.name) {
                        slotName = vnodeData.name;
                    }
                    if (BUILD.vdomClass) {
                        var classData_1 = vnodeData.className || vnodeData.class;
                        if (classData_1) {
                            vnodeData.class = typeof classData_1 !== 'object'
                                ? classData_1
                                : Object.keys(classData_1)
                                    .filter(function (k) { return classData_1[k]; })
                                    .join(' ');
                        }
                    }
                }
                if (BUILD.isDev && vNodeChildren.some(isHost)) {
                    consoleDevError("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function.");
                }
                if (BUILD.vdomFunctional && typeof nodeName === 'function') {
                    // nodeName is a functional component
                    return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
                }
                var vnode = newVNode(nodeName, null);
                vnode.$attrs$ = vnodeData;
                if (vNodeChildren.length > 0) {
                    vnode.$children$ = vNodeChildren;
                }
                if (BUILD.vdomKey) {
                    vnode.$key$ = key;
                }
                if (BUILD.slotRelocation) {
                    vnode.$name$ = slotName;
                }
                return vnode;
            });
            var newVNode = function (tag, text) {
                var vnode = {
                    $flags$: 0,
                    $tag$: tag,
                    $text$: text,
                    $elm$: null,
                    $children$: null
                };
                if (BUILD.vdomAttribute) {
                    vnode.$attrs$ = null;
                }
                if (BUILD.vdomKey) {
                    vnode.$key$ = null;
                }
                if (BUILD.slotRelocation) {
                    vnode.$name$ = null;
                }
                return vnode;
            };
            var Host = {};
            var isHost = function (node) { return node && node.$tag$ === Host; };
            var vdomFnUtils = {
                'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
                'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
            };
            var convertToPublic = function (node) {
                return {
                    vattrs: node.$attrs$,
                    vchildren: node.$children$,
                    vkey: node.$key$,
                    vname: node.$name$,
                    vtag: node.$tag$,
                    vtext: node.$text$
                };
            };
            var convertToPrivate = function (node) {
                var vnode = newVNode(node.vtag, node.vtext);
                vnode.$attrs$ = node.vattrs;
                vnode.$children$ = node.vchildren;
                vnode.$key$ = node.vkey;
                vnode.$name$ = node.vname;
                return vnode;
            };
            /**
             * Production setAccessor() function based on Preact by
             * Jason Miller (@developit)
             * Licensed under the MIT License
             * https://github.com/developit/preact/blob/master/LICENSE
             *
             * Modified for Stencil's compiler and vdom
             */
            var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
                if (oldValue === newValue) {
                    return;
                }
                var isProp = isMemberInElement(elm, memberName);
                var ln = memberName.toLowerCase();
                if (BUILD.vdomClass && memberName === 'class') {
                    var classList = elm.classList;
                    var oldClasses_1 = parseClassList(oldValue);
                    var newClasses_1 = parseClassList(newValue);
                    classList.remove.apply(classList, oldClasses_1.filter(function (c) { return c && !newClasses_1.includes(c); }));
                    classList.add.apply(classList, newClasses_1.filter(function (c) { return c && !oldClasses_1.includes(c); }));
                }
                else if (BUILD.vdomStyle && memberName === 'style') {
                    // update style attribute, css properties and values
                    if (BUILD.updatable) {
                        for (var prop in oldValue) {
                            if (!newValue || newValue[prop] == null) {
                                if (!BUILD.hydrateServerSide && prop.includes('-')) {
                                    elm.style.removeProperty(prop);
                                }
                                else {
                                    elm.style[prop] = '';
                                }
                            }
                        }
                    }
                    for (var prop in newValue) {
                        if (!oldValue || newValue[prop] !== oldValue[prop]) {
                            if (!BUILD.hydrateServerSide && prop.includes('-')) {
                                elm.style.setProperty(prop, newValue[prop]);
                            }
                            else {
                                elm.style[prop] = newValue[prop];
                            }
                        }
                    }
                }
                else if (BUILD.vdomKey && memberName === 'key')
                    ;
                else if (BUILD.vdomRef && memberName === 'ref') {
                    // minifier will clean this up
                    if (newValue) {
                        newValue(elm);
                    }
                }
                else if (BUILD.vdomListener && !isProp && memberName[0] === 'o' && memberName[1] === 'n') {
                    // Event Handlers
                    // so if the member name starts with "on" and the 3rd characters is
                    // a capital letter, and it's not already a member on the element,
                    // then we're assuming it's an event listener
                    if (memberName[2] === '-') {
                        // on- prefixed events
                        // allows to be explicit about the dom event to listen without any magic
                        // under the hood:
                        // <my-cmp on-click> // listens for "click"
                        // <my-cmp on-Click> // listens for "Click"
                        // <my-cmp on-ionChange> // listens for "ionChange"
                        // <my-cmp on-EVENTS> // listens for "EVENTS"
                        memberName = memberName.slice(3);
                    }
                    else if (isMemberInElement(win, ln)) {
                        // standard event
                        // the JSX attribute could have been "onMouseOver" and the
                        // member name "onmouseover" is on the window's prototype
                        // so let's add the listener "mouseover", which is all lowercased
                        memberName = ln.slice(2);
                    }
                    else {
                        // custom event
                        // the JSX attribute could have been "onMyCustomEvent"
                        // so let's trim off the "on" prefix and lowercase the first character
                        // and add the listener "myCustomEvent"
                        // except for the first character, we keep the event name case
                        memberName = ln[2] + memberName.slice(3);
                    }
                    if (oldValue) {
                        plt.rel(elm, memberName, oldValue, false);
                    }
                    if (newValue) {
                        plt.ael(elm, memberName, newValue, false);
                    }
                }
                else {
                    // Set property if it exists and it's not a SVG
                    var isComplex = isComplexType(newValue);
                    if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                        try {
                            if (!elm.tagName.includes('-')) {
                                var n = newValue == null ? '' : newValue;
                                // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                                if (memberName === 'list') {
                                    isProp = false;
                                    // tslint:disable-next-line: triple-equals
                                }
                                else if (oldValue == null || elm[memberName] != n) {
                                    elm[memberName] = n;
                                }
                            }
                            else {
                                elm[memberName] = newValue;
                            }
                        }
                        catch (e) { }
                    }
                    /**
                     * Need to manually update attribute if:
                     * - memberName is not an attribute
                     * - if we are rendering the host element in order to reflect attribute
                     * - if it's a SVG, since properties might not work in <svg>
                     * - if the newValue is null/undefined or 'false'.
                     */
                    var xlink = false;
                    if (BUILD.vdomXlink) {
                        if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                            memberName = ln;
                            xlink = true;
                        }
                    }
                    if (newValue == null || newValue === false) {
                        if (BUILD.vdomXlink && xlink) {
                            elm.removeAttributeNS(XLINK_NS, memberName);
                        }
                        else {
                            elm.removeAttribute(memberName);
                        }
                    }
                    else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
                        newValue = newValue === true ? '' : newValue;
                        if (BUILD.vdomXlink && xlink) {
                            elm.setAttributeNS(XLINK_NS, memberName, newValue);
                        }
                        else {
                            elm.setAttribute(memberName, newValue);
                        }
                    }
                }
            };
            var parseClassListRegex = /\s/;
            var parseClassList = function (value) { return (!value) ? [] : value.split(parseClassListRegex); };
            var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
                // if the element passed in is a shadow root, which is a document fragment
                // then we want to be adding attrs/props to the shadow root's "host" element
                // if it's not a shadow root, then we add attrs/props to the same element
                var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
                var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
                var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
                if (BUILD.updatable) {
                    // remove attributes no longer present on the vnode by setting them to undefined
                    for (memberName in oldVnodeAttrs) {
                        if (!(memberName in newVnodeAttrs)) {
                            setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
                        }
                    }
                }
                // add new & update changed attributes
                for (memberName in newVnodeAttrs) {
                    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
                }
            };
            var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
                // tslint:disable-next-line: prefer-const
                var newVNode = newParentVNode.$children$[childIndex];
                var i = 0;
                var elm;
                var childNode;
                var oldVNode;
                if (BUILD.slotRelocation && !useNativeShadowDom) {
                    // remember for later we need to check to relocate nodes
                    checkSlotRelocate = true;
                    if (newVNode.$tag$ === 'slot') {
                        if (scopeId) {
                            // scoped css needs to add its scoped id to the parent element
                            parentElm.classList.add(scopeId + '-s');
                        }
                        newVNode.$flags$ |= (newVNode.$children$)
                            // slot element has fallback content
                            // still create an element that "mocks" the slot element
                            ? 2 /* isSlotFallback */
                            // slot element does not have fallback content
                            // create an html comment we'll use to always reference
                            // where actual slot content should sit next to
                            : 1 /* isSlotReference */;
                    }
                }
                if (BUILD.isDev && newVNode.$elm$) {
                    consoleError("The JSX " + (newVNode.$text$ !== null ? "\"" + newVNode.$text$ + "\" text" : "\"" + newVNode.$tag$ + "\" element") + " node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes");
                }
                if (BUILD.vdomText && newVNode.$text$ !== null) {
                    // create text node
                    elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
                }
                else if (BUILD.slotRelocation && newVNode.$flags$ & 1 /* isSlotReference */) {
                    // create a slot reference node
                    elm = newVNode.$elm$ = (BUILD.isDebug || BUILD.hydrateServerSide) ? doc.createComment("slot-reference:" + hostTagName.toLowerCase()) : doc.createTextNode('');
                }
                else {
                    if (BUILD.svg && !isSvgMode) {
                        isSvgMode = newVNode.$tag$ === 'svg';
                    }
                    // create element
                    elm = newVNode.$elm$ = ((BUILD.svg)
                        ? doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, (BUILD.slotRelocation && newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$)
                        : doc.createElement((BUILD.slotRelocation && newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
                    if (BUILD.svg && isSvgMode && newVNode.$tag$ === 'foreignObject') {
                        isSvgMode = false;
                    }
                    // add css classes, attrs, props, listeners, etc.
                    if (BUILD.vdomAttribute) {
                        updateElement(null, newVNode, isSvgMode);
                    }
                    if ((BUILD.shadowDom || BUILD.scoped) && isDef(scopeId) && elm['s-si'] !== scopeId) {
                        // if there is a scopeId and this is the initial render
                        // then let's add the scopeId as a css class
                        elm.classList.add((elm['s-si'] = scopeId));
                    }
                    if (newVNode.$children$) {
                        for (i = 0; i < newVNode.$children$.length; ++i) {
                            // create the node
                            childNode = createElm(oldParentVNode, newVNode, i, elm);
                            // return node could have been null
                            if (childNode) {
                                // append our new node
                                elm.appendChild(childNode);
                            }
                        }
                    }
                    if (BUILD.svg) {
                        if (newVNode.$tag$ === 'svg') {
                            // Only reset the SVG context when we're exiting <svg> element
                            isSvgMode = false;
                        }
                        else if (elm.tagName === 'foreignObject') {
                            // Reenter SVG context when we're exiting <foreignObject> element
                            isSvgMode = true;
                        }
                    }
                }
                if (BUILD.slotRelocation) {
                    elm['s-hn'] = hostTagName;
                    if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
                        // remember the content reference comment
                        elm['s-sr'] = true;
                        // remember the content reference comment
                        elm['s-cr'] = contentRef;
                        // remember the slot name, or empty string for default slot
                        elm['s-sn'] = newVNode.$name$ || '';
                        // check if we've got an old vnode for this slot
                        oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
                        if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                            // we've got an old slot vnode and the wrapper is being replaced
                            // so let's move the old slot content back to it's original location
                            putBackInOriginalLocation(oldParentVNode.$elm$, false);
                        }
                    }
                }
                return elm;
            };
            var putBackInOriginalLocation = function (parentElm, recursive) {
                plt.$flags$ |= 1 /* isTmpDisconnected */;
                var oldSlotChildNodes = parentElm.childNodes;
                for (var i_3 = oldSlotChildNodes.length - 1; i_3 >= 0; i_3--) {
                    var childNode = oldSlotChildNodes[i_3];
                    if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
                        // // this child node in the old element is from another component
                        // // remove this node from the old slot's parent
                        // childNode.remove();
                        // and relocate it back to it's original location
                        parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
                        // remove the old original location comment entirely
                        // later on the patch function will know what to do
                        // and move this to the correct spot in need be
                        childNode['s-ol'].remove();
                        childNode['s-ol'] = undefined;
                        checkSlotRelocate = true;
                    }
                    if (recursive) {
                        putBackInOriginalLocation(childNode, recursive);
                    }
                }
                plt.$flags$ &= ~1 /* isTmpDisconnected */;
            };
            var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
                var containerElm = ((BUILD.slotRelocation && parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
                var childNode;
                if (BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
                    containerElm = containerElm.shadowRoot;
                }
                for (; startIdx <= endIdx; ++startIdx) {
                    if (vnodes[startIdx]) {
                        childNode = createElm(null, parentVNode, startIdx, parentElm);
                        if (childNode) {
                            vnodes[startIdx].$elm$ = childNode;
                            containerElm.insertBefore(childNode, BUILD.slotRelocation ? referenceNode(before) : before);
                        }
                    }
                }
            };
            var removeVnodes = function (vnodes, startIdx, endIdx, vnode, elm) {
                for (; startIdx <= endIdx; ++startIdx) {
                    if (vnode = vnodes[startIdx]) {
                        elm = vnode.$elm$;
                        callNodeRefs(vnode);
                        if (BUILD.slotRelocation) {
                            // we're removing this element
                            // so it's possible we need to show slot fallback content now
                            checkSlotFallbackVisibility = true;
                            if (elm['s-ol']) {
                                // remove the original location comment
                                elm['s-ol'].remove();
                            }
                            else {
                                // it's possible that child nodes of the node
                                // that's being removed are slot nodes
                                putBackInOriginalLocation(elm, true);
                            }
                        }
                        // remove the vnode's element from the dom
                        elm.remove();
                    }
                }
            };
            var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
                var oldStartIdx = 0;
                var newStartIdx = 0;
                var idxInOld = 0;
                var i = 0;
                var oldEndIdx = oldCh.length - 1;
                var oldStartVnode = oldCh[0];
                var oldEndVnode = oldCh[oldEndIdx];
                var newEndIdx = newCh.length - 1;
                var newStartVnode = newCh[0];
                var newEndVnode = newCh[newEndIdx];
                var node;
                var elmToMove;
                while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                    if (oldStartVnode == null) {
                        // Vnode might have been moved left
                        oldStartVnode = oldCh[++oldStartIdx];
                    }
                    else if (oldEndVnode == null) {
                        oldEndVnode = oldCh[--oldEndIdx];
                    }
                    else if (newStartVnode == null) {
                        newStartVnode = newCh[++newStartIdx];
                    }
                    else if (newEndVnode == null) {
                        newEndVnode = newCh[--newEndIdx];
                    }
                    else if (isSameVnode(oldStartVnode, newStartVnode)) {
                        patch(oldStartVnode, newStartVnode);
                        oldStartVnode = oldCh[++oldStartIdx];
                        newStartVnode = newCh[++newStartIdx];
                    }
                    else if (isSameVnode(oldEndVnode, newEndVnode)) {
                        patch(oldEndVnode, newEndVnode);
                        oldEndVnode = oldCh[--oldEndIdx];
                        newEndVnode = newCh[--newEndIdx];
                    }
                    else if (isSameVnode(oldStartVnode, newEndVnode)) {
                        // Vnode moved right
                        if (BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                            putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
                        }
                        patch(oldStartVnode, newEndVnode);
                        parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
                        oldStartVnode = oldCh[++oldStartIdx];
                        newEndVnode = newCh[--newEndIdx];
                    }
                    else if (isSameVnode(oldEndVnode, newStartVnode)) {
                        // Vnode moved left
                        if (BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                            putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
                        }
                        patch(oldEndVnode, newStartVnode);
                        parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
                        oldEndVnode = oldCh[--oldEndIdx];
                        newStartVnode = newCh[++newStartIdx];
                    }
                    else {
                        // createKeyToOldIdx
                        idxInOld = -1;
                        if (BUILD.vdomKey) {
                            for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                                if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                                    idxInOld = i;
                                    break;
                                }
                            }
                        }
                        if (BUILD.vdomKey && idxInOld >= 0) {
                            elmToMove = oldCh[idxInOld];
                            if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                                node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                            }
                            else {
                                patch(elmToMove, newStartVnode);
                                oldCh[idxInOld] = undefined;
                                node = elmToMove.$elm$;
                            }
                            newStartVnode = newCh[++newStartIdx];
                        }
                        else {
                            // new element
                            node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                            newStartVnode = newCh[++newStartIdx];
                        }
                        if (node) {
                            if (BUILD.slotRelocation) {
                                parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                            }
                            else {
                                oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                            }
                        }
                    }
                }
                if (oldStartIdx > oldEndIdx) {
                    addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
                }
                else if (BUILD.updatable && newStartIdx > newEndIdx) {
                    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
                }
            };
            var isSameVnode = function (vnode1, vnode2) {
                // compare if two vnode to see if they're "technically" the same
                // need to have the same element tag, and same key to be the same
                if (vnode1.$tag$ === vnode2.$tag$) {
                    if (BUILD.slotRelocation && vnode1.$tag$ === 'slot') {
                        return vnode1.$name$ === vnode2.$name$;
                    }
                    if (BUILD.vdomKey) {
                        return vnode1.$key$ === vnode2.$key$;
                    }
                    return true;
                }
                return false;
            };
            var referenceNode = function (node) {
                // this node was relocated to a new location in the dom
                // because of some other component's slot
                // but we still have an html comment in place of where
                // it's original location was according to it's original vdom
                return (node && node['s-ol']) || node;
            };
            var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
            var patch = function (oldVNode, newVNode) {
                var elm = newVNode.$elm$ = oldVNode.$elm$;
                var oldChildren = oldVNode.$children$;
                var newChildren = newVNode.$children$;
                var defaultHolder;
                if (BUILD.svg) {
                    // test if we're rendering an svg element, or still rendering nodes inside of one
                    // only add this to the when the compiler sees we're using an svg somewhere
                    isSvgMode = elm && elm.parentNode &&
                        elm.ownerSVGElement !== undefined;
                    isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
                }
                if (!BUILD.vdomText || newVNode.$text$ === null) {
                    // element node
                    if (BUILD.vdomAttribute) {
                        if (BUILD.slot && newVNode.$tag$ === 'slot')
                            ;
                        else {
                            // either this is the first render of an element OR it's an update
                            // AND we already know it's possible it could have changed
                            // this updates the element's css classes, attrs, props, listeners, etc.
                            updateElement(oldVNode, newVNode, isSvgMode);
                        }
                    }
                    if (BUILD.updatable && oldChildren !== null && newChildren !== null) {
                        // looks like there's child vnodes for both the old and new vnodes
                        updateChildren(elm, oldChildren, newVNode, newChildren);
                    }
                    else if (newChildren !== null) {
                        // no old child vnodes, but there are new child vnodes to add
                        if (BUILD.updatable && BUILD.vdomText && oldVNode.$text$ !== null) {
                            // the old vnode was text, so be sure to clear it out
                            elm.textContent = '';
                        }
                        // add the new vnode children
                        addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
                    }
                    else if (BUILD.updatable && oldChildren !== null) {
                        // no new child vnodes, but there are old child vnodes to remove
                        removeVnodes(oldChildren, 0, oldChildren.length - 1);
                    }
                }
                else if (BUILD.vdomText && BUILD.slotRelocation && (defaultHolder = elm['s-cr'])) {
                    // this element has slotted content
                    defaultHolder.parentNode.textContent = newVNode.$text$;
                }
                else if (BUILD.vdomText && oldVNode.$text$ !== newVNode.$text$) {
                    // update the text content for the text only vnode
                    // and also only if the text is different than before
                    elm.data = newVNode.$text$;
                }
                if (BUILD.svg && isSvgMode && newVNode.$tag$ === 'svg') {
                    isSvgMode = false;
                }
            };
            var updateFallbackSlotVisibility = function (elm) {
                // tslint:disable-next-line: prefer-const
                var childNodes = elm.childNodes;
                var childNode;
                var i;
                var ilen;
                var j;
                var slotNameAttr;
                var nodeType;
                for (i = 0, ilen = childNodes.length; i < ilen; i++) {
                    childNode = childNodes[i];
                    if (childNode.nodeType === 1 /* ElementNode */) {
                        if (childNode['s-sr']) {
                            // this is a slot fallback node
                            // get the slot name for this slot reference node
                            slotNameAttr = childNode['s-sn'];
                            // by default always show a fallback slot node
                            // then hide it if there are other slots in the light dom
                            childNode.hidden = false;
                            for (j = 0; j < ilen; j++) {
                                if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                                    // this sibling node is from a different component
                                    nodeType = childNodes[j].nodeType;
                                    if (slotNameAttr !== '') {
                                        // this is a named fallback slot node
                                        if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                            childNode.hidden = true;
                                            break;
                                        }
                                    }
                                    else {
                                        // this is a default fallback slot node
                                        // any element or text node (with content)
                                        // should hide the default fallback slot node
                                        if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                            childNode.hidden = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        // keep drilling down
                        updateFallbackSlotVisibility(childNode);
                    }
                }
            };
            var relocateNodes = [];
            var relocateSlotContent = function (elm) {
                // tslint:disable-next-line: prefer-const
                var childNodes = elm.childNodes;
                var ilen = childNodes.length;
                var i = 0;
                var j = 0;
                var nodeType = 0;
                var childNode;
                var node;
                var hostContentNodes;
                var slotNameAttr;
                for (ilen = childNodes.length; i < ilen; i++) {
                    childNode = childNodes[i];
                    if (childNode['s-sr'] && (node = childNode['s-cr'])) {
                        // first got the content reference comment node
                        // then we got it's parent, which is where all the host content is in now
                        hostContentNodes = node.parentNode.childNodes;
                        slotNameAttr = childNode['s-sn'];
                        for (j = hostContentNodes.length - 1; j >= 0; j--) {
                            node = hostContentNodes[j];
                            if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                                // let's do some relocating to its new home
                                // but never relocate a content reference node
                                // that is suppose to always represent the original content location
                                nodeType = node.nodeType;
                                if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                                    (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                                    (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                                    // it's possible we've already decided to relocate this node
                                    if (!relocateNodes.some(function (r) { return r.$nodeToRelocate$ === node; })) {
                                        // made some changes to slots
                                        // let's make sure we also double check
                                        // fallbacks are correctly hidden or shown
                                        checkSlotFallbackVisibility = true;
                                        node['s-sn'] = slotNameAttr;
                                        // add to our list of nodes to relocate
                                        relocateNodes.push({
                                            $slotRefNode$: childNode,
                                            $nodeToRelocate$: node
                                        });
                                    }
                                }
                            }
                        }
                    }
                    if (childNode.nodeType === 1 /* ElementNode */) {
                        relocateSlotContent(childNode);
                    }
                }
            };
            var callNodeRefs = function (vNode) {
                if (BUILD.vdomRef) {
                    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
                    vNode.$children$ && vNode.$children$.forEach(callNodeRefs);
                }
            };
            var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
                hostTagName = hostElm.tagName;
                // <Host> runtime check
                if (BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
                    throw new Error("The <Host> must be the single root component.\nLooks like the render() function of \"" + hostTagName.toLowerCase() + "\" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n");
                }
                var oldVNode = hostRef.$vnode$ || newVNode(null, null);
                var rootVnode = isHost(renderFnResults)
                    ? renderFnResults
                    : h(null, null, renderFnResults);
                if (BUILD.reflect && cmpMeta.$attrsToReflect$) {
                    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
                    cmpMeta.$attrsToReflect$.forEach(function (_a) {
                        var propName = _a[0], attribute = _a[1];
                        return rootVnode.$attrs$[attribute] = hostElm[propName];
                    });
                }
                rootVnode.$tag$ = null;
                rootVnode.$flags$ |= 4 /* isHost */;
                hostRef.$vnode$ = rootVnode;
                rootVnode.$elm$ = oldVNode.$elm$ = (BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm);
                if (BUILD.scoped || BUILD.shadowDom) {
                    scopeId = hostElm['s-sc'];
                }
                if (BUILD.slotRelocation) {
                    contentRef = hostElm['s-cr'];
                    useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
                    // always reset
                    checkSlotFallbackVisibility = false;
                }
                // synchronous patch
                patch(oldVNode, rootVnode);
                if (BUILD.slotRelocation) {
                    if (checkSlotRelocate) {
                        relocateSlotContent(rootVnode.$elm$);
                        for (var i_4 = 0; i_4 < relocateNodes.length; i_4++) {
                            var relocateNode = relocateNodes[i_4];
                            if (!relocateNode.$nodeToRelocate$['s-ol']) {
                                // add a reference node marking this node's original location
                                // keep a reference to this node for later lookups
                                var orgLocationNode = (BUILD.isDebug || BUILD.hydrateServerSide)
                                    ? doc.createComment("org-loc")
                                    : doc.createTextNode('');
                                orgLocationNode['s-nr'] = relocateNode.$nodeToRelocate$;
                                relocateNode.$nodeToRelocate$.parentNode.insertBefore((relocateNode.$nodeToRelocate$['s-ol'] = orgLocationNode), relocateNode.$nodeToRelocate$);
                            }
                        }
                        // while we're moving nodes around existing nodes, temporarily disable
                        // the disconnectCallback from working
                        plt.$flags$ |= 1 /* isTmpDisconnected */;
                        for (var i_5 = 0; i_5 < relocateNodes.length; i_5++) {
                            var relocateNode = relocateNodes[i_5];
                            // by default we're just going to insert it directly
                            // after the slot reference node
                            var parentNodeRef = relocateNode.$slotRefNode$.parentNode;
                            var insertBeforeNode = relocateNode.$slotRefNode$.nextSibling;
                            var orgLocationNode = relocateNode.$nodeToRelocate$['s-ol'];
                            while (orgLocationNode = orgLocationNode.previousSibling) {
                                var refNode = orgLocationNode['s-nr'];
                                if (refNode &&
                                    refNode['s-sn'] === relocateNode.$nodeToRelocate$['s-sn'] &&
                                    parentNodeRef === refNode.parentNode) {
                                    refNode = refNode.nextSibling;
                                    if (!refNode || !refNode['s-nr']) {
                                        insertBeforeNode = refNode;
                                        break;
                                    }
                                }
                            }
                            if ((!insertBeforeNode && parentNodeRef !== relocateNode.$nodeToRelocate$.parentNode) ||
                                (relocateNode.$nodeToRelocate$.nextSibling !== insertBeforeNode)) {
                                // we've checked that it's worth while to relocate
                                // since that the node to relocate
                                // has a different next sibling or parent relocated
                                if (relocateNode.$nodeToRelocate$ !== insertBeforeNode) {
                                    // add it back to the dom but in its new home
                                    parentNodeRef.insertBefore(relocateNode.$nodeToRelocate$, insertBeforeNode);
                                }
                            }
                        }
                        // done moving nodes around
                        // allow the disconnect callback to work again
                        plt.$flags$ &= ~1 /* isTmpDisconnected */;
                    }
                    if (checkSlotFallbackVisibility) {
                        updateFallbackSlotVisibility(rootVnode.$elm$);
                    }
                    // always reset
                    relocateNodes.length = 0;
                }
            };
            var attachToAncestor = function (hostRef, ancestorComponent) {
                if (BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$) {
                    ancestorComponent['s-p'].push(new Promise(function (r) { return hostRef.$onRenderResolve$ = r; }));
                }
            };
            var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) {
                if (BUILD.taskQueue && BUILD.updatable) {
                    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
                }
                if (BUILD.asyncLoading && hostRef.$flags$ & 4 /* isWaitingForChildren */) {
                    hostRef.$flags$ |= 512 /* needsRerender */;
                    return;
                }
                var endSchedule = createTime('scheduleUpdate', cmpMeta.$tagName$);
                var ancestorComponent = hostRef.$ancestorComponent$;
                var instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
                var update = function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); };
                attachToAncestor(hostRef, ancestorComponent);
                var promise;
                if (isInitialLoad) {
                    if (BUILD.lazyLoad && BUILD.hostListener) {
                        hostRef.$flags$ |= 256 /* isListenReady */;
                        if (hostRef.$queuedListeners$) {
                            hostRef.$queuedListeners$.forEach(function (_a) {
                                var methodName = _a[0], event = _a[1];
                                return safeCall(instance, methodName, event);
                            });
                            hostRef.$queuedListeners$ = null;
                        }
                    }
                    emitLifecycleEvent(elm, 'componentWillLoad');
                    if (BUILD.cmpWillLoad) {
                        promise = safeCall(instance, 'componentWillLoad');
                    }
                }
                else {
                    emitLifecycleEvent(elm, 'componentWillUpdate');
                    if (BUILD.cmpWillUpdate) {
                        promise = safeCall(instance, 'componentWillUpdate');
                    }
                }
                emitLifecycleEvent(elm, 'componentWillRender');
                if (BUILD.cmpWillRender) {
                    promise = then(promise, function () { return safeCall(instance, 'componentWillRender'); });
                }
                endSchedule();
                // there is no ancestorc omponent or the ancestor component
                // has already fired off its lifecycle update then
                // fire off the initial update
                return then(promise, BUILD.taskQueue
                    ? function () { return writeTask(update); }
                    : update);
            };
            var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
                // updateComponent
                var endUpdate = createTime('update', cmpMeta.$tagName$);
                var rc = elm['s-rc'];
                if (BUILD.style && isInitialLoad) {
                    // DOM WRITE!
                    attachStyles(elm, cmpMeta, hostRef.$modeName$);
                }
                var endRender = createTime('render', cmpMeta.$tagName$);
                if (BUILD.isDev) {
                    hostRef.$flags$ |= 1024 /* devOnRender */;
                }
                if (BUILD.hasRenderFn || BUILD.reflect) {
                    if (BUILD.vdomRender || BUILD.reflect) {
                        try {
                            // looks like we've got child nodes to render into this host element
                            // or we need to update the css class/attrs on the host element
                            // DOM WRITE!
                            renderVdom(elm, hostRef, cmpMeta, (BUILD.allRenderFn) ? instance.render() : (instance.render && instance.render()));
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    }
                    else {
                        elm.textContent = (BUILD.allRenderFn) ? instance.render() : (instance.render && instance.render());
                    }
                }
                if (BUILD.cssVarShim && plt.$cssShim$) {
                    plt.$cssShim$.updateHost(elm);
                }
                if (BUILD.isDev) {
                    hostRef.$renderCount$++;
                    hostRef.$flags$ &= ~1024 /* devOnRender */;
                }
                if (BUILD.updatable && BUILD.taskQueue) {
                    hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
                }
                if (BUILD.hydrateServerSide) {
                    try {
                        // manually connected child components during server-side hydrate
                        serverSideConnected(elm);
                        if (isInitialLoad && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
                            // using only during server-side hydrate
                            elm['s-sd'] = true;
                        }
                    }
                    catch (e) {
                        consoleError(e);
                    }
                }
                if (BUILD.updatable || BUILD.lazyLoad) {
                    hostRef.$flags$ |= 2 /* hasRendered */;
                }
                if (BUILD.asyncLoading && rc) {
                    // ok, so turns out there are some child host elements
                    // waiting on this parent element to load
                    // let's fire off all update callbacks waiting
                    rc.forEach(function (cb) { return cb(); });
                    elm['s-rc'] = undefined;
                }
                endRender();
                endUpdate();
                if (BUILD.asyncLoading) {
                    var childrenPromises = elm['s-p'];
                    var postUpdate = function () { return postUpdateComponent(elm, hostRef, cmpMeta); };
                    if (childrenPromises.length === 0) {
                        postUpdate();
                    }
                    else {
                        Promise.all(childrenPromises).then(postUpdate);
                        hostRef.$flags$ |= 4 /* isWaitingForChildren */;
                        childrenPromises.length = 0;
                    }
                }
                else {
                    postUpdateComponent(elm, hostRef, cmpMeta);
                }
            };
            var postUpdateComponent = function (elm, hostRef, cmpMeta) {
                var endPostUpdate = createTime('postUpdate', cmpMeta.$tagName$);
                var instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
                var ancestorComponent = hostRef.$ancestorComponent$;
                if (BUILD.cmpDidRender) {
                    if (BUILD.isDev) {
                        hostRef.$flags$ |= 1024 /* devOnRender */;
                    }
                    safeCall(instance, 'componentDidRender');
                    if (BUILD.isDev) {
                        hostRef.$flags$ &= ~1024 /* devOnRender */;
                    }
                }
                emitLifecycleEvent(elm, 'componentDidRender');
                if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
                    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
                    if (BUILD.asyncLoading && BUILD.cssAnnotations) {
                        // DOM WRITE!
                        // add the css class that this element has officially hydrated
                        elm.classList.add(HYDRATED_CLASS);
                    }
                    if (BUILD.cmpDidLoad) {
                        if (BUILD.isDev) {
                            hostRef.$flags$ |= 2048 /* devOnDidLoad */;
                        }
                        safeCall(instance, 'componentDidLoad');
                        if (BUILD.isDev) {
                            hostRef.$flags$ &= ~2048 /* devOnDidLoad */;
                        }
                    }
                    emitLifecycleEvent(elm, 'componentDidLoad');
                    endPostUpdate();
                    if (BUILD.asyncLoading) {
                        hostRef.$onReadyResolve$(elm);
                        if (!ancestorComponent) {
                            appDidLoad(cmpMeta.$tagName$);
                        }
                    }
                }
                else {
                    if (BUILD.cmpDidUpdate) {
                        // we've already loaded this component
                        // fire off the user's componentDidUpdate method (if one was provided)
                        // componentDidUpdate runs AFTER render() has been called
                        // and all child components have finished updating
                        if (BUILD.isDev) {
                            hostRef.$flags$ |= 1024 /* devOnRender */;
                        }
                        safeCall(instance, 'componentDidUpdate');
                        if (BUILD.isDev) {
                            hostRef.$flags$ &= ~1024 /* devOnRender */;
                        }
                    }
                    emitLifecycleEvent(elm, 'componentDidUpdate');
                    endPostUpdate();
                }
                if (BUILD.hotModuleReplacement) {
                    elm['s-hmr-load'] && elm['s-hmr-load']();
                }
                if (BUILD.method && BUILD.lazyLoad) {
                    hostRef.$onInstanceResolve$(elm);
                }
                // load events fire from bottom to top
                // the deepest elements load first then bubbles up
                if (BUILD.asyncLoading) {
                    if (hostRef.$onRenderResolve$) {
                        hostRef.$onRenderResolve$();
                        hostRef.$onRenderResolve$ = undefined;
                    }
                    if (hostRef.$flags$ & 512 /* needsRerender */) {
                        nextTick(function () { return scheduleUpdate(elm, hostRef, cmpMeta, false); });
                    }
                    hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
                }
                // ( •_•)
                // ( •_•)>⌐■-■
                // (⌐■_■)
            };
            var forceUpdate = function (elm, cmpMeta) {
                if (BUILD.updatable) {
                    var hostRef = getHostRef(elm);
                    if ((hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                        scheduleUpdate(elm, hostRef, cmpMeta, false);
                    }
                }
            };
            var appDidLoad = function (who) {
                // on appload
                // we have finish the first big initial render
                if (BUILD.cssAnnotations) {
                    doc.documentElement.classList.add(HYDRATED_CLASS);
                }
                if (!BUILD.hydrateServerSide) {
                    plt.$flags$ |= 2 /* appLoaded */;
                }
                emitLifecycleEvent(doc, 'appload');
                if (BUILD.profile) {
                    performance.measure("[Stencil] " + NAMESPACE + " initial load (by " + who + ")", 'st:app:start');
                }
            };
            var safeCall = function (instance, method, arg) {
                if (instance && instance[method]) {
                    try {
                        return instance[method](arg);
                    }
                    catch (e) {
                        consoleError(e);
                    }
                }
                return undefined;
            };
            var then = function (promise, thenFn) {
                return promise && promise.then ? promise.then(thenFn) : thenFn();
            };
            var emitLifecycleEvent = function (elm, lifecycleName) {
                if (BUILD.lifecycleDOMEvents) {
                    elm.dispatchEvent(new CustomEvent('stencil_' + lifecycleName, { 'bubbles': true, 'composed': true }));
                }
            };
            var serverSideConnected = function (elm) {
                var children = elm.children;
                if (children != null) {
                    for (var i_6 = 0, ii = children.length; i_6 < ii; i_6++) {
                        var childElm = children[i_6];
                        if (typeof childElm.connectedCallback === 'function') {
                            childElm.connectedCallback();
                        }
                        serverSideConnected(childElm);
                    }
                }
            };
            var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
            var setValue = function (ref, propName, newVal, cmpMeta) {
                // check our new property value against our internal value
                var hostRef = getHostRef(ref);
                var elm = BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
                var oldVal = hostRef.$instanceValues$.get(propName);
                var flags = hostRef.$flags$;
                var instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
                newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
                if (newVal !== oldVal && (!BUILD.lazyLoad || !(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
                    // gadzooks! the property's value has changed!!
                    // set our new value!
                    hostRef.$instanceValues$.set(propName, newVal);
                    if (BUILD.isDev) {
                        if (hostRef.$flags$ & 1024 /* devOnRender */) {
                            consoleDevWarn("The state/prop \"" + propName + "\" changed during rendering. This can potentially lead to infinite-loops and other bugs.", '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
                        }
                        else if (hostRef.$flags$ & 2048 /* devOnDidLoad */) {
                            consoleDevWarn("The state/prop \"" + propName + "\" changed during \"componentDidLoad()\", this triggers extra re-renders, try to setup on \"componentWillLoad()\"", '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
                        }
                    }
                    if (!BUILD.lazyLoad || instance) {
                        // get an array of method names of watch functions to call
                        if (BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                            var watchMethods = cmpMeta.$watchers$[propName];
                            if (watchMethods) {
                                // this instance is watching for when this property changed
                                watchMethods.forEach(function (watchMethodName) {
                                    try {
                                        // fire off each of the watch methods that are watching this property
                                        instance[watchMethodName](newVal, oldVal, propName);
                                    }
                                    catch (e) {
                                        consoleError(e);
                                    }
                                });
                            }
                        }
                        if (BUILD.updatable && (flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                            if (BUILD.cmpShouldUpdate && instance.componentShouldUpdate) {
                                if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
                                    return;
                                }
                            }
                            // looks like this value actually changed, so we've got work to do!
                            // but only if we've already rendered, otherwise just chill out
                            // queue that we need to do an update, but don't worry about queuing
                            // up millions cuz this function ensures it only runs once
                            scheduleUpdate(elm, hostRef, cmpMeta, false);
                        }
                    }
                }
            };
            var proxyComponent = function (Cstr, cmpMeta, flags) {
                if (BUILD.member && cmpMeta.$members$) {
                    if (BUILD.watchCallback && Cstr.watchers) {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    // It's better to have a const than two Object.entries()
                    var members = Object.entries(cmpMeta.$members$);
                    var prototype_1 = Cstr.prototype;
                    members.forEach(function (_a) {
                        var memberName = _a[0], memberFlags = _a[1][0];
                        if ((BUILD.prop || BUILD.state) && ((memberFlags & 31 /* Prop */) ||
                            ((!BUILD.lazyLoad || flags & 2 /* proxyState */) &&
                                (memberFlags & 32 /* State */)))) {
                            // proxyComponent - prop
                            Object.defineProperty(prototype_1, memberName, {
                                get: function () {
                                    // proxyComponent, get value
                                    return getValue(this, memberName);
                                },
                                set: function (newValue) {
                                    if (
                                    // only during dev time
                                    (BUILD.isDev) &&
                                        // we are proxing the instance (not element)
                                        (flags & 1 /* isElementConstructor */) === 0 &&
                                        // the member is a non-mutable prop
                                        (memberFlags & (31 /* Prop */ | 1024 /* Mutable */)) === 31 /* Prop */) {
                                        consoleDevWarn("@Prop() \"" + memberName + "\" on \"" + cmpMeta.$tagName$ + "\" cannot be modified.\nFurther information: https://stenciljs.com/docs/properties#prop-mutability");
                                    }
                                    // proxyComponent, set value
                                    setValue(this, memberName, newValue, cmpMeta);
                                },
                                configurable: true,
                                enumerable: true
                            });
                        }
                        else if (BUILD.lazyLoad && BUILD.method && (flags & 1 /* isElementConstructor */) && (memberFlags & 64 /* Method */)) {
                            // proxyComponent - method
                            Object.defineProperty(prototype_1, memberName, {
                                value: function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    var ref = getHostRef(this);
                                    return ref.$onInstancePromise$.then(function () {
                                        var _a;
                                        return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                                    });
                                }
                            });
                        }
                    });
                    if (BUILD.observeAttribute && (!BUILD.lazyLoad || flags & 1 /* isElementConstructor */)) {
                        var attrNameToPropName_1 = new Map();
                        prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                            var _this = this;
                            plt.jmp(function () {
                                var propName = attrNameToPropName_1.get(attrName);
                                _this[propName] = newValue === null && typeof _this[propName] === 'boolean'
                                    ? false
                                    : newValue;
                            });
                        };
                        // create an array of attributes to observe
                        // and also create a map of html attribute name to js property name
                        Cstr.observedAttributes = members
                            .filter(function (_a) {
                            var _ = _a[0], m = _a[1];
                            return m[0] & 15;
                        } /* HasAttribute */) // filter to only keep props that should match attributes
                            .map(function (_a) {
                            var propName = _a[0], m = _a[1];
                            var attrName = m[1] || propName;
                            attrNameToPropName_1.set(attrName, propName);
                            if (BUILD.reflect && m[0] & 512 /* ReflectAttr */) {
                                cmpMeta.$attrsToReflect$.push([propName, attrName]);
                            }
                            return attrName;
                        });
                    }
                }
                return Cstr;
            };
            var addEventListeners = function (elm, hostRef, listeners) {
                hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || [];
                var removeFns = listeners.map(function (_a) {
                    var flags = _a[0], name = _a[1], method = _a[2];
                    var target = (BUILD.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm);
                    var handler = hostListenerProxy(hostRef, method);
                    var opts = hostListenerOpts(flags);
                    plt.ael(target, name, handler, opts);
                    return function () { return plt.rel(target, name, handler, opts); };
                });
                return function () { return removeFns.forEach(function (fn) { return fn(); }); };
            };
            var hostListenerProxy = function (hostRef, methodName) {
                return function (ev) {
                    if (BUILD.lazyLoad) {
                        if (hostRef.$flags$ & 256 /* isListenReady */) {
                            // instance is ready, let's call it's member method for this event
                            hostRef.$lazyInstance$[methodName](ev);
                        }
                        else {
                            hostRef.$queuedListeners$.push([methodName, ev]);
                        }
                    }
                    else {
                        hostRef.$hostElement$[methodName](ev);
                    }
                };
            };
            var getHostListenerTarget = function (elm, flags) {
                if (BUILD.hostListenerTargetDocument && flags & 4 /* TargetDocument */)
                    return doc;
                if (BUILD.hostListenerTargetWindow && flags & 8 /* TargetWindow */)
                    return win;
                if (BUILD.hostListenerTargetBody && flags & 32 /* TargetBody */)
                    return doc.body;
                if (BUILD.hostListenerTargetParent && flags & 16 /* TargetParent */)
                    return elm.parentElement;
                return elm;
            };
            var hostListenerOpts = function (flags) { return supportsListenerOptions ?
                {
                    'passive': (flags & 1 /* Passive */) !== 0,
                    'capture': (flags & 2 /* Capture */) !== 0,
                }
                : (flags & 2 /* Capture */) !== 0; };
            var initializeClientHydrate = function (hostElm, tagName, hostId, hostRef) {
                var endHydrate = createTime('hydrateClient', tagName);
                var shadowRoot = hostElm.shadowRoot;
                var childRenderNodes = [];
                var slotNodes = [];
                var shadowRootNodes = (BUILD.shadowDom && shadowRoot ? [] : null);
                var vnode = hostRef.$vnode$ = newVNode(tagName, null);
                if (!plt.$orgLocNodes$) {
                    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = new Map());
                }
                hostElm[HYDRATE_ID] = hostId;
                hostElm.removeAttribute(HYDRATE_ID);
                clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
                childRenderNodes.forEach(function (c) {
                    var orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
                    var orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
                    var node = c.$elm$;
                    if (orgLocationNode && (orgLocationNode['s-sd'] || c.$hostId$ === '0')) {
                        orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
                    }
                    if (!shadowRoot) {
                        node['s-hn'] = tagName;
                        if (orgLocationNode) {
                            node['s-ol'] = orgLocationNode;
                            node['s-ol']['s-nr'] = node;
                        }
                    }
                    plt.$orgLocNodes$.delete(orgLocationId);
                });
                if (BUILD.shadowDom && shadowRoot) {
                    shadowRootNodes.forEach(function (shadowRootNode) {
                        if (shadowRootNode) {
                            shadowRoot.appendChild(shadowRootNode);
                        }
                    });
                }
                endHydrate();
            };
            var clientHydrate = function (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) {
                var childNodeType;
                var childIdSplt;
                var childVNode;
                var i;
                if (node.nodeType === 1 /* ElementNode */) {
                    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
                    if (childNodeType) {
                        // got the node data from the element's attribute
                        // `${hostId}.${nodeId}.${depth}.${index}`
                        childIdSplt = childNodeType.split('.');
                        if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
                            childVNode = {
                                $flags$: 0,
                                $hostId$: childIdSplt[0],
                                $nodeId$: childIdSplt[1],
                                $depth$: childIdSplt[2],
                                $index$: childIdSplt[3],
                                $tag$: node.tagName.toLowerCase(),
                                $elm$: node,
                                $attrs$: null,
                                $children$: null,
                                $key$: null,
                                $name$: null,
                                $text$: null
                            };
                            childRenderNodes.push(childVNode);
                            node.removeAttribute(HYDRATE_CHILD_ID);
                            // this is a new child vnode
                            // so ensure its parent vnode has the vchildren array
                            if (!parentVNode.$children$) {
                                parentVNode.$children$ = [];
                            }
                            // add our child vnode to a specific index of the vnode's children
                            parentVNode.$children$[childVNode.$index$] = childVNode;
                            // this is now the new parent vnode for all the next child checks
                            parentVNode = childVNode;
                            if (shadowRootNodes && childVNode.$depth$ === '0') {
                                shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                            }
                        }
                    }
                    // recursively drill down, end to start so we can remove nodes
                    for (i = node.childNodes.length - 1; i >= 0; i--) {
                        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
                    }
                    if (node.shadowRoot) {
                        // keep drilling down through the shadow root nodes
                        for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
                            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
                        }
                    }
                }
                else if (node.nodeType === 8 /* CommentNode */) {
                    // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
                    childIdSplt = node.nodeValue.split('.');
                    if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
                        // comment node for either the host id or a 0 host id
                        childNodeType = childIdSplt[0];
                        childVNode = {
                            $flags$: 0,
                            $hostId$: childIdSplt[1],
                            $nodeId$: childIdSplt[2],
                            $depth$: childIdSplt[3],
                            $index$: childIdSplt[4],
                            $elm$: node,
                            $attrs$: null,
                            $children$: null,
                            $key$: null,
                            $name$: null,
                            $tag$: null,
                            $text$: null
                        };
                        if (childNodeType === TEXT_NODE_ID) {
                            childVNode.$elm$ = node.nextSibling;
                            if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
                                childVNode.$text$ = childVNode.$elm$.textContent;
                                childRenderNodes.push(childVNode);
                                // remove the text comment since it's no longer needed
                                node.remove();
                                if (!parentVNode.$children$) {
                                    parentVNode.$children$ = [];
                                }
                                parentVNode.$children$[childVNode.$index$] = childVNode;
                                if (shadowRootNodes && childVNode.$depth$ === '0') {
                                    shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                                }
                            }
                        }
                        else if (childVNode.$hostId$ === hostId) {
                            // this comment node is specifcally for this host id
                            if (childNodeType === SLOT_NODE_ID) {
                                // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
                                childVNode.$tag$ = 'slot';
                                if (childIdSplt[5]) {
                                    node['s-sn'] = childVNode.$name$ = childIdSplt[5];
                                }
                                else {
                                    node['s-sn'] = '';
                                }
                                node['s-sr'] = true;
                                if (BUILD.shadowDom && shadowRootNodes) {
                                    // browser support shadowRoot and this is a shadow dom component
                                    // create an actual slot element
                                    childVNode.$elm$ = doc.createElement(childVNode.$tag$);
                                    if (childVNode.$name$) {
                                        // add the slot name attribute
                                        childVNode.$elm$.setAttribute('name', childVNode.$name$);
                                    }
                                    // insert the new slot element before the slot comment
                                    node.parentNode.insertBefore(childVNode.$elm$, node);
                                    // remove the slot comment since it's not needed for shadow
                                    node.remove();
                                    if (childVNode.$depth$ === '0') {
                                        shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                                    }
                                }
                                slotNodes.push(childVNode);
                                if (!parentVNode.$children$) {
                                    parentVNode.$children$ = [];
                                }
                                parentVNode.$children$[childVNode.$index$] = childVNode;
                            }
                            else if (childNodeType === CONTENT_REF_ID) {
                                // `${CONTENT_REF_ID}.${hostId}`;
                                if (BUILD.shadowDom && shadowRootNodes) {
                                    // remove the content ref comment since it's not needed for shadow
                                    node.remove();
                                }
                                else if (BUILD.slotRelocation) {
                                    hostElm['s-cr'] = node;
                                    node['s-cn'] = true;
                                }
                            }
                        }
                    }
                }
                else if (parentVNode && parentVNode.$tag$ === 'style') {
                    var vnode = newVNode(null, node.textContent);
                    vnode.$elm$ = node;
                    vnode.$index$ = '0';
                    parentVNode.$children$ = [vnode];
                }
            };
            var initializeDocumentHydrate = function (node, orgLocNodes) {
                if (node.nodeType === 1 /* ElementNode */) {
                    var i_7 = 0;
                    for (; i_7 < node.childNodes.length; i_7++) {
                        initializeDocumentHydrate(node.childNodes[i_7], orgLocNodes);
                    }
                    if (node.shadowRoot) {
                        for (i_7 = 0; i_7 < node.shadowRoot.childNodes.length; i_7++) {
                            initializeDocumentHydrate(node.shadowRoot.childNodes[i_7], orgLocNodes);
                        }
                    }
                }
                else if (node.nodeType === 8 /* CommentNode */) {
                    var childIdSplt = node.nodeValue.split('.');
                    if (childIdSplt[0] === ORG_LOCATION_ID) {
                        orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
                        node.nodeValue = '';
                        // useful to know if the original location is
                        // the root light-dom of a shadow dom component
                        node['s-sd'] = (childIdSplt[3] === '');
                    }
                }
            };
            var modeResolutionChain = [];
            var computeMode = function (elm) { return modeResolutionChain.map(function (h) { return h(elm); }).find(function (m) { return !!m; }); };
            // Public
            var setMode = function (handler) { return modeResolutionChain.push(handler); };
            var getMode = function (ref) { return getHostRef(ref).$modeName$; };
            var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
                var endLoad, endNewInstance, scopeId_1, endRegisterStyles, style_1, ancestorComponent, schedule;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!((BUILD.lazyLoad || BUILD.style) && (hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 7];
                            // we haven't initialized this element yet
                            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                            if (BUILD.mode && hostRef.$modeName$ == null) {
                                // initializeComponent
                                // looks like mode wasn't set as a property directly yet
                                // first check if there's an attribute
                                // next check the app's global
                                hostRef.$modeName$ = typeof cmpMeta.$lazyBundleIds$ !== 'string' ? computeMode(elm) : '';
                            }
                            if (BUILD.hydrateServerSide && hostRef.$modeName$) {
                                elm.setAttribute('s-mode', hostRef.$modeName$);
                            }
                            if (!BUILD.lazyLoad) return [3 /*break*/, 3];
                            // lazy loaded components
                            // request the component's implementation to be
                            // wired up with the host element
                            Cstr = loadModule(cmpMeta, hostRef, hmrVersionId);
                            if (!Cstr.then) return [3 /*break*/, 2];
                            endLoad = uniqueTime("st:load:" + cmpMeta.$tagName$ + ":" + hostRef.$modeName$, "[Stencil] Load module for <" + cmpMeta.$tagName$ + ">");
                            return [4 /*yield*/, Cstr];
                        case 1:
                            Cstr = _a.sent();
                            endLoad();
                            _a.label = 2;
                        case 2:
                            if ((BUILD.isDev || BUILD.isDebug) && !Cstr) {
                                throw new Error("Constructor for \"" + cmpMeta.$tagName$ + "#" + hostRef.$modeName$ + "\" was not found");
                            }
                            if (BUILD.member && !Cstr.isProxied) {
                                // we'eve never proxied this Constructor before
                                // let's add the getters/setters to its prototype before
                                // the first time we create an instance of the implementation
                                if (BUILD.watchCallback) {
                                    cmpMeta.$watchers$ = Cstr.watchers;
                                }
                                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                                Cstr.isProxied = true;
                            }
                            endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
                            // ok, time to construct the instance
                            // but let's keep track of when we start and stop
                            // so that the getters/setters don't incorrectly step on data
                            if (BUILD.member) {
                                hostRef.$flags$ |= 8 /* isConstructingInstance */;
                            }
                            // construct the lazy-loaded component implementation
                            // passing the hostRef is very important during
                            // construction in order to directly wire together the
                            // host element and the lazy-loaded instance
                            try {
                                new Cstr(hostRef);
                            }
                            catch (e) {
                                consoleError(e);
                            }
                            if (BUILD.member) {
                                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                            }
                            if (BUILD.watchCallback) {
                                hostRef.$flags$ |= 128 /* isWatchReady */;
                            }
                            endNewInstance();
                            fireConnectedCallback(hostRef.$lazyInstance$);
                            return [3 /*break*/, 4];
                        case 3:
                            Cstr = elm.constructor;
                            _a.label = 4;
                        case 4:
                            scopeId_1 = BUILD.mode ? getScopeId(cmpMeta.$tagName$, hostRef.$modeName$) : getScopeId(cmpMeta.$tagName$);
                            if (!(BUILD.style && !styles.has(scopeId_1) && Cstr.style)) return [3 /*break*/, 7];
                            endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                            style_1 = Cstr.style;
                            if (BUILD.mode && typeof style_1 !== 'string') {
                                style_1 = style_1[hostRef.$modeName$];
                            }
                            if (!(!BUILD.hydrateServerSide && BUILD.shadowDom && cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 6]; /* needsShadowDomShim */
                            return [4 /*yield*/, module.import('./shadow-css-4889ae62-47c21e2f.system.js').then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
                        case 5:
                            style_1 = _a.sent();
                            _a.label = 6;
                        case 6:
                            registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                            endRegisterStyles();
                            _a.label = 7;
                        case 7:
                            ancestorComponent = hostRef.$ancestorComponent$;
                            schedule = function () { return scheduleUpdate(elm, hostRef, cmpMeta, true); };
                            if (BUILD.asyncLoading && ancestorComponent && ancestorComponent['s-rc']) {
                                // this is the intial load and this component it has an ancestor component
                                // but the ancestor component has NOT fired its will update lifecycle yet
                                // so let's just cool our jets and wait for the ancestor to continue first
                                // this will get fired off when the ancestor component
                                // finally gets around to rendering its lazy self
                                // fire off the initial update
                                ancestorComponent['s-rc'].push(schedule);
                            }
                            else {
                                schedule();
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            var fireConnectedCallback = function (instance) {
                if (BUILD.lazyLoad && BUILD.connectedCallback) {
                    safeCall(instance, 'connectedCallback');
                }
            };
            var connectedCallback = function (elm, cmpMeta) {
                if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
                    var endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
                    // connectedCallback
                    var hostRef_1 = getHostRef(elm);
                    if (BUILD.hostListener && cmpMeta.$listeners$) {
                        // initialize our event listeners on the host element
                        // we do this now so that we can listening to events that may
                        // have fired even before the instance is ready
                        hostRef_1.$rmListeners$ = addEventListeners(elm, hostRef_1, cmpMeta.$listeners$);
                    }
                    if (!(hostRef_1.$flags$ & 1 /* hasConnected */)) {
                        // first time this component has connected
                        hostRef_1.$flags$ |= 1 /* hasConnected */;
                        var hostId = void 0;
                        if (BUILD.hydrateClientSide) {
                            hostId = elm.getAttribute(HYDRATE_ID);
                            if (hostId) {
                                if (BUILD.shadowDom && supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                                    var scopeId_2 = BUILD.mode ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode')) : addStyle(elm.shadowRoot, cmpMeta);
                                    elm.classList.remove(scopeId_2 + '-h', scopeId_2 + '-s');
                                }
                                initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef_1);
                            }
                        }
                        if (BUILD.slotRelocation && !hostId) {
                            // initUpdate
                            // if the slot polyfill is required we'll need to put some nodes
                            // in here to act as original content anchors as we move nodes around
                            // host element has been connected to the DOM
                            if ((BUILD.hydrateServerSide) ||
                                (BUILD.slot && cmpMeta.$flags$ & 4 /* hasSlotRelocation */) ||
                                (BUILD.shadowDom && cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                                setContentReference(elm);
                            }
                        }
                        if (BUILD.asyncLoading) {
                            // find the first ancestor component (if there is one) and register
                            // this component as one of the actively loading child components for its ancestor
                            var ancestorComponent = elm;
                            while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                                // climb up the ancestors looking for the first
                                // component that hasn't finished its lifecycle update yet
                                if ((BUILD.hydrateClientSide && ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute('s-id')) ||
                                    (ancestorComponent['s-p'])) {
                                    // we found this components first ancestor component
                                    // keep a reference to this component's ancestor component
                                    attachToAncestor(hostRef_1, (hostRef_1.$ancestorComponent$ = ancestorComponent));
                                    break;
                                }
                            }
                        }
                        // Lazy properties
                        // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                        if (BUILD.prop && BUILD.lazyLoad && !BUILD.hydrateServerSide && cmpMeta.$members$) {
                            Object.entries(cmpMeta.$members$).forEach(function (_a) {
                                var memberName = _a[0], memberFlags = _a[1][0];
                                if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                                    var value = elm[memberName];
                                    delete elm[memberName];
                                    elm[memberName] = value;
                                }
                            });
                        }
                        if (BUILD.initializeNextTick) {
                            // connectedCallback, taskQueue, initialLoad
                            // angular sets attribute AFTER connectCallback
                            // https://github.com/angular/angular/issues/18909
                            // https://github.com/angular/angular/issues/19940
                            nextTick(function () { return initializeComponent(elm, hostRef_1, cmpMeta); });
                        }
                        else {
                            initializeComponent(elm, hostRef_1, cmpMeta);
                        }
                    }
                    fireConnectedCallback(hostRef_1.$lazyInstance$);
                    endConnected();
                }
            };
            var setContentReference = function (elm) {
                // only required when we're NOT using native shadow dom (slot)
                // or this browser doesn't support native shadow dom
                // and this host element was NOT created with SSR
                // let's pick out the inner content for slot projection
                // create a node to represent where the original
                // content was first placed, which is useful later on
                var crName = (BUILD.isDebug)
                    ? "content-ref:" + elm.tagName
                    : '';
                var contentRefElm = elm['s-cr'] = doc.createComment(crName);
                contentRefElm['s-cn'] = true;
                elm.insertBefore(contentRefElm, elm.firstChild);
            };
            var disconnectedCallback = function (elm) {
                if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
                    var hostRef = getHostRef(elm);
                    var instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
                    if (BUILD.hostListener) {
                        if (hostRef.$rmListeners$) {
                            hostRef.$rmListeners$();
                            hostRef.$rmListeners$ = undefined;
                        }
                    }
                    // clear CSS var-shim tracking
                    if (BUILD.cssVarShim && plt.$cssShim$) {
                        plt.$cssShim$.removeHost(elm);
                    }
                    if (BUILD.lazyLoad && BUILD.disconnectedCallback) {
                        safeCall(instance, 'disconnectedCallback');
                    }
                    if (BUILD.cmpDidUnload) {
                        safeCall(instance, 'componentDidUnload');
                    }
                }
            };
            function hmrStart(elm, cmpMeta, hmrVersionId) {
                // ¯\_(ツ)_/¯
                var hostRef = getHostRef(elm);
                // reset state flags to only have been connected
                hostRef.$flags$ = 1 /* hasConnected */;
                // TODO
                // detatch any event listeners that may have been added
                // because we're not passing an exact event name it'll
                // remove all of this element's event, which is good
                // create a callback for when this component finishes hmr
                elm['s-hmr-load'] = function () {
                    // finished hmr for this element
                    delete elm['s-hmr-load'];
                };
                // re-initialize the component
                initializeComponent(elm, hostRef, cmpMeta, hmrVersionId);
            }
            var bootstrapLazy = exports('b', function (lazyBundles, options) {
                if (options === void 0) { options = {}; }
                if (BUILD.profile) {
                    performance.mark('st:app:start');
                }
                installDevTools();
                var endBootstrap = createTime('bootstrapLazy');
                var cmpTags = [];
                var exclude = options.exclude || [];
                var head = doc.head;
                var customElements = win.customElements;
                var y = /*@__PURE__*/ head.querySelector('meta[charset]');
                var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
                var deferredConnectedCallbacks = [];
                var appLoadFallback;
                var isBootstrapping = true;
                Object.assign(plt, options);
                plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
                if (options.syncQueue) {
                    plt.$flags$ |= 4 /* queueSync */;
                }
                if (BUILD.hydrateClientSide) {
                    // If the app is already hydrated there is not point to disable the
                    // async queue. This will improve the first input delay
                    plt.$flags$ |= 2 /* appLoaded */;
                }
                if (BUILD.hydrateClientSide && BUILD.shadowDom) {
                    var styles_1 = doc.querySelectorAll('style[s-id]');
                    for (var i_8 = 0; i_8 < styles_1.length; i_8++) {
                        var styleElm = styles_1[i_8];
                        registerStyle(styleElm.getAttribute(HYDRATE_ID), convertScopedToShadow(styleElm.innerHTML), true);
                    }
                }
                lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
                    var cmpMeta = {
                        $flags$: compactMeta[0],
                        $tagName$: compactMeta[1],
                        $members$: compactMeta[2],
                        $listeners$: compactMeta[3],
                    };
                    if (BUILD.member) {
                        cmpMeta.$members$ = compactMeta[2];
                    }
                    if (BUILD.hostListener) {
                        cmpMeta.$listeners$ = compactMeta[3];
                    }
                    if (BUILD.reflect) {
                        cmpMeta.$attrsToReflect$ = [];
                    }
                    if (BUILD.watchCallback) {
                        cmpMeta.$watchers$ = {};
                    }
                    if (BUILD.shadowDom && !supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                        cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
                    }
                    var tagName = cmpMeta.$tagName$;
                    var HostElement = /** @class */ (function (_super) {
                        __extends(HostElement, _super);
                        // StencilLazyHost
                        function HostElement(self) {
                            var _this = 
                            // @ts-ignore
                            _super.call(this, self) || this;
                            self = _this;
                            registerHost(self);
                            if (BUILD.shadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                                // this component is using shadow dom
                                // and this browser supports shadow dom
                                // add the read-only property "shadowRoot" to the host element
                                if (supportsShadowDom) {
                                    self.attachShadow({ 'mode': 'open' });
                                }
                                else if (!BUILD.hydrateServerSide && !('shadowRoot' in self)) {
                                    self.shadowRoot = self;
                                }
                            }
                            return _this;
                        }
                        HostElement.prototype.connectedCallback = function () {
                            var _this = this;
                            if (appLoadFallback) {
                                clearTimeout(appLoadFallback);
                                appLoadFallback = null;
                            }
                            if (isBootstrapping) {
                                // connectedCallback will be processed once all components have been registered
                                deferredConnectedCallbacks.push(this);
                            }
                            else {
                                plt.jmp(function () { return connectedCallback(_this, cmpMeta); });
                            }
                        };
                        HostElement.prototype.disconnectedCallback = function () {
                            var _this = this;
                            plt.jmp(function () { return disconnectedCallback(_this); });
                        };
                        HostElement.prototype['s-hmr'] = function (hmrVersionId) {
                            if (BUILD.hotModuleReplacement) {
                                hmrStart(this, cmpMeta, hmrVersionId);
                            }
                        };
                        HostElement.prototype.forceUpdate = function () {
                            forceUpdate(this, cmpMeta);
                        };
                        HostElement.prototype.componentOnReady = function () {
                            return getHostRef(this).$onReadyPromise$;
                        };
                        return HostElement;
                    }(HTMLElement));
                    cmpMeta.$lazyBundleIds$ = lazyBundle[0];
                    if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                        cmpTags.push(tagName);
                        customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
                    }
                }); });
                // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
                visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
                visibilityStyle.setAttribute('data-styles', '');
                head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
                // Process deferred connectedCallbacks now all components have been registered
                isBootstrapping = false;
                if (deferredConnectedCallbacks.length > 0) {
                    deferredConnectedCallbacks.forEach(function (host) { return host.connectedCallback(); });
                }
                else {
                    plt.jmp(function () { return appLoadFallback = setTimeout(appDidLoad, 30, 'timeout'); });
                }
                // Fallback appLoad event
                endBootstrap();
            });
            var defineCustomElement = function (Cstr, compactMeta) {
                customElements.define(compactMeta[1], proxyCustomElement(Cstr, compactMeta));
            };
            var proxyCustomElement = function (Cstr, compactMeta) {
                var cmpMeta = {
                    $flags$: compactMeta[0],
                    $tagName$: compactMeta[1],
                };
                if (BUILD.member) {
                    cmpMeta.$members$ = compactMeta[2];
                }
                if (BUILD.hostListener) {
                    cmpMeta.$listeners$ = compactMeta[3];
                }
                if (BUILD.watchCallback) {
                    cmpMeta.$watchers$ = Cstr.$watchers$;
                }
                if (BUILD.reflect) {
                    cmpMeta.$attrsToReflect$ = [];
                }
                if (BUILD.shadowDom && !supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
                }
                Object.assign(Cstr.prototype, {
                    forceUpdate: function () {
                        forceUpdate(this, cmpMeta);
                    },
                    connectedCallback: function () {
                        connectedCallback(this, cmpMeta);
                    },
                    disconnectedCallback: function () {
                        disconnectedCallback(this);
                    }
                });
                return proxyComponent(Cstr, cmpMeta, 1 /* isElementConstructor */ | 2 /* proxyState */);
            };
            var attachShadow = function (el) {
                if (supportsShadowDom) {
                    el.attachShadow({ mode: 'open' });
                }
                else {
                    el.shadowRoot = el;
                }
            };
            var proxyNative = function (Cstr, compactMeta) {
                var cmpMeta = {
                    $flags$: compactMeta[0],
                    $tagName$: compactMeta[1],
                    $members$: compactMeta[2],
                    $listeners$: compactMeta[3],
                    $watchers$: Cstr.$watchers$
                };
                if (BUILD.reflect) {
                    cmpMeta.$attrsToReflect$ = [];
                }
                if (BUILD.shadowDom && !supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
                }
                Object.assign(Cstr.prototype, {
                    forceUpdate: function () {
                        forceUpdate(this, cmpMeta);
                    },
                    connectedCallback: function () {
                        connectedCallback(this, cmpMeta);
                    },
                    disconnectedCallback: function () {
                        disconnectedCallback(this);
                    }
                });
                return proxyComponent(Cstr, cmpMeta, 1 /* isElementConstructor */ | 2 /* proxyState */);
            };
            var createEvent = function (ref, name, flags) {
                var elm = getElement(ref);
                return {
                    emit: function (detail) {
                        if (BUILD.isDev && !elm.isConnected) {
                            consoleDevWarn("The \"" + name + "\" event was emitted, but the dispatcher node is not longer connected to the dom.");
                        }
                        return elm.dispatchEvent(new (BUILD.hydrateServerSide ? win.CustomEvent : CustomEvent)(name, {
                            bubbles: !!(flags & 4 /* Bubbles */),
                            composed: !!(flags & 2 /* Composed */),
                            cancelable: !!(flags & 1 /* Cancellable */),
                            detail: detail
                        }));
                    }
                };
            };
            var getAssetPath = function (path) {
                var assetUrl = new URL(path, plt.$resourcesUrl$);
                return (assetUrl.origin !== win.location.origin)
                    ? assetUrl.href
                    : assetUrl.pathname;
            };
            var getConnect = function (_ref, tagName) {
                var componentOnReady = function () {
                    var elm = doc.querySelector(tagName);
                    if (!elm) {
                        elm = doc.createElement(tagName);
                        doc.body.appendChild(elm);
                    }
                    return typeof elm.componentOnReady === 'function' ? elm.componentOnReady() : Promise.resolve(elm);
                };
                var create = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return componentOnReady()
                        .then(function (el) { return el.create.apply(el, args); });
                };
                return {
                    create: create,
                    componentOnReady: componentOnReady,
                };
            };
            var getContext = function (_elm, context) {
                if (context in Context) {
                    return Context[context];
                }
                else if (context === 'window') {
                    return win;
                }
                else if (context === 'document') {
                    return doc;
                }
                else if (context === 'isServer' || context === 'isPrerender') {
                    return BUILD.hydrateServerSide ? true : false;
                }
                else if (context === 'isClient') {
                    return BUILD.hydrateServerSide ? false : true;
                }
                else if (context === 'resourcesUrl' || context === 'publicPath') {
                    return getAssetPath('.');
                }
                else if (context === 'queue') {
                    return {
                        write: writeTask,
                        read: readTask,
                        tick: {
                            then: function (cb) {
                                return nextTick(cb);
                            }
                        }
                    };
                }
                return undefined;
            };
            var getElement = exports('c', function (ref) { return BUILD.lazyLoad ? getHostRef(ref).$hostElement$ : ref; });
            var insertVdomAnnotations = function (doc) {
                if (doc != null) {
                    var docData_1 = {
                        hostIds: 0,
                        rootLevelIds: 0
                    };
                    var orgLocationNodes = [];
                    parseVNodeAnnotations(doc, doc.body, docData_1, orgLocationNodes);
                    orgLocationNodes.forEach(function (orgLocationNode) {
                        if (orgLocationNode != null) {
                            var nodeRef = orgLocationNode['s-nr'];
                            var hostId = nodeRef['s-host-id'];
                            var nodeId = nodeRef['s-node-id'];
                            var childId = hostId + "." + nodeId;
                            if (hostId == null) {
                                hostId = 0;
                                docData_1.rootLevelIds++;
                                nodeId = docData_1.rootLevelIds;
                                childId = hostId + "." + nodeId;
                                if (nodeRef.nodeType === 1 /* ElementNode */) {
                                    nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
                                }
                                else if (nodeRef.nodeType === 3 /* TextNode */) {
                                    if (hostId === 0) {
                                        var textContent = nodeRef.nodeValue.trim();
                                        if (textContent === '') {
                                            // useless whitespace node at the document root
                                            orgLocationNode.remove();
                                            return;
                                        }
                                    }
                                    var commentBeforeTextNode = doc.createComment(childId);
                                    commentBeforeTextNode.nodeValue = TEXT_NODE_ID + "." + childId;
                                    nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
                                }
                            }
                            var orgLocationNodeId = ORG_LOCATION_ID + "." + childId;
                            var orgLocationParentNode = orgLocationNode.parentElement;
                            if (orgLocationParentNode && orgLocationParentNode['s-sd']) {
                                // ending with a . means that the parent element
                                // of this node's original location is a shadow dom element
                                // and this node is apart of the root level light dom
                                orgLocationNodeId += ".";
                            }
                            orgLocationNode.nodeValue = orgLocationNodeId;
                        }
                    });
                }
            };
            var parseVNodeAnnotations = function (doc, node, docData, orgLocationNodes) {
                if (node == null) {
                    return;
                }
                if (node['s-nr'] != null) {
                    orgLocationNodes.push(node);
                }
                if (node.nodeType === 1 /* ElementNode */) {
                    node.childNodes.forEach(function (childNode) {
                        var hostRef = getHostRef(childNode);
                        if (hostRef != null) {
                            var cmpData = {
                                nodeIds: 0
                            };
                            insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
                        }
                        parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
                    });
                }
            };
            var insertVNodeAnnotations = function (doc, hostElm, vnode, docData, cmpData) {
                if (vnode != null) {
                    var hostId_1 = ++docData.hostIds;
                    hostElm.setAttribute(HYDRATE_ID, hostId_1);
                    if (hostElm['s-cr'] != null) {
                        hostElm['s-cr'].nodeValue = CONTENT_REF_ID + "." + hostId_1;
                    }
                    if (vnode.$children$ != null) {
                        var depth_1 = 0;
                        vnode.$children$.forEach(function (vnodeChild, index) {
                            insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId_1, depth_1, index);
                        });
                    }
                }
            };
            var insertChildVNodeAnnotations = function (doc, vnodeChild, cmpData, hostId, depth, index) {
                var childElm = vnodeChild.$elm$;
                if (childElm == null) {
                    return;
                }
                var nodeId = cmpData.nodeIds++;
                var childId = hostId + "." + nodeId + "." + depth + "." + index;
                childElm['s-host-id'] = hostId;
                childElm['s-node-id'] = nodeId;
                if (childElm.nodeType === 1 /* ElementNode */) {
                    childElm.setAttribute(HYDRATE_CHILD_ID, childId);
                }
                else if (childElm.nodeType === 3 /* TextNode */) {
                    var parentNode = childElm.parentNode;
                    if (parentNode.nodeName !== 'STYLE') {
                        var textNodeId = TEXT_NODE_ID + "." + childId;
                        var commentBeforeTextNode = doc.createComment(textNodeId);
                        parentNode.insertBefore(commentBeforeTextNode, childElm);
                    }
                }
                else if (childElm.nodeType === 8 /* CommentNode */) {
                    if (childElm['s-sr']) {
                        var slotName = (childElm['s-sn'] || '');
                        var slotNodeId = SLOT_NODE_ID + "." + childId + "." + slotName;
                        childElm.nodeValue = slotNodeId;
                    }
                }
                if (vnodeChild.$children$ != null) {
                    var childDepth_1 = depth + 1;
                    vnodeChild.$children$.forEach(function (vnode, index) {
                        insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth_1, index);
                    });
                }
            };
            var globals = function () {
            };
            exports('g', globals);
        }
    };
});

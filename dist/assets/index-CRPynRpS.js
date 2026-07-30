var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function E(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?E(``+e.key):t.toString(36)}function D(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(D(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function O(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:O,forEach:function(e,t,n){O(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var E=new MessageChannel,re=E.port2;E.port1.onmessage=ne,T=function(){re.postMessage(null)}}else T=function(){_(ne,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),E=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function D(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function O(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case E:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?O(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return O(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var be,xe;function M(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var N=!1;function Se(e,t){if(!e||N)return``;N=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{N=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?M(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return M(e.type);case 16:return M(`Lazy`);case 13:return e.child!==t&&t!==null?M(`Suspense Fallback`):M(`Suspense`);case 19:return M(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return M(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,Ne=t.unstable_UserBlockingPriority,Pe=t.unstable_NormalPriority,Fe=t.unstable_LowPriority,Ie=t.unstable_IdlePriority,Le=t.log,Re=t.unstable_setDisableYieldValue,ze=null,Be=null;function Ve(e){if(typeof Le==`function`&&Re(e),Be&&typeof Be.setStrictMode==`function`)try{Be.setStrictMode(ze,e)}catch{}}var He=Math.clz32?Math.clz32:Ge,Ue=Math.log,We=Math.LN2;function Ge(e){return e>>>=0,e===0?32:31-(Ue(e)/We|0)|0}var Ke=256,qe=262144,Je=4194304;function Ye(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ye(n))):i=Ye(o):i=Ye(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ye(n))):i=Ye(o)):i=Ye(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Je;return Je<<=1,!(Je&62914560)&&(Je=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-He(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-He(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function lt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ut=Math.random().toString(36).slice(2),dt=`__reactFiber$`+ut,ft=`__reactProps$`+ut,pt=`__reactContainer$`+ut,mt=`__reactEvents$`+ut,ht=`__reactListeners$`+ut,gt=`__reactHandles$`+ut,_t=`__reactResources$`+ut,vt=`__reactMarker$`+ut;function yt(e){delete e[dt],delete e[ft],delete e[mt],delete e[ht],delete e[gt]}function bt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[dt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[dt]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[_t];return t||=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[vt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return Te.call(jt,e)?!0:Te.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Kt(e,o,It(n)):Kt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Kt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Yt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Xt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ft]||null;if(!a)throw Error(i(90));Wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(bu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,`passive`,{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=f({},Tn,{view:0,detail:0}),On=wn(Dn),kn,P,An,jn=f({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==An&&(An&&e.type===`mousemove`?(kn=e.screenX-An.screenX,P=e.screenY-An.screenY):P=kn=0,An=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:P}}),Mn=wn(jn),Nn=wn(f({},jn,{dataTransfer:0})),Pn=wn(f({},Dn,{relatedTarget:0})),Fn=wn(f({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),In=wn(f({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Ln=wn(f({},Tn,{data:0})),Rn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Bn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Vn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bn[e])?!!t[e]:!1}function Hn(){return Vn}var Un=wn(f({},Dn,{key:function(e){if(e.key){var t=Rn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Wn=wn(f({},jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Gn=wn(f({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn})),Kn=wn(f({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),qn=wn(f({},jn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Jn=wn(f({},Tn,{newState:0,oldState:0})),Yn=[9,13,27,32],Xn=mn&&`CompositionEvent`in window,Zn=null;mn&&`documentMode`in document&&(Zn=document.documentMode);var Qn=mn&&`TextEvent`in window&&!Zn,$n=mn&&(!Xn||Zn&&8<Zn&&11>=Zn),er=` `,tr=!1;function nr(e,t){switch(e){case`keyup`:return Yn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function rr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ir=!1;function ar(e,t){switch(e){case`compositionend`:return rr(t);case`keypress`:return t.which===32?(tr=!0,er):null;case`textInput`:return e=t.data,e===er&&tr?null:e;default:return null}}function or(e,t){if(ir)return e===`compositionend`||!Xn&&nr(e,t)?(e=bn(),yn=vn=_n=null,ir=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return $n&&t.locale!==`ko`?null:t.data;default:return null}}var sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!sr[e.type]:t===`textarea`}function lr(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=Ed(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ur=null,dr=null;function fr(e){yd(e,0)}function pr(e){if(Bt(St(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(mn){var gr;if(mn){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){ur&&(ur.detachEvent(`onpropertychange`,br),dr=ur=null)}function br(e){if(e.propertyName===`value`&&pr(dr)){var t=[];lr(t,dr,e,sn(e)),fn(fr,t)}}function xr(e,t,n){e===`focusin`?(yr(),ur=t,dr=n,ur.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(dr)}function Cr(e,t){if(e===`click`)return pr(t)}function wr(e,t){if(e===`input`||e===`change`)return pr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=mn&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Vt(r)||(r=Pr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Dr(Ir,r)||(Ir=r,r=Ed(Fr,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};mn&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function F(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Ur=F(`animationend`),Wr=F(`animationiteration`),Gr=F(`animationstart`),Kr=F(`transitionrun`),qr=F(`transitionstart`),Jr=F(`transitioncancel`),Yr=F(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Dt(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-He(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case E:return e=di(31,n,t,a),e.elementType=E,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=di(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=di(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-He(r)-1;r&=~(1<<i),n+=1;var a=32-He(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-He(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[ft]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Ii=Ii.return}}function Ui(e){if(e!==Ii)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=Ii?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=Ii=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=ue(null),Ji=null,Yi=null;function Xi(e,t,n){j(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,de(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Er(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=k.S;k.S=function(e,t){eu=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=ue(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?j(ba,ba.current):j(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=hi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case T:return t=Aa(t),f(e,t,n)}if(oe(t)||D(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Aa(n),p(e,t,n,r)}if(oe(n)||D(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Aa(r),m(e,t,n,r,i)}if(oe(r)||D(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ji(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Aa(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(D(o)){if(l=D(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(J&p)===p:(r&p)===p){p!==0&&p===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ha=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=ue(null),to=ue(0);function no(e,t){e=Wl,j(to,e),j(eo,t),Wl=e|t.baseLanes}function ro(){j(to,Wl),j(eo,eo.current)}function io(){Wl=to.current,de(eo),de(to)}var ao=ue(null),oo=null;function so(e){var t=e.alternate;j(R,R.current&1),j(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){j(R,R.current),j(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(j(R,R.current),j(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){j(R,R.current),j(ao,ao.current)}function fo(e){de(ao),oo===e&&(oo=null),de(R)}var R=ue(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){k.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ra(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Er(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Er(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Er((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function Go(e){var t=oi(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ve(!0);try{n()}finally{Ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=K.formState;if(n!==null){a:{var r=z;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Er(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Er(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Fs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,se,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ra(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ai(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o))return ii(e,t,i,0),K===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var zs={readContext:ra,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ra,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ve(!0);try{n(t)}finally{Ve(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(L){var n=Ai,r=ki;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){$r(e)}function Ys(e){console.error(e)}function Xs(e){$r(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&s&&Ni(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ea(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(L&&r&&Ni(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(R.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(L){if(a?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),Ii=t,L=!0,Li=null,Ri=!1,e!==null&&Fi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(R,o),ac(e,t,r,n),r=L?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ta(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,L&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=O(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=xi(Error(i(424)),t),Ki(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),Ii=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[dt]=t,r[ft]=e,Pd(r,n,e),wt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Ii=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Ii=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Ii=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Cc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=fe.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=fe.current,Ui(t))Vi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[dt]=t,o[ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[dt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[dt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[dt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Zi(t.type),U(t),null;case 19:if(de(R),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return j(R,R.current&1|2),L&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return U(t),null}else 2*Ae()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=R.current,j(R,a?n&1|2:n&1),L&&ji(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(R),null;case 4:return _e(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&de(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Vc(e,t){switch(Pi(t),t.tag){case 3:Zi(la),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:de(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&de(ba);break;case 24:Zi(la)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ft]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[dt]=e,t[ft]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=jr(e),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount==`function`)try{Be.onCommitFiberUnmount(ze,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[vt]||o[dt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[dt]=e,wt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[dt]=e,wt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Xt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Xt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:k.T===null?ct():dd()}function mu(){if(Jl===0)if(!(J&536870912)||L){var e=qe;qe<<=1,!(qe&3932160)&&(qe=262144),Jl=e}else Jl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),tt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ae(),10<a)){if(yu(r,t,Jl,!Vl),Xe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Ml(t,a,d);var m=(a&62914560)===a?$l-Ae():(a&4194048)===a?eu-Ae():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-He(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=pi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Ze(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-He(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ri(),n}function Cu(e,t){z=null,k.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,xi(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=k.H;return k.H=zs,e===null?zs:e}function Eu(){var e=k.A;return k.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,k.H=i,k.A=a,q===null&&(K=null,J=0,ri()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ae()+500,Su(e,t)):Hl=Ze(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,k.H=r,k.A=a,G=n,q===null?(K=null,J=0,ri(),X):0}function ju(){for(;q!==null&&!Oe();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=mi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Yi=Ji=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,xi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,xi(n,e.current)),q=null;return}t.flags&32768?(L||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,nt(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Pe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,A.p=a,k.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=jr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ar(s.ownerDocument.documentElement,s)){if(c!==null&&Mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=kr(s,h),v=kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,A.p=r,k.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,A.p=r,k.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,ke();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),st(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot==`function`)try{Be.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=st(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Be&&typeof Be.onPostCommitFiberRoot==`function`)try{Be.onPostCommitFiberRoot(ze,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=xi(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(tt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=xi(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),tt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ae()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=$e()),e=oi(e,t),e!==null&&(tt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ee(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-He(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Xe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ae(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-He(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),st(n)){case 2:case 8:n=Ne;break;case 32:n=Pe;break;case 268435456:n=Ie;break;default:n=Pe}return r=cd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Xe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ee(Me,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Ke,Ke<<=1,!(Ke&261888)&&(Ke=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ft]||null).action),o=r.submitter;o&&(t=(t=o[ft]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Zr.length;hd++){var gd=Zr[hd];Qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Un;break;case`focusin`:u=`focus`,l=Pn;break;case`focusout`:u=`blur`,l=Pn;break;case`beforeblur`:case`afterblur`:l=Pn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Mn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Nn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Gn;break;case Ur:case Wr:case Gr:l=Fn;break;case Yr:l=Kn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=qn;break;case`copy`:case`cut`:case`paste`:l=In;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Wn;break;case`toggle`:case`beforetoggle`:l=Jn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Mn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Wn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=mr;else if(cr(c))if(hr)v=wr;else{v=Sr;var y=xr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=mr):v=Cr;if(v&&=v(e,r)){lr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Kt(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(cr(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(s,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Rr(s,n,i)}var b;if(Xn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ir?nr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&($n&&n.locale!==`ko`&&(ir||x!==`onCompositionStart`?x===`onCompositionEnd`&&ir&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ir=!0)),y=Ed(r,x),0<y.length&&(x=new Ln(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=rr(n),b!==null&&(x.data=b)))),(b=Qn?ar(e,n):or(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Ln(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=pn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Xt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Nt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Xt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ft]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&qt(e,!!r,n,!0):qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Yt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?qt(e,!!n,n?[]:``,!1):qt(e,!!n,t,!0)):qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),wt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ct(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);wt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ct(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ct(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ut(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),wt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ut(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,wt(a),a):(r=n,(a=mf.get(o))&&(r=f({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[vt]||a[dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=li,e):li}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ot(t);var n=oi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ye(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-He(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ae()+500,id(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=sn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case Ne:return 8;case Pe:case Fe:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=xt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ft]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ft]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[pt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{ze=zp.inject(Rp),Be=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[pt]=t.current,Sd(e),new Fp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=`modulepreload`,x=function(e){return`/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in S)return;S[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=u(p(),1),ee=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ne(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return D(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ae(t)}return oe(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function re(){return Math.random().toString(36).substring(2,10)}function ie(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function D(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?O(t):t,state:n,key:t&&t.key||r||re(),unstable_mask:i}}function ae({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function O(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:D(h.location,e,t);n&&n(r,e),l=u()+1;let d=ie(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:D(h.location,e,t);n&&n(r,e),l=u();let i=ie(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return k(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function k(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ae(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function A(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r){let i=Se((typeof t==`string`?O(t):t).pathname||`/`,n);if(i==null)return null;let a=le(e);de(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=N(i);o=be(a[e],t,r)}return o}function ce(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function le(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=je([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),le(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ve(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ue(e.path))a(e,t,!0,n)}),t}function ue(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ue(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function de(e){e.sort((e,t)=>e.score===t.score?ye(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var j=/^:[\w-]+$/,fe=3,pe=2,me=1,he=10,ge=-2,_e=e=>e===`*`;function ve(e,t){let n=e.split(`/`),r=n.length;return n.some(_e)&&(r+=ge),t&&(r+=pe),n.filter(e=>!_e(e)).reduce((e,t)=>e+(j.test(t)?fe:t===``?me:he),r)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function be(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:je([a,u.pathname]),pathnameBase:Ne(je([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=je([a,u.pathnameBase]))}return o}function xe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=M(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function M(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function N(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Se(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function we(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?O(e):e,a;return n?(n=Ae(n),a=n.startsWith(`/`)?Te(n.substring(1),`/`):Te(n,t)):a=t,{pathname:a,search:Pe(r),hash:Fe(i)}}function Te(e,t){let n=Me(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ee(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function De(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Oe(e){let t=De(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function ke(e,t,n,r=!1){let i;typeof e==`string`?i=O(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Ee(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Ee(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Ee(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=we(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ae=e=>e.replace(/\/\/+/g,`/`),je=e=>Ae(e.join(`/`)),Me=e=>e.replace(/\/+$/,``),Ne=e=>Me(e).replace(/^\/*/,`/`),Pe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Fe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ie=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Le(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Re(e){return je(e.map(e=>e.route.path).filter(Boolean))||`/`}var ze=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Be(e,t){let n=e;if(typeof n!=`string`||!Ce.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ze)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Se(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ve=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ve);var He=[`GET`,...Ve];new Set(He);var Ue=w.createContext(null);Ue.displayName=`DataRouter`;var We=w.createContext(null);We.displayName=`DataRouterState`;var Ge=w.createContext(!1);function Ke(){return w.useContext(Ge)}var qe=w.createContext({isTransitioning:!1});qe.displayName=`ViewTransition`;var Je=w.createContext(new Map);Je.displayName=`Fetchers`;var Ye=w.createContext(null);Ye.displayName=`Await`;var Xe=w.createContext(null);Xe.displayName=`Navigation`;var Ze=w.createContext(null);Ze.displayName=`Location`;var Qe=w.createContext({outlet:null,matches:[],isDataRoute:!1});Qe.displayName=`Route`;var $e=w.createContext(null);$e.displayName=`RouteError`;var et=`REACT_ROUTER_ERROR`,tt=`REDIRECT`,nt=`ROUTE_ERROR_RESPONSE`;function rt(e){if(e.startsWith(`${et}:${tt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function it(e){if(e.startsWith(`${et}:${nt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ie(t.status,t.statusText,t.data)}catch{}}function at(e,{relative:t}={}){T(ot(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=w.useContext(Xe),{hash:i,pathname:a,search:o}=pt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:je([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ot(){return w.useContext(Ze)!=null}function st(){return T(ot(),`useLocation() may be used only in the context of a <Router> component.`),w.useContext(Ze).location}var ct=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function lt(e){w.useContext(Xe).static||w.useLayoutEffect(e)}function ut(){let{isDataRoute:e}=w.useContext(Qe);return e?Mt():dt()}function dt(){T(ot(),`useNavigate() may be used only in the context of a <Router> component.`);let e=w.useContext(Ue),{basename:t,navigator:n}=w.useContext(Xe),{matches:r}=w.useContext(Qe),{pathname:i}=st(),a=JSON.stringify(Oe(r)),o=w.useRef(!1);return lt(()=>{o.current=!0}),w.useCallback((r,s={})=>{if(E(o.current,ct),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=ke(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:je([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}w.createContext(null);function ft(){let{matches:e}=w.useContext(Qe);return e[e.length-1]?.params??{}}function pt(e,{relative:t}={}){let{matches:n}=w.useContext(Qe),{pathname:r}=st(),i=JSON.stringify(Oe(n));return w.useMemo(()=>ke(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function mt(e,t){return ht(e,t)}function ht(e,t,n){T(ot(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=w.useContext(Xe),{matches:i}=w.useContext(Qe),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Pt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=st(),d;if(t){let e=typeof t==`string`?O(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=A(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=St(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:je([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:je([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?w.createElement(Ze.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function gt(){let e=jt(),t=Le(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=w.createElement(w.Fragment,null,w.createElement(`p`,null,`💿 Hey developer 👋`),w.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,w.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,w.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),w.createElement(w.Fragment,null,w.createElement(`h2`,null,`Unexpected Application Error!`),w.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?w.createElement(`pre`,{style:i},n):null,o)}var _t=w.createElement(gt,null),vt=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=it(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:w.createElement(Qe.Provider,{value:this.props.routeContext},w.createElement($e.Provider,{value:e,children:this.props.component}));return this.context?w.createElement(bt,{error:e},t):t}};vt.contextType=Ge;var yt=new WeakMap;function bt({children:e,error:t}){let{basename:n}=w.useContext(Xe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=rt(t.digest);if(e){let r=yt.get(t);if(r)throw r;let i=Be(e.location,n);if(ze&&!yt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw yt.set(t,n),n}return w.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function xt({routeContext:e,match:t,children:n}){let r=w.useContext(Ue);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(Qe.Provider,{value:e},n)}function St(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Re(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||_t,o&&(s<0&&c===0?(Pt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?w.createElement(n.route.Component,null):n.route.element?n.route.element:e,w.createElement(xt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?w.createElement(vt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ct(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wt(e){let t=w.useContext(Ue);return T(t,Ct(e)),t}function Tt(e){let t=w.useContext(We);return T(t,Ct(e)),t}function Et(e){let t=w.useContext(Qe);return T(t,Ct(e)),t}function Dt(e){let t=Et(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ot(){return Dt(`useRouteId`)}function kt(){return Tt(`useNavigation`).navigation}function At(){let{matches:e,loaderData:t}=Tt(`useMatches`);return w.useMemo(()=>e.map(e=>ce(e,t)),[e,t])}function jt(){let e=w.useContext($e),t=Tt(`useRouteError`),n=Dt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Mt(){let{router:e}=wt(`useNavigate`),t=Dt(`useNavigate`),n=w.useRef(!1);return lt(()=>{n.current=!0}),w.useCallback(async(r,i={})=>{E(n.current,ct),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Nt={};function Pt(e,t,n){!t&&!Nt[e]&&(Nt[e]=!0,E(!1,n))}w.memo(Ft);function Ft({routes:e,future:t,state:n,isStatic:r,onError:i}){return ht(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function It({to:e,replace:t,state:n,relative:r}){T(ot(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=w.useContext(Xe);E(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=w.useContext(Qe),{pathname:o}=st(),s=ut(),c=ke(e,Oe(a),o,r===`path`),l=JSON.stringify(c);return w.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Lt(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Rt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){T(!ot(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=w.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=O(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=w.useMemo(()=>{let e=Se(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:w.createElement(Xe.Provider,{value:c},w.createElement(Ze.Provider,{children:t,value:h}))}function zt({children:e,location:t}){return mt(Bt(e),t)}w.Component;function Bt(e,t=[]){let n=[];return w.Children.forEach(e,(e,r)=>{if(!w.isValidElement(e))return;let i=[...t,r];if(e.type===w.Fragment){n.push.apply(n,Bt(e.props.children,i));return}T(e.type===Lt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Bt(e.props.children,i)),n.push(a)}),n}var Vt=`get`,Ht=`application/x-www-form-urlencoded`;function Ut(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Wt(e){return Ut(e)&&e.tagName.toLowerCase()===`button`}function Gt(e){return Ut(e)&&e.tagName.toLowerCase()===`form`}function Kt(e){return Ut(e)&&e.tagName.toLowerCase()===`input`}function qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jt(e,t){return e.button===0&&(!t||t===`_self`)&&!qt(e)}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var Zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Qt(e){return e!=null&&!Zt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ht}"`),null):e}function $t(e,t){let n,r,i,a,o;if(Gt(e)){let o=e.getAttribute(`action`);r=o?Se(o,t):null,n=e.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`enctype`))||Ht,a=new FormData(e)}else if(Wt(e)||Kt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Se(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`formenctype`))||Qt(o.getAttribute(`enctype`))||Ht,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ut(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Vt,r=null,i=Ht,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var en={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},tn=/[&><\u2028\u2029]/g;function nn(e){return e.replace(tn,e=>en[e])}function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Se(i.pathname,t)===`/`?i.pathname=`${Me(t)}/_root.${r}`:i.pathname=`${Me(i.pathname)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=w.useContext(Ue);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=w.useContext(We);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=w.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=w.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=w.useContext(_n),[r,i]=w.useState(!1),[a,o]=w.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=w.useRef(null);w.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),w.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=Ke(),{router:r}=hn(),i=w.useMemo(()=>A(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?w.createElement(Cn,{page:e,matches:i,...t}):w.createElement(wn,{page:e,matches:i,...t}):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=w.useState([]);return w.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=st(),{future:i}=vn(),{basename:a}=hn(),o=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return w.createElement(w.Fragment,null,o.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=st(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=w.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=w.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=w.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=w.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return w.createElement(w.Fragment,null,f.map(e=>w.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>w.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>w.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}w.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.14.2`)}catch{}function Dn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=w.useRef();i.current??=ne({window:r,v5Compat:!0});let a=i.current,[o,s]=w.useState({action:a.action,location:a.location}),c=w.useCallback(e=>{n===!1?s(e):w.startTransition(()=>s(e))},[n]);return w.useLayoutEffect(()=>a.listen(c),[a,c]),w.createElement(Rt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function On({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=w.useState({action:n.action,location:n.location}),o=w.useCallback(e=>{r===!1?a(e):w.startTransition(()=>a(e))},[r]);return w.useLayoutEffect(()=>n.listen(o),[n,o]),w.createElement(Rt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}On.displayName=`unstable_HistoryRouter`;var kn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P=w.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=w.useContext(Xe),v=typeof l==`string`&&kn.test(l),y=Be(l,h);l=y.to;let b=at(l,{relative:r}),x=st(),S=null;if(o){let e=ke(o,[],x.unstable_mask?x.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:je([h,e.pathname])),S=g.createHref(e)}let[C,ee,te]=yn(n,p),ne=In(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function T(t){e&&e(t),t.defaultPrevented||ne(t)}let E=!(y.isExternal||i),re=w.createElement(`a`,{...p,...te,href:(E?S:void 0)||y.absoluteURL||b,onClick:E?T:e,ref:Tn(m,ee),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?w.createElement(w.Fragment,null,re,w.createElement(xn,{page:b})):re});P.displayName=`Link`;var An=w.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=pt(a,{relative:c.relative}),d=st(),f=w.useContext(We),{navigator:p,basename:m}=w.useContext(Xe),h=f!=null&&Kn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Se(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},C=b?e:void 0,ee;ee=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(S):i;return w.createElement(P,{...c,"aria-current":C,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(S):s)});An.displayName=`NavLink`;var jn=w.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Vt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=w.useContext(Xe),g=zn(),_=Bn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&kn.test(s);return w.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?w.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});jn.displayName=`Form`;function Mn({getKey:e,storageKey:t,...n}){let r=w.useContext(_n),{basename:i}=w.useContext(Xe),a=st(),o=At();Wn({getKey:e,storageKey:t});let s=w.useMemo(()=>{if(!r||!e)return null;let t=Un(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return w.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${nn(JSON.stringify(t||Vn))}, ${nn(JSON.stringify(s))})`}})}Mn.displayName=`ScrollRestoration`;function Nn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pn(e){let t=w.useContext(Ue);return T(t,Nn(e)),t}function Fn(e){let t=w.useContext(We);return T(t,Nn(e)),t}function In(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=ut(),d=st(),f=pt(e,{relative:o});return w.useCallback(p=>{if(Jt(p,t)){p.preventDefault();let t=n===void 0?ae(d)===ae(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?w.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Pn(`useSubmit`),{basename:t}=w.useContext(Xe),n=Ot(),r=e.fetch,i=e.navigate;return w.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=$t(e,t);a.navigate===!1?await r(a.fetcherKey||Rn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=w.useContext(Xe),r=w.useContext(Qe);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...pt(e||`.`,{relative:t})},o=st();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:je([n,a.pathname])),ae(a)}var Vn=`react-router-scroll-positions`,Hn={};function Un(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Se(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Wn({getKey:e,storageKey:t}={}){let{router:n}=Pn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Fn(`useScrollRestoration`),{basename:a}=w.useContext(Xe),o=st(),s=At(),c=kt();w.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Gn(w.useCallback(()=>{if(c.state===`idle`){let t=Un(o,s,a,e);Hn[t]=window.scrollY}try{sessionStorage.setItem(t||Vn,JSON.stringify(Hn))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(w.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Vn);e&&(Hn=JSON.parse(e))}catch{}},[t]),w.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Hn,()=>window.scrollY,e?(t,n)=>Un(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),w.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Gn(e,t){let{capture:n}=t||{};w.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Kn(e,{relative:t}={}){let n=w.useContext(qe);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Pn(`useViewTransitionState`),i=pt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Se(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Se(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xe(i.pathname,o)!=null||xe(i.pathname,a)!=null}var qn=s(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e,p()):typeof define==`function`&&define.amd?define([`exports`,`react`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.ReactStripe={},n.React))})(e,(function(e,t){function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]==null?{}:arguments[t];t%2?n(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e){"@babel/helpers - typeof";return i=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},i(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function s(e,t){if(e==null)return{};var n=o(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function c(e,t){return l(e)||u(e,t)||d(e,t)||p()}function l(e){if(Array.isArray(e))return e}function u(e,t){var n=e&&(typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`]);if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(e){a=!0,s=e}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function d(e,t){if(e){if(typeof e==`string`)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}}function f(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function p(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,`default`)?e.default:e}var h={exports:{}},g,_;function v(){return _?g:(_=1,g=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`,g)}var y,b;function x(){if(b)return y;b=1;var e=v();function t(){}function n(){}return n.resetWarningCache=t,y=function(){function r(t,n,r,i,a,o){if(o!==e){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}r.isRequired=r;function i(){return r}var a={array:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a},y}h.exports=x()();var S=h.exports,C=m(S),w=function(e,n,r){var i=!!r,a=t.useRef(r);t.useEffect(function(){a.current=r},[r]),t.useEffect(function(){if(!i||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}},[i,n,e,a])},ee=function(e){var n=t.useRef(e);return t.useEffect(function(){n.current=e},[e]),n.current},te=function(e){return e!==null&&i(e)===`object`},ne=function(e){return te(e)&&typeof e.then==`function`},T=function(e){return te(e)&&typeof e.elements==`function`&&typeof e.createToken==`function`&&typeof e.createPaymentMethod==`function`&&typeof e.confirmCardPayment==`function`},E=`[object Object]`,re=function e(t,n){if(!te(t)||!te(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var i=Object.prototype.toString.call(t)===E;if(i!==(Object.prototype.toString.call(n)===E))return!1;if(!i&&!r)return t===n;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(var s={},c=0;c<a.length;c+=1)s[a[c]]=!0;for(var l=0;l<o.length;l+=1)s[o[l]]=!0;var u=Object.keys(s);if(u.length!==a.length)return!1;var d=t,f=n;return u.every(function(t){return e(d[t],f[t])})},ie=function(e,t,n){return te(e)?Object.keys(e).reduce(function(i,o){var s=!te(t)||!re(e[o],t[o]);return n.includes(o)?(s&&console.warn(`Unsupported prop change: options.${o} is not a mutable property.`),i):s?r(r({},i||{}),{},a({},o,e[o])):i},null):null},D="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",ae=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D;if(e===null||T(e))return e;throw Error(t)},O=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D;if(ne(e))return{tag:`async`,stripePromise:Promise.resolve(e).then(function(e){return ae(e,t)})};var n=ae(e,t);return n===null?{tag:`empty`}:{tag:`sync`,stripe:n}},oe=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:`react-stripe-js`,version:`3.10.0`}),e.registerAppInfo({name:`react-stripe-js`,version:`3.10.0`,url:`https://stripe.com/docs/stripe-js/react`}))},k=t.createContext(null);k.displayName=`ElementsContext`;var A=function(e,t){if(!e)throw Error(`Could not find Elements context; You need to wrap the part of your app that ${t} in an <Elements> provider.`);return e},se=function(e){var n=e.stripe,r=e.options,i=e.children,a=t.useMemo(function(){return O(n)},[n]),o=c(t.useState(function(){return{stripe:a.tag===`sync`?a.stripe:null,elements:a.tag===`sync`?a.stripe.elements(r):null}}),2),s=o[0],l=o[1];t.useEffect(function(){var e=!0,t=function(e){l(function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}})};return a.tag===`async`&&!s.stripe?a.stripePromise.then(function(n){n&&e&&t(n)}):a.tag===`sync`&&!s.stripe&&t(a.stripe),function(){e=!1}},[a,s,r]);var u=ee(n);t.useEffect(function(){u!==null&&u!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[u,n]);var d=ee(r);return t.useEffect(function(){if(s.elements){var e=ie(r,d,[`clientSecret`,`fonts`]);e&&s.elements.update(e)}},[r,d,s.elements]),t.useEffect(function(){oe(s.stripe)},[s.stripe]),t.createElement(k.Provider,{value:s},i)};se.propTypes={stripe:C.any,options:C.object};var ce=function(e){return A(t.useContext(k),e)},le=function(){return ce(`calls useElements()`).elements},ue=function(e){var t=e.children;return t(ce(`mounts <ElementsConsumer>`))};ue.propTypes={children:C.func.isRequired};var de=[`on`,`session`],j=t.createContext(null);j.displayName=`CheckoutSdkContext`;var fe=function(e,t){if(!e)throw Error(`Could not find CheckoutProvider context; You need to wrap the part of your app that ${t} in an <CheckoutProvider> provider.`);return e},pe=t.createContext(null);pe.displayName=`CheckoutContext`;var me=function(e,t){if(!e)return null;e.on,e.session;var n=s(e,de);return Object.assign(t||e.session(),n)},he="Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",ge=function(e){var n=e.stripe,r=e.options,i=e.children,a=t.useMemo(function(){return O(n,he)},[n]),o=c(t.useState(null),2),s=o[0],l=o[1],u=c(t.useState(function(){return{stripe:a.tag===`sync`?a.stripe:null,checkoutSdk:null}}),2),d=u[0],f=u[1],p=function(e,t){f(function(n){return n.stripe&&n.checkoutSdk?n:{stripe:e,checkoutSdk:t}})},m=t.useRef(!1);t.useEffect(function(){var e=!0;return a.tag===`async`&&!d.stripe?a.stripePromise.then(function(t){t&&e&&!m.current&&(m.current=!0,t.initCheckout(r).then(function(e){e&&(p(t,e),e.on(`change`,l))}))}):a.tag===`sync`&&a.stripe&&!m.current&&(m.current=!0,a.stripe.initCheckout(r).then(function(e){e&&(p(a.stripe,e),e.on(`change`,l))})),function(){e=!1}},[a,d,r,l]);var h=ee(n);t.useEffect(function(){h!==null&&h!==n&&console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.")},[h,n]);var g=ee(r),_=ee(d.checkoutSdk);t.useEffect(function(){if(d.checkoutSdk){var e=!!(!_&&d.checkoutSdk),t=g?.elementsOptions?.appearance,n=r?.elementsOptions?.appearance,i=!re(n,t);n&&(i||e)&&d.checkoutSdk.changeAppearance(n);var a=g?.elementsOptions?.fonts,o=r?.elementsOptions?.fonts,s=!re(a,o);o&&(s||e)&&d.checkoutSdk.loadFonts(o)}},[r,g,d.checkoutSdk,_]),t.useEffect(function(){oe(d.stripe)},[d.stripe]);var v=t.useMemo(function(){return me(d.checkoutSdk,s)},[d.checkoutSdk,s]);return d.checkoutSdk?t.createElement(j.Provider,{value:d},t.createElement(pe.Provider,{value:v},i)):null};ge.propTypes={stripe:C.any,options:C.shape({fetchClientSecret:C.func.isRequired,elementsOptions:C.object}).isRequired};var _e=function(e){return fe(t.useContext(j),e)},ve=function(e){var n=t.useContext(j),r=t.useContext(k);if(n&&r)throw Error(`You cannot wrap the part of your app that ${e} in both <CheckoutProvider> and <Elements> providers.`);return n?fe(n,e):A(r,e)},ye=function(){_e(`calls useCheckout()`);var e=t.useContext(pe);if(!e)throw Error(`Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.`);return e},be=[`mode`],xe=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},M=function(e,n){var r=`${xe(e)}Element`,i=n?function(e){ve(`mounts <${r}>`);var n=e.id,i=e.className;return t.createElement(`div`,{id:n,className:i})}:function(n){var i=n.id,a=n.className,o=n.options,l=o===void 0?{}:o,u=n.onBlur,d=n.onFocus,f=n.onReady,p=n.onChange,m=n.onEscape,h=n.onClick,g=n.onLoadError,_=n.onLoaderStart,v=n.onNetworksChange,y=n.onConfirm,b=n.onCancel,x=n.onShippingAddressChange,S=n.onShippingRateChange,C=n.onSavedPaymentMethodRemove,te=n.onSavedPaymentMethodUpdate,ne=ve(`mounts <${r}>`),T=`elements`in ne?ne.elements:null,E=`checkoutSdk`in ne?ne.checkoutSdk:null,re=c(t.useState(null),2),D=re[0],ae=re[1],O=t.useRef(null),oe=t.useRef(null);w(D,`blur`,u),w(D,`focus`,d),w(D,`escape`,m),w(D,`click`,h),w(D,`loaderror`,g),w(D,`loaderstart`,_),w(D,`networkschange`,v),w(D,`confirm`,y),w(D,`cancel`,b),w(D,`shippingaddresschange`,x),w(D,`shippingratechange`,S),w(D,`savedpaymentmethodremove`,C),w(D,`savedpaymentmethodupdate`,te),w(D,`change`,p);var k;f&&(k=e===`expressCheckout`?f:function(){f(D)}),w(D,`ready`,k),t.useLayoutEffect(function(){if(O.current===null&&oe.current!==null&&(T||E)){var t=null;if(E)switch(e){case`payment`:t=E.createPaymentElement(l);break;case`address`:if(`mode`in l){var n=l.mode,i=s(l,be);if(n===`shipping`)t=E.createShippingAddressElement(i);else if(n===`billing`)t=E.createBillingAddressElement(i);else throw Error(`Invalid options.mode. mode must be 'billing' or 'shipping'.`)}else throw Error(`You must supply options.mode. mode must be 'billing' or 'shipping'.`);break;case`expressCheckout`:t=E.createExpressCheckoutElement(l);break;case`currencySelector`:t=E.createCurrencySelectorElement();break;case`taxId`:t=E.createTaxIdElement(l);break;default:throw Error(`Invalid Element type ${r}. You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.`)}else T&&(t=T.create(e,l));O.current=t,ae(t),t&&t.mount(oe.current)}},[T,E,l]);var A=ee(l);return t.useEffect(function(){if(O.current){var e=ie(l,A,[`paymentRequest`]);e&&`update`in O.current&&O.current.update(e)}},[l,A]),t.useLayoutEffect(function(){return function(){if(O.current&&typeof O.current.destroy==`function`)try{O.current.destroy(),O.current=null}catch{}}},[]),t.createElement(`div`,{id:i,className:a,ref:oe})};return i.propTypes={id:C.string,className:C.string,onChange:C.func,onBlur:C.func,onFocus:C.func,onReady:C.func,onEscape:C.func,onClick:C.func,onLoadError:C.func,onLoaderStart:C.func,onNetworksChange:C.func,onConfirm:C.func,onCancel:C.func,onShippingAddressChange:C.func,onShippingRateChange:C.func,onSavedPaymentMethodRemove:C.func,onSavedPaymentMethodUpdate:C.func,options:C.object},i.displayName=r,i.__elementType=e,i},N=typeof window>`u`,Se=t.createContext(null);Se.displayName=`EmbeddedCheckoutProviderContext`;var Ce=function(){var e=t.useContext(Se);if(!e)throw Error(`<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>`);return e},we="Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Te=function(e){var n=e.stripe,r=e.options,i=e.children,a=t.useMemo(function(){return O(n,we)},[n]),o=t.useRef(null),s=t.useRef(null),l=c(t.useState({embeddedCheckout:null}),2),u=l[0],d=l[1];t.useEffect(function(){if(!(s.current||o.current)){var e=function(e){s.current||o.current||(s.current=e,o.current=s.current.initEmbeddedCheckout(r).then(function(e){d({embeddedCheckout:e})}))};a.tag===`async`&&!s.current&&(r.clientSecret||r.fetchClientSecret)?a.stripePromise.then(function(t){t&&e(t)}):a.tag===`sync`&&!s.current&&(r.clientSecret||r.fetchClientSecret)&&e(a.stripe)}},[a,r,u,s]),t.useEffect(function(){return function(){u.embeddedCheckout?(o.current=null,u.embeddedCheckout.destroy()):o.current&&o.current.then(function(){o.current=null,u.embeddedCheckout&&u.embeddedCheckout.destroy()})}},[u.embeddedCheckout]),t.useEffect(function(){oe(s)},[s]);var f=ee(n);t.useEffect(function(){f!==null&&f!==n&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")},[f,n]);var p=ee(r);return t.useEffect(function(){if(p!=null){if(r==null){console.warn(`Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.`);return}r.clientSecret===void 0&&r.fetchClientSecret===void 0&&console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."),p.clientSecret!=null&&r.clientSecret!==p.clientSecret&&console.warn(`Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.`),p.fetchClientSecret!=null&&r.fetchClientSecret!==p.fetchClientSecret&&console.warn(`Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.`),p.onComplete!=null&&r.onComplete!==p.onComplete&&console.warn(`Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.`),p.onShippingDetailsChange!=null&&r.onShippingDetailsChange!==p.onShippingDetailsChange&&console.warn(`Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.`),p.onLineItemsChange!=null&&r.onLineItemsChange!==p.onLineItemsChange&&console.warn(`Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.`)}},[p,r]),t.createElement(Se.Provider,{value:u},i)},Ee=N?function(e){var n=e.id,r=e.className;return Ce(),t.createElement(`div`,{id:n,className:r})}:function(e){var n=e.id,r=e.className,i=Ce().embeddedCheckout,a=t.useRef(!1),o=t.useRef(null);return t.useLayoutEffect(function(){return!a.current&&i&&o.current!==null&&(i.mount(o.current),a.current=!0),function(){if(a.current&&i)try{i.unmount(),a.current=!1}catch{}}},[i]),t.createElement(`div`,{ref:o,id:n,className:r})},De=function(){return ve(`calls useStripe()`).stripe},Oe=M(`auBankAccount`,N),ke=M(`card`,N),Ae=M(`cardNumber`,N),je=M(`cardExpiry`,N),Me=M(`cardCvc`,N),Ne=M(`fpxBank`,N),Pe=M(`iban`,N),Fe=M(`idealBank`,N),Ie=M(`p24Bank`,N),Le=M(`epsBank`,N),Re=M(`payment`,N),ze=M(`expressCheckout`,N),Be=M(`currencySelector`,N),Ve=M(`paymentRequestButton`,N),He=M(`linkAuthentication`,N),Ue=M(`address`,N),We=M(`shippingAddress`,N),Ge=M(`paymentMethodMessaging`,N),Ke=M(`affirmMessage`,N),qe=M(`afterpayClearpayMessage`,N),Je=M(`taxId`,N);e.AddressElement=Ue,e.AffirmMessageElement=Ke,e.AfterpayClearpayMessageElement=qe,e.AuBankAccountElement=Oe,e.CardCvcElement=Me,e.CardElement=ke,e.CardExpiryElement=je,e.CardNumberElement=Ae,e.CheckoutProvider=ge,e.CurrencySelectorElement=Be,e.Elements=se,e.ElementsConsumer=ue,e.EmbeddedCheckout=Ee,e.EmbeddedCheckoutProvider=Te,e.EpsBankElement=Le,e.ExpressCheckoutElement=ze,e.FpxBankElement=Ne,e.IbanElement=Pe,e.IdealBankElement=Fe,e.LinkAuthenticationElement=He,e.P24BankElement=Ie,e.PaymentElement=Re,e.PaymentMethodMessagingElement=Ge,e.PaymentRequestButtonElement=Ve,e.ShippingAddressElement=We,e.TaxIdElement=Je,e.useCheckout=ye,e.useElements=le,e.useStripe=De}))})),Jn=s(((e,t)=>{var n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,o=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},s=(e,t,o,s)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let c of i(t))!a.call(e,c)&&c!==o&&n(e,c,{get:()=>t[c],enumerable:!(s=r(t,c))||s.enumerable});return e},c=e=>s(n({},`__esModule`,{value:!0}),e),l=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())}),u={};o(u,{SubmissionError:()=>S,appendExtraData:()=>ie,createClient:()=>oe,getDefaultClient:()=>k,isSubmissionError:()=>x}),t.exports=c(u);var d=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,f=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function p(e){e=String(e);for(var t,n,r,i,a=``,o=0,s=e.length%3;o<e.length;){if((n=e.charCodeAt(o++))>255||(r=e.charCodeAt(o++))>255||(i=e.charCodeAt(o++))>255)throw TypeError(`Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.`);t=n<<16|r<<8|i,a+=d.charAt(t>>18&63)+d.charAt(t>>12&63)+d.charAt(t>>6&63)+d.charAt(t&63)}return s?a.slice(0,s-3)+`===`.substring(s):a}function m(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,``),!f.test(e))throw TypeError(`Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.`);e+=`==`.slice(2-(e.length&3));for(var t,n=``,r,i,a=0;a<e.length;)t=d.indexOf(e.charAt(a++))<<18|d.indexOf(e.charAt(a++))<<12|(r=d.indexOf(e.charAt(a++)))<<6|(i=d.indexOf(e.charAt(a++))),n+=r===64?String.fromCharCode(t>>16&255):i===64?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,t&255);return n}var h=()=>navigator.webdriver||!!document.documentElement.getAttribute(m(`d2ViZHJpdmVy`))||!!window.callPhantom||!!window._phantom,g=class{constructor(){this.loadedAt=Date.now(),this.webdriver=h()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},_=class{constructor(e){this.kind=`success`,this.next=e.next}};function v(e){return`next`in e&&typeof e.next==`string`}var y=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind=`stripePluginPending`}};function b(e){if(`stripe`in e&&`resubmitKey`in e&&typeof e.resubmitKey==`string`){let{stripe:t}=e;return typeof t==`object`&&!!t&&`paymentIntentClientSecret`in t&&typeof t.paymentIntentClientSecret==`string`}return!1}function x(e){return e.kind===`error`}var S=class{constructor(...e){this.kind=`error`,this.formErrors=[],this.fieldErrors=new Map;for(let t of e){if(!t.field){this.formErrors.push({code:t.code&&C(t.code)?t.code:`UNSPECIFIED`,message:t.message});continue}let e=this.fieldErrors.get(t.field)??[];e.push({code:t.code&&ee(t.code)?t.code:`UNSPECIFIED`,message:t.message}),this.fieldErrors.set(t.field,e)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){return this.fieldErrors.get(e)??[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function C(e){return e in w}var w={BLOCKED:`BLOCKED`,EMPTY:`EMPTY`,FILES_TOO_BIG:`FILES_TOO_BIG`,FORM_NOT_FOUND:`FORM_NOT_FOUND`,INACTIVE:`INACTIVE`,NO_FILE_UPLOADS:`NO_FILE_UPLOADS`,PROJECT_NOT_FOUND:`PROJECT_NOT_FOUND`,TOO_MANY_FILES:`TOO_MANY_FILES`};function ee(e){return e in te}var te={REQUIRED_FIELD_EMPTY:`REQUIRED_FIELD_EMPTY`,REQUIRED_FIELD_MISSING:`REQUIRED_FIELD_MISSING`,STRIPE_CLIENT_ERROR:`STRIPE_CLIENT_ERROR`,STRIPE_SCA_ERROR:`STRIPE_SCA_ERROR`,TYPE_EMAIL:`TYPE_EMAIL`,TYPE_NUMERIC:`TYPE_NUMERIC`,TYPE_TEXT:`TYPE_TEXT`};function ne(e){return`errors`in e&&Array.isArray(e.errors)&&e.errors.every(e=>typeof e.message==`string`)||`error`in e&&typeof e.error==`string`}var T=`4.0.0`,E=e=>p(JSON.stringify(e)),re=e=>{let t=`@formspree/core@${T}`;return e?`${e} ${t}`:t};function ie(e,t,n){e instanceof FormData?e.append(t,n):e[t]=n}function D(e){return typeof e==`object`&&!!e}var ae=class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,typeof window<`u`&&(this.session=new g)}submitForm(e,t){return l(this,arguments,function*(e,t,n={}){let r=n.endpoint||`https://formspree.io`,i=this.project?`${r}/p/${this.project}/f/${e}`:`${r}/f/${e}`,a={Accept:`application/json`,"Formspree-Client":re(n.clientName)};this.session&&(a[`Formspree-Session-Data`]=E(this.session.data())),t instanceof FormData||(a[`Content-Type`]=`application/json`);function o(e){return l(this,null,function*(){try{let t=yield(yield fetch(i,{method:`POST`,mode:`cors`,body:e instanceof FormData?e:JSON.stringify(e),headers:a})).json();if(D(t)){if(ne(t))return Array.isArray(t.errors)?new S(...t.errors):new S({message:t.error});if(b(t))return new y(t.stripe.paymentIntentClientSecret,t.resubmitKey);if(v(t))return new _({next:t.next})}return new S({message:`Unexpected response format`})}catch(e){return new S({message:e instanceof Error?e.message:`Unknown error while posting to Formspree: ${JSON.stringify(e)}`})}})}if(this.stripe&&n.createPaymentMethod){let e=yield n.createPaymentMethod();if(e.error)return new S({code:`STRIPE_CLIENT_ERROR`,field:`paymentMethod`,message:`Error creating payment method`});ie(t,`paymentMethod`,e.paymentMethod.id);let r=yield o(t);if(r.kind===`error`)return r;if(r.kind===`stripePluginPending`){let e=yield this.stripe.handleCardAction(r.paymentIntentClientSecret);if(e.error)return new S({code:`STRIPE_CLIENT_ERROR`,field:`paymentMethod`,message:`Stripe SCA error`});t instanceof FormData?t.delete(`paymentMethod`):delete t.paymentMethod,ie(t,`paymentIntent`,e.paymentIntent.id),ie(t,`resubmitKey`,r.resubmitKey);let n=yield o(t);return O(n),n}return r}let s=yield o(t);return O(s),s})}};function O(e){let{kind:t}=e;if(t!==`success`&&t!==`error`)throw Error(`Unexpected submission result (kind: ${t})`)}var oe=e=>new ae(e),k=()=>(A||=oe(),A),A})),Yn=c({loadStripe:()=>vr});function Xn(e){"@babel/helpers - typeof";return Xn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Xn(e)}var Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr=o((()=>{Zn=`v3`,Qn=function(e){return e===3?`v3`:e},$n=`https://js.stripe.com`,er=`${$n}/v3`,tr=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,nr=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,rr=`loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used`,ir=function(e){return tr.test(e)||nr.test(e)},ar=function(){for(var e=document.querySelectorAll(`script[src^="${$n}"]`),t=0;t<e.length;t++){var n=e[t];if(ir(n.src))return n}return null},or=function(e){var t=e&&!e.advancedFraudSignals?`?advancedFraudSignals=false`:``,n=document.createElement(`script`);n.src=`${er}${t}`;var r=document.head||document.body;if(!r)throw Error(`Expected document.body not to be null. Stripe.js requires a <body> element.`);return r.appendChild(n),n},sr=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:`stripe-js`,version:`5.10.0`,startTime:t})},cr=null,lr=null,ur=null,dr=function(e){return function(t){e(Error(`Failed to load Stripe.js`,{cause:t}))}},fr=function(e,t){return function(){window.Stripe?e(window.Stripe):t(Error(`Stripe.js not available`))}},pr=function(e){return cr===null?(cr=new Promise(function(t,n){if(typeof window>`u`||typeof document>`u`){t(null);return}if(window.Stripe&&e&&console.warn(rr),window.Stripe){t(window.Stripe);return}try{var r=ar();if(r&&e)console.warn(rr);else if(!r)r=or(e);else if(r&&ur!==null&&lr!==null){var i;r.removeEventListener(`load`,ur),r.removeEventListener(`error`,lr),(i=r.parentNode)==null||i.removeChild(r),r=or(e)}ur=fr(t,n),lr=dr(n),r.addEventListener(`load`,ur),r.addEventListener(`error`,lr)}catch(e){n(e);return}}),cr.catch(function(e){return cr=null,Promise.reject(e)})):cr},mr=function(e,t,n){if(e===null)return null;var r=t[0].match(/^pk_test/),i=Qn(e.version),a=Zn;r&&i!==a&&console.warn(`Stripe.js@${i} was loaded on the page, but @stripe/stripe-js@5.10.0 expected Stripe.js@${a}. This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning`);var o=e.apply(void 0,t);return sr(o,n),o},hr=function(e){var t=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    ${JSON.stringify(e)}
`;if(e===null||Xn(e)!==`object`)throw Error(t);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals==`boolean`)return e;throw Error(t)},_r=!1,vr=function(){var e=[...arguments];_r=!0;var t=Date.now();return pr(gr).then(function(n){return mr(n,e,t)})},vr.setLoadParameters=function(e){if(_r&&gr){var t=hr(e);if(Object.keys(t).reduce(function(t,n){return t&&e[n]===gr?.[n]},!0))return}if(_r)throw Error(`You cannot change load parameters after calling loadStripe`);gr=hr(e)}})),br=s(((e,t)=>{t.exports=(yr(),d(Yn))})),xr=y(),Sr=qn(),Cr=Jn();br();function wr(e){let{prefix:t,field:n,errors:r,...i}=e;if(r==null)return null;let a=n?r.getFieldErrors(n):r.getFormErrors();return a.length===0?null:w.createElement(`div`,{...i},t?`${t} `:null,a.map(e=>e.message).join(`, `))}var Tr=(0,w.createContext)({elements:null});function Er(){return(0,w.useContext)(Tr)}var Dr=w.createContext(null);function Or(){return(0,w.useContext)(Dr)??{client:(0,Cr.getDefaultClient)()}}var kr=`@formspree/react@3.0.0`;function Ar(e,t={}){let n=Or(),{client:r=n.client,extraData:i,origin:a}=t,{elements:o}=Er(),{stripe:s}=r;return async function(t){let n=jr(t)?Mr(t):t;if(typeof i==`object`)for(let[e,t]of Object.entries(i)){let r;r=typeof t==`function`?await t():t,r!==void 0&&(0,Cr.appendExtraData)(n,e,r)}let c=o?.getElement(Sr.CardElement),l=s&&c?()=>s.createPaymentMethod({type:`card`,card:c,billing_details:Nr(n)}):void 0;return r.submitForm(e,n,{endpoint:a,clientName:kr,createPaymentMethod:l})}}function jr(e){return`preventDefault`in e&&typeof e.preventDefault==`function`}function Mr(e){e.preventDefault();let t=e.currentTarget;if(t.tagName!=`FORM`)throw Error(`submit was triggered for a non-form element`);return new FormData(t)}function Nr(e){let t={address:Pr(e)};for(let n of[`name`,`email`,`phone`]){let r=e instanceof FormData?e.get(n):e[n];r&&typeof r==`string`&&(t[n]=r)}return t}function Pr(e){let t={};for(let[n,r]of[[`address_line1`,`line1`],[`address_line2`,`line2`],[`address_city`,`city`],[`address_country`,`country`],[`address_state`,`state`],[`address_postal_code`,`postal_code`]]){let i=e instanceof FormData?e.get(n):e[n];i&&typeof i==`string`&&(t[r]=i)}return t}function Fr(e,t={}){let[n,r]=(0,w.useState)(null),[i,a]=(0,w.useState)(null),[o,s]=(0,w.useState)(!1),[c,l]=(0,w.useState)(!1);if(!e)throw Error(`You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")`);let u=Ar(e,{client:t.client,extraData:t.data,origin:t.endpoint});return[{errors:n,result:i,submitting:o,succeeded:c},async function(e){s(!0);let t=await u(e);s(!1),(0,Cr.isSubmissionError)(t)?(r(t),l(!1)):(r(null),a(t),l(!0))},function(){r(null),a(null),s(!1),l(!1)}]}function Ir(e){let t=new Intl.DateTimeFormat(`en-US`,{timeZone:`Asia/Seoul`,year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`,second:`numeric`,hour12:!1}).formatToParts(e),n={};return t.forEach(e=>{n[e.type]=e.value}),{year:Number(n.year),month:Number(n.month),day:Number(n.day),hour:Number(n.hour),minute:Number(n.minute),second:Number(n.second)}}function Lr(e,t){return new Date(Date.UTC(e,t,0)).getUTCDate()}function Rr(e,t,n,r=0,i=0,a=0){let o=String(e).padStart(4,`0`),s=String(t).padStart(2,`0`),c=String(n).padStart(2,`0`),l=String(r).padStart(2,`0`),u=String(i).padStart(2,`0`),d=String(a).padStart(2,`0`);return new Date(`${o}-${s}-${c}T${l}:${u}:${d}+09:00`)}function zr(e=new Date){let{year:t,month:n,day:r}=Ir(e),i=Rr(t,n,Lr(t,n),0,0,0);if(e.getTime()>=i.getTime()){let e=n+1,r=t;e>12&&(e=1,r+=1);let i=Lr(r,e);return Rr(r,e,i,0,0,0)}return i}function Br(e){let{year:t,month:n,day:r}=Ir(e);return`${t}년 ${n}월 ${r}일`}var Vr={id:`saegyeol-2026-07-bisang`,slug:`2026-07-bisang`,title:`2026년 7월호`,theme:`비상`,displayTitle:`2026년 7월호 · 비상`,volume:`Vol.3`,label:`통권 3호`,archiveDate:`2026. 07`,archiveTitle:`비상`,archiveDescription:`통권 3호`,archiveSummary:`시 12편 · 비평문 2편 · 통권 3호`,badge:`현재 호`,status:`active`,publishDate:`2026-07-01`,nextIssueDate:`2026-08-13T00:00:00+09:00`,pdfPath:`/saegyeol-2026-07-bisang.pdf`,pdfActionLabel:`PDF로 읽기`,prefaceTitle:`머리말`,editors:[`양준희`,`박민준`],preface:``,editorNotes:[{author:`편집위원 박민준`,body:``},{author:`편집위원 양준희`,body:`우리는 유난히 무더운 여름의 한순간을 보내고 있습니다. 여러분의 일상에 늘 안녕이 함께하시길 간절히 소망합니다.

저는 굉장히 바삐 시간을 보내고 있습니다. 해야 할 일, 해야 할 공부, 그리고 글 쓰는 일을 함께 병행하는 것은 쉬운 일이 아닙니다. 체력이 따라주지 않아 이른 시간에 잠이 들기도 하고, 문득 모든 것을 내려놓고 싶다는 생각이 스칠 때도 있었습니다. 그럼에도 저는 지금의 삶이 좋습니다. 쉴 틈도, 걱정도 없이 바쁘게 살아간다는 것은 굉장한 축복입니다. 아직 무엇을 해야 할지 갈피조차 잡지 못한 채 방황하는 사람이 적지 않기에, 저는 제 삶이 하나의 특권이라고 굳게 믿고 있습니다.

혹 독자 여러분 가운데 아직 꿈을 찾지 못하신 분이 계시다면, 그 마음에 심심한 위로를 전하고 싶습니다. 그리고 금월에 낸 <새결> 3호 ‘비상’을 읽어 주실 것을 권합니다.

이번 호를 편집하면서 필자는 다양한 글을 접할 수 있었습니다. 저마다의 이야기와 시선은 달랐지만, 대부분의 글들이 깨달음과 성장을 얻는 과정을 묘사했다는 점에서 일맥상통했던 것 같습니다. 깨달음과 성장이란 꿈을 찾는 과정의 일부입니다. 스스로에게 질문을 던지고, 직관적인 체험과 꾸준한 수련을 통해 자신만의 답을 찾아가는 일, 그리고 이를 글로써 표현하는 과정은 지극히 추상적인 작업이지만, 동시에 읽는 이와 쓰는 이 모두를 변화시키는 신화적인 힘을 지니고 있다고 저는 믿습니다. 우리는 글을 쓰고, 또 읽는 과정에서 사고를 합니다. 사고를 한다는 것은 자아의 쟁취와 참나를 깨닫기 위한 필수적인 과정입니다.

어쩌면 '비상(飛上)'이란 거창한 도약이 아니라, 자신을 향해 끊임없이 질문을 던지는 태도에서 시작되는 것인지도 모릅니다. 한 편의 글을 읽고 마음이 흔들리는 순간, 한 줄의 문장을 쓰며 스스로를 마주하는 순간, 우리는 이전과는 조금 다른 사람이 됩니다. 그 작은 변화가 쌓여 삶의 방향을 바꾸고, 마침내 우리를 더 높은 곳으로 이끕니다.

이번 호에 실린 글들이 독자 여러분께도 그러한 계기가 되기를 바랍니다. 잠시 걸음을 멈추고 자신을 돌아보는 시간, 그리고 다시 앞으로 나아갈 용기를 얻는 시간이 되기를 소망합니다. 무더운 여름 끝에서 여러분 모두가 저마다의 '비상'을 이루시기를 진심으로 기원합니다.

편집위원 양준희`}],sections:[{title:`1부: 비상`,works:[{id:`wonui-chamsu`,title:`원의 참수`,author:`윤소민`,type:`시`,body:`원은 다정해서 사악하다.
중심을 향해 구부러진 호(弧) 위에서
우리는 무사히 늙어가는 법을 배웠다.

안정이란 결국
지속적으로 꺾이는 굴복의 다른 이름.

그늘진 궤도가 내 몸통을 길들이려 할 때,
나는 회전의 허리를 분지르고
선속도(線速度)의 칼날을 벼린다.

비상은 위를 향한 구걸이 아니다.
나를 가두던 원의 접선을 따라
무한한 허공으로 내던져지는
단 한 번의 정합적 참수.

높이 따위는 셈하지 않는다.
직선으로 튕겨 나간 자의 발 밑에서
정교했던 세상의 톱니바퀴가 와르르 쏟아진다.

포획될 수 없는 궤적,
중심을 부서버린 자가 자아내는
가장 서늘하고 잔혹한 방향성.

나는 지금
질서의 뺨을 베어물며 앞으로만 뻗어간다.`},{id:`penguinui-bisang`,title:`펭귄의 비상`,author:`박도현`,type:`시`,body:`새는 하늘을 날아야 한다고,
그 누가 정한 것이오

소인은 한평생
날개를 거두고 살아왔소.
상공을 떠다녀 본 적도,
구름 끝에 발을 얹어본 적도 없소.

허나 그것이
날개를 버렸다는 뜻은 아니오.

검은 턱시도를 여미고
차가운 바다를 품은 채,

소인은
수평선 끝을 따라 걷고,
깊은 해저를 누비며
세상을 살아왔소.

사람들은 소인을 두고,
날지 못하는 새라고 칭해왔소.

하지만 그들이 미처 보지 못한 것이 있었지.

물속으로 몸을 내던지는 순간,
날개는 파도 사이를 미끄러지고,
깃털 끝은 수면 아래 태양광에 환히 빛났소.

누군가는 구름을 가를 때, 내 날개는 파도를 갈랐으니.

구름을 가르는 것만이
비상이라면,
파도를 가르는 일은
무엇이라 불러야하오

남들은 하늘을 올려다볼 적,
소인은 바다를 올려다보았소.

그곳 또한
빛이 넘치고
자유가 가득한 세상이였으니.

그러니
소인의 비상은
높이 오르는 일이 아니어라.

제 세상을 만나
가장 자유로운 모습으로 나아가는 일이요.

그것이
내가 오늘도
기꺼이 내 날개를 펼치는 이유요.`},{id:`byeoreul-samkin-bada`,title:`별을 삼킨 바다`,author:`윤소민`,type:`시`,body:`나를 수놓은 진흙빛 그림자들이여,
기어이 나를 더 아득한 구렁으로 끌어내리소서.
찰나의 비명 같은 저 안쓰러운 빛 따위,
이제는 한 줄기도 목도하고 싶지 않으니.
차라리 이 짙은 칠흑에 완전히 잠식되어
차갑고 고요하게 익사하고 싶어라.

폐부 깊숙이 고여 있던 마지막 숨결이
투명한 방울이 되어 수면을 향해 거스를 때,
그것이 수면의 살결에 닿아 파열하는 매 순간마다
내가 간직했던 잔존하는 빛마저
함께 산산조각 부서지는 것만 같아서.

세상은 저토록 화사한 안료를 아낌없이 흩뿌리는데
내게 허락된 유일한 안식은 오직 무채색뿐.
빛바랜 나를 온전히 품어주고 환대하는 곳은
오직 이 눈먼 심해의 품뿐이라.

더 외롭고, 더 심연의 바닥으로 유영해 내려가면
나와 같은 흉터를 가진 아이들이 군상을 이루고,
그 기괴하고도 서글픈 연대가
내 마른 마음에 의외의 구원이 되어버리니.

그러던 어느 날, 궤도를 이탈한 별똥별 하나가
이 차디찬 심해의 불 꺼진 심장으로 추락했지.
그 뜨거운 낙하를 기꺼이 삼켜버린 나는
제 의지와 상관없이 다시 수면 위로 떠올라,

미지의 인력에 이끌려 원치 않는 구원을 당하고 만다.
기억의 모서리를 말끔이 마모되어 사라지고,
거짓말 같은 무지개 빛 생(生)을 유희하다가도.

아주 잠깐 걸음을 멈추는 순간,
찰나의 방심으로 본질을 간과하는 순간,
나의 진실했던 어둠을 완전히 망각하는 그 순간,

귀신같은 인력이 발목을 잡아채어
다시금 이 깊고 외로운 심해로 조장창 추락하고 마는,

그 무한의 굴레에 영원히 갇혀버린 나는,
결국 스스로를 삼키는 잔혹한 바다의 포로이자,
빛을 그리워하면서도 끝내 암흑을 호흡하는
영원한 이방인.`},{id:`sansang-suhun`,title:`산상수훈`,author:`양준희`,type:`시`,body:`동굴의 문을 연다–
가장 먼저 반겨주던 이는
나의 또래가 아니라
늠름한 모습의 하이얀 선생님.

발을 움직이며
가장 작은 쥐구멍 속
제자리를 찾는다
눈알을 굴리고선 두리번 두리번–

삼삼오오 사람들이
모여있는 이 곳은 대동계–
하나 이에 순종하는
자들인 것이 집회한 까닭이오.

가운을 입은 어르신들은
억센 목소리로 부드러운 노래를–
그 아래 대학생 형 누나들은
부드러운 움직임으로 억센 반주를–

하나가 되어 심장으로 키는
신비의 선율은
동굴 밖으로 새어가는 동아줄이 되어–
나의 비늘에 한 글자, 한 글자를 새겨낸다.

심령이 가난한 자는 복이 있나니
천국이 그들의 것임이요

온유한 자는 복이 있나니
그들이 땅을 기업으로 받을 것임이요

의에 주리고 목마른 자는 복이 있나니
그들이 배부를 것임이요
만일 나에게 비둘기 같이 날개가 있다면
날아가서 편히 쉬리로다.`},{id:`gwanjeom-chai`,title:`관점 차이`,author:`박도현`,type:`시`,body:`쓰레기장 한편에

덩그러니 놓여진

구겨진 종이 한 조각

누군가에겐

그저 버려진 흔적일 뿐이지만,

누군가에겐,

단 한번의 손길로

하늘을 가르는

종이 비행기가 된다.

문득,

나를 바라보는 시선도

그리 될 수 있을까?`}]},{title:`비평`,works:[{id:`munhagui-sae-jipyeong`,title:`문학의 새 지평 – 청소년 세대를 대변하는 리얼리즘적 문학`,author:`양준희`,type:`비평`,body:`21세기는 디지털 문화의 시대다. SNS 릴스, 숏츠, 이른바 ‘숏폼’이 인기를 끌며 점차 청소년 세대의 이목을 끌고 있는 한편, 고전적인 문화조류인 ‘문학’은 설 자리를 잃어 가고 있다. 이는 한국 사회의 문화적 지형이 재편되고 있음을 보여주는 대표적인 예시일 것이다.

대중들은 이 현상의 원인으로서 청소년 세대의 디지털 중독을 꼽곤 한다. 비록 틀린 진단은 아니나 이 요인이 대표적인 이유가 될 수는 없다. 결국 디지털 중독 역시 사회구조의 모순에서 비롯된 현상의 하나일 뿐이지, 근본적인 문제가 아니기 때문이다.

청소년 세대가 디지털 콘텐츠를 선호하게 된 근본적 요인은 바로 한국 사회가 가진 구조적 모순에 있다. 인간은 기본적으로 욕구 표현의 동물이다. 수면욕, 물욕, 성욕 등 개인이 가지고 있는 욕구에 기반해 행동하는 동물인 만큼, 자신이 추구하는 방향대로 살아가고자 하는 자율적 존재이다. 그런 맥락에서 인간은 예속을 경계하면서도 선호한다. 피지배 개체에 대한 주종관계를 설정하는 것도, 주종관계에 저항하는 것도, 결국 독립성을 위한 ‘인정투쟁(Anerkennungkampf)’으로부터 시작된다는 사실을 우리는 알고 있다.

독일의 철학자 헤겔(Hegel)에 의하면, 인간은 기본적으로 단순한 생물학적 욕구를 넘어 타자에게서 독립된 주체로서 인정받기를 원한다. 서로를 지배하기 위한 인정투쟁 속에서 죽음을 불사하는 주체가 ‘주인’이, 결국 굴복하는 이가 ‘노예’가 된다. 독일 철학자 악셀 호네트(Axel Honneth)는 이와 같은 ‘인정투쟁’ 개념을 피지배계층의 운동에 접목하며 확장하고자 한다. 피지배계층이 지배계층을 상대로 저항하는 것은 ‘생존’과 ‘독립’, 그리고 ‘자율’을 위한 인정투쟁의 성격을 가지고 있다는 것이다.

한국 사회는 이와 같이 ‘자율’을 중시하는 인간, 구체적으로는 청소년 세대에 대한 구조적인 주종관계를 형성하였다. ‘학생의 본분은 공부’라는 식의 논리가 대표적 예시이다. 이는 ‘자율’에 기반하여 각자의 개성을 표출하고자 하는 인간의 기본적인 욕구, 그리고 독립성을 억제하고자 하는 장치이자 레토릭이다.

필자는 물론 이와 같은 상황에 놓이지는 않았지만, 공립학교에 다니는 친구들의 모습을 목도하며 이 원칙이 유효함을 알게 되었다. 항상 어디냐고, 뭐 하냐고 물을 때 내 친구들은 ‘공부 중이야’라고 시종일관 답하고는 한다. 이와 같은 상태 속에서 청소년들은 학업적 스트레스 등 외부적 압박으로 인해 정서적 불안감을 겪는다. 그리고 이 정서적 불안감은 억제된 욕구와 충돌하여 결국 분노의 감정으로 승화된다.

디지털 환경의 숏폼은 청소년들이 분노를 해소할 수 있도록 허용된 ‘해방구’이다. 모든 숏폼이 그렇다고 할 수는 없겠지만, 대다수는 콘텐츠에 대한 집중력을 고도화하면서 대중성, 상업성을 확보하기 위해 짧은 시간 내에 다양한 ‘자극적 콘텐츠’를 제공한다. 그것이 폭력이 되었든, 혐오가 되었든, 찬밥 더운 밥 가리지 않고 오로지 높은 조회수와 수익을 위해 대중을 장치로서 사용한다.

이러한 숏폼은 청소년 세대가 억제되었던 욕구를 다양한 경험으로 해소할 수 있도록 가상적 공간을 부여한다. 본인이 원하는 콘텐츠를 접하며, 몇 번의 손가락 움직임만으로 원하는 자극을 취사선택할 수 있도록 한다. 이와 같은 감각은 제한된 자율성을 일시적으로 회복할 수 있도록 하는 매개체 중 하나로 자리 잡는다. 이러한 자극은 결국 상업성을 위한 폭력 또는 혐오감정과 함께 결합하면서 청소년들이 SNS로부터 얻는 쾌감을 극대화하고 중독 문제를 심화시킨다.

이처럼, SNS 숏폼이 기승을 부리며 문학의 쇠퇴를 초래하는 방향으로 문화적 지형이 변동하는 것은 결국 개인의 ‘자율성’을 억제하는 한국의 구조적 모순이 야기한 문제인 것이다.

이와 같은 문제의식을 기반으로 우리 21세기 청소년 문학이 다시 문화적 주류를 수복하기 위한 방법은 간단하다. 청소년 세대의 욕구와 정서적 불안감을 대변하는 ‘리얼리즘 문학’의 양식을 청소년 문학계에 도식하면 된다.

‘리얼리즘 문학’이란 주관적 감정이나 이상을 중시했던 낭만주의적 문학과 다르게, 현실에 존재하는 사회구조적 모순과 인간의 구체적인 생활을 드러내기 위한 태도로 대표되는 경향이다. 대표적 예시로는 존 스타인백(John Steinbeck)의 <분노의 포도>(The Grapes of Wrath), 오노레 드 발자크(Honoré de Balzac)의 <고리키 영감> 등이 있다.

문학을 사랑한다면 누구나 들어봤을 이 두 작품에는 공통점이 있다. 이 세 작품 모두 당대 사회적 체제의 피해자를 주인공으로 조명하며 구조적 모순을 고발하고자 한다. <분노의 포도>는 대공황 시절 ‘더스트 볼’이라는 대규모 먼지 폭풍과 농업의 기계화가 겹치면서 당시 이주 노동자들의 비극을 묘사하고, <고리키 영감>과 같은 경우는 19세기 자본주의화된 프랑스의 상류사회와 당대 유행하던 황금만능주의 그리고 도덕적 타락을 집중묘사하여 비판하고자 한다. 이러한 작품들이 대중성을 갖추게 된 이유는 결국 사회적 약자들과 소시민들의 울분을 대변했기 때문이다. 그 누구도 잡아 주지 않던 손을 문학이라는 조류가 잡아 주면서 이들의 상처를 치유했다.

우리 청소년 문학 역시 이와 같은 방향으로 나아가야 한다. 과열화된 입시경쟁, 늘 ‘본분’만을 강요하는 사회적 압박 속에서 고통을 신음하는 동세대 또래들을 대변하는 문학을 발전시켜야 한다. 그렇게 된다면 자극적이고 유해한 SNS 콘텐츠보다 문학이라는 더 건전한 해방구를 찾는 이들이 비교적 더 많아질 것이라고 전망한다. <분노의 포도>와 <고리키 영감>이 그랬던 것처럼, 문학이 청소년의 손을 잡고 마음을 어루만져야 한다. 그것이 바로 개성 있는 조류의 형성에 기여함과 동시에 우리 문학이 다시 대중성을 갖추게 되는 시작점이 될 것이다.`},{id:`maurice-blanchot-munhagui-gonggan`,title:`모리스 블랑쇼 문학의 공간 서평`,author:`김동현`,type:`비평`,body:`시인은 분쇄된 원두다. 갈린 원두는 커피가 아니다. 커피는 물이 부어 지기를 기다릴 뿐이다. 시인은 시를 쓰는 사람이 아니다. 자신을 뜨겁게 만들어줄 무언가가 오기를 기다리는 제물이다. 시가 오는 순간에 시를 자신을 통해 텍스트라는 형태로 내릴 뿐이다. 기다림은 시인의 가장 큰 자질이다.

시인은 외롭다. 혼자라서 외로운 것이 아니라 시가 통과된 시인은 더이상 그가 아니다. 뜨거운 물이 통과된 원두는 더이상 원두가 아니다. 원두는 쓰레기가 된다. 새로운 경험이 지나간 시인은 나를 잃어버린 버려진 껍데기가 된다.

시인은 실어증 환자다. 말을 해야하는데 말을 하지 못한다. 평범한 말이 두렵다. 평범한 말은 꽃을 죽인다. 자신의 말로 꽃, 숲, 바다를 모두 죽일 수 없어서 말을 하지 않는다. 시인은 말이라는 칼을 버리고, 시를 쓴다.

시인은 죽어야한다. 죽어야만 살아있는 사람의 언어 반대편의 죽음의 언어를 가져올 수 있다. 시인은 자주 죽어야 한다.`}]},{title:`2부: 자유`,works:[{id:`chirwolui-geurium`,title:`칠월의 그리움`,author:`양준희`,type:`시`,body:`거리에 묵시를 쩌렁쩌렁
울리던 그대는 어디갔는가

칼바람 몰아쳐 거리의 목을
죄는 그때에도 꼿꼿이
고개 세우던 그대는 어디갔는가

지리한 장마 내리는 칠월–
상록수 피고 바람에 죽는 때
가장 푸르른 요절을 한
그대를 기억하오

거리에 넋이 꽃으로 피어나
들불로 번져갈 때
제국의 아성은 무너지고
그 속에 물이 스며들어
새싹 하나 숨을 틔워냈네.

새싹은 세계수가 되어
하늘로 팔을 뻗고
동산의 작은 언덕
지키는 화신이 되니.

나의 사랑하는 그대여–
다시 아래로 소풍 오거든
이 땅에 묘목 하나만 심어 주오.`},{id:`yusil`,title:`유실`,author:`김태윤`,type:`시`,body:`어른들은 나를 보고
아직 어린 애라며 머리를 쓰다듬거나
이젠 다 컸으니 성숙해지라며 등을 떠민다

그 사잇길에서 나는 매일 조금씩 사라진다
장난감 자동차의 태엽을 감던 손으로
시험지 모서리를 구기는 일

내가 잃어버린 유년은
어느 골목길에서 해지는 줄 모르고
바람을 차고 있을 텐데`},{id:`garangbi`,title:`가랑비`,author:`최윤성`,type:`시`,body:`등에 쓰라리는 냉감,
고개를 쳐드니
하늘에 재 묻어 희무죽죽하구나.

차라리 폭우가 내릴 것을.
부단한 창궁
미풍에 흩날리는 방울방울이 밉다

쨍한 태양빛에 쬐이기를 바라오매
그뿐 아니라면 세찬 비바람에 젖으리.
천천히 젖어가는 것은
내 영에 모진 고문이올시다.

내 일생을 다시 살거든
야윈 바람 몰고 오지 마시고
큰 폭류
족함 모르게 내리시오.`},{id:`naneun-deoreoun-gilgeoriga-geuriwo`,title:`나는 더러운 길거리가 그리워`,author:`해방구`,type:`시`,body:`나는 더러운 길거리가 그리워.
엄마와 손 꼭 잡고 거닐던 그곳이 그리워.
개똥 한 덩이만 봐도 킥킥댈 수 있던 그곳이 그리워.
리어카만 봐도 반갑게 인사할 수 있던 그곳이 그리워.

손바닥에 그린 꼬부랑 “사랑해!”,
개똥 한 자락에서 핀 웃음꽃 민들레,
리어카에 실린 꿈나라 동화책.

너희, 도대체 어디로 갔어?
달나라로 갔니, 별나라로 갔니?
밤새우며 찾아도 찾을 수 없어.

맞아, 길거리가 너무 깨끗한 탓이야.
맞아, 길거리에 똥개가 사라진 탓이야.
맞아, 길거리에 폐지가 사라진 탓이야.

아니야.
길거리에 사랑이 사라진 탓이야.
꼬부랑 “사랑해!”도, 웃음꽃도, 꿈나라도
사랑 없이 있을 수 없어.
해설문

1. 구체성과 추상성의 간극에서

마르셀 프루스트가 『잃어버린 시간을 찾아서』에서 다루듯, 우리가 정녕 추억의 촉매로 삼는 것은 구체적 사물이 아닌 ‘감각’일 수 있습니다. [물론 감각이 순수 경험의 영역임을 주장하고자 함은 아닙니다.] 제가 다룬바 감각이라 함은, 이를 분석·현상하는 의식 활동을 의미하기보다 무의식 내지 생리 작용에 가깝다, 봄이 타당하겠습니다. 시대상이 아닌 시대상을 연상할 수 있는 공감각적 언어를 제시하기 위함이죠.
2. 소박성을 다룰 데 대해
도쿠다 엔켄(德田演鉉), 박목월 등의 소박성은 분명 비판받아 마땅하나, 소박성은 언제나 소박성 그 자체를 위함이 아닌 풍부한 인식으로 진일보하는 목적 역시 가집니다. 시상에서 ‘사랑’으로 성급히 결론지으며 은폐된 대상, 모종의 막연함은 역설적으로 (그것을 바로 보고자 하는) 청자의 의식과 긴장을 이루며 그 의미가 확장될 수 있음으로 역시 해석될 수 있습니다. 쉽게 말해, “해석은 청자를 비추는 거울이다.”라 볼 수 있겠습니다.`},{id:`nunmurui-ondo`,title:`눈물의 온도`,author:`윤소민`,type:`시`,body:`눈물은 마음이 차마 다 삼키지 못한
투명한 혈액이자, 데일 듯 뜨거운 문장입니다.
깊게 베인 자리마다 돋아나는 붉은 꽃잎은
비명 대신 피어난 당신의 생,
무너진 적벽 위로 울리는 가장 정직한 생존 신고입니다.

온도가 유독 들끓는 날에는
서둘러 찬바람에 마음을 내걸지 마세요.
서툴게 식힌 슬픔은 날카로운 얼음 파편이 되어
당신의 가장 연한 안쪽을 다시 할퀴고 지나갈 뿐이니.

그저 흐르게 두십시오.
눈물은 안구의 샘에서 솟는 것이 아니라
오래전 마음 속 유기된 눅눅한 절망들을
스스로 태우고 나오는 맑은 연기입니다.
그 뜨거운 고백이 뺨을 적시고 지나간 뒤에야
비로소 당신의 영혼은 단 한 뼘의 숨구멍을 얻습니다.

새살이 돋는 소리는 심해의 수평선처럼 고요해서
지금은 정지된 풍경처럼 보이겠지만,
당신이라는 대지는 지금 지독한 통증의 단층을 메우며
누구도 침범할 수 없는 고독한 성벽을 재건하는 중입니다.

다 나은 자리에 남은 흉터는
빛이 가로막힌 어둠의 흔적이 아니라
오히려 그 갈라진 틈새를 통해 더 깊은 슬픔을 이해하게된
폭풍우를 견뎌낸 나무의 단단한 옹이 같은 것.

식어버린 눈물은 이제 흉터가 아니라
당신이 사투하며 건너온 강물 위에 맺힌 윤슬입니다.
상처보다 더 깊어진 눈동자로 저무는 노을을 견디는 당신은,
이미 어제보다 거대한 고요를 찾아낸 사람입니다.`},{id:`miwanui-yeojeong`,title:`미완의 여정`,author:`박도현`,type:`시`,body:`한 남자가
서 있었다

조용히, 아스라이 떠가는 흰구름을 바라보며

그저 그런 얼굴에
턱에는 거칠게 자란 수염

수많은 사람들 사이로
자연스레 스며들 한 사람

그 남자도 꿈이 있었다
넓은 바다를 항해하고
저 멀리 빛이 나는 곳에 도달하는 것

하지만
남자는
그냥 서 있었다

그 무엇도 하지 못했다
꿈을 향한 첫 걸음조차도

그의 꿈은
현실이라는 벽 앞에 멈추었다

빛이 어디에 있는가
나는 진정 그 빛을 원하는가

남자는 제 자신에게 되물었다

다시 흰구름이 지나갔다

남자는
여전히 서 있었다`},{id:`geuneurui-yeonga`,title:`그늘의 연가`,author:`윤소민`,type:`시`,body:`자그만한 마음이라 얕보여도 좋아.
나 하나 온전히 쏟아 부어도
너의 세상에선 소수점 아래의 변화조차 크게 없겠지만,
그래도 나는 기어이 너의 오차범위 안에 머물래.

가장 낮은 곳에서 네 발목을 지키며
차마 닿지 못할 미소와 고백들은
해질녘 노을이 깔아준 붉은 길 위에
말 없는 그림자로 길게 늘여 보낼게.

사랑은 누군가의 가장 낮은 곳이 되어주는 일이 아니라
누군가의 추락을 받아내기 위해 먼저 바닥이 되는 일.
나는 네가 딛고 선 검은 웅덩이가 되어
네가 견디는 하루의 하중을 오롯이 나눠 가질거야.

갑작스러운 폭풍우가 네 어깨를 겨냥할 때
그저 말없이 네 곁은 가려주는 우산이 되어
너 대신 거센 빗줄기를 맞으면서도
네 발걸음만큼은 보송하게 지켜줄 수 있다면

내 어깨 한 쪽이 조금 서늘해진대도
네가 고개를 들어 다시 미소짓는 동안,
내가 너의 가장 짧고도 다정한 계절이 될 수 있다면
나는 기꺼이 너의 가장 깊은 그늘이 될게.`}]},{title:`에필로그`,works:[{id:`icarus`,title:`이카루스`,author:`윤소민`,type:`산문`,body:`가슴 깊은 곳에서 거친 파동이 일어납니다. 갈비뼈 마디마디를 무겁게 짓누르는 이 감정이 저를 아득한 바닥 끝까지 끌어내리고, 세상 모든 불빛은 등을 돌려버린 것만 같고, 한때 뜨겁게 뛰던 심장마저 이제는 썩어 문드러져 검은 물로 녹아내리는 듯합니다. 영원히 공중에 떠 있을 줄 알았던 저의 계절이 저물어버리고 나서야 깨닫는 이 비참함이 온몸을 파먹습니다. 이제는 아무 의미도 되지 못한 언어들이 하얀 밤 위로 가루처럼 흩어지고, 저는 비로소 이 부서진 고백을 처절하게 적어 내려갑니다.

돌아보면 제 삶은 언제나 하늘을 향해 미친 듯이 뻗치는 맨손의 궤적에 불과했습니다. 결코 잡을 수 없는 높이를 향해 허공을 갈라대던 부질없는 손짓. 손가락 끝이 시려오고 마른 눈물이 뺨을 찢을 때쯤이면, 저는 늘 절망이라는 비좁은 구렁텅이로 굴러떨어졌습니다. 하늘에 닿지 못한 이 헛된 몸부림을 두고 세상은 비상을 향한 노력이니, 열정이니 하는 그럴싸한 이름표를 붙여주었습니다.

하지만 자신을 온전히 불태워 저 높은 곳의 빛이 되겠다는 그 아름답도록 비참한 욕망. 그건 삼킬수록 내장 깊은 곳을 찢어발기는 독약에 불과하다는 것을 알면서도, 가증스럽게 저는 그 독을 스스로 삼켰고 다시 한 번 허공으로 몸을 던졌습니다.

날개를 펼쳤다고 믿었던 순간조차 사실은 가장 가파른 추락의 시작이었습니다.

영원히 공중을 향해할 줄 알았던 날개에 시커먼 재만 남았을 때, 사람들은 입을 모아 말했습니다. 누구나 처음부터 날 수는 없는 법이라고. 하지만 그 비겁하고도 미지근한 위로야말로 제게는 가장 깊은 흉터가 되었습니다. 감히 하늘에 닿지도 못할 거면서 그 끄트머리라도 만져보겠다고 깃털이 뽑히고 날개뼈가 으스러지도록 바둥거렸던 시간들. 그 처절한 비상의 대가로 제가 얻은 건 서늘한 바람조차 아닌, 단단한 땅바닥에 튀어 스며든 푸르스름한 피웅덩이뿐이었습니다.

포기하고 바닥에 엎드리면 편하다는데, 이상하게도 추락한 몸뚱이는 포기조차 마음대로 되지 않습니다. 차라리 바닥으로 추락해 산산조각 나버리면 속이라도 시원할 텐데, 저는 여전히 추락과 비상, 그 어중간한 경계에 붕 뜬 채 밤하늘을 기웃거립니다. 저보다 한참 위에서 서늘하고 찬란하게 궤적을 그리고 저 유성들을 지독하게 질투하면서. 기껏해야 스스로 빛을 내지도 못한 채 저 별들의 주위를 맴도는 초라한 돌덩이에 불과한 자신을 자책하면서.

우리는 어째서 비상이라는 달콤한 환상 하나에 온 삶을 쉽게 던져버렸을까요.

우리는 언젠가 날아오를 내일을 믿었고, 정작 날개가 부러져가는 오늘을 함부로 썼습니다.

바람이 다시 뼛속까지 서늘하게 불어옵니다. 부러진 날개뼈가 비명을 지르는데도, 저는 또다시 절벽 끝으로 절뚝이며 걸어갑니다. 추락할 것을 알면서도 다시 허공으로 몸을 던지는 이 지독한 병.

이것이 나의 비상이자, 나의 종말입니다.`}]},{title:`맺음말`,works:[{id:`maecheummal-2026-07`,title:`맺음말`,author:`새결 일동`,type:`맺음말`,body:`《새결》 7월호 원고에 마침표를 찍으며 그동안 읽었던 수많은 글들을 떠올립니다. 굉장히 수려한 문장으로 다양한 작가들이 저마다의 창의적인 세계를 펼쳐주셨습니다.

시인은 죽어야만 한다는 충격적이고도 신선한 관점을 담은 비평부터, 가장 낮은 비상을 하며 살아온 소인의 이야기, 그리고 비상과 추락을 역설하는 산문시에 이르기까지, 이번 통권 제 3호는 기존의 고정관념을 깨부순 파괴와 창조, 그 자체였습니다.

《새결》 이 꺼내는 문장은 불완전합니다. 그렇기에 우리는 그 문장들을 사랑합니다. 불완전하기에 더욱 날카롭고, 불완전하기에 더욱 부드럽습니다.

우리는 결코 포기하지 않겠습니다. 《새결》은 작심삼호로 종결하는 이름이 아닙니다. 끝없는 문학의 바다를 향해 돛을 올리고, 더 먼 곳을 향해 항해하겠습니다. 거친 풍랑을 맞딱뜨리더라도 결코 뒤집히지 않겠습니다. 이것은 우리 모두가 품고 있는 가장 당찬 포부이자, 문학을 향한 변치 않는 약속입니다.

앞으로도 저희의 불완전한 이야기가 독자 여러분의 마음에 작은 울림이 되기를 간절히 소망합니다.

새결 일동`}]}]},Hr=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),F=s(((e,t)=>{t.exports=Hr()}))(),Ur=`saegyeol`,Wr=`mrejeyvg`,Gr=[[`자격`,`누구나 — 나이, 학력, 경력 무관`],[`분량`,`시: 1편 이상 / 산문: 200자 원고지 기준 20매 이내`],[`형식`,`한글(.hwp) 또는 워드(.docx)`],[`마감`,`매월 셋째 주 일요일 자정`],[`발표`,`매월 말일 발행`],[`연락`,`010-3285-9833 (문자 우선)`]],Kr=[{department:`시 분과`,theme:`미정`,deadline:`매월 셋째 주 일요일`,status:`모집 중`},{department:`소설 분과`,theme:`추후 공지`,deadline:`미정`,status:`준비 중`},{department:`산문 분과`,theme:`추후 공지`,deadline:`미정`,status:`준비 중`}],qr=[{id:`yang-junhee`,name:`양준희`,role:`편집위원장`,image:`/contributors/junhui.jpg`,line:`“나는 성찰하는 시인이다.”`,description:`해가 뜨고 지는 순간 사이, 우리는 저마다의 흔적을 남깁니다. 저에게 문학이란, 시린 발자국을 글자로 아로새기며 인간적인 성장을 기록하기 위한 하나의 일기입니다. 이제 저는 <새결>이라는 이름 아래, 지나온 시간을 성찰하고 아직 쓰이지 않은 문장들을 노래하고자 합니다.`},{id:`park-minjun`,name:`박민준`,role:`편집위원`,image:`/contributors/minjoon.jpg`,line:`“나는 머무는 시인이다.”`,description:`무언가를 설명하려다 그만둔 자리에서 저의 시는 시작되었습니다. 감정에 이름을 붙이는 순간, 그것이 본래의 색을 잃고 조금씩 다른 것이 되어버린다는 느낌을 지울 수 없었습니다. 그래서 서둘러 결론을 내리는 대신, 그 막막한 상태 그대로 ‘머무는 쪽’을 택했습니다. 이제 저는 <새결>이라는 공간에서, 당신의 문장 곁에 가만히 닻을 내리려 합니다.`},{id:`yoon-somin`,name:`윤소민`,role:`기고가`,image:`/contributors/somin.jpg`,line:`“나는 흉터를 문장으로 빚는 작가다.”`,description:`모두가 완성된 문장에 마침표를 찍고 돌아설 때, 저는 그 문장이 시작되기 전의 시간들을 서성여 봅니다. 그렇게 저의 흉터를 정직하게 만져 내려간 기록들이, 언젠가 여러분의 숨겨진 상처 위로도 다정한 무늬처럼 겹쳐지길 바랍니다.`},{id:`park-dohyeon`,name:`박도현`,role:`기고가`,image:`/contributors/dohyun.jpg`,line:`“나는 결을 밝히는 시인이다.”`,description:`곰이 간 자리에 조용히 금(金)을 입혀 새로운 의미를 덧칠해 내는 일, 그것이 제가 글을 쓰는 이유입니다. 이제 저는 <새결>이라는 공간에서, 당신 안의 아름다움에 조용히 금빛 문장을 더하고자 합니다.`},{id:`sim-yul`,name:`심율`,role:`기고가`,image:`/contributors/yul.jpg`,line:`“나는 탐구하는 작가다.”`,description:`글을 쓰기 시작한 지 아직 일 년이 다 안 되었습니다. 미숙한 단어들을 문장으로 옮기다 보면, 대개 두어 가지 이상의 상이한 결론들을 맞이합니다. 하여, 나의 글은 초고입니다. 초고로 남겨두기로 하였습니다.`},{id:`kim-yohwan`,name:`김요환`,role:`기고가`,image:`/contributors/yohan.jpg`,line:`“나는 단순한 시인이다.”`,description:`시가 가볍게 즐기고 쉽게 공감할 수 있는 매체가 될 수 있다고 믿습니다. 이제 저는 <새결>이라는 이름 아래, 기교를 대신한 유머와 단순성이 어떤 파장을 일으킬 수 있는지 증명하고자 합니다.`},{id:`park-minjae`,name:`박민재`,role:`기고가`,image:`/contributors/minjae.jpg`,line:`시 분과 기고가`,description:`<새결> 창간호에 시를 기고합니다.`}],Jr=e=>e.sections?.reduce((e,t)=>e+t.works.filter(e=>e.type===`시`).length,0)??0,Yr=e=>{if(e.archiveSummary)return e.archiveSummary;let t=Jr(e);return t?`시 ${t}편 · ${e.label}`:e.archiveDescription},Xr=e=>e.title.replace(/호$/,``),Zr=[Vr,{id:`saegyeol-2026-06-yeoreum`,slug:`2026-06-yeoreum`,title:`2026년 6월호`,theme:`여름`,displayTitle:`2026년 6월호 · 여름`,volume:`Vol.2`,label:`통권 2호`,archiveDate:`2026. 06`,archiveTitle:`여름`,archiveDescription:`통권 2호`,archiveSummary:`시 19편 · 비평문 3편 · 통권 2호`,badge:`현재 호`,status:`active`,publishDate:`2026-06-01`,nextIssueDate:`2026-07-13T00:00:00+09:00`,pdfPath:`/saegyeol-2026-06-yeoreum.pdf`,editors:[`양준희`,`박민준`],preface:`우리는 다시 묻습니다. 계절이 바뀌는 동안 우리의 문학은 어디로 흘러왔습니까?

창간호를 통해 ‘개화’라는 파열의 기록을 세상에 툭 던져놓았던 《새결》이, 이제 막 초록이 들끓기 시작하는 유월의 한복판에 다시 섰습니다. 봄날의 피어남이 필연적인 찢어짐의 고통이었다면, 이번 6월호가 마주한 여름은 그 찢어진 살점 위로 돋아난 팽팽한 딱지와 굳은살의 기록입니다.

이번 호는 유독 불균질하고 서늘한 온도의 문장들이 지면을 채우고 있습니다. 평생을 논두렁과 흙탕물 속에서 허위적거리며 자식의 단단한 디딤돌이 되어준 노부모의 투박한 고백이 있는가 하면, 평생 상복을 일상복처럼 입은 채 죽음을 삶 안으로 의연하게 끌어안았던 에밀리 디킨슨의 투명한 고독이 나란히 누워 있습니다.

세련되게 다듬어지고 매끄럽게 소비되는 기성 문학의 문법을 거부합니다. 우리는 찬란하게 파산하고 눅눅하게 버텨내는 이 지면의 솔직함을 사랑합니다. 전통의 텍스처 위에 가장 모던한 파동을 새기겠다는 우리의 선언은 이 여름에도 멈추지 않습니다. 한 장 한 장 넘길 때마다 활자 너머로 번져오는 흙내음과 식지 않은 서늘한 재의 감촉을 온몸으로 감각해 보시길 바랍니다.

새결 일동`,editorNotes:[{author:`박민준`,body:`처음 원고들을 넘겨받았을 때, 역설적이게도 가장 먼저 떠오른 감각은 숨이 조여오고 근육이 떨리기 시작하는 어떤 지점이었다.

이번 호에 실린 텍스트들은 하나같이 안쪽에서 무섭게 마찰하고 있다. 세상이 온통 완벽한 평화와 다정함을 연기할 때 그 뒤편의 흉터를 응시하거나, 이미 끝난 계절을 등딱지처럼 계속 지고 가는 슬픔이 그랬다. 그것들은 모두 어떤 한계의 장력(張力)을 견뎌내고 있었다.

문학의 아름다움은 질서가 안전하게 유지되는 동안이 아니라, 그 질서가 무게를 견디지 못하고 끝내 찢어질 때 태어난다고 믿는다. 규율을 설명하거나 정해진 방법을 따르는 것은 이미 많은 무게가 먼저 눌러놓은 자국을 답습하는 일일 뿐이다. 편집자로서 내가 이번 지면에서 하고 싶었던 일은, 이 불가능해 보이는 삶의 하중과 압력의 방향을 향해 온몸으로 밀려 들어간 문장들을 있는 그대로 펼쳐 보이는 것이었다.

우리는 흔히 삶이 완벽해야만 사랑할 자격이 주어지리라 믿곤 한다. 그러나 이번 지면의 글들은 반대로 말한다. 완성되지 않았기에 무너지지 않았고, 불완전하기에 계속 나아갈 수 있다고. 금이 간 항아리가 새어 나가는 물줄기로 바닥에 그려놓는 삐뚤어진 무늬처럼, 이 글들은 완벽의 기준 바깥에서 저마다의 실존을 증명해 내고 있다. 잘 지탱하고 있는지는 모르겠다. 다만 억지로 봉합하지는 않았다.

누군가는 영어로 된 시를 한국어 지면에 조판하는 것을 주저할 때, 우리는 유월이라는 운명적인 연결고리를 찾아내 원문과 번역을 나란히 배치하는 과감함을 택했다. 연루를 피하기 위해 거리를 유지하기보다, 비록 흔들릴지언정 그 조여오는 장력의 끝까지 몸을 밀어 넣는 방식을 지지한다.

우리는 한계를 지우지 않을 것이다. 세상은 언제나 더 매끄럽고 빠른 것을 요구하지만, 우리는 더 깊은 곳에서 침묵을 축적해 온 영혼들의 손을 잡고 싶다. 저마다의 속도로 붕괴의 선을 정확히 비켜서서 서로를 버티고 있는 이 단단한 간격들이, 독자 여러분의 마음에 지워지지 않는 결로 남기를 바란다.

편집위원 박민준`},{author:`양준희`,body:`어느새 5월은 다 지나가고 6월이 다가왔습니다. 5월에서 6월, 고작 달력 한 장을 넘겼을 뿐인데 우리 눈에 차는 풍경은 사뭇 달라 보입니다. 하얗게, 소복히 쌓인 벚꽃은 어느새 부드럽게 이는 바람에 몸을 맡겨 우리 곁을 떠나고, 그 자리를 대신한 것은 어린 이파리였습니다. 초록의 서사를 담은 이 이파리들을 보며 저는 제가 가장 좋아하는 노래, 김민기 선생님의 <상록수>를 떠올립니다.

“돌보는 사람도 하나 없는데… 땀 흘리리라… 깨우치리라… 거칠은 들판에 솔잎 되리라…”

<상록수>의 클라이맥스라고 할 수 있는 이 가사는 유난히 이번 6월호 “여름”을 편집하는 저의 가슴속에 깊이 맺힙니다. 화려하게 피고 지는 벚꽃과는 다른 모습이지만 그 누구에게도 손 벌리지 않고 거친 세상 속에서 당당히 살아가려는 이 어린 이파리의 굳센 다짐이 제 마음과 공명합니다. 오히려 저에게는 찬란한 벚꽃보다도 묵묵하게 자리를 지키며 초록을 키워가는 이 여름 이파리가 더 아름답게 보일 뿐입니다.

솔직히 “여름”이 6월호의 주제로 선택되었을 때 “큰일 났다”라는 생각밖에 들지 않았습니다. 여름에 대해서 단 한 번도 생각해 본 적이 없을 뿐더러, 이에 대해서 작품을 써 본 적 역시 없습니다. 저에게 여름은 단순히 “한낮에 찌는 더위의 시련”일 뿐이었습니다.

그럼에도 저는 포기하지 않고 컴퓨터 앞에 앉았습니다. 비록 돌보는 사람은 하나 없지만, 땀 흘리며 깨우치고, 거칠은 들판 속에서 솔잎이 되고 싶었습니다.

아마 우리 <새결> 동료 기고진들 역시 저와 똑같은 다짐을 했을 것입니다. 이번 기회를 통해 우리 동료들이 저마다의 자리에서 자신만의 시선으로 여름을 새롭게 바라보고, 계절의 한가운데 속에서 느끼는 감정들과 생각을 글로 깊게 승화할 수 있지 않았을까 싶습니다.

생각해 본 적이 없는 것을 해체하고 이를 다른 관점에서 비판적으로 사고하는 것, 그것이 바로 우리 <새결>의 창간 취지였습니다. 그래서 이번 6월호 “여름”이 우리의 따뜻한 성장일기이자 거친 계절 속에서 잃지 않는 초심으로 남았으면 합니다.

아무쪼록 저희의 작품에 관심을 가져 주셔서 진심으로 감사합니다. 저희의 작품들이 독자 여러분께 큰 귀감이 될 수 있기를 진심으로 소망합니다.

매월, 매년, 늘 성장된 작품으로 여러분을 찾아뵙겠습니다.

편집위원 양준희`}],sections:[{title:`1부: 여름`,works:[{id:`yunseul`,title:`윤슬`,author:`정시후`,type:`시`,body:`풍랑이 해면을 유린하던 밤,
심연 속 군상은 표류하며 흩어져
바다는 그 오랜 마멸 속 오직
침잠만을 갈구할 처지일 뿐이니

그러나 격량도 제 격랑에 진하여
스스로 숨을 거두고 돌아설 테이니,
파란이 제 아무리 깊으랴 한들,
더 고요한 밤만 피어내지 않으랴.

부서진 언저리마다 그 품은 더 깊어져
여명이 임하여 내 도야를 살피고
드디어 날 위해 빛을 내리시니,
이 빛을 우리는 윤슬이라 칭한다.
우리의 일생도 이와 같음이,
오랜 파란와 침식 끝엔 오직
더 넓고 깊어진 내 안에 깃들,
찬란한 빛이오 윤슬일 것이니`},{id:`jangmaga-gileotda`,title:`장마가 길었다`,author:`박민준`,type:`시`,body:`반지를 빼자

손가락이 늦게 따라 나왔다

몇 번을 씻어도

초록은 피부보다 안쪽에 있었다

시계를 풀자

손목에서 하루가 흘러내렸다

가죽 안쪽에는

하얀 저녁들이 말라붙어 있었다

창문은 열려 있었지만

방은 계속 닫히는 중이었다

물을 마시러 갔다

장판은 젖어 있었고

발은 자꾸

방 쪽으로 자랐다

쩍
쩍

싱크대 앞에서

컵을 들고 있었다

물은 아직 차가웠는데

목은 한동안

도착하지 않았다

그날 밤

불을 끄려다

스위치 위에 남은 손자국을 보았다

엄지를 포개 보았지만

들어맞지 않았다

손자국은 그대로였는데

손이 먼저 지나가 있었다`},{id:`gokdeului-yunjeon`,title:`곡들의 윤전(輪轉)`,author:`양준희`,type:`시`,body:`타들어가는 나무의 피부 속
저물어가는 이파리에
한 번, 두 번 손짓을–

길게 늘었던 동상의 금들은
무게에 무릎을 꿇은 파편이 되어

상쾌한 매연이 한 올씩 나리주던
지리한 장마는 알갱이가 되어
입술 끝에 맺히는 마지막 세례.

잎새에 이는 손님–
뻣뻣한 푸르름은 눌러터진
노을의 손을 어루고
고였던 이슬을
한 방울, 두 방울…
지새웠던 기인 밤–
이슬은 대지를 적시고
들판이 켜는 선율이
새겨낸 상록의 젊음.

시간이 지나
머리 우로 내리쬐는
한낮의 조명에–

소만(小滿)을 담은
젊음의 노래는 다시
녹슬어 간다.

무게에 무릎을 꿇은 파편은
길게 늘었던 나의 금이었으니

타들어가는 나무의 피부 속
저물어가는 나의 모습에
이제–
세상을 향해 한 번, 두 번,
마지막 손짓을`},{id:`chaedo`,title:`채도 (彩度)`,author:`윤소민`,type:`시`,body:`어디선가 풋사과 향이 번지기 시작하면
정오는 가장 눈부신 농도로 물들 준비를 한다.

바람의 귓등을 가볍게 스쳐 가는
싱그러운 열기 속에서 세상은 온통 배경이 되고,
누군가 밤새 가로수의 푸른 호흡을 모아
이 도시에 커다란 초록색 물감을 쏟아놓은 것 같다.

흘러내린 채 마르지 않는 청춘의 문장들
빛은 부서지지 않고 아스팔트 위로 투명하게 고여 있으며
담벼락을 짚은 손바닥에는
삼십이 도의 지워지지 않는 싱그러운 온도가 찍힌다
지나치게 찬란해서 눈이 멀 것 같은 저 채도 속에서
새들은 푸른 잎사귀 사이로 가볍게 날아오른다

우리는 왜 이 반짝이는 계절의 품을 벗어나지 못하고
가장 뜨거운 마음으로 서로를 바라보고 있는 걸까

피할 길 없는 햇살의 중심,
늘어난 그림자를 발맞추어 걸어갈 때
우리는 모두
덜 마른 여름 속에 완전히 갇혀
서로의 옷깃에 지독한 초록을 묻히고 있다

마치 이 순간을 영원히 기억하겠다는 듯이,
끝내 마르지 않을 눈부신 얼룩을 서로에게 새기며`},{id:`basakhan-gieok-han-jogak`,title:`바삭한 기억 한 조각`,author:`윤소민`,type:`시`,body:`차가운 한여름의 딸기와
불타는 한겨울의 수박을 깍둑썰어 넣고
봄날의 말간 이슬 한 잔,
단풍잎 속에서 졸고 있던 도토리 몇 알을 더해
시간의 품 안에서 달콤하게 갈아버린다.

아직은 설익은 풋풋한 어른 하나와
부쩍 철이 들어버린 성숙한 아이 하나,
그들이 함께 섞은 빛과 어둠의 눈물 조각을
고명처럼 얹어 햇살 아래 노릇하게 구워내면
세상에서 가장 값비싼 청춘의 파편이 완성된다.

한 입 베어 물면 ‘바삭’하고 깨어나는 그날의 공기,
혀끝을 스치는 맛은 오묘하기 짝이 없어서
치열했던 짭짤함과 서툴렀던 씁쓸함,
그리고 뒤늦게 밀려오는 애틋한 달콤함까지.
입안에 남은 건 까끌까끌하면서도 기분 좋은 잔상뿐이라,

그날의 찌릿한 전율은 시들지 않는다.
낡은 보물 상자, 거미줄 친 기억의 틈새에
대롱대롱 매달려 가장 고운 꿈을 꾸는 우리

삼킬 수도, 뱉을 수도 없는 그 시절의 열병이
여전히 맥박을 타고 뜨겁게 달린다.
계절이 몇 번을 고꾸라져도 시들지 않을,
오직 우리만이 아는 그 여름의 비명.`},{id:`baekyaui-imyeon`,title:`白夜의 이면`,author:`박도현`,type:`시`,body:`여름이라고 하면
늘 밝기만 한 줄 안다

길게 늘어진 낮과
숨 막히게 뜨거운 태양

해변가에서
젖은 웃음이 이어지고

잘 익은 수박 아래
아이들은 아무 걱정 없이 웃는다

태양은 끝내 식지 않을 기세로 일렁이고
세상은 푸르게 빛난다

빛이 넘쳐 날수록
그림자는 더 짙어진다

그러나 한낮이 되면
그림자는 홀연히 사라진다

사실 사라진 것이 아니라
아무도 보지 못할 만큼
제 발밑으로 숨었을 뿐

그래서였을까

나는

가장 밝은 곳에서
가장 오래 헤매고 있었다.`},{id:`geobugiiui-deungttakji`,title:`거북이의 등딱지`,author:`박도현`,type:`시`,body:`길을 걷다 우연히 거북이를 마주하였습니다.

그리고 궁금해졌습니다.

등딱지가.

그 안에는 무엇이 담겨 있을까.
왜 그 무거운 것을 평생 등에 지고 다닐까

우리는 거북이의 속을 본 적이 없습니다.
단단한 껍질 너머에 무엇이 있는지,
어떤 모양 of 살과 어떤 온도의 마음이 있는지 알지 못합니다


사람들도 그와 다르지 않은 것 같아요.

겉으로 드러난 것보다
숨겨둔 것이 더 많으니까요

누군가는 상처를,
누군가는 그리움을,
또 누군가는 오래된 계절을 하나 품고 살아갑니다

저는 그 계절이 문득 여름처럼 느껴졌습니다.

여름은 유난히 덥습니다

아스팔트는 뜨겁고,
햇빛은 등에 상당한 무게감을 싣죠
그런데도 거북이는 등딱지를 벗어놓지 못합니다

자신을 지키기 위해서일 수도 있고
그냥 오랫동안 그렇게 살아왔기 때문일 수도 있습니다

그치만 저는
그냥 그 모습이 슬픕니다

너무 더운 날에도 벗을 수 없는 것.
이미 끝난 계절인데도 계속 등에 얹고 있어야 하는 것

그래서 여름의 거북이를 보면 그런 생각이 듭니다

떠난 줄 알았던 여름이
사실은 떠나지 못한 채
누군가의 등 위에 조용히 서성이고 있는 것이 아닐까 하고.`},{id:`nalgae-pyeoneun-gyejeol`,title:`날개를 펴는 계절`,author:`박도현`,type:`시`,body:`13년 만에
무겁게 짓누르던 풋내 섞인 이불을 걷고 나와

천천히 젖은 날개를
훌쩍 펴본다

매미의 시간은
기다림에서 온다

기다린 만큼

날개는 바람의 모양을 익히고
목소리는 여름을 품는다

한 줄기 빛 스미지 않던 땅속에서도
끝내 놓지 않고 품어 온 하늘 하나

비로소 햇살 아래 서서
나만의 노래를 부른다

아직 서툰 떨림일 뿐일지라도

그 소리는

열 세번의 여름을 품은 침묵이
처음으로 세상에 닿는 순간이다.`}]},{title:`비평`,works:[{id:`siseonui-nopiwa-geori-dugi`,title:`시선의 높이와 거리 두기 : 두려움이 풍경이 되는 순간`,author:`이길상`,type:`비평`,body:`어느 조용한 오후, 정동진 호텔 로비의 나지막한 좌석에 앉아 수면을 바라보았다. 수면 아래로 내려가 앉게 되어있는 '침강형(Sunken)' 바닥에 놓인 소파에 앉아 바라본 물결은 아름답기보다 어지러웠다. 그러나 잠시 몸을 일으켜 선 채로 같은 곳을 내려다보자 졸졸 흐르는 평화로운 물소리와 함께 잔잔한 물결이 퍼지고 있었고, 그 잠시 동안의 물멍은 마음을 평화롭게까지 했다. 단지 몇 십 센티미터 시선의 높이 차이가 '불안'을 '편안'으로 바꾼 것이다.

이 차이는 우리의 뇌와 시선이 정보를 처리하는 방식에서 비롯된다. 일어섰을 때(부감 시점), 물결은 내 발 아래에 있고 나는 그 전체적인 패턴을 한눈에 조망한다. 뇌는 "나는 안전한 곳에서 상황을 통제하고 있다"고 인지하며 안도감을 느낀다. 반면 앉았을 때(낮은 시점), 수면과 눈높이가 비슷해지면 움직이는 물결이 시야의 대부분을 차지한다. 이때 몸은 가만히 있는데 눈은 물결을 쫓으며 시각 정보와 평형 감각 사이의 불일치가 일어난다. 이것이 바로 '베르티고(Vertigo) 현상'으로, 뇌가 주변 환경의 급격한 변화를 '나의 흔들림'으로 착각해 어지럼증을 유발하는 것이다.

정동진 바다부채길을 산책하면서 비슷한 경험이 이어졌다. 파도가 치는 백사장에서 오래 걷는 것을 무서워하던 아내는, 정동진 해안단구의 절경을 조망하며 바다 위를 산책할 수 있도록 만들어진 정동진 바다부채길의 데크에서는 바다를 마음껏 즐기며 오래도록 걸었다. 여기에는 인류가 본능적으로 느끼는 '전망 효과(Prospect-Refuge Theory)'가 숨어 있다. 백사장처럼 낮은 시선에서는 밀려오는 파도의 높낮이가 실제보다 크게 느껴져 본능적인 위협으로 다가오지만, 높은 데크 위에서는 거대한 자연을 내가 '조망'하고 있다는 감각이 생겨난다. 자연을 통제 가능한 범위 안에 두었다는 인지가 심리적 안전 거리를 확보해 주는 것이다.

또한, '고정된 기준점'의 유무도 큰 역할을 한다. 발이 푹푹 빠지는 모래와 끊임없이 움직이는 파도는 우리를 시각적·신체적으로 불안정하게 만든다. 반면 바다부채길의 데크는 견고하고 수평이 명확한 구조물이다. 눈앞에 역동적인 파도가 치더라도 발밑에 단단하고 평평한 '직선의 기준점'이 있으면, 우리 뇌는 훨씬 적은 에너지를 써서 평형을 유지할 수 있다. 그 기준점 덕분에 우리는 비로소 지치지 않고 풍경을 즐길 수 있게 된다.

미학자 에드워드 불로는 이를 '심리적 거리두기(Psychical Distance)'라 불렀다. 그는 망망대해의 선원에게 안개는 '공포'이지만, 안전한 곳의 관찰자에게 안개는 '예술'이 될 수 있다고 설명했다. 우리가 슬픈 영화나 드라마를 보며 눈물을 흘리면서도 카타르시스를 느끼는 이유도 마찬가지다. 화면 속 비극이 나의 실제 삶을 침범하지 않을 것이라는 안전장치가 있을 때, 슬픔은 비로소 정화된 아름다움으로 승화된다.

결국 삶의 지혜 또한 이 '적정한 거리'를 찾는 데 있지 않을까 생각해본다. 너무 가까이 다가가 서로의 가시에 찔리는 고슴도치처럼, 우리는 때로 문제에 너무 깊이 함몰되어 사소한 감정의 일렁임에 어지럼증을 느낀다. 이때 내가 처한 상황을 한 발짝 뒤에서, 혹은 한 편의 드라마를 보듯 바라보는 '자기 거리두기'는 우리를 감정의 소용돌이에서 건져 올려준다. 당장 눈앞의 파도에 집중하기보다 먼 수평선을 바라볼 때 마음이 평온해지듯, 인생의 비극도 멀리서 바라보면 비로소 찬란한 풍경이 될 수도 있지 않을까?

'거리'를 둔다는 것은 대상을 외면하는 것이 아니다. 더 잘 이해하기 위해, 그리고 더 깊이 사랑하기 위해 나만의 '데크'를 만드는 지혜다. 바다를 두려워하던 아내가 정동진 바다부채길의 데크 위에서 바다와 사랑에 빠졌듯, 삶이라는 거대한 바다 앞에서도 자신만의 적절한 시선의 높이와 거리를 찾을 수 있다면 거친 물결도 아름다웠던 파도의 풍경으로 기억될 날이 올 수 있지 않을까?`},{id:`huinoteul-ibeun-yeoin`,title:`흰옷을 입은 여인`,author:`김동현`,type:`비평`,body:`죽음이 귀한 시대에 살고 있다. 죽음이 귀해서 삶이 하찮아지고 있다.

흰옷을 입은 여인은 에밀리 디킨슨이다. 에밀리는 평생 소수의 사람과 교제를 했지만 누구보다 많은 사람을 사랑했다. 하지만 그녀의 조카가 죽고, 어머니가 죽고, 친구가 죽고, 스승이 죽고, 남편이 될 사람이 죽었다. 에밀리는 죽음이 너무 자주 있어서 상복을 마치 일상복처럼 입고 있다.

사랑하는 사람이 끊임없이 죽어가는 상황에서도 에밀리는 당황하지 않는다. 오히려 죽음을 일상의 삶 안으로 끌어온다. 정수기 버튼을 누르면 죽음이라는 물이 나오고, 죽음이라는 의자에 앉아서 삶에 대한 시를 쓴다.

현대의 우리에게 죽음은 축구 경기 후반에 나오는 교체 선수처럼, 인생 후반에 삶에 지쳐버린 인간이 떠나는 퇴장처럼 보인다. 죽음이 내가 아닌 타인이 떠나는 하나의 쇼츠 동영상처럼 자극적이지만 빨리 넘겨버려야 할 무엇으로 처리된다.

반면에 에밀리는 죽음을 차분히 이용한다. 책을 읽고, 출판하지 않을 시를 쓰고, 정원의 꽃을 보고, 창으로 들어오는 햇빛을 즐긴다.

흰옷을 입은 여인은 에밀리 디킨슨이 죽음을 삶의 가벼운 즐거움으로 어떻게 바꾸는지를 크리스티앙 보뱅의 모호하지만 뚜렷해지는 문체로 읽을 수 있는 책이다.`}]},{title:`Emily Dickinson 번역시`,works:[{id:`im-nobody-who-are-you`,title:`I'm Nobody! Who are you?`,author:`에밀리 디킨슨`,type:`시`,body:`I'm Nobody! Who are you?             나는 아무도 아니란다! 너는 누구니?
Are you - Nobody - too?              너도 — 아무도 아니니?
Then there's a pair of us!           그럼 우리는 한 쌍이네!
Dont tell! they'd banish us - you know! 말하지 마! 사람들이 우릴 쫓아낼지 몰라 — 알잖아!

How dreary - to be - Somebody!       얼마나 따분할까 — 이름 있는 누군가가 된다는 건!
How public - like a Frog -           얼마나 요란스러울까 — 개구리처럼 —
To tell your name - the livelong June - 살아 있는 유월 내내 —
To an admiring Bog!                  자신을 찬미하는 늪을 향해 이름을 외쳐대는 건!`}]},{title:`2부: 자유`,works:[{id:`misulguan`,title:`미술관`,author:`박민준`,type:`시`,body:`한 걸음
또 한 걸음
어디에도
닿지 않는

바닥은
지나치게 깨끗하고
벽에는
시간이 이긴 얼굴들이
걸려 있다

꽃들은
시들 줄을 모르는 표정으로
입구를 채우고
나는
그 앞에서
속도를 늦춘다

늦춘다

결점 없는 얼굴들
승리를 의심해 본 적 없는 어깨
앉아 본 적 없는 통치
선만으로
존재가 유지되는 몸

나는
그중 몇 개를
부러워한다
모두
이미
완성되어 있다

고개를 끄덕이며
통과한다
고개를
끊임없이

한 걸음
또 한 걸음

발걸음이
나보다 먼저
도착해 있다

복도 끝에서
빛 하나가
정면으로 떨어진다

설명은 없고
방향만 남는다

나는
그쪽으로
걷게 된다

가까워질수록
빛은
얼굴을 갖는다

맥이 풀린 눈
중력에 진 피부
각기 다른 쪽을 택한 치열
나는
잠시
고개를 들고
그 표정을
흉내 낸다

흉내 내면
통과할 수 있을 것처럼

저 얼굴들은
전시되지 않았고
나는
여기까지 왔다

아무도
알아보지 않는다

꽃
그림
빛은
제자리에 있고

하나는
빛을 따르지 않는다

이 전시는
계속된다

완벽한 것들만이
나를
통과시키고

나는
통과되는 쪽에
이미 서 있다`},{id:`banga-yeonkkot-sayu`,title:`반가 연꽃 사유`,author:`모선생`,type:`시`,body:`진흙 속에 피어나는 연꽃
그 클리셰에 대하여
60년 사이클의 값이라고 생각했다
뿌리도 잎도 없이
피어나는 연꽃 한 송이
그것은 하루 아침에 일어난 일이었다
그동안
먼지와 벌레와 개구리가
흙탕물 튕기며
바람과 구름과
가끔은 번개마저 불러 들였다

이제 남은 일은
꽃잎을 벌렸다가 오므렸다가
하루에 한번씩
그러면 되었다
그렇게 몇 해를 벌렸다가 오므렸다가
잠겼다가 떠올랐다가
벌과 나비를 머금었다가 뱉었다가
잉어를 품었다가 밀어냈다가
그렇게 다시
또 한 사이클을`},{id:`ipad-geurim`,title:`아이패드 그림`,author:`모선생`,type:`시`,body:`매일 밤
나는 오늘의 그림으로 빠져나간다

밤마다 허무하던 시절
질척거리는 진흙 땅에서
연근을 부여잡고 울던 시절
나의 그림은 온통 흐리고
어둡고
냄새나고
없어지고 싶었다

몇 번의 계절이 지나면
연꽃이 피리라고
지렁이는 온몸으로 위로하건만
그 스킨십마저 소스라쳤다
장구벌레가 미꾸라지를 피해
내 품에 파고들 때
따가운 만큼 야멸차게 밀어냈다

막무가내로 열어제낀 천 개의 문
그 문들로 쏟아져 들어오는
백 만 볼트의 빛은
내 안의 깊은 어둠을
가로세로로 찔러댔다
몇 개를 닫을까
어떤 문을 내비둘까

오늘의 그림이 추상화로 번져갈 때
일러스트로 간결히 압축될 때
모든 허무를
모든 바램을
여전히 붉은 피 머금은
마비된 상처를
그려내는 데에 성공할 것이다
유리 화면 위에 매끈히`},{id:`gajang-tteugeoun-eoleum`,title:`가장 뜨거운 얼음`,author:`윤소민`,type:`시`,body:`[Score 9.5]
발밑의 은반은 뜨겁게 얼려둔 심장의 복사판
숨소리조차 결빙된 조용한 전쟁터 위에
날카로운 철제 날이 선을 긋는다
세상은 공중에 머문 1초만을 기억하지만

[Deduction -1.0 / Fall]
얼음 위엔 내가 수없이 깎아낸 궤적들이
지문처럼 빼곡히 새겨져 있다
무너짐은 실패가 아닌, 빙판이 기억하는 삶의 필체
토(Toe)를 찍고 솟구치는 순간

[Level 4]
중력은 잠시 나를 망각하고,
사지가 흩어지려는 가속의 소용돌이 속에서
착지의 순간 무릎은 날 선 비명을 삼키며 휘청인다.
휘청임조차 안무의 필연적인 쉼표인 것처럼.

[GOE +2.15]
가장 아픈 회전 뒤에
질식할 듯한 고요를 미소로 덮어쓰는 일
음악이 멈추고
폐부의 끝까지 비린 냉기가 차오를 때

[Personal best 199]
종아리의 진동이 온몸의 맥박으로 번지고
얼음의 냉기가 비로소 살갗의 열기로 치환할 때
완벽하지 않았으나,
은반 위에 단 한 번만 기록되는 선명한 문신
관중석의 꽃다발이 얼음 위에 흩어지기 전
나를 지탱한 테이핑의 끈적한 압박과
발목의 새겨진 시퍼런 침묵을
이 얼음만은 가장 뜨겁게 읽어내고 있을 것이다.`},{id:`jeungmyeongdoeji-aneun-eolgul`,title:`증명되지 않은 얼굴`,author:`박민준`,type:`시`,body:`나를 설명하는 말을
이미 너무 많이 연습했다

필요한 표정은
상황보다 먼저 도착했고
진심은
확인 대상에서 제외되었다

선택이라고 부르면
조금 덜 비열해지는 것 같아서
그렇게 불러 왔을 뿐이다

도움이 아니라
연루를 피하기 위해
나는 거리를 유지했다

구하지도
버리지도 않았다

그 자세가
가장 손해가 적었다

양심은
접히는 방향을 기억하는 종이처럼
필요할 때만
펴졌다

그 방향은
매번 같았다
방 안의 공기가
눅눅해지고
손바닥이 차가워진다

몸이 먼저
확인한다
아직
들키지 않았다는 사실을

나는
이 선택이 정말 선택인지
아니면
너무 오래 반복된 자세인지
구분하지 않는다

그런데
한 번도 혼자 있지 않았는데
계속 혼자였던 것 같다

이건
선택일 수도 있고
아닐 수도 있다

나는
그 차이를
확인하지 않은 채
계속 살아 있다

부서지지 않았고
구원받지도 않았고

다만
정확히
여기 남아 있다`},{id:`pureun-gasok`,title:`푸른 가속(加速)`,author:`윤소민`,type:`시`,body:`우리를 둘러싼 모든 무구한 것들에는
남몰래 가파라지는 경사로가 있어서,
지상으로 향하는 저 마른 낙엽의 투신에도
기어이 벼랑을 만들어내는 바람의 채찍이 있고
질주하는 시간의 궤도 아래로는
정도를 모르는 관성이 들끓는다.

세상의 모든 중력이 나를 아래로, 더 아래로만
가차 없이 침몰시키려 등을 떠밀 때
가속이 붙은 절망의 한복판에서
나는 가만히 눈을 감고 너의 이름을 입안에 굴려본다.
그 작은 한마디가 혀끝에서 차오르는 순간,

시간마저 삼켜버릴 듯 가팔라지는 이 생의 모퉁이,
추락의 궤적을 단숨에 뒤틀어버릴
단 하나의 거대한 반작용(反作用).

너는 기어이 내게로 와
가장 눈부신 속도로 파란 기적을 점화하리니.

그 서슬 퍼런 구원의 빛깔이
내 메마른 계절의 잔해를 모조리 삼켜낼 때까지,
나는 이 맹렬한 가속의 중심에서
기껍게 너를 기다린다.`},{id:`maeum`,title:`마음`,author:`심다율`,type:`시`,body:`살아가기에 있어
시간은 지나치게도 짧다.

서로를 품기에도 모자란 생이기에,
증오를 위해 남겨진 시간은
본래 존재하지 않았을 터이다.

그럼에도
내 마음속에서
증오라는 감정을 지울 수 없는 건

미진하였던 과거의
잿덩이인가,
미욱하였던 한때의
그림자인가.

횡단보도 위
수많은 어깨가 스쳐 지나갔지만
그 누구도
고개를 들지 않았다.

무관심함이 짙어져
시선은 저마다의 바닥을 향해 가라앉고
단어들은
입술을 떠나기도 전에
서늘한 비난으로 바뀌어
굳어 버렸다.

도대체 언제부터였을까.

우리가 서로를
이해하기보다
재단하기 시작한것은,
알아가기 보다
낙인 찍기 시작한것은.

그러나,
나는 아직 기억한다

낯선 이의 떨리는 손을
망설임 없이 붙들었던 날들을.
타인의 눈물에 기꺼이 젖어 들었던 날들을.

당신 또한 기억할 것이다.

서로의 다름을
불쾌가 아닌 경이로 바라보던 때를,
이해를 사랑의 다른 이름으로
정의했었던 때를.

어째서
지금의 우리는
이토록 먼 곳까지 와
그때의 시간들을 다 저버렸는가.

사랑을 잊어서가 아닐지도 모른다.
그저,
사랑을 기억하는 법을 잊은 건지도 모른다.

어쩌면 내 마음속
이 뜨거움은
오래전 잃어버린 사랑을 향한
애도인지도 모른다.`},{id:`gieogui-sumyeong`,title:`기억의 수명`,author:`심다율`,type:`시`,body:`사람의 기억은
시간 앞에선
참으로 덧없다.

어제의 빛을
오늘은 기억 하지 못하고

그 무엇보다도,
목숨보다도,
내가 사랑했던 이는
몇 해의 계절이 흐르면
희미한 윤곽으로만
남을 뿐이다

기억의 수명은 짧다.
그래서 더욱이 애틋하다.

언젠간
지금도 잊힐 걸 알기에
나는 한때
시간을 두려워했다.

그러던 어느 봄,
민들레 홀씨가 모두 날아가
초라하던 꽃대만 남았으나
그 곁에
또 다른 노란 꽃잎들이
돋아나는 것을 보고

나는 깨달았다.
잊힘은 끝이 아니다.
사라진 줄 알았던 것들은
또 다른 찬란함으로
다시 피어난다는 것을.`},{id:`haengnyeoja`,title:`행려자`,author:`양준희`,type:`시`,body:`낙엽 한 점 떨어지지 않는 쓸쓸한 길가
헐거운 고무신을 끌고–
피부가 벗겨진 가슴으로
몸을 뉘인 곳은 썰렁한 저잣거리.

길가에는 얼굴이 찢겨나간 포스터가
끝없는 행렬처럼 줄을 짓고
바람에 눈알만 덜컹이며 흔들린다.

물결처럼 요동치며 핏빛으로 새겨진
저 검은 간판의 글씨–
그 속에 비틀거리는 사내의 몸이
내 눈 속으로 손을 뻗는데

동무여, 여린 그대는
내가 가는 길을 따라오지 마오
그 길은 돌아올 이름 하나 남지 않는
다만 행려자의 길이니.`},{id:`jeolbyeok-kkeuteseo-majuhan-chukbok`,title:`절벽 끝에서 마주한 축복`,author:`성민준`,type:`시`,body:`절벽 끝에 선 애처로운 발끝,
희끗희끗한 머릿칼
생멸의 절벽 끝에서
심연의 어둠을 내려다보니
그대는 나와 같이 몸이 떨려오는가
그러나 두려워말라
절망이 아니라 축복임이 틀림없으니
떨림은
자유의 떨림이요,
생명의 떨림이라
추락할 수 있다는 가능성이
비로소 무한한 진동의 도착지에서
자유의 조건이 되니
아,
절벽 앞에 선 당신이여!
드디어 완벽한 자유를 누리는구나`},{id:`burooneun-barammaneun-seoneulji-anhke`,title:`불어오는 바람만은 서늘지 않게`,author:`윤소민`,type:`시`,body:`아는 글자 하나 없어
굳은살 박힌 손으로 할 수 있는 일이라곤
이 논두렁 가는 게 전부인 생이라

밑창 다 닳은 고무신 한 짝으로는
도저히 네 속도를 따라갈 재간이 없다

아이야, 가벼운 봇짐 하나 매고 떠나거라
네가 두고 간 붉은 손수건은 가슴팍에 깊이 묻어둘 테니
너는 뒤돌아보지 말고 저 보리밭 너머로 사라지거라.

진흙탕에 박혔던 내 평생의 발자국들이
네가 딛고 갈 단단한 흙길이 되었다면
이 못난 허리 굽은 것쯤이야 아무래도 좋으니

다만 너 가는 길에 불어오는 바람만은
부디 서늘하지 않기를
나보다 먼저 도착한 순한 볕들이
내 손보다 부드럽게 네 이마를 보듬어 주기를

내는 여기 남아서
네가 일으킨 먼지 자욱이 가라앉을 때까지
오래도록 흙 묻은 손나 털고 있을 테니.`}]},{title:`에필로그`,works:[{id:`ibyeol-essay`,title:`—`,author:`박민준`,type:`산문`,body:`우리는 헤어졌다.
그 사실은 어느 날의 사건이라기보다, 오랜 시간에 걸쳐 천천히 완성된 문장이었다. 끝내 말해지지 않아도 이미 의미를 다한 문장. 나는 그 문장의 마침표를 찍지 않았고, 다만 더 이상 고치지 않기로 했다.

이별은 무언가를 잃는 일이 아니라, 더 이상 붙잡지 않아도 되는 상태에 도달하는 일에 가깝다. 사랑이 끝났다는 확신보다 먼저 찾아오는 것은, 설명하려는 의지가 사라졌다는 감각이었다. 변명도, 이해도, 설득도 필요 없어진 순간. 그때 비로소 관계는 조용히 자신을 내려놓는다.

우리는 서로에게 최선을 다하지 않았다고 말할 수도 있고, 너무 최선을 다했다고 말할 수도 있다. 그러나 그 어느 쪽도 결정적이지 않다. 중요한 것은, 같은 방향으로 걷고 있다는 믿음이 어느 날부터 자연스럽게 소멸했다는 사실이다. 신념은 배신당하지 않았다. 다만 더 이상 호출되지 않았다.

이별 이후 남는 것은 후회가 아니라 잔여물이다. 함께 있던 시간들이 의미를 요구하지 않고, 추억이라는 이름으로 스스로를 정리하지도 않는다. 그것들은 단지 남아 있다. 설명되지 않은 채, 그러나 부정되지도 않은 채로. 삶이 본래 그렇듯.

나는 우리가 왜 끝났는지 완전히 알지 못한다. 다만 끝나야 했다는 점만은 분명히 안다. 이해하지 못한 채 수용하는 것, 그것이 성숙이라면, 이별은 그 자체로 하나의 교육이었다.

사랑은 우리를 더 나은 사람으로 만들지 않는다. 다만 우리가 어떤 사람인지를 지나치게 선명하게 드러낼 뿐이다. 그래서 어떤 사랑은 지속될 수 없고, 어떤 이별은 끝내 존중받아야 한다.

우리는 서로의 인생에서 실패한 선택이 아니다. 다만 더 이상 유효하지 않은 질문이 되었을 뿐이다. 질문이 사라졌다면, 답도 함께 사라지는 것이 자연스럽다.

이제 나는 이별을 극복하지 않는다. 극복해야 할 장애물이 아니기 때문이다. 나는 그것을 내 삶의 구조 안에 조용히 배치한다. 하나의 방처럼. 때로는 들어가고, 대부분은 지나친다. 그 방이 있었다는 사실만으로도, 나는 충분히 인간적이었음을 안다.`}]},{title:`맺음말`,works:[{id:`maecheummal-2026-06`,title:`맺음말`,author:`새결 일동`,type:`맺음말`,body:`눈을 감으면 하나의 선이 스스로를 닫아 세상에서 가장 완전한 약속을 만듭니다. 《새결》 6월호의 마지막 페이지를 닫는 지금, 우리가 마주한 문학적 풍경 역시 이와 닮아 있습니다.

에밀리 디킨슨의 냉소적이고도 투명한 정조에서 시작해, 이름 없는 존재(Nobody)로 살아가는 것의 시크한 격조를 지나, 마침내 땅을 파고 살아온 노부모의 뜨거운 내리사랑에 도달하기까지. 이번 호는 차가운 실존적 고뇌와 뜨거운 인간의 원초적 감정이 지독하게 교차하는 여정이었습니다.

우리는 더 정확해지기 위해 지면에 수많은 각(角)을 세우고 문장을 벼려왔지만, 결국 가장 깊은 고통과 사랑의 정점에서 모든 각은 사라지고 다시 처음의 원으로 회귀함을 깨닫습니다. 너무 많은 것을 화려하게 가지려는 태도보다, 아무것도 남기지 않고 온전히 쏟아붓는 몰락의 정직함이 더 아름답다는 것을 이번 지면의 작가들이 증명해 주었습니다.

〈새결〉의 새로운 파동에 기꺼이 자신만의 온도를 보태준 모든 기고가와, 활자 이면의 무게를 함께 버텨준 편집위원들에게 깊은 경의를 표합니다. 꽃은 피고 지지만, 찢어진 자리에 남은 흉터는 붉은 무늬가 되어 마침내 굳건한 결이 됩니다. 6월의 서늘한 바람 속에서도 단단한 눈(芽)을 숨겨둔 채 다음 계절을 준비하는 나무처럼, 《새결》은 다시 눈을 뜨고 처음의 자리에서 여러분을 기다리겠습니다.

감사합니다.

새결 일동`}]}]},{id:`saegyeol-2026-05-gaehwa`,slug:`2026-05-gaehwa`,title:`2026년 5월호`,theme:`개화`,displayTitle:`2026년 5월호 · 개화`,volume:`Vol.1`,label:`창간호`,archiveDate:`2026. 05`,archiveTitle:`개화`,archiveDescription:`창간호`,badge:null,status:`active`,publishDate:`2026-05-01`,nextIssueDate:`2026-06-13T00:00:00+09:00`,pdfPath:`/saegyeol-2026-05-gaehwa.pdf`,editors:[`양준희`,`박민준`],preface:`어떤 말들은 너무 일찍 이름을 얻습니다.

이름이 붙는 순간 감각은 굳습니다. 감동은 공식이 되고, 언어는 예측 가능한 자리로 돌아갑니다. 오늘의 많은 문학이 그렇게 작동합니다. 읽히기 위해 다듬어지고, 소비되기 위해 설계됩니다.

우리가 느낀 불편함은 거기서 왔습니다.

결(結)은 나무가 자라며 스스로 새긴 무늬입니다. 설계되지 않았고, 교정되지 않았으며, 버텨온 시간이 그대로 남아 있습니다. 『새결』이 바라는 것은 그것입니다. 완결보다 진행 중인 것. 세련보다 아직 이름 붙여지지 않은 감각.

우리는 학생입니다. 그 사실을 사과하지 않겠습니다. 굳어지지 않은 시선만이 아직 포박되지 않은 언어를 건드릴 수 있습니다. 그것이 우리의 유일한 자격이고, 이 잡지의 존재 이유입니다.

이 지면에는 서로 다른 온도의 글들이 실려 있습니다. 통일된 미학은 없습니다. 찬란하게 파산하는 문장이 있고, 눅눅하게 버티는 문장이 있습니다. 그 불균질함이 이 창간호의 정직한 얼굴입니다.

새길을 내는 것은 항상 결을 어기는 일에서 시작됩니다.

새결 일동`,editorNotes:[{author:`박민준`,body:`봄은 기다리지 않는다고들 말한다. 그런데 나는 이번 원고들을 읽으면서 그 말이 절반만 맞다는 것을 알았다. 봄은 기다리지 않지만, 꽃은 기다린다. 오래, 그리고 혼자서.

'개화'를 주제로 정한 것은 창간이라는 행위와 자연스럽게 겹쳐서가 아니었다. 오히려 반대였다. 개화는 아름다운 말처럼 들리지만 그 안을 들여다보면 전부 파열의 기록이다. 닫혀 있던 것이 더는 버틸 수 없어 찢어지는 순간. 우리가 이 주제를 고른 것은 그 찢어짐을 두려워하지 않겠다는 다짐이었다.

원고들이 들어왔을 때, 나는 그것들이 서로 전혀 다른 온도를 가지고 있다는 것을 먼저 느꼈다. 어떤 글은 활활 타고 있었고, 어떤 글은 겨우 불씨를 품은 채 떨고 있었다. 어떤 글은 이미 재가 된 자리에서 시작했다. 편집자로서 내가 해야 할 일은 그 온도들을 하나로 통일하는 것이 아니라, 각각이 제 온도를 잃지 않으면서도 같은 지면 위에 놓일 수 있도록 거리를 조율하는 것이었다. 잘 됐는지는 모르겠다. 다만 억지로 맞추지는 않았다.

문학에서 개화를 말할 때 우리는 너무 쉽게 피어남의 쪽만을 바라본다. 그러나 이 호에 실린 글들은 피어남만큼이나 피어나지 못함을, 지는 것을, 재가 되는 것을 정직하게 다루고 있다. 그 정직함이 나는 좋았다. 화려하게 포장된 개화가 아니라 저마다의 속도로, 저마다의 방식으로 터져 나오거나 아직 터지지 못한 것들. 그 불균질한 풍경이 이 창간호의 진짜 얼굴이라고 생각한다.

한 가지만 고백하자면, 나는 이 잡지를 시작하면서 좋은 글을 싣겠다는 생각보다 솔직한 글을 싣겠다는 생각을 먼저 했다. 좋음의 기준은 늘 누군가가 먼저 정해두고 우리를 기다리지만, 솔직함은 그 기준 바깥에서 온다. 개화가 아름다움의 사건이 아니라 필연의 사건인 것처럼, 이 지면이 좋은 문학의 자리가 아니라 솔직한 문학이 터져 나오는 자리가 되기를 바란다.

꽃은 피고 지지만, 찢어진 자리는 남는다. 그 자국들이 쌓여 결이 된다.

편집위원 박민준`},{author:`양준희`,body:`우선, 〈새결〉의 창간과 함께해주신 모든 분께 진심으로 감사드립니다. 각자의 세계를 <새결>과 함께 펼쳐준 기고가들과 편집위원들이 없었다면, 이번 창간호 역시 존재하지 않았을 것입니다.

박민준 위원과 함께 새로운 문예지의 창간을 이야기하던 당시, 우리는 <새결>이라는 이름이 사람들의 마음에 닿게 되리라고는 상상조차 하지 못했습니다. 그저 문학이 좋아 즉흥적으로 시작한 작은 프로젝트였기에, 새싹은커녕 씨앗조차 심지 못할 것이라 여겼습니다. 그러나 그 씨앗은 끝내 꽃봉오리가 되었고, 마침내 꽃잎을 틔웠습니다. 이것이 바로 <새결>이 품고 있는 ‘개화’의 서사일 것입니다.

세상이 담장 넘어 벙어리 목련이 흰 입술을 뗄 때 눈을 뜨듯, 저는 <새결>을 통해 젊은 시선으로 기성관념에 얽메이지 않는 문학을 피어내고자 합니다. 이는 단순한 선언이 아니라, 침전의 길을 걸으며 선한 게으름을 읊었던 어느 소인국의 한 거인처럼 올바른 사랑을 향해 가고자 하는 저의 단단한 포부입니다.

앞으로도 우리가 시작할 여정에 깊은 관심을 보내주시기를 조심스레 소망합니다. 페이지를 한 장씩 넘길 때마다 서로 다른 호흡과 감정, 저마다의 긴장감이 독자 여러분의 마음속에 오래도록 서릴 수 있기를 바랍니다. 이제부터 <새결>은 독자적인 언어들로 또 다른 개화를 이루어 내보고자 합니다.

편집위원 양준희`}],sections:[{title:`1부: 개화`,works:[{id:`mangul-gateun-jeoleum`,title:`망울 같은 젊음`,author:`양준희`,type:`시`,body:`그대, 겨울에 너무 분노를 쏟지 말아라
생이 즈레밟혀 쓰러진대도
새롭게 천장을 뚫는 알맹이들이
그대의 꺾인 삭신을 우뚝 세울 테니.

공백의 지천을 그려내는 것은
사랑같은 외로움을 외며–
깨닫고 보니 잎새에 이는
연약하고도 날카로운 한숨이었소.

끝없이 펼쳐지는 지평선 너머
불그스럼한 파도를 밀어내고
삭신이 꺾여, 세상이 꺾여–
삶이란 자자한 원성의 청아한 목소리.

깨달아라
목소리는 잔잔한 파동이 되어
그대 뇌수에 꽂힘에도
하나씩 잊혀가는,
마치 꽃봉오리가 머금던
망울 같은 젊음이다.`},{id:`hange`,title:`한계`,author:`박민준`,type:`시`,body:`세상은
선을 긋지 않는다
대신
보이지 않는 힘으로
서로를 잡아당긴다

팽팽해진 공간에서
규율은
말하지 않는다
다만
현이 떨릴 때
공기가 먼저
울린다

가까워질수록
각도는
미세하게 비틀리고
자재는
소리를 삼킨 채
안쪽에서
마찰한다

아름다움은
거기서
태어난다
질서가
견디는 동안이 아니라
견디지 못하고
찢어질 때
불가능은
막힌 길이 아니라
아직
몸이 밀려본 적 없는
압력의 방향이고

정해진 방법은
가장 많은 무게가
먼저
눌러본
자국일 뿐이다

모든 것은
온전히
유지되지 않는다
그래서
아름다움은
항상
파편으로
나타난다

나는
한계를
지우지 않았다
규율을
설명하지도 않았다

다만
숨이 조여오고
근육이
떨리기 시작하는
그 지점까지
몸을
밀어 넣었을 뿐이다
거기서
나는
부서지지 않았고
남아 있지도 않았다

장력이
끝내
버티지 못하고
터지는 순간
세계의 질서가
금이 가며
튀어 오른
그 조각 속에서

아름다움은
비로소
형태를 얻었다`},{id:`won`,title:`원`,author:`박민준`,type:`시`,body:`눈을 감자
하나의 선이
스스로를 닫았다

시작도 끝도
보이지 않는
가장 완전한 약속

다시 눈을 감자
선은
각을 만들었고
세 개의 의지는
서로를 지탱했다

네 개가 되었을 때
공간은
안정이라는 이름을 얻었고
숫자는
세상을 세기 시작했다

각은 늘어났고
이름도 늘어났다
오각형
육각형
칠각형

나는
더 정확해지고 있다고
믿었다
그러나
너무 많은 각 끝에서
선들은
다시 서로를 잊었고

마침내
각은 사라지고
나는
다시
원을 보았다

그제서야
알게 되었다

끝은
도달이 아니라
회귀였고

너무 많은 것은
다 가졌다는 뜻이 아니라
아무것도
남기지 않는다는 뜻이라는 것을

그래서
나는
눈을 뜬다

다시
처음처럼`},{id:`georiui-sayongbeop`,title:`거리의 사용법`,author:`박민준`,type:`시`,body:`기둥과 기둥 사이가 좁아지면
지붕은 먼저 주저앉는다

닿지 않기 위해 남겨둔 빈칸은
결핍이 아니라
하중이 빠져나가는 통로였다

가까워질수록
각도는 눈에 띄지 않게 틀어졌고
이음새에서
마른 마찰음이 먼저 일어났다

붙잡지 않아도
구조는 유지된다
무게가 머무를 자리를 남겨두면

나는 물러선 것이 아니라
붕괴가 시작되는 선을
정확히 비켜섰다

남은 것은
사이
서로를 버티게 하는 간격
그리고
지나갈 수 있을 만큼의 길`},{id:`meonjeo-pieonan-neoege`,title:`먼저 피어난 너에게, 아직 피어나지 못한 나에게`,author:`박도현`,type:`시`,body:`나는 아직 그저
작은 봉우리에 불과한데

어째서 너는
저렇게 먼저 피어난걸까

같은 계절을 지나온 줄 알았는데
너의 시간은
나보다 조금 앞서있던 것처럼

손이 닿지 않는 자리에서
오히려 더욱 짙어지는 너의 색을 보며

괜히 고개 들어 확인해본다

나는 아직 열리지 못한 채
서성이고 있는데

너는 이미
한 계절을 다 써버린 얼굴로
날 빤히 내려다본다

이제야 알았다

모든 개화가
가까워짐을 의미하지는 않는다는걸

어떠한 피어남은
오히려 거리를 만들고
어떤 아름다움은
끝내 닿지 못할 때
비로소 완성된다는 것을`},{id:`mimyeongui-payeol`,title:`미명(未明)의 파열`,author:`윤소민`,type:`시`,body:`담장 넘어 벙어리 목련이 흰 입술을 뗄 때
세상은 비로소 눈을 떴다
수천 년 시린 잠을 깨우는 것은
볏조각 같은 햇살의 가느다란 간지럼이었으니

바다 건너 낯선 바람이 빗장을 흔들고
상투가 잘린 자리에 망건 대신 검은 모자가 내려앉던 날
보이지 않던 내일이 해안선 너머 쏟아져 들어왔다
그리고, 시대의 낡은 각질이 우두둑 소리를 내며 벗겨졌다

꽃은 제 살점을 찢어 향기의 길을 내고
지도는 낯선 이방인의 발자국을 따라 새 길을 긋는다
수액을 밀어 올려 기어이 허공을 점거하는 일과
묵은 관습을 허물어 지평을 넓히는 일은
결국 같은 속도로 타오르는 뜨거운 통증이었다

이제 어제의 나를 부수고 선(善)으로 나아가는
지독한 환골의 시간 앞에 서서
나는 눅눅해진 불씨를 끄고 새 횃불을 든다

보도블록 위로 흩어지는 분홍빛 파편들
피는 일도, 바뀌는 일도, 스스로를 고쳐 쓰는 일도
낡은 껍질을 견디지 못한 것들이
온몸을 뒤틀어 밀어 올린
가장 눈부신 균열이었음을
찬란한 몸부림이었음을`},{id:`chanranhan-budo`,title:`찬란한 부도`,author:`윤소민`,type:`시`,body:`어둠의 금고 속에 은닉해온 초록을
일제히 인출한다
뿌리가 실핏줄 터지도록 길어 올린 저 침묵의 잔고

더는 유예할 수 없는 열망이
꽃잎이라는 영수증으로 터져 나갈 때
나무는 제 생의 정점에서 가장 화려하게 파산한다

향기라는 감각의 부채가
공중의 장부를 빽빽하게 채우고
벌과 나비라는 채권자들이 축제처럼 들이닥치는 정오

보라,
가장 완벽한 몰락이
기꺼이 쏟아붓는 낙화의 방식임을

모든 종적이 끊긴 뒤
텅 빈 가지에 남은 것은 파산의 흔적이 아니다
다음 계절의 기적을 위해
고요히 눈을 뜨는
단단한 눈(芽)이라는 비밀스러운 약속일 뿐이니.`},{id:`hyanggiroun-bimyeong`,title:`향기로운 비명`,author:`윤소민`,type:`시`,body:`재를 털어낸 자리에 뿌리를 내린다
지난밤 태워버린 것은
나약한 진심이 아니라
나를 가뒀던 낡은 껍데기들

검게 그을린 폐허 위로
빗물이 스며 절망을 적시면
바닥에 가라앉은 침전물들은
이윽고 가장 진한 양분이 된다

사람들은 이를 개화(開花)라 부르지만
나는 안다.

이것은 가장 향기로운 비명이자
터진 살점 위로 돋아난
팽팽한 딱지의 기록이라는 것을

꽃잎의 결을 훑으면
채 식지 않은 서늘한 재의 감촉이 만져지고
흔들리는 줄기는
더는 찢어지지 않기 위해 근육을 조여낸
치열한 공정(工程)의 결과이었다

먹물에 젖어 비명을 지르던 종이는 이제 없다
고통의 농도를 조절해
스스로 색채를 증명해내는
노련한 화공이 있을 뿐

이제 흉터는 붉은 무늬가 되어 번지고
불타버린 자리에만 돋아나는
투명한 불꽃이 허공을 점거한다`},{id:`nakhwaui-yeongwon`,title:`낙화의 영원`,author:`윤소민`,type:`시`,body:`발밑부터 차오르는 분홍의 범람을 봅니다.
창밖은 온통 빛의 폭동, 무심한 낭만이 휘몰아치는데
나의 계절은 여전히 서리가 가득찬 겨울입니다.
닫힌 커튼 뒤에 웅크린 채 나직이 묻습니다.

당신은 정말, 영원을 믿나요?

벚꽃은 가장 화려한 정점에서 단호한 추락을 택하고
사람들은 그 짧은 자상마저 아름다움이라 부르지만,
찰나여서 고귀하다는 그 찬사는 제게 너무 비겁합니다.
나는 그저, 지지 않는 당신을
오래도록 정물처럼 곁에 두고 싶었을 뿐입니다.

가라앉은 마음은 빛을 삼키는 수렁이 되어
수면에 일렁이는 꽃잎의 선율마저 무겁게 낚아챕니다.
이 적막 위로, 뺨을 타고 번지는 얼룩의 습도는
방금 지상에 닿은 저 여린 살점보다 훨씬 더 무겁습니다.

그 무게 속에서 나는 겨우 당신의 말을 기억해냅니다.
별은 죽으면서 다음 별의 계보를 남긴다는,
다정해서 더 잔인했던 그 문장을요.

당신이라는 꽃이 지고 나면
공중에 남겨진 향기가 흉터가 되어
나의 멈춰버린 시계태엽을 억지로 돌려놓겠지요.

비록 짧은 섬광이었을지라도
내 안에 깊게 박혀버린 당신의 개화는
사라진 뒤에야 비로소 지워지지 않는 낙인이 되어
나의 우주를 평생토록 유린할 것입니다.`},{id:`jjijeojin-jarieseo-pieonaneun-geotdeul`,title:`찢어진 자리에서 피어나는 것들 - 윤소민 시 연작론`,author:`박민준`,type:`비평`,body:`개화는 아름다움의 사건이 아니다. 그것은 더 이상 버틸 수 없는 것이 끝내 터지는 순간이다. 윤소민은 그 터짐의 안쪽을 들여다본다.

01 언어 이전의 언어: 비유 구조가 먼저 말하는 것

윤소민의 시를 처음 읽을 때 독자가 마주치는 것은 아름다운 문장이 아니다. 그것은 충돌이다. 꽃이 향기를 내는 것이 아니라 "제 살점을 찢어 향기의 길을 내"고, 개화는 번성이 아니라 파산이며, 피어남은 곧 비명이다. 이 충돌은 수사적 과장이 아니다. 윤소민의 비유 체계는 처음부터 끝까지 단 하나의 명제를 물고 늘어진다: 아름다운 것은 반드시 폭력을 통과한다.

이것이 단순한 관념이 되지 않는 이유는, 윤소민이 비유를 설명하지 않기 때문이다. 「미명의 파열」에서 "낡은 각질이 우두둑 소리를 내며 벗겨졌다"는 행은 개화를 탈피(脫皮)와 동치시키는데, 이때 시인은 이 비유가 의미하는 바를 친절하게 풀어주지 않는다. 소리가 먼저 온다. "우두둑"이라는 청각이 독자의 몸을 먼저 건드리고, 그 다음에야 의미가 따라온다. 이것이 좋은 시의 작동 방식이다 — 설명이 아니라 감각이 먼저 도착한다.

「미명의 파열」의 한 연을 다시 읽어보자.

꽃은 제 살점을 찢어 향기의 길을 내고
지도는 낯선 이방인의 발자국을 따라 새 길을 긋는다
수액을 밀어 올려 기어이 허공을 점거하는 일과
묵은 관습을 허물어 지평을 넓히는 일은
결국 같은 속도로 타오르는 뜨거운 통증이었다

이 연에서 윤소민은 자연과 역사를 단일한 운동 위에 포개놓는다. 꽃이 피는 것과 개화기(開化期)의 문명 전환이 "같은 속도로 타오르는 뜨거운 통증"으로 수렴된다. 비평가로서 나는 이 병치(竝置)가 지나치게 과감하지 않은가 한참 머물렀다. 그러나 읽을수록 이것은 미숙한 확장이 아니라 정밀하게 계산된 이동이라는 것을 알게 된다. 두 행위가 공유하는 것은 안에서 밖으로 밀어 올리는 힘의 구조이기 때문이다. 수액이 도관을 따라 올라가는 것, 억눌린 시대가 표면을 뚫고 나오는 것 — 윤소민은 이 두 힘이 물리적으로 동일한 것임을 꿰뚫어본다.

주목할 점은 이 연의 마지막 단어다. 시인은 "변화"도 "혁명"도 아닌 "통증"을 선택한다. 이 단어 선택 하나가 이 시 전체의 윤리적 입장을 결정한다. 아름다움은 대가 없이 오지 않는다.

02 「찬란한 부도」: 경제적 비유가 열어놓는 윤리의 공간

윤소민의 네 편 중 가장 지적으로 대담한 것은 「찬란한 부도」다. 이 시는 꽃피는 것을 파산(破産)으로 읽는다. 처음 보면 냉소적 알레고리처럼 보인다. 그러나 이 시는 냉소와 반대 방향을 향해 달린다.

어둠의 금고 속에 은닉해온 초록을
일제히 인출한다
뿌리가 실핏줄 터지도록 길어 올린 저 침묵의 잔고
더는 유예할 수 없는 열망이
꽃잎이라는 영수증으로 터져 나갈 때
나무는 제 생의 정점에서 가장 화려하게 파산한다

이 비유 구조를 해체해보자. "금고에 은닉해온 초록"은 겨울 내내 나무가 비축해온 생의 에너지다. "침묵의 잔고"는 말하지 않고 쌓아온 것들, 보이지 않게 자라온 뿌리의 시간이다. 그리고 꽃은 그 전부를 한꺼번에 방출하는 행위 — "더는 유예할 수 없는" 순간의 전부-내어줌이다.

여기서 윤소민이 선택한 언어는 결정적이다. "유예할 수 없는 열망"이라는 구절에서 개화는 의지의 산물이 아니라 필연의 사건으로 읽힌다. 나무가 피우는 것이 아니라, 더 이상 피우지 않는 것이 불가능해진 것이다. 이 차이가 작게 보이지만 시의 세계관 전체를 바꾼다. 의지라면 선택이 가능하다. 그러나 필연이라면 — 그것은 존재의 문제가 된다.

"가장 완벽한 몰락이 기꺼이 쏟아붓는 낙화의 방식임을" — 이 행에서 '기꺼이'라는 부사가 전체 시의 무게중심이다. 억지로 쏟아지는 것이 아니라 기꺼이 쏟아지는 것. 파산은 패배가 아니라 소진(消盡)의 다른 이름이다. 자신을 전부 내어주는 것이 가능한 존재만이 이렇게 파산할 수 있다.

그런데 이 시의 가장 중요한 구절은 마지막 연에 있다. 텅 빈 가지에 남는 것은 "파산의 흔적이 아니"라 "단단한 눈(芽)이라는 비밀스러운 약속"이다. 여기서 시인은 파산의 논리를 완성한다: 전부를 내어준 자리에, 다음이 자라난다. 빈 가지는 끝이 아니라 다음 계절의 조건이다. 이것이 「찬란한 부도」가 냉소가 아닌 이유다 — 이 시는 소진 이후의 재생을 믿는다. 다만 그것을 아름답게 포장하지 않는다. 재생은 조용하고, 단단하고, 비밀스럽다.

비평가로서 솔직하게 말하자면, 이 시에서 언어적 과잉을 느끼는 지점이 없지 않다. "벌과 나비라는 채권자들이 축제처럼 들이닥치는 정오"라는 행은 경제적 비유의 일관성을 유지하면서도 지나치게 풍부한 이미지를 한 행에 욱여넣어 호흡이 가빠지는 인상을 준다. 그러나 이 과잉 자체가 '파산'의 분위기와 공명한다는 점에서, 나는 이것을 실수보다는 계산된 위험으로 읽고 싶다. 터지는 것이 터지듯이, 이 행도 터진다.

03 「향기로운 비명」: 개화의 내면화, 그리고 화자의 전환

앞의 두 편이 개화를 외부에서 관찰하는 시선을 가졌다면, 「향기로운 비명」에서는 그 관찰자가 사라진다. 이 시의 화자는 더 이상 꽃을 보는 사람이 아니라 스스로 피어나는, 또는 피어나려 하는 사람이다. 이 이동이 이 시를 연작의 전환점으로 만든다.

재를 털어낸 자리에 뿌리를 내린다
지난밤 태워버린 것은
나약한 진심이 아니라
나를 가뒀던 낡은 껍데기들

이 첫 연을 주의 깊게 읽어야 한다. 화자는 "재를 털어낸 자리에 뿌리를 내린다"고 말한다. 재 위에 뿌리를 내리는 것이 아니라 재를 털어낸 자리에 내리는 것이다. 이 차이가 작지 않다. 재를 치운 다음 뿌리를 내리는 것은 화자가 능동적으로 청소하는 주체임을 의미한다. 소멸에 수동적으로 복속하지 않는다. 무엇을 남기고 무엇을 버릴지를 스스로 가려낸다.

이어지는 행이 이를 명확히 한다: "태워버린 것은 나약한 진심이 아니라 나를 가뒀던 낡은 껍데기들." 불은 구분 없이 태우지 않는다. 화자는 불을 선별의 도구로 쓴다. 이것이 이 시에서 화자가 "노련한 화공"으로 이행하는 논리적 근거다. 처음부터 화자는 자신의 소각 과정을 설계하고 있었다.

사람들은 이를 개화(開花)라 부르지만
나는 안다.
이것은 가장 향기로운 비명이자
터진 살점 위로 돋아난
팽팽한 딱지의 기록이라는 것을

이 단절 — "나는 안다." — 이 이 시의 핵이다. 세계가 아름다운 이름으로 부르는 것을 화자는 다르게 안다. 이것은 세계에 대한 불신이 아니라, 경험에서 온 지식이다. 화자는 개화를 겪어봤다. 그것이 향기이면서 동시에 비명이라는 것을, 살점이 터지면서 딱지가 돋는다는 것을 몸으로 알고 있다.

"팽팽한 딱지"라는 이미지는 윤소민의 시 전체에서 가장 날카로운 언어적 발견 중 하나다. 딱지는 상처의 증거이면서 동시에 치유의 증거다. "팽팽한"이라는 형용사가 이 딱지에 긴장감을 더한다. 이 딱지는 아직 완전히 아물지 않았다. 팽팽하다는 것은 아직 당기고 있다는 것이다. 아직 과정 중이라는 것이다.

이 이미지를 「찬란한 부도」의 "단단한 눈(芽)"과 대조하면 연작의 언어적 변주가 드러난다. 「부도」에서 재생은 단단하고 비밀스럽다. 「비명」에서 재생은 팽팽하고 아직 덜 아물었다. 두 번째 시가 더 앞에 있는 사람의 것이라면, 세 번째 시는 아직 그 과정 한가운데 있는 사람의 것이다.

마지막 연에서 화자는 "먹물에 젖어 비명을 지르던 종이"에서 "고통의 농도를 조절해 스스로 색채를 증명해내는 노련한 화공"으로 이행한다. 이 이행은 선언적이다. 그런데 나는 이 선언이 완전히 성취된 상태의 묘사가 아니라, 되고자 하는 방향의 묘사라고 읽는다. "이제"라는 시제 부사가 현재를 가리키지만, 이 현재는 도착이 아니라 결심의 현재다. 화자는 노련한 화공이 되었다고 말하는 것이 아니라, 그렇게 되기로 했다고 말하고 있다. 그 미세한 차이가 이 시를 거짓 없게 만든다.

04 「낙화의 영원」: 연작이 허용하는 균열, 또는 가장 솔직한 자리

네 편의 시 중 가장 오래 걸린 것이 이 시다. 앞의 세 편이 어떤 방향성 — 파열을 긍정하고, 소진을 긍정하고, 재생을 긍정하는 방향 — 을 가졌다면, 「낙화의 영원」은 그 방향 전체에 균열을 낸다. 그리고 이것이 연작 전체에서 가장 용기 있는 제스처다.

벚꽃은 가장 화려한 정점에서 단호한 추락을 택하고
사람들은 그 짧은 자상마저 아름다움이라 부르지만,
찰나여서 고귀하다는 그 찬사는 제게 너무 비겁합니다.
나는 그저, 지지 않는 당신을
오래도록 정물처럼 곁에 두고 싶었을 뿐입니다.

"찰나여서 고귀하다는 그 찬사는 제게 너무 비겁합니다." 이 문장이 이 시의 핵심이다. 화자는 낙화의 아름다움을 아름다움으로 인정하면서도 그것을 찬사하는 방식에 저항한다. 지는 것이 고귀하다고 말하는 것은 잃어버린 것을 아름답게 이름 붙여 위로하는 언어다. 그러나 화자는 그 언어를 원하지 않는다. 화자가 원하는 것은 "오래도록 정물처럼 곁에 두는" 것, 즉 영원이다.

이것은 앞의 세 편이 구축한 세계관 — 파열과 소진과 재생의 순환 — 에 대한 감정적 반론이다. 지적으로는 낙화가 필연임을 알면서, 감정적으로는 그것을 받아들이지 못한다. 이 간극을 윤소민은 숨기지 않는다. "나는 안다"고 선언했던 「향기로운 비명」의 화자가 「낙화의 영원」에서는 "당신은 정말, 영원을 믿나요?"라고 묻는다. 확신에서 질문으로의 이 이동이 연작의 가장 정직한 지점이다.

마지막 연에서 화자는 "당신이라는 꽃"이 지고 나면 남겨진 향기가 흉터가 되어 "나의 멈춰버린 시계태엽을 억지로 돌려놓겠지요"라고 말한다. 이 문장은 조심스럽게 읽어야 한다. 시간이 다시 움직이는 것은 자발적 재생이 아니다 — 억지로 돌려놓는 것이다. 아름답지 않다. 부드럽지 않다. 그러나 일어난다. 이것이 윤소민이 이 시에서 솔직하게 말하는 재생의 모습이다: 원해서가 아니라, 살아있기 때문에 어쩔 수 없이 계속되는 것.

"비록 짧은 섬광이었을지라도 / 내 안에 깊게 박혀버린 당신의 개화는 / 사라진 뒤에야 비로소 지워지지 않는 낙인이 되어 / 나의 우주를 평생토록 유린할 것입니다." 이 마지막 행들은 읽기가 불편하다. "유린"이라는 단어의 폭력성이 갑작스럽다. 그러나 나는 이 불편함이 시가 의도한 것이라고 생각한다. 이전의 세 편이 아름다운 파열을 다뤘다면, 이 시는 아름답지 않은 상처를 다룬다. 지워지지 않고 남아서 계속 침범하는 것. 그것도 개화의 사후(事後)다.

05 연작의 아치: 완결되지 않는 것의 정직함

네 편을 연작으로 읽을 때 하나의 구조가 드러난다.

「미명의 파열」은 개화의 본질을 선언한다. 피어남은 찢어짐이다. 「찬란한 부도」는 그 찢어짐을 소진으로 번역한다. 전부를 내어주는 것이 개화다. 「향기로운 비명」은 그 과정을 내면화한다. 나는 이 과정의 주체가 될 수 있다. 그리고 「낙화의 영원」은 마지막에 균열을 허용한다. 그럼에도 나는 지지 않기를 원했다.

이 아치는 완결되지 않는다. 「낙화의 영원」의 화자는 아직 재생되지 않았다. 연작은 열린 채로 끝난다. 이것이 이 연작이 창간호에서 가지는 가장 정직한 면이다. 윤소민은 도착하지 않았다. 가는 중이다. 그리고 그 가는 중임을 숨기지 않는다.

우리가 흔히 접하는 성장 서사는 상처를 겪고, 극복하고, 강해진다는 구조를 가진다. 윤소민의 연작은 그 구조를 따르지 않는다. 첫 번째 시에서 세 번째 시까지 어떤 방향으로 나아가는 것처럼 보이다가, 네 번째 시에서 그것이 얼마나 불완전한 여정인지를 고백한다. 이 고백이 연작을 약하게 만드는가? 반대다. 이 고백이 앞의 세 편에 무게를 돌려준다. 파열과 소진과 재생을 긍정하는 것이 그렇게 쉬운 일이 아님을 — 마지막 시가 증명하기 때문에.

06 윤소민의 언어가 만지는 곳: 몸과 시간과 이름

이 연작을 관통하는 언어적 특성을 세 가지로 정리할 수 있다.

첫 번째는 몸의 언어다. 윤소민의 시는 추상을 거부하고 지속적으로 몸의 감각으로 돌아온다. "살점", "실핏줄", "딱지", "근육", "흉터" — 이 단어들은 모두 몸이 무언가를 겪은 흔적이다. 개화라는 추상적 사건이 이 몸의 언어를 통과하면서 구체성을 얻는다. 독자가 윤소민의 시를 읽을 때 지적으로만 이해되는 것이 아니라 신체적으로 반응하게 되는 이유가 여기 있다. 이것은 수련된 감각이다.

두 번째는 시간의 조작이다. 윤소민은 시제를 의식적으로 다룬다. 「향기로운 비명」의 "이제"는 현재이면서 결심의 시제이고, 「낙화의 영원」의 "겠지요"는 미래이면서 체념의 시제다. 이 시제들은 단순한 문법 선택이 아니라 화자의 심리적 위치를 표시한다. 특히 연작 전체에서 시제의 흐름이 현재에서 조건적 미래로 이동하는 것은, 화자가 점점 더 아직 오지 않은 것을 향해 시선을 돌리게 됨을 보여준다.

세 번째는 이름 붙이기에 대한 저항이다. 윤소민의 시는 반복적으로 세계가 붙인 이름을 거부하거나 재정의한다. "사람들은 이를 개화(開花)라 부르지만 나는 안다"는 이 연작의 핵심 태도를 집약한다. 아름다운 이름 아래 감춰진 것을 드러내는 것 — 그것이 이 시인이 언어를 쓰는 방식이다. 이 태도는 단순한 반항이 아니다. 세계의 명명(命名)이 얼마나 많은 것을 지워버리는지에 대한 예민한 감각에서 온다.

덧붙이자면, 윤소민의 시는 한자어를 의식적으로 활용한다. "미명(未明)", "개화(開花)", "낙화(落花)", "환골(換骨)". 이 한자어들은 단순한 어휘 선택이 아니라 의미의 이중층을 만든다. 한글로만 쓰면 미끄러질 뉘앙스를 한자가 붙잡는다.

07 비평가의 솔직한 자리에서: 한계와 가능성

좋은 비평은 아첨이 아니다. 윤소민의 시가 보여주는 가능성만큼이나, 아직 해결되지 않은 긴장들도 있다.

가장 두드러지는 것은 어조의 균일성이다. 네 편 모두 높은 온도를 유지한다. 파열하고, 소진하고, 비명 지르고, 흉터가 되는 — 이 감정적 스펙트럼은 넓지만, 모두 같은 밀도로 타고 있다. 잘 쓰인 시집은 높은 온도와 낮은 온도가 공존하면서 서로를 증폭시킨다. 아주 조용한 행이 있을 때, 그 다음의 폭발이 더 크게 들린다. 윤소민의 연작에서 나는 그 조용한 행들을 더 기다리게 된다.

「낙화의 영원」의 마지막 행에서 "유린"이라는 단어의 선택도 한 번 더 생각해볼 만하다. 이 시의 전반적 어조는 슬픔과 체념의 서정적 혼합인데, "유린"은 그 범위를 벗어나는 폭력성을 가진다. 이 충돌이 계산된 것이라면 효과가 있다. 그러나 그 계산이 독자에게 충분히 전달되는지는 불분명하다.

이 모든 말을 하면서도, 내가 분명하게 말하고 싶은 것은 이것이다: 윤소민은 자신의 목소리를 이미 가지고 있다. 아직 배우는 중인 시인들 중 많은 이들이 목소리를 흉내내는 단계에 있다. 윤소민의 시는 흉내가 아니다. 이 비유 구조들, 이 몸의 언어들, 이 이름 붙이기에 대한 저항 — 이것들은 특정 영향으로부터 왔을 수 있지만, 이미 이 시인의 것이 되어 있다. 이것이 모든 것보다 중요하다.

비평을 끝내며: 찢어진 자리가 가진 특권

찢어진 자리에서만 볼 수 있는 것이 있다. 멀쩡한 곳에서는 안쪽이 보이지 않는다. 윤소민의 시가 반복적으로 파열의 순간으로 돌아가는 이유는, 그 순간에만 보이는 것들이 있기 때문이다 — 뿌리의 깊이, 잔고의 무게, 딱지가 팽팽해지는 과정.

이 연작은 아름다운 개화를 그리지 않는다. 찢어지고, 파산하고, 비명을 지르고, 영원을 원하면서 영원을 가질 수 없는 개화를 그린다. 그것이 이 시들이 살아있는 이유다. 포장된 아름다움은 읽히는 순간 소비된다. 찢어진 아름다움은 읽히고 난 뒤에도 남는다.

윤소민은 가는 중이다. 그것이 이 연작의 가장 솔직한 선언이다. 그리고 그 가는 중임을 이렇게 정직하게 쓸 수 있다는 것이, 이미 하나의 도착이다.

편집자 주

이 비평은 윤소민의 네 편 시 전문이 이 잡지에 함께 실렸음을 전제로 쓰였습니다. 시와 비평을 나란히 읽기를 권합니다. 비평은 시를 대체하지 않습니다. 시를 다시 읽게 만들 수 있다면, 그것으로 충분합니다.`}]},{title:`2부: 자유`,works:[{id:`pyeon`,title:`편`,author:`박민준`,type:`시`,body:`어떤 날은
세상의 속도를
몸이 먼저 놓쳐버린다

숨이 바닥으로 가라앉고
타인들의 등만
빠르게 멀어질 때

남겨진 너의 그림자 곁에
내 그림자를
가만히 포개어 둔다

네가 고개 숙인 자리 뒤에
말없이
닻을 내린다

바람이 불어오면
등으로 먼저
받는다

발이
다시
움직이기 시작할 때까지

이 자리를
비우지 않는다

돌아보면

여기다`},{id:`nabihyogwa`,title:`나비효과`,author:`박민준`,type:`시`,body:`별 하나가
눈에 들어왔다

밝아서가 아니라
가까워서였다

나는 눈을 감지 못했고
그 순간
물 한 방울이
아무 의도 없이
땅으로 떨어졌다

그건
슬픔도 기쁨도 아닌
단지
넘쳐난 것이었다

젖은 자리에서
풀들이 방향을 틀었고
뿌리는
조금 더 깊은 쪽을
선택했다

시간이 지나
열매가 생겼고
누군가는
그 열매로
하루를 넘겼다

그들은
나를 보지 못했고
나는
그들을 알지 못했다

하지만
그 사이의 모든 일은
분명히
일어났다

사람들은
우연이라고 부르지만
나는 안다

별이
눈에 닿는 거리까지
오는 데에는
항상
이유 없는 일만으로는
부족하다는 것을

그래서
누군가 나에게
고맙다고 말할 때마다
나는
아무 대답도 하지 않는다

다만
한 번 더
하늘을 올려다본다

그날처럼
아무것도 바라지 않고
조용히
빛을 보내던
별들을`},{id:`haeburyangsu`,title:`해불양수(海不讓水)`,author:`박도현`,type:`시`,body:`결이 달라도
순도가 달라도
마다하지 말거라

흙을 머금은 물도
먼 길을 돌아 흘러온 물도
한때는 맑음을 지나온 것들이니

바다는
묻지 않는다

어디서 왔는지
무엇을 잃었는지

그저 품는다

모든 파도가
언제나 부드럽지만은 아니하다

때로는 거칠게 몰아치고
서로를 상처내는 물결도 있다

그럼에도
흩어졌던 물들은
끝내 같은 깊이에 만나

구분되지 않는
하나의 흐름으로 이어질 것이니

결이 달라도
순도가 달라도
마다하지 말거라`},{id:`jayu-jakpum`,title:`자유작품`,author:`김요환`,type:`시`,body:`우리 이제 끝났어
질척거리지 마

너랑 함께했던 시간이 그리운거지
니가 그리운 게 아니야

-코로나

무력으로는
여포가 천하제일이라더니
저건 대체 무엇이란 말이더냐

- 화난 여친



이젠 나를 떠나간 걸 알면서도
혹시 몰라
한 번 더 들춰본다

- 잔고`},{id:`ingan-hyeonsang`,title:`인간현상`,author:`양준희`,type:`시`,body:`며칠 사이에 책상 우로
포개두었던 수많은 구슬들을 펼치며
저마다의 사연을 품는
이들 앞에 인사를 나눈다.

어디선가 고개를 곧추세워
숨을 쉬어갈 이들을
마음으로 읽으며–
그들을 차갑게 쓰다듬는다.

깊은 곳으로 빠져본다.
한 소년공을 만났다.
소년공은 시대의 상흔이다.
객지를 가나, 마실을 나가나–
마음 한켠에 못 박힌
조각난 액자이다.

소년공은 품었다
외로운 사랑을 한 글자씩
던지는 두려운 용기를–
그럼에도 꺼내보기가 두려워
차갑게 쓰다듬다 접어보는
그의 서툰 용기.

가장 깊은 곳으로 빠져본다.
영롱한 빛 속에는 세상이 있다.
마침내–
세상은 사랑을 향한다.
사랑은 세상을 향한다.`},{id:`soingugui-geeureun-gulliver`,title:`소인국의 게으른 걸리버`,author:`양준희`,type:`산문`,body:`사랑한다는 것이 무엇인가.

다른 얼굴들이 끈적한 키스를, 또 뜨거운 포옹을 – 나는 이를 몸소 실천해야만 사랑이라 부르기에. 홀로 침전하고 싶다가도 수많은 눈들이 나를 쳐다본다. 그래서 밖으로 나와 움직이기를 택한다.

사람이란 식물과도 같다. 어른들 왈, 빛을 보지 않는다면 기력을 잃는다곤 하는데. 도저히 뜻을 이해하지 못하겠다가도, 세월에 머리가 하얗게 질린 어르신들은 나보다 더 잘 알겠지 싶어 진심 어린 충고를 기쁘게 받아들인다.

그럼에도 가끔씩은 이불 밖으로 나오고 싶지 않은 때가 있다. 마치 게으름의 사슬이 내 사지를 묶어 놓은 느낌이랄까. 스스로 일어나기엔 몸이 무거움에 잔뜩 잠식되었기에. 이제는 일어나야지, 싶다가도 마법에 걸린 듯 그 생각들이 순식간에 횟가루로 흩어진다. 그래서 나는 계속 누워 있기를 택한다.

소인국의 게으른 걸리버가 이런 삶을 살지 않았을지… 끝없는 상상의 나래를 펼쳐본다. 게으른 걸리버에 대한 상상을 하다가도, 나는 해야 할 일이 수두룩하기에 공상에서 나와 현실 속으로 헤엄친다.

강하게 몰아치는 파도를 마주하면, 때로는 두려워 팔을 번쩍 뻗곤 뒤로 물러나기도 하지만… 살아야 한다는 일념 하나로 어떻게든 종점에 도달한다.

그 종점이란 수많은 얼굴들이 모이는 요람이다. 매일 문지방을 밟고 경계선을 넘어서면, 사람들의 각기 다른 얼굴에 놀라기도 한다. 다만, 이것이 세상의 축소판일지도 모른다 생각하고는 이내 고개를 젓는다.

그러다가도, 문득 생각이 깊어지면 깊어질수록 절망이 스며들어 한숨을 내쉬게 된다. 이것이 세상의 축소판이라니. 제기랄, 미래가 너무 어두워 차마 눈을 뜨지 못하겠다.

앞에선 달콤한 미소를 노래하고 뒤에선 서로를 밀어낸다. 마치 보이지 않는 기사들의 싸움처럼, 그러나 조금 더 야만적이게. 그럼에도 종국엔 누군가가 웃을 수 있다는 것에 의의를 두어야겠지. 비록 패배한 이는 영원히 절망의 수렁에 빠져 헤어나올 수 없게 되겠지만.

패배자라, 사전 군데군데를 찾아보아도 설명 한 줄 없는 버려진 단어인데… 그것이 피로 적힌 것인지 빛으로 적힌 것인지 알 수는 없겠지만, 수렁에 빠진다는 것은 쓰디쓴 독약과도 같으니까.

그래서 나는, 다시 홀로 침전의 길을 걸으며 선한 게으름을 읊는다– 소인국을 지켰던 영웅, 거인 걸리버처럼.

좋게 이야기하면 군계일학, 나쁘게 이야기하면 반항아이자 낙오자.

한편,

사람들은 각기 다른 얼굴을 운운하긴 하나
이 모든 것들은 똑같은 방향으로 –
정갈히, 일그러진 사랑을 향하여.

사랑은 그런 게 아닌데.`},{id:`naui-moseup`,title:`나의 모습`,author:`양준희`,type:`시`,body:`한 남자가 있다.
비틀비틀 땅을 어루며
헛다리 짚는 그는 바로
반죽음당한 행려병자.

시대의 아편에 취해
쓸쓸히 자리를 지키는
목 가느다란 가로등에
등을 기대고는
털썩 내리앉아 눈을 감는데–
눈물은 눈알의 문지기를 구슬려
굳게 닫힌 문을 열어내고
가파른 비탈길을 굴러대니.

좀처럼 식지 않는 하이얀 증기에
머리는 사지 묶인지 오래–
도저히 만질 수 없는,
투명한 수증기에 비치는
얼굴들 하나하나가
병문안을 오자
그는 이내 침을 툭툭–
뱉어대는데
눈을 감고 깜짝할 새에
거리는 그저 바람소리만이
들리우고
이내 그의 눈동자 속에
밍기적대던 것은
그저 떨어지는 낙엽뿐이었으니.
아아–
무엇이 무엇인지 모르겠다
거리에 수놓여진
셀 수 없는 벽돌들
이것조차 하나의 수증기였다면?
그는,
나는 도대체 무엇을 딛고
걸어야하나.`},{id:`jaeui-jansang`,title:`재의 잔상`,author:`윤소민`,type:`시`,body:`궁금하다
이 먹은 어디서 왔는가?
외부의 풍파였을까 안의 샘이었을까

마음이라는 한지에 곱게 물들은 먹이
한방울, 두방울, 세방울
점점 더 퍼져가다
결국 찢어져버려서
까만 재로밖에 남지 않게 된걸까

처음부터 어둠이었다면 찢어지는 고통도 없었으리
너무나 맑고 연약하게 빚어져
세상의 거친 비에 속절없이 젖어들 수밖에 없었나

성한 구석 하나 없이 모두 타버린 그 자리에
눅눅한 침묵이 안개처럼 내려앉았을 때
비로소 보인다

검게 타버린 것은 본래의 빛깔이 아니라
그저 쏟아진 어둠을 온몸으로 받아낸 흔적이자 흉터였음을
찢어진 틈새는 어쩌면 더는 버틸 수 없었던 상처였음을

재가 되어버린 마음을 손끝으로 가만히 훑으면
서늘한 온기속에 아직 남아있는 결

악(惡)이라 믿었던 그 진한 얼룩은
어쩌면 너무 간절히 지키고 싶어 꽉 쥐었던
서툰 백지의 멍 자국이었을지도 모른다

이제 비바람에 재마저 모두 흩어지고 나면
텅 빈 바닥 위로 다시 햇살이 고일 테니
다시 시작될 도화지는

이전보다 조금 더 두터운 살의(肌)를 지니리라`},{id:`godok`,title:`고독`,author:`박민준`,type:`시`,body:`도심은
너무 밝아서
아무도 서로를 보지 않는다

유리벽에 비친 얼굴들이
각자의 속도로 지나가고
나는
멈춘 신호등 아래서
한 번도 쓰이지 않은 표정을 연습한다

소리는 많지만
나에게 닿는 것은 없다
말들이 공중에서 서로를 스치다
모두 돌아간 뒤에야
침묵이 남는다

비가 온다
누군가의 우산 아래서
비를 맞지 않기 위해
나는 비를 맞는다

차가운 물이
손등을 타고 내려가자
몸이 먼저 안다
지금
아무도 나를 찾지 않는다는 걸

이 느낌에
이름을 붙이지 않는다
붙이는 순간
사라질 것 같아서

나는
이 자리에 서서
아무 일도 하지 않은 채
시간이 나를 지나가게 둔다

이게 고독인지
아니면
살아 있다는 증거인지
아직은
확인하지 않는다

다만
도시가 다시 소란스러워질 때까지
이 적막을
놓치지 않고
여기 남아 있다`}]},{title:`에필로그`,works:[{id:`gaehwa-park-minjae`,title:`개화`,author:`박민재`,type:`산문`,body:`탁, 탁, 탁. 의미 없는 타자가 이어집니다. 컴퓨터 화면을 뚫어지게 바라보고 있지만, 정신은 이미 딴곳에 가 있습니다. 참 오랜만에 앉은 자리입니다. 이런저런 핑계로, 유일한 목표라 믿었던 이것마저 잊고 살다가 문득 생각이 났습니다.

꿈은 있었습니다. 어렸을 적에는 세상을 구하는 파워레인저가 되고 싶었고, 조금 더 커서는 과학자가, 그다음에는 요리사가 되고 싶었습니다. 그렇게 달려왔다고 생각했는데, 정신을 차려보니 지금의 제가 있습니다.

“지금은 꿈이 뭐야?”라고 누가 묻는다면, 저는 작가가 되고 싶다고 말합니다. 책을 읽을 때, 문장들이 마음 어딘가를 건드리는 순간이 있습니다. 저도 그런 세계를 만들어보고 싶다고 생각합니다. 그래서 그렇게 대답합니다.

그런데 가끔은 헷갈립니다. 정말 쓰고 싶은 건지, 아니면 아무것도 아닌 사람이 되기 싫어서 꿈이라는 이름을 하나 붙들고 있는 건지.

사람들은 꿈을 말할 때마다 너무 쉽게 반짝입니다. 하고 싶은 일, 가고 싶은 곳, 되고 싶은 사람. 그 말들 사이에서 저는 자꾸만 어두워집니다. 누군가의 확신은 이상하게 제 불확실함을 더 선명하게 만들고, 누군가의 빛은 제가 서 있는 자리를 더 초라하게 만듭니다.

화면을 끄면 검은 액정에는 별도, 꽃도 아닌 제 얼굴만 남습니다. 가증스럽게도 그런 얼굴을 하고도 저는 아직 무언가가 되고 싶어 합니다. 저렇게 빛나는 사람을 봐버린 이상, 저도 빛나야 할 것만 같습니다. 적어도 빛나려고 애쓰는 척이라도 해야 할 것 같습니다.

하지만 그런 마음은 오래가지 않습니다. 몇 줄을 쓰고, 몇 번을 다짐하고, 다시 아무것도 아닌 사람처럼 멈춰 있습니다. 그러다 또 한심하다고 욕하고, 또 자극을 찾고, 또 잠깐 뜨거워졌다가 식습니다. 저는 늘 이런 식입니다. 되고 싶은 것들은 있는데, 되는 법은 모르고, 포기하기에는 너무 오래 바라봤고, 계속하기에는 너무 자주 지쳤습니다.

하고 싶다고 말하는 것들은 너무 높습니다. 생각했다는 사실마저 부끄러워질 만큼, 저 같은 사람에게는 너무나도 큰 벽처럼 느껴집니다.

어쩌면 저는 저 반짝이는 사람들을 더 찬란하게 보이게 하는 암흑일 뿐일지도 모릅니다. 저 성신(星辰)들이 빛나기 위해 필요한, 이름 없는 밤일지도 모릅니다.

그래도 한 번쯤은 묻고 싶습니다.

잠깐이라도 반짝였었나요.

저도 언젠가는 저 성신(星辰)들 중 하나가 될 수 있을까요.`},{id:`maecheummal`,title:`맺음말`,author:`새결 일동`,type:`맺음말`,body:`이 호를 덮으면서, 우리는 실리지 못한 것들을 생각합니다. 미처 완성되지 않은 목소리들, 아직 지면을 찾지 못한 문장들. 그것들이 다음 호를 살아 있게 만들 것입니다.

한 권으로 완성되는 잡지를 만들고 싶지 않습니다. 다음을 기다리게 하는 잡지이고 싶습니다.

다음 달에 다른 결로 돌아오겠습니다.

새결 일동`}]}]},{id:`2026-08`,archiveDate:`2026. 08`,archiveTitle:`예정`,archiveDescription:`4호`,status:`upcoming`}],Qr=[{label:`처음`,href:`/`},{label:`문예지모음`,href:`/issues`},{label:`필진`,href:`/poets`},{label:`투고안내`,href:`/submit`},{label:`소개`,href:`/about`}];function $r(){let e=st();return(0,w.useEffect)(()=>{let t=!0,n=null,r=null;if(e.hash){let i=e.hash.substring(1),a=0;n=setInterval(()=>{a++;let e=document.getElementById(i);if(e){if(clearInterval(n),t){Oi(e);let n=0;r=setInterval(()=>{n++;let e=document.getElementById(i);e&&t&&Oi(e),n>=3&&clearInterval(r)},150)}}else a>=50&&clearInterval(n)},50)}else window.scrollTo({top:0,left:0,behavior:`smooth`});return()=>{t=!1,n&&clearInterval(n),r&&clearInterval(r)}},[e.pathname,e.hash]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ei,{}),(0,F.jsxs)(zt,{children:[(0,F.jsx)(Lt,{path:`/`,element:(0,F.jsx)(ti,{})}),(0,F.jsx)(Lt,{path:`/issue/:slug`,element:(0,F.jsx)(oi,{})}),(0,F.jsx)(Lt,{path:`/issue/:slug/work/:workId`,element:(0,F.jsx)(di,{})}),(0,F.jsx)(Lt,{path:`/issues`,element:(0,F.jsx)(pi,{})}),(0,F.jsx)(Lt,{path:`/poems`,element:(0,F.jsx)(It,{to:`/issue/2026-05-gaehwa`,replace:!0})}),(0,F.jsx)(Lt,{path:`/poets`,element:(0,F.jsx)(mi,{})}),(0,F.jsx)(Lt,{path:`/submit`,element:(0,F.jsx)(hi,{})}),(0,F.jsx)(Lt,{path:`/about`,element:(0,F.jsx)(gi,{})}),(0,F.jsx)(Lt,{path:`*`,element:(0,F.jsx)(It,{to:`/`,replace:!0})})]}),(0,F.jsx)(xi,{})]})}function ei(){let e=st(),[t,n]=(0,w.useState)(!1),[r,i]=(0,w.useState)(!1);(0,w.useEffect)(()=>{let e=()=>{n(window.scrollY>24)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e)}},[]),(0,w.useEffect)(()=>{i(!1)},[e.pathname]);let a=()=>{i(!1),window.requestAnimationFrame(()=>{window.scrollTo({top:0,left:0,behavior:`smooth`})})};return(0,F.jsxs)(`header`,{className:`sg-header ${t?`scrolled`:``} ${r?`menu-open`:``}`,children:[(0,F.jsx)(P,{className:`sg-header-logo nav-logo`,to:`/`,"aria-label":`새결 처음으로`,onClick:a,children:`새결`}),(0,F.jsxs)(`button`,{className:`sg-menu-toggle`,type:`button`,"aria-label":r?`메뉴 닫기`:`메뉴 열기`,"aria-expanded":r,"aria-controls":`primary-navigation`,onClick:()=>i(e=>!e),children:[(0,F.jsx)(`span`,{}),(0,F.jsx)(`span`,{})]}),(0,F.jsx)(`nav`,{id:`primary-navigation`,className:`sg-primary-nav nav`,"aria-label":`주요 메뉴`,children:Qr.map(e=>(0,F.jsx)(An,{to:e.href,end:e.href===`/`,onClick:a,children:e.label},e.href))})]})}function ti(){let e=Zr.find(e=>e.status===`active`),t=zr();return(0,F.jsxs)(`main`,{children:[(0,F.jsx)(`section`,{className:`sg-hero`,id:`home`,children:(0,F.jsxs)(`div`,{className:`sg-hero-inner`,children:[(0,F.jsx)(`h1`,{children:`새결`}),(0,F.jsx)(`p`,{className:`sg-hero-lead`,children:`문학의 새로운 호흡, 새결`}),(0,F.jsxs)(`div`,{className:`sg-hero-actions`,children:[(0,F.jsx)(P,{to:`/issue/${e.slug}`,children:`이번 호 읽기`}),(0,F.jsx)(P,{to:`/submit`,children:`투고 안내`})]})]})}),(0,F.jsxs)(`section`,{className:`sg-section sg-current`,id:`current-issue`,children:[(0,F.jsx)(ni,{eyebrow:`이번 호`,title:e.displayTitle}),(0,F.jsxs)(`div`,{className:`sg-main-grid`,children:[(0,F.jsx)(ri,{issue:e}),(0,F.jsx)(ai,{targetDate:t})]})]}),(0,F.jsx)(yi,{})]})}function ni({eyebrow:e,title:t,children:n}){return(0,F.jsxs)(`div`,{className:`sg-section-title`,children:[(0,F.jsx)(`p`,{children:e}),(0,F.jsx)(`h2`,{children:t}),n]})}function ri({issue:e}){return(0,F.jsxs)(P,{className:`sg-featured-issue`,to:`/issue/${e.slug}`,children:[(0,F.jsxs)(`div`,{className:`sg-featured-copy`,children:[(0,F.jsx)(`p`,{children:`새결`}),(0,F.jsx)(`h3`,{children:e.volume}),(0,F.jsxs)(`dl`,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`dt`,{children:`발행`}),(0,F.jsx)(`dd`,{children:e.title})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`dt`,{children:`구분`}),(0,F.jsx)(`dd`,{children:e.label})]})]}),(0,F.jsx)(`span`,{children:`더보기 →`})]}),(0,F.jsxs)(`div`,{className:`sg-cover-card`,children:[(0,F.jsx)(`span`,{children:e.title}),(0,F.jsx)(`strong`,{children:e.theme}),(0,F.jsx)(`small`,{children:Yr(e)})]})]})}function ii({issue:e}){let t=Zr.find(e=>e.status===`active`),n=(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`sg-shelf-date`,children:e.archiveDate}),(0,F.jsx)(`strong`,{children:e.archiveTitle}),(0,F.jsx)(`em`,{children:Yr(e)}),e.badge&&t?.id===e.id&&(0,F.jsx)(`b`,{children:e.badge})]});return e.status===`active`?(0,F.jsx)(P,{className:`sg-shelf-card is-active`,to:`/issue/${e.slug}`,children:n}):(0,F.jsx)(`article`,{className:`sg-shelf-card is-upcoming`,"aria-label":`${e.archiveDate} ${e.archiveTitle}`,children:n})}function ai({targetDate:e}){let[t,n]=(0,w.useState)(()=>Ci(e));(0,w.useEffect)(()=>{let t=window.setInterval(()=>n(Ci(e)),1e3);return()=>window.clearInterval(t)},[e]);let r=[[`Days`,t.days],[`Hours`,t.hours],[`Minutes`,t.minutes],[`Seconds`,t.seconds]];return(0,F.jsxs)(`section`,{className:`sg-countdown`,"aria-label":`다음 호 발행 카운트다운`,children:[(0,F.jsx)(`p`,{children:`다음 호 발행까지`}),(0,F.jsx)(`strong`,{children:t.isPast?`D-0`:`D-${t.days}`}),(0,F.jsx)(`div`,{className:`sg-countdown-grid`,children:r.map(([e,t])=>(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`b`,{children:String(t).padStart(2,`0`)}),(0,F.jsx)(`span`,{children:e})]},e))}),(0,F.jsxs)(`small`,{children:[`다음 호 발행 예정: `,Br(e)]})]})}function oi(){let{slug:e}=ft(),t=Zr.find(t=>t.slug===e&&t.status===`active`),[n,r]=(0,w.useState)(!1);return t?(0,F.jsx)(`main`,{children:(0,F.jsxs)(`article`,{className:`sg-issue-page`,id:`issue-document`,children:[(0,F.jsx)(si,{issue:t}),(0,F.jsx)(li,{id:`preface`,eyebrow:t.prefaceTitle||`머릿말`,body:t.preface}),(0,F.jsx)(ui,{issue:t}),(0,F.jsx)(ci,{issue:t,onToggleComments:()=>r(e=>!e),commentsOpen:n}),n&&(0,F.jsx)(Si,{issue:t}),(0,F.jsxs)(`nav`,{className:`sg-issue-end`,"aria-label":`호수 하단 이동`,children:[(0,F.jsx)(P,{to:`/`,children:`처음으로`}),(0,F.jsx)(`a`,{href:`#toc`,onClick:e=>Di(e,`toc`),children:`목차로`})]})]})}):(0,F.jsx)(It,{to:`/`,replace:!0})}function si({issue:e}){return(0,F.jsx)(`header`,{className:`sg-issue-cover`,children:(0,F.jsxs)(`div`,{className:`sg-reading-shell`,children:[(0,F.jsxs)(`p`,{children:[`[`,Xr(e),`]`]}),(0,F.jsxs)(`h1`,{children:[`『새결』 `,e.label]}),(0,F.jsxs)(`dl`,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`dt`,{children:`주제`}),(0,F.jsx)(`dd`,{children:e.theme})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`dt`,{children:`편집위원`}),(0,F.jsx)(`dd`,{children:e.editors.join(`, `)})]})]})]})})}function ci({issue:e,onToggleComments:t,commentsOpen:n}){let r=async()=>{let t=`${window.location.origin}/issue/${e.slug}`,n=`새결 ${e.displayTitle}`;if(navigator.share){await navigator.share({title:n,text:n,url:t});return}await navigator.clipboard.writeText(t)};return(0,F.jsx)(`section`,{className:`sg-issue-actions`,"aria-label":`${e.displayTitle} 도구`,children:(0,F.jsxs)(`div`,{className:`sg-reading-shell`,children:[(0,F.jsx)(`a`,{href:e.pdfPath,...e.pdfActionLabel?{}:{download:!0},children:e.pdfActionLabel||`PDF 저장`}),(0,F.jsx)(`button`,{type:`button`,onClick:r,children:`공유하기`}),(0,F.jsx)(`button`,{type:`button`,className:n?`is-active`:``,onClick:t,children:`댓글 보기`})]})})}function li({id:e,eyebrow:t,body:n}){return(0,F.jsx)(`section`,{id:e,className:`sg-literary-section`,children:(0,F.jsxs)(`div`,{className:`sg-reading-shell`,children:[(0,F.jsx)(`p`,{className:`sg-section-eyebrow`,children:t}),(0,F.jsx)(fi,{text:n,variant:`prose`})]})})}function ui({issue:e}){let t=e.editorNotes.map(e=>({id:`editor-note-${Ei(e.author)}`,title:`편집위원의 말`,author:e.author}));return(0,F.jsx)(`section`,{id:`toc`,className:`sg-literary-section sg-contents`,children:(0,F.jsxs)(`div`,{className:`sg-reading-shell`,children:[(0,F.jsx)(`p`,{className:`sg-section-eyebrow`,children:`목차`}),(0,F.jsxs)(`div`,{className:`sg-toc-part`,children:[(0,F.jsx)(`h2`,{children:`여는 글`}),(0,F.jsxs)(`ol`,{children:[(0,F.jsx)(`li`,{children:(0,F.jsxs)(`a`,{href:`#preface`,onClick:e=>Di(e,`preface`),children:[(0,F.jsx)(`strong`,{children:e.prefaceTitle||`머릿말`}),(0,F.jsx)(`span`,{children:`새결 일동`})]})}),t.map(t=>(0,F.jsx)(`li`,{children:(0,F.jsxs)(P,{to:`/issue/${e.slug}/work/${t.id}`,children:[(0,F.jsx)(`strong`,{children:t.title}),(0,F.jsx)(`span`,{children:t.author})]})},t.id))]})]}),e.sections.map(t=>(0,F.jsxs)(`div`,{className:`sg-toc-part`,children:[(0,F.jsx)(`h2`,{children:t.title}),(0,F.jsx)(`ol`,{children:t.works.map(t=>(0,F.jsx)(`li`,{children:(0,F.jsxs)(P,{to:`/issue/${e.slug}/work/${t.id}`,children:[(0,F.jsx)(`strong`,{children:t.title}),(0,F.jsx)(`span`,{children:t.author})]})},t.id))})]},t.title))]})})}function di(){let{slug:e,workId:t}=ft(),n=Zr.find(t=>t.slug===e),r=n?Ti(n):[],i=r.findIndex(e=>e.id===t),a=r[i];if(!n||!a)return(0,F.jsx)(It,{to:n?`/issue/${n.slug}`:`/`,replace:!0});let o=r[i-1],s=r[i+1];return(0,F.jsx)(`main`,{className:`sg-work-page`,children:(0,F.jsx)(`article`,{className:`sg-work-reader ${a.type===`시`?`is-poem`:`is-prose`}`,children:(0,F.jsxs)(`div`,{className:`sg-reading-shell`,children:[(0,F.jsx)(`p`,{className:`sg-work-kicker`,children:n.displayTitle}),(0,F.jsxs)(`header`,{children:[(0,F.jsx)(`span`,{children:a.type}),(0,F.jsx)(`h1`,{children:a.title}),(0,F.jsx)(`p`,{children:a.author})]}),(0,F.jsx)(fi,{text:a.body,variant:a.type===`시`?`poem`:`prose`}),(0,F.jsxs)(`nav`,{className:`sg-work-nav`,"aria-label":`작품 이동`,children:[o?(0,F.jsx)(P,{to:`/issue/${n.slug}/work/${o.id}`,children:`이전 작품`}):(0,F.jsx)(`span`,{}),(0,F.jsx)(P,{to:`/issue/${n.slug}#toc`,children:`목차로 돌아가기`}),s?(0,F.jsx)(P,{to:`/issue/${n.slug}/work/${s.id}`,children:`다음 작품`}):(0,F.jsx)(`span`,{})]})]})})})}function fi({text:e,variant:t}){return t===`poem`?(0,F.jsx)(`div`,{className:`sg-text-body is-poem`,children:e}):(0,F.jsx)(`div`,{className:`sg-text-body is-prose`,children:e.split(/\n{2,}/).map((e,t)=>(0,F.jsx)(`p`,{children:e},t))})}function pi(){let e=[...Zr].sort((e,t)=>(e.publishDate||e.id).localeCompare(t.publishDate||t.id));return(0,F.jsx)(`main`,{children:(0,F.jsxs)(`section`,{className:`sg-section`,id:`previous-issues`,children:[(0,F.jsx)(ni,{eyebrow:`문예지모음`,title:`지난 호`,children:(0,F.jsx)(`p`,{className:`sg-section-lead`,children:`발행된 호수와 앞으로 놓일 지면을 조용히 모아둡니다.`})}),(0,F.jsx)(`div`,{className:`sg-issue-shelf`,children:e.map(e=>(0,F.jsx)(ii,{issue:e},e.id))})]})})}function mi(){return(0,F.jsx)(`main`,{children:(0,F.jsxs)(`section`,{className:`sg-section sg-contributors sg-poets-page`,children:[(0,F.jsx)(ni,{eyebrow:`필진`,title:`새결을 이루는 목소리`}),(0,F.jsx)(_i,{})]})})}function hi(){return(0,F.jsx)(`main`,{children:(0,F.jsx)(yi,{})})}function gi(){return(0,F.jsx)(`main`,{children:(0,F.jsx)(bi,{})})}function _i(){let e=qr.filter(e=>[`yang-junhee`,`park-minjun`].includes(e.id)),t=qr.filter(e=>![`yang-junhee`,`park-minjun`].includes(e.id));return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`div`,{className:`sg-contributor-grid sg-editor-grid`,"aria-label":`편집진`,children:e.map(e=>(0,F.jsx)(vi,{person:e,variant:`featured`},e.id))}),(0,F.jsxs)(`section`,{className:`sg-writer-section`,"aria-labelledby":`writer-section-title`,children:[(0,F.jsx)(`div`,{className:`sg-writer-section-title`,children:(0,F.jsx)(`h3`,{id:`writer-section-title`,children:`기고자`})}),(0,F.jsx)(`div`,{className:`sg-contributor-grid sg-writer-grid`,children:t.map(e=>(0,F.jsx)(vi,{person:e,variant:`compact`},e.id))})]})]})}function vi({person:e,variant:t=`compact`}){return(0,F.jsxs)(`article`,{className:`sg-contributor-card is-${t}`,children:[(0,F.jsx)(`img`,{className:`sg-contributor-image`,src:e.image,alt:`${e.name} 사진`,loading:`lazy`}),(0,F.jsxs)(`header`,{children:[(0,F.jsx)(`h3`,{children:e.name}),(0,F.jsx)(`span`,{children:e.role})]}),(0,F.jsx)(`p`,{className:`sg-contributor-line`,children:e.line}),(0,F.jsx)(`p`,{children:e.description})]})}function yi({compact:e=!1}){let[t,n]=Fr(Wr);return(0,F.jsxs)(`section`,{className:`sg-section sg-submit ${e?`is-compact`:``}`,id:e?`issue-submit`:`submit`,children:[(0,F.jsx)(ni,{eyebrow:`투고 안내`,title:`당신의 문장이 다음 호에 닿는 자리`,children:(0,F.jsx)(`p`,{className:`sg-section-lead`,children:`새결은 매달 한 권의 문예지를 꾸립니다. 아래 규정을 확인한 뒤 원고와 소개를 함께 보내주세요.`})}),(0,F.jsxs)(`div`,{className:`sg-submit-guide`,"aria-label":`투고 규정과 분과별 안내`,children:[(0,F.jsxs)(`article`,{className:`sg-submit-panel sg-submit-rules`,children:[(0,F.jsxs)(`header`,{children:[(0,F.jsx)(`p`,{children:`Submission Rules`}),(0,F.jsx)(`h3`,{children:`투고 규정`})]}),(0,F.jsx)(`dl`,{children:Gr.map(([e,t])=>(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`dt`,{children:e}),(0,F.jsx)(`dd`,{children:t})]},e))})]}),(0,F.jsxs)(`article`,{className:`sg-submit-panel sg-submit-departments`,children:[(0,F.jsxs)(`header`,{children:[(0,F.jsx)(`p`,{children:`Departments`}),(0,F.jsx)(`h3`,{children:`분과별 안내`})]}),(0,F.jsxs)(`div`,{className:`sg-department-table`,role:`table`,"aria-label":`분과별 투고 일정`,children:[(0,F.jsxs)(`div`,{className:`sg-department-row is-head`,role:`row`,children:[(0,F.jsx)(`span`,{role:`columnheader`,children:`분과`}),(0,F.jsx)(`span`,{role:`columnheader`,children:`주제`}),(0,F.jsx)(`span`,{role:`columnheader`,children:`마감`}),(0,F.jsx)(`span`,{role:`columnheader`,children:`상태`})]}),Kr.map(e=>(0,F.jsxs)(`div`,{className:`sg-department-row`,role:`row`,children:[(0,F.jsx)(`span`,{role:`cell`,children:e.department}),(0,F.jsx)(`span`,{role:`cell`,children:e.theme}),(0,F.jsx)(`span`,{role:`cell`,children:e.deadline}),(0,F.jsx)(`span`,{role:`cell`,children:(0,F.jsx)(`b`,{className:`sg-status-badge ${e.status===`모집 중`?`is-open`:`is-pending`}`,children:e.status})})]},e.department))]})]})]}),(0,F.jsxs)(`form`,{className:`sg-submit-form`,onSubmit:n,children:[t.succeeded&&(0,F.jsx)(`p`,{className:`sg-form-status`,children:`기고가 접수되었습니다. 보내주신 문장을 확인하겠습니다.`}),(0,F.jsx)(wr,{className:`sg-form-error`,errors:t.errors}),(0,F.jsx)(`input`,{type:`hidden`,name:`_subject`,value:`새결 기고 접수`}),(0,F.jsxs)(`label`,{children:[`이름`,(0,F.jsx)(`input`,{name:`name`,type:`text`,required:!0,placeholder:`이름`})]}),(0,F.jsx)(wr,{className:`sg-form-error`,field:`name`,errors:t.errors}),(0,F.jsxs)(`label`,{children:[`이메일`,(0,F.jsx)(`input`,{name:`email`,type:`email`,required:!0,placeholder:`이메일`})]}),(0,F.jsx)(wr,{className:`sg-form-error`,field:`email`,errors:t.errors}),(0,F.jsxs)(`label`,{children:[`작품 제목`,(0,F.jsx)(`input`,{name:`workTitle`,type:`text`,required:!0,placeholder:`작품 제목`})]}),(0,F.jsx)(wr,{className:`sg-form-error`,field:`workTitle`,errors:t.errors}),(0,F.jsxs)(`label`,{children:[`작품 소개`,(0,F.jsx)(`textarea`,{name:`message`,rows:`10`,required:!0,placeholder:`작품 소개`})]}),(0,F.jsx)(wr,{className:`sg-form-error`,field:`message`,errors:t.errors}),(0,F.jsxs)(`label`,{children:[`첨부 링크 또는 메시지`,(0,F.jsx)(`textarea`,{name:`bio`,rows:`4`,placeholder:`첨부 링크 또는 메시지`})]}),(0,F.jsx)(wr,{className:`sg-form-error`,field:`bio`,errors:t.errors}),(0,F.jsx)(`button`,{type:`submit`,disabled:t.submitting,children:t.submitting?`보내는 중`:`기고하기`})]})]})}function bi(){return(0,F.jsx)(`section`,{className:`sg-section sg-about`,id:`about`,children:(0,F.jsx)(ni,{eyebrow:`소개`,title:`새결은 한 호의 순서를 존중하는 웹 문예지입니다.`,children:(0,F.jsx)(`p`,{className:`sg-section-lead`,children:`빠르게 넘기는 피드가 아니라 표지, 글, 목차, 작품, 댓글로 이어지는 읽기의 흐름을 만듭니다.`})})})}function xi(){return(0,F.jsxs)(`footer`,{className:`sg-footer`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(P,{to:`/`,className:`sg-footer-logo`,children:`새결`}),(0,F.jsx)(`p`,{children:`문학의 새로운 호흡, 새결`})]}),(0,F.jsxs)(`nav`,{"aria-label":`하단 메뉴`,children:[(0,F.jsx)(P,{to:`/`,children:`처음`}),(0,F.jsx)(P,{to:`/issues`,children:`문예지모음`}),(0,F.jsx)(P,{to:`/submit`,children:`투고안내`}),(0,F.jsx)(P,{to:`/about`,children:`소개`}),(0,F.jsx)(P,{to:`/poets`,children:`필진`})]}),(0,F.jsxs)(`address`,{children:[(0,F.jsx)(`span`,{children:`연락처`}),(0,F.jsx)(`a`,{href:`tel:01032859833`,children:`010-3285-9833`}),(0,F.jsx)(`a`,{href:`mailto:jhyang@thesaegyeol.com`,children:`jhyang@thesaegyeol.com`})]})]})}function Si({issue:e}){return(0,w.useEffect)(()=>{if(window.disqus_config=function(){this.page.url=`${window.location.origin}/issue/${e.slug}`,this.page.identifier=e.id,this.page.title=`새결 - ${e.displayTitle}`},window.DISQUS){window.DISQUS.reset({reload:!0,config:window.disqus_config});return}if(document.getElementById(`disqus-script`))return;let t=document.createElement(`script`);t.id=`disqus-script`,t.src=`https://${Ur}.disqus.com/embed.js`,t.setAttribute(`data-timestamp`,`${Date.now()}`),(document.head||document.body).appendChild(t)},[e]),(0,F.jsx)(`section`,{className:`sg-literary-section sg-comments`,id:`comments`,children:(0,F.jsxs)(`div`,{className:`sg-reading-shell`,children:[(0,F.jsx)(`p`,{className:`sg-section-eyebrow`,children:`댓글`}),(0,F.jsx)(`div`,{id:`disqus_thread`}),(0,F.jsx)(`noscript`,{children:`댓글을 보려면 JavaScript를 활성화해주세요.`})]})})}function Ci(e){let t=new Date(e),n=new Date,r=t.getTime()-n.getTime(),i=Math.floor(Math.max(0,r)/1e3),a=Math.max(0,Math.round((wi(t)-wi(n))/864e5));return{isPast:r<=0,days:a,hours:Math.floor(i%86400/3600),minutes:Math.floor(i%3600/60),seconds:i%60}}function wi(e){let t=new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Seoul`,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(e),n=Object.fromEntries(t.map(e=>[e.type,e.value]));return Date.UTC(Number(n.year),Number(n.month)-1,Number(n.day))}function Ti(e){return[...e.editorNotes.map(e=>({id:`editor-note-${Ei(e.author)}`,title:`편집위원의 말`,author:e.author,type:`편집위원의 말`,body:e.body})),...e.sections.flatMap(e=>e.works.map(t=>({...t,sectionTitle:e.title})))]}function Ei(e){return{박민준:`park-minjun`,양준희:`yang-junhee`,"편집위원 박민준":`park-minjun`,"편집위원 양준희":`yang-junhee`}[e]||e.toLowerCase().replace(/\s+/g,`-`)}function Di(e,t){e.preventDefault();let n=document.getElementById(t);n&&Oi(n)}function Oi(e){let t=document.querySelector(`.sg-header`)?.getBoundingClientRect().height??0,n=e.getBoundingClientRect().top+window.scrollY-t-14;window.scrollTo({top:Math.max(0,n),left:0,behavior:`smooth`})}(0,xr.createRoot)(document.getElementById(`root`)).render((0,F.jsx)(Dn,{children:(0,F.jsx)($r,{})}));
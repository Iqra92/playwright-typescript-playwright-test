(function (define) {!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self)["LDClient-Common"]={})}(this,function(e){"use strict";function b(n,e){var t,r=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)),r}function re(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach(function(e){r(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}function he(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}}(e,n)||k(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){var t;if(e)return"string"==typeof e?o(e,n):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function n(e){function n(e,n){Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.message=e,this.code=n}return(n.prototype=new Error).name=e,n.prototype.constructor=n}var A=n("LaunchDarklyUnexpectedResponseError"),ie=n("LaunchDarklyInvalidEnvironmentIdError"),i=n("LaunchDarklyInvalidUserError"),ye=n("LaunchDarklyInvalidEventKeyError"),w=n("LaunchDarklyInvalidArgumentError"),ae=n("LaunchDarklyFlagFetchError"),be=n("LaunchDarklyInvalidDataError");function R(e){return!(400<=e&&e<500)||(400===e||408===e||429===e)}for(var D=Object.freeze({__proto__:null,LDUnexpectedResponseError:A,LDInvalidEnvironmentIdError:ie,LDInvalidUserError:i,LDInvalidEventKeyError:ye,LDInvalidArgumentError:w,LDFlagFetchError:ae,LDInvalidDataError:be,isHttpErrorRecoverable:R}),O=function(e){for(var n,t=e.length,r=t%3,o=[],i=0,a=t-r;i<a;i+=16383)o.push(function(e,n,t){for(var r,o=[],i=n;i<t;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(function(e){return u[e>>18&63]+u[e>>12&63]+u[e>>6&63]+u[63&e]}(r));return o.join("")}(e,i,a<i+16383?a:i+16383));1==r?(n=e[t-1],o.push(u[n>>2]+u[n<<4&63]+"==")):2==r&&(n=(e[t-2]<<8)+e[t-1],o.push(u[n>>10]+u[n>>4&63]+u[n<<2&63]+"="));return o.join("")},u=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,S=t.length;a<S;++a)u[a]=t[a],t.charCodeAt(a),a;"-".charCodeAt(0),"_".charCodeAt(0);function s(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var t,r,o=U(e),i=U(n);if(o&&i){if((a=e.length)!=n.length)return!1;for(t=a;0!=t--;)if(!s(e[t],n[t]))return!1}else{if(o!=i)return!1;o=e instanceof Date,i=n instanceof Date;if(o!=i)return!1;if(o&&i)return e.getTime()==n.getTime();o=e instanceof RegExp,i=n instanceof RegExp;if(o!=i)return!1;if(o&&i)return e.toString()==n.toString();var a,u=I(e);if((a=u.length)!==I(n).length)return!1;for(t=a;0!=t--;)if(!j.call(n,u[t]))return!1;for(t=a;0!=t--;)if(!s(e[r=u[t]],n[r]))return!1}return!0}return e!=e&&n!=n}var U=Array.isArray,I=Object.keys,j=Object.prototype.hasOwnProperty,C=["key","secondary","ip","country","email","firstName","lastName","avatar","name"];function L(e,n){return(e.endsWith("/")?e.substring(0,e.length-1):e)+(n.startsWith("/")?"":"/")+n}function c(e){e=unescape(encodeURIComponent(e));return O(function(e){for(var n=[],t=0;t<e.length;t++)n.push(e.charCodeAt(t));return n}(e))}function P(e){return c(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ue(e){return JSON.parse(JSON.stringify(e))}function se(e,n){return s(e,n)}function ce(e){setTimeout(e,0)}function le(e,n){e=e.then(function(e){return n&&setTimeout(function(){n(null,e)},0),e},function(e){if(!n)return Promise.reject(e);setTimeout(function(){n(e,null)},0)});return n?void 0:e}function T(e){var n,t={};for(n in e)ve(e,n)&&(t[n]={value:e[n],version:0});return t}function fe(e){var n,t={};for(n in e)ve(e,n)&&(t[n]=e[n].value);return t}function F(e,n){for(var t,r=n.slice(0),o=[],i=e;0<r.length;){for(t=[];0<i;){var a=r.shift();if(!a)break;(i-=P(JSON.stringify(a)).length)<0&&0<t.length?r.unshift(a):t.push(a)}i=e,o.push(t)}return o}function N(e){var n=e.version||"3.8.2";return e.userAgent+"/"+n}function de(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce(function(e,n){return re(re({},e),n)},{})}function ve(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function Ee(e){if(!e)return e;var n,t;for(t in C){var r=C[t],o=e[r];void 0!==o&&"string"!=typeof o&&((n=n||re({},e))[r]=String(o))}return n||e}var x=Object.freeze({__proto__:null,appendUrlPath:L,btoa:c,base64URLEncode:P,clone:ue,deepEquals:se,onNextTick:ce,wrapPromiseCallback:le,transformValuesToVersionedValues:T,transformVersionedValuesToValues:fe,chunkUserEventsForUrl:F,getLDUserAgentString:N,extend:de,objectHasOwnProperty:ve,sanitizeUser:Ee});(function(e){var n,t,r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);r?(n=new Uint8Array(16),e.exports=function(){return r(n),n}):(t=new Array(16),e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),t[n]=e>>>((3&n)<<3)&255;return t})})(V={exports:{}});for(var V,_=V.exports,q=[],l=0;l<256;++l)q[l]=(l+256).toString(16).substr(1);var M,f,z=function(e,n){var n=n||0,t=q;return[t[e[n++]],t[e[n++]],t[e[n++]],t[e[n++]],"-",t[e[n++]],t[e[n++]],"-",t[e[n++]],t[e[n++]],"-",t[e[n++]],t[e[n++]],"-",t[e[n++]],t[e[n++]],t[e[n++]],t[e[n++]],t[e[n++]],t[e[+n]]].join("")},d=0,v=0;var g=function(e,n,t){var r=n&&t||0,o=n||[],i=(e=e||{}).node||M,t=void 0!==e.clockseq?e.clockseq:f,a=(null!=i&&null!=t||(a=_(),null==i&&(i=M=[1|a[0],a[1],a[2],a[3],a[4],a[5]]),null==t&&(t=f=16383&(a[6]<<8|a[7]))),void 0!==e.msecs?e.msecs:(new Date).getTime()),u=void 0!==e.nsecs?e.nsecs:v+1,s=a-d+(u-v)/1e4;if(s<0&&void 0===e.clockseq&&(t=t+1&16383),1e4<=(u=(s<0||d<a)&&void 0===e.nsecs?0:u))throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=a,f=t,s=(1e4*(268435455&(a+=122192928e5))+(v=u))%4294967296,o[r++]=s>>>24&255,o[r++]=s>>>16&255,o[r++]=s>>>8&255,o[r++]=255&s,e=a/4294967296*1e4&268435455,o[r++]=e>>>8&255,o[r++]=255&e,o[r++]=e>>>24&15|16,o[r++]=e>>>16&255,o[r++]=t>>>8|128,o[r++]=255&t;for(var c=0;c<6;++c)o[r+c]=i[c];return n||z(o)},p=["debug","info","warn","error","none"];function J(e,u){if(e&&e.destination&&"function"!=typeof e.destination)throw new Error("destination for basicLogger was set to a non-function");function n(n){return function(e){console&&console[n]&&console[n].call(console,e)}}var s=e&&e.destination?[e.destination,e.destination,e.destination,e.destination]:[n("log"),n("info"),n("warn"),n("error")],c=!(!e||!e.destination),l=e&&void 0!==e.prefix&&null!==e.prefix?e.prefix:"[LaunchDarkly] ",t=1;if(e&&e.level)for(var r=0;r<p.length;r++)p[r]===e.level&&(t=r);for(var o={},i=function(e){var i,a=p[e];"none"!==a&&(e<t?o[a]=function(){}:(i=e,o[a]=function(){var e=i,n=a,t=arguments;if(!(t.length<1)){var r=c?n+": "+l:l,o=1!==t.length&&u?((o=E(t))[0]=r+o[0],u.apply(void 0,E(o))):r+t[0];try{s[e](o)}catch(e){console&&console.log&&console.log("[LaunchDarkly] Configured logger's "+n+" method threw an exception: "+e)}}}))},a=0;a<p.length;a++)i(a);return o}function ke(e,n){return J({level:e,prefix:n})}function m(e){return e&&e.message?e.message:"string"==typeof e||e instanceof String?e:JSON.stringify(e)}function we(){return"LaunchDarkly client initialized"}function De(){return"Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript"}function Oe(e){return'Custom event "'+e+'" does not exist'}function K(){return"Environment not found. Double check that you specified a valid environment/client-side ID."+h}function Se(){return"No environment/client-side ID was specified."+h}function ge(e){return"Error fetching flag settings: "+m(e)}function Pe(){return"Invalid data received from LaunchDarkly; connection may have been interrupted"}function Ue(){return"LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly."+h}function Ie(){return"LaunchDarkly bootstrap data is not available because the back end could not read the flags."}function B(e,n){return n?'"'+e+'" is deprecated, please use "'+n+'"':'"'+e+'" is deprecated'}function je(){return"identify() has no effect here; it must be called on the main client instance"}function $(e){return'Ignoring unknown config option "'+e+'"'}function H(e,n,t){return'Config option "'+e+'" should be of type '+n+", got "+t+", using default value"}function G(e,n){return'Config option "'+e+'" should be a boolean, got '+n+", converting to boolean"}function W(e,n,t){return'Config option "'+e+'" was set to '+n+", changing to minimum value of "+t}function Ce(){return"received ping message from stream"}function Te(){return"received streaming update for all flags"}function Re(e){return'received streaming update for flag "'+e+'"'}function Le(e){return'received streaming update for flag "'+e+'" but ignored due to version check'}function Ae(e){return'received streaming deletion for flag "'+e+'"'}function Fe(e){return'received streaming deletion for flag "'+e+'" but ignored due to version check'}function Ne(e){return'enqueueing "'+e+'" event'}function X(e,n){return'an inspector: "'.concat(n,'" of type: "').concat(e,'" generated an exception')}var h=" Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initializing-the-client for instructions on SDK initialization.",Q=function(){return"Exceeded event queue capacity. Increase capacity to avoid dropping events."},Y=function(e){return'Expected application/json content type but got "'+e+'"'},xe=function(e){return"local storage is unavailable: "+m(e)},Z=function(e){return"network error"+(e?" ("+e+")":"")},ee=function(){return"No user specified."+h},ne=function(){return"Invalid user specified."+h},te=function(e,n,t){return"Received error "+e+(401===e?" (invalid SDK key)":"")+" for "+n+" - "+(R(e)?t:"giving up permanently")},Ve=function(){return"Cannot make HTTP requests in this environment."+h},_e=function(){return"Closing stream connection"},qe=function(e){return"Opening stream connection to "+e},Me=function(e,n){return"Error on stream connection: "+m(e)+", will continue retrying after "+n+" milliseconds."},ze=function(e){return"Error on stream connection ".concat(m(e),", giving up permanently")},Je=function(e){return"polling for feature flags at "+e},Ke=function(e){return"sending "+e+" events"},Be=function(e){return'Config option "'.concat(e,'" must only contain letters, numbers, ., _ or -.')},$e=function(e,n){return'an inspector: "'.concat(n,'" of an invalid type (').concat(e,") was configured")},He=function(e){return'Value of "'.concat(e,'" was longer than 64 characters and was discarded.')},Ge=Object.freeze({__proto__:null,clientInitialized:we,clientNotReady:function(){return"LaunchDarkly client is not ready"},eventCapacityExceeded:Q,eventWithoutUser:De,invalidContentType:Y,invalidKey:function(){return"Event key must be a string"},localStorageUnavailable:xe,networkError:Z,unknownCustomEventKey:Oe,environmentNotFound:K,environmentNotSpecified:Se,errorFetchingFlags:ge,userNotSpecified:ee,invalidUser:ne,invalidData:Pe,bootstrapOldFormat:Ue,bootstrapInvalid:Ie,deprecated:B,httpErrorMessage:te,httpUnavailable:Ve,identifyDisabled:je,streamClosing:_e,streamConnecting:qe,streamError:Me,unrecoverableStreamError:ze,unknownOption:$,wrongOptionType:H,wrongOptionTypeBoolean:G,optionBelowMinimum:W,debugPolling:Je,debugStreamPing:Ce,debugStreamPut:Te,debugStreamPatch:Re,debugStreamPatchIgnored:Le,debugStreamDelete:Ae,debugStreamDeleteIgnored:Fe,debugEnqueueingEvent:Ne,debugPostingEvents:Ke,debugPostingDiagnosticEvent:function(e){return"sending diagnostic event ("+e.kind+")"},invalidTagValue:Be,invalidInspector:$e,inspectorMethodError:X,tagValueTooLong:He}),We={baseUrl:{default:"https://app.launchdarkly.com"},streamUrl:{default:"https://clientstream.launchdarkly.com"},eventsUrl:{default:"https://events.launchdarkly.com"},sendEvents:{default:!0},streaming:{type:"boolean"},sendLDHeaders:{default:!0},requestHeaderTransform:{type:"function"},inlineUsersInEvents:{default:!1},allowFrequentDuplicateEvents:{default:!1},sendEventsOnlyForVariation:{default:!1},useReport:{default:!1},evaluationReasons:{default:!1},eventCapacity:{default:100,minimum:1},flushInterval:{default:2e3,minimum:2e3},samplingInterval:{default:0,minimum:0},streamReconnectDelay:{default:1e3,minimum:0},allAttributesPrivate:{default:!1},privateAttributeNames:{default:[]},bootstrap:{type:"string|object"},diagnosticRecordingInterval:{default:9e5,minimum:2e3},diagnosticOptOut:{default:!1},wrapperName:{type:"string"},wrapperVersion:{type:"string"},stateProvider:{type:"object"},autoAliasingOptOut:{default:!1},application:{validator:function(e,n,t){var r={};n.id&&(r.id=Qe("".concat(e,".id"),n.id,t));n.version&&(r.version=Qe("".concat(e,".version"),n.version,t));return r}},inspectors:{default:[]}},Xe=/^(\w|\.|-)+$/;function Qe(e,n,t){if("string"==typeof n&&n.match(Xe)){if(!(64<n.length))return n;t.warn(He(e))}else t.warn(Be(e))}function Ye(e,n,t,a){var u=de({logger:{default:a}},We,t),r={all_attributes_private:"allAttributesPrivate",private_attribute_names:"privateAttributeNames",samplingInterval:null,allowFrequentDuplicateEvents:void 0};function s(e){ce(function(){n&&n.maybeReportError(new w(e))})}var o,i,c,l,f,t=de({},e||{});function d(e){return null===e?"any":void 0!==e?Array.isArray(e)?"array":"boolean"===(e=oe(e))||"string"===e||"number"===e||"function"===e?e:"object":void 0}return o=t,Object.keys(r).forEach(function(e){var n;void 0!==o[e]&&(n=r[e],a&&a.warn(B(e,n)),n&&(void 0===o[n]&&(o[n]=o[e]),delete o[e]))}),i=de({},t),Object.keys(u).forEach(function(e){void 0!==i[e]&&null!==i[e]||(i[e]=u[e]&&u[e].default)}),l=de({},c=t=i),Object.keys(c).forEach(function(e){var n,t,r,o,i=c[e];null!=i&&(void 0===(n=u[e])?s($(e)):(t=n.type||d(n.default),(r=n.validator)?void 0!==(r=r(e,c[e],a))?l[e]=r:delete l[e]:"any"!==t&&(r=t.split("|"),o=d(i),r.indexOf(o)<0?"boolean"===t?(l[e]=!!i,s(G(e,o))):(s(H(e,t,o)),l[e]=n.default):"number"===o&&void 0!==n.minimum&&i<n.minimum&&(s(W(e,i,n.minimum)),l[e]=n.minimum))))}),f=(t=l).logger,p.forEach(function(e){if("none"!==e&&(!f[e]||"function"!=typeof f[e]))throw new Error("Provided logger instance must support logger."+e+"(...) method")}),t}function Ze(e){var n={};return e&&(e.application&&void 0!==e.application.id&&null!==e.application.id&&(n["application-id"]=[e.application.id]),e.application&&void 0!==e.application.version&&null!==e.application.id&&(n["application-version"]=[e.application.version])),n}function en(e,n){var t;return n&&!n.sendLDHeaders?{}:(e={"X-LaunchDarkly-User-Agent":N(e)},n&&n.wrapperName&&(e["X-LaunchDarkly-Wrapper"]=n.wrapperVersion?n.wrapperName+"/"+n.wrapperVersion:n.wrapperName),t=Ze(n),(n=Object.keys(t)).length&&(e["x-launchdarkly-tags"]=n.sort().map(function(n){return Array.isArray(t[n])?t[n].sort().map(function(e){return"".concat(n,"/").concat(e)}):["".concat(n,"/").concat(t[n])]}).reduce(function(e,n){return e.concat(n)},[]).join(" ")),e)}function nn(e,n){return n&&n.requestHeaderTransform?n.requestHeaderTransform(re({},e)):e}var tn=2e3;function rn(u,e,s){var c="/a/"+e+".gif",l=de({"Content-Type":"application/json"},en(u,s)),f=u.httpFallbackPing,d={};return d.sendChunk=function(e,n,r,t){var o=JSON.stringify(e),i=r?null:g();function a(t){var e=r?l:de({},l,{"X-LaunchDarkly-Event-Schema":"3","X-LaunchDarkly-Payload-ID":i});return u.httpRequest("POST",n,nn(e,s),o).promise.then(function(e){var n;if(e)return 400<=e.status&&R(e.status)&&t?a(!1):(n={status:(e=e).status},(e=(e=e.header("date"))&&Date.parse(e))&&(n.serverTime=e),n)}).catch(function(){return t?a(!1):Promise.reject()})}return t?a(!0).catch(function(){}):(f&&f(n+c+"?d="+P(o)),Promise.resolve())},d.sendEvents=function(e,n,t){if(!u.httpRequest)return Promise.resolve();for(var r=u.httpAllowsPost(),o=r?[e]:F(tn-n.length,e),i=[],a=0;a<o.length;a++)i.push(d.sendChunk(o[a],n,t,r));return Promise.all(i)},d}function on(e,n,t,r,o,i){var a,u,s,c,l,f,d,v,g=3<arguments.length&&void 0!==r?r:null,p=4<arguments.length&&void 0!==o?o:null,m={},h=(5<arguments.length&&void 0!==i?i:null)||rn(e,t,n),y=L(n.eventsUrl,"/events/bulk/"+t),b=(u=a=0,s={},(r={}).summarizeEvent=function(e){var n,t;"feature"===e.kind&&(n=e.key+":"+(null!==e.variation&&void 0!==e.variation?e.variation:"")+":"+(null!==e.version&&void 0!==e.version?e.version:""),(t=s[n])?t.count=t.count+1:s[n]={count:1,key:e.key,variation:e.variation,version:e.version,value:e.value,default:e.default},(0===a||e.creationDate<a)&&(a=e.creationDate),e.creationDate>u&&(u=e.creationDate))},r.getSummary=function(){var e,n={},t=!0;for(e in s){var r=s[e],o=n[r.key],i=(o||(o={default:r.default,counters:[]},n[r.key]=o),{value:r.value,count:r.count});void 0!==r.variation&&null!==r.variation&&(i.variation=r.variation),r.version?i.version=r.version:i.unknown=!0,o.counters.push(i),t=!1}return t?null:{startDate:a,endDate:u,features:n}},r.clearSummary=function(){u=a=0,s={}},r),E=(o={},c=(i=n).allAttributesPrivate,l=i.privateAttributeNames||[],f={key:!0,custom:!0,anonymous:!0},d={key:!0,secondary:!0,ip:!0,country:!0,email:!0,firstName:!0,lastName:!0,avatar:!0,name:!0,anonymous:!0,custom:!0},o.filterUser=function(e){var n,o,t,r,i;return e?(n=e.privateAttributeNames||[],o=function(e){return!f[e]&&(c||-1!==n.indexOf(e)||-1!==l.indexOf(e))},t=(r=(i=function(t,r){return Object.keys(t).reduce(function(e,n){return r(n)&&(o(n)?e[1][n]=!0:e[0][n]=t[n]),e},[{},{}])})(e,function(e){return d[e]}))[0],r=r[1],e.custom&&(i=i(e.custom,function(){return 1}),t.custom=i[0],r=de({},r,i[1])),(e=Object.keys(r)).length&&(e.sort(),t.privateAttrs=e),t):null},o),k=n.inlineUsersInEvents,w=n.samplingInterval,D=n.eventCapacity,O=n.flushInterval,S=n.logger,P=[],U=0,I=!1,j=!1;function C(){return 0===w||0===Math.floor(Math.random()*w)}function T(e){P.length<D?(P.push(e),j=!1):(j||(j=!0,S.warn(Q())),g&&g.incrementDroppedEvents())}return m.enqueue=function(e){var n,t,r;I||(n=r=!1,b.summarizeEvent(e),"feature"===e.kind?C()&&(r=!!e.trackEvents,n=!!(t=e).debugEventsUntilDate&&(t.debugEventsUntilDate>U&&t.debugEventsUntilDate>(new Date).getTime())):r=C(),r&&T((r=de({},t=e),"alias"!==t.kind&&(k||"identify"===t.kind?r.user=E.filterUser(t.user):(r.userKey=t.user.key,delete r.user),"feature"===t.kind&&(delete r.trackEvents,delete r.debugEventsUntilDate)),r)),n&&((r=de({},e,{kind:"debug"})).user=E.filterUser(r.user),delete r.trackEvents,delete r.debugEventsUntilDate,T(r)))},m.flush=function(){var e,n;return I||(e=P,n=b.getSummary(),b.clearSummary(),n&&(n.kind="summary",e.push(n)),g&&g.setEventsInLastBatch(e.length),0===e.length)?Promise.resolve():(P=[],S.debug(Ke(e.length)),h.sendEvents(e,y).then(function(e){e&&(e.serverTime&&(U=e.serverTime),R(e.status)||(I=!0),400<=e.status&&ce(function(){p.maybeReportError(new A(te(e.status,"event posting","some events were dropped")))}))}))},m.start=function(){v=setTimeout(function e(){m.flush(),v=setTimeout(e,O)},O)},m.stop=function(){clearTimeout(v)},m}function an(n){var e={},o={};return e.on=function(e,n,t){o[e]=o[e]||[],o[e]=o[e].concat({handler:n,context:t})},e.off=function(e,n,t){if(o[e])for(var r=0;r<o[e].length;r++)o[e][r].handler===n&&o[e][r].context===t&&(o[e]=o[e].slice(0,r).concat(o[e].slice(r+1)))},e.emit=function(e){if(o[e])for(var n=o[e].slice(0),t=0;t<n.length;t++)n[t].handler.apply(n[t].context,Array.prototype.slice.call(arguments,1))},e.getEvents=function(){return Object.keys(o)},e.getEventListenerCount=function(e){return o[e]?o[e].length:0},e.maybeReportError=function(e){e&&(o["error"]?this.emit("error",e):(n||console).error(e.message))},e}var y="ready",un="initialized",sn="failed";var cn=function(o){var n=!1,t=!1,r=null,e=null,i=new Promise(function(n){o.on(y,function e(){o.off(y,e),n()})}).catch(function(){});return{getInitializationPromise:function(){if(!e){if(n)return Promise.resolve();if(t)return Promise.reject(r);e=new Promise(function(n,t){function r(e){o.off(sn,r),t(e)}o.on(un,function e(){o.off(un,e),n()}),o.on(sn,r)})}return e},getReadyPromise:function(){return i},signalSuccess:function(){n||t||(n=!0,o.emit(un),o.emit(y))},signalFailure:function(e){n||t||(t=!0,r=e,o.emit(sn,e),o.emit(y)),o.maybeReportError(e)}}};function ln(n,t,r,o){var i={};function a(){var e="",n=o.getUser();return n&&(e=r||c(JSON.stringify(n))),"ld:"+t+":"+e}return i.loadFlags=function(){return n.get(a()).then(function(e){if(null==e)return null;try{var n,t=JSON.parse(e);return t&&(void 0===(n=t.$schema)||n<1?t=T(t):delete t.$schema),t}catch(e){return i.clearFlags().then(function(){return null})}})},i.saveFlags=function(e){e=de({},e,{$schema:1});return n.set(a(),JSON.stringify(e))},i.clearFlags=function(){return n.clear(a())},i}function fn(r,n){function o(e){t||(t=!0,n.warn(xe(e)))}var e={},t=!1;return e.isEnabled=function(){return!!r},e.get=function(e){return new Promise(function(n){r?r.get(e).then(n).catch(function(e){o(e),n(void 0)}):n(void 0)})},e.set=function(e,t){return new Promise(function(n){r?r.set(e,t).then(function(){return n(!0)}).catch(function(e){o(e),n(!1)}):n(!1)})},e.clear=function(e){return new Promise(function(n){r?r.clear(e).then(function(){return n(!0)}).catch(function(e){o(e),n(!1)}):n(!1)})},e}var dn=3e5,vn=3e4,gn=.5;function pn(o,i,a,n){var u,s=i.streamUrl,c=i.logger,e={},l=L(s,"/eval/"+a),f=i.useReport,d=i.evaluationReasons,t=i.streamReconnectDelay,v=en(o,i),g=!1,p=null,m=null,h=null,y=null,b=null,E=0;function r(){e=t*Math.pow(2,E);var e=(e=vn<e?vn:e)-Math.trunc(Math.random()*gn*e);return E+=1,e}function k(e){var n;e.status&&"number"==typeof e.status&&!R(e.status)?(O(),c.error(ze(e)),m&&(clearTimeout(m),m=null)):(n=r(),g||(c.warn(Me(e,n)),g=!0),S(!1),O(),w(n))}function w(e){m||(e?m=setTimeout(D,e):D())}function D(){m=null;var e,n="",t={headers:v,readTimeoutMillis:dn};if(o.eventSourceFactory){for(var r in null!=y&&(n="h="+y),f?o.eventSourceAllowsReport?(e=l,t.method="REPORT",t.headers["Content-Type"]="application/json",t.body=JSON.stringify(h)):(e=L(s,"/ping/"+a),n=""):e=l+"/"+P(JSON.stringify(h)),t.headers=nn(t.headers,i),e=e+((n=d?n+(n?"&":"")+"withReasons=true":n)?"?":"")+n,O(),c.info(qe(e)),u=(new Date).getTime(),p=o.eventSourceFactory(e,t),b)ve(b,r)&&p.addEventListener(r,b[r]);p.onerror=k,p.onopen=function(){E=0}}}function O(){p&&(c.info(_e()),p.close(),p=null)}function S(e){u&&n&&n.recordStreamInit(u,!e,(new Date).getTime()-u),u=null}return e.connect=function(e,n,t){h=e,y=n,b={};for(var r in t||{})!function(n){b[n]=function(e){S(!(g=!1)),t[n]&&t[n](e)}}(r);w()},e.disconnect=function(){clearTimeout(m),m=null,O()},e.isConnected=function(){return!!(p&&o.eventSourceIsActive&&o.eventSourceIsActive(p))},e}var mn="application/json";function hn(d,v,i){var a=v.baseUrl,u=v.useReport,s=v.evaluationReasons,c=v.logger,e={},g={};function l(e,n){var t,r,o,i,a,u,s,c,l,f;return d.httpRequest?(t=n?"REPORT":"GET",r=en(d,v),n&&(r["Content-Type"]=mn),(o=g[e])||(i=function(){delete g[e]},(f={addPromise:function(n,e){a=n,u&&u(),u=e,n.then(function(e){a===n&&(s(e),i&&i())},function(e){a===n&&(c(e),i&&i())})}}).resultPromise=new Promise(function(e,n){s=e,c=n}),o=f,g[e]=o),f=(l=d.httpRequest(t,e,nn(r,v),n)).promise.then(function(e){var n;return 200===e.status?e.header("content-type")&&e.header("content-type").substring(0,mn.length)===mn?JSON.parse(e.body):(n=Y(e.header("content-type")||""),Promise.reject(new ae(n))):Promise.reject(404===(n=e).status?new ie(K()):new ae(ge(n.statusText||String(n.status))))},function(e){return Promise.reject(new ae(Z(e)))}),o.addPromise(f,function(){l.cancel&&l.cancel()}),o.resultPromise):new Promise(function(e,n){n(new ae(Ve()))})}return e.fetchJSON=function(e){return l(L(a,e),null)},e.fetchFlagSettings=function(e,n){var t,r,o="";return u?(t=[a,"/sdk/evalx/",i,"/user"].join(""),r=JSON.stringify(e)):(e=P(JSON.stringify(e)),t=[a,"/sdk/evalx/",i,"/users/",e].join("")),n&&(o="h="+n),c.debug(Je(t=t+((o=s?o+(o?"&":"")+"withReasons=true":o)?"?":"")+o)),l(t,r)},e}var yn="ld:$anonUserId";function bn(t){var e={};return e.validateUser=function(e){var n;return e?null!==(n=ue(e)).key&&void 0!==n.key?(n.key=n.key.toString(),Promise.resolve(n)):n.anonymous?t.get(yn).then(function(e){return e?(n.key=e,n):(e=g(),n.key=e,t.set(yn,e).then(function(){return n}))}):Promise.reject(new i(ne())):Promise.reject(new i(ee()))},e}var En=Object.freeze({__proto__:null,baseOptionDefs:We,validate:Ye,getTags:Ze}).baseOptionDefs,kn=x.appendUrlPath;var wn=function(e){var n={diagnosticId:g()};return e&&(n.sdkKeySuffix=6<e.length?e.substring(e.length-6):e),n},Dn=function(e){var n,t,r,o;function i(e){n=e,r=t=0,o=[]}return i(e),{getProps:function(){return{dataSinceDate:n,droppedEvents:t,eventsInLastBatch:r,streamInits:o}},setProps:function(e){n=e.dataSinceDate,t=e.droppedEvents||0,r=e.eventsInLastBatch||0,o=e.streamInits||[]},incrementDroppedEvents:function(){t++},setEventsInLastBatch:function(e){r=e},recordStreamInit:function(e,n,t){o.push({timestamp:e,failed:n,durationMillis:t})},reset:i}},On=function(n,r,e,t,o,i,a){var u,s,c=!!n.diagnosticUseCombinedEvent,l="ld:"+o+":$diagnostics",f=kn(i.eventsUrl,"/events/diagnostic/"+o),d=i.diagnosticRecordingInterval,v=e,g=!!i.streaming;function p(){return{sdk:function(){var e=re({},n.diagnosticSdkData);i.wrapperName&&(e.wrapperName=i.wrapperName);i.wrapperVersion&&(e.wrapperVersion=i.wrapperVersion);return e}(),configuration:{customBaseURI:i.baseUrl!==En.baseUrl.default,customStreamURI:i.streamUrl!==En.streamUrl.default,customEventsURI:i.eventsUrl!==En.eventsUrl.default,eventsCapacity:i.eventCapacity,eventsFlushIntervalMillis:i.flushInterval,reconnectTimeMillis:i.streamReconnectDelay,streamingDisabled:!g,allAttributesPrivate:!!i.allAttributesPrivate,inlineUsersInEvents:!!i.inlineUsersInEvents,diagnosticRecordingIntervalMillis:i.diagnosticRecordingInterval,usingSecureMode:!!i.hash,bootstrapMode:!!i.bootstrap,fetchGoalsDisabled:!i.fetchGoals,sendEventsOnlyForVariation:!!i.sendEventsOnlyForVariation,autoAliasingOptOut:!!i.autoAliasingOptOut},platform:n.diagnosticPlatformData}}function m(e){i.logger&&i.logger.debug(Ge.debugPostingDiagnosticEvent(e)),t.sendEvents(e,f,!0).then(function(){}).catch(function(){})}function h(){var e,n;m((n=(new Date).getTime(),e=re({kind:c?"diagnostic-combined":"diagnostic",id:a,creationDate:n},v.getProps()),c&&(e=re(re({},e),p())),v.reset(n),e)),s=setTimeout(h,d),u=(new Date).getTime(),c&&r.isEnabled()&&(n=re({},v.getProps()),r.set(l,JSON.stringify(n)))}return(o={}).start=function(){var t;c?(t=function(e){var n;e?(e=(u||0)+d)<=(n=(new Date).getTime())?h():s=setTimeout(h,e-n):0===Math.floor(4*Math.random())?h():s=setTimeout(h,d)},r.isEnabled()?r.get(l).then(function(e){if(e)try{var n=JSON.parse(e);v.setProps(n),u=n.dataSinceDate}catch(e){}t(!0)}).catch(function(){t(!1)}):t(!1)):(m(re({kind:"diagnostic-init",id:a,creationDate:v.getProps().dataSinceDate},p())),s=setTimeout(h,d))},o.stop=function(){s&&clearTimeout(s)},o.setStreaming=function(e){g=e},o};var pe={flagUsed:"flag-used",flagDetailsChanged:"flag-details-changed",flagDetailChanged:"flag-detail-changed",clientIdentityChanged:"client-identity-changed"};function Sn(e,i){var n,t={},o=(r(n={},pe.flagUsed,[]),r(n,pe.flagDetailsChanged,[]),r(n,pe.flagDetailChanged,[]),r(n,pe.clientIdentityChanged,[]),n);return(null==e?void 0:e.map(function(e){return t=i,r=!1,o={type:(n=e).type,name:n.name,method:function(){try{n.method.apply(n,arguments)}catch(e){r||(r=!0,t.warn(X(o.type,o.name)))}}};var n,t,r,o})).forEach(function(e){Object.prototype.hasOwnProperty.call(o,e.type)?o[e.type].push(e):i.warn($e(e.type,e.name))}),t.hasListeners=function(e){return null==(e=o[e])?void 0:e.length},t.onFlagUsed=function(n,t,r){o[pe.flagUsed].length&&ce(function(){o[pe.flagUsed].forEach(function(e){return e.method(n,t,r)})})},t.onFlags=function(n){o[pe.flagDetailsChanged].length&&ce(function(){o[pe.flagDetailsChanged].forEach(function(e){return e.method(n)})})},t.onFlagChanged=function(n,t){o[pe.flagDetailChanged].length&&ce(function(){o[pe.flagDetailChanged].forEach(function(e){return e.method(n,t)})})},t.onIdentityChanged=function(n){o[pe.clientIdentityChanged].length&&ce(function(){o[pe.clientIdentityChanged].forEach(function(e){return e.method(n)})})},t}Object.freeze(pe);var me="change",Pn="internal-change";e.commonBasicLogger=J,e.createConsoleLogger=ke,e.errors=D,e.initialize=function(N,x,e,o,n){var t,a,r,i,u,s,V,c,_,l=function(){if(e&&e.logger)return e.logger;return n&&n.logger&&n.logger.default||ke("warn")}(),f=an(l),d=cn(f),v=Ye(e,f,n,l),g=Sn(v.inspectors,l),p=v.sendEvents,m=N,h=v.hash,y=fn(o.localStorage,l),b=rn(o,m,v),E=v.sendEvents&&!v.diagnosticOptOut,q=E?wn(m):null,k=E?Dn((new Date).getTime()):null,w=E?On(o,y,k,b,m,v,q):null,M=pn(o,v,m,k),D=v.eventProcessor||on(o,v,m,k,f,b),O=hn(o,v,m),S={},P=v.streaming,z=!1,U=!1,J=!0,I=v.stateProvider,j=(i=function(e,n){(function(e){I||e&&T({kind:"identify",key:e.key,user:e,creationDate:(new Date).getTime()})})(e),!v.autoAliasingOptOut&&n&&n.anonymous&&e&&!e.anonymous&&W(e,n);g.hasListeners(pe.clientIdentityChanged)&&g.onIdentityChanged(j.getUser())},E={setUser:function(e){var n=u&&ue(u);(u=Ee(e))&&i&&i(ue(u),n)},getUser:function(){return u?ue(u):null}},(q=null)&&E.setUser(q),E),K=bn(y),C=y.isEnabled()?new ln(y,m,h,j):null;function T(e){if(m&&!(I&&I.enqueueEvent&&I.enqueueEvent(e))){if("alias"!==e.kind){if(!e.user)return void(J&&(l.warn(De()),J=!1));J=!1}!p||U||o.isDoNotTrack()||(l.debug(Ne(e.kind)),D.enqueue(e))}}function B(e,n){g.hasListeners(pe.flagDetailChanged)&&g.onFlagChanged(e.key,R(n))}function $(){g.hasListeners(pe.flagDetailsChanged)&&g.onFlags(Object.entries(S).map(function(e){e=he(e,2);return{key:e[0],detail:R(e[1])}}).reduce(function(e,n){return e[n.key]=n.detail,e},{}))}function H(e,n,t,r){var o=j.getUser(),i=new Date,t={kind:"feature",key:e,user:o,value:n?n.value:null,variation:n?n.variationIndex:null,default:t,creationDate:i.getTime()},i=(o&&o.anonymous&&(t.contextKind=L(o)),S[e]);i&&(t.version=i.flagVersion||i.version,t.trackEvents=i.trackEvents,t.debugEventsUntilDate=i.debugEventsUntilDate),(r||i&&i.trackReason)&&n&&(t.reason=n.reason),T(t)}function G(e,n,t,r,o){var i,a;return S&&ve(S,e)&&S[e]&&!S[e].deleted?(i=R(a=S[e]),null!==a.value&&void 0!==a.value||(i.value=n)):i={value:n,variationIndex:null,reason:{kind:"ERROR",errorKind:"FLAG_NOT_FOUND"}},t&&H(e,i,n,r),o||(a=e,t=i,g.hasListeners(pe.flagUsed)&&g.onFlagUsed(a,t,j.getUser())),i}function R(e){return{value:e.value,variationIndex:void 0===e.variation?null:e.variation,reason:e.reason||null}}function L(e){return e.anonymous?"anonymousUser":"user"}function W(e,n){I||e&&n&&T({kind:"alias",key:e.key,contextKind:L(e),previousKey:n.key,previousContextKind:L(n),creationDate:(new Date).getTime()})}function X(){var i;a=!0,j.getUser()&&(i=function(e){try{return JSON.parse(e)}catch(e){f.maybeReportError(new be(Pe()))}},M.connect(j.getUser(),h,{ping:function(){l.debug(Ce());var n=j.getUser();O.fetchFlagSettings(n,h).then(function(e){se(n,j.getUser())&&A(e||{})}).catch(function(e){f.maybeReportError(new ae(ge(e)))})},put:function(e){e=i(e.data);e&&(l.debug(Te()),A(e))},patch:function(e){var n,t,r,o,e=i(e.data);e&&(!(n=S[e.key])||!n.version||!e.version||n.version<e.version?(l.debug(Re(e.key)),t={},delete(r=de({},e)).key,o=R(S[e.key]=r),t[e.key]=n?{previous:n.value,current:o}:{current:o},Y(t),B(e,r)):l.debug(Le(e.key)))},delete:function(e){var n,e=i(e.data);e&&(!S[e.key]||S[e.key].version<e.version?(l.debug(Ae(e.key)),n={},S[e.key]&&!S[e.key].deleted&&(n[e.key]={previous:S[e.key].value}),S[e.key]={version:e.version,deleted:!0},B(e,S[e.key]),Y(n)):l.debug(Fe(e.key)))}}))}function Q(){a&&(M.disconnect(),a=!1)}function A(e){var n,t,r={};if(!e)return Promise.resolve();for(n in S)ve(S,n)&&S[n]&&(e[n]&&!se(e[n].value,S[n].value)?r[n]={previous:S[n].value,current:R(e[n])}:e[n]&&!e[n].deleted||(r[n]={previous:S[n].value}));for(t in e)ve(e,t)&&e[t]&&(!S[t]||S[t].deleted)&&(r[t]={current:R(e[t])});return S=re({},e),$(),Y(r).catch(function(){})}function Y(o){var i,e=Object.keys(o);return 0<e.length&&(i={},e.forEach(function(e){var n=o[e].current,t=n?n.value:void 0,r=o[e].previous;f.emit(me+":"+e,t,r),i[e]=n?{current:t,previous:r}:{previous:r}}),f.emit(me,i),f.emit(Pn,S),v.sendEventsOnlyForVariation||I||e.forEach(function(e){H(e,o[e].current)})),t&&C?C.saveFlags(S):Promise.resolve()}function Z(){var e=P||r&&void 0===P;e&&!a?X():!e&&a&&Q(),w&&w.setStreaming(e)}function ee(e){return e===me||e.substr(0,me.length+1)===me+":"}function ne(e){m=e.environment,j.setUser(e.user),S=re({},e.flags),ce(F)}function F(){l.info(we()),z=!0,Z(),d.signalSuccess()}function te(e){d.signalFailure(e)}return"string"==typeof v.bootstrap&&"LOCALSTORAGE"===v.bootstrap.toUpperCase()&&(C?t=!0:l.warn(xe())),"object"===oe(v.bootstrap)&&(s=v.bootstrap,k=Object.keys(s),!(c=s[V="$flagsState"])&&k.length&&l.warn(Ue()),!1===s.$valid&&l.warn(Ie()),_={},k.forEach(function(e){var n;e!==V&&"$valid"!==e&&(n={value:s[e]},c&&c[e]?n=de(n,c[e]):n.version=0,_[e]=n)}),S=_),I?((b=I.getInitialState())?ne(b):I.on("init",ne),I.on("update",function(e){e.user&&j.setUser(e.user);e.flags&&A(e.flags)})):(N?K.validateUser(x).then(function(e){return j.setUser(e),"object"===oe(v.bootstrap)?F():t?C.loadFlags().then(function(e){return null==e?(S={},O.fetchFlagSettings(j.getUser(),h).then(function(e){return A(e||{})}).then(F).catch(function(e){te(new ae(ge(e)))})):(S=e,ce(F),O.fetchFlagSettings(j.getUser(),h).then(A).catch(function(e){return f.maybeReportError(e)}))}):O.fetchFlagSettings(j.getUser(),h).then(function(e){S=e||{},$(),F()}).catch(function(e){S={},te(e)})}):Promise.reject(new ie(Se()))).catch(te),{client:{waitForInitialization:function(){return d.getInitializationPromise()},waitUntilReady:function(){return d.getReadyPromise()},identify:function(e,r,n){return U?le(Promise.resolve({}),n):I?(l.warn(je()),le(Promise.resolve(fe(S)),n)):le((t&&C?C.clearFlags():Promise.resolve()).then(function(){return K.validateUser(e)}).then(function(t){return O.fetchFlagSettings(t,r).then(function(e){var n=fe(e);return j.setUser(t),h=r,e?A(e).then(function(){return n}):n})}).then(function(e){return a&&X(),e}).catch(function(e){return f.maybeReportError(e),Promise.reject(e)}),n)},getUser:function(){return j.getUser()},variation:function(e,n){return G(e,n,!0,!1,!1).value},variationDetail:function(e,n){return G(e,n,!0,!0,!1)},track:function(e,n,t){var r;"string"!=typeof e?f.maybeReportError(new ye(Oe(e))):(o.customEventFilter&&!o.customEventFilter(e)&&l.warn(Oe(e)),r={kind:"custom",key:e,user:e=j.getUser(),url:o.getCurrentUrl(),creationDate:(new Date).getTime()},e&&e.anonymous&&(r.contextKind=L(e)),null!=n&&(r.data=n),null!=t&&(r.metricValue=t),T(r))},alias:W,on:function(e,n,t){ee(e)?(r=!0,z&&Z(),f.on(e,n,t)):f.on.apply(f,arguments)},off:function(e){var n;f.off.apply(f,arguments),ee(e)&&(n=!1,f.getEvents().forEach(function(e){ee(e)&&0<f.getEventListenerCount(e)&&(n=!0)}),n||(r=!1,a&&void 0===P&&Q()))},setStreaming:function(e){(e=null===e?void 0:e)!==P&&(P=e,Z())},flush:function(e){return le(p?D.flush():Promise.resolve(),e)},allFlags:function(){var e={};if(S)for(var n in S)ve(S,n)&&!S[n].deleted&&(e[n]=G(n,null,!v.sendEventsOnlyForVariation,!1,!0).value);return e},close:function(e){var n;return U?le(Promise.resolve(),e):(n=function(){U=!0,S={}},le(Promise.resolve().then(function(){if(Q(),w&&w.stop(),p)return D.stop(),D.flush()}).then(n).catch(n),e))}},options:v,emitter:f,ident:j,logger:l,requestor:O,start:function(){p&&(w&&w.start(),D.start())},enqueueEvent:T,getFlagsInternal:function(){return S},getEnvironmentId:function(){return m},internalChangeEventName:Pn}},e.messages=Ge,e.utils=x,e.version="3.8.2",Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ldclient-common.min.js.map
}(globalRequire.define));
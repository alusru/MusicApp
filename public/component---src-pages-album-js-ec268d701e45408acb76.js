(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[419],{2264:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",o="minute",i="hour",s="day",u="week",l="month",_="quarter",c="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},E=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:E,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+E(n,2,"0")+":"+E(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,l),o=r-a<0,i=t.clone().add(n+(o?-1:1),l);return+(-(n+(r-a)/(o?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:u,d:s,D:d,h:i,m:o,s:a,ms:n,Q:_}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},m="en",P={};P[m]=y;var M="$isDayjsObject",O=function(e){return e instanceof g||!(!e||!e[M])},b=function e(t,r,n){var a;if(!t)return m;if("string"==typeof t){var o=t.toLowerCase();P[o]&&(a=o),r&&(P[o]=r,a=o);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var s=t.name;P[s]=t,a=s}return!n&&a&&(m=a),a||!n&&m},D=function(e,t){if(O(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new g(r)},L=v;L.l=b,L.i=O,L.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var g=function(){function y(e){this.$L=b(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[M]=!0}var E=y.prototype;return E.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(L.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var a=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},E.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},E.$utils=function(){return L},E.isValid=function(){return!(this.$d.toString()===f)},E.isSame=function(e,t){var r=D(e);return this.startOf(t)<=r&&r<=this.endOf(t)},E.isAfter=function(e,t){return D(e)<this.startOf(t)},E.isBefore=function(e,t){return this.endOf(t)<D(e)},E.$g=function(e,t,r){return L.u(e)?this[t]:this.set(r,e)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(e,t){var r=this,n=!!L.u(t)||t,_=L.p(e),f=function(e,t){var a=L.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},p=function(e,t){return L.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},h=this.$W,y=this.$M,E=this.$D,v="set"+(this.$u?"UTC":"");switch(_){case c:return n?f(1,0):f(31,11);case l:return n?f(1,y):f(0,y+1);case u:var m=this.$locale().weekStart||0,P=(h<m?h+7:h)-m;return f(n?E-P:E+(6-P),y);case s:case d:return p(v+"Hours",0);case i:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case a:return p(v+"Milliseconds",3);default:return this.clone()}},E.endOf=function(e){return this.startOf(e,!1)},E.$set=function(e,t){var r,u=L.p(e),_="set"+(this.$u?"UTC":""),f=(r={},r[s]=_+"Date",r[d]=_+"Date",r[l]=_+"Month",r[c]=_+"FullYear",r[i]=_+"Hours",r[o]=_+"Minutes",r[a]=_+"Seconds",r[n]=_+"Milliseconds",r)[u],p=u===s?this.$D+(t-this.$W):t;if(u===l||u===c){var h=this.clone().set(d,1);h.$d[f](p),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},E.set=function(e,t){return this.clone().$set(e,t)},E.get=function(e){return this[L.p(e)]()},E.add=function(n,_){var d,f=this;n=Number(n);var p=L.p(_),h=function(e){var t=D(f);return L.w(t.date(t.date()+Math.round(e*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===s)return h(1);if(p===u)return h(7);var y=(d={},d[o]=t,d[i]=r,d[a]=e,d)[p]||1,E=this.$d.getTime()+n*y;return L.w(E,this)},E.subtract=function(e,t){return this.add(-1*e,t)},E.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=L.z(this),o=this.$H,i=this.$m,s=this.$M,u=r.weekdays,l=r.months,_=r.meridiem,c=function(e,r,a,o){return e&&(e[r]||e(t,n))||a[r].slice(0,o)},d=function(e){return L.s(o%12||12,e,"0")},p=_||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(h,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return L.s(t.$y,4,"0");case"M":return s+1;case"MM":return L.s(s+1,2,"0");case"MMM":return c(r.monthsShort,s,l,3);case"MMMM":return c(l,s);case"D":return t.$D;case"DD":return L.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return c(r.weekdaysMin,t.$W,u,2);case"ddd":return c(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(o);case"HH":return L.s(o,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return p(o,i,!0);case"A":return p(o,i,!1);case"m":return String(i);case"mm":return L.s(i,2,"0");case"s":return String(t.$s);case"ss":return L.s(t.$s,2,"0");case"SSS":return L.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(n,d,f){var p,h=this,y=L.p(d),E=D(n),v=(E.utcOffset()-this.utcOffset())*t,m=this-E,P=function(){return L.m(h,E)};switch(y){case c:p=P()/12;break;case l:p=P();break;case _:p=P()/3;break;case u:p=(m-v)/6048e5;break;case s:p=(m-v)/864e5;break;case i:p=m/r;break;case o:p=m/t;break;case a:p=m/e;break;default:p=m}return f?p:L.a(p)},E.daysInMonth=function(){return this.endOf(l).$D},E.$locale=function(){return P[this.$L]},E.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=b(e,t,!0);return n&&(r.$L=n),r},E.clone=function(){return L.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},y}(),T=g.prototype;return D.prototype=T,[["$ms",n],["$s",a],["$m",o],["$H",i],["$W",s],["$M",l],["$y",c],["$D",d]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,g,D),e.$i=!0),D},D.locale=b,D.isDayjs=O,D.unix=function(e){return D(1e3*e)},D.en=P[m],D.Ls=P,D.p={},D}()},2068:function(e,t,r){"use strict";r.r(t);var n=r(1504),a=r(6564),o=r(6076),i=r(9128),s=r(692),u=r(5564),l=r(2264),_=r.n(l),c=r(8160),d=r.n(c);t.default=e=>{var t;const{0:r,1:l}=(0,n.useState)("");(0,n.useEffect)((()=>{(async e=>{let t=[];try{const r=a.c.get(o.W+"album/"+e.id);t=(await r).data}catch(r){console.log(r)}try{l(t)}catch(r){console.log(r)}})(e)}),[e]);const c=_()(),f=r.release_date;let p=c.diff(f,"days");return n.createElement(s.c,null,n.createElement(u.c,{title:"Album"}),n.createElement(i.q4,null,n.createElement(i.WA,null,n.createElement(i.ou,null,n.createElement("img",{src:r.cover_big,alt:r.title})),n.createElement(i.ou,null,n.createElement(i.Ib,null,n.createElement(i.Ke,null,r&&r.title," ",p&&p<=7?n.createElement(i.Q1,null,"NEW"):""),r&&(null===(t=r.contributors)||void 0===t?void 0:t.map((e=>n.createElement(i.QV,{key:e.id},n.createElement(i.IB,{src:e.picture_small,alt:e.name}),n.createElement(i.AV,{to:"/artist/"+e.id},e.name))))),n.createElement(i.Ud,null,n.createElement(i.kr,null,r&&r.nb_tracks>1?(r&&r.nb_tracks)+" tracks":(r&&r.nb_tracks)+" track"," "),n.createElement(i.kr,null,Math.floor((r&&r.duration/60)/60)," hrs"," ",Math.round(r&&r.duration/60)-60*Math.floor((r&&r.duration/60)/60)," ","mins"),n.createElement(i.kr,null,r&&r.release_date),n.createElement(i.kr,null,r&&r.fans," fans"))))),n.createElement(i.WA,null,n.createElement(i.ou,null,n.createElement(i.iS,null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Track"),n.createElement("th",null,"Duration"),n.createElement("th",null,"Preview"))),n.createElement("tbody",null,r&&r.tracks.data.map((e=>n.createElement("tr",{key:e.id},n.createElement("td",null," ",e.title),n.createElement("td",null," ",Math.floor(e.duration/60),":",e.duration-60*Math.floor(e.duration/60)),n.createElement("td",null," ",n.createElement(d(),{src:e.preview,controls:!0,style:{width:"190px",height:"30px"}})))))),n.createElement("tfoot",null)))),n.createElement("small",null,r&&r.release_date.slice(0,4)," | ",r&&r.label)))}},8160:function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=__webpack_require__(3268)},function(e,t){e.exports=__webpack_require__(1504)},function(module,__nested_webpack_exports__,__nested_webpack_require_1058__){"use strict";__nested_webpack_require_1058__.r(__nested_webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_1058__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__nested_webpack_require_1058__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_1058__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__nested_webpack_require_1058__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var e;_classCallCheck(this,ReactAudioPlayer);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(e=_super.call.apply(_super,[this].concat(r))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(e),"listenTracker",void 0),_defineProperty(_assertThisInitialized(e),"onError",(function(t){var r,n;return null===(r=(n=e.props).onError)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onCanPlay",(function(t){var r,n;return null===(r=(n=e.props).onCanPlay)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onCanPlayThrough",(function(t){var r,n;return null===(r=(n=e.props).onCanPlayThrough)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onPlay",(function(t){var r,n;e.setListenTrack(),null===(r=(n=e.props).onPlay)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onAbort",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onAbort)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onEnded",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onEnded)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onPause",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onPause)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onSeeked",(function(t){var r,n;null===(r=(n=e.props).onSeeked)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onLoadedMetadata",(function(t){var r,n;null===(r=(n=e.props).onLoadedMetadata)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onVolumeChanged",(function(t){var r,n;null===(r=(n=e.props).onVolumeChanged)||void 0===r||r.call(n,t)})),e}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this.audioEl.current;e&&(this.updateVolume(this.props.volume),e.addEventListener("error",this.onError),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("canplaythrough",this.onCanPlayThrough),e.addEventListener("play",this.onPlay),e.addEventListener("abort",this.onAbort),e.addEventListener("ended",this.onEnded),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeeked),e.addEventListener("loadedmetadata",this.onLoadedMetadata),e.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var e=this.audioEl.current;e&&(e.removeEventListener("error",this.onError),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("canplaythrough",this.onCanPlayThrough),e.removeEventListener("play",this.onPlay),e.removeEventListener("abort",this.onAbort),e.removeEventListener("ended",this.onEnded),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("loadedmetadata",this.onLoadedMetadata),e.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(e){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=window.setInterval((function(){var t,r;e.audioEl.current&&(null===(t=(r=e.props).onListen)||void 0===t||t.call(r,e.audioEl.current.currentTime))}),t)}}},{key:"updateVolume",value:function(e){var t=this.audioEl.current;null!==t&&"number"==typeof e&&e!==(null==t?void 0:t.volume)&&(t.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var e=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),t=!(!1===this.props.controls),r=this.props.title?this.props.title:this.props.src,n={};return this.props.controlsList&&(n.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:t,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:r},n),e)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__nested_webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__nested_webpack_require_1058__(3)(module))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}])}}]);
//# sourceMappingURL=component---src-pages-album-js-ec268d701e45408acb76.js.map
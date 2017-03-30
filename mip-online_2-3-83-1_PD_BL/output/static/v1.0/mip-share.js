define("extensions/mip-share/0.2/share/aio",["require"],function(){!function(e,n){function t(e,n){return l.cleanObj.toString.call(e).slice(8,-1)===n}function o(e){var n=p[e];if(n)return n.exports;throw"module "+e+" is undefined"}function i(e,n){for(var t,i,r=e.split(":"),s=r.pop().split("/"),a=l;t=s.shift();)"bdbox"!==t&&(i=t,s.length&&(a=a[t]=a[t]||{}));var c=p[e]={exports:{}},u=l.isFunction(n)?n.apply(c,[o,c.exports,c,l]):n;u&&(c.exports=u),a[i]=c.exports}function r(){f.forEach(function(e){e()}),f.length=0,h=!0}function s(e){var n;return null==e?n=String(e):(n=Object.prototype.toString.call(e).toLowerCase(),n=n.substring(8,n.length-1)),n}function a(n){var t=n.success||g,o={imageUrl:"",mediaType:"all",title:"",content:"",linkUrl:location.href},i=n.error||g;return l.isFunction(n.success)&&(t="_xSHARE_SUCCESS_"+l.getId(),e[t]=n.success,o.success=t),l.isFunction(n.error)&&(i="_xSHARE_FAIL_"+l.getId(),e[i]=n.error,o.error=i),l.each(n,function(e,t){"success"!==t&&"error"!==t&&(t in v?t=v[t]:"content"!==t||n.title||(o.title=e),o[t]=e)}),l.isArray(o.mediaType)&&(o.mediaType="all"),e.BoxShareData||(e.BoxShareData={successcallback:t,errorcallback:i,options:o}),o}var c=+new Date,u=(c+"").slice(-3),d=navigator.userAgent,l={isBox:/ baiduboxapp\//i.test(d),isIOS:/(iPhone|iPod|iPad)/.test(d),isAndroid:/(Android);?[\s\/]+([\d.]+)?/.test(d),getId:function(){return u++},emptyArr:[],emptyFn:function(){},cleanObj:{},byId:function(e){return l.isString(e)?n.getElementById(e):e},toArray:function(e){return l.emptyArr.slice.call(e)},$:function(e,t){return t=t&&1===t.nodeType?t:n,l.toArray(t.querySelectorAll(e))}};"Function,String,Array,Number,RegExp".replace(/[^, ]+/g,function(e){l["is"+e]=function(n){return t(n,e)}}),l.isBoolean=function(e){return e===!0||e===!1},l.isObject=function(e){return"object"==typeof e},l.isUndefined=function(e){return void 0===e},l.isWindow=function(e){return null!=e&&e==e.window},l.isPlainObject=function(e){return l.isObject(e)&&!l.isWindow(e)&&Object.getPrototypeOf(e)==Object.prototype};var p={};l.define=i;var m=function(e,n,t){for(var o,i,r=e.split("."),s=t||m;o=r.shift();)"Box"!==o&&(i=o,r.length&&(s=s[o]=s[o]||{}));return s[i]=n||{},s[i]},f=[],h=!1;if(m.init=function(e){return"function"!=typeof e?this:(h?e():f.push(e),this)},"complete,loaded,interactive".indexOf(n.readyState)>-1&&n.body?r():n.addEventListener("DOMContentLoaded",r,!1),i("common:bdbox/utils/getVersion",function(n,t,o){var i=function(){var n=0;if(e.baiduboxapp_version)n=e.baiduboxapp_version;else{var t,o=navigator.userAgent;(t=/([\d+.]+)_(?:diordna|enohpi)_/.exec(o))?(t=t[1].split("."),n=t.reverse().join(".")):(t=/baiduboxapp\/([\d+.]+)/.exec(o))&&(n=t[1])}return i=function(){return n},n};o.exports=i}),i("common:bdbox/utils/version_compare",function(e,n,t){var o=function(e,n){n+="",e+="";for(var t=e.split("."),o=n.split("."),i=0,r=Math.max(t.length,o.length);r>i;i++){if(t[i]&&!o[i]&&parseInt(t[i])>0||parseInt(t[i])>parseInt(o[i]))return 1;if(o[i]&&!t[i]&&parseInt(o[i])>0||parseInt(t[i])<parseInt(o[i]))return-1}return 0};t.exports=o}),i("common:bdbox/ios/invokeApp",function(t,o,i,r){i.exports=function(t,o,i){if(t&&r.isBox){var s=[];if(r.isFunction(o))i=o;else for(var a in o)s.push(a+"="+o[a]);if(r.isFunction(i)){var c="_bdbox_js_"+r.getId();e[c]=function(){i.apply(e,[].slice.call(arguments,0))},s.push("func="+c)}else i&&s.push("func="+i);s="baiduboxapp://"+t+"?"+s.join("&");var u="_bdbox_ios_jsbridge",d=n.getElementById(u);d?d.src=s:(d=n.createElement("iframe"),d.style.display="none",d.id=u,d.src=s,(n.body||n.getElementsByTagName("body")[0]).appendChild(d))}}}),i("common:bdbox/android/invokeApp",function(n,t,o,i){function r(n,t,o){if(o&&!i.isArray(o)&&(o=Array.prototype.slice.call(arguments,0).slice(2)),e[n]&&e[n][t]){var r=e[n][t].apply(e[n],o);return{error:0,result:r,__from:"js"}}var u=c();if(a(u,4.8)>=0){var d=s(n,t,o);return d=d?JSON.parse(d):{},d.__from="app",d}if("4.7.1"===u||"4.7"==u){var l=s(n,t,o);return{error:0,result:l,__from:"app4.7"}}return{error:200}}function s(n,t,o){if(!i.isBox)return{error:201};if(!i.isAndroid)return{error:202};var r={obj:n,func:t,args:o?o:[]};try{return e.prompt("BdboxApp:"+JSON.stringify(r))}catch(s){return{error:201}}}var a=n("common:bdbox/utils/version_compare"),c=n("common:bdbox/utils/getVersion");o.exports=r}),i("common:bdbox/utils/detect",function(n,t,o,i){function r(n){var t={name:"unknown",version:0};this===e||this.os||(this.os=t),n=n||navigator.userAgent;var o={Weibo:/weibo/i,Wechat:/micromessenger\//i,QQ:/QQ\//};for(var i in o)o.hasOwnProperty(i)&&(t["is"+i]=o[i].test(n));t.isUC=n.match(/UC/)||e.ucweb||e.ucbrowser;var r=n.match(/(Android);?\s+([\d.]+)?/);if(r)return t.android=!0,t.version=r[2],t.name="android",t;var s=n.match(/(iPad).*OS\s([\d_]+)/),a=n.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&n.match(/(iPhone\sOS)\s([\d_]+)/);return c&&!a?(t.ios=t.iphone=!0,t.version=c[2].replace(/_/g,"."),t.name="ios",t):s?(t.ios=t.ipad=!0,t.name="ios",t.version=s[2].replace(/_/g,"."),t):a?(t.name="ios",t.ios=t.ipod=!0,t.version=a[3]?a[3].replace(/_/g,"."):null,t):t}r.apply(i),o.exports=r}),i("common:bdbox/each",function(e,n,t){function o(e){var n;return null==e?n=String(e):(n=Object.prototype.toString.call(e).toLowerCase(),n=n.substring(8,n.length-1)),n}t.exports=function(e,n,t){if("object"==typeof e){var i,r,s=o(e);if(t=t||e,"array"===s||"arguments"===s||"nodelist"===s){for(i=0,r=e.length;r>i;i++)if(n.call(t,e[i],i,e)===!1)return}else for(i in e)if(e.hasOwnProperty(i)&&n.call(t,e[i],i,e)===!1)return}}}),i("common:bdbox/client/nativeShare",function(t,o,i,r){function s(n){var t={wechatIcon:location.protocol+"//m.baidu.com/static/search/logo300.png",type:"url",mediaType:"all",linkUrl:location.href,title:c.title,success:"console.log",error:"console.log"};each(n||{},function(e,n){t[n]=e}),t.image&&(t.imageUrl=t.image),t.iconUrl&&!t.imageUrl&&"url"===t.type&&(t.imageUrl=t.iconUrl);var o={};["success","error"].forEach(function(n){var i=n;r.isFunction(t[n])&&(i="_xSHARE_SUCCESS_"+r.getId(),e[i]=t[n]),o[n+"callback"]=i,delete t[n]}),o.options=t,o.options.imageUrl&&r.isAndroid&&a(r.version,"6.5")<0&&delete o.options.imageUrl,e.BoxShareData=o;var i=t.wechatIcon;if(/micromessenger\//i.test(navigator.userAgent)&&i&&i.length>20){var s=c.createElement("div");s.id="wa-generalevent-wx-logo",s.style.display="none",s.innerHTML='<img src="'+i+'"/>';var u=c.body.firstChild;u?c.body.insertBefore(s,u):c.body.appendChild(s)}}var a=t("common:bdbox/utils/version_compare"),c=n;i.exports=s}),i("common:bdbox/utils/ready",function(e,t,o){function i(){s.forEach(function(e){e()}),s.length=0,a=!0}function r(e){"function"==typeof e&&(a?e():s.push(e))}var s=[],a=!1;"complete,loaded,interactive".indexOf(n.readyState)>-1&&n.body?i():n.addEventListener("DOMContentLoaded",i,!1),o.exports=r}),l.version=l.utils.getVersion(),l.version_compare=l.utils.version_compare,each=l.each,l.nativeShare=l.client.nativeShare,l.type=s,l.canI=function(e,n,t){return l.version_compare(l.version,e)>=0?l.isFunction(n)&&n():l.isFunction(t)&&t(),l},i("common:bdbox/client/o2o",function(e,n,t,o){var i=e("common:bdbox/android/invokeApp"),r=e("common:bdbox/ios/invokeApp"),s=encodeURIComponent,a=e("common:bdbox/each"),c=o.isAndroid?function(e,n){o.isObject(e)&&(n=e,e=e.url,delete n.url);var t=["S.bdsb_light_start_url="+s(e)];if(o.isObject(n)){var r={color:"i.extra_actionbar_color_id",appid:"S.bdsb_wallet_appid"};a(n,function(e,n){"color"===n&&(e=4278190080|parseInt("0x"+e)),n=r[n]||n,t.push(n+"="+e)})}t=t.join(";"),i("Bdbox_android_utils","command",[JSON.stringify({intent:"intent:#Intent;"+t+";end","class":"com.baidu.searchbox.wallet.WalletServiceActivity",min_v:"16783629",mode:"0"})])}:function(e,n){o.isObject(e)&&(n=e,e=e.url,delete n.url);var t={openurl:s(e),minver:"5.3.0.0",isla:0,opentype:1,append:0,rbtnstyle:2};if(o.isObject(n)){var i={color:"barcolor"};a(n,function(e,n){n=i[n]||n,t[n]=e})}t.appid&&(t.isla=1),r("easybrowse",t)};t.exports=c}),l.o2o=l.client.o2o,"android"===l.os.name?m("card",{query:function(e,n){if(m.version_compare(m.version,"5.0")<0)return this;var t,o;m.isArray(e)?t=[JSON.stringify(e)]:(o=m.toArray(arguments),n=o.pop(),m.isFunction(n)?t=o:(t=m.toArray(arguments),n=null),t=[JSON.stringify(t)]);var i=m.android.invokeApp("Bdbox_android_card","mquery",t);return i=0===i.error&&i.result?JSON.parse(i.result):!1,m.isFunction(n)&&n(i),i},add:function(n,t){if(m.version_compare(m.version,"5.0")<0)return this;var o,i;m.isString(n)?o=[n]:m.isArray(n)?o=[JSON.stringify(n)]:(i=m.toArray(arguments),t=i.pop(),m.isFunction(t)?o=i:(o=m.toArray(arguments),t=null),o=[JSON.stringify(o)]);var r=null;if(m.version_compare(m.version,"5.5")>=0){var s="";m.isFunction(t)&&(s="__box_card_"+m.getId(),e[s]=function(e){var n=JSON.parse(e),o=!1;for(var i in n){o=n[i].st;break}t(o)}),r=m.android.invokeApp("Bdbox_android_card","madd",o.concat([s,0]))}else r=m.android.invokeApp("Bdbox_android_card","madd",o);return r}}):m("card",{query:function(e,n){if(m.version_compare(m.version,"5.0")<0)return this;var t,o;m.isArray(e)?t=[JSON.stringify(e)]:(o=m.toArray(arguments),n=o.pop(),m.isFunction(n)?t=o:(t=m.toArray(arguments),n=null),t=[JSON.stringify(t)]);var i=function(e){m.isFunction(n)&&n(JSON.parse(e)),i=null};m.ios.invokeApp("cardMquery",{params:encodeURIComponent(t)},i)},add:function(e,n){if(m.version_compare(m.version,"5.0")<0)return this;var t,o;m.isString(e)?t=[e]:m.isArray(e)?t=[JSON.stringify(e)]:(o=m.toArray(arguments),n=o.pop(),m.isFunction(n)?t=o:(t=m.toArray(arguments),n=null),t=[JSON.stringify(t)]);var i=function(e){var t=JSON.parse(e),o=!1;for(var r in t){o=t[r].st;break}m.isFunction(n)&&n(o),i=null};return m.ios.invokeApp("cardMadd",{params:encodeURIComponent(t),gohome:"0"},i),!0}}),i("common:bdbox/utils/jsonToQuery",function(e,n,t,o){t.exports=function(e){if(o.isString(e))return e;var n=[];for(var t in e)n.push(t+"="+e[t]);return n.join("&")}}),i("common:bdbox/io/loadJS",function(t,o,i,r){function s(t,o,i){var s,u,d,l=n.createElement("script");r.isString(t)?(s=t,r.isFunction(o)&&(i=o,o=null)):(s=t.url,o=t.data,i=t.success,u=t.error||r.emptyFn,d=t.timeout),r.isObject(o)&&(o=c(o)),o&&(s+=(-1===s.indexOf("?")?"?":"&")+o),s=s.replace(/[&?]{1,2}/,"?");var p;/=\?/.test(s)&&(p="_box_jsonp"+r.getId(),s=s.replace(/=\?/,"="+p));var m=a();d=d||2e4,l.type="text/javascript",l.src=s;var f,h=!0,b=function(){p&&delete e[p],f&&clearTimeout(f),l.onload=l.onreadystatechange=l.onerror=null,l=null},v=function(){!l||l.readyState&&!/loaded|complete/.test(l.readyState)||(b(),h&&r.isFunction(i)&&i.apply(null,r.toArray(arguments)),h=!1)},g=function(e){b(),h&&u(e),h=!1};p&&(e[p]=v),f=setTimeout(function(){b(),h&&u("timeout"),h=!1},d),l.onload=l.onreadystatechange=l.onerror=v,l.onerror=g,m.appendChild(l)}function a(){return n.head||n.getElementsByTagName("head")[0]||n.documentElement}var c=t("common:bdbox/utils/jsonToQuery");r.emptyFn,i.exports=s}),i("common:bdbox/utils/queryToJson",function(e,n,t){t.exports=function(e){try{e=e?decodeURIComponent(e):""}catch(n){e=""}var t=e.split("?"),o=t[1]?t[1]:t[0],i=o.split("&"),r={};return i.forEach(function(e){e=e.split("="),e[0].length>0&&(r[e[0]]=e[1]||"")}),r}}),i("common:bdbox/extend",function(e,n,t,o){function i(e,n,t){for(var o in n)t&&(r(n[o])||s(n[o]))?(r(n[o])&&!r(e[o])&&(e[o]={}),s(n[o])&&!s(e[o])&&(e[o]=[]),i(e[o],n[o],t)):c(n[o])||(e[o]=n[o])}var r=o.isPlainObject,s=o.isArray,a=o.isBoolean,c=o.isUndefined;t.exports=function(e){var n,t=o.emptyArr.slice.call(arguments,1);return a(e)&&(n=e,e=t.shift()),t.forEach(function(t){i(e,t,n)}),e}}),i("common:bdbox/utils/ready",function(e,t,o){function i(){s.forEach(function(e){e()}),s.length=0,a=!0}function r(e){"function"==typeof e&&(a?e():s.push(e))}var s=[],a=!1;"complete,loaded,interactive".indexOf(n.readyState)>-1&&n.body?i():n.addEventListener("DOMContentLoaded",i,!1),o.exports=r}),i("common:bdbox/utils/detect",function(n,t,o,i){function r(n){var t={name:"unknown",version:0};this===e||this.os||(this.os=t),n=n||navigator.userAgent;var o={Weibo:/weibo/i,Wechat:/micromessenger\//i,QQ:/QQ\//};for(var i in o)o.hasOwnProperty(i)&&(t["is"+i]=o[i].test(n));t.isUC=n.match(/UC/)||e.ucweb||e.ucbrowser;var r=n.match(/(Android);?\s+([\d.]+)?/);if(r)return t.android=!0,t.version=r[2],t.name="android",t;var s=n.match(/(iPad).*OS\s([\d_]+)/),a=n.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&n.match(/(iPhone\sOS)\s([\d_]+)/);return c&&!a?(t.ios=t.iphone=!0,t.version=c[2].replace(/_/g,"."),t.name="ios",t):s?(t.ios=t.ipad=!0,t.name="ios",t.version=s[2].replace(/_/g,"."),t):a?(t.name="ios",t.ios=t.ipod=!0,t.version=a[3]?a[3].replace(/_/g,"."):null,t):t}r.apply(i),o.exports=r}),i("common:bdbox/schema",function(e,t,o,i){function r(e,t){if(e){if(t=t||i.emptyFn,!i.isBox&&i.isIOS&&c(a.version,"9.0")>=0)return void u(function(){s(e,t)});var o=Date.now(),r=n.createElement("IFRAME");r.src=e,r.style.position="absolute",r.style.left="-2000px",r.style.top="-1000px",r.style.width="1px",r.style.height="1px",r.style.webkitTransition="all 0.9s",r.style.transition="all 0.9s",n.body.appendChild(r);var d=function(){n.body.removeChild(r),t(Date.now()-o<1500?!0:!1)};r.addEventListener("webkitTransitionEnd",d,!1),r.addEventListener("transitionEnd",d,!1),setTimeout(function(){r.style.left="-1000px"},20)}}function s(e,n){location.href=e,d&&clearTimeout(d),d=setTimeout(function(){n(!0)},1200)}var a=e("common:bdbox/utils/detect")(),c=e("common:bdbox/utils/version_compare"),u=e("common:bdbox/utils/ready"),d=null;o.exports=r}),i("common:bdbox/monitor",function(n,t,o,i){var r=encodeURIComponent,s=function(e,n){e+=e.indexOf("?")<0?"?":"&",this.url=e,this.options=n};s.prototype.report=function(n){n=n||"";var t=new Image(1,1),o=[];if(i.isObject(n)){for(var s in n)o.push(s+"="+r(String(n[s])));n=o.join("&")}var a="_box_mt"+i.getId();e[a]=t,t.onload=t.onerror=t.onabort=function(){t.onload=t.onerror=t.onabort=null,e[a]=t=null};var c=this.url+n;return i.isFunction(this.options.customHandler)&&(c=this.options.customHandler(c)),t.src=c+"&_rnd="+Math.floor(2147483648*Math.random()),this},s.prototype.main=function(e,n){return e&&i.isFunction(this[e])&&this[e].apply(this,i.toArray(n||[])),this},o.exports=function(e,n){return new s(e,n)}}),i("common:bdbox/clone",function(e,n,t){var o=Object.prototype.toString,i=function(e,n,t){var o=0;for(var i in e)if(e.hasOwnProperty(i))if(t)n[i]=e[i];else if(n(i,e[i],o++))break},r=function(e){var n;switch(o.call(e)){case"[object Object]":n={},i(e,function(e,t){n[e]=r(t)});break;case"[object Array]":n=[],e.forEach(function(e){n.push(r(e))});break;default:n=e}return n};t.exports=r}),i("common:bdbox/monitor/pblog",function(e,n,t,o){var i=e("common:bdbox/monitor"),r=e("common:bdbox/extend"),s=e("common:bdbox/utils/queryToJson"),a=e("common:bdbox/utils/getVersion"),c=e("common:bdbox/clone"),u=s(location.search),d=navigator.userAgent,l="//m.baidu.com/tcbox",p={service:"bdbox",action:"pblog",ctv:2,cen:"uid_ua_ut",data:{appid:"1",dataid:"2",actiontype:"1",actionid:"2",actiondata:{ref:u.ref||"",gmv:u.vmgdb||"",source:u.from||u.ref||"",boxVersion:a(),boxPlatform:d.match(/(iPad|iPhone|iPod)/gim)?"ios":"android"}}},m=encodeURIComponent;u.uid&&u.osname&&["osname","ua","ut","from","cfrom","uid","pkgname"].forEach(function(e){u[e]&&(p[e]=u[e])});var f,h=i(l,{customHandler:function(e){var n=[];if(f)for(var t in f)if(f.hasOwnProperty(t)){var i=f[t];o.isPlainObject(i)&&(i=JSON.stringify(i)),n.push(t+"="+m(i))}return n.length&&(e+=n.join("&")),e}});h.init=function(e,n){o.isPlainObject(n)&&(p=r(p,n)),p.data.cateid=e},h.pv=function(e,n){f=c(p);var t=f.data;t.actionid="1";var o={};return o.url=e||location.href,n&&(o.u=n),t.actiondata=r(t.actiondata,o),h.report()},h.event=function(e,n,t){if(!e)throw"monitor.tc.event need a evtName";if(o.isPlainObject(n)&&!t){var i={evtName:e};for(var s in n)i[s]=n[s]}else var i={evtName:e,evtType:n||"",evtTag:t||""};f=c(p);var a=f.data;return a.actionid="2",a.actiondata=r(a.actiondata,i),h.report()},t.exports=function(){h.main.apply(h,arguments)}}),i("common:bdbox/moplus",function(e,n,t,o){var i=e("common:bdbox/utils/jsonToQuery"),r=e("common:bdbox/io/loadJS"),s=e("common:bdbox/utils/version_compare"),a=e("common:bdbox/monitor/pblog"),c=e("common:bdbox/schema"),u="com.baidu.searchbox",d="http://127.0.0.1:6259/",l="http://127.0.0.1:40310/",p="inapp_boxserver",m="https:"===location.protocol,f=500,h=null,b="__moplus_host__",v={isSendPv:!1,isHit:!1,parseUA:function(){var e,n,t=navigator.userAgent,o={uc:/UCBrowser\/(\S*) \S*/g,bd:/baidubrowser\/(\S*) \(Baidu/g,qq:/MQQBrowser\/(\S*) Mobile/g,chr:/Chrome\/(\S*) Mobile/g,qh:/360 Aphone Browser \((\S*)\)/g,sg:/SogouMobileBrowser\/(\S*)/g,mi:/MiuiBrowser\/(\S*)/g};for(var i in o){var r=o[i].exec(t);if(r){e=i,n=r[1];break}}return e=e?e:"other",n=n?n:"0",{t:e,v:n}},parseHost:function(){return g.curHost===l?1:0},sendEvt:function(e,n,t,o){this.isHit&&this.send(e,n,t,o)},send:function(e,n,t,o){var i=this.parseUA(),r=i.t,s=i.v,c=m?0:1,u=this.parseHost();a("event",[e,{evtType:n||"",brName:r,brVer:s,isHttp:c,isNew:u,source:t||"",intent:o||""}])},init:function(){this.isHit=Date.now()%100===1,a("init",[2])}},g=function(e,n,t){this.version="2.0",this.isHttps=m,this.curHost=t||"",this.newHost=l,this.oldHost=this.isHttps?l:d,this.MCMDF=n||p,this._infoFuncs=[],this._verFuncs=[],this.minVersion=e?e:0,this.pkgName=u,v.init()},x=function(e,n){try{sessionStorage.setItem(e,n)}catch(t){}},w=function(e){var n;try{n=sessionStorage.getItem(e)}catch(t){}return n};g.prototype={constructor:g,setMcmdf:function(e){return this.MCMDF=e,this},setHost:function(e){return this.curHost=e,x(b,e),this},getHost:function(){if(this.isHttps)return this.curHost=this.newHost,this.newHost;var e=w(b);return e?(this.curHost=e,this.curHost):void 0},api:function(e,n,t,r){if(!e)throw"Moplus.api need an action";o.isFunction(n)&&(r=t,t=n,n={});var s=e+(~e.indexOf("?")?"&":"?")+i(n);return~s.indexOf("mcmdf")||(s+="&mcmdf="+this.MCMDF),v.sendEvt("api","send:"+e,this.MCMDF,s),this.request(s,function(n){v.sendEvt("api",(o.isPlainObject(n)&&0==n.error?"success:":"fail:")+e,this.MCMDF,s),t(n)},r)},getInfo:function(e,n){if(h)return e(h);if(this._infoFuncs.push(e),!(this._infoFuncs.length>1)){var t=this,i=function(e,n){!n&&o.isPlainObject(e)&&(h=e);var i;for(n&&(e={error:33});i=t._infoFuncs.shift();)i(e)},s="getsearchboxinfo?mcmdf="+this.MCMDF;if(this.getHost()){var a={url:this.curHost+s+"&callback=?",success:i,error:function(){i(null,!0)},timeout:n};r(a)}else this.request(s,function(e){return 33===e.error?i(null,!0):void i(e)},n);return this}},getHVersion:function(e,n){this._verFuncs.push(e);var t=this;if(!(this._verFuncs.length>1)){var o=function(e){var n;for(e=t.parseInfo(e);n=t._verFuncs.shift();)n(e)};return this.getInfo(o,n),this}},parseInfo:function(e,n){e=e||h,n=n||this.minVersion;var t=e.package_infos;if(!t||0===t.length)return!1;var o=u,i={offic:{name:u,version:0},oem:{version:0}};return t.forEach(function(e){var t=e.version_name,r=e.package_name;s(t,n)>=0&&(r===o?1===s(t,i.offic.version)&&(i.offic={version:t,name:u}):1===s(t,i.oem.version)&&(i.oem={version:t,name:r}))}),0===i.oem.version&&0===i.offic.version?!1:0!==i.offic.version?i.offic:0!==i.oem.version?i.oem:void 0},schema:function(e,n){if(!e.intent)throw"schema intent is empty";e.mcmdf||(e.mcmdf=this.MCMDF);var t=function(){v.send("schema","success",e.source,e.intent),o.isFunction(n)&&n({error:0,from:"schema"})},i=function(){v.send("schema","fail",e.source,e.intent),o.isFunction(n)&&n({error:20,from:"schema"})},r=e.schema||"";if(e.intent&&!e.schema){var s=e.intent;-1==s.indexOf(u)&&(v.sendEvt("defaultPKGName","fail",e.source||"",e.intent),e.minver=e.minver?e.minver:"6.9.1")}r||(r="baiduboxapp://utils?action=sendIntent&params="+encodeURIComponent(JSON.stringify(e))+"&minver="+(e.minver?e.minver:"6.9")),c(r,function(e){e?i():t()})},sendIntent:function(e,n,t){var i={};if(e&&o.isString(e)){var r,s=this,a=!0;return o.isPlainObject(t)?(i=t,r=t.source||"",t.needlog?v.isHit=t.needlog:i.needlog=v.isHit?1:0,t=t.timeout):o.isBoolean(t)&&(a=t),i.intent=e,v.send("sendintent","send",r,e),this.api("sendintent",{intent:encodeURIComponent(e)},function(t){!t||t&&33===t.error||!o.isPlainObject(t)?(v.send("sendintent","fail",r,e),a?s.schema(i,n):(t=t||{},t.from="moplus",n(t))):(v.send("sendintent","success",r,e),n(t))},t)}return this},request:function(e,n,t){var i,s,a=this,c={timeout:t};o.isFunction(n)&&!~e.indexOf("callback=")&&(e+="&callback=?");var u=function(e){i="success",o.isFunction(n)&&n(e)},d=function(){o.isFunction(n)&&n({error:33})};if(a.getHost())c.url=a.curHost+e,c.success=u,c.error=d,r(c);else if(c.url=a.newHost+e,c.success=function(e){"success"!==i&&(s&&clearTimeout(s),a.setHost(a.newHost),u(e))},c.error=function(){a.isHttps?(i="error",d()):"error"===i&&d(),i="error"},r(c),!a.isHttps){var l={timeout:t,url:a.oldHost+e,error:c.error};l.success=function(e){"success"!==i&&("error"===i?(a.setHost(a.oldHost),u(e)):s=setTimeout(function(){a.setHost(a.oldHost),u(e)},f))},r(l)}return this}},t.exports=function(e,n){return new g(e,n)},t.exports.Moplus=g}),l.version_compare(l.version,"5.3.5")>=0){var b,v={image:"imageUrl",url:"linkUrl",order:"mediaType"},g="";e[g]=l.emptyFn,l.isAndroid?(b=function(e){if(e.id&&l.byId(e.id)){var n=e.eventType||"touchstart";l.byId(e.id).addEventListener(n,function(){t(e)},!0)}var t=function(n){n=a(n||e);var t=n.error,o=n.success;n.iconUrl&&n.imageUrl&&delete n.imageUrl,l.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(n),o||"console.log",t||"console.log"])};return t},m("share",b)):(b=function(e){if(e.id&&l.byId(e.id)){var n=e.eventType||"touchstart";l.byId(e.id).addEventListener(n,function(){t(e)},!0)}var t=function(n){n=a(n||e);var t=n.error,o=n.success;n.iconUrl&&!n.imageUrl&&(n.imageUrl=n.iconUrl),n=JSON.stringify(n),l.ios.invokeApp("callShare",{options:encodeURIComponent(n),errorcallback:t||"console.log",successcallback:o||"console.log"})};return t},m("share",b))}else{var x=[],w=function(){m._socShare&&m._socShare.init?x.forEach(function(e){m._socShare.init(e)}):setTimeout(w,3e3)};l.io.loadJS("//m.baidu.com/static/searchbox/openjs/share.js?v=1.2",w);var y={source:"client_id",id:"dom_id",image:"pic_url",success:"afterRender"},b=function(e){var n={content:"",client_id:"ZVEpDSsmZ0qxa1gmgDAh1Fje",theme:"native",dom_id:"share",animate:!0,pic_url:"",url:encodeURIComponent(location.href)};return l.isObject(e)&&l.each(e,function(e,t){if(t in y&&(t=y[t]),"order"===t&&l.isArray(e)){var o=[];e.forEach(function(e){"email"===e&&(e="mail"),o.push(e)})}n[t]=e}),delete n.success,delete n.error,delete n.afterRender,"all"===n.order?n.order=["qqdenglu","sinaweibo","renren","kaixin","mail","sms"]:l.isString(n.order)&&(n.order=n.order.split(",")),m._socShare&&m._socShare.init?m._socShare.init(n):x.push(n),function(){m._socShare.ui._shareBtnClickHandler()}};m("share",b)}if(i("common:bdbox/distribute",function(e,n,t,o){var i=e("common:bdbox/schema");e("common:bdbox/utils/detect");var r=e("common:bdbox/each"),s=e("common:bdbox/moplus"),a=o.emptyFn,c={qqDownloadUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox",androidDownloadUrl:"",iosDownloadUrl:"",iosFailCallback:a,androidFailCallback:a,iosSchema:"",androidSchema:"",androidIntent:"",inBoxCallback:a},u=function(e){var n=this;e&&r(c,function(n,t){e[t]=e[t]||n});var t=this.url=e.url;t&&""!==t?(this.androidIntent="intent://"+t.replace(/^http[s]?:\/\//,"")+"#Intent;scheme=http;action=com.baidu.searchbox.action.VIEW;category=android.intent.category.DEFAULT;end",this.iosSchema="baiduboxapp://easybrowse?openurl="+encodeURIComponent(t)+"&opentype=0&isla=0&append=0&minver=5.3.0.0"):["androidIntent","iosSchema","androidSchema"].forEach(function(t){n[t]=e[t]}),this.options=e,this.fail=function(){if(console.log(o.os.name+" fail"),o.isFunction(e[o.os.name+"FailCallback"])){var n=e[o.os.name+"FailCallback"]();if(o.isBoolean(n)&&!n)return}var t=e[o.os.name+"DownloadUrl"];t&&""!==t&&(location.href=e[o.os.name+"DownloadUrl"])},this.success=function(){return console.log(o.os.name+" success"),o.isFunction(e[o.os.name+"SuccessCallback"])?e[o.os.name+"SuccessCallback"]():void 0}};u.prototype.wechat=function(){var e=this.options;if(o.isFunction(e.wechatCallback)){var n=e.wechatCallback();if(o.isBoolean(n)&&!n)return}e.qqDownloadUrl&&""!==e.qqDownloadUrl&&(location.href=e.qqDownloadUrl)},u.prototype.run=function(){var e=this,n=(e.url,e.options);return o.os.isWechat?e.wechat():o.isBox&&o.isFunction(n.inBoxCallback)?n.inBoxCallback():void this.invoke()},u.prototype.invoke=function(){var e=this;if(o.os.android){var n=s();n.getHVersion(function(t){t?n.sendIntent(e.androidIntent,function(n){0==n.error?e.success():e.fail()},1e3):e.androidSchema?i(e.androidSchema,function(n){n?e.fail():e.success()}):e.fail()})}else i(e.iosSchema,function(n){n?e.fail():e.success()})},t.exports=function(e){return new u(e)}}),each(l,function(e,n){m[n]=e}),e.Box&&e.Box.$)for(var _ in m)e.Box[_]=e.Box[_]||m[_];else e.Box=m}(window,document)}),define("extensions/mip-share/0.2/share/detect",["require","zepto"],function(e){function n(){if(i){var e,n="";return o&&o.os?o.os.ios?e="ios":o.os.android&&(e="android"):e=i.indexOf("iphone")>-1||i.indexOf("ipod")>-1?"ios":"android",{n:e,v:n}}}function t(){if(i){var e,n="";return-1!=i.indexOf("baiduboxapp/")?e="zbios":-1!=i.indexOf("baidubrowser/")?(e="bmbadr",n=i.match(/baidubrowser\/([\d\.]*)/),n=n&&n[1]?n[1]:""):-1!=i.indexOf("mqqbrowser/")?(e="qq",n=i.match(/mqqbrowser\/([\d\.]*)/),n=n&&n[1]?n[1]:""):-1!=i.indexOf("micromessenger/")?(e="wechat",n=i.match(/micromessenger\/([\d\.]*)/),n=n&&n[1]?n[1]:""):-1!=i.indexOf("ucbrowser/")?(e="uc",n=i.match(/ucbrowser\/([\d\.]*)/),n=n&&n[1]?n[1]:""):-1!=i.indexOf("sogoumobilebrowser/")?(e="sogou",n=i.match(/sogoumobilebrowser\/([\d\.]*)/),n=n&&n[1]?n[1]:""):-1!=i.indexOf("crios/")?(e="chrome",n=i.match(/crios\/([\d\.]*)/),n=n&&n[1]?n[1]:""):e="other",{n:e,v:n}}}var o=e("zepto"),i=navigator.userAgent.toLowerCase();return{os:n(),browser:t()}}),define("extensions/mip-share/0.2/share/share",["require","zepto","extensions/mip-share/0.2/share/detect"],function(e){var n=e("zepto"),t=n('<style data-for="pmd/share/share"></style>');t.text("/* 分享列表容器 */\n.c-share-list {\n    overflow: hidden;\n}\n.c-share-list .c-line-clamp1{\n    line-height: 30px;\n}\n\n.c-share-list .c-share-btn {\n    color: #333;\n    text-align: center;\n    font-size: 12px;\n}\n\n.c-share-list .c-share-btn .c-img {\n    background: #fff;\n    border: 1px solid #f0f0f0;\n    border-radius: 50%;\n}\n\n\n/* 分享取消按钮,只在popup打开时展现 */\n.c-share-cancel-btn {\n    border-color: #f0f0f0;\n}\n\n\n/* 微信分享提示tips */\n.c-share-wechat-tips {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6) url(//m.baidu.com/se/static/pmd/pmd/share/images/wxtips.png) right 32px top 10px/50% no-repeat;\n}\n\n\n/* popup打开时自定义容器背景色,需要提高选择器优先级 */\n.c-popup-wrapper .c-share-popup-modal {\n    background-color: #f0f0f0;\n}\n\n.c-share-popup-modal .c-popup-head {\n    display: none;\n}\n\n.c-share-popup-modal .c-popup-content {\n    margin: 0 auto;\n    padding: 21px;\n}\n"),n("head").append(t);var o,i={url:window.location.href,title:"百度搜索有惊喜",content:"百度搜索有惊喜",iconUrl:"//m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg",custom:[]},r=e("extensions/mip-share/0.2/share/detect"),s=r.os,a=r.browser,c="zbios"==a.n?1:0,u="uc"!=a.n||"undefined"==typeof ucweb&&"undefined"==typeof ucbrowser?0:1,d="qq"==a.n&&a.v&&a.v>"5.4"?1:0,l="wechat"==a.n?1:0,p=new Promise(function(e){if(d){var t=document.createElement("script");t.type="text/javascript",t.onload=t.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||e()},t.src="//jsapi.qq.com/get?api=app.share",n("head").append(t)}}),m=function(n,t){t&&(n.url=encodeURIComponent(n.url),n.linkUrl=encodeURIComponent(n.url)),e(["extensions/mip-share/0.2/share/aio"],function(){Box.os.android?Box.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(n),window.successFnName||"console.log",window.errorFnName||"console.log"]):Box.ios.invokeApp("callShare",{options:encodeURIComponent(JSON.stringify(n)),errorcallback:"onFail",successcallback:"onSuccess"})})},f=function(e,n){var t={sinaweibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],wxfriend:["kWeixin","WechatFriends",1,"微信好友"],pyq:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],qqfriend:["kQQ","QQ","4","QQ好友"],qzone:["kQZone","QZone","3","QQ空间"]},o=n.url,i=n.title,r="";n.content,e=""==e?"":"ios"==s.n?t[e][0]:t[e][1],"undefined"!=typeof ucweb?ucweb.startRequest("shell.page_share",[i,i,o,e,"","@"+r,""]):"undefined"!=typeof ucbrowser&&ucbrowser.web_share(i,i,o,e,"","@"+r,"")},h=function(e,n){var t={sinaweibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],wxfriend:["kWeixin","WechatFriends",1,"微信好友"],pyq:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],qqfriend:["kQQ","QQ","4","QQ好友"],qzone:["kQZone","QZone","3","QQ空间"]};e=""==e?"":t[e][2];var o={url:n.url,title:n.title,description:n.content,img_url:"",img_title:"",to_app:e,cus_txt:"请输入此时此刻想要分享的内容"};o=""==e?"":o,p.then(function(){"undefined"!=typeof browser&&"undefined"!=typeof browser.app&&browser.app.share(o)})},b=function(){n(".c-share-wechat-tips").length?n(".c-share-wechat-tips").show():(n("body").append(n('<div class="c-share-wechat-tips"></div>')),n(".c-share-wechat-tips").on("click",function(){n(this).hide(),clearTimeout(o)})),o=setTimeout(function(){n(".c-share-wechat-tips").hide(),clearTimeout(o)},2e3)},v={key:"pyq",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/pyq.png",title:"朋友圈",cb:function(){var e;return c?e=function(e){e.mediaType="weixin_timeline",m(e,!1)}:u?e=function(e){f("pyq",e)}:d?e=function(e){h("pyq",e)}:l&&(e=function(){b()}),e}()},g={key:"wxfriend",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend.png",title:"微信好友",cb:function(){var e;return c?e=function(e){e.mediaType="weixin_friend",m(e,!1)}:u?e=function(e){f("wxfriend",e)}:d?e=function(e){h("wxfriend",e)}:l&&(e=function(){b()}),e}()},x={key:"qqfriend",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend.png",title:"QQ好友",cb:function(){var e;return c?e=function(e){e.mediaType="qqfriend",m(e,!1)}:u?e=function(e){f("qqfriend",e)}:d&&(e=function(e){h("qqfriend",e)}),e}()},w={key:"qzone",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/qzone.png",title:"QQ空间",cb:function(){var e;return e=c?function(e){e.mediaType="qqdenglu",m(e,!1)}:u&&"ios"==s.n?function(e){f("qzone",e)}:d?function(e){h("qzone",e)}:function(e){var n="url="+encodeURIComponent(e.url)+"&successurl="+encodeURIComponent(window.location.href)+"&summary="+e.content+"&title="+e.title+"&pics="+encodeURIComponent(e.iconUrl);window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+n)}}()},y={key:"sinaweibo",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo.png",title:"新浪微博",cb:function(){var e;return e=c?function(e){e.mediaType="sinaweibo",m(e,!1)}:u?function(e){f("sinaweibo",e)}:d?function(e){h("sinaweibo",e)}:function(e){window.open("http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(e.url)+"&title="+encodeURIComponent(e.title))}}()},_={key:"more",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/more.png",title:"更多",cb:function(){var e;return c?e=function(e){e.mediaType="all",m(e,!1)}:u?e=function(e){f("",e)}:d&&(e=function(e){h("",e)}),e}()},S=function(e){this.opt=n.extend({},i,e),this.opt.content||(this.opt.content=this.opt.title),/^\/\/.+/.test(this.opt.url)&&(this.opt.url="http:"+this.opt.url),this.opt.linkUrl=this.opt.url,this._init()};return S.prototype={version:"1.0.0",_init:function(){var e=this;e.isRender=!1,e._initShareList()},_initShareList:function(){var e=this,t=[];(c||u||d||l)&&t.push(v,g),(c||u||d)&&t.push(x),t.push(w,y),(c||u||d&&"ios"==s.n)&&t.push(_),t=t.concat(e.opt.custom),e.list=t;var o="";if("array"==n.type(t)&&t.length>0){o+='<div class="c-share-list">';for(var i=t.length,r=Math.ceil(i/4),a=0;r>a;a++){o+='<div class="c-row c-gap-bottom">';for(var p=0;4>p;p++){var m=4*a+p,f=t[m];f?(o+='<div class="c-span3 c-share-btn c-share-btn-'+f.key+'">',o+='<div class="c-img c-img-s">',o+='<img src="'+f.icon+'" />',o+="</div>",o+='<div class="c-line-clamp1">'+f.title+"</div>"):o+='<div class="c-span3 c-share-btn">',o+="</div>"
}o+="</div>"}o+="</div>"}e.$dom_shareList=n(o),e._bindEvent()},_bindEvent:function(){var e=this;e.$dom_shareList.find(".c-share-btn").each(function(t){e.list[t]&&n(this).on("click",function(){e.list[t].cb(e.opt),e._sendLog(e.list[t].key)})})},_sendLog:function(e){var t=this,o={pyq:{ct:40,cst:2},wxfriend:{ct:40,cst:1},qqfriend:{ct:40,cst:5},qzone:{ct:40,cst:3},sinaweibo:{ct:40,cst:4},more:{ct:40,cst:9},close:{ct:40,cst:0}};if(e&&o[e]&&"object"==typeof B&&B.log&&B.log.send){var i=o[e];t.opt&&"object"==typeof t.opt.loginfo&&(i=n.extend(i,t.opt.loginfo)),B.log.send(i)}},render:function(e,t){var o=this;if(e&&n(e).length){var i=n(e);t&&t.customClassName&&o.$dom_shareList.addClass(t.customClassName),i.append(o.$dom_shareList),o.isRender=!0,t&&"function"==typeof t.onRender&&t.onRender()}},popup:function(t){var o=this,t=t||{};o.isRender&&(o.$dom_shareList=o.$dom_shareList.clone(),o._bindEvent()),t&&t.customClassName&&o.$dom_shareList.addClass(t.customClassName);var i=n('<div class="c-row c-gap-top-large"><div class="c-span12"><div class="c-btn c-share-cancel-btn">取消</div></div></div>');e(["pmd/popup/popup"],function(e){o.sharePopup=new e({content:o.$dom_shareList.add(i),customClassName:"c-share-popup-modal",onOpen:t.onOpen||function(){},onClose:t.onClose||function(){}}),o.sharePopup.$popupContent.css({"max-width":o._horizontalHack()+"px"}),i.on("click",function(){o.sharePopup.closePopup(),o._sendLog("close")})})},close:function(){var e=this;e.sharePopup&&e.sharePopup.closePopup()},_horizontalHack:function(){var e;return void 0!=window.orientation?0==window.orientation||180==window.orientation?e=Math.min(window.screen.width,n(window).width()):(90==window.orientation||-90==window.orientation)&&(e=Math.min(window.screen.width,window.screen.height),e=e*n(window).width()/Math.max(window.screen.width,window.screen.height)):e=Math.min(window.screen.width,window.screen.height),e},constructor:S},S}),define("extensions/mip-share/0.2/share",["require","zepto","extensions/mip-share/0.2/share/share"],function(e){function n(e,n){e=t.extend({},i,e);var r=new o(e);r.render(n,{onRender:function(){}}),this.share=r}var t=e("zepto"),o=e("extensions/mip-share/0.2/share/share");o.prototype._sendLog=function(e){var n=this,o={pyq:{ct:40,cst:2},wxfriend:{ct:40,cst:1},qqfriend:{ct:40,cst:5},qzone:{ct:40,cst:3},sinaweibo:{ct:40,cst:4},more:{ct:40,cst:9},close:{ct:40,cst:0}};if(e&&o[e]){var i=o[e];n.opt&&"object"==typeof n.opt.loginfo&&(i=t.extend(i,n.opt.loginfo))}};var i={iconUrl:"//m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg"};return n}),define("extensions/mip-share/0.2/mip-share",["require","zepto","customElement","extensions/mip-share/0.2/share"],function(e){function n(){var e=this.element;e.isRender||(e.isRender=!0,new i({title:e.getAttribute("title")||document.title,url:e.getAttribute("url")||location.href,content:e.getAttribute("content")||"",iconUrl:e.getAttribute("icon")||""},t(e)))}var t=e("zepto"),o=e("customElement").create(),i=e("extensions/mip-share/0.2/share");return o.prototype.init=function(){this.build=n},o}),require(["extensions/mip-share/0.2/mip-share"],function(e){MIP.css.mipShare=".c-share-list{background:#fff;padding:17px 21px;margin-top:13px}.c-share-list .c-flexbox,.c-share-list .c-row{width:auto;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:justify;-webkit-box-align:stretch;-webkit-box-lines:single;display:-webkit-flex;-webkit-flex-direction:row;-webkit-justify-content:space-between;-webkit-align-items:stretch;-webkit-align-content:flex-start;-webkit-flex-wrap:nowrap}.c-share-list .c-row{margin-right:-1.81818182%;margin-left:-1.81818182%}.c-share-list .c-row-tight{margin-right:-1px;margin-left:0}.c-share-list .c-row-tile{position:relative;margin:0 -.21rem}.c-share-list .c-row-tile .c-row{padding:0 .21rem}.c-share-list .c-row-top{position:relative;margin-top:-.1rem}.c-share-list .c-row-top .c-row:first-child{padding-top:.1rem}.c-share-list .c-row-bottom{position:relative;margin-bottom:-.08rem}.c-share-list .c-row-bottom .c-row:last-child{padding-bottom:.08rem}.c-share-list .c-row *,.c-share-list .c-row-tile *,.c-share-list .c-row-top *,.c-share-list .c-row-bottom *{-webkit-box-sizing:border-box;box-sizing:border-box}.c-share-list .c-span1,.c-share-list .c-span2,.c-share-list .c-span3,.c-share-list .c-span4,.c-share-list .c-span5,.c-share-list .c-span6,.c-share-list .c-span7,.c-share-list .c-span8,.c-share-list .c-span9,.c-share-list .c-span10,.c-share-list .c-span11,.c-share-list .c-span12{position:relative;min-height:1px;padding-right:1.81818182%;padding-left:1.81818182%}.c-share-list .c-span3{width:25%;-webkit-box-flex:3;-webkit-flex:3 3 auto}.c-share-list .c-img{display:block;width:100%;height:0;border:0 none;background:#f7f7f7 url(//m.baidu.com/static/search/image_default.png) center center no-repeat;margin:.04rem 0}.c-share-list .c-img img{width:100%}.c-share-list .c-img-s{padding-bottom:100%}",MIP.registerMipElement("mip-share",e,MIP.css.mipShare)});
define("extensions/mip-share/0.1/share/aio",["require"],function(){!function(n,e){function o(n,e){return l.cleanObj.toString.call(n).slice(8,-1)===e}function t(n){var e=p[n];if(e)return e.exports;throw"module "+n+" is undefined"}function i(n,e){for(var o,i,r=n.split(":"),s=r.pop().split("/"),a=l;o=s.shift();)"bdbox"!==o&&(i=o,s.length&&(a=a[o]=a[o]||{}));var c=p[n]={exports:{}},u=l.isFunction(e)?e.apply(c,[t,c.exports,c,l]):e;u&&(c.exports=u),a[i]=c.exports}function r(){m.forEach(function(n){n()}),m.length=0,h=!0}function s(n){var e;return null==n?e=String(n):(e=Object.prototype.toString.call(n).toLowerCase(),e=e.substring(8,e.length-1)),e}function a(e){var o=e.success||g,t={imageUrl:"",mediaType:"all",title:"",content:"",linkUrl:location.href},i=e.error||g;return l.isFunction(e.success)&&(o="_xSHARE_SUCCESS_"+l.getId(),n[o]=e.success,t.success=o),l.isFunction(e.error)&&(i="_xSHARE_FAIL_"+l.getId(),n[i]=e.error,t.error=i),l.each(e,function(n,o){"success"!==o&&"error"!==o&&(o in v?o=v[o]:"content"!==o||e.title||(t.title=n),t[o]=n)}),l.isArray(t.mediaType)&&(t.mediaType="all"),n.BoxShareData||(n.BoxShareData={successcallback:o,errorcallback:i,options:t}),t}var c=+new Date,u=(c+"").slice(-3),d=navigator.userAgent,l={isBox:/ baiduboxapp\//i.test(d),isIOS:/(iPhone|iPod|iPad)/.test(d),isAndroid:/(Android);?[\s\/]+([\d.]+)?/.test(d),getId:function(){return u++},emptyArr:[],emptyFn:function(){},cleanObj:{},byId:function(n){return l.isString(n)?e.getElementById(n):n},toArray:function(n){return l.emptyArr.slice.call(n)},$:function(n,o){return o=o&&1===o.nodeType?o:e,l.toArray(o.querySelectorAll(n))}};"Function,String,Array,Number,RegExp".replace(/[^, ]+/g,function(n){l["is"+n]=function(e){return o(e,n)}}),l.isBoolean=function(n){return n===!0||n===!1},l.isObject=function(n){return"object"==typeof n},l.isUndefined=function(n){return void 0===n},l.isWindow=function(n){return null!=n&&n==n.window},l.isPlainObject=function(n){return l.isObject(n)&&!l.isWindow(n)&&Object.getPrototypeOf(n)==Object.prototype};var p={};l.define=i;var f=function(n,e,o){for(var t,i,r=n.split("."),s=o||f;t=r.shift();)"Box"!==t&&(i=t,r.length&&(s=s[t]=s[t]||{}));return s[i]=e||{},s[i]},m=[],h=!1;if(f.init=function(n){return"function"!=typeof n?this:(h?n():m.push(n),this)},"complete,loaded,interactive".indexOf(e.readyState)>-1&&e.body?r():e.addEventListener("DOMContentLoaded",r,!1),i("common:bdbox/utils/getVersion",function(e,o,t){var i=function(){var e=0;if(n.baiduboxapp_version)e=n.baiduboxapp_version;else{var o,t=navigator.userAgent;(o=/([\d+.]+)_(?:diordna|enohpi)_/.exec(t))?(o=o[1].split("."),e=o.reverse().join(".")):(o=/baiduboxapp\/([\d+.]+)/.exec(t))&&(e=o[1])}return i=function(){return e},e};t.exports=i}),i("common:bdbox/utils/version_compare",function(n,e,o){var t=function(n,e){e+="",n+="";for(var o=n.split("."),t=e.split("."),i=0,r=Math.max(o.length,t.length);r>i;i++){if(o[i]&&!t[i]&&parseInt(o[i])>0||parseInt(o[i])>parseInt(t[i]))return 1;if(t[i]&&!o[i]&&parseInt(t[i])>0||parseInt(o[i])<parseInt(t[i]))return-1}return 0};o.exports=t}),i("common:bdbox/ios/invokeApp",function(o,t,i,r){i.exports=function(o,t,i){if(o&&r.isBox){var s=[];if(r.isFunction(t))i=t;else for(var a in t)s.push(a+"="+t[a]);if(r.isFunction(i)){var c="_bdbox_js_"+r.getId();n[c]=function(){i.apply(n,[].slice.call(arguments,0))},s.push("func="+c)}else i&&s.push("func="+i);s="baiduboxapp://"+o+"?"+s.join("&");var u="_bdbox_ios_jsbridge",d=e.getElementById(u);d?d.src=s:(d=e.createElement("iframe"),d.style.display="none",d.id=u,d.src=s,(e.body||e.getElementsByTagName("body")[0]).appendChild(d))}}}),i("common:bdbox/android/invokeApp",function(e,o,t,i){function r(e,o,t){if(t&&!i.isArray(t)&&(t=Array.prototype.slice.call(arguments,0).slice(2)),n[e]&&n[e][o]){var r=n[e][o].apply(n[e],t);return{error:0,result:r,__from:"js"}}var u=c();if(a(u,4.8)>=0){var d=s(e,o,t);return d=d?JSON.parse(d):{},d.__from="app",d}if("4.7.1"===u||"4.7"==u){var l=s(e,o,t);return{error:0,result:l,__from:"app4.7"}}return{error:200}}function s(e,o,t){if(!i.isBox)return{error:201};if(!i.isAndroid)return{error:202};var r={obj:e,func:o,args:t?t:[]};try{return n.prompt("BdboxApp:"+JSON.stringify(r))}catch(s){return{error:201}}}var a=e("common:bdbox/utils/version_compare"),c=e("common:bdbox/utils/getVersion");t.exports=r}),i("common:bdbox/utils/detect",function(e,o,t,i){function r(e){var o={name:"unknown",version:0};this===n||this.os||(this.os=o),e=e||navigator.userAgent;var t={Weibo:/weibo/i,Wechat:/micromessenger\//i,QQ:/QQ\//};for(var i in t)t.hasOwnProperty(i)&&(o["is"+i]=t[i].test(e));o.isUC=e.match(/UC/)||n.ucweb||n.ucbrowser;var r=e.match(/(Android);?\s+([\d.]+)?/);if(r)return o.android=!0,o.version=r[2],o.name="android",o;var s=e.match(/(iPad).*OS\s([\d_]+)/),a=e.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&e.match(/(iPhone\sOS)\s([\d_]+)/);return c&&!a?(o.ios=o.iphone=!0,o.version=c[2].replace(/_/g,"."),o.name="ios",o):s?(o.ios=o.ipad=!0,o.name="ios",o.version=s[2].replace(/_/g,"."),o):a?(o.name="ios",o.ios=o.ipod=!0,o.version=a[3]?a[3].replace(/_/g,"."):null,o):o}r.apply(i),t.exports=r}),i("common:bdbox/each",function(n,e,o){function t(n){var e;return null==n?e=String(n):(e=Object.prototype.toString.call(n).toLowerCase(),e=e.substring(8,e.length-1)),e}o.exports=function(n,e,o){if("object"==typeof n){var i,r,s=t(n);if(o=o||n,"array"===s||"arguments"===s||"nodelist"===s){for(i=0,r=n.length;r>i;i++)if(e.call(o,n[i],i,n)===!1)return}else for(i in n)if(n.hasOwnProperty(i)&&e.call(o,n[i],i,n)===!1)return}}}),i("common:bdbox/client/nativeShare",function(o,t,i,r){function s(e){var o={wechatIcon:location.protocol+"//m.baidu.com/static/search/logo300.png",type:"url",mediaType:"all",linkUrl:location.href,title:c.title,success:"console.log",error:"console.log"};each(e||{},function(n,e){o[e]=n}),o.image&&(o.imageUrl=o.image),o.iconUrl&&!o.imageUrl&&"url"===o.type&&(o.imageUrl=o.iconUrl);var t={};["success","error"].forEach(function(e){var i=e;r.isFunction(o[e])&&(i="_xSHARE_SUCCESS_"+r.getId(),n[i]=o[e]),t[e+"callback"]=i,delete o[e]}),t.options=o,t.options.imageUrl&&r.isAndroid&&a(r.version,"6.5")<0&&delete t.options.imageUrl,n.BoxShareData=t;var i=o.wechatIcon;if(/micromessenger\//i.test(navigator.userAgent)&&i&&i.length>20){var s=c.createElement("div");s.id="wa-generalevent-wx-logo",s.style.display="none",s.innerHTML='<img src="'+i+'"/>';var u=c.body.firstChild;u?c.body.insertBefore(s,u):c.body.appendChild(s)}}var a=o("common:bdbox/utils/version_compare"),c=e;i.exports=s}),i("common:bdbox/utils/ready",function(n,o,t){function i(){s.forEach(function(n){n()}),s.length=0,a=!0}function r(n){"function"==typeof n&&(a?n():s.push(n))}var s=[],a=!1;"complete,loaded,interactive".indexOf(e.readyState)>-1&&e.body?i():e.addEventListener("DOMContentLoaded",i,!1),t.exports=r}),l.version=l.utils.getVersion(),l.version_compare=l.utils.version_compare,each=l.each,l.nativeShare=l.client.nativeShare,l.type=s,l.canI=function(n,e,o){return l.version_compare(l.version,n)>=0?l.isFunction(e)&&e():l.isFunction(o)&&o(),l},i("common:bdbox/client/o2o",function(n,e,o,t){var i=n("common:bdbox/android/invokeApp"),r=n("common:bdbox/ios/invokeApp"),s=encodeURIComponent,a=n("common:bdbox/each"),c=t.isAndroid?function(n,e){t.isObject(n)&&(e=n,n=n.url,delete e.url);var o=["S.bdsb_light_start_url="+s(n)];if(t.isObject(e)){var r={color:"i.extra_actionbar_color_id",appid:"S.bdsb_wallet_appid"};a(e,function(n,e){"color"===e&&(n=4278190080|parseInt("0x"+n)),e=r[e]||e,o.push(e+"="+n)})}o=o.join(";"),i("Bdbox_android_utils","command",[JSON.stringify({intent:"intent:#Intent;"+o+";end","class":"com.baidu.searchbox.wallet.WalletServiceActivity",min_v:"16783629",mode:"0"})])}:function(n,e){t.isObject(n)&&(e=n,n=n.url,delete e.url);var o={openurl:s(n),minver:"5.3.0.0",isla:0,opentype:1,append:0,rbtnstyle:2};if(t.isObject(e)){var i={color:"barcolor"};a(e,function(n,e){e=i[e]||e,o[e]=n})}o.appid&&(o.isla=1),r("easybrowse",o)};o.exports=c}),l.o2o=l.client.o2o,"android"===l.os.name?f("card",{query:function(n,e){if(f.version_compare(f.version,"5.0")<0)return this;var o,t;f.isArray(n)?o=[JSON.stringify(n)]:(t=f.toArray(arguments),e=t.pop(),f.isFunction(e)?o=t:(o=f.toArray(arguments),e=null),o=[JSON.stringify(o)]);var i=f.android.invokeApp("Bdbox_android_card","mquery",o);return i=0===i.error&&i.result?JSON.parse(i.result):!1,f.isFunction(e)&&e(i),i},add:function(e,o){if(f.version_compare(f.version,"5.0")<0)return this;var t,i;f.isString(e)?t=[e]:f.isArray(e)?t=[JSON.stringify(e)]:(i=f.toArray(arguments),o=i.pop(),f.isFunction(o)?t=i:(t=f.toArray(arguments),o=null),t=[JSON.stringify(t)]);var r=null;if(f.version_compare(f.version,"5.5")>=0){var s="";f.isFunction(o)&&(s="__box_card_"+f.getId(),n[s]=function(n){var e=JSON.parse(n),t=!1;for(var i in e){t=e[i].st;break}o(t)}),r=f.android.invokeApp("Bdbox_android_card","madd",t.concat([s,0]))}else r=f.android.invokeApp("Bdbox_android_card","madd",t);return r}}):f("card",{query:function(n,e){if(f.version_compare(f.version,"5.0")<0)return this;var o,t;f.isArray(n)?o=[JSON.stringify(n)]:(t=f.toArray(arguments),e=t.pop(),f.isFunction(e)?o=t:(o=f.toArray(arguments),e=null),o=[JSON.stringify(o)]);var i=function(n){f.isFunction(e)&&e(JSON.parse(n)),i=null};f.ios.invokeApp("cardMquery",{params:encodeURIComponent(o)},i)},add:function(n,e){if(f.version_compare(f.version,"5.0")<0)return this;var o,t;f.isString(n)?o=[n]:f.isArray(n)?o=[JSON.stringify(n)]:(t=f.toArray(arguments),e=t.pop(),f.isFunction(e)?o=t:(o=f.toArray(arguments),e=null),o=[JSON.stringify(o)]);var i=function(n){var o=JSON.parse(n),t=!1;for(var r in o){t=o[r].st;break}f.isFunction(e)&&e(t),i=null};return f.ios.invokeApp("cardMadd",{params:encodeURIComponent(o),gohome:"0"},i),!0}}),i("common:bdbox/utils/jsonToQuery",function(n,e,o,t){o.exports=function(n){if(t.isString(n))return n;var e=[];for(var o in n)e.push(o+"="+n[o]);return e.join("&")}}),i("common:bdbox/io/loadJS",function(o,t,i,r){function s(o,t,i){var s,u,d,l=e.createElement("script");r.isString(o)?(s=o,r.isFunction(t)&&(i=t,t=null)):(s=o.url,t=o.data,i=o.success,u=o.error||r.emptyFn,d=o.timeout),r.isObject(t)&&(t=c(t)),t&&(s+=(-1===s.indexOf("?")?"?":"&")+t),s=s.replace(/[&?]{1,2}/,"?");var p;/=\?/.test(s)&&(p="_box_jsonp"+r.getId(),s=s.replace(/=\?/,"="+p));var f=a();d=d||2e4,l.type="text/javascript",l.src=s;var m,h=!0,b=function(){p&&delete n[p],m&&clearTimeout(m),l.onload=l.onreadystatechange=l.onerror=null,l=null},v=function(){!l||l.readyState&&!/loaded|complete/.test(l.readyState)||(b(),h&&r.isFunction(i)&&i.apply(null,r.toArray(arguments)),h=!1)},g=function(n){b(),h&&u(n),h=!1};p&&(n[p]=v),m=setTimeout(function(){b(),h&&u("timeout"),h=!1},d),l.onload=l.onreadystatechange=l.onerror=v,l.onerror=g,f.appendChild(l)}function a(){return e.head||e.getElementsByTagName("head")[0]||e.documentElement}var c=o("common:bdbox/utils/jsonToQuery");r.emptyFn,i.exports=s}),i("common:bdbox/utils/queryToJson",function(n,e,o){o.exports=function(n){try{n=n?decodeURIComponent(n):""}catch(e){n=""}var o=n.split("?"),t=o[1]?o[1]:o[0],i=t.split("&"),r={};return i.forEach(function(n){n=n.split("="),n[0].length>0&&(r[n[0]]=n[1]||"")}),r}}),i("common:bdbox/extend",function(n,e,o,t){function i(n,e,o){for(var t in e)o&&(r(e[t])||s(e[t]))?(r(e[t])&&!r(n[t])&&(n[t]={}),s(e[t])&&!s(n[t])&&(n[t]=[]),i(n[t],e[t],o)):c(e[t])||(n[t]=e[t])}var r=t.isPlainObject,s=t.isArray,a=t.isBoolean,c=t.isUndefined;o.exports=function(n){var e,o=t.emptyArr.slice.call(arguments,1);return a(n)&&(e=n,n=o.shift()),o.forEach(function(o){i(n,o,e)}),n}}),i("common:bdbox/utils/ready",function(n,o,t){function i(){s.forEach(function(n){n()}),s.length=0,a=!0}function r(n){"function"==typeof n&&(a?n():s.push(n))}var s=[],a=!1;"complete,loaded,interactive".indexOf(e.readyState)>-1&&e.body?i():e.addEventListener("DOMContentLoaded",i,!1),t.exports=r}),i("common:bdbox/utils/detect",function(e,o,t,i){function r(e){var o={name:"unknown",version:0};this===n||this.os||(this.os=o),e=e||navigator.userAgent;var t={Weibo:/weibo/i,Wechat:/micromessenger\//i,QQ:/QQ\//};for(var i in t)t.hasOwnProperty(i)&&(o["is"+i]=t[i].test(e));o.isUC=e.match(/UC/)||n.ucweb||n.ucbrowser;var r=e.match(/(Android);?\s+([\d.]+)?/);if(r)return o.android=!0,o.version=r[2],o.name="android",o;var s=e.match(/(iPad).*OS\s([\d_]+)/),a=e.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&e.match(/(iPhone\sOS)\s([\d_]+)/);return c&&!a?(o.ios=o.iphone=!0,o.version=c[2].replace(/_/g,"."),o.name="ios",o):s?(o.ios=o.ipad=!0,o.name="ios",o.version=s[2].replace(/_/g,"."),o):a?(o.name="ios",o.ios=o.ipod=!0,o.version=a[3]?a[3].replace(/_/g,"."):null,o):o}r.apply(i),t.exports=r}),i("common:bdbox/schema",function(n,o,t,i){function r(n,o){if(n){if(o=o||i.emptyFn,!i.isBox&&i.isIOS&&c(a.version,"9.0")>=0)return void u(function(){s(n,o)});var t=Date.now(),r=e.createElement("IFRAME");r.src=n,r.style.position="absolute",r.style.left="-2000px",r.style.top="-1000px",r.style.width="1px",r.style.height="1px",r.style.webkitTransition="all 0.9s",r.style.transition="all 0.9s",e.body.appendChild(r);var d=function(){e.body.removeChild(r),o(Date.now()-t<1500?!0:!1)};r.addEventListener("webkitTransitionEnd",d,!1),r.addEventListener("transitionEnd",d,!1),setTimeout(function(){r.style.left="-1000px"},20)}}function s(n,e){location.href=n,d&&clearTimeout(d),d=setTimeout(function(){e(!0)},1200)}var a=n("common:bdbox/utils/detect")(),c=n("common:bdbox/utils/version_compare"),u=n("common:bdbox/utils/ready"),d=null;t.exports=r}),i("common:bdbox/monitor",function(e,o,t,i){var r=encodeURIComponent,s=function(n,e){n+=n.indexOf("?")<0?"?":"&",this.url=n,this.options=e};s.prototype.report=function(e){e=e||"";var o=new Image(1,1),t=[];if(i.isObject(e)){for(var s in e)t.push(s+"="+r(String(e[s])));e=t.join("&")}var a="_box_mt"+i.getId();n[a]=o,o.onload=o.onerror=o.onabort=function(){o.onload=o.onerror=o.onabort=null,n[a]=o=null};var c=this.url+e;return i.isFunction(this.options.customHandler)&&(c=this.options.customHandler(c)),o.src=c+"&_rnd="+Math.floor(2147483648*Math.random()),this},s.prototype.main=function(n,e){return n&&i.isFunction(this[n])&&this[n].apply(this,i.toArray(e||[])),this},t.exports=function(n,e){return new s(n,e)}}),i("common:bdbox/clone",function(n,e,o){var t=Object.prototype.toString,i=function(n,e,o){var t=0;for(var i in n)if(n.hasOwnProperty(i))if(o)e[i]=n[i];else if(e(i,n[i],t++))break},r=function(n){var e;switch(t.call(n)){case"[object Object]":e={},i(n,function(n,o){e[n]=r(o)});break;case"[object Array]":e=[],n.forEach(function(n){e.push(r(n))});break;default:e=n}return e};o.exports=r}),i("common:bdbox/monitor/pblog",function(n,e,o,t){var i=n("common:bdbox/monitor"),r=n("common:bdbox/extend"),s=n("common:bdbox/utils/queryToJson"),a=n("common:bdbox/utils/getVersion"),c=n("common:bdbox/clone"),u=s(location.search),d=navigator.userAgent,l="//m.baidu.com/tcbox",p={service:"bdbox",action:"pblog",ctv:2,cen:"uid_ua_ut",data:{appid:"1",dataid:"2",actiontype:"1",actionid:"2",actiondata:{ref:u.ref||"",gmv:u.vmgdb||"",source:u.from||u.ref||"",boxVersion:a(),boxPlatform:d.match(/(iPad|iPhone|iPod)/gim)?"ios":"android"}}},f=encodeURIComponent;u.uid&&u.osname&&["osname","ua","ut","from","cfrom","uid","pkgname"].forEach(function(n){u[n]&&(p[n]=u[n])});var m,h=i(l,{customHandler:function(n){var e=[];if(m)for(var o in m)if(m.hasOwnProperty(o)){var i=m[o];t.isPlainObject(i)&&(i=JSON.stringify(i)),e.push(o+"="+f(i))}return e.length&&(n+=e.join("&")),n}});h.init=function(n,e){t.isPlainObject(e)&&(p=r(p,e)),p.data.cateid=n},h.pv=function(n,e){m=c(p);var o=m.data;o.actionid="1";var t={};return t.url=n||location.href,e&&(t.u=e),o.actiondata=r(o.actiondata,t),h.report()},h.event=function(n,e,o){if(!n)throw"monitor.tc.event need a evtName";if(t.isPlainObject(e)&&!o){var i={evtName:n};for(var s in e)i[s]=e[s]}else var i={evtName:n,evtType:e||"",evtTag:o||""};m=c(p);var a=m.data;return a.actionid="2",a.actiondata=r(a.actiondata,i),h.report()},o.exports=function(){h.main.apply(h,arguments)}}),i("common:bdbox/moplus",function(n,e,o,t){var i=n("common:bdbox/utils/jsonToQuery"),r=n("common:bdbox/io/loadJS"),s=n("common:bdbox/utils/version_compare"),a=n("common:bdbox/monitor/pblog"),c=n("common:bdbox/schema"),u="com.baidu.searchbox",d="http://127.0.0.1:6259/",l="http://127.0.0.1:40310/",p="inapp_boxserver",f="https:"===location.protocol,m=500,h=null,b="__moplus_host__",v={isSendPv:!1,isHit:!1,parseUA:function(){var n,e,o=navigator.userAgent,t={uc:/UCBrowser\/(\S*) \S*/g,bd:/baidubrowser\/(\S*) \(Baidu/g,qq:/MQQBrowser\/(\S*) Mobile/g,chr:/Chrome\/(\S*) Mobile/g,qh:/360 Aphone Browser \((\S*)\)/g,sg:/SogouMobileBrowser\/(\S*)/g,mi:/MiuiBrowser\/(\S*)/g};for(var i in t){var r=t[i].exec(o);if(r){n=i,e=r[1];break}}return n=n?n:"other",e=e?e:"0",{t:n,v:e}},parseHost:function(){return g.curHost===l?1:0},sendEvt:function(n,e,o,t){this.isHit&&this.send(n,e,o,t)},send:function(n,e,o,t){var i=this.parseUA(),r=i.t,s=i.v,c=f?0:1,u=this.parseHost();a("event",[n,{evtType:e||"",brName:r,brVer:s,isHttp:c,isNew:u,source:o||"",intent:t||""}])},init:function(){this.isHit=Date.now()%100===1,a("init",[2])}},g=function(n,e,o){this.version="2.0",this.isHttps=f,this.curHost=o||"",this.newHost=l,this.oldHost=this.isHttps?l:d,this.MCMDF=e||p,this._infoFuncs=[],this._verFuncs=[],this.minVersion=n?n:0,this.pkgName=u,v.init()},x=function(n,e){try{sessionStorage.setItem(n,e)}catch(o){}},y=function(n){var e;try{e=sessionStorage.getItem(n)}catch(o){}return e};g.prototype={constructor:g,setMcmdf:function(n){return this.MCMDF=n,this},setHost:function(n){return this.curHost=n,x(b,n),this},getHost:function(){if(this.isHttps)return this.curHost=this.newHost,this.newHost;var n=y(b);return n?(this.curHost=n,this.curHost):void 0},api:function(n,e,o,r){if(!n)throw"Moplus.api need an action";t.isFunction(e)&&(r=o,o=e,e={});var s=n+(~n.indexOf("?")?"&":"?")+i(e);return~s.indexOf("mcmdf")||(s+="&mcmdf="+this.MCMDF),v.sendEvt("api","send:"+n,this.MCMDF,s),this.request(s,function(e){v.sendEvt("api",(t.isPlainObject(e)&&0==e.error?"success:":"fail:")+n,this.MCMDF,s),o(e)},r)},getInfo:function(n,e){if(h)return n(h);if(this._infoFuncs.push(n),!(this._infoFuncs.length>1)){var o=this,i=function(n,e){!e&&t.isPlainObject(n)&&(h=n);var i;for(e&&(n={error:33});i=o._infoFuncs.shift();)i(n)},s="getsearchboxinfo?mcmdf="+this.MCMDF;if(this.getHost()){var a={url:this.curHost+s+"&callback=?",success:i,error:function(){i(null,!0)},timeout:e};r(a)}else this.request(s,function(n){return 33===n.error?i(null,!0):void i(n)},e);return this}},getHVersion:function(n,e){this._verFuncs.push(n);var o=this;if(!(this._verFuncs.length>1)){var t=function(n){var e;for(n=o.parseInfo(n);e=o._verFuncs.shift();)e(n)};return this.getInfo(t,e),this}},parseInfo:function(n,e){n=n||h,e=e||this.minVersion;var o=n.package_infos;if(!o||0===o.length)return!1;var t=u,i={offic:{name:u,version:0},oem:{version:0}};return o.forEach(function(n){var o=n.version_name,r=n.package_name;s(o,e)>=0&&(r===t?1===s(o,i.offic.version)&&(i.offic={version:o,name:u}):1===s(o,i.oem.version)&&(i.oem={version:o,name:r}))}),0===i.oem.version&&0===i.offic.version?!1:0!==i.offic.version?i.offic:0!==i.oem.version?i.oem:void 0},schema:function(n,e){if(!n.intent)throw"schema intent is empty";n.mcmdf||(n.mcmdf=this.MCMDF);var o=function(){v.send("schema","success",n.source,n.intent),t.isFunction(e)&&e({error:0,from:"schema"})},i=function(){v.send("schema","fail",n.source,n.intent),t.isFunction(e)&&e({error:20,from:"schema"})},r=n.schema||"";if(n.intent&&!n.schema){var s=n.intent;-1==s.indexOf(u)&&(v.sendEvt("defaultPKGName","fail",n.source||"",n.intent),n.minver=n.minver?n.minver:"6.9.1")}r||(r="baiduboxapp://utils?action=sendIntent&params="+encodeURIComponent(JSON.stringify(n))+"&minver="+(n.minver?n.minver:"6.9")),c(r,function(n){n?i():o()})},sendIntent:function(n,e,o){var i={};if(n&&t.isString(n)){var r,s=this,a=!0;return t.isPlainObject(o)?(i=o,r=o.source||"",o.needlog?v.isHit=o.needlog:i.needlog=v.isHit?1:0,o=o.timeout):t.isBoolean(o)&&(a=o),i.intent=n,v.send("sendintent","send",r,n),this.api("sendintent",{intent:encodeURIComponent(n)},function(o){!o||o&&33===o.error||!t.isPlainObject(o)?(v.send("sendintent","fail",r,n),a?s.schema(i,e):(o=o||{},o.from="moplus",e(o))):(v.send("sendintent","success",r,n),e(o))},o)}return this},request:function(n,e,o){var i,s,a=this,c={timeout:o};t.isFunction(e)&&!~n.indexOf("callback=")&&(n+="&callback=?");var u=function(n){i="success",t.isFunction(e)&&e(n)},d=function(){t.isFunction(e)&&e({error:33})};if(a.getHost())c.url=a.curHost+n,c.success=u,c.error=d,r(c);else if(c.url=a.newHost+n,c.success=function(n){"success"!==i&&(s&&clearTimeout(s),a.setHost(a.newHost),u(n))},c.error=function(){a.isHttps?(i="error",d()):"error"===i&&d(),i="error"},r(c),!a.isHttps){var l={timeout:o,url:a.oldHost+n,error:c.error};l.success=function(n){"success"!==i&&("error"===i?(a.setHost(a.oldHost),u(n)):s=setTimeout(function(){a.setHost(a.oldHost),u(n)},m))},r(l)}return this}},o.exports=function(n,e){return new g(n,e)},o.exports.Moplus=g}),l.version_compare(l.version,"5.3.5")>=0){var b,v={image:"imageUrl",url:"linkUrl",order:"mediaType"},g="";n[g]=l.emptyFn,l.isAndroid?(b=function(n){if(n.id&&l.byId(n.id)){var e=n.eventType||"touchstart";l.byId(n.id).addEventListener(e,function(){o(n)},!0)}var o=function(e){e=a(e||n);var o=e.error,t=e.success;e.iconUrl&&e.imageUrl&&delete e.imageUrl,l.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(e),t||"console.log",o||"console.log"])};return o},f("share",b)):(b=function(n){if(n.id&&l.byId(n.id)){var e=n.eventType||"touchstart";l.byId(n.id).addEventListener(e,function(){o(n)},!0)}var o=function(e){e=a(e||n);var o=e.error,t=e.success;e.iconUrl&&!e.imageUrl&&(e.imageUrl=e.iconUrl),e=JSON.stringify(e),l.ios.invokeApp("callShare",{options:encodeURIComponent(e),errorcallback:o||"console.log",successcallback:t||"console.log"})};return o},f("share",b))}else{var x=[],y=function(){f._socShare&&f._socShare.init?x.forEach(function(n){f._socShare.init(n)}):setTimeout(y,3e3)};l.io.loadJS("//m.baidu.com/static/searchbox/openjs/share.js?v=1.2",y);var w={source:"client_id",id:"dom_id",image:"pic_url",success:"afterRender"},b=function(n){var e={content:"",client_id:"ZVEpDSsmZ0qxa1gmgDAh1Fje",theme:"native",dom_id:"share",animate:!0,pic_url:"",url:encodeURIComponent(location.href)};return l.isObject(n)&&l.each(n,function(n,o){if(o in w&&(o=w[o]),"order"===o&&l.isArray(n)){var t=[];n.forEach(function(n){"email"===n&&(n="mail"),t.push(n)})}e[o]=n}),delete e.success,delete e.error,delete e.afterRender,"all"===e.order?e.order=["qqdenglu","sinaweibo","renren","kaixin","mail","sms"]:l.isString(e.order)&&(e.order=e.order.split(",")),f._socShare&&f._socShare.init?f._socShare.init(e):x.push(e),function(){f._socShare.ui._shareBtnClickHandler()}};f("share",b)}if(i("common:bdbox/distribute",function(n,e,o,t){var i=n("common:bdbox/schema");n("common:bdbox/utils/detect");var r=n("common:bdbox/each"),s=n("common:bdbox/moplus"),a=t.emptyFn,c={qqDownloadUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox",androidDownloadUrl:"",iosDownloadUrl:"",iosFailCallback:a,androidFailCallback:a,iosSchema:"",androidSchema:"",androidIntent:"",inBoxCallback:a},u=function(n){var e=this;n&&r(c,function(e,o){n[o]=n[o]||e});var o=this.url=n.url;o&&""!==o?(this.androidIntent="intent://"+o.replace(/^http[s]?:\/\//,"")+"#Intent;scheme=http;action=com.baidu.searchbox.action.VIEW;category=android.intent.category.DEFAULT;end",this.iosSchema="baiduboxapp://easybrowse?openurl="+encodeURIComponent(o)+"&opentype=0&isla=0&append=0&minver=5.3.0.0"):["androidIntent","iosSchema","androidSchema"].forEach(function(o){e[o]=n[o]}),this.options=n,this.fail=function(){if(console.log(t.os.name+" fail"),t.isFunction(n[t.os.name+"FailCallback"])){var e=n[t.os.name+"FailCallback"]();if(t.isBoolean(e)&&!e)return}var o=n[t.os.name+"DownloadUrl"];o&&""!==o&&(location.href=n[t.os.name+"DownloadUrl"])},this.success=function(){return console.log(t.os.name+" success"),t.isFunction(n[t.os.name+"SuccessCallback"])?n[t.os.name+"SuccessCallback"]():void 0}};u.prototype.wechat=function(){var n=this.options;if(t.isFunction(n.wechatCallback)){var e=n.wechatCallback();if(t.isBoolean(e)&&!e)return}n.qqDownloadUrl&&""!==n.qqDownloadUrl&&(location.href=n.qqDownloadUrl)},u.prototype.run=function(){var n=this,e=(n.url,n.options);return t.os.isWechat?n.wechat():t.isBox&&t.isFunction(e.inBoxCallback)?e.inBoxCallback():void this.invoke()},u.prototype.invoke=function(){var n=this;if(t.os.android){var e=s();e.getHVersion(function(o){o?e.sendIntent(n.androidIntent,function(e){0==e.error?n.success():n.fail()},1e3):n.androidSchema?i(n.androidSchema,function(e){e?n.fail():n.success()}):n.fail()})}else i(n.iosSchema,function(e){e?n.fail():n.success()})},o.exports=function(n){return new u(n)}}),each(l,function(n,e){f[e]=n}),n.Box&&n.Box.$)for(var _ in f)n.Box[_]=n.Box[_]||f[_];else n.Box=f}(window,document)}),define("extensions/mip-share/0.1/share/detect",["require"],function(){function n(){if(o){var n,e="";return $&&$.os?$.os.ios?n="ios":$.os.android&&(n="android"):n=o.indexOf("iphone")>-1||o.indexOf("ipod")>-1?"ios":"android",{n:n,v:e}}}function e(){if(o){var n,e="";return-1!=o.indexOf("baiduboxapp/")?n="zbios":-1!=o.indexOf("baidubrowser/")?(n="bmbadr",e=o.match(/baidubrowser\/([\d\.]*)/),e=e&&e[1]?e[1]:""):-1!=o.indexOf("mqqbrowser/")?(n="qq",e=o.match(/mqqbrowser\/([\d\.]*)/),e=e&&e[1]?e[1]:""):-1!=o.indexOf("micromessenger/")?(n="wechat",e=o.match(/micromessenger\/([\d\.]*)/),e=e&&e[1]?e[1]:""):-1!=o.indexOf("ucbrowser/")?(n="uc",e=o.match(/ucbrowser\/([\d\.]*)/),e=e&&e[1]?e[1]:""):-1!=o.indexOf("sogoumobilebrowser/")?(n="sogou",e=o.match(/sogoumobilebrowser\/([\d\.]*)/),e=e&&e[1]?e[1]:""):-1!=o.indexOf("crios/")?(n="chrome",e=o.match(/crios\/([\d\.]*)/),e=e&&e[1]?e[1]:""):n="other",{n:n,v:e}}}var o=navigator.userAgent.toLowerCase();return{os:n(),browser:e()}}),define("extensions/mip-share/0.1/share/share",["require","extensions/mip-share/0.1/share/detect"],function(n){var e=$('<style data-for="pmd/share/share"></style>');e.text("/* 分享列表容器 */\n\n\n.c-share-content {\n    padding: 6px 21px 10px;\n    background: #f5f5f5;\n}\n\n.c-share-list {\n    overflow: hidden;\n    display: table;\n    width: 100%;\n\n}\n.c-share-list .c-line-clamp1{\n    line-height: 30px;\n    color: #999;\n}\n\n.c-share-list .c-share-btn {\n    display: table-cell;\n    color: #333;\n    text-align: center;\n    font-size: 13px;\n\n}\n\n.c-share-list .c-share-btn-img {\n    width: 50px;\n    height: 50px;\n    margin: 6px auto 2px;\n}\n\n.c-share-list .c-share-btn .c-img {\n    background: #fff;\n    border: 1px solid #f0f0f0;\n    border-radius: 50%;\n}\n\n.c-share-list .c-share-btn-img {\n    width: 50px;\n    height: 50px;\n    background: #fff;\n    border-radius: 50%;\n}\n\n/* 分享取消按钮,只在popup打开时展现 */\n.c-share-cancel-btn {\n    border-color: #f0f0f0;\n}\n\n\n/* 微信分享提示tips */\n.c-share-wechat-tips {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6) url(//m.baidu.com/se/static/pmd/pmd/share/images/wxtips.png) right 32px top 10px/50% no-repeat;\n}\n\n\n/* popup打开时自定义容器背景色,需要提高选择器优先级 */\n.c-popup-wrapper .c-share-popup-modal {\n    background-color: #f0f0f0;\n}\n\n.c-share-popup-modal .c-popup-head {\n    display: none;\n}\n\n.c-share-popup-modal .c-popup-content {\n    margin: 0 auto;\n    padding: 21px;\n}\n"),$("head").append(e);var o={url:window.location.href,title:"百度搜索有惊喜",content:"百度搜索有惊喜",iconUrl:"//m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg",custom:[]},t=n("extensions/mip-share/0.1/share/detect"),i=t.os,r=t.browser,s="zbios"==r.n?1:0,a="uc"!=r.n||"undefined"==typeof ucweb&&"undefined"==typeof ucbrowser?0:1,c="qq"==r.n&&r.v&&r.v>"5.4"?1:0,u="wechat"==r.n?1:0,d=$.Deferred();if(c){var l=document.createElement("script");l.type="text/javascript",l.onload=l.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||d.resolve()},l.src="//jsapi.qq.com/get?api=app.share",$("head").append(l)}var p,f=function(e,o){o&&(e.url=encodeURIComponent(e.url),e.linkUrl=encodeURIComponent(e.url)),n(["extensions/mip-share/0.1/share/aio"],function(){Box.os.android?Box.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(e),window.successFnName||"console.log",window.errorFnName||"console.log"]):Box.ios.invokeApp("callShare",{options:encodeURIComponent(JSON.stringify(e)),errorcallback:"onFail",successcallback:"onSuccess"})})},m=function(n,e){var o={sinaweibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],wxfriend:["kWeixin","WechatFriends",1,"微信好友"],pyq:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],qqfriend:["kQQ","QQ","4","QQ好友"],qzone:["kQZone","QZone","3","QQ空间"]},t=e.url,r=e.title,s="";e.content,n=""==n?"":"ios"==i.n?o[n][0]:o[n][1],"undefined"!=typeof ucweb?ucweb.startRequest("shell.page_share",[r,r,t,n,"","@"+s,""]):"undefined"!=typeof ucbrowser&&ucbrowser.web_share(r,r,t,n,"","@"+s,"")},h=function(n,e){var o={sinaweibo:["kSinaWeibo","SinaWeibo",11,"新浪微博"],wxfriend:["kWeixin","WechatFriends",1,"微信好友"],pyq:["kWeixinFriend","WechatTimeline","8","微信朋友圈"],qqfriend:["kQQ","QQ","4","QQ好友"],qzone:["kQZone","QZone","3","QQ空间"]};n=""==n?"":o[n][2];var t={url:e.url,title:e.title,description:e.content,img_url:"",img_title:"",to_app:n,cus_txt:"请输入此时此刻想要分享的内容"};t=""==n?"":t,$.when(d).done(function(){"undefined"!=typeof browser&&"undefined"!=typeof browser.app&&browser.app.share(t)})},b=function(){$(".c-share-wechat-tips").length?$(".c-share-wechat-tips").show():($("body").append($('<div class="c-share-wechat-tips"></div>')),$(".c-share-wechat-tips").on("click",function(){$(this).hide(),clearTimeout(p)})),p=setTimeout(function(){$(".c-share-wechat-tips").hide(),clearTimeout(p)},2e3)},v={key:"pyq",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/pyq_2.png",title:"朋友圈",cb:function(){var n;return s?n=function(n){n.mediaType="weixin_timeline",f(n,!1)}:a?n=function(n){m("pyq",n)}:c?n=function(n){h("pyq",n)}:u&&(n=function(){b()}),n}()},g={key:"wxfriend",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend_2.png",title:"微信好友",cb:function(){var n;return s?n=function(n){n.mediaType="weixin_friend",f(n,!1)}:a?n=function(n){m("wxfriend",n)}:c?n=function(n){h("wxfriend",n)}:u&&(n=function(){b()}),n}()},x={key:"qqfriend",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend_2.png",title:"QQ好友",cb:function(){var n;return s?n=function(n){n.mediaType="qqfriend",f(n,!1)}:a?n=function(n){m("qqfriend",n)}:c&&(n=function(n){h("qqfriend",n)}),n}()},y={key:"qzone",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/qzone_2.png",title:"QQ空间",cb:function(){var n;return n=s?function(n){n.mediaType="qqdenglu",f(n,!1)}:a&&"ios"==i.n?function(n){m("qzone",n)}:c?function(n){h("qzone",n)}:function(n){var e="url="+encodeURIComponent(n.url)+"&successurl="+encodeURIComponent(window.location.href)+"&summary="+n.content+"&title="+n.title+"&pics="+encodeURIComponent(n.iconUrl);window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+e)}}()},w={key:"sinaweibo",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo_2.png",title:"新浪微博",cb:function(){var n;return n=s?function(n){n.mediaType="sinaweibo",f(n,!1)}:a?function(n){m("sinaweibo",n)}:c?function(n){h("sinaweibo",n)}:function(n){window.open("http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(n.url)+"&title="+encodeURIComponent(n.title))}}()},_={key:"more",icon:"//m.baidu.com/se/static/pmd/pmd/share/images/more_2.png",title:"更多",cb:function(){var n;return s?n=function(n){n.mediaType="all",f(n,!1)}:a?n=function(n){m("",n)}:c&&(n=function(n){h("",n)}),n}()},S=function(n){this.opt=$.extend({},o,n),this.opt.content||(this.opt.content=this.opt.title),/^\/\/.+/.test(this.opt.url)&&(this.opt.url="http:"+this.opt.url),this.opt.linkUrl=this.opt.url,this._init()};return S.prototype={version:"1.0.0",_init:function(){var n=this;n.isRender=!1,n._initShareList()},_initShareList:function(){var n=this,e=[];(s||a||c||u)&&e.push(g,v),(s||a||c)&&e.push(x),e.push(y,w);
var o=s||a||c&&"ios"==i.n;if(e.length<4)o&&e.push(_);else if(e=e.concat(n.opt.custom),e=e.splice(0,4),4==e.length){var t=e[3];"more"!==t.key&&o&&(e[3]=_)}n.list=e;var r="";if("array"==$.type(e)&&e.length>0){r+='<div class="c-share-list">';for(var d=0;4>d;d++){var l=d,p=e[l];p?(r+='<div class="c-share-btn c-share-btn-'+p.key+'">',r+='<div class="c-share-btn-img">',r+='<img src="'+p.icon+'" />',r+="</div>",r+='<div class="c-line-clamp1">'+p.title+"</div>"):r+='<div class="c-share-btn">',r+="</div>"}r+="</div>"}n.$dom_shareList=$(r),n._bindEvent()},_bindEvent:function(){var n=this;n.$dom_shareList.find(".c-share-btn").each(function(e){n.list[e]&&$(this).on("click",function(){n.list[e].cb(n.opt),n._sendLog(n.list[e].key)})})},_sendLog:function(n){var e=this,o={pyq:{ct:40,cst:2},wxfriend:{ct:40,cst:1},qqfriend:{ct:40,cst:5},qzone:{ct:40,cst:3},sinaweibo:{ct:40,cst:4},more:{ct:40,cst:9},close:{ct:40,cst:0}};if(n&&o[n]&&"object"==typeof B&&B.log&&B.log.send){var t=o[n];e.opt&&"object"==typeof e.opt.loginfo&&(t=$.extend(t,e.opt.loginfo)),B.log.send(t)}},render:function(n,e){var o=this;if(n&&$(n).length){var t=$(n);e&&e.customClassName&&o.$dom_shareList.addClass(e.customClassName),t.append(o.$dom_shareList),o.isRender=!0,e&&"function"==typeof e.onRender&&e.onRender()}},popup:function(e){var o=this,e=e||{};o.isRender&&(o.$dom_shareList=o.$dom_shareList.clone(),o._bindEvent()),e&&e.customClassName&&o.$dom_shareList.addClass(e.customClassName);var t=$('<div class="c-row c-gap-top-large"><div class="c-span12"><div class="c-btn c-share-cancel-btn">取消</div></div></div>');n(["pmd/popup/popup"],function(n){o.sharePopup=new n({content:o.$dom_shareList.add(t),customClassName:"c-share-popup-modal",onOpen:e.onOpen||function(){},onClose:e.onClose||function(){}}),o.sharePopup.$popupContent.css({"max-width":o._horizontalHack()+"px"}),t.on("click",function(){o.sharePopup.closePopup(),o._sendLog("close")})})},close:function(){var n=this;n.sharePopup&&n.sharePopup.closePopup()},_horizontalHack:function(){var n;return void 0!=window.orientation?0==window.orientation||180==window.orientation?n=Math.min(window.screen.width,$(window).width()):(90==window.orientation||-90==window.orientation)&&(n=Math.min(window.screen.width,window.screen.height),n=n*$(window).width()/Math.max(window.screen.width,window.screen.height)):n=Math.min(window.screen.width,window.screen.height),n},constructor:S},S}),define("extensions/mip-share/0.1/share",["require","extensions/mip-share/0.1/share/share"],function(n){function e(n,e){n=$.extend({},t,n);var i=new o(n);i.render(e,{onRender:function(){}}),this.share=i}var o=n("extensions/mip-share/0.1/share/share");o.prototype._sendLog=function(n){var e=this,o={pyq:{ct:40,cst:2},wxfriend:{ct:40,cst:1},qqfriend:{ct:40,cst:5},qzone:{ct:40,cst:3},sinaweibo:{ct:40,cst:4},more:{ct:40,cst:9},close:{ct:40,cst:0}};if(n&&o[n]){var t=o[n];e.opt&&"object"==typeof e.opt.loginfo&&(t=$.extend(t,e.opt.loginfo))}};var t={iconUrl:"//m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg"};return e.headTpl='<div class="share-head"><p><span>分享到</span></p></div>',e}),define("extensions/mip-share/0.1/mip-share",["require","customElement","extensions/mip-share/0.1/share"],function(n){function e(){if(!this.isRender){this.isRender=!0,this.getAttribute("nohead")||$(this).prepend(t.headTpl);var n=$('<div class="c-share-content"></div>');$(this).append(n),new t({title:this.getAttribute("title")||document.title,url:this.getAttribute("url")||location.href,content:this.getAttribute("content")||"",iconUrl:this.getAttribute("icon")||""},n)}}var o=n("customElement"),t=n("extensions/mip-share/0.1/share");return o.prototype.init=function(){this.build=e},o}),require(["extensions/mip-share/0.1/mip-share"],function(n){MIP.css.mipShare="mip-share .share-head{font-size:13px;color:#999;background:#f5f5f5;overflow:hidden}mip-share .share-head p{box-sizing:border-box;position:relative;text-align:center;margin:17px 17px 0}mip-share .share-head p::before{content:'';border-bottom:1px solid #ddd;width:38%;position:absolute;top:50%;left:0}mip-share .share-head p::after{content:'';border-bottom:1px solid #ddd;width:38%;position:absolute;top:50%;right:0}",MIP.registerMipElement("mip-share",n,MIP.css.mipShare)});
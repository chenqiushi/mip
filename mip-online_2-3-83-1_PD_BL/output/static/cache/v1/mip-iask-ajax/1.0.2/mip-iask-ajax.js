define("mip-iask-ajax/mip-iask-ajax",["require","zepto","customElement"],function(t){var e=t("zepto"),i=t("customElement").create(),n=function(t,i,n,o,s){var a=e.parseJSON(i);if(n){var l="https://mipp.iask.cn/checkLogin?mip="+Math.random();e.get(l,function(e){if(null===e||"null"===e){var i=window.location.href;window.location.href="https://mipp.iask.cn/login?source="+i}else r(t,a,o,s)})}else r(t,a,o,s)},r=function(t,i,n,r){e.post(t,i,function(t){var i=e.parseJSON(t);if("1"===r)if("Y"===i.succ&&"1"===i.jsonData){var o=e(n);o.text(parseInt(o.text(),0)+1)}})};return i.prototype.build=function(){var t=this.element,i=e(t).attr("url"),r=e(t).attr("data"),o=e(t).attr("isLogin"),s=e(t).attr("click"),a=e(t).attr("type"),l=e(t).attr("div");e(s).on("click",function(){n(i,r,o,l,a)})},i}),define("mip-iask-ajax",["mip-iask-ajax/mip-iask-ajax"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-iask-ajax",e)}if(window.MIP)require(["mip-iask-ajax"],function(e){t(window.MIP,e)});else require(["mip","mip-iask-ajax"],t)}();
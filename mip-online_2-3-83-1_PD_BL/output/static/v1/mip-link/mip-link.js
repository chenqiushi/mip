define("mip-link/mip-link",["require","zepto","customElement"],function(t){function e(){var t=document.querySelector('meta[property="mip:use_cache"]');if(t&&"no"===t.getAttribute("content"))return!0;else return!1}function i(t){t.preventDefault();var i=this.getAttribute("href"),o=e()?2:1;if(i)if(window.parent!==window){var r=n(this),s={event:"loadiframe",data:{url:i,title:r.attr("title")||r.text().trim().split("\n")[0],click:r.data("click"),pageType:o}};window.parent.postMessage(s,"*")}else location.href=i}var n=t("zepto"),o=t("customElement").create();return o.prototype.build=function(){var t=this.element;n(t).on("click",i.bind(t))},o}),define("mip-link",["mip-link/mip-link"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-link",e)}if(window.MIP)require(["mip-link"],function(e){t(window.MIP,e)});else require(["mip","mip-link"],t)}();
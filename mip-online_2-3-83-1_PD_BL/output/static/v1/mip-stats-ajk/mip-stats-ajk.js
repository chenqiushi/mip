define("mip-stats-ajk/mip-stats-ajk",["require","customElement"],function(t){var e=t("customElement").create();return e.prototype.build=function(){var t=this.element,e=t.getAttribute("pg-name"),i=t.getAttribute("city-alias"),n=window.APF=window.APF||{},o=n.info=n.info||{};e&&(o.pageName=e),i&&(o.cityAlias=i);var r=t.getAttribute("src"),s=document.createElement("script");s.src=r,document.getElementsByTagName("body")[0].appendChild(s)},e}),define("mip-stats-ajk",["mip-stats-ajk/mip-stats-ajk"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-stats-ajk",e)}if(window.MIP)require(["mip-stats-ajk"],function(e){t(window.MIP,e)});else require(["mip","mip-stats-ajk"],t)}();
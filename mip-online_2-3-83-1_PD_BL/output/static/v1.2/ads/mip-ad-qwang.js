define("extensions/ads/1.2/mip-ad-qwang",["require"],function(){function e(e,n){var i=e.getAttribute("cpro_psid"),r=e.getAttribute("cpro_pswidth")||"auto",d=e.getAttribute("cpro_psheight")||"230",p=['var cpro_psid ="'+i+'";','var cpro_pswidth ="'+r+'";','var cpro_psheight="'+d+'";'].join(""),c=document.createElement("script");c.innerHTML=p;var o=document.createElement("div");o.appendChild(c),e.appendChild(o),t(o,n)}function t(e,t){var n=document.getElementById("MIP_WEBADVISE_JS");if(!n){var i=document.createElement("script");i.src="//su.bdimg.com/static/dspui/js/um.js",i.id="WEBADVISEJS",document.body.appendChild(i),i.onload=function(){t.applyFillContent(e,!0)}}}return{render:e}});
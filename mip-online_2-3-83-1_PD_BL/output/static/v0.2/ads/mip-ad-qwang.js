define("extensions/ads/0.2/mip-ad-qwang",["require"],function(){function t(t){var r=t.getAttribute("cpro_psid"),i=t.getAttribute("cpro_pswidth")||"auto",n=t.getAttribute("cpro_psheight")||"230",d='var cpro_psid = "'+r+'" ;var cpro_pswidth = "'+i+'";var cpro_psheight="'+n+'";',c=document.createElement("script");c.innerHTML=d,t.appendChild(c),e()}function e(){var t=document.getElementById("MIP_WEBADVISE_JS");if(!t){var e=document.createElement("script");e.src="//su.bdimg.com/static/dspui/js/um.js",e.id="WEBADVISEJS",document.body.appendChild(e)}}return{render:t}});
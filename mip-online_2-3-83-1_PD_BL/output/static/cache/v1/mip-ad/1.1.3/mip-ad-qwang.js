define("mip-ad/mip-ad-qwang",["require"],function(e){function t(e,t){var n=e.getAttribute("cpro_psid"),i=e.getAttribute("cpro_pswidth")||"auto",a=e.getAttribute("cpro_psheight")||"230",r=['var cpro_psid ="'+n+'";','var cpro_pswidth ="'+i+'";','var cpro_psheight="'+a+'";'].join(""),d=document.createElement("script");d.innerHTML=r;var c=document.createElement("div");c.appendChild(d),e.appendChild(c),o(c,t)}function o(e,t){var o;if(o=n("MIP_ADQW_EMBED","//su.bdimg.com/static/dspui/js/um_mip.js"))e.appendChild(o),o.onload=function(){t.applyFillContent(e,!0)}}function n(e,t){var o=document.createElement("script");return o.src=t,o.id=e,o}return{render:t}});
define("extensions/ads/0.3/mip-ad-baidu",["require"],function(){function i(){var i=document.getElementById("MIP_DUP_JS");if(!i){var d=document.createElement("script");d.src="//dup.baidustatic.com/js/dm.js",d.id="MIP_DUP_JS",document.body.appendChild(d)}}function d(i,d){var n="_"+Math.random().toString(36).slice(2),t='<div style="" id="'+n+'"></div>';i.append(t),(window.slotbydup=window.slotbydup||[]).push({id:d,container:n,display:"inlay-fix",async:!0})}var n=function(n){var t=$(n),e=n.getAttribute("cproid");e&&(i(),d(t,e))};return{render:n}});
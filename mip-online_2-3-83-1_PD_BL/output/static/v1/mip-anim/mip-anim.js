define("mip-anim/mip-anim",["require","zepto","customElement"],function(e){function t(){var e=this.element,t=this;if(!e.isRender)e.isRender=!0,o(e).find("mip-img").map(function(e,i){if("mip-img"==i.tagName.toLocaleLowerCase())t.applyFillContent(i,!0)}),i.call(e)}function i(){var e=this,t=o(e).find("mip-img").length,i=e.getAttribute("src"),a=e.getAttribute("alt")||"";if(0!==t){var r=n({src:i,alt:a});r.then(function(t){o(e).find("mip-img").css("display","none"),o(e).append(t)})}else{var d='<img src="'+i+'" alt="'+a+'""></img>';o(e).append(d)}}function n(e){var t=new Promise(function(t,i){var n=document.createElement("img");n.src=e.src,n.alt=e.alt,n.style.cssText="position: absolute;top: 0px;left: 0px",n.onload=function(){t(n)}});return t}var o=e("zepto"),a=e("customElement").create();return a.prototype.build=t,a}),define("mip-anim",["mip-anim/mip-anim"],function(e){return e}),function(){function e(e,t){e.registerMipElement("mip-anim",t)}if(window.MIP)require(["mip-anim"],function(t){e(window.MIP,t)});else require(["mip","mip-anim"],e)}();
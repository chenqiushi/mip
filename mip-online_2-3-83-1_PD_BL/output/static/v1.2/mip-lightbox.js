define("mip-lightbox/mip-lightbox",["require","customElement","components/fixedElement","util"],function(t){function e(){var t=this;t.open=!1,t.id_=this.element.id,u.css(t.element,{position:"fixed","z-index":10001,top:0,right:0,left:0,transition:"opacity 0.1s ease-in"}),i.call(t),t.addEventAction("close",function(){r.call(t,event)}),t.addEventAction("open",function(){n.call(t,event)})}function i(){var t=this,e=[],i=0;const n=t.element.childNodes;for(i=0;i<n.length;i++)if(1==n[i].nodeType)e.push(n[i]);for(t.container_=document.createElement("div"),t.applyFillContent(t.container_),t.element.appendChild(t.container_),i=0;i<e.length;i++)t.container_.appendChild(e[i])}function n(t){var e=this;if(!e.open)l.hideFixedLayer(l._fixedLayer),t.preventDefault(),new c(e.element,{preventY:!0}),e.open=!0,u.css(e.element,{display:"block"}),o.call(e)}function r(t){var e=this;if(e.open)l.showFixedLayer(l._fixedLayer),t.preventDefault(),e.open=!1,a.call(e),u.css(e.element,{display:"none"}),u.css(document.body,{overflow:"auto"})}function o(){var t=this;if(!t.maskElement){const e=document.createElement("div");e.id="MIP-LLIGTBOX-MASK",e.setAttribute("on","tap:"+t.id_+".close"),e.style.display="block",t.element.parentNode.appendChild(e),e.addEventListener("touchmove",function(t){t.preventDefault()},!1),t.maskElement=e}u.css(t.maskElement,{display:"block"})}function a(){if(this.maskElement)u.css(this.maskElement,{display:"none"})}var s=t("customElement").create(),l=t("components/fixedElement"),u=t("util"),c=u.Gesture;return s.prototype.build=e,s}),define("mip-lightbox",["mip-lightbox/mip-lightbox"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-lightbox",e,"mip-lightbox{color:#fff}#btn-open{border:1px solid #f1f1f1;border-radius:5px;padding:10px 20px;margin:20px auto;width:90%;font-size:14px;background:#fff}mip-lightbox a{color:#fff !important}#MIP-LLIGTBOX-MASK{position:fixed !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;background-image:none !important;background:rgba(0,0,0,0.8);z-index:10000 !important;display:none}")}if(window.MIP)require(["mip-lightbox"],function(e){t(window.MIP,e)});else require(["mip","mip-lightbox"],t)}();
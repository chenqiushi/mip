define("mip-lightbox/mip-lightbox",["require","customElement","fixed-element","util"],function(t){function e(){var t=this;t.open=!1,t.id=this.element.id,d.css(t.element,{position:"fixed","z-index":10001,top:0,right:0,left:0,bottom:0,transition:"opacity 0.1s ease-in"}),i.call(t),t.addEventAction("close",function(e){o.call(t,e)}),t.addEventAction("open",function(e){r.call(t,e)}),t.addEventAction("toggle",function(e){n.call(t,e)})}function i(){var t=this,e=[],i=0;const n=t.element.childNodes;for(i=0;i<n.length;i++)if(1===n[i].nodeType)e.push(n[i]);for(t.container=document.createElement("div"),t.applyFillContent(t.container),t.element.appendChild(t.container),i=0;i<e.length;i++)t.container.appendChild(e[i])}function n(t){a.call(this)?o.call(this,t):r.call(this,t)}function r(t){var e=this;if(!e.open)c.hideFixedLayer(c._fixedLayer),t.preventDefault(),new f(e.element,{preventY:!0}),e.open=!0,d.css(e.element,{display:"block"}),s.call(e)}function o(t){var e=this;if(e.open)c.showFixedLayer(c._fixedLayer),t.preventDefault(),e.open=!1,l.call(e),d.css(e.element,{display:"none"}),d.css(document.body,{overflow:"auto"})}function a(){return this.open}function s(){var t=this;if(!t.maskElement){const e=document.createElement("div");e.id="MIP-LLIGTBOX-MASK",e.setAttribute("on","tap:"+t.id+".close"),e.style.display="block",t.element.parentNode.appendChild(e),e.addEventListener("touchmove",function(t){t.preventDefault()},!1),t.maskElement=e}d.css(t.maskElement,{display:"block"})}function l(){if(this.maskElement)d.css(this.maskElement,{display:"none"})}var u=t("customElement").create(),c=t("fixed-element"),d=t("util"),f=d.Gesture;return u.prototype.build=e,u}),define("mip-lightbox",["mip-lightbox/mip-lightbox"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-lightbox",e,"mip-lightbox{color:#fff}mip-lightbox a{color:#fff !important}#MIP-LLIGTBOX-MASK{position:fixed !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;background-image:none !important;background:rgba(0,0,0,0.8);z-index:10000 !important;display:none}")}if(window.MIP)require(["mip-lightbox"],function(e){t(window.MIP,e)});else require(["mip","mip-lightbox"],t)}();
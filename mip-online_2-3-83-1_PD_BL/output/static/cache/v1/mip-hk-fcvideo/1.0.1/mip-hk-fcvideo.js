define("mip-hk-fcvideo/mip-hk-fcvideo",["require","zepto","customElement"],function(t){function e(){var t=(this.element,i("#J_d_title").find("video"));if("undefined"!=typeof t)t[0].addEventListener("timeupdate",function(){var e=t[0].duration,n=30;if(e<60)n=Math.round(.5*e);if(t[0].currentTime>n)t[0].pause(),t.hide(),i("#J_video_fc_dl").show()},!1)}var i=t("zepto"),n=t("customElement").create();return n.prototype.build=e,n}),define("mip-hk-fcvideo",["mip-hk-fcvideo/mip-hk-fcvideo"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-hk-fcvideo",e)}if(window.MIP)require(["mip-hk-fcvideo"],function(e){t(window.MIP,e)});else require(["mip","mip-hk-fcvideo"],t)}();
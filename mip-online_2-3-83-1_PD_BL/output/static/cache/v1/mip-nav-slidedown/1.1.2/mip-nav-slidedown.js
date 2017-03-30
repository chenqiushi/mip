define("mip-nav-slidedown/mip-nav-slidedown",["require","customElement","zepto"],function(t){function e(){var t=this.element;i(t),n(t),s(t)}function i(t){var e=l(t),i=e.data("id"),n="0"!==e.data("showbrand"),o=e.data("brandhref")||"#",r=e.find("#"+i),s=l("<div></div>"),a='<div class="navbar-header"><button class="navbar-toggle collapsed" type="button" data-target="#'+i+'" aria-controls="'+i+'" aria-expanded="false"><span class="sr-only">导航</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>'+(n?"<a href="+o+' class="navbar-brand"></a>':"")+"</div>";s.append(a).append(r).appendTo(e),l(".mip-nav-wrapper").addClass("show")}function n(t){var e=l("body").attr("class");l("#bs-navbar").find("."+e).addClass("active"),l(document).on("click",".navbar-header .navbar-toggle",o),l("#bs-navbar .navbar-nav li").on("click",function(){l(".navbar-header .navbar-toggle").trigger("click")}),r(l("#navbar-wise-close-btn")),l("#navbar-wise-close-btn").on("touchend",function(t){l(".navbar-header .navbar-toggle").trigger("click"),t.preventDefault(),t.stopPropagation()}).on("click",function(){l(".navbar-header .navbar-toggle").trigger("click")})}function o(t){function e(t){if("open"===t)i.addClass("in");if("resize"===t&&i.hasClass("in")||"open"===t)if(i.height(window.innerHeight-l(".navbar-header").height()),n=window.innerHeight-50-4*(l(".navbar-right .index-body").height()+20)-90,n>20)l(".navbar-wise-close").css("margin-top",n+"px");else l(".navbar-wise-close").css("margin-top","20px")}if(!(window.innerWidth>767)){var i=l("#bs-navbar");if(i.hasClass("in"))i.height("0px"),l("body").css("overflow","scroll"),l(".navbar-wise-close").css("margin-top","20px"),l(window).off("orientationchange"),l("html").add(l("body")).removeClass("noscroll"),setTimeout(function(){i.removeClass("in")},500);else{var n=20;i=l("#bs-navbar"),l("html").add(l("body")).addClass("noscroll"),e("open"),l(window).on("orientationchange",function(){window.setTimeout(function(){e("resize")},100)}).on("resize",function(){e("resize")})}}}function r(t){t.on("touchstart",function(){l(this).addClass("down")}).on("mousedown",function(){l(this).addClass("down")}).on("touchend",function(){l(this).removeClass("down")}).on("mouseup",function(){l(this).removeClass("down")})}function s(t){var e=l(t);e.removeAttr("style")}var a=t("customElement").create(),l=t("zepto");return a.prototype.build=e,a}),define("mip-nav-slidedown",["mip-nav-slidedown/mip-nav-slidedown"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-nav-slidedown",e,".mip-nav-wrapper{height:72px}.mip-nav-wrapper.show{opacity:1 !important}.mip-nav-wrapper .hr-xs{display:none}.mip-nav-wrapper #bs-navbar{margin-bottom:0;margin-right:0;float:right}.mip-nav-wrapper #bs-navbar .navbar-nav{display:-ms-flexbox;display:flex;margin-top:10px;margin-right:-25px}.mip-nav-wrapper #bs-navbar .navbar-nav li{list-style:none;line-height:50px}.mip-nav-wrapper #bs-navbar .navbar-nav li.active a,.mip-nav-wrapper #bs-navbar .navbar-nav li.active mip-link{color:black;font-weight:bold}.mip-nav-wrapper #bs-navbar .navbar-nav mip-link,.mip-nav-wrapper #bs-navbar .navbar-nav a{margin:15px;padding:10px}.mip-nav-wrapper #bs-navbar .navbar-nav mip-link:hover,.mip-nav-wrapper #bs-navbar .navbar-nav a:hover,.mip-nav-wrapper #bs-navbar .navbar-nav mip-link:focus,.mip-nav-wrapper #bs-navbar .navbar-nav a:focus{text-decoration:none;background:transparent;color:black}.mip-nav-wrapper .navbar-wise-close{display:none}.mip-nav-wrapper .navbar-brand{float:none;display:inline-block;margin:15px 0 10px;width:81px;height:41px;background-size:100% auto;position:absolute}.mip-nav-wrapper .navbar-brand:hover,.mip-nav-wrapper .navbar-brand:active{color:rgba(255,255,255,0.85)}.mip-nav-wrapper .navbar-header{float:left}.mip-nav-wrapper .navbar-toggle{display:none}@media screen and (max-width:767px){.mip-nav-wrapper{height:44px}.mip-nav-wrapper #bs-navbar{height:0;transition:height .3s;margin-top:44px;width:100%;left:0;overflow-y:scroll;z-index:1000;border:0;float:none;position:absolute;background-color:white}.mip-nav-wrapper #bs-navbar .navbar-nav{margin:0;min-height:283px;height:100%;-ms-flex-direction:column;flex-direction:column}.mip-nav-wrapper #bs-navbar .navbar-nav li{padding:5px 0}.mip-nav-wrapper #bs-navbar .navbar-nav a,.mip-nav-wrapper #bs-navbar .navbar-nav mip-link{text-align:center;color:#333;font-size:18px;padding:0;margin:0;display:block}.mip-nav-wrapper .navbar-header{float:none}.mip-nav-wrapper .container>.navbar-collapse{padding:0;background-color:white}.mip-nav-wrapper .navbar-static-top .navbar-brand{left:50%;margin-left:-30px}.mip-nav-wrapper .navbar-static-top a{margin:0}.mip-nav-wrapper .navbar-brand{margin:5px 0 0;width:68px;height:33px}.mip-nav-wrapper .navbar-toggle{display:block;margin:9px 0;padding:5px;border:0;background:transparent;float:right}.mip-nav-wrapper .navbar-toggle .icon-bar{background-color:white;height:2px;width:23px;background:#999;display:block}.mip-nav-wrapper .navbar-toggle .icon-bar+.icon-bar{margin-top:6px}.mip-nav-wrapper .hr-xs{display:block !important;border-color:#eee;margin:0 10px;border-top:0}.mip-nav-wrapper .navbar-wise-close{display:block;text-align:center;margin:20px 0}.mip-nav-wrapper #navbar-wise-close-btn{width:40px;height:40px;border-radius:50%;border:1px solid #d4d4d4;display:inline-block;position:relative}.mip-nav-wrapper #navbar-wise-close-btn:before{content:'';width:1px;height:25px;display:inline-block;position:absolute;background:#d4d4d4;transform:rotate(45deg);-webkit-transform:rotate(45deg);top:7px}.mip-nav-wrapper #navbar-wise-close-btn:after{content:'';width:1px;height:25px;display:inline-block;position:absolute;background:#d4d4d4;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);top:7px}.mip-nav-wrapper #navbar-wise-close-btn.down{background:#f3f3f3}.mip-nav-wrapper .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}}")}if(window.MIP)require(["mip-nav-slidedown"],function(e){t(window.MIP,e)});else require(["mip","mip-nav-slidedown"],t)}();
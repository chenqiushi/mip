define("extensions/mip-ifeng-pptdetail/1.2/mip-ifeng-pptdetail",["require","pptIfeng","gloableSettingsIfeng","customElement","zepto","zepto","customElement"],function(t,e,i){function n(t,e){var i=window.location.href,n=i.split("imgnum=")[0];if(history.replaceState(null,"url",n+"imgnum="+t),"function"==typeof sendStaRequestByJs){var s=window.location.href,o=null,a=i||document.referrer||"",r=s.split("#"),p=r[0]+(location.search?"&":r[0].indexOf("?")>-1?"":"?"),h=[p+"srctag=zbs_slide_tj1#imgnum="+t,p+"srctag=zbs_slide_tj2#imgnum="+t];o=t===e?h[1]:s,sendStaRequestByJs({imgnum:t,ref:a,url:o})}}function s(t){c.show(),c.removeAttr("style"),t.page<t.pageTotal?(h.height(172),g.html(t.page),u.eq(t.page-1).show().siblings().hide(),d.removeClass("js-hide"),f.show()):(c.hide(),d.addClass("js-hide"),f.hide(),r(".picsTit").removeClass("js-title-top"),c.removeClass("js-summary-top"),l.removeClass("picPageOnly"),h.height(0)),n(t.page,t.pageTotal)}function o(t){function e(e){var i=e.touches[0];a=i.pageY,o=t[0].clientHeight,t.css("transition","none"),t.css("-webkit-transition","none")}function i(e){var i=e.touches[0];r=i.pageY-a,0>r?t[0].style.webkitTransform=p+r>123-o&&0>p+r?"translateY("+(p+r)+"px)":"translateY("+(123-o)+"px)":r>0&&n("translateY(0px)")}function n(e){t[0].style.webkitTransition="transform 0.2s",t[0].style.webkitTransform=e,setTimeout(function(){t[0].style.webkitTransform="none"},200),r=0,p=0}function s(t){t.touches[0];p+=r}var o,a=0,r=0,p=0;t.on("touchstart",function(t){return e(t),!1}),t.on("touchmove",function(t){return i(t),!1}),t.on("touchend",function(t){return s(t),!1})}function a(){var t=/MicroMessenger/.test(navigator.userAgent);if(!t){var e=r("#black2 .c-share-list");e.addClass("js-share"),e.find(".c-share-btn").each(function(t,e){0!==t&&1!==t&&r(e).remove()})}f.on("touchend",function(){m.show()}),m.on("touchend",function(t){r(t.target).closest(".c-span3").length||r(this).hide()})}var r=t("zepto"),p=t("customElement").create(),h=r(".picTxtBox"),c=r(".picsBox .picTxt"),l=c.find(".picPage"),g=l.find("#DB_current"),u=c.find("ul li"),f=r(".picsShare"),m=r("#black2"),d=r(".bomBox");window.location.hash="imgnum=1";var w=!!i.nextDataId,v=!!i.preDataId;return p.prototype.build=function(){{var t=(this.element,1);new e({direction:"horizontal",loop:!1,width:0,height:0,id:"picsBox",followMove:!0,auto:!1,intervalTime:5,onTouchStart:function(t){if(t.page<t.pageTotal-1){var e=t.swipers[t.page],i=r(e).find("mip-img")[0];"mip-img"===i.tagName.toLocaleLowerCase()&&MIP.prerenderElement(i)}else for(var e=t.swipers[t.pageTotal-1],n=r(e).find("mip-img"),s=0,o=n.length;o>s;s++){var i=n.eq(s)[0];"mip-img"===i.tagName.toLocaleLowerCase()&&MIP.prerenderElement(i)}},onTouchMove:function(){},onTouchEnd:function(e){e.tap||t!==e.pageTotal||e.page!==e.pageTotal?e.tap||1!==t||1!==e.page||(location.href=v?i.suffixUrl+i.preDataId+"/news.shtml":"/"):location.href=w?i.suffixUrl+i.nextDataId+"/news.shtml?srctag=zbs_slide_next":"/",e.tap||s(e),t=e.page},onTap:function(t){t.page<t.pageTotal&&(r(".picsTit").toggleClass("js-title-top"),c.toggleClass("js-summary-top"),l.toggleClass("picPageOnly"))}})}o(c),a()},p}),define("gloableSettingsIfeng",["require","zepto"],function(t){var e=t("zepto"),i=e("mip-ifeng-sta"),n=i.find('script[type="application/json"]'),s=e.trim(n.eq(0).html());return s=JSON.parse(s)}),define("pptIfeng",["require","zepto"],function(t){var e,i,n,s,o,a,r,p,h=t("zepto"),c=function(t){this.canMove=!0,this.page=1,this.pageTotal=0,this.timer=null,this.play=!1,this.intervalTime=t.intervalTime?1e3*parseInt(t.intervalTime,10):5e3,this.initData(t),this.initDom(t),this.initEvent(t),this.lockSwiper=function(){this.canMove=!1},this.unlockSwiper=function(){this.canMove=!0};p&&(this.play=!0,this.playAuto(t)),this.tap=!0};return c.prototype={initData:function(t){e=t.loop,p=t.auto,i=e?this.page:this.page-1,n="vertical"===t.direction?!0:!1,this.x=0,this.y=0,s=n?t.height||h(window).height():0,o=n?0:t.width||h(window).width();var c=function(){for(var t,e=document.documentElement.style,i=["webkitT","MozT","msT","OT","t"],n=0,s=i.length;s>n;n++)if(t=i[n]+"ransform",t in e)return i[n].substr(0,i[n].length-1);return!1}();r="transform",a="transitionend",c&&(r="-"+c+"-"+r,a=c+"TransitionEnd")},initDom:function(t){this.contain=h("#"+t.id),this.swipers=this.contain.find(".swiper-slide"),this.swiperBox=this.contain.find(".swiper-wrapper"),this.pageTotal=this.swipers.length,n?(this.swipers.height(this.height),this.contain.height(this.height)):(this.swipers.width(this.width),this.contain.width(this.width)),e&&(this.swipers.eq(0).clone(!0).appendTo(this.swiperBox),this.swipers.eq(this.pageTotal-1).clone(!0).insertBefore(this.swipers.eq(0)),n?this.swiperBox.css(r,this.setLocation(0,-i*s)):this.swiperBox.css(r,this.setLocation(-i*o,0)))},initEvent:function(t){var a,p,c=this,l=t.onTouchStart,g=t.onTouchMove,u=t.onTouchEnd,f=t.onTap,m=t.followMove;this.swipers.on("touchstart",function(){c.tap=!0,c.play=!1,l&&l(c,this),c.canMove&&c.touchStart(),h(event.target).closest(".swiper-no-swiping").length&&(c.canMove=!1)}),this.swipers.on("touchmove",function(){if(c.tap=!1,c.canMove){g&&g(c);var t=c.touchMove();if(a=t.x,p=t.y,n?a=0:p=0,m&&(c.swiperBox.css(r,c.setLocation(-i*o+a,-i*s+p)),e||(c.page+1>c.pageTotal||c.page-1===0)&&c.swiperBox.css(r,c.setLocation(-i*o,-i*s))),!h(event.target).closest(".swiper-no-swiping").length){if(n&&Math.abs(p)>10)return!1;if(!n&&Math.abs(a)>10)return!1}}}),this.swipers.on("touchend",function(){c.canMove&&(m&&Math.abs(a)<=10&&Math.abs(p)<=10&&c.swiperBox.css(r,c.setLocation(i*o,i*s)),p>10||a>10?c.page=e?c.page-1<0?0:c.page-1:c.page-1<1?1:c.page-1:(-10>p||-10>a)&&(c.page=e?c.page+1>c.pageTotal+1?c.pageTotal+1:c.page+1:c.page+1>c.pageTotal?c.pageTotal:c.page+1),c.swiperMove(),u&&u(c),c.tap&&f&&f(c),c.x=c.y=a=p=0)})},touchStart:function(){var t=event.touches[0];this.x=t.pageX,this.y=t.pageY},touchMove:function(){var t=event.touches[0],e=t.pageX-this.x,i=t.pageY-this.y,n={x:e,y:i};return n},setLocation:function(t,e){return"WebKitCSSMatrix"in window?"translate3d("+t+"px, "+e+"px, 0)":"translate("+t+"px, "+e+"px)"},playAuto:function(){var t=this;this.play&&(this.timer=setInterval(function(){t.swiperBox.stop(!0,!0),t.page=t.page+1>t.pageTotal+1?t.pageTotal+1:t.page+1,t.swiperMove()},this.intervalTime))},swiperMove:function(){var t=this;t.swiperBox.addClass("js-anim"),i=e?t.page:t.page-1,t.swiperBox.css(r,t.setLocation(-i*o,-i*s)),t.swiperBox[0].addEventListener(a,function(){h(this).removeClass("js-anim"),e&&(t.page<1?t.page=t.pageTotal:t.page>t.pageTotal&&(t.page=1),i=t.page,t.swiperBox.css(r,t.setLocation(-i*o,-i*s)))})}},c}),require(["extensions/mip-ifeng-pptdetail/1.2/mip-ifeng-pptdetail"],function(t){MIP.registerMipElement("mip-ifeng-pptdetail",t)});
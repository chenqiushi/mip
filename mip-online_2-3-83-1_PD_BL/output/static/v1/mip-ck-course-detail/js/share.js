define("mip-ck-course-detail/js/share",["require","zepto"],function(t){function e(){i=r("#share-layout-container"),n=i.find(".g-share"),r("#share").on("click",function(t){o.on("touchmove",a),n.addClass("v-hide"),i.show(),n.show();var e=n.height();n.height(0),n.removeClass("v-hide"),n.addClass("anim-slide"),n.height(e),s=!0}),i.on("click",".c-share-btn",function(t){if(o.off("touchmove",a),r(this).html())l()}),n.on(r.fx.transitionEnd,function(t){if(n.removeClass("anim-slide"),!s)i.hide();n.css("height","")}),i.on("click",function(t){var e=t.target,i=r(e).attr("data-close");if("1"===i)l()})}var i,n,r=t("zepto"),o=r(document),s=!1,a=function(t){t.preventDefault()},l=function(){var t=n.height();n.height(t),n.addClass("anim-slide"),n.height(0),s=!1};return e});
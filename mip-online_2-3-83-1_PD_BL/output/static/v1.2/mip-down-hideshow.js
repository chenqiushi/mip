define("extensions/mip-down-hideshow/1.2/mip-down-hideshow",["require","zepto","customElement"],function(e){function t(e,t){var i={event:"click",isFn:!0,text:null,fn:function(){}},o=n.extend({},i,t),s=!0,d=n(e).find(".hideshow-btn"),h=d.text();d.on(o.event,function(){1==s?n(this).html(o.text).addClass("active"):n(this).html(h).removeClass("active"),o.isFn&&o.fn(s),s=!s})}var n=e("zepto"),i=e("customElement").create();return i.prototype.build=function(){var e=this.element,i=n(e).attr("hsId");0==i?t(e,{fn:function(){n(".bdcs-search-form").show(),n(".xq-top .title ,#mcate em").remove(),n("#mcate").css("width","35px"),n(".xq-top").css("padding-right","51px")}}):1==i?t(e,{fn:function(){n(".xq-nav").fadeToggle(200)}}):2==i&&t(e,{text:"收起内容",fn:function(e){1==e?(n("#summary").hide(),n("#details").show()):(n("#summary").show(),n("#details").hide())}})},i}),require(["extensions/mip-down-hideshow/1.2/mip-down-hideshow"],function(e){MIP.registerMipElement("mip-down-hideshow",e)});
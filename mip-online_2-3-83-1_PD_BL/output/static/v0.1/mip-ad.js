require.config({paths:{"extensions/ads/0.1/mip-ad-comm":"https://mipcache.bdstatic.com/static/v0.1/ads/mip-ad-comm","extensions/ads/0.1/mip-ad-baidu":"https://mipcache.bdstatic.com/static/v0.1/ads/mip-ad-baidu"}}),define("extensions/ads/0.1/mip-ad",["require","customElement"],function(i){function e(){var e=this;if(!this.isRender){this.isRender=!0;var t=this.getAttribute("type"),o="extensions/ads/0.1/mip-"+t;i([o],function(i){i.render(e)})}}var t=i("customElement");return t.prototype.init=function(){this.build=e},t}),require(["extensions/ads/0.1/mip-ad"],function(i){MIP.css.mipAd=".mip-ad-row{width:auto;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:justify;-webkit-box-align:stretch;-webkit-box-lines:single;display:-webkit-flex;-webkit-flex-direction:row;-webkit-justify-content:space-between;-webkit-align-items:strecth;-webkit-align-content:flex-start;-webkit-flex-wrap:nowrap}.mip-ad-row{margin-right:-1.81818182%;margin-left:-1.81818182%}.mip-ad-row *{-webkit-box-sizing:border-box;box-sizing:border-box}.c-span1,.c-span2,.c-span3,.c-span4,.c-span5,.c-span6,.c-span7,.c-span8,.c-span9,.c-span10,.c-span11,.c-span12{position:relative;min-height:1px;padding-right:1.81818182%;padding-left:1.81818182%}.c-span1{width:8.33333333%;-webkit-box-flex:1;-webkit-flex:1 1 auto}.c-span2{width:16.66666667%;-webkit-box-flex:2;-webkit-flex:2 2 auto}.c-span3{width:25%;-webkit-box-flex:3;-webkit-flex:3 3 auto}.c-span4{width:33.33333333%;-webkit-box-flex:4;-webkit-flex:4 4 auto}.c-span5{width:41.66666667%;-webkit-box-flex:5;-webkit-flex:5 5 auto}.c-span6{width:50%;-webkit-box-flex:6;-webkit-flex:6 6 auto}.c-span7{width:58.33333333%;-webkit-box-flex:7;-webkit-flex:7 7 auto}.c-span8{width:66.66666667%;-webkit-box-flex:8;-webkit-flex:8 8 auto}.c-span9{width:75%;-webkit-box-flex:9;-webkit-flex:9 9 auto}.c-span10{width:83.33333333%;-webkit-box-flex:10;-webkit-flex:10 10 auto}.c-span11{width:91.66666667%;-webkit-box-flex:11;-webkit-flex:11 11 auto}.c-span12{width:100%;-webkit-box-flex:12;-webkit-flex:12 12 auto}.c-line-clamp1{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.c-line-clamp2{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;margin-bottom:4px;-webkit-line-clamp:2}.c-gap-bottom-small{margin-bottom:4px}.c-img{display:block;width:100%;border:0 none;background:#f7f7f7 url(//m.baidu.com/static/search/image_default.png) center center no-repeat;margin:4px 0}.c-img img{width:100%}.c-img-s,.c-img-l,.c-img-w,.c-img-x{height:0;overflow:hidden}.c-blocka{display:block}.c-title{font:18px/26px Arial,Helvetica,sans-serif}a{text-decoration:none;color:#333}.adv{margin:10px 0;font-size:13px;background-color:#fff}.mip-ad-bannerbox{position:relative;width:100%;overflow:hidden}.mip-ad-bannerbox img{position:absolute;left:0;top:0;width:100%}.mip-ad-box{padding:6px 21px;font-size:13px;line-height:22px}.mip-ad-box .mip-ad-row{text-align:justify;-webkit-box-align:center;-webkit-align-items:center}.mip-ad-imgbox{position:relative}.mip-ad-abs{position:absolute;right:0;bottom:0;left:0;line-height:20px;font-size:12px;text-align:center;background-color:rgba(0,0,0,.6);color:#fff}",MIP.registerMipElement("mip-ad",i,MIP.css.mipAd)});
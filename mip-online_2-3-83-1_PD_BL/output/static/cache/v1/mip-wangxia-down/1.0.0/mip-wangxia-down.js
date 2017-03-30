define("mip-wangxia-down/mip-wangxia-down",["require","customElement","zepto","util"],function(t){function e(){var t=0,e=navigator.userAgent.toLowerCase();if(e.indexOf("android")>-1)t=1;else if(a.isIos())t=2;return t}function i(t){var e=t;return e=e.replace(/\[\[/g,"<"),e=e.replace(/\]\]/g,">"),e=e.replace(/\|\|/g,"/"),e=e.replace(/\:\:/g,'"'),e=e.replace(/\;\;/g,"'"),e=e.replace(/\+\+/g," ")}function n(t,n,o){n.os=e(),n.ly=document.referrer,n.ua=navigator.userAgent,n.url=window.location.href,r.ajax({url:t,type:"get",data:n,dataType:"jsonp",error:function(){console.error("Mip-WangXia-Down","Ajax Err")},success:function(t){if(2e6!==t.state.code)return console.warn("Mip-WangXia-Down",t.state.msg),!1;if("undefined"==typeof t.data)return!1;var e=r(".topdown a").attr("href"),n="undefined"==typeof t.add?"":i(t.add),o=[n,'<div class="mip-wangxia-down"><div class="gs-top"><div class="gs-btn">','<em class="gs-ck"></em>'+t.info.downname+"<i></i></div>",'<a href="'+t.data.downloadUrl+'" class="gs-ds gsurl">',t.info.namea+"</a>",'<a href="'+e+'" class="gs-ds pturl" style="display:none;">',t.info.nameb+"</a>",'</div><div class="gs-tip"><em class="gs-ioc"></em>',"<span>"+t.info.texta+"</span>",'<span style="display:none;">'+t.info.textb+"</span>","</div></div>"];r(".topdown a").hide(),r(".appBox").append(o.join("")),r(".appBox").on("click",".mip-wangxia-down .gs-btn",function(){if(r(".mip-wangxia-down").hasClass("gs-down"))r(".topdown a").hide(),r(".mip-wangxia-down").removeClass("gs-down"),r(".mip-wangxia-down .gs-ds").hide().eq(0).show(),r(".mip-wangxia-down .gs-tip span").hide().eq(0).show();else{if(r(".mip-wangxia-down").addClass("gs-down"),r(".topdown a").length>1)r(".topdown a").show(),r(".mip-wangxia-down .gs-ds").hide();else r(".mip-wangxia-down .gs-ds").hide().eq(1).show();r(".mip-wangxia-down .gs-tip span").hide().eq(1).show()}}),r(".appBox").on("click",".mip-wangxia-down .gsurl",function(){var e=r(this);if(r(".mip-wangxia-down .gs-btn").click(),""!==t.info.tjurl){var i="undefined"==typeof t.info.tjsrc?"MIPGSDOWN":t.info.tjsrc;r.ajax({url:t.info.tjurl,type:"GET",dataType:"jsonp",data:{url:e.attr("href"),surl:window.location.href,src:i}})}})}})}var o=t("customElement").create(),r=t("zepto"),s=t("util"),a=s.platform;return o.prototype.build=function(){var t=this.element,e=r(t),i=e.attr("Qi-url")||"",o=e.attr("Qi-arr")||"";if(""===i&&""===o)return console.error("Mip-WangXia-Down","Config Err"),!1;try{var s=JSON.parse(o)}catch(t){return console.error("Mip-WangXia-Down","Array Err"),!1}if(r(".topdown a").length<1)return!1;else return void n(i,s,e)},o}),define("mip-wangxia-down",["mip-wangxia-down/mip-wangxia-down"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-wangxia-down",e,".mip-wangxia-down .gs-top{display:-webkit-box;display:-moz-box;display:box;padding:8px 0 5px 0;clear:both}.mip-wangxia-down .gs-top .gs-btn{display:block;height:34px;line-height:35px;font-size:16px;margin-right:30px}.mip-wangxia-down .gs-top.top_new .btn{margin:0 auto}.mip-wangxia-down .gs-top .gs-ck{display:inline-block;width:19px;height:20px;margin:7px 5px 0 0;float:left;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAArCAYAAACaebMMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVDNDE4NkRDMzlCQzExRTY4QTU2OEE0NjcyODlDMTAyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVDNDE4NkREMzlCQzExRTY4QTU2OEE0NjcyODlDMTAyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUM0MTg2REEzOUJDMTFFNjhBNTY4QTQ2NzI4OUMxMDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUM0MTg2REIzOUJDMTFFNjhBNTY4QTQ2NzI4OUMxMDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz44LGm/AAACCklEQVR42tyWO2tUQRTHfzP7unvZXcyyGGxMBF+FkEobW5tUi0UabfQDCH6BfIAUAcHKQm1EUGwWQVubVEJa0UYswjbZLGTd9+M6ZzZXL8mNbmavoDmw3Dszd3+cM+fM/4waj8dBo9Gg3W4zmUxwsWKxSKVSQdXr9UAmyuUy2Wz2xKDRaGQdSafT6E6nY6kuIDGBFAoFhsMhOpyYx1KpFEEQTGFJ2SmD1d7Bw+ewVT+UjBOD3sDmVxiYd+8z3Dzn6FkUtHgG7t1wDLNWg5cR0MZduOr/AfbkGdzahMcff829emtAX+Cb1JQfDzqyZ80OtHbhu4IXH2BvH6714fUn2FFT0NP78aAjsAXz0aUrsHTgxftt85OFGUCxYVarcOciFKLHxYNHa78HHZuA6m14cNl4eLBH66tw/ewMh/64BfFw2WTv/OI0/JkUJNSkOOVYuTAbxAgsSim07/u0Wi074WKizt1ul0wmgzKDQJRSvBNNcjERVnFKuQL+Lz1LmzADSUCv1/u5Z/KU7IQWjqPP0GScz+cplUqoZrNpV6TDuDQWyaY4Ik1F9/t920RdO5TWGs/zbDXosFXNtfFaJ5uAf7xvJnoCovU0j1nVOP13jURLI/k9S6o0bJhJlcbfyabr/T+qaTYBuVwOub67AuV/g8HA6qF0p0CUUvpmmIyoNMfJ9eF3AYlTPwQYAHaH2dBOEZ9CAAAAAElFTkSuQmCC);border-radius:4px}.mip-wangxia-down.gs-down .gs-top .gs-ck{background-position:0 -23px}.mip-wangxia-down .gs-top .gs-ds{display:block;-moz-box-flex:1;-webkit-box-flex:1;box-flex:1;height:30px;color:#fff;font-size:15px;border-radius:4px;background:#08961e;line-height:30px;text-align:center}.mip-wangxia-down .gs-tip{clear:both;margin-bottom:5px;font-size:13px;line-height:20px;min-height:40px;color:#57a505;background:#e5fbcf;padding:6px}.mip-wangxia-down .gs-tip .gs-ioc{display:block;margin:10px 5px 0 0;float:left;width:20px;height:20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABgklEQVQ4T62UTU7CUBSFzy19SelE3AGsgLIDGLRTWUITIXEmS5AVwNAEEuoKZFxMiiuQHYg7wMnTpLXXvPJj+QfLm7W9/XLOveddwoUPXZiHk4F3gVF8rH1Pjwk4ClSgn1B7Bviz53xVMwGbvrCYREBAAcyvmYBN33CZtE4CUycFvH0x68Qo923Z3lS803JjlG8RqLNWnAIq5SAxBuO958hKum4N2PBNj4AyCNZWr1JA1dcoQpGgBQy0+7Z8WNavgI2RUVUFe5u+AC7sDiJdlvTQ7IJw07fl9b+B6sfmyJwx+AHgiRKR0+PSMlJnK0yAvjlhwhCIx4krDis9J5yob2cDlWWN4eX02IoizSWg1bPlPAlpoHpYDMUCobxvKGrCsSaKWhxOQeKNGU99R7o7gcuXTT/fBdH9odgkgWd8hEJWvRpmB4HzPhkuSBusoJvBjlGPhGylYVuWN20uojQEcJX56v3ZFxYgPIBnme5yWq0boGDAKFxkfR1bVycth3Mh6fpfrYTCFbsFCxQAAAAASUVORK5CYII=)}.mip-wangxia-down.gs-down .gs-tip{background:#eee;color:#888}.mip-wangxia-down.gs-down .gs-tip .gs-ioc{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFYSURBVHjazJQxTsMwFIbfS9mplK0sFXCAHCEzUzfERJhxoOECcAKiEsNKOAHlBMAJWg6A1IkNqT1AY/6XFqnQJjFNByw5iWPn93vf+2M2xtAmm0ObbhKhTZS9O9220dmyEcoyekSfYOjXSjlOEi+b0oAMebUZQiwg4mc8Npfm9G0nTvSltSAWdyF2v0psBiwb4RrFWg9KBSGUzhfFpWk1eAz+HUGBb65WCl7faAF+XMVL0hWuO/vuEMMH9PNaPozUaR83/nj/DBBlKlgWLbWesZlGi3yzqWmuLSgpA0vbaVDKnPtyEoXhcEnw4ky95EyY3sp/LVSYOZhHJdbpFzKMQhVESnkQ7RUylGhy28Cj2Ly153YriwJRLDInxQwdKcJTa9f1Dw+Oxj+mvg8GBpDfTayE15LSNqJ5xUZ+2eFQWZQZV+NXcv2LD4WZpOY4FFg56t+f2F8CDADPK4sR57yiXAAAAABJRU5ErkJggg==)}")}if(window.MIP)require(["mip-wangxia-down"],function(e){t(window.MIP,e)});else require(["mip","mip-wangxia-down"],t)}();
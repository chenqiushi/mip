define("mip-fh-bus/bus-set-img-ad",["require","zepto"],function(t){var e=t("zepto"),i={};return i.loadScript=function(t,e){var i=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.src=t,n.onreadystatechange=e,n.onload=e,i.appendChild(n)},i.set=function(){var t=e('.FhwapContent mip-img[src^="http://sex."]');if(t.length){var i=document.write;document.write=function(e){t.after(e)},this.loadScript("http://1.feihua.com/au3a1ecf91ffc8f038db4c3e8da4f73ffa54acde0b36.js",function(){var t=setTimeout(function(){document.write=i,clearTimeout(t)},100)})}},i});
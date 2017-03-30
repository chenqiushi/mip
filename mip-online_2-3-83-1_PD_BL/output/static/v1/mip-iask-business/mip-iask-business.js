define("mip-iask-business/mip-iask-business",["require","zepto","customElement"],function(t){function e(t,e){var n=new Array(0),r=new Array(0),o=new Array(0);if(i.each(e,function(i){try{var s=e[i],a=s.qTags,l=s.mainTags,c=s.startTime,u=s.endTime,d="不限",f="不限";if(s.province)d=s.province;if(s.nprovince)f=s.nprovince;if("79"===t.qCid||"147"===t.bCid)if(w(t.nowTime,c,u)&&x(t.province,d,f)&&T(t.qTags,a,t.mainTags,l))for(var p=s.adPosition,h=p.split(","),m=0;m<h.length;m++){if("1"===h[m])n.push(s);if("2"===h[m])r.push(s);if("3"===h[m])o.push(s)}}catch(t){}}),n.length>0){var s=j(0,n.length-1);m(n[s],t)}if(r.length>0){var a=j(0,r.length-1);m(r[a],t)}if(o.length>0){var l=j(0,o.length-1);m(o[l],t)}}var i=t("zepto"),n=t("customElement").create(),r=function(t){var e="https://mipp.iask.cn/iplookup/search?format=json&callback=?";try{i.getJSON(e,function(e){t(e)})}catch(t){}},o=function(t,e){try{r(function(n){if(t.indexOf(n.province)===-1)i(e).remove()})}catch(t){}},s=function(t,e,n){try{if(i(t).length<=0)if("show"===n)i(e).show();else i(e).hide()}catch(t){}},a=function(){i(".mip_as_haoping_div").remove(),i(".mip_as_qita_div").remove(),i(".mip_as_lswt_div").remove(),i(".mip_as_xgzs_div").remove(),i(".mip_as_jrjd").remove(),i(".mip_dl_jrjd").remove(),i(".mip_as_tbtj").remove(),i(".mip_dl_tbtj").remove(),i(".mip_as_djgz").remove(),i(".mip_as_bottm_div").remove()},l=function(t,e,n){var r="";if("COOPERATE_HUASHENG"===t)r="HS";else if("COOPERATE_HUASHENG_QA"===t)r="HSQA";else if("COOPERATE_XINYUHENG"===t)r="XYH";if(""!==r){var o="https://mipp.iask.cn/t/wlsh?openCorporationId="+e+"&type="+r;i.get(o,function(t){var e=i.parseJSON(t);if("Y"===e.succ){var o=i.parseJSON(e.html),s=!0,a="",l="";if("XYH"===r)s=!1,a=c(o.pics[1].picLink,o.pics[1].picLocal);else{var u=o.pics[3]||"";a=c(u.picLink,u.picLocal);var f=o.companyName||"",p=o.drName||"",h=o.website||"",u=o.pics[0]||"";l=d(f,p,h,u.picLocal)}if(i(n).empty(),i(n).append(a),s)if(i(".qs_bar").length>0)i(".qs_bar").eq(0).empty(),i(".qs_bar").eq(0).append(l);else i(".mip_as_other_qiye_div").eq(0).empty(),i(".mip_as_other_qiye_div").eq(0).prev().prev().remove(),i(".mip_as_other_qiye_div").eq(0).append(l)}})}},c=function(t,e){var i="";return i+="<mip-fixed type='bottom' id='customid' >",i+="<div class='mip-adbd'>",i+="<div on='tap:customid.close' class='mip-adbd-close'><span>关闭</span></div>",i+="<a href="+t+" target='_blank'>",i+="<mip-img class='mip-img' src="+e+"></mip-img>",i+="</a>",i+="</div></mip-fixed>"},u=function(t,e,n){var r="https://imgv2-ssl.g3user.com/api/b.php?uid="+e+"&type=m&callback=?";try{i.getJSON(r,function(t){var e=c(t.m[0].link,t.m[0].pic);i(n).empty(),i(n).append(e)})}catch(t){}},d=function(t,e,i,n){var r="<div class='firms-con'>";return r+="<div class='firms-pic'>",r+="<mip-img class='mip-img' src="+n+"></mip-img>",r+="<span class='icon-v'></span>",r+="</div>",r+="<div class='firms-text'>",r+="<p><span class='name'>"+t+"</span><span class='time'> 16-09-05</span></p>",r+="<p>"+e+"</p>",r+="</div>",r+="<a href="+i+" target='_blank' class='btn-ask'>咨询专家</a>",r+="</div>",r+="</div>"},f=function(t,e){for(var n="https://mipp.iask.cn/mib/tag/",o=t.split(":"),s=0;s<o.length;s++)n+=o[s];try{var a="",l="";r(function(t){a=t.province,l=t.city}),i.get(n,function(t){var n=i.parseJSON(t);if(console.log(n),"Y"===n.succ){var r=e.split(":"),o=i.parseJSON(n.html),s=parseInt(r[0],0),c=parseInt(r[1],0),u=r[2],d=r[3],f=r[4],m=r[5],g=A(),y=r[6]||"79",v=r[7];if("undefined"!=typeof o){var b=p({mainTags:m,province:a,qCid:y,bCid:v,city:l,lenGood:s,lenother:c,commercialSource:d,qSourceType:u,qTags:f,nowTime:g});h(b,o)}}})}catch(t){}},p=function(t){var e={province:"",lenGood:0,lenother:0,commercialSource:"",qSourceType:""},n=i.extend(e,t);return n},h=function(t,n){if("COMMERCIAL_ZWZD"!==t.commercialSource&&"COOPERATE_SOUTHNETWORK"!==t.qSourceType&&"COOPERATE_XINYUHENG"!==t.qSourceType&&"COOPERATE_HUASHENG"!==t.qSourceType&&"COOPERATE_HUASHENG_QA"!==t.qSourceType)if(!t.city)return void e(t,n);else return void i.each(n,function(e){try{var i=n[e],r=i.qTags,o=i.mainTags,s=i.startTime,a=i.endTime,l="不限",c="不限",u="不限",d="不限";if(i.city)u=i.city;if(i.ncity)d=i.ncity;if(i.province)l=i.province;if(i.nprovince)c=i.nprovince;if("79"===t.qCid||"147"===t.bCid)if(w(t.nowTime,s,a)&&x(t.province,l,c)&&k(t.city,u,d)&&T(t.qTags,r,t.mainTags,o))m(i,t)}catch(t){}})},m=function(t,e){if(void 0!==t)for(var i=t.adPosition,n=i.split(","),r=0;r<n.length;r++)g(n[r],t,e)},g=function(t,e,i){try{if("1"===t)v(e,i);else if("2"===t)b(e,i);else if("3"===t)_(e,i)}catch(t){}},y=function(t,e,n){if(e.lenGood>=t){var r=i(".qs_bar").eq(t-1);r.removeClass(),r.empty(),r.append(n)}else{t=e.lenGood>0?t-1:t;var r=i(".mip_as_other_qiye_div").eq(t-1);r.removeClass(),r.empty(),r.prev().prev().remove(),r.append(n)}},v=function(t,e){y(1,e,d(t.hospitalName,t.contacts,t.url,t.logo))},b=function(t,e){y(2,e,d(t.hospitalName,t.contacts,t.url,t.logo))},_=function(t,e){i(".mip_as_bottm_div").empty(),i(".mip_as_bottm_div").append(c(t.url,t.mSuspensionImage))},w=function(t,e,i){if(e<=t&&t<i)return!0;else return!1},k=function(t,e,i){if(i.indexOf(t)!==-1)return!1;if("不限"===e)return!0;if(e.indexOf(t)!==-1)return!0;else return!1},x=function(t,e,i){if(i.indexOf(t)!==-1&&"不限"!==i)return!1;if("不限"===e)return!0;if(e.indexOf(t)!==-1)return!0;else return!1},T=function(t,e,i,n){if(e)for(var r=e.split(","),o=0;o<r.length;o++)if(t.indexOf(r[o])!==-1)return!0;if(n)for(var r=n.split(","),o=0;o<r.length;o++)if(i.indexOf(r[o])!==-1)return!0;return!1},j=function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,0);case 2:return parseInt(Math.random()*(e-t+1)+t,0);default:return 0}},A=function(){var t=new Date,e=t.getMonth()+1,i=t.getDate(),n=t.getHours(),r=t.getMinutes(),o=t.getSeconds();return t.getFullYear()+"-"+(e<10?"0"+e:e)+"-"+(i<10?"0"+i:i)+" "+(n<10?"0"+n:n)+":"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)};return n.prototype.build=function(){var t=this.element,e=i(t).attr("div"),n=i(t).attr("area"),r=i(t).attr("len"),c=i(t).attr("type"),d=i(t).attr("sources"),p=i(t).attr("openId"),h=i(t).attr("tags"),m=i(t).attr("params");if(r)s(r,e,c);if(n)o(n,e);if("COMMERCIAL_IAD"===d||"COMMERCIAL_ZWZD"===d||"COMMERCIAL_CAD"===d)a();if("COOPERATE_HUASHENG"===d||"COOPERATE_HUASHENG_QA"===d||"COOPERATE_XINYUHENG"===d)l(d,p,e);else if("COOPERATE_SOUTHNETWORK"===d)u(d,p,e);if(h)f(h,m)},n}),define("mip-iask-business",["mip-iask-business/mip-iask-business"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-iask-business",e)}if(window.MIP)require(["mip-iask-business"],function(e){t(window.MIP,e)});else require(["mip","mip-iask-business"],t)}();
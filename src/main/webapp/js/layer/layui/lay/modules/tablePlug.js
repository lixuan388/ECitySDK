/** layui-v2.4.5 MIT License By https://www.layui.com */
 ;layui.define(["table"],function(e){"use strict";function a(e,t,i){t=t||window,e=e.length?e.get(0):e;var l={};if(i&&t.top!==t.self){var n=t.frames.frameElement;l=a(n,t.parent,i)}var o=e.getBoundingClientRect();return{top:o.top+(l.top||0),left:o.left+(l.left||0)}}var t="1.0.0-beta8",i="tablePlug",l=layui.cache.modules[i]||"",n=l.substr(0,l.lastIndexOf("/"));layui.link(n+"/tablePlug.css?v"+t),layui.link(n+"/icon/iconfont.css?v"+t);var o=layui.$,r=layui.laytpl,c=layui.laypage,s=layui.layer,d=layui.form,u=(layui.util,layui.table),f=layui.hint();layui.device();if(!d.render.plugFlag){var p=d.render;d.render=function(e,a,t){var i,l=this;return t?layui.each(t,function(a,t){t=o(t);var n=t.parent(),r=n.hasClass("layui-form"),c=n.attr("lay-filter");r?"":n.addClass("layui-form"),c?"":n.attr("lay-filter","tablePlug_form_filter_temp_"+(new Date).getTime()+"_"+Math.floor(1e5*Math.random())),i=p.call(l,e,n.attr("lay-filter")),r?"":n.removeClass("layui-form"),c?"":n.attr("lay-filter",null)}):i=p.call(l,e,a),i},d.render.plugFlag=!0}layui.extend({optimizeSelectOption:"{/}"+n+"/optimizeSelectOption/optimizeSelectOption"}).use("optimizeSelectOption");var h,y="2.4.5",g=(function(){return layui.device().ie&&parseInt(layui.device().ie)<9&&console.warn("tablePlug插件暂时不支持ie9以下的ie浏览器，如果需要支持可自行调试，一般就是一些数组的方法ie8没有还有一个重要的就是window.parent这些支持不好，在getPosition的时候会死循环，如果有这方面相关的经验有处理方法请分享给俺，谢谢。"),!(!u.thisTable||!u.Class)||(console.error("如果要使用该插件（tablePlug），参照readme.md的说明修改layui的table模块的代码，目前该组件是基于layui-V"+y,"https://gitee.com/sun_zoro/layuiTablePlug"),!1)}(),{version:t}),m={},v="additional",b="removed",x="original",k="disabled",T="layui-table-fixed-scroll",C="layui-table-view",L=".layui-table-header",_=".layui-table-body",O=".layui-table-fixed",w=".layui-table-fixed-l",A=".layui-table-fixed-r",S="layui-none",D="layui-hide",B="layui-tablePlug-loading-p",P="layui-table-click",I="colGroup",N=["numbers","checkbox","radio"],j=['<span class="layui-table-filter layui-inline">','<span class="layui-tablePlug-icon layui-tablePlug-icon-filter"></span>',"</span>"],E=function(e){return u.thisTable.that[e]},F=function(){var e={};return{check:function(a){return!!e[a]},reset:function(a){e[a]?(this.set(a,v,[]),this.set(a,b,[])):(e[a]={},e[a][x]=[],e[a][v]=[],e[a][b]=[],e[a][k]=[])},init:function(e,a,t){this.reset(e);var i=[];i=a&&a.length&&"object"==typeof a[0]?W(e,a,t):a,this.set(e,x,i)},disabled:function(a,t){e[a]||this.reset(a),this.set(a,k,t)},checkDisabled:function(e,a){return this.get(e,k).indexOf(a)!==-1},getChecked:function(e){var a=this.get(e,b),t=this.get(e,x).concat(this.get(e,v)),i=[];return layui.each(t,function(e,t){a.indexOf(t)===-1&&i.indexOf(t)===-1&&i.push(t)}),i},get:function(a,t){return t===v||t===b||t===x||t===k?e[a]?e[a][t]||[]:[]:e[a]},set:function(a,t,i){t!==x&&t!==v&&t!==b&&t!==k||(e[a][t]=i&&M(i)?i:[])},update:function(a,t,i){var l=e[a][x],n=e[a][v],o=e[a][b];i?l.indexOf(t)===-1?n.indexOf(t)===-1&&n.push(t):o.indexOf(t)!==-1&&o.splice(o.indexOf(t),1):l.indexOf(t)===-1?n.indexOf(t)!==-1&&n.splice(n.indexOf(t),1):o.indexOf(t)===-1&&o.push(t)}}}(),M=function(e){return"[object Array]"===Object.prototype.toString.call(e)},R=function(e,a,t){if(e&&a&&(t=t||ae(a),t&&t.checkStatus))for(var i=F.getChecked(a),l=0;l<e.length;l++)e[l][u.config.checkName]=i.indexOf(e[l][le(t)])!==-1},H=function(e,a){var t;if("string"==typeof e?t=ae(e):(t=e.config,e=t?t.id:""),t){var i=t.elem.next();a&&(t.checkDisabled=t.checkDisabled||{},t.checkDisabled.enabled=t.checkDisabled.enabled||!0,t.checkDisabled.data=F.get(e,k)||[]),t.checkDisabled&&t.checkDisabled.enabled?layui.each(u.cache[e],function(a,l){i.find(".layui-table-body").find('tr[data-index="'+a+'"]').find('input[name="layTableCheckbox"]').prop("disabled",F.checkDisabled(e,l[le(t)]))}):F.set(e,k,[]),i.find('input[lay-filter="layTableAllChoose"]').prop("checked",u.checkStatus(e).isAll),d.render("checkbox",i.attr("lay-filter"))}};g.set=function(e){o.extend(!0,u.config,e||{})},g.set({pageLanguageText:{en:{jumpTo:"jump to",page:"page",go:"go",total:"total",unit:"",optionText:"limit each page"}}});var Y=u.Class.prototype.loading;u.Class.prototype.loading=function(e){var a=this;if(Y.call(a,e),!e&&a.layInit){a.layInit.remove(),a.layInit.addClass("layui-anim layui-anim-rotate layui-anim-loop"),a.layMain.height()||a.layBox.append(o('<div class="'+B+'" style="height: 56px;"></div>'));var t=0;a.layMain.height()-a.layMain.prop("clientHeight")>0&&(t=a.getScrollWidth());var i=a.elem.hasClass("vertical")?0:a.layHeader.height();a.layInit.height(a.layBox.height()-i-t).css("marginTop",i+"px"),a.layBox.append(a.layInit)}},u.Class.prototype.initTable=function(){var e=this;e.config;e.layFixed.find("tbody").html(""),e.layFixed.addClass(D),e.layTotal.addClass(D),e.layPage.addClass(D),e.layMain.find("tbody").html(""),e.layMain.find("."+S).remove(),e.layHeader.find('input[name="layTableCheckbox"]').prop("checked",!1),e.renderForm("checkbox")};var K=function(e,a){if(e){var t=E(e),i=t.config;"boolean"!=typeof a&&(a=!i.reversal),i.reversal=a,t.reverse(),t.resize()}else layui.each(u.thisTable.that,function(e,t){K(e,a)})},z={},W=function(e,a,t){var i="string"==typeof e?ae(e):e;return t=t||le(i),i.checkStatus&&t&&(z[i.id]=z[i.id]||{},layui.each(a||u.cache[i.id]||[],function(e,a){z[i.id][a[t]]=a})),(a||u.cache[i.id]||[]).map(function(e){return e[t]})},G=function(e){var a=this,t=a.config;e&&(a.layBody.scrollTop(0),a.layBody.scrollLeft(0)),H(a),J.call(a),a.layMain.find("."+S).length||(a.layTotal.removeClass(D),a.layFixLeft.removeClass(D)),layui.each(a.tempData,function(e,t){a.addTemp(e+1,t,null,!0)}),t.reversal===!0&&a.reverse(),a.layBody.find('input[type="checkbox"][name="layTableCheckbox"]').attr("lay-filter","layTableCheckbox"),pe(a),a.scrollPatch(),W(t)};u.Class.prototype.pullData=function(e,a){var t=this,i=t.config,l=i.request,n=i.response,r=function(){"object"==typeof i.initSort&&t.sort(i.initSort.field,i.initSort.type)};if(t.startTime=(new Date).getTime(),i.url){a||t.setColsWidth(),t.loading();var c={};c[l.pageName]=e,c[l.limitName]=i.limit;var s=o.extend(c,i.where);i.contentType&&0==i.contentType.indexOf("application/json")&&(s=JSON.stringify(s)),o.ajax({type:i.method||"get",url:i.url,contentType:i.contentType,data:s,dataType:"json",headers:i.headers||{},success:function(l){"function"==typeof i.parseData&&(l=i.parseData(l)||l),l[n.statusName]!=n.statusCode?(t.renderForm(),t.initTable(),t.layMain.append('<div class="'+S+'">'+(l[n.msgName]||"返回的数据不符合规范，正确的成功状态码 ("+n.statusName+") 应为："+n.statusCode)+"</div>")):(t.renderData(l,e,l[n.countName],!1,a&&(!i.page||i.page.count===l[n.countName])),r(),i.time=(new Date).getTime()-t.startTime+" ms"),a?t.loading(!0):t.setColsWidth(),"function"==typeof i.done&&i.done(l,e,l[n.countName])},error:function(e,i){t.initTable(),t.layMain.append('<div class="'+S+'">数据接口请求异常：'+i+"</div>"),t.renderForm(),a?t.loading(!0):t.setColsWidth()}})}else if(i.data&&i.data.constructor===Array){var d={},u=e*i.limit-i.limit;d[n.dataName]=i.data.concat().splice(u,i.limit),d[n.countName]=i.data.length,t.initTable(),t.renderData(d,e,i.data.length,!1,a&&(!i.page||i.page.count===i.data.length)),r(),a?t.loading(!0):t.setColsWidth(),"function"==typeof i.done&&i.done(d,e,d[n.countName])}},u.Class.prototype.renderData=function(e,a,t,i,l){var n=this,d=n.config,f=e[d.response.dataName]||[],p=[],h=[],y=[],g=function(){if(!i&&n.sortKey)return n.sort(n.sortKey.field,n.sortKey.sort,!0);var e;layui.each(f,function(t,l){var c=[],s=[],f=[],g=t+d.limit*(a-1)+1;0!==l.length&&(i||(l[u.config.indexName]=t),n.eachCols(function(a,i){var n=i.field||a,p=d.index+"-"+i.key,h=l[n];if(void 0!==h&&null!==h||(h=""),!i.colGroup){var y=['<td data-field="'+n+'" data-key="'+p+'" '+function(){var e=[];return i.edit&&e.push('data-edit="'+i.edit+'"'),i.align&&e.push('align="'+i.align+'"'),i.templet&&e.push('data-content="'+h+'"'),i.toolbar&&e.push('data-off="true"'),i.event&&e.push('lay-event="'+i.event+'"'),i.style&&e.push('style="'+i.style+'"'),i.minWidth&&e.push('data-minwidth="'+i.minWidth+'"'),e.join(" ")}()+' class="'+function(){var e=[];return i.hide&&e.push(D),i.field||e.push("layui-table-col-special"),e.join(" ")}()+'">','<div class="layui-table-cell laytable-cell-'+function(){return"normal"===i.type?p:p+" laytable-cell-"+i.type}()+'">'+function(){var a=o.extend(!0,{LAY_INDEX:g},l),n=u.config.checkName;switch(i.type){case"checkbox":return'<input type="checkbox" name="layTableCheckbox" lay-skin="primary" '+function(){return i[n]?(l[n]=i[n],i[n]?"checked":""):a[n]?"checked":""}()+">";case"radio":return a[n]&&(e=t),'<input type="radio" name="layTableRadio_'+d.index+'" '+(a[n]?"checked":"")+' lay-type="layTableRadio">';case"numbers":return g}return i.toolbar?r(o(i.toolbar).html()||"").render(a):i.templet?function(){return"function"==typeof i.templet?i.templet(a):r(o(i.templet).html()||String(h)).render(a)}():h}(),"</div></td>"].join("");c.push(y),i.fixed&&"right"!==i.fixed&&s.push(y),"right"===i.fixed&&f.push(y)}}),p.push('<tr data-index="'+t+'">'+c.join("")+"</tr>"),h.push('<tr data-index="'+t+'">'+s.join("")+"</tr>"),y.push('<tr data-index="'+t+'">'+f.join("")+"</tr>"))}),l||n.layBody.scrollTop(0),!f.length||n.layMain.find("."+S).remove(),n.layMain.find("tbody").html(p.join("")),n.layFixLeft.find("tbody").html(h.join("")),n.layFixRight.find("tbody").html(y.join("")),n.renderForm(),"number"==typeof e&&n.setThisRowChecked(e),n.syncCheckAll(),n.haveInit?n.scrollPatch():setTimeout(function(){n.scrollPatch()},50),n.haveInit=!0,s.close(n.tipsIndex),d.HAS_SET_COLS_PATCH||n.setColsPatch(),d.HAS_SET_COLS_PATCH=!0};n.layMain.find("."+S).length&&n.initTable(),n.key=d.id||d.index,R(f,d.id,d);var m=u.getTemp(n.key);return n.tempData=m.data,u.cache[n.key]=f,n.layPage[0==t||0===f.length&&1==a?"addClass":"removeClass"](D),i?(g(),G.call(n)):0===f.length?(n.renderForm(),n.initTable(),n.layMain.append('<div class="'+S+'">'+d.text.none+"</div>"),G.call(n,!0)):(g(),l?G.call(n):(n.renderTotal(f),d.page&&(d.page=o.extend({elem:"layui-table-page"+d.index,count:t,limit:d.limit,limits:d.limits||[10,20,30,40,50,60,70,80,90],groups:3,layout:["prev","page","next","skip","count","limit"],prev:'<i class="layui-icon">&#xe603;</i>',next:'<i class="layui-icon">&#xe602;</i>',jump:function(e,a){if(a||(n.page=e.curr,d.limit=e.limit,n.loading(),n.pullData(e.curr)),n.config.pageLanguage&&n.config.pageLanguage!==!0){var t;if("string"==typeof n.config.pageLanguage){if(!u.config.pageLanguageText[n.config.pageLanguage])return void console.log("找不到"+n.config.pageLanguage+"对应的语言文本定义");t=u.config.pageLanguageText[n.config.pageLanguage]}else{if("object"!=typeof n.config.pageLanguage)return;var i=n.config.pageLanguage.lan;if(!i)return;t=o.extend({},u.config.pageLanguageText[i],n.config.pageLanguage.text||{})}if(!t)return;var l=n.layPage.find(">div");l.addClass(D);var r=l.find(".layui-laypage-skip"),c=r.find("input"),s=r.find("button");r.html(t.jumpTo||"jump to"),c.appendTo(r),r.append(t.page||"page"),s.html(t.go||"go").appendTo(r);var f=l.find(".layui-laypage-count"),p=f.text();f.html((t.total||"total")+" "+p.split(" ")[1]+(t.unit?" "+t.unit:""));var h=l.find(".layui-laypage-limits");layui.each(h.find("option"),function(e,a){a=o(a);var i=a.text();a.html(i.split(" ")[0]+" "+(t.optionText||"limit each page"))}),l.removeClass(D)}}},d.page),d.page.count=t,c.render(d.page)),void G.call(n,!0)))};var X=u.Class.prototype.setColsWidth;u.Class.prototype.setColsWidth=function(){var e=this;e.layBox.find("."+B).remove(),X.call(e);var a=e.config,t=(a.id,e.elem),i=t.find("."+S);if(e.elem[i.length&&e.layHeader.first().find(".layui-table").width()-1>e.layHeader.first().width()?"addClass":"removeClass"]("layui-table-none-overflow"),a.cols.length>1){var l=a.cols.length,n=e.layBox.find(L),r=e.layFixed.find(L+" th"),c=!1;r.each(function(e,a){a=o(a);var t=parseInt(a.attr("rowspan")||"1");t<l&&(a.height(n.find('th[data-key="'+a.attr("data-key")+'"]').height()),c=!0)}),c&&e.layFixed.find(">"+L+' th[rowspan="'+l+'"]').height("auto")}},o(window).resize(function(){s.close(h)}),u.Class.prototype.setInit=function(e){var a=this,t=a.config,i=t.id;if(t.clientWidth=t.width||function(){var e=function(a){var i,l;a=a||t.elem.parent(),i=a.width();try{l="none"===a.css("display")}catch(n){}return!a[0]||i&&!l?i:e(a.parent())};return e()}(),"width"===e)return t.clientWidth;delete u.thisTable.arrs[i],F.check(i)?t.checkStatus&&t.checkStatus["default"]&&F.set(i,x,t.checkStatus["default"]):F.init(i,t.checkStatus?t.checkStatus["default"]||[]:[]),t.checkDisabled&&M(t.checkDisabled.data)&&t.checkDisabled.data.length&&F.disabled(i,M(t.checkDisabled.data)?t.checkDisabled.data:[]);var l;t.colFilterRecord?l=ne.get(i,t.colFilterRecord):ne.clear(i);var n=function(e,i,o,r){if(!r)return void i.splice(o,1);if(r.key=e+"-"+o,r.hide=r.hide||!1,r.colspan=r.colspan||1,r.rowspan=r.rowspan||1,a.initOpts(r),r.hide=l&&"normal"===r.type&&r.field&&"boolean"==typeof l[r.field]?l[r.field]:r.hide,r.field||r.toolbar||r.colspan&&1!==r.colspan||N.indexOf(r.type)!==-1?!r[I]||r.colspan>1||(r[I]=!1):r[I]=!0,r.colGroup||r.colspan>1){var c=0,s=e+(parseInt(r.rowspan)||1);layui.each(t.cols[s],function(a,i){i.HAS_PARENT||c>=1&&c==(r.colspan||1)||(i.HAS_PARENT=!0,i.parentKey=e+"-"+o,c+=parseInt(i.colspan>1?i.colspan:1),n(s,t.cols[s],a,i))}),r.colGroup=!0}};layui.each(t.cols,function(e,a){return e>0||void layui.each(a,function(t,i){n(e,a,t,i)})})};var q=u.Class.prototype.reload;u.Class.prototype.reload=function(e){var a=this;u.reload(a.config.id,e,!0)},u.Class.prototype.addTemp=function(e,a,t,i){var l=this,n=[],c=[],s=[],d=l.config,f=a||{};e=-e,l.layBody.find('tr[data-index="'+e+'"]').length||(u.cache[l.key][e]=f,l.eachCols(function(a,t){var i=t.field||a,l=d.index+"-"+t.key,u=f[i];if(void 0!==u&&null!==u||(u=""),!t.colGroup){var p=['<td data-field="'+i+'" data-key="'+l+'" '+function(){var e=[];return"normal"===t.type&&t.edit!==!1&&e.push('data-edit="text"'),t.align&&e.push('align="'+t.align+'"'),t.templet&&e.push('data-content="'+u+'"'),t.toolbar&&e.push('data-off="true"'),t.event&&e.push('lay-event="'+t.event+'"'),t.style&&e.push('style="'+t.style+'"'),t.minWidth&&e.push('data-minwidth="'+t.minWidth+'"'),e.join(" ")}()+' class="'+function(){var e=[];return t.hide&&e.push(D),t.field||e.push("layui-table-col-special"),e.join(" ")}()+'">','<div class="layui-table-cell laytable-cell-'+function(){return"normal"===t.type?l:l+" laytable-cell-"+t.type}()+'">'+function(){var a=o.extend(!0,{LAY_INDEX:e},f);switch(t.type){case"checkbox":case"radio":case"numbers":return""}return t.toolbar?"":t.templet?function(){return"function"==typeof t.templet?t.templet(a):r(o(t.templet).html()||String(u)).render(a)}():u}(),"</div></td>"].join("");s.push(p),t.fixed&&"right"!==t.fixed&&n.push(p),"right"===t.fixed&&c.push(p)}}),l.layMain.find("."+S).remove(),l.elem.removeClass("layui-table-none-overflow"),l.layMain.find("tbody").append('<tr class="layui-tablePlug-data-temp" data-index="'+e+'">'+s.join("")+"</tr>"),l.layFixLeft.removeClass(D).find("tbody").append('<tr class="layui-tablePlug-data-temp" data-index="'+e+'">'+n.join("")+"</tr>"),l.layFixRight.find("tbody").append('<tr class="layui-tablePlug-data-temp" data-index="'+e+'">'+c.join("")+"</tr>"),l.renderForm(),l.resize(),i||l.layBody.scrollTop(l.layBody[0].scrollHeight),l.layBody.find('tr.layui-tablePlug-data-temp[data-index="'+e+'"]').find("td:first-child").append('<div class="close_temp"></div>'),l.layFixRight.find(".close_temp").remove(),"function"==typeof t&&t.call(l.config,l.layBody.find('tr[data-index="'+e+'"]')))},u.addTemp=function(e,a,t){var i=E(e);"function"==typeof a&&(t=a,a={}),i&&i.addTemp(u.getTemp(e).numbers,a&&"object"==typeof a?a:{},t)},u.getTemp=function(e){for(var a=u.cache[e]||[],t=[],i=1;a[-i];i++)M(a[-i])||t.push(a[-i]);return{data:t,numbers:i}},u.cleanTemp=function(e,a){var t=E(e),i=u.getTemp(e),l=u.cache[e]||[];if(i.data.length)for(var n=i.numbers,r=1;r<n&&(!l[-r]||a&&-r!==a||(l[-r]=[],!a));r++);o('div.layui-table-view[lay-id="'+e+'"]').removeClass("has-data-temp-warn").find("tr.layui-tablePlug-data-temp[data-index"+(a?'="'+a+'"':"")+"]").remove(),u.resize(e),t.layBody.scrollTop(t.layBody[0].scrollHeight)},o(document).on("click",".layui-table-view tr.layui-table-hover.layui-tablePlug-data-temp div.close_temp",function(e){layui.stope(e);var a=o(this),t=a.closest("tr"),i=t.closest(".layui-table-view").attr("lay-id");u.cleanTemp(i,t.data("index"))});var V=function(e,a,t,i){if(i.colGroup){var l=0;e++,i.CHILD_COLS=[];var n=t+(parseInt(i.rowspan)||1);layui.each(a[n],function(t,o){o.PARENT_COL_INDEX||l>=1&&l==(i.colspan||1)||(o.PARENT_COL_INDEX=e,i.CHILD_COLS.push(o),l+=parseInt(o.colspan>1?o.colspan:1),V(e,a,n,o))})}};u.eachCols=function(e,a,t){var i=this,l=i.thisTable.config[e]||{},n=l.cols?i.thisTable.arrs[e]||[]:[],r=0;t=o.extend(!0,[],t||l.cols);var c;n.length?(console.log("命中缓存!!"),c=!0):layui.each(t,function(a,l){return a>0||void layui.each(l,function(l,o){V(r,t,a,o),o.PARENT_COL_INDEX||(n.push(o),i.thisTable.arrs[e]=n)})});var s=function(e){layui.each(e||n,function(e,i){var l=i.key.split("-");return c&&(i.hide=t[l[0]][l[1]].hide,i[u.config.checkName]=!1,i.width=i.width||0),i.CHILD_COLS?s(i.CHILD_COLS):void("function"==typeof a&&a(e,i))})};s()};var J=function(){var e=this,t=e.key,i=e.elem;u.eachCols(t,function(t,l){if("normal"===l.type){var n=l.field;if(!n)return;var r=i.find('th[data-field="'+n+'"]');l.filter?r.find(".layui-table-filter").length?r.find(".layui-table-filter").removeClass("layui-active"):o(j.join("")).insertAfter(r.find(".layui-table-cell>span:not(.layui-inline)")).click(function(t){layui.stope(t);var l=i.find(".layui-table-filter.layui-active");l.length&&l[0]!==this&&(l.removeClass("layui-active"),e.layBody.find("tr."+D).removeClass(D));var r=i.find(".layui-table-main"),c=[];layui.each(r.find('td[data-field="'+n+'"]'),function(e,a){a=o(a);var t=a.text();c.indexOf(t)===-1&&c.push(t)});var d=200,f=300,p=o(this),y=a(p.find(".layui-tablePlug-icon-filter")),g=y.top,m=y.left+p.width();m+d>o(document).width()&&(m-=d+p.width()),h=s.open({content:"",title:null,type:1,area:d+"px",shade:.1,closeBtn:0,fixed:!1,resize:!1,shadeClose:!0,offset:[g+"px",m+"px"],isOutAnim:!1,maxmin:!1,success:function(a,t){a.find(".layui-layer-content").html('<table id="layui-tablePlug-col-filter" lay-filter="layui-tablePlug-col-filter"></table>'),u.render({elem:"#layui-tablePlug-col-filter",data:c.map(function(a,t,i){var l={name:a};return l[u.config.checkName]=!e.layBody.find("tr."+D).filter(function(e,t){return o(t).find('td[data-field="'+n+'"]').text()===a}).length,l}),page:!1,skin:"nob",even:!1,height:c.length>8?f:null,size:"sm",style:"margin: 0;",cols:[[{type:"checkbox",width:40},{field:"name",title:'全选<span class="table-filter-opt-invert" onclick="layui.tablePlug && layui.tablePlug.tableFilterInvert(this);">反选</span>'}]]})},end:function(){p[e.layBody.find("tr."+D).length?"addClass":"removeClass"]("layui-active")}}),u.on("checkbox(layui-tablePlug-col-filter)",function(a){"all"===a.type?e.layBody.find("tr")[a.checked?"removeClass":"addClass"](D):layui.each(e.layBody.first().find('tr td[data-field="'+n+'"]'),function(t,i){if(i=o(i),i.text()===a.data.name){var l=i.parent();e.layBody.find('tr[data-index="'+l.data("index")+'"]')[a.checked?"removeClass":"addClass"](D)}})})}):r.find(".layui-table-filter").remove()}},e.config.cols)};u.Class.prototype.reverse=function(){var e=this,a=e.config,t=a.reversal;return e.elem[t?"addClass":"removeClass"]("vertical"),setTimeout(function(){e.layTotal.css({top:t?e.layTool.outerHeight()-1+"px":0}),e.layMain.css({marginLeft:t?e.layHeader.width()+"px":0,marginRight:t&&a.totalRow?e.layTotal.width()+"px":0}),t||e.layHeader.scrollLeft(e.layMain.scrollLeft())},0),e};var U=u.Class.prototype.resize;U.modifiedByTablePlug||(u.Class.prototype.resize=function(){var e=this,a=U.call(e);return e.config.reversal===!0&&e.reverse(),a},u.Class.prototype.resize.modifiedByTablePlug=!0),u.Class.prototype.eachCols=function(e){var a=this;return u.eachCols(a.config.id,e,a.config.cols),a},u.thisTable.arrs={};var $=u.render;u.render=function(e){var a=this,t=$.call(a,e),i=E(t.config.id);return i.layMain&&i.layMain.off("scroll").on("scroll",function(){var e=o(this),a=e.scrollLeft(),t=e.scrollTop();i.layHeader.scrollLeft(a),i.layTotal.scrollLeft(a),i.layFixed.find(_+":not(:hover)").scrollTop(t),s.close(i.tipsIndex)}),i.layFixed&&i.layFixed.find(_).on("scroll",function(){var e=o(this);e.is(":hover")&&(i.layFixed.find(_+":not(:hover)").scrollTop(e.scrollTop()),i.layMain.scrollTop(e.scrollTop()))}),fe.timer[t.config.id]&&fe.reset(t.config.id),m[t.config.id]=t};var Q=u.reload,Z=function(){var e=["url","method","where","contentType","headers","parseData","request","response","data","page","initSort","autoSort","reversal"],a=["id","elem","cols","width","height"];return{getParams:function(){return o.extend(!0,[],e)},getParamsBlacklist:function(){return o.extend(!0,[],a)},registParams:function(){console.warn("智能重载相关的部分已经从查询模式白名单模式修改为查询模式参数的黑名单模式，所以该方法基本是启用状态，自定义的参数如果不是会修改整个table的框子的可以不用像之前一样要注册一下加入白名单了，使用起来会更加方便一些")},registerBlacklist:function(){console.warn("不建议自己调用改方法将参数加入查询参数的黑名单，除非是在非常了解该功能的前提下");var e=this;layui.each(arguments,function(t,i){M(i)?e.registerBlacklist.apply(e,i):"string"==typeof i&&a.indexOf(i)===-1&&a.push(i)})}}}(),ee=function(){var e=!0;return{enable:function(){if(!arguments.length)return e;var a=arguments[0];"boolean"!=typeof a?f.error("如果要开启或者关闭全局的表格智能重载模式，请传入一个true/false为参数"):e=a}}}();u.reload=function(e,a,t){var i=this;a=a||{};var l=ae(e),n=o.extend(!0,{},ae(e),a);if(n.checkStatus||F.reset(e),ee.enable()&&n.smartReloadModel){var r=!1;if(!!n.page!=!!l.page&&(r=!0),!r){var c=Z.getParamsBlacklist();layui.each(a,function(e,a){var t=c.indexOf(e);if(t!==-1)return r=!0})}if(!r){var s=E(e);return"object"==typeof a.page&&(a.page.curr&&(s.page=a.page.curr),delete a.elem,delete a.jump),t?o.extend(s.config,a):o.extend(!0,s.config,a),s.config.page||(s.page=1),s.loading(),s.pullData(s.page),u.thisTable.call(s)}}if(!t){var s=Q.call(i,e,a);return m[e]=s}q.call(E(e),a),m[e].config=E(e).config};var ae=function(e){return u.thisTable.config[e]||m[e]&&m[e].config||{}},te=u.checkStatus;u.checkStatus=function(e,a){var t=this,i=te.call(t,e),l=ae(e);if(l&&l.checkStatus&&(i.status=F.get(e),a)){i.dataCache=[];var n=z[l.id];layui.each(i.status[v].concat(i.status[x]),function(e,a){n[a]&&i.dataCache.push(u.clearCacheKey(n[a]))})}if(l&&l.checkDisabled){var o=l.checkDisabled;if("object"==typeof o&&o.enabled!==!1){var r=0,c=0,s=le(l),d=F.get(e,k);layui.each(u.cache[e],function(e,a){var t=a[s];d.indexOf(t)===-1&&(r++,a[u.config.checkName]&&c++)}),i.isAll=c>0&&r===c}}return i};var ie=function(e,a,t){return!F.checkDisabled(e,a)&&void F.update(e,a,t)},le=function(e){if(e.primaryKey)return e.primaryKey;var a=e.checkStatus&&e.checkStatus.primaryKey,t=e.checkDisabled&&e.checkDisabled.primaryKey;return a&&t&&a!==t&&layui.hint().error("注意：当前表格("+e.id+")中checkStatus和checkDisabled都配置了primaryKey,但是他们不是同一个字段，必须保持表格配置中主键是唯一的，建议直接设置在顶层配置中就可以了！"),t||a||"id"};u.on("checkbox",function(e){var a=o(this).closest(".layui-table-view"),t=a.attr("lay-id"),i=ae(t);if(F.check(t)){var l=e.checked,n=e.data,r=e.type,c=le(i);if("one"===r)ie(t,n[c],l);else if("all"===r){var s=!1;layui.each(layui.table.cache[t],function(e,i){var n=ie(t,i[c],l);if(n===!1){s=!0;var o=F.getChecked(t).indexOf(i[c])!==-1;a.find(".layui-table-body").find('tr[data-index="'+e+'"]').find('input[name="layTableCheckbox"]').prop("checked",o),i[u.config.checkName]=o}}),s&&d.render("checkbox",a.attr("lay-filter"))}}}),d.on("checkbox",function(e){o(e.elem).change()});var ne=function(){var e="tablePlug_col_filter_record",a=function(e){return"local"===e?"data":"sessionData"};return{set:function(t,i,l,n){if(t&&i){var o=a(n),r=this.get(t,n);r[i]=!l,layui[o](e,{key:t,value:r})}},get:function(t,i){return layui[a(i)](e)[t]||{}},clear:function(a){o.each(["data","sessionData"],function(t,i){layui[i](e,{key:a,remove:!0})})}}}();o(document).on("change",'input[lay-filter="LAY_TABLE_TOOL_COLS"]',function(e){var a=o(this),t=a.attr("name"),i=a.closest(".layui-table-view"),l=i.attr("lay-id"),n=ae(l),r=n.colFilterRecord;r?ne.set(l,t,this.checked,r):ne.clear(l)}),o(document).off("mousedown",".layui-table-grid-down").on("mousedown",".layui-table-grid-down",function(e){u._tableTdCurr=o(this).closest("td")}),o(document).off("click",".layui-table-tips-main [lay-event]").on("click",".layui-table-tips-main [lay-event]",function(e){var a=o(this),t=u._tableTdCurr;if(t){var i=a.closest(".layui-table-tips").attr("times");s.close(i),u._tableTdCurr.find('[lay-event="'+a.attr("lay-event")+'"]').first().click()}}),u.on("toolbar()",function(e){var a=e.config,t=o(this);a.id,a.elem.next();switch(e.event){case"LAYTABLE_COLS":var i=t.find(".layui-table-tool-panel"),l=i.find('[lay-filter="LAY_TABLE_TOOL_COLS"]'),n=i.find('[lay-filter="LAY_TABLE_TOOL_COLS"]:checked');o('<li class="layui-form" lay-filter="LAY_TABLE_TOOL_COLS_FORM"><input type="checkbox" lay-skin="primary" lay-filter="LAY_TABLE_TOOL_COLS_ALL" '+(l.length===n.length?"checked":"")+' title="全选"><span class="LAY_TABLE_TOOL_COLS_Invert_Selection">反选</span></li>').insertBefore(i.find("li").first()).on("click",".LAY_TABLE_TOOL_COLS_Invert_Selection",function(e){layui.stope(e),i.find('[lay-filter="LAY_TABLE_TOOL_COLS"]+').click()}),d.render("checkbox","LAY_TABLE_TOOL_COLS_FORM")}}),d.on("checkbox(LAY_TABLE_TOOL_COLS_ALL)",function(e){o(e.elem).closest("ul").find('[lay-filter="LAY_TABLE_TOOL_COLS"]'+(e.elem.checked?":not(:checked)":":checked")+"+").click()}),o(document).on("change",'input[lay-filter="LAY_TABLE_TOOL_COLS"]',function(e){var a=o(this);o('input[lay-filter="LAY_TABLE_TOOL_COLS_ALL"]').prop("checked",!!a.prop("checked")&&!o('input[lay-filter="LAY_TABLE_TOOL_COLS"]').not(":checked").length),d.render("checkbox","LAY_TABLE_TOOL_COLS_FORM")}),o(document).on("click",'.layui-table-view tbody [lay-event],.layui-table-view tbody tr [name="layTableCheckbox"]+',function(e){layui.stope(e)});var oe=function(e){e=!!e,o(document).off("mouseenter","."+C+" "+A+" "+_).off("mouseleave","."+C+" "+A+" "+_).off("mouseenter","."+C+" "+w+" "+_).off("mouseleave","."+C+" "+w+" "+_).off("mouseenter","."+C+" "+O+" "+L),e&&o(document).on("mouseenter","."+C+" "+A+" "+_,function(e){var a=o(this),t=a.closest(A);"-1px"!==t.css("right")?t.addClass(T):setTimeout(function(){"-1px"!==t.css("right")&&(console.log("出现了一开始还没有打滚动条补丁的时候就触发的情况"),t.addClass(T))},50)}).on("mouseleave","."+C+" "+A+" "+_,function(e){o(this).closest(A).removeClass(T)}).on("mouseenter","."+C+" "+w+" "+_,function(e){var a=o(this),t=a.closest(w);t.addClass(T);var i=t.find(L).find("table").width(),l=t.find(L).width()+1;t.css({width:i+"px"}).find(_).css({width:l+"px"})}).on("mouseleave","."+C+" "+w+" "+_,function(e){o(this).css({width:"auto"}).closest(w).css({width:"auto"}).removeClass(T)}).on("mouseenter","."+C+" "+O+" "+L,function(e){var a=o(this);a.closest(O).removeClass(T)})};oe(!0),d.on("checkbox(layTableAllChoose)",function(e){var a=o(e.elem),t=a.closest("."+C);d.render("checkbox",t.attr("lay-filter"),t.find('[lay-filter="layTableAllChoose"]'+(e.elem.checked?":not(:checked)":":checked")).prop("checked",e.elem.checked))}),d.on("checkbox(layTableCheckbox)",function(e){var a=o(e.elem),t=a.closest("."+C),i=t.find('tr[data-index="'+a.closest("tr").data("index")+'"]');d.render("checkbox",t.attr("lay-filter"),i.find('[lay-filter="layTableCheckbox"]'+(e.elem.checked?":not(:checked)":":checked")).prop("checked",e.elem.checked))});var re=function(e,a){var t=this,i={},l=t.config,n=t.layMain.scrollTop(),o=t.layMain.scrollLeft();return e=e>=0?e:t.layBody.find("tr."+P).data("index"),i[l.response.statusName]=l.response.statusCode,i[l.response.msgName]="数据更新",i[l.response.dataName]=u.cache[l.id],i[l.response.countName]=t.count||(l.page?l.page.count:l.data.length),a&&t.layHeader.find(".layui-table-sort[lay-sort]").attr("lay-sort",""),t.renderData(i,t.page,i[l.response.countName],a),t.layBody.scrollTop(n),t.layMain.scrollLeft(o),"function"==typeof l.done&&l.done(i,t.page,i[l.response.countName]),e>=0&&setTimeout(function(){t.setThisRowChecked(e)},0),t},ce=function(e,a,t){var i=this;if(!a&&0!==a||!t&&0!==t||a<0||t<0||a===t)return i;var l=E(e);if(l){var n=(l.config,u.cache[e]);if(!n||!n[a]||!n[t])return i;n.splice(t,0,n.splice(a,1)[0]),re.call(l,t,!0)}return i},se=function(e,a,t){var i=this;if(!e)return console.warn("tableId不能为空"),i;if(a&&("object"==typeof a||M(a))&&(t=a,a=""),(null===a||isNaN(a))&&(a=""),t&&"object"!=typeof t&&!M(t))return console.warn("data格式必须是对象或者数组"),i;var l=E(e);if(l){var n=u.cache[e],r=l.config;if(!t)return re.call(l),i;M(t)&&(a=""),""!==a?o.extend(!0,n[a],t):(M(t)||(t=[t]),r.primaryKey?layui.each(t,function(e,a){a[r.primaryKey]&&layui.each(n,function(e,t){if(t[r.primaryKey]===a[r.primaryKey])return o.extend(!0,n[e],a),!0})}):o.extend(!0,n,t)),re.call(l)}return i},de=function(e,a){var t=this;if(!e)return console.warn("tableId不能为空"),t;if(!a)return console.warn("data不能为空"),t;var i=E(e);if(i){var l=i.config;if(l.url)return u.reload(e),t;if(M(l.data)){if("object"!=typeof a&&!M(a))return console.warn("data必须是对象或者数组"),t;M(a)||(a=[a]);var n=le(l);layui.each(a,function(e,a){n&&(a[n]||(a[n]="idTemp_"+(new Date).getTime()+"_"+Math.round(1e6*Math.random()))),l.data.push(a)}),u.reload(e)}return t}},ue=function(e,a){var t=this;if(!e)return console.warn("tableId不能为空"),t;if(!a&&0!==a)return console.warn("data不能为空"),t;var i=E(e);if(i){var l=i.config,n={},o=i.count||(l.page?l.page.count:l.data.length),r=le(l);if(l.url){if(l.page){o-=M(a)?a.length:1,n.page={};var c=Math.ceil(o/l.page.limit);n.page.curr=0===o?1:i.page>c?c||1:i.page}return layui.each(a,function(a,t){var i="object"==typeof t?t[r]:t;F.update(e,i,!1)}),u.reload(e,n),t}if(M(l.data)){if("object"==typeof a||M(a))M(a)||(a=[a]),layui.each(a,function(a,t){r&&t&&"object"==typeof t&&!t[r]||layui.each(l.data,function(a,i){if(t===i[r]||t[r]===i[r])return l.data.splice(a,1),F.update(e,i[r],!1),o-=1,!0})});else{if(isNaN(a))return t;var s;if(l.page?a<l.page.limit&&(s=l.data.splice((i.page-1)*l.page.limit+a,1)):s=l.data.splice(a,1),!s.length)return t;o-=1,F.update(e,s[0][r],!1)}if(l.page){n.page={};var c=Math.ceil(o/l.page.limit);n.page.curr=0===o?1:i.page>c?c||1:i.page}u.reload(e,n)}return t}},fe=function(e,a){var t=this,i=fe.timer;if(e===!1)return layui.each(i,function(e,a){fe.clear(e)}),t;if(!e)return console.warn("tableId不能为空"),t;var l=E(e);if(!l)return console.warn("找不到id为",e,"的实例"),t;var n=l.config;return a===!1?(fe.clear(e),t):a||0===a?((a===!0||a<50)&&(a=50),fe.clear(e),void(i[e]={time:a,index:setInterval(function(){o(document).find(n.elem).length?fe(e):fe.call(t,e,!1)},a)})):(l.pullData(l.page,!0),t)};fe.timer={},fe.clear=function(e){if(fe.timer[e]){clearInterval(fe.timer[e].index);var a=fe.timer[e].time;return delete fe.timer[e],a}},fe.reset=function(e){fe(e,fe.clear(e))};var pe=function(e,a,t){var i=this;if(!e)return console.warn("tableId不能为空"),i;var l;if("string"==typeof e?l=E(e):(l=e,e=l.key||(l.config?l.config.id:"")),!l||!e)return console.warn("找不到id为",e,"的实例"),i;var n=l.config;if(!n.totalRow)return i;var r=l.layTotal;return a?(r.find('td[data-field="'+a+'"] div.layui-table-cell').html(t||""),i):void u.eachCols(e,function(a,t){if(t.totalRow&&!t.totalRowText&&t.field){var i,l=t.field,c=t.totalFormat||"sum",s=o.extend([],u.cache[e]);if("function"==typeof c)i=c.call(n,e,s,l);else switch(i=0,c){case"sum":layui.each(s,function(e,a){i+=parseFloat(a[l])||0})}i&&r.find('td[data-field="'+l+'"] div.layui-table-cell').html(i||"")}})};o.extend(g,{CHECK_TYPE_ADDITIONAL:v,CHECK_TYPE_REMOVED:b,CHECK_TYPE_ORIGINAL:x,tableCheck:F,colFilterRecord:ne,getConfig:ae,getIns:function(e){return m[e]},disabledCheck:function(e,a){var t=this;F.disabled(e,a||[]),H.call(t,e,!0)},dataRenderChecked:R,queryParams:Z,smartReload:ee,tableFilterInvert:function(e){e=o(e);var a=e.closest(".layui-table-view"),t=a.attr("lay-id");if(t){var i=u.checkStatus(t);i.isAll?a.find('[lay-filter="layTableAllChoose"]+').click():a.find('tbody [name="layTableCheckbox"]:checked').length?layui.each(a.find('tbody [name="layTableCheckbox"]'),function(e,a){
o(a).next().click()}):a.find('[lay-filter="layTableAllChoose"]+').click()}},getPosition:a,reverseTable:K,move:ce,moveUp:function(e,a){return ce.call(this,e,a,a-1)},moveDown:function(e,a){return ce.call(this,e,a,a+1)},update:se,addData:de,del:ue,refresh:fe,renderTotal:pe,enableTableFixedScroll:oe}),e(i,g)});
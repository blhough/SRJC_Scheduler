/*! jQuery UI - v1.11.2 - 2014-11-15
* http://jqueryui.com
* Includes: core.js, widget.js, position.js, autocomplete.js, menu.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return a=!o&&r.length?e.widget.extend.apply(null,[a].concat(r)):a,o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))}),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget,function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,e.top+p+f+m>d&&(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete});



console.log("Schedule.js loaded");


function Schedule()
{
    // public 
    this.courses_ = [];



    // private



    // public //
    this.AddCourse = function( courseText_, courseTitle, activeClassNum )
    {
        var courseObj = new Course( courseTitle );
        this.courses_.push( courseObj );
        courseObj.Init( courseText_ , activeClassNum );

        console.log( courseObj.classes_ );
    };
}



console.log( "Course.js loaded" );




var styleIndex = 0;
var Styles_ = [
    new Style( 2, 79, 57 ),
    new Style( 108, 61, 54 ),
    new Style( 197, 56, 56 ),
    new Style( 295, 67, 63 ),
    new Style( 40, 64, 58 ),
    new Style( 150, 50, 52 ),
    new Style( 271, 52, 70 ),
    new Style( 18, 76, 56 ),
    new Style( 221, 63, 65 ),
    new Style( 75, 53, 47 ),
    new Style( 176, 61, 47 ),
    new Style( 47, 80, 53 ),
    new Style( 352, 80, 64 ),
    new Style( 113, 40, 45 ),
    new Style( 188, 70, 54 ),
    new Style( 96, 80, 47 ),
    new Style( 330, 71, 65 ),
    new Style( 31, 70, 52 ),
    new Style( 216, 51, 65 ),
    new Style( 250, 79, 71 )
];

function Style( hue, sat, lit )
{
    this.hue = hue;
    this.sat = sat;
    this.lit = lit;
    this.alf = 0.8;
}






function Course( courseTitle )
{
    this.courseTitle = courseTitle;
    this.classes_ = [];
    this.$div = null;
    this.visible = true;
    this.expanded = true;
    this.unlocked = true;
    this.classDeletedNum = 0;
    this.style = new Style();



    var self = this;


    // public //
    this.Init = function( courseText_, activeClassNum )
    {
        self.style = self._NextStlye();
        self.$div = self.AddCourseElement( self );
        self.classes_ = self.AddClasses( courseText_, activeClassNum, self );
        self.RefreshStyle();
    };


    // private //
    this._NextStlye = function()
    {
        if ( styleIndex === 20 )
        {
            styleIndex = 0;
        }
        return Styles_[ styleIndex++ ];
    };


    this.RefreshStyle = function()
    {
        self.$div.css( 'background', 'hsl(' + this.style.hue + ', ' + ( this.style.sat - 10 ) + '%, ' + ( this.style.lit + 25 ) + '%)' );

        var classesLen = self.classes_.length;
        for ( var i = 0; i < classesLen; i++ )
        {
            self.classes_[ i ].RefreshStyle();
        }
    };

    this.AddCourseElement = function( courseObj )
    {
        var $courseDiv = $( "<div/>",
        {
            class: 'course-wrap hide',

        } ).appendTo( "#course-panel" ); // create a course div

        $courseDiv.data( "course", courseObj );

        $courseDiv.append( '<div class="course-header">' +
            '<div class="course-title">' + courseObj.courseTitle + '</div>' +
            '<div class="course-button-wrap">' +
            '<div class="course-button">x</div>' +
            '<div class="course-button">l</div>' +
            '<div class="course-button">v</div>' +
            '<div class="course-button course-collapse">u</div>' +
            '</div>' +
            '</div>' +
            '<div class="class-wrap"></div>'
        );

        setTimeout( function()
        {
            $courseDiv.removeClass( 'hide' );
        }, 1 );


        return $courseDiv;
    };

    // public //
    this.AddClasses = function( courseText_, activeClassNum, courseObj )
    {
        var courseTextLen = courseText_.length;
        var classes_ = [];

        for ( var i = 0; i < courseTextLen; i++ )
        {
            var firstChar = courseText_[ i ].charAt( 1 );

            console.log( firstChar );

            if ( firstChar >= '0' && firstChar <= '9' )
            {
                classes_.push( self.AddClass( courseText_[ i ], ( i === activeClassNum ), courseObj ) );
            }
            else
            {
                classes_[ classes_.length - 1 ].note = courseText_[ i ].match( /<(.*)>/ )[ 1 ];
            }
        }

        return classes_;
    };

    this.ParseClassData = function( data, sessionNum )
    {
        parsed = [];

        for ( var j = 0; j < sessionNum; j++ ) // for number of sessions parse times as strings
        {
            var temp = data.match( /.*?(>|┃|―)/ )[ 0 ]; // pull a session of data

            data = data.replace( /.*?(>|┃|―)/, "" ); // remove day from string

            parsed.push( temp.substring( 0, temp.length - 1 ) );

            if ( data.length <= 1 ) // if missed tab
            {
                break;
            }
        }

        return parsed;
    };

    // public //
    this.AddClass = function( courseText, isActive, courseObj )
    {
        var classObj = new Class();
        var i;
        var stringTempArr = [];

        // try
        // {

        // sect number //////////////////////////////////////////////////////////////////////////////

        classObj.sect = courseText.match( /\d{4}/ )[ 0 ]; // pull sect number

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove sect number




        var stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        //courseText = courseText.replace( /.*?(>|―)/ , "" ); // remove up to first tab

        stringTemp = stringTemp.replace( /Th/g, "R" ); // replace Th with R

        stringTemp = stringTemp.replace( /Sat/g, "S" ); // replace Sat with S

        stringTemp = stringTemp.replace( /Sun/g, "N" ); // replace Sat with S

        stringTemp = stringTemp.replace( /TBA/g, "X" ); // replace TBA with X

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, 20 );

        //console.log( stringTempArr );

        var sessionLength = stringTempArr.length; // number of class sessions

        //console.log( stringTempArr.length );


        // Days of the week //////////////////////////////////////////////////////////////////////////

        loop1: for ( i = 0; i < sessionLength; i++ ) // for number of class sessions create session object
            {
                var sessionObj = new Session(); // create new session object
                classObj.sessions_.push( sessionObj ); // push session object into class.sessions array


                var charTemp = ""; // temp chracter for parsing days of the week

                while ( true ) //  parses the days of the week
                {
                    charTemp = stringTempArr[ i ].charAt( 0 ); // get first character of stringTemp

                    switch ( charTemp.toUpperCase() )
                    // assign values to days array, 1 = true
                    {
                        case "M":
                            sessionObj.days[ 0 ] = 1;
                            break;

                        case "T":
                            sessionObj.days[ 1 ] = 1;
                            break;

                        case "W":
                            sessionObj.days[ 2 ] = 1;
                            break;

                        case "R":
                            sessionObj.days[ 3 ] = 1;
                            break;

                        case "F":
                            sessionObj.days[ 4 ] = 1;
                            break;

                        case "S":
                            sessionObj.days[ 5 ] = 1;
                            //isSaturday = true;
                            break;

                        case "N":
                            sessionObj.days[ 6 ] = 1;
                            //isSunday = true;
                            break;
                    }

                    if ( stringTempArr[ i ].length == 1 ) // break both loops
                    {
                        break;
                    }

                    stringTempArr[ i ] = stringTempArr[ i ].substring( 1, stringTempArr[ i ].length ); // remove first character from stringTemp

                }
            }




        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove days

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );




        // days as string /////////////////////////////////////////////////////////////////

        for ( i = 0; i < sessionLength; i++ ) // for number of sessions parse instructor name
        {
            classObj.sessions_[ i ].daysS = stringTempArr[ i ];
        }




        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until next tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove up to first tab

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );



        // Times /////////////////////////////////////////////////////////////////////////

        for ( i = 0; i < sessionLength; i++ ) // for number of sessions parse class times
        {
            try
            {
                var hour, min, ampm;

                stringTemp = stringTempArr[ i ];
                classObj.sessions_[ i ].timeS = stringTemp;

                hour = Number( stringTemp.match( /\d\d?/ )[ 0 ] ); // parses start hour

                stringTemp = stringTemp.replace( /.*?:/, "" ); // removes start hour

                min = Number( stringTemp.match( /\d\d/ )[ 0 ] ); // parses start minutes

                stringTemp = stringTemp.replace( /.*?\s/, "" ); // removes start minutes

                ampm = stringTemp.match( /\s*?[amp]{2}/ )[ 0 ]; // parses start am or pm

                stringTemp = stringTemp.replace( /\s\-\s/, "" ); // removes start am or pm

                if ( ampm.toLowerCase() == "pm" ) // if pm
                {
                    if ( hour != 12 )
                    {
                        hour += 12; // add 12 hours
                    }
                }
                else
                {
                    if ( hour == 12 )
                    {
                        hour = 0;
                    }
                }

                classObj.sessions_[ i ].timeStart = hour * 60 + min - 360; // assign start time in minutes relative to 7AM


                // same but with end times ///////////////////////////////////

                hour = Number( stringTemp.match( /\d\d?/ )[ 0 ] );

                stringTemp = stringTemp.replace( /.*?:/, "" );

                min = Number( stringTemp.match( /\d\d/ )[ 0 ] );

                stringTemp = stringTemp.replace( /.*?\s/, "" );

                ampm = stringTemp.match( /\s*?[amp]{2}/ )[ 0 ];

                if ( ampm.toLowerCase() == "pm" )
                {
                    if ( hour != 12 )
                    {
                        hour += 12;
                    }
                }
                else
                {
                    if ( hour == 12 )
                    {
                        hour = 0;
                    }
                }

                classObj.sessions_[ i ].timeEnd = hour * 60 + min - 360; // assign end time in minutes relative to 7AM

            }
            catch ( err )
            {
                console.log( "error adding times" + i );
            }
        }




        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove instructor

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );



        // instructor /////////////////////////////////////////////////////////////////

        for ( i = 0; i < sessionLength; i++ ) // for number of sessions_ parse instructor name
        {
            classObj.sessions_[ i ].instructor = stringTempArr[ i ]; // assign instructor to class
        }




        // try
        // {
        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove room number

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );




        // room number /////////////////////////////////////////////////////////

        for ( i = 0; i < sessionLength; i++ )
        {
            classObj.sessions_[ i ].location = stringTempArr[ i ]; // assing room number to classObj
        }
        // }
        // catch ( err ) // if room number missing
        // {
        //     console.warn( "Class locations missing" );
        // }



        // try
        // {
        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove units




        // units ////////////////////////////////////////////////////////////////////////

        classObj.units = stringTemp.substring( 0, stringTemp.length - 1 ); // parses units and assing to class    
        // }
        // catch ( err ) // if units missing
        // {
        //     console.warn( "Class units missing" );
        // }




        // try
        // {
        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove status



        // status ///////////////////////////////////////////////////////////////////////////

        classObj.status = stringTemp.substring( 0, stringTemp.length - 1 ); // parses status and assigns to class     
        // }
        // catch ( err ) // if status missing
        // {
        //     console.warn( "Class status missing" );
        // }




        // try
        // {
        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove seats



        // seats /////////////////////////////////////////////////////////////////////////////////

        classObj.seats = stringTemp.substring( 0, stringTemp.length - 1 ); // parses seats and assing to class
        // }
        // catch ( err ) // if seats missing
        // {
        //     console.warn( "Available number of seats missing" );
        // }




        stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

        courseText = courseText.replace( /.*?(>|―)/, "" ); // remove dates

        stringTempArr.splice( 0, stringTempArr.length ); // clear array

        stringTempArr = self.ParseClassData( stringTemp, sessionLength ); // repopulate the array with class data seperated at &

        //console.log( stringTempArr );



        for ( i = 0; i < sessionLength; i++ ) // for number of session parse dates as days from jan 1
        {
            var month, day;

            classObj.sessions_[ i ].dateS = stringTempArr[ i ]; // assing date to class

            stringTemp = stringTempArr[ i ];

            month = MonthToDay( Number( stringTemp.match( /\d\d?/ )[ 0 ] ) ); // parses the start month and converts it to days from jan 1st

            stringTemp = stringTemp.replace( /\d\d?\//, "" ); // removes start month

            day = Number( stringTemp.match( /\d\d?/ )[ 0 ] ); // parses start day

            stringTemp = stringTemp.replace( /\d\d?\-/, "" ); // removes start day

            classObj.sessions_[ i ].dateStart = month + day; // assign start date as number of days from jan 1st


            // same but for end date

            month = MonthToDay( Number( stringTemp.match( /\d\d?/ )[ 0 ] ) );

            stringTemp = stringTemp.replace( /\d\d?\//, "" );

            day = Number( stringTemp.match( /\d\d?/ )[ 0 ] );

            classObj.sessions_[ i ].dateEnd = month + day;
        }




        try
        {
            stringTemp = courseText.match( /.*?(>|―)/ )[ 0 ]; // pull until first tab

            courseText = courseText.replace( /.*?(>|―)/, "" ); // remove final exam


            // final exam //////////////////////////////////////////////////////////////////////////////

            classObj.finalExam = stringTemp.match( /\d\d?\/\d\d?\/\d{4}/ )[ 0 ]; // parse final exam and assing to class
        }
        catch ( err ) // if final exam missing
        {
            console.warn( "error adding final exam date" );
        }



        //         try
        //         {
        //         if ( courseText.length > 0 ) // if class data remaing
        //         {
        //             stringTemp = courseText.match( /.*?(>)/ )[ 0 ]; // pull until first tab

        //             classObj.note = stringTemp.substring( 0, stringTemp.length - 1 ).trim(); // parse note and assing to class
        //         }
        //         }
        //         catch ( err ) // if error adding note
        //         {
        //             console.warn( "error adding class notes" );
        //         } 

        classObj.Init( courseObj );


        return classObj;
        // }
        // catch ( err )
        // {
        //     courseTemp.classes.pop();
        //     console.warn( "error_AddClass" + err );
        // }

    };

}




console.log( "Class.js loaded" );


function Class()
{
    this.active = false; // drawn on screen
    this.hover = false;
    this.press = false;
    this.note = ""; // class note
    this.sect = 0; // class section number
    this.seats = 0; // setats available
    this.units = ""; // class unots
    this.status = ""; // class status, open/closed/wait/etc
    this.finalExam = ""; // class final exam date
    this.sessions_ = []; // class sessions array
    this.$div = null; // div of button
    this.$parent = null; // course div
    this.parent = null;
    this.style = null;

    var self = this;

    this.Init = function( courseObj )
    {
        self.parent = courseObj;
        self.$parent = courseObj.$div;
        self.style = courseObj.style;
        self.$div = self.AddClassElement( self, self.$parent );
        self.BindEvents();
    };

    this.BindEvents = function()
    {
        self.$div.mouseenter( function()
        {
            self.hover = true;

            self.RefreshStyle();
            console.info( self.sect + "mouseenter" );

            //console.log( "mouseenter class-button" );
        } );

        self.$div.mouseleave( function()
        {
            self.hover = false;
            self.press = false;

            self.RefreshStyle();
            console.info( self.sect + "mouseleave" );

            //console.log( "mouseenter class-button" );
        } );

        self.$div.mouseup( function()
        {
            self.press = false;

            self.RefreshStyle();
            console.info( self.sect + "mouseup" );

            //console.log( "mouseenter class-button" );
        } );

        self.$div.mousedown( function()
        {
            self.press = true;

            self.RefreshStyle();
            console.info( self.sect + "mousedown" );

            //console.log( "mouseenter class-button" );
        } );

        self.$div.click( function()
        {
            self.ToggleActive();
            console.info( self.sect + "mouseclick" );

            //console.log( "mouseenter class-button" );
        } );

    };

    this.AddClassElement = function( classObj, $courseDiv )
    {
        var $classDiv = $( "<div/>",
        {
            class: "class-button class-mini"
        } );

        $classDiv.data( "class", classObj );

        $classDiv.append( '<span class="class-title">' +
            ( classObj.sect + ' - ' + classObj.sessions_[ 0 ].instructor ) +
            '</span> <div class="class-close-button">x</div>'
        );

        $courseDiv.children( ".class-wrap" ).append( $classDiv );
        setTimeout( function()
        {
            $classDiv.removeClass( 'class-mini' );
        }, 1 );

        return $classDiv;
    };

    this.ToggleActive = function( active )
    {
        if ( active === undefined )
        {
            self.active = !self.active;
            this.ToggleActive( self.active );
        }
        else
        {
            var classes_ = self.parent.classes_;
            var classesLen = classes_.length;
            var classe = null;
            var i =0;
            if ( active )
            {
                
                for ( i = 0; i < classesLen; i++ )
                {
                    classe = classes_[ i ];
                    if ( classe.active )
                    {
                        classe.active = false;
                        classe.RefreshStyle();
                    }
                }

                self.active = true;
                self.RefreshStyle();
                self.DrawClass();

            }
            else
            {
                for ( i = 0; i < classesLen; i++ )
                {
                    classe = classes_[ i ];
                    if ( classe.active )
                    {
                        classe.active = false;
                        classe.RefreshStyle();
                    }
                }

            }
        }
    };

    this.RefreshStyle = function()
    {
        if ( self.press )
        {
            self.$div.css( 'background', 'hsl(' + ( self.style.hue ) + ', ' + ( self.style.sat + 20 ) + '%, ' + ( self.style.lit - 10 ) + '%)' );
        }
        else if ( self.active )
        {
            self.$div.css( 'background', 'hsl(' + ( self.style.hue ) + ', ' + ( self.style.sat + 35 ) + '%, ' + ( self.style.lit + 7 ) + '%)' );
        }
        else if ( self.hover )
        {
            self.$div.css( 'background', 'hsl(' + ( self.style.hue ) + ', ' + ( self.style.sat + 25 ) + '%, ' + ( self.style.lit + 20 ) + '%)' );
        }
        else
        {
            self.$div.css( 'background', 'hsl(' + ( self.style.hue ) + ', ' + ( self.style.sat - 25 ) + '%, ' + ( self.style.lit + 20 ) + '%)' );
        }
    };

    this.DrawClass = function()
    {
        for ( var i = 0; i < self.sessions_.length; i++ )
        {
            self.DrawSession( i );
        }
    };


    this.DrawSession = function( sessionNum )
    {
        for ( var day = 0; day < 7; day++ )
        {
            if ( self.sessions_[ sessionNum ].days[ day ] == 1 )
            {
                srjc.canvas.SessionAdd( new self.SessionDiv( self, day, self.sessions_[ sessionNum ].dateStart,
                    self.sessions_[ sessionNum ].dateEnd,
                    self.sessions_[ sessionNum ].timeStart,
                    self.sessions_[ sessionNum ].timeEnd,
                    self.style ) );
            }
        }
    };

    this.SessionDiv = function( parent , day, dateStart, dateEnd, timeStart, timeEnd, style )
    {
        this.parent = parent;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.innerColor = '';
        this.borderColor = 'black';
        this.borderWidth = '1px';

        this.current = false;

        this.day = day;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.style = style;
    };


}




console.log("Session.js loaded");


function Session()
{
    this.days = [];
    this.daysS = "";
    this.timeStart = 0;
    this.timeS = "";
    this.timeEnd = 0;
    this.instructor = "";
    this.location = 0;
    this.dateStart = 0;
    this.dateS = "";
    this.dateEnd = 0;
}




console.log( "Canvas.js loaded" );


function Canvas()
{

    var self = this;
    var cellW = 0, cellH = 0;
    var sessions_ = [];

    var _ = {
        main: $( "#main" ),
        canvas: $( "#canvas" ),
        table: $( "#time-table" ),
        timesheet: $( "#timesheet" ),
        firstPanel: $( "#first-panel" ),
        firstCell: $( "#time-table tr:first-child th:first-child" ),
        cells: $( "#time-table tr:first-child th:not(th:first-child)" ),
        rows: $( "#time-table tr"),
        footer:  $( '#footer' ),


    };

    this.Init = function()
    {
        self.BindEvents();
        self.Redraw();
    };

    this.BindEvents = function()
    {
        $( window ).on( "resize", function()
        {
            self.Redraw();
            self.SessionsUpdate( true );
        } );
    };


    // public //
    this.Clear = function()
    {
        _.canvas.html( "" ); // remove all class divs
    };

    // public //
    this.Redraw = function()
    {
        $( '#footer' ).outerHeight( 30 + 'px' );

        var mainW = _.main.width();
        cellW = Math.ceil( ( mainW * 0.5 - 47 ) / 7 );
        cellH = Math.floor( ( _.timesheet.height() ) / 19 );

        _.firstCell.width( "40px" );
        _.cells.width( cellW + "px" );
        _.timesheet.width( ( cellW * 7 + 47 ) + "px" );
        _.rows.height( cellH + "px" );
        _.footer.outerHeight( ( 30 + Math.max( 0, ( Math.round( _.timesheet.height() ) - Math.round( _.table.height() ) ) ) ) + 'px' );


        if ( cellW <= 75 )
        {
            $( "th:nth-child(2) div" ).html( "Mon" );
            $( "th:nth-child(3) div" ).html( "Tue" );
            $( "th:nth-child(4) div" ).html( "Wed" );
            $( "th:nth-child(5) div" ).html( "Thu" );
            $( "th:nth-child(6) div" ).html( "Fri" );
            $( "th:nth-child(7) div" ).html( "Sat" );
            $( "th:nth-child(8) div" ).html( "Sun" );
        }
        else
        {
            $( "th:nth-child(2) div" ).html( "Monday" );
            $( "th:nth-child(3) div" ).html( "Tuesday" );
            $( "th:nth-child(4) div" ).html( "Wedneday" );
            $( "th:nth-child(5) div" ).html( "Thursday" );
            $( "th:nth-child(6) div" ).html( "Friday" );
            $( "th:nth-child(7) div" ).html( "Saturday" );
            $( "th:nth-child(8) div" ).html( "Sunday" );
        }


    };

    // public //
    this.SessionAdd = function ( sessionDiv ) 
    {
        sessions_.push( sessionDiv );
        self.SessionUpdate( sessionDiv );

    };

    // public //
    this.SessionsUpdate = function( force) 
    {
        var sessionsLen = sessions_.length;
        _.canvas.html("");

        for (var i = 0; i < sessionsLen; i++) {
            if ( !sessions_[ i ].current || force )
            {
                self.SessionUpdate( sessions_[ i ] );
            }
        }
    };

    this.SessionUpdate = function( sessionDiv )
    {
        var semStart, semEnd;

        if ( sessionDiv.dateStart < 152 )
        {
            semStart = SPRING_START;
            semEnd = SPRING_END;
        }
        else if ( sessionDiv.dateStart < 213 )
        {
            semStart = SUMMER_START;
            semEnd = SUMMER_END;
        }
        else
        {
            semStart = FALL_START;
            semEnd = FALL_END;
        }

        var width = Math.max( 7, Math.min( sessionDiv.dateEnd - sessionDiv.dateStart, semEnd - semStart ) ) + Math.min( sessionDiv.dateStart - semStart, 0 ) - Math.max( sessionDiv.dateEnd - semEnd, 0 );
        console.log( width + "width 1" );

        var dateStart = Math.min( Math.max( sessionDiv.dateStart - semStart, 0 ), semEnd - semStart - width );
        console.log( dateStart + "dateStart" );

        sessionDiv.x = 40 + ( cellW + 1 ) * sessionDiv.day + dateStart * ( cellW / ( semEnd - semStart ) );
        console.log( sessionDiv.x + "x" );

        sessionDiv.y = cellH + ( sessionDiv.timeStart ) * ( cellH / 60 ) - 1;
        console.log( sessionDiv.y + "y" );

        sessionDiv.width = width * ( cellW / ( semEnd - semStart ) );
        console.log( sessionDiv.width + "width 2" );

        sessionDiv.height = ( sessionDiv.timeEnd - sessionDiv.timeStart ) * ( cellH / 60 ) - 1;
        console.log( sessionDiv.height + "height" );

        sessionDiv.innerColor = 'hsla(' + ( sessionDiv.style.hue ) + ', ' + ( sessionDiv.style.sat ) + '%, ' + ( sessionDiv.style.lit ) + '%,' + ( sessionDiv.style.alf ) + ')';
        sessionDiv.current = true;

        self.SessionDraw( sessionDiv );

    };



    // private //
    this.SessionDraw = function( sessionDiv )
    {
        var $div = $( "<div/>",
        {
            class: "drawClass",
        } ); // create a course div

        $div.width( sessionDiv.width + "px" );
        $div.height( sessionDiv.height + "px" );

        $div.css( "top", sessionDiv.y + "px" );
        $div.css( "left", sessionDiv.x + "px" );

        $div.css( "box-shadow", "inset 0 0 0 1000px " + sessionDiv.innerColor );
        $div.css( "border-color", sessionDiv.borderColor );
        $div.css( "border-width", sessionDiv.borderWidth + "px" );


        /*
        if ( info !== undefined )
        {
            $div.html( "<div><p>" + info + "</p></div>" );
            $div.data( "parent", parent ); // bind class object to button
            $div.data( "sessionNum", sessionNum );
        }
        */

        _.canvas.append( $div );
    };



}




console.log("Info.js loaded");


function Info()
{
	
}



console.log( "Add.js loaded" );


function Add()
{
	var self = this;
	var searchActive = false;
	var resultsPanelActive = false;
	var courseTitles_ = [ "AGBUS 2", "AGBUS 51", "AGBUS 52", "AGBUS 61", "AGBUS 62", "AGBUS 7", "AGMEC 89", "AGRI 10", "AGRI 20", "AGRI 56", "AGRI 60", "AGRI 98", "AGRI 99", "AGRI 99I", "AJ 203", "AJ 21", "AJ 22", "AJ 222A", "AJ 222B", "AJ 223", "AJ 25", "AJ 299.88", "AJ 305", "AJ 348", "AJ 350", "AJ 351", "AJ 353", "AJ 354", "AJ 355", "AJ 361", "AJ 363", "AJ 364", "AJ 365", "AJ 369", "AJ 53", "AJ 54A", "AJ 54B", "AJ 55", "AJ 56", "AJ 70", "AJ 71", "AJ 714", "AJ 715", "AJ 98", "AJ 99I", "ANAT 1", "ANAT 140", "ANAT 40", "ANAT 58", "ANHLT 120", "ANHLT 121", "ANHLT 126", "ANHLT 141", "ANHLT 142", "ANHLT 151", "ANHLT 161", "ANHLT 50", "ANHLT 52", "ANSCI 2", "ANSCI 20", "ANSCI 26", "ANSCI 50", "ANSCI 91", "ANTHRO 1", "ANTHRO 1L", "ANTHRO 2", "ANTHRO 21", "ANTHRO 3", "ANTHRO 30", "ANTHRO 31", "ANTHRO 43", "AODS 90", "AODS 91", "APE 701", "APE 709", "APE 710", "APTECH 43", "APTECH 45", "APTECH 46", "APTECH 57", "APTECH 59", "APTECH 63", "APTECH 65", "ARCH 12", "ARCH 2.3", "ARCH 25B", "ARCH 26A", "ARCH 26B", "ARCH 27", "ART 1.1", "ART 1.2", "ART 12", "ART 13", "ART 14A", "ART 14B", "ART 14C", "ART 19", "ART 2.1", "ART 2.2", "ART 2.3", "ART 21", "ART 23", "ART 24", "ART 27A", "ART 27B", "ART 28A", "ART 28B", "ART 28C", "ART 3", "ART 31A", "ART 31B", "ART 31C", "ART 31D", "ART 33A", "ART 33B", "ART 34A", "ART 34B", "ART 4", "ART 49", "ART 5", "ART 75", "ART 7A", "ART 7B", "ART 82", "ASL 1", "ASL 2", "ASL 3", "ASL 4", "ASTRON 12", "ASTRON 3", "ASTRON 3L", "ASTRON 4", "ASTRON 4L", "ATHL 1", "ATHL 11", "ATHL 13", "ATHL 14", "ATHL 15L", "ATHL 22.1L", "ATHL 22.2L", "ATHL 24", "ATHL 29L", "ATHL 3", "ATHL 31", "ATHL 31L", "ATHL 33", "ATHL 34", "ATHL 37", "ATHL 38", "ATHL 41", "ATHL 42", "AUTO 108", "AUTO 125", "AUTO 194", "AUTO 51", "AUTO 52", "AUTO 53", "AUTO 54", "AUTO 56", "AUTO 80", "AUTO 99", "BAD 1", "BAD 10", "BAD 18", "BAD 2", "BAD 52", "BAD 53", "BAD 57", "BAD 98", "BAD 99", "BAD 99I", "BBK 50", "BBK 51", "BBK 52.1", "BBK 53.1", "BBK 53.2", "BEHSC 49", "BGN 101", "BGN 102", "BGN 110", "BGN 111", "BGN 112", "BGN 201", "BGN 203", "BGN 204", "BGN 205", "BGN 71", "BGN 81", "BIO 10", "BIO 100", "BIO 12", "BIO 13", "BIO 2.1", "BIO 2.2", "BIO 2.3", "BIO 25", "BIO 49", "BIO 85.2", "BMG 100", "BMG 103", "BMG 104", "BMG 52", "BMG 53", "BMG 54", "BMG 61", "BMG 63.1", "BMG 63.4", "BMG 66.4", "BMG 67.4", "BMK 50", "BMK 51", "BMK 54", "BMK 57", "BMK 59", "BOT 154", "BOT 154.1", "BOT 770", "BOT 85.1", "BOT 85.4", "BOT 85.5", "BOT 99.1I", "BOT 99.2I", "BOT 99.3I", "BOTANY 60", "CEST 192", "CEST 63", "CEST 64", "CEST 65", "CEST 81", "CEST 98", "CEST 99I", "CFS 98", "CHEM 100", "CHEM 12B", "CHEM 1A", "CHEM 1B", "CHEM 42", "CHEM 49", "CHEM 60", "CHEM 8", "CHLD 10", "CHLD 110.1", "CHLD 110.2", "CHLD 111A", "CHLD 160.1", "CHLD 185.2", "CHLD 185.3", "CHLD 217.2", "CHLD 220", "CHLD 51", "CHLD 55.2", "CHLD 66", "CHLD 66.2", "CHLD 68", "CHLD 711", "CHLD 714", "CHLD 715", "CHLD 79.2", "CHLD 79.4", "CHLD 90.1", "CHLD 90.2", "CHLD 90.3", "CHLD 90.4", "CHW 152", "CHW 152L", "CHW 153", "CI 51", "CI 53", "CI 54", "COMM 10", "COMM 5", "COMM 6", "COMM 7", "COMM 98", "CONS 183", "CONS 62", "CONS 98", "COUN 10", "COUN 162.1", "COUN 20", "COUN 270", "COUN 355", "COUN 53", "COUN 60", "COUN 62", "COUN 74", "COUN 80", "COUN 87", "COUN 90", "COUN 91", "COUN 92", "COUN 93", "COUN 94", "COUN 95", "COUN 98", "COUN 99I", "CS 10", "CS 101A", "CS 11", "CS 110A", "CS 12", "CS 165.31", "CS 167.11", "CS 17.11", "CS 19.21B", "CS 49", "CS 5", "CS 50.21", "CS 50.31", "CS 50.32", "CS 50A", "CS 50B", "CS 50C", "CS 55.11", "CS 55.13", "CS 57.11", "CS 60.11A", "CS 60.11B", "CS 61.11", "CS 61.11A", "CS 61.11B", "CS 62.11A", "CS 62.11B", "CS 63.11", "CS 63.11A", "CS 65.11", "CS 70.11A", "CS 70.11B", "CS 70.12", "CS 71.11", "CS 72.11A", "CS 72.11B", "CS 74.11", "CS 74.21A", "CS 74.21B", "CS 74.21D", "CS 74.31A", "CS 74.41A", "CS 74.42A", "CS 770", "CS 80.15", "CS 81.21", "CS 81.62", "CS 82.21A", "CS 82.21C", "CS 82.21D", "CS 82.55", "CS 84.13", "CS 98", "CS 99", "CS 99I", "CSKLS 100", "CSKLS 312", "CSKLS 313", "CSKLS 334", "CSKLS 368A", "CSKLS 368B", "CSKLS 371", "CSKLS 372", "CSKLS 731", "CSKLS 732", "CSKLS 733", "CSKLS 770", "CSKLS312.1", "CSKLS312.2", "CSKLS367.1", "CSKLS367.2", "CUL 250", "CUL 250.1", "CUL 252.13", "CUL 252.3", "CUL 253.1", "CUL 253.5", "CUL 253A", "CUL 253B", "CUL 254", "CUL 254.10", "CUL 254.11", "CUL 254.12", "CUL 254.13", "CUL 254.6", "CUL 254.9", "CUL 255", "CUL 256", "CUL 256.10", "CUL 256.5", "CUL 256.6", "CUL 260.15", "CUL 260.17", "CUL 260.19", "CUL 260.20", "CUL 270.3", "CUL 275.48", "CUL 275.84", "CUL 285.11", "CUL 285.12", "CUL 285.21", "CUL 285.22", "CUL 285.23", "CUL 287.6", "CUL 98", "CUL 99I", "DA 63", "DA 64", "DA 65", "DA 66.1A", "DA 67", "DANCE 10.2", "DANCE 11.1", "DANCE 11.2", "DANCE 11.3", "DANCE 11.4", "DANCE 11.5", "DANCE 11.6", "DANCE 13.1", "DANCE 13.2", "DANCE 13.3", "DANCE 13.4", "DANCE 13.5", "DANCE 13.6", "DANCE 16.1", "DANCE 16.2", "DANCE 16.3", "DANCE 16.4", "DANCE 16.5", "DANCE 16.6", "DANCE 2", "DANCE 21.1", "DANCE 21.2", "DANCE 21.3", "DANCE 21.4", "DANCE 21.5", "DANCE 21.6", "DANCE 27", "DANCE 28", "DANCE 41", "DANCE 88.1", "DANCE 88.2", "DE 55B", "DET 179", "DET 181", "DET 182A", "DET 182B", "DET 189", "DH 71B", "DH 71E", "DH 72", "DH 74", "DH 75", "DH 76", "DH 83", "DH 85", "DH 86", "DIET 106.2", "DIET 176", "DIET 50", "DIET 52", "DIET 57", "DIET 70", "DIET 99", "DRD 250.2", "DRD 360.1", "DRD 360.2", "DRD 363", "DRD 370.1B", "DRD 370.2B", "DRD 370.3B", "DRD 390.3", "DRD 705", "DRD 761", "ECON 1", "ECON 12", "ECON 2", "EDUC 55", "ELEC 154", "ELEC 156", "ELEC 180", "ELEC 51A", "ELEC 60B", "ELEC 60D", "ELEC 98", "EMC 100", "EMC 103", "EMC 104.1", "EMC 105", "EMC 108", "EMC 109", "EMC 114", "EMC 115", "EMC 116", "EMC 116.1", "EMC 118", "EMC 119", "EMC 124", "EMC 130B", "EMC 130C", "EMC 130D", "EMC 131B", "EMC 132", "ENGL 10", "ENGL 100", "ENGL 100X", "ENGL 1A", "ENGL 1B", "ENGL 25", "ENGL 27", "ENGL 3", "ENGL 30.2", "ENGL 302X", "ENGL 305.1", "ENGL 305X", "ENGL 306X", "ENGL 307", "ENGL 33", "ENGL 46.2", "ENGL 49", "ENGL 4A", "ENGL 4B", "ENGL 4C", "ENGL 5", "ENGL 770", "ENGR 10", "ENGR 101", "ENGR 102", "ENGR 16", "ENGR 25", "ENGR 34", "ENGR 45", "ENGR 49", "ENGR 6", "ENVS 12", "ENVST 40", "EQSCI 101", "EQSCI 102A", "EQSCI 102B", "EQSCI 102C", "EQSCI 120", "EQSCI 151", "EQSCI 25", "EQSCI 52", "EQSCI 53", "ERTHS 85.2", "ESL 100", "ESL 308", "ESL 308B", "ESL 310", "ESL 310A", "ESL 310B", "ESL 311CP", "ESL 312", "ESL 313R", "ESL 314", "ESL 315CP", "ESL 315GR", "ESL 315R", "ESL 316", "ESL 317CP", "ESL 317GR", "ESL 317R", "ESL 320CP", "ESL 320R", "ESL 320W", "ESL 332", "ESL 335", "ESL 390.1", "ESL 390.4", "ESL 701", "ESL 712", "ESL 713", "ESL 713CP", "ESL 714", "ESL 714CP", "ESL 714RW", "ESL 715", "ESL 716", "ESL 716CP", "ESL 716RW", "ESL 722", "ESL 732", "ESL 735", "FASH 106", "FASH 121A", "FASH 121B", "FASH 152", "FASH 53", "FASH 60", "FASH 70A", "FASH 70B", "FDNT 10", "FDNT 162", "FDNT 60", "FDNT 61", "FDNT 62", "FDNT 70", "FDNT 75", "FIRE 107B", "FIRE 200.1", "FIRE 200.2", "FIRE 201", "FIRE 203", "FIRE 204A", "FIRE 204B", "FIRE 204C", "FIRE 206", "FIRE 208", "FIRE 208.1", "FIRE 209", "FIRE 241", "FIRE 258", "FIRE 708", "FIRE 71", "FIRE 72", "FIRE 73", "FIRE 74", "FIRE 76", "FIRE 77", "FIRE 78", "FIRE 99I", "FLORS 114", "FLORS 116", "FLORS 83A", "FLORS 83B", "FLORS 83C", "FREN 1", "FREN 2", "FREN 4", "FREN 50C", "GD 20", "GD 51", "GD 52", "GD 57", "GD 58", "GD 60", "GD 63", "GD 65", "GD 72", "GEOG 3", "GEOG 4", "GEOG 7", "GEOL 1", "GEOL 1L", "GERM 1", "GERM 2", "GERM 3", "GERM 4", "GIS 40", "GIS 51", "GIS 52", "GIS 56", "HIST 1.1", "HIST 1.2", "HIST 17.1", "HIST 17.2", "HIST 18.1", "HIST 18.2", "HIST 20", "HIST 21", "HIST 33", "HIST 4.1", "HIST 4.2", "HIST 5", "HIST 8.2", "HLC 111", "HLC 140", "HLC 160", "HLC 211", "HLE 5", "HLE 6", "HORT 112", "HORT 12", "HORT 180", "HORT 50.1", "HORT 56", "HORT 66", "HORT 70", "HORT 80", "HORT 92.1", "HORT 92.2", "HORT 94", "HOSP 50", "HOSP 53", "HOSP 54", "HOSP 63", "HOSP 80", "HR 60", "HR 61", "HR 62", "HR 63", "HR 64", "HR 65", "HR 66", "HUMAN 21", "HUMAN 4.2", "HUMAN 49", "HUMAN 5", "HUMAN 6", "HUMAN 7", "HUMAN 8", "IED 190", "INDE 128", "INDE 20", "INDE 50", "INDE 52", "INDE 63", "INDE 64.1", "INDE 99I", "INTDIS 4", "INTDIS 90", "ITAL 1", "ITAL 2", "ITAL 4", "JOUR 1", "JOUR 2", "JOUR 52A", "JOUR 52B", "JOUR 52C", "JOUR 52D", "JOUR 55", "KAQUA 1.1", "KAQUA 1.2", "KAQUA 10.1", "KAQUA 10.2", "KAQUA 2.1", "KAQUA 2.3", "KAQUA 3.1", "KAQUA 3.2", "KCOMB 1.1", "KCOMB 10", "KCOMB 2.1", "KCOMB 2.2", "KCOMB 2.3", "KCOMB 4.1", "KFIT 10.1", "KFIT 11.1", "KFIT 12.1", "KFIT 17.1", "KFIT 20.1", "KFIT 3.1", "KFIT 3.2", "KFIT 3.3", "KFIT 30.1", "KFIT 31.1", "KFIT 32.1", "KFIT 35.1", "KFIT 36.1", "KFIT 37.1", "KFIT 4.1", "KFIT 5.1", "KFIT 5.2", "KFIT 50", "KFIT 6.1", "KFIT 6.2", "KFIT 7.1", "KFIT 7.2", "KFIT 8.1", "KFIT 8.2", "KINDV 2.1", "KINDV 2.2", "KINDV 3.1", "KINDV 3.2", "KINDV 4.1", "KINDV 4.2", "KINDV 4.3", "KINES 1", "KINES 21", "KINES 3", "KINES 4", "KINES 49", "KINES 50", "KINES 53", "KINES 55", "KINES 59", "KINES 62A", "KINES 62B", "KINES 62C", "KINES 62D", "KINES 64", "KINES 82", "KTEAM 4.1", "KTEAM 4.2", "KTEAM 4.3", "KTEAM 6.1", "KTEAM 6.2", "KTEAM 6.3", "KTEAM 7.1", "KTEAM 8.1", "KTEAM 8.2", "KTEAM 9.1", "LIR 10", "MA 160", "MA 161", "MA 162", "MA 163B", "MA 163BL", "MA 164", "MA 166.4", "MA 167A", "MA 167B", "MA 168", "MA 169", "MA 171", "MACH 51A", "MACH 51B", "MACH 770", "MACH 80A", "MATH 10", "MATH 101", "MATH 15", "MATH 150A", "MATH 150B", "MATH 151", "MATH 155", "MATH 16", "MATH 1A", "MATH 1B", "MATH 1C", "MATH 2", "MATH 25", "MATH 27", "MATH 4", "MATH 49", "MATH 5", "MATH 58", "MATH 6", "MATH 70", "MATH 71", "MATH 770", "MATH 9", "MEDIA 10", "MEDIA 14", "MEDIA 15", "MEDIA 19", "MEDIA 20", "MEDIA 4", "METRO 10", "METRO 10L", "MICRO 5", "MICRO 60", "MUSC 1", "MUSC 15", "MUSC 18", "MUSC 2A", "MUSC 2B", "MUSC 2D", "MUSC 3A", "MUSC 3B", "MUSC 3D", "MUSC 49", "MUSC 4B", "MUSC 50", "MUSC 51B", "MUSC 5A", "MUSC 5B", "MUSC 6.2", "MUSC 60B", "MUSC 7", "MUSC 8", "MUSC 9", "MUSCP 11A", "MUSCP 11B", "MUSCP 11D", "MUSCP 17A", "MUSCP 17B", "MUSCP 21A", "MUSCP 21B", "MUSCP 21C", "MUSCP 21D", "MUSCP 23A", "MUSCP 23B", "MUSCP 23C", "MUSCP 23D", "MUSCP 30A", "MUSCP 30B", "MUSCP 30C", "MUSCP 30D", "MUSCP 32A", "MUSCP 32B", "MUSCP 32C", "MUSCP 32D", "MUSCP 33A", "MUSCP 33B", "MUSCP 33C", "MUSCP 33D", "MUSCP 40.1", "MUSCP 40.2", "MUSCP 40.3", "MUSCP 40.4", "MUSCP 40.5", "MUSCP 40.6", "MUSCP 40.7", "MUSCP 42A", "MUSCP 42B", "MUSCP 42C", "MUSCP 42D", "MUSCP19.1A", "MUSCP19.1B", "NR 74.1", "NR 74.2", "NR 75.1A", "NR 75B", "NR 75C", "NR 75D", "NRA 150A", "NRA 150B", "NRM 12", "NRM 131", "NRM 132", "NRM 142", "NRM 51", "NRM 60", "NRM 84", "NRM 86", "NRM 91", "NRM 98", "NRM 99", "NRM 99I", "NRV 51L", "NRV 58A", "OA 501", "OA 502", "OA 505", "OA 507", "OA 581", "PHARM 153", "PHARM 154B", "PHARM 155", "PHARM 156", "PHARM 255", "PHARM256.1", "PHIL 10", "PHIL 11", "PHIL 21", "PHIL 3", "PHIL 4", "PHIL 49", "PHIL 5", "PHIL 6", "PHIL 7", "PHIL 8", "PHYS 1", "PHYS 11", "PHYS 20", "PHYS 20L", "PHYS 21", "PHYS 21L", "PHYS 40", "PHYS 41", "PHYS 42", "PHYS 43", "PHYS 49", "PHYSC 21", "PHYSIO 1", "PHYSIO 58", "PLS 50", "PLS 51", "PLS 52", "PLS 54", "PLS 65", "PLS 99I", "POLS 1", "POLS 18", "POLS 25", "PSYCH 1A", "PSYCH 1B", "PSYCH 3", "PSYCH 30", "PSYCH 34", "PSYCH 4", "PSYCH 5", "PSYCH 52", "PSYCH 56", "PSYCH 57", "PSYCH 7", "RADT 100", "RADT 61B", "RADT 61BL", "RADT 62BL", "RADT 63A", "RADT 65", "RADT 66", "RADT 98", "RE 50", "RE 51", "RE 52", "RE 57", "RELS 1", "RELS 15", "RELS 3", "RELS 32", "RELS 6.66", "SE 580", "SE 712", "SOC 1", "SOC 10", "SOC 2", "SOC 3", "SOC 30", "SOCS 12", "SOCS 49", "SPAN 1", "SPAN 2", "SPAN 3", "SPAN 4", "SPAN 49", "SPAN 50A", "SPAN 50B", "SPCH 1A", "SPCH 3A", "SPCH 52A", "SPCH 52B", "SPCH 52C", "SPCH 52D", "SPCH 60", "SPCH 9", "SURV 57", "SURV 59", "SUSAG 103", "SUSAG 109", "SUSAG 119", "SUSAG 50", "THAR 1", "THAR 10A", "THAR 10B", "THAR 11.1", "THAR 11.2", "THAR 11.3", "THAR 11.4", "THAR 11.8", "THAR 13.1", "THAR 19", "THAR 2", "THAR 20", "THAR 21", "THAR 22A", "THAR 22B", "THAR 25", "THAR 25.1", "THAR 25.2", "THAR 25.3", "THAR 25.4", "THAR 25.5", "THAR 26", "THAR 27", "THAR 28", "THAR 49", "THAR 50L", "THAR 63", "VE 713", "VIT 1", "VIT 113", "VIT 131", "VIT 52", "VIT 53", "VIT 55", "WELD 171.1", "WELD 171.2", "WELD 171.3", "WELD 175A", "WELD 175B", "WELD 70", "WELD 98", "WEOC 99", "WEOC 99I", "WINE 1", "WINE 102", "WINE 110", "WINE 111", "WINE 119", "WINE 125", "WINE 130", "WINE 131", "WINE 3", "WINE 42.2", "WINE 55A", "WINE 62", "WINE 70", "WRKEX 97", "WTR 104", "WTR 110", "WTR 111", "WWTR 121", "WWTR 122", "WWTR 124" ];
	var currentCourses_ = [];
	// elements 
	/* private */
	var _ = {
		searchBox: $( "#add-box" ),
		searchButton: $( "#add-button" ),
		addBar: $( ".add-bar" ),
		addResults: $( "#add-results" ),
		addResultsList: $( "#add-results-list" ),
		collapseButton: $( ".add-collapse" ),
		closeButton: $( ".add-close" ),
	};


	this.Init = function()
	{
		self.BindEvents();
	};

	this.BindEvents = function()
	{
		_.searchButton.click( function()
		{
			self.ToggleSearch( true );
		} );

		_.searchBox.blur( function()
		{
			self.ToggleSearch( false );
		} );

		_.searchBox.focus( function()
		{
			self.ToggleResultsPanel( true );
		} );

		_.collapseButton.click( function()
		{
			self.ToggleResultsPanel();
		} );

		_.closeButton.click( function()
		{
			_.searchBox.val( "" );
			self.ToggleSearch( false );
			self.ToggleResultsPanel( false );
		} );

		_.searchBox.on( "input", function()
		{
			var value = _.searchBox.val();

			if ( value !== "" )
			{
				self.AutoCompleteCourseName( value );
			}
			else
			{
				_.addResultsList.html( "" );
			}
		} );

		_.addResultsList.on( "click", "li:not(.loading):not(.loaded)", function()
		{
			self.RequestCourseData( $( this ) );
		} );




	};

	this.ToggleSearch = function( active )
	{
		if ( active === undefined )
		{
			searchActive = !searchActive;
			this.ToggleSearch( searchActive );
		}
		else if ( active )
		{
			searchActive = true;
			_.searchBox.addClass( "active" );
			_.searchButton.removeClass( "active" );
			_.addBar.addClass( "active" );
			_.searchBox.focus();
			_.addResultsList.html( "" );
		}
		else
		{
			searchActive = false;
			if ( _.searchBox.val() === "" )
			{
				_.searchBox.removeClass( "active" );
				_.searchButton.addClass( "active" );
				_.addBar.removeClass( "active" );
				this.ToggleResultsPanel( false );
			}
		}
	};

	this.ToggleResultsPanel = function( active )
	{
		if ( active === undefined )
		{
			resultsPanelActive = !resultsPanelActive;
			this.ToggleResultsPanel( resultsPanelActive );
		}
		else if ( active )
		{
			resultsPanelActive = true;

			_.addResults.addClass( "active" );
			_.collapseButton.removeClass( 'up' );
		}
		else
		{
			resultsPanelActive = false;
			_.addResults.removeClass( "active" );
			_.collapseButton.addClass( 'up' );
		}
	};




	this.RequestCourseData = function( $li )
	{
		var courseTitle = $li.attr( "data-value" );

		console.log( courseTitle );

		$.ajax(
		{
			url: 'http://srjcscheduler.com/php/test1.php',
			beforeSend: function()
			{
				$li.addClass('loading');
				//$( '#loader' ).hide();
				//$( '#fountainG' ).show();
				//$( "#B_addCourse div" ).addClass( "disabled" );
			},
			data:
			{
				cls: courseTitle
			},
			timeout: 4000,
			complete: function( response )
			{
				var courseText = response.responseText;
				//console.log( courseText );
				$li.append('<span>Added</span>');
				$li.removeClass('loading');
				$li.addClass('loaded');

				currentCourses_.push( courseTitle );

				//$( '#loader' ).show();
				//$( '#fountainG' ).hide();
				//$( "#B_addCourse div" ).removeClass( "disabled" );


				//try
				//{
				//var title = courseText.match( /\t[A-Z]{2,7}[ ]*\d[A-Z0-9.]{0,6}\t/ )[ 0 ].trim();
				//var title = FormatCourseTitle( courseTitle )
				console.log( courseText );
				courseText = self.ParseCourseText( courseText );
				console.log( courseText );
				srjc.schedule.AddCourse( courseText, courseTitle );
				// }
				// catch ( err )
				// {
				// 	if ( courseText == "Course Not Found" )
				// 	{
				// 		alert( courseText );
				// 	}
				// 	else
				// 	{
				// 		alert( "A Server Error Occured" );
				// 	}

				// 	return;
				// }


			},
			error: function()
			{
				console.log( "Server Error" );
			}
		} );
	};

	this.ParseCourseText = function( courseText )
	{
		courseText = courseText.trim();
		courseText = courseText.match( /<(.*?)>/gm );
		return courseText;
	};

	this.AutoCompleteCourseName = function( search )
	{
		var results_ = [];
		var len = courseTitles_.length;
		var value = "";

		search = search.toUpperCase();
		search = search.replace( /([A-Z])(\d)/, '$1 $2' );

		var searchLen = search.length;


		console.log( search );

		for ( var i = 0; i < len; i++ )
		{
			value = courseTitles_[ i ];

			if ( value.substring( 0, searchLen ) === search )
			{
				results_.push( value );
			}
		}
		console.log( results_ );
		self.CreateResultsList( results_ );

	};

	// public //
	this.CreateResultsList = function( results_ )
	{
		var resultsLen = results_.length;

		if ( resultsLen === 0 )
		{
			_.addResultsList.html( "<span>No Courses Found</span>" );
		}
		else
		{
			_.addResultsList.html( "" );
		}


		for ( var i = 0; i < resultsLen; i++ )
		{
			var $li = $( "<li>" );
			var result = results_[ i ];
			
			$li.attr( "data-value", result )
				.append( result )
				.appendTo( _.addResultsList );
			if ( $.inArray(result , currentCourses_) > -1 )
			{
				$li.append('<span>Added</span>');
				$li.addClass('loaded');
			}

		}


	};



}
	



console.log("Button.js loaded");





console.log( "Main.js loaded" );

 var SPRING_START = MonthToDay( 1 ) + 12; // January 1
 var SPRING_END = MonthToDay( 5 ) + 15; // May 10

 var SUMMER_START = MonthToDay( 6 ) + 20; // june 20
 var SUMMER_END = MonthToDay( 7 ) + 27; // july 27

 var FALL_START = MonthToDay( 8 ) + 26; // august 26
 var FALL_END = MonthToDay( 12 ) + 9; // december 9


function SRJC()
{
    var self = this;
    this.schedule = null;
    this.info = null;
    this.canvas = null;
    this.add = null;

    // public //
    this.Init = function()
    {
        self.schedule = new Schedule();
        self.canvas = new Canvas();
        self.info = new Info();
        self.add = new Add();

        self.add.Init();
        self.canvas.Init();
    };

    $( '.b-restart>div>div' ).click( function()
    {
        //var temp_ = ["<5048―TTh┃T―9:00 am - 10:30 am┃11:15 am - 2:15 pm―Brumbaugh S┃Brumbaugh S―2004┃1869―4.00―Closed―0―01/13-05/14┃01/13-05/14―5/21/2015―>","<5049―TTh┃Th―9:00 am - 10:30 am┃11:15 am - 2:15 pm―Brumbaugh S┃Brumbaugh S―2004┃1869―4.00―Closed―0―01/13-05/14┃01/13-05/14―5/21/2015―>","<5051―TTh┃T―12:00 pm - 1:30 pm┃2:30 pm - 5:30 pm―Zoger A┃Zoger A―2004┃1869―4.00―Closed―0―01/13-05/14┃01/13-05/14―5/21/2015―>"];
        //schedule.AddCourse( temp_, "MATH 2", 1 );
        self.add.RequestCourseData( "PHYS 40" );
    } );



}


var srjc = new SRJC();

$( function() // document has been loaded
    {
        srjc.Init();
    } );








function MonthToDay( month )
{
    var day = 0;

    switch ( month )
    {
        case 2:
            day += 31;
            break;
        case 3:
            day += 59;
            break;
        case 4:
            day += 90;
            break;
        case 5:
            day += 120;
            break;
        case 6:
            day += 151;
            break;
        case 7:
            day += 181;
            break;
        case 8:
            day += 212;
            break;
        case 9:
            day += 243;
            break;
        case 10:
            day += 273;
            break;
        case 11:
            day += 304;
            break;
        case 12:
            day += 334;
            break;
    }

    return day;
}

//# sourceMappingURL=production.js.map
"use strict";function _typeof(t){function e(t){return o.apply(this,arguments)}var o,n;function r(t){return n.apply(this,arguments)}return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?(n=function(t){return void 0===t?"undefined":_typeof(t)},r.toString=function(){return n.toString()},r):(o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof(t)},e.toString=function(){return o.toString()},e))(t)}!function(t,e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"object"==("undefined"==typeof module?"undefined":_typeof(module))?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?exports.POWERMODE=e():t.POWERMODE=e()}(void 0,function(){return r={},o.m=n=[function(t,e,l){var r=document.createElement("canvas");r.width=window.innerWidth,r.height=window.innerHeight,r.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){r.width=window.innerWidth,r.height=window.innerHeight}),document.body.appendChild(r);var i=r.getContext("2d"),u=[],f=0,p=!1;function o(t,e){return Math.random()*(e-t)+t}function c(t){if(s.colorful){var e=o(0,360);return"hsla("+o(e-10,e+10)+", 100%, "+o(50,80)+"%, 1)"}return window.getComputedStyle(t).color}function s(){for(var t=function(){var t,e=document.activeElement;if("TEXTAREA"===e.tagName||"INPUT"===e.tagName&&"text"===e.getAttribute("type")){var o=l(1)(e,e.selectionEnd);return t=e.getBoundingClientRect(),{x:o.left+t.left,y:o.top+t.top,color:c(e)}}var n=window.getSelection();if(n.rangeCount){var r=n.getRangeAt(0),i=r.startContainer;return i.nodeType===document.TEXT_NODE&&(i=i.parentNode),{x:(t=r.getBoundingClientRect()).left,y:t.top,color:c(i)}}return{x:0,y:0,color:"transparent"}}(),e=5+Math.round(10*Math.random());e--;)u[f]=(o=t.x,n=t.y,r=t.color,{x:o,y:n,alpha:1,color:r,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}}),f=(f+1)%500;var o,n,r;if(s.shake){var i=1+2*Math.random(),d=i*(.5<Math.random()?-1:1),a=i*(.5<Math.random()?-1:1);document.body.style.marginLeft=d+"px",document.body.style.marginTop=a+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)}p||requestAnimationFrame(y)}function y(){p=!0,i.clearRect(0,0,r.width,r.height);for(var t=!1,e=r.getBoundingClientRect(),o=0;o<u.length;++o){var n=u[o];n.alpha<=.1||(n.velocity.y+=.075,n.x+=n.velocity.x,n.y+=n.velocity.y,n.alpha*=.96,i.globalAlpha=n.alpha,i.fillStyle=n.color,i.fillRect(Math.round(n.x-1.5)-e.left,Math.round(n.y-1.5)-e.top,3,3),t=!0)}t?requestAnimationFrame(y):p=!1}s.shake=!0,s.colorful=!1,t.exports=s},function(t,e){function o(t,e,o){var n=o&&o.debug||!1;if(n){var r=document.querySelector("#input-textarea-caret-position-mirror-div");r&&r.parentNode.removeChild(r)}var i=document.createElement("div");i.id="input-textarea-caret-position-mirror-div",document.body.appendChild(i);var d=i.style,a=window.getComputedStyle?getComputedStyle(t):t.currentStyle;d.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(d.wordWrap="break-word"),d.position="absolute",n||(d.visibility="hidden"),f.forEach(function(t){d[t]=a[t]}),p?t.scrollHeight>parseInt(a.height)&&(d.overflowY="scroll"):d.overflow="hidden",i.textContent=t.value.substring(0,e),"INPUT"===t.nodeName&&(i.textContent=i.textContent.replace(/\s/g," "));var l=document.createElement("span");l.textContent=t.value.substring(e)||".",i.appendChild(l);var u={top:l.offsetTop+parseInt(a.borderTopWidth),left:l.offsetLeft+parseInt(a.borderLeftWidth)};return n?l.style.backgroundColor="#aaa":document.body.removeChild(i),u}var f,p;f=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],p=null!=window.mozInnerScreenX,void 0!==t&&void 0!==t.exports?t.exports=o:window.getCaretCoordinates=o}],o.c=r,o.p="",o(0);function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,o),e.loaded=!0,e.exports}var n,r});
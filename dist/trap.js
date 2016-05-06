'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function(root,factory){if(typeof define==='function'&&define.amd){define([],function(){var trap=factory();var trapReturn={};for(var f in trap.global){if(trap.global.hasOwnProperty(f)){trapReturn[f]=trap.global[f];}}for(var _f in trap.browser){if(trap.browser.hasOwnProperty(_f)){trapReturn[_f]=trap.browser[_f];}}return trapReturn;});}else if((typeof module==='undefined'?'undefined':_typeof(module))==='object'&&module.exports){var trap=factory();var trapReturn=trap.global;trapReturn.version=trap.version;module.exports=trapReturn;}else {var _trap=factory();root.Trap=_trap;for(var f in _trap.global){if(_trap.global.hasOwnProperty(f)){root[f]=_trap.global[f];}}for(var _f2 in _trap.browser){if(_trap.browser.hasOwnProperty(_f2)){root[_f2]=_trap.browser[_f2];}}}})(this,function(){var trap={version:'1.0.0',noConflict:function noConflict(){if(window){for(var f in trap.global){if(trap.global.hasOwnProperty(f)){delete window[f];}}for(var _f3 in trap.browser){if(trap.browser.hasOwnProperty(_f3)){delete window[_f3];}}}},float:function float(){if(window){for(var f in trap.global){if(trap.global.hasOwnProperty(f)){window[f]=trap.global[f];}}for(var _f4 in trap.browser){if(trap.browser.hasOwnProperty(_f4)){window[_f4]=trap.browser[_f4];}}}}};Date.prototype.dateEquals=function(targetDate){var sourceDate=this;if(targetDate instanceof Date){return sourceDate.getDate()==targetDate.getDate()&&sourceDate.getMonth()==targetDate.getMonth()&&sourceDate.getFullYear()==targetDate.getFullYear();}else {return !1;}};String.prototype.unicodeCharAt=function(index){var str=this;var ret='';var end=str.length;var surrogatePairs=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;while(surrogatePairs.exec(str)!=null){var li=surrogatePairs.lastIndex;if(li-2<index){index++;}else {break;}}if(index>=end||index<0){return '';}ret+=str.charAt(index);if(/[\uD800-\uDBFF]/.test(ret)&&/[\uDC00-\uDFFF]/.test(str.charAt(index+1))){ret+=str.charAt(index+1);}return ret;};trap.global={log:function log(){var _console;(_console=console).log.apply(_console,arguments);},today:function today(){return new Date();},repeatUntil:function repeatUntil(conditionFunc,exec){while(!conditionFunc()){exec();}},repeat:function repeat(numTimes,exec){for(var i=0;i<numTimes;i++){exec();}},sqrt:function sqrt(number){return Math.sqrt(number);},reverse:function reverse(str){var ret='';for(var i=str.length-1;i>=0;i--){ret+=str.unicodeCharAt(i);}return ret;}};trap.browser={echo:function echo(text){document.write(text);},notify:function notify(text){alert(text);},getParameter:function getParameter(name){var searchString=window.location.search.substring(1);var params=searchString.split('&');for(var i in params){var param=params[i].split('=');if(param[0]==name){return param[1];}}},setCookie:function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);var expires='expires='+d.toUTCString();document.cookie=cname+'='+cvalue+'; '+expires;},getCookie:function getCookie(cname){var name=cname+'=';var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}if(c.indexOf(name)==0){var value=c.substring(name.length,c.length);if(!isNaN(value)){return parseFloat(value);}else {return value;}}}return '';},delCookie:function delCookie(cname){document.cookie=cname+'=; expires='+new Date(0).toUTCString();},loadDoc:function loadDoc(url,elementId){var xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(xhttp.readyState==4&&xhttp.status==200){document.getElementById(elementId).innerHTML=xhttp.responseText;}};xhttp.open('GET',url,!0);xhttp.send();}};trap.browser.say=trap.browser.notify;return trap;});
require=function u(r,i,a){function f(c,n){if(!i[c]){if(!r[c]){var t="function"==typeof require&&require;if(!n&&t)return t(c,!0);if(p)return p(c,!0);var o=new Error("Cannot find module '"+c+"'");throw o.code="MODULE_NOT_FOUND",o}var e=i[c]={exports:{}};r[c][0].call(e.exports,function(n){return f(r[c][1][n]||n)},e,e.exports,u,r,i,a)}return i[c].exports}for(var p="function"==typeof require&&require,n=0;n<a.length;n++)f(a[n]);return f}({LiuHai:[function(n,c,t){"use strict";cc._RF.push(c,"3347esRUr1N5oHdX5fgpSqF","LiuHai"),cc.Class({extends:cc.Component,properties:{btn_BackHome:cc.Button,btn_ZuoZhe:cc.Button,btn_ZuoPin:cc.Button,btn_HuaMian:cc.Button,btn_ChuanShuo:cc.Button,btn_XiangGuan:cc.Button},OnBackHome:function(){cc.director.loadScene("首页")}}),cc._RF.pop()},{}],ShouYe:[function(n,c,t){"use strict";cc._RF.push(c,"eeb5a1TYohPuK9xmF7oS2K/","ShouYe"),cc.Class({extends:cc.Component,properties:{btn_LiuHai:cc.Button,btn_ZiHua:cc.Button,btn_LuoHan:cc.Button},OnLiuHai:function(){cc.director.loadScene("刘海")},OnZiHua:function(){cc.director.loadScene("字画")},OnLuoHan:function(){cc.director.loadScene("罗汉")}}),cc._RF.pop()},{}]},{},["LiuHai","ShouYe"]);
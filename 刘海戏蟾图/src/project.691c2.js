require=function o(a,u,s){function h(c,i){if(!u[c]){if(!a[c]){var n="function"==typeof require&&require;if(!i&&n)return n(c,!0);if(r)return r(c,!0);var e=new Error("Cannot find module '"+c+"'");throw e.code="MODULE_NOT_FOUND",e}var t=u[c]={exports:{}};a[c][0].call(t.exports,function(i){return h(a[c][1][i]||i)},t,t.exports,o,a,u,s)}return u[c].exports}for(var r="function"==typeof require&&require,i=0;i<s.length;i++)h(s[i]);return h}({Action_XuanZhuan:[function(i,c,n){"use strict";cc._RF.push(c,"0edcacAjjxJRoDCn8giY7xp","Action_XuanZhuan"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.node.runAction(cc.repeatForever(cc.rotateBy(6,360)))}}),cc._RF.pop()},{}],Back_Home:[function(i,c,n){"use strict";cc._RF.push(c,"4457eXO0uFG0Ye9KVAQebHa","Back_Home"),cc.Class({extends:cc.Component,properties:{},BackHome:function(){cc.director.loadScene("首页")}}),cc._RF.pop()},{}],Back_LH:[function(i,c,n){"use strict";cc._RF.push(c,"76ec0zJpjVBVJBJWg24NJuv","Back_LH"),cc.Class({extends:cc.Component,properties:{},OnBack:function(){cc.director.loadScene("刘海")}}),cc._RF.pop()},{}],Back_LuoHan:[function(i,c,n){"use strict";cc._RF.push(c,"43075LBvFVM1b/P7LLEHNbs","Back_LuoHan"),cc.Class({extends:cc.Component,properties:{btn_back_LuoHan:cc.Button},onBack_LuoHan:function(){cc.director.loadScene("罗汉")}}),cc._RF.pop()},{}],Back_ShuFa:[function(i,c,n){"use strict";cc._RF.push(c,"a8897ueSqZHkKZff3QPYmNv","Back_ShuFa"),cc.Class({extends:cc.Component,properties:{},BackShuFa:function(){cc.director.loadScene("字画")}}),cc._RF.pop()},{}],FangDaJing:[function(i,c,n){"use strict";cc._RF.push(c,"b6520Px2ytPLJ45jvt3QmnN","FangDaJing"),cc.Class({extends:cc.Component,properties:{FDJ_sprite:{default:null,type:cc.Sprite},camera:{default:null,type:cc.Camera}},start:function(){var i=new cc.RenderTextrue;i.initWithSize(cc.visibleRect.width,cc.visibleRect.height);var c=new cc.SpriteFrame;c.setTexture(i),this.FDJ_sprite.spriteFrame=c,this.camera.targetTextrue=i}}),cc._RF.pop()},{}],LiuHai:[function(i,c,n){"use strict";cc._RF.push(c,"3347esRUr1N5oHdX5fgpSqF","LiuHai"),cc.Class({extends:cc.Component,properties:{btn_BackHome:cc.Button,btn_ZuoZhe:cc.Button,btn_ZuoPin:cc.Button,btn_HuaMian:cc.Button,btn_ChuanShuo:cc.Button,ChuanShuoDianGu:cc.Node,btn_XiangGuan:cc.Button,ZuoZheJianJie:cc.Node,HuaMianJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!1,this.is_XG=!1},OnBackHome:function(){cc.director.loadScene("首页")},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onHuaMianJieDu:function(){0==this.isB?(this.HuaMianJieDu.active=!0,this.isB=!0):(this.HuaMianJieDu.active=!1,this.isB=!1)},onHuaMianJieDu_Close:function(){this.HuaMianJieDu.active=!1,this.isB=!1},onChuanShuoDianGu:function(){0==this.is_CS?(this.ChuanShuoDianGu.active=!0,this.is_CS=!0):(this.ChuanShuoDianGu.active=!1,this.is_CS=!1)},OnJinChan:function(){cc.director.loadScene("金蟾")},OnFuShi:function(){cc.director.loadScene("服饰")},OnZiZhi:function(){cc.director.loadScene("紫芝")},OnHuLu:function(){cc.director.loadScene("葫芦")},OnXiangGuanZuoPin:function(){cc.director.loadScene("刘海_相关")},OnZuoPinJianShang:function(){cc.director.loadScene("刘海_鉴赏")}}),cc._RF.pop()},{}],LuoHan:[function(i,c,n){"use strict";cc._RF.push(c,"9a019K8eK1Gg54eqXXQQsuh","LuoHan"),cc.Class({extends:cc.Component,properties:{btn_ZuoZheJianJie:cc.Button,btn_ZuoPinJianShang:cc.Button,btn_DongTaiJieDu:cc.Button,btn_XiangGuanZuoPin:cc.Button,ZuoZheJianJie:cc.Node,HuaMianJieDu:cc.Node,JJ_LH01:cc.Node,JJ_LH02:cc.Node,JJ_LH03:cc.Node,JJ_LH04:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.HuaMianJieDu.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!1,this.is_XG=!1,this.JJ_LH01.active=!1,this.JJ_LH02.active=!1,this.JJ_LH03.active=!1,this.JJ_LH04.active=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onHuaMianJieDu:function(){0==this.isB?(this.HuaMianJieDu.active=!0,this.isB=!0):(this.HuaMianJieDu.active=!1,this.isB=!1)},onHuaMianJieDu_Close:function(){this.HuaMianJieDu.active=!1,this.isB=!1},LuoHan01:function(){this.JJ_LH01.active=!0},close_LuoHan01:function(){this.JJ_LH01.active=!1},LuoHan02:function(){this.JJ_LH02.active=!0},close_LuoHan02:function(){this.JJ_LH02.active=!1},LuoHan03:function(){this.JJ_LH03.active=!0},close_LuoHan03:function(){this.JJ_LH03.active=!1},LuoHan04:function(){this.JJ_LH04.active=!0},close_LuoHan04:function(){this.JJ_LH04.active=!1},OnDongTaiJieDu:function(){cc.director.loadScene("罗汉_动态解读")},OnXiangGuanZuoPin:function(){cc.director.loadScene("罗汉_相关")},OnJianShang:function(){cc.director.loadScene("罗汉_鉴赏")}}),cc._RF.pop()},{}],ShouShiSuoFang:[function(i,c,n){"use strict";cc._RF.push(c,"5e0c3ng/hBIkrZDZfbLG3SJ","ShouShiSuoFang"),cc.Class({extends:cc.Component,properties:{canvas:cc.Node,target:cc.Node},onLoad:function(){var J=this,d=this.node.parent;J.canvas.on(cc.Node.EventType.TOUCH_MOVE,function(i){var c=i.getTouches();if(2<=c.length){var n=c[0],e=c[1],t=n.getDelta(),o=e.getDelta(),a=d.convertToNodeSpaceAR(n.getLocation()),u=d.convertToNodeSpaceAR(e.getLocation()),s=a.sub(u),h=t.sub(o),r=1;r=Math.abs(s.x)>Math.abs(s.y)?(s.x+h.x)/s.x*J.target.scale:(s.y+h.y)/s.y*J.target.scale,J.target.scale=r<.1?.1:r}},J.node)}}),cc._RF.pop()},{}],ShouYe:[function(i,c,n){"use strict";cc._RF.push(c,"eeb5a1TYohPuK9xmF7oS2K/","ShouYe"),cc.Class({extends:cc.Component,properties:{btn_LiuHai:cc.Button,btn_ZiHua:cc.Button,btn_LuoHan:cc.Button},OnLiuHai:function(){cc.director.loadScene("刘海")},OnZiHua:function(){cc.director.loadScene("字画")},OnLuoHan:function(){cc.director.loadScene("罗汉")}}),cc._RF.pop()},{}],ShuFa:[function(i,c,n){"use strict";cc._RF.push(c,"d0638iAl7hA4bbw34IBQSAL","ShuFa"),cc.Class({extends:cc.Component,properties:{ZuoZheJianJie:cc.Node,ShuFaJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.ShuFaJieDu.active=!1,this.isA=!1,this.isB=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onShuFaJieDu:function(){0==this.isB?(this.ShuFaJieDu.active=!0,this.isB=!0):(this.ShuFaJieDu.active=!1,this.isB=!1)},onShuFaJieDu_Close:function(){this.ShuFaJieDu.active=!1,this.isB=!1},OnShuFaYiWen:function(){cc.director.loadScene("书法_译文")},OnXiangGuan:function(){cc.director.loadScene("书法_相关")},OnJianShang:function(){cc.director.loadScene("书法_鉴赏")}}),cc._RF.pop()},{}],audio:[function(i,c,n){"use strict";cc._RF.push(c,"1b71113ODxKEoLqctlaJtnj","audio"),cc.Class({extends:cc.Component,properties:{audio:{url:cc.AudioClip,default:null}},onLoad:function(){this.current=cc.audioEngine.play(this.audio,!0,1)},onDestroy:function(){cc.audioEngine.stop(this.current)}}),cc._RF.pop()},{}],video:[function(i,c,n){"use strict";cc._RF.push(c,"19e8doxvllId5F/R2mgmAW2","video"),cc.Class({extends:cc.Component,properties:{video_Player:cc.VideoPlayer},onLoad:function(){this.video_Player.play(),this.video_Player.loop=!0}}),cc._RF.pop()},{}]},{},["Action_XuanZhuan","Back_Home","Back_LH","Back_LuoHan","Back_ShuFa","FangDaJing","LiuHai","LuoHan","ShouShiSuoFang","ShouYe","ShuFa","audio","video"]);
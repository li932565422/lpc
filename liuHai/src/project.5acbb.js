require=function o(a,u,s){function h(t,i){if(!u[t]){if(!a[t]){var c="function"==typeof require&&require;if(!i&&c)return c(t,!0);if(r)return r(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var e=u[t]={exports:{}};a[t][0].call(e.exports,function(i){return h(a[t][1][i]||i)},e,e.exports,o,a,u,s)}return u[t].exports}for(var r="function"==typeof require&&require,i=0;i<s.length;i++)h(s[i]);return h}({Action_XuanZhuan:[function(i,t,c){"use strict";cc._RF.push(t,"0edcacAjjxJRoDCn8giY7xp","Action_XuanZhuan"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.rAction=this.rotateAction(),this.node.runAction(this.rAction)},rotateAction:function(){return cc.repeatForever(cc.rotateBy(6,360))}}),cc._RF.pop()},{}],Animate_ShouShi:[function(i,t,c){"use strict";cc._RF.push(t,"abf6762hrhCUr08M50S6MhL","Animate_ShouShi"),cc.Class({extends:cc.Component,properties:{Anim_ShouShi:cc.Node,btn_Anim:cc.Button},start:function(){},onAnim:function(){this.Anim_ShouShi.active=!1}}),cc._RF.pop()},{}],Back_Home:[function(i,t,c){"use strict";cc._RF.push(t,"4457eXO0uFG0Ye9KVAQebHa","Back_Home"),cc.Class({extends:cc.Component,properties:{},BackHome:function(){cc.director.loadScene("首页")}}),cc._RF.pop()},{}],Back_LH:[function(i,t,c){"use strict";cc._RF.push(t,"76ec0zJpjVBVJBJWg24NJuv","Back_LH"),cc.Class({extends:cc.Component,properties:{},OnBack:function(){cc.director.loadScene("刘海")}}),cc._RF.pop()},{}],Back_LuoHan:[function(i,t,c){"use strict";cc._RF.push(t,"43075LBvFVM1b/P7LLEHNbs","Back_LuoHan"),cc.Class({extends:cc.Component,properties:{btn_back_LuoHan:cc.Button},onBack_LuoHan:function(){cc.director.loadScene("罗汉")}}),cc._RF.pop()},{}],Back_ShuFa:[function(i,t,c){"use strict";cc._RF.push(t,"a8897ueSqZHkKZff3QPYmNv","Back_ShuFa"),cc.Class({extends:cc.Component,properties:{},BackShuFa:function(){cc.director.loadScene("字画")}}),cc._RF.pop()},{}],FangDaJing:[function(i,t,c){"use strict";cc._RF.push(t,"b6520Px2ytPLJ45jvt3QmnN","FangDaJing"),cc.Class({extends:cc.Component,properties:{canvas:cc.Node,target:cc.Node},onLoad:function(){this.TuoDong();var J=this,d=this.node.parent;J.canvas.on(cc.Node.EventType.TOUCH_MOVE,function(i){var t=i.getTouches();if(2<=t.length){var c=t[0],n=t[1],e=c.getDelta(),o=n.getDelta(),a=d.convertToNodeSpaceAR(c.getLocation()),u=d.convertToNodeSpaceAR(n.getLocation()),s=a.sub(u),h=e.sub(o),r=1;Math.abs(s.x)>Math.abs(s.y)?2.5<(r=(s.x+h.x)/s.x*J.target.scale)&&(r=2.5):2.5<(r=(s.y+h.y)/s.y*J.target.scale)&&(r=2.5),r<1&&(r=1),J.target.scale=r<.1?.1:r}},J.node)},TuoDong:function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,function(i){this.opacity=255;var t=i.touch.getDelta();this.x+=t.x,810<this.x&&(this.x=810),this.x<-810&&(this.x=-810),this.y+=t.y,1440<this.y&&(this.y=1440),this.y<-1440&&(this.y=-1440)},this.node)}}),cc._RF.pop()},{}],LiuHai:[function(i,t,c){"use strict";cc._RF.push(t,"3347esRUr1N5oHdX5fgpSqF","LiuHai"),cc.Class({extends:cc.Component,properties:{btn_BackHome:cc.Button,btn_ZuoZhe:cc.Button,btn_ZuoPin:cc.Button,btn_HuaMian:cc.Button,btn_ChuanShuo:cc.Button,ChuanShuoDianGu:cc.Node,btn_XiangGuan:cc.Button,ZuoZheJianJie:cc.Node,HuaMianJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!1,this.is_XG=!1},OnBackHome:function(){cc.director.loadScene("首页")},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.HuaMianJieDu.active=!1,this.ChuanShuoDianGu.active=!1,this.isB=!1,this.is_CS=!1,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onHuaMianJieDu:function(){0==this.isB?(this.HuaMianJieDu.active=!0,this.ZuoZheJianJie.active=!1,this.ChuanShuoDianGu.active=!1,this.isA=!1,this.is_CS=!1,this.isB=!0):(this.HuaMianJieDu.active=!1,this.isB=!1)},onHuaMianJieDu_Close:function(){this.HuaMianJieDu.active=!1,this.isB=!1},onChuanShuoDianGu:function(){0==this.is_CS?(this.ChuanShuoDianGu.active=!0,this.ZuoZheJianJie.active=!1,this.HuaMianJieDu.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!0):(this.ChuanShuoDianGu.active=!1,this.is_CS=!1)},OnJinChan:function(){cc.director.loadScene("金蟾")},OnFuShi:function(){cc.director.loadScene("服饰")},OnZiZhi:function(){cc.director.loadScene("紫芝")},OnHuLu:function(){cc.director.loadScene("葫芦")},OnXiangGuanZuoPin:function(){cc.director.loadScene("刘海_相关")},OnZuoPinJianShang:function(){cc.director.loadScene("刘海_鉴赏")}}),cc._RF.pop()},{}],LuoHan:[function(i,t,c){"use strict";cc._RF.push(t,"9a019K8eK1Gg54eqXXQQsuh","LuoHan"),cc.Class({extends:cc.Component,properties:{btn_ZuoZheJianJie:cc.Button,btn_ZuoPinJianShang:cc.Button,btn_DongTaiJieDu:cc.Button,btn_XiangGuanZuoPin:cc.Button,ZuoZheJianJie:cc.Node,HuaMianJieDu:cc.Node,JJ_LH01:cc.Node,JJ_LH02:cc.Node,JJ_LH03:cc.Node,JJ_LH04:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.HuaMianJieDu.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!1,this.is_XG=!1,this.JJ_LH01.active=!1,this.JJ_LH02.active=!1,this.JJ_LH03.active=!1,this.JJ_LH04.active=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.HuaMianJieDu.active=!1,this.isB=!1,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onHuaMianJieDu:function(){0==this.isB?(this.HuaMianJieDu.active=!0,this.ZuoZheJianJie.active=!1,this.isA=!1,this.isB=!0):(this.HuaMianJieDu.active=!1,this.isB=!1)},onHuaMianJieDu_Close:function(){this.HuaMianJieDu.active=!1,this.isB=!1},LuoHan01:function(){this.JJ_LH01.active=!0},close_LuoHan01:function(){this.JJ_LH01.active=!1},LuoHan02:function(){this.JJ_LH02.active=!0},close_LuoHan02:function(){this.JJ_LH02.active=!1},LuoHan03:function(){this.JJ_LH03.active=!0},close_LuoHan03:function(){this.JJ_LH03.active=!1},LuoHan04:function(){this.JJ_LH04.active=!0},close_LuoHan04:function(){this.JJ_LH04.active=!1},OnDongTaiJieDu:function(){cc.director.loadScene("罗汉_动态解读")},OnXiangGuanZuoPin:function(){cc.director.loadScene("罗汉_相关")},OnJianShang:function(){cc.director.loadScene("罗汉_鉴赏")}}),cc._RF.pop()},{}],ShouShiSuoFang:[function(i,t,c){"use strict";cc._RF.push(t,"5e0c3ng/hBIkrZDZfbLG3SJ","ShouShiSuoFang"),cc.Class({extends:cc.Component,properties:{canvas:cc.Node,target:cc.Node},onLoad:function(){var J=this,d=this.node.parent;J.canvas.on(cc.Node.EventType.TOUCH_MOVE,function(i){var t=i.getTouches();if(2<=t.length){var c=t[0],n=t[1],e=c.getDelta(),o=n.getDelta(),a=d.convertToNodeSpaceAR(c.getLocation()),u=d.convertToNodeSpaceAR(n.getLocation()),s=a.sub(u),h=e.sub(o),r=1;r=Math.abs(s.x)>Math.abs(s.y)?(s.x+h.x)/s.x*J.target.scale:(s.y+h.y)/s.y*J.target.scale,J.target.scale=r<.1?.1:r}},J.node)}}),cc._RF.pop()},{}],ShouYe:[function(i,t,c){"use strict";cc._RF.push(t,"eeb5a1TYohPuK9xmF7oS2K/","ShouYe"),cc.Class({extends:cc.Component,properties:{btn_LiuHai:cc.Button,btn_ZiHua:cc.Button,btn_LuoHan:cc.Button},OnLiuHai:function(){cc.director.loadScene("刘海")},OnZiHua:function(){cc.director.loadScene("字画")},OnLuoHan:function(){cc.director.loadScene("罗汉")}}),cc._RF.pop()},{}],ShuFa:[function(i,t,c){"use strict";cc._RF.push(t,"d0638iAl7hA4bbw34IBQSAL","ShuFa"),cc.Class({extends:cc.Component,properties:{ZuoZheJianJie:cc.Node,ShuFaJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.ShuFaJieDu.active=!1,this.isA=!1,this.isB=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.ShuFaJieDu.active=!1,this.isB=!1,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onShuFaJieDu:function(){0==this.isB?(this.ShuFaJieDu.active=!0,this.ZuoZheJianJie.active=!1,this.isA=!1,this.isB=!0):(this.ShuFaJieDu.active=!1,this.isB=!1)},onShuFaJieDu_Close:function(){this.ShuFaJieDu.active=!1,this.isB=!1},OnShuFaYiWen:function(){cc.director.loadScene("书法_译文")},OnXiangGuan:function(){cc.director.loadScene("书法_相关")},OnJianShang:function(){cc.director.loadScene("书法_鉴赏")}}),cc._RF.pop()},{}],audio:[function(i,t,c){"use strict";cc._RF.push(t,"1b71113ODxKEoLqctlaJtnj","audio"),cc.Class({extends:cc.Component,properties:{audio:{url:cc.AudioClip,default:null}},onLoad:function(){this.current=cc.audioEngine.play(this.audio,!0,1)},onDestroy:function(){cc.audioEngine.stop(this.current)}}),cc._RF.pop()},{}],video:[function(i,t,c){"use strict";cc._RF.push(t,"19e8doxvllId5F/R2mgmAW2","video"),cc.Class({extends:cc.Component,properties:{video_Player:cc.VideoPlayer},onLoad:function(){this.video_Player.play(),this.video_Player.loop=!0}}),cc._RF.pop()},{}]},{},["Action_XuanZhuan","Animate_ShouShi","Back_Home","Back_LH","Back_LuoHan","Back_ShuFa","FangDaJing","LiuHai","LuoHan","ShouShiSuoFang","ShouYe","ShuFa","audio","video"]);
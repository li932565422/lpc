window.__require=function i(t,c,n){function e(a,s){if(!c[a]){if(!t[a]){var u=a.split("/");if(u=u[u.length-1],!t[u]){var h="function"==typeof __require&&__require;if(!s&&h)return h(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+a+"'")}}var r=c[a]={exports:{}};t[a][0].call(r.exports,function(i){return e(t[a][1][i]||i)},r,r.exports,i,t,c,n)}return c[a].exports}for(var o="function"==typeof __require&&__require,a=0;a<n.length;a++)e(n[a]);return e}({Action_XuanZhuan:[function(i,t,c){"use strict";cc._RF.push(t,"0edcacAjjxJRoDCn8giY7xp","Action_XuanZhuan"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.rAction=this.rotateAction(),this.node.runAction(this.rAction)},rotateAction:function(){return cc.repeatForever(cc.rotateBy(6,360))}}),cc._RF.pop()},{}],Animate_ShouShi:[function(i,t,c){"use strict";cc._RF.push(t,"abf6762hrhCUr08M50S6MhL","Animate_ShouShi"),cc.Class({extends:cc.Component,properties:{Anim_ShouShi:cc.Node,btn_Anim:cc.Button},start:function(){},onAnim:function(){this.Anim_ShouShi.active=!1}}),cc._RF.pop()},{}],Back_Home:[function(i,t,c){"use strict";cc._RF.push(t,"4457eXO0uFG0Ye9KVAQebHa","Back_Home"),cc.Class({extends:cc.Component,properties:{},BackHome:function(){cc.director.loadScene("\u9996\u9875")}}),cc._RF.pop()},{}],Back_LH:[function(i,t,c){"use strict";cc._RF.push(t,"76ec0zJpjVBVJBJWg24NJuv","Back_LH"),cc.Class({extends:cc.Component,properties:{},OnBack:function(){cc.director.loadScene("\u5218\u6d77")}}),cc._RF.pop()},{}],Back_LuoHan:[function(i,t,c){"use strict";cc._RF.push(t,"43075LBvFVM1b/P7LLEHNbs","Back_LuoHan"),cc.Class({extends:cc.Component,properties:{btn_back_LuoHan:cc.Button},onBack_LuoHan:function(){cc.director.loadScene("\u7f57\u6c49")}}),cc._RF.pop()},{}],Back_ShuFa:[function(i,t,c){"use strict";cc._RF.push(t,"a8897ueSqZHkKZff3QPYmNv","Back_ShuFa"),cc.Class({extends:cc.Component,properties:{},BackShuFa:function(){cc.director.loadScene("\u5b57\u753b")}}),cc._RF.pop()},{}],FangDaJing:[function(i,t,c){"use strict";cc._RF.push(t,"b6520Px2ytPLJ45jvt3QmnN","FangDaJing"),cc.Class({extends:cc.Component,properties:{canvas:cc.Node,target:cc.Node},onLoad:function(){this.TuoDong();var i=this,t=this.node.parent;i.canvas.on(cc.Node.EventType.TOUCH_MOVE,function(c){var n=c.getTouches();if(n.length>=2){var e=n[0],o=n[1],a=e.getDelta(),s=o.getDelta(),u=t.convertToNodeSpaceAR(e.getLocation()),h=t.convertToNodeSpaceAR(o.getLocation()),r=u.sub(h),p=a.sub(s),d=1;Math.abs(r.x)>Math.abs(r.y)?((d=(r.x+p.x)/r.x*i.target.scale)>6&&(d=6),d<1&&(d=1)):((d=(r.y+p.y)/r.y*i.target.scale)>6&&(d=6),d<1&&(d=1)),i.target.scale=d<.1?.1:d}},i.node)},TuoDong:function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,function(i){this.opacity=255;var t=i.touch.getDelta();this.x+=t.x,this.x>810&&(this.x=810),this.x<-810&&(this.x=-810),this.y+=t.y,this.y>1440&&(this.y=1440),this.y<-1440&&(this.y=-1440)},this.node)}}),cc._RF.pop()},{}],LiuHai:[function(i,t,c){"use strict";cc._RF.push(t,"3347esRUr1N5oHdX5fgpSqF","LiuHai"),cc.Class({extends:cc.Component,properties:{btn_BackHome:cc.Button,btn_ZuoZhe:cc.Button,btn_ZuoPin:cc.Button,btn_HuaMian:cc.Button,btn_ChuanShuo:cc.Button,ChuanShuoDianGu:cc.Node,btn_XiangGuan:cc.Button,ZuoZheJianJie:cc.Node,HuaMianJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!1,this.is_XG=!1},OnBackHome:function(){cc.director.loadScene("\u9996\u9875")},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.HuaMianJieDu.active=!1,this.ChuanShuoDianGu.active=!1,this.isB=!1,this.is_CS=!1,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onHuaMianJieDu:function(){0==this.isB?(this.HuaMianJieDu.active=!0,this.ZuoZheJianJie.active=!1,this.ChuanShuoDianGu.active=!1,this.isA=!1,this.is_CS=!1,this.isB=!0):(this.HuaMianJieDu.active=!1,this.isB=!1)},onHuaMianJieDu_Close:function(){this.HuaMianJieDu.active=!1,this.isB=!1},onChuanShuoDianGu:function(){0==this.is_CS?(this.ChuanShuoDianGu.active=!0,this.ZuoZheJianJie.active=!1,this.HuaMianJieDu.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!0):(this.ChuanShuoDianGu.active=!1,this.is_CS=!1)},OnJinChan:function(){cc.director.loadScene("\u91d1\u87fe")},OnFuShi:function(){cc.director.loadScene("\u670d\u9970")},OnZiZhi:function(){cc.director.loadScene("\u7d2b\u829d")},OnHuLu:function(){cc.director.loadScene("\u846b\u82a6")},OnXiangGuanZuoPin:function(){cc.director.loadScene("\u5218\u6d77_\u76f8\u5173")},OnZuoPinJianShang:function(){cc.director.loadScene("\u5218\u6d77_\u9274\u8d4f")}}),cc._RF.pop()},{}],LuoHan:[function(i,t,c){"use strict";cc._RF.push(t,"9a019K8eK1Gg54eqXXQQsuh","LuoHan"),cc.Class({extends:cc.Component,properties:{btn_ZuoZheJianJie:cc.Button,btn_ZuoPinJianShang:cc.Button,btn_DongTaiJieDu:cc.Button,btn_XiangGuanZuoPin:cc.Button,ZuoZheJianJie:cc.Node,HuaMianJieDu:cc.Node,JJ_LH01:cc.Node,JJ_LH02:cc.Node,JJ_LH03:cc.Node,JJ_LH04:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.HuaMianJieDu.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!1,this.is_XG=!1,this.JJ_LH01.active=!1,this.JJ_LH02.active=!1,this.JJ_LH03.active=!1,this.JJ_LH04.active=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.HuaMianJieDu.active=!1,this.isB=!1,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onHuaMianJieDu:function(){0==this.isB?(this.HuaMianJieDu.active=!0,this.ZuoZheJianJie.active=!1,this.isA=!1,this.isB=!0):(this.HuaMianJieDu.active=!1,this.isB=!1)},onHuaMianJieDu_Close:function(){this.HuaMianJieDu.active=!1,this.isB=!1},LuoHan01:function(){this.JJ_LH01.active=!0},close_LuoHan01:function(){this.JJ_LH01.active=!1},LuoHan02:function(){this.JJ_LH02.active=!0},close_LuoHan02:function(){this.JJ_LH02.active=!1},LuoHan03:function(){this.JJ_LH03.active=!0},close_LuoHan03:function(){this.JJ_LH03.active=!1},LuoHan04:function(){this.JJ_LH04.active=!0},close_LuoHan04:function(){this.JJ_LH04.active=!1},OnDongTaiJieDu:function(){cc.director.loadScene("\u7f57\u6c49_\u52a8\u6001\u89e3\u8bfb")},OnXiangGuanZuoPin:function(){cc.director.loadScene("\u7f57\u6c49_\u76f8\u5173")},OnJianShang:function(){cc.director.loadScene("\u7f57\u6c49_\u9274\u8d4f")}}),cc._RF.pop()},{}],ShouShiSuoFang:[function(i,t,c){"use strict";cc._RF.push(t,"5e0c3ng/hBIkrZDZfbLG3SJ","ShouShiSuoFang"),cc.Class({extends:cc.Component,properties:{canvas:cc.Node,target:cc.Node},onLoad:function(){var i=this,t=this.node.parent;i.canvas.on(cc.Node.EventType.TOUCH_MOVE,function(c){var n=c.getTouches();if(n.length>=2){var e=n[0],o=n[1],a=e.getDelta(),s=o.getDelta(),u=t.convertToNodeSpaceAR(e.getLocation()),h=t.convertToNodeSpaceAR(o.getLocation()),r=u.sub(h),p=a.sub(s),d=1;d=Math.abs(r.x)>Math.abs(r.y)?(r.x+p.x)/r.x*i.target.scale:(r.y+p.y)/r.y*i.target.scale,i.target.scale=d<.1?.1:d}},i.node)}}),cc._RF.pop()},{}],ShouYe:[function(i,t,c){"use strict";cc._RF.push(t,"eeb5a1TYohPuK9xmF7oS2K/","ShouYe"),cc.Class({extends:cc.Component,properties:{btn_LiuHai:cc.Button,btn_ZiHua:cc.Button,btn_LuoHan:cc.Button},OnLiuHai:function(){cc.director.loadScene("\u5218\u6d77")},OnZiHua:function(){cc.director.loadScene("\u5b57\u753b")},OnLuoHan:function(){cc.director.loadScene("\u7f57\u6c49")}}),cc._RF.pop()},{}],ShuFa:[function(i,t,c){"use strict";cc._RF.push(t,"d0638iAl7hA4bbw34IBQSAL","ShuFa"),cc.Class({extends:cc.Component,properties:{ZuoZheJianJie:cc.Node,ShuFaJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.ShuFaJieDu.active=!1,this.isA=!1,this.isB=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheJianJie.active=!0,this.ShuFaJieDu.active=!1,this.isB=!1,this.isA=!0):(this.ZuoZheJianJie.active=!1,this.isA=!1)},onZuoZheJianJie_Close:function(){this.ZuoZheJianJie.active=!1,this.isA=!1},onShuFaJieDu:function(){0==this.isB?(this.ShuFaJieDu.active=!0,this.ZuoZheJianJie.active=!1,this.isA=!1,this.isB=!0):(this.ShuFaJieDu.active=!1,this.isB=!1)},onShuFaJieDu_Close:function(){this.ShuFaJieDu.active=!1,this.isB=!1},OnShuFaYiWen:function(){cc.director.loadScene("\u4e66\u6cd5_\u8bd1\u6587")},OnXiangGuan:function(){cc.director.loadScene("\u4e66\u6cd5_\u76f8\u5173")},OnJianShang:function(){cc.director.loadScene("\u4e66\u6cd5_\u9274\u8d4f")}}),cc._RF.pop()},{}],TouYing:[function(i,t,c){"use strict";cc._RF.push(t,"f3dd7zs3nZDgohc4LBO34mA","TouYing"),cc.Class({extends:cc.Component,properties:{sprite:{default:null,type:cc.Sprite},camera:{default:null,type:cc.Camera}},start:function(){var i=new cc.RenderTexture;i.initWithSize(cc.visibleRect.width,cc.visibleRect.height);var t=new cc.SpriteFrame;t.setTexture(i),this.sprite.spriteFrame=t,this.node.runAction(cc.flipY(!0)),this.camera.targetTexture=i}}),cc._RF.pop()},{}],audio:[function(i,t,c){"use strict";cc._RF.push(t,"1b71113ODxKEoLqctlaJtnj","audio"),cc.Class({extends:cc.Component,properties:{audio:{type:cc.AudioClip,default:null}},onLoad:function(){this.current=cc.audioEngine.play(this.audio,!0,1)},onDestroy:function(){cc.audioEngine.stop(this.current)}}),cc._RF.pop()},{}],drag:[function(i,t,c){"use strict";cc._RF.push(t,"295caW7lVNJyrkkrp+syrkM","drag"),cc.Class({extends:cc.Component,properties:{},start:function(){this.TuoDong()},TuoDong:function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,function(i){this.opacity=255;var t=i.touch.getDelta();this.x+=t.x,this.x>540&&(this.x=540),this.x<-540&&(this.x=-540),this.y+=t.y,this.y>960&&(this.y=960),this.y<-960&&(this.y=-960)},this.node)}}),cc._RF.pop()},{}],video:[function(i,t,c){"use strict";cc._RF.push(t,"19e8doxvllId5F/R2mgmAW2","video"),cc.Class({extends:cc.Component,properties:{video_Player:cc.VideoPlayer},onLoad:function(){this.video_Player.play(),this.video_Player.loop=!0}}),cc._RF.pop()},{}]},{},["Action_XuanZhuan","Animate_ShouShi","Back_Home","Back_LH","Back_LuoHan","Back_ShuFa","FangDaJing","LiuHai","LuoHan","ShouShiSuoFang","ShouYe","ShuFa","TouYing","audio","drag","video"]);
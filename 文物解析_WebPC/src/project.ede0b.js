window.__require=function c(i,t,n){function o(s,u){if(!t[s]){if(!i[s]){var a=s.split("/");if(a=a[a.length-1],!i[a]){var h="function"==typeof __require&&__require;if(!u&&h)return h(a,!0);if(e)return e(a,!0);throw new Error("Cannot find module '"+s+"'")}}var J=t[s]={exports:{}};i[s][0].call(J.exports,function(c){return o(i[s][1][c]||c)},J,J.exports,c,i,t,n)}return t[s].exports}for(var e="function"==typeof __require&&__require,s=0;s<n.length;s++)o(n[s]);return o}({Action_XuanZhuan:[function(c,i,t){"use strict";cc._RF.push(i,"0edcacAjjxJRoDCn8giY7xp","Action_XuanZhuan"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.rAction=this.rotateAction(),this.node.runAction(this.rAction)},rotateAction:function(){return cc.repeatForever(cc.rotateBy(6,360))}}),cc._RF.pop()},{}],Animate_ShouShi:[function(c,i,t){"use strict";cc._RF.push(i,"abf6762hrhCUr08M50S6MhL","Animate_ShouShi"),cc.Class({extends:cc.Component,properties:{Anim_ShouShi:cc.Node},start:function(){},onAnim:function(){this.Anim_ShouShi.active=!1}}),cc._RF.pop()},{}],Back_Home:[function(c,i,t){"use strict";cc._RF.push(i,"4457eXO0uFG0Ye9KVAQebHa","Back_Home"),cc.Class({extends:cc.Component,properties:{},BackHome:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u9996\u9875")})))}}),cc._RF.pop()},{}],Back_LH:[function(c,i,t){"use strict";cc._RF.push(i,"76ec0zJpjVBVJBJWg24NJuv","Back_LH"),cc.Class({extends:cc.Component,properties:{},OnBack:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u5218\u6d77")})))}}),cc._RF.pop()},{}],Back_LuoHan:[function(c,i,t){"use strict";cc._RF.push(i,"43075LBvFVM1b/P7LLEHNbs","Back_LuoHan"),cc.Class({extends:cc.Component,properties:{btn_back_LuoHan:cc.Button},onBack_LuoHan:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u7f57\u6c49")})))}}),cc._RF.pop()},{}],Back_ShuFa:[function(c,i,t){"use strict";cc._RF.push(i,"a8897ueSqZHkKZff3QPYmNv","Back_ShuFa"),cc.Class({extends:cc.Component,properties:{},BackShuFa:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u5b57\u753b")})))}}),cc._RF.pop()},{}],Effect_JuanZhou:[function(c,i,t){"use strict";cc._RF.push(i,"a1e39ojChxGD7R0b0RrhlCB","Effect_JuanZhou"),cc.Class({extends:cc.Component,properties:{Node_JuanZhou:cc.Node},start:function(){this.is_J=!1},OnJuanZhou:function(){0==this.is_J?(this.Node_JuanZhou.active=!0,this.Node_HuaDong.runAction(cc.moveTo(2,cc.p(0,5))),this.is_J=!0):(this.Node_JuanZhou.active=!1,this.Node_HuaDong.position=cc.p(0,895),this.is_J=!1)}}),cc._RF.pop()},{}],Effect_mouseMove:[function(c,i,t){"use strict";cc._RF.push(i,"f1c39T02AlPRpZ+Y8QoK52r","Effect_mouseMove"),cc.Class({extends:cc.Component,properties:{Effect_btn:cc.Node},onLoad:function(){var c=this;c.node.on(cc.Node.EventType.MOUSE_MOVE,function(i){console.log("\u9f20\u6807\u8fdb\u5165"),c.node.runAction(cc.scaleTo(.1,1.05))},c.node),c.node.on(cc.Node.EventType.MOUSE_LEAVE,function(i){console.log("\u9f20\u6807\u79bb\u5f00"),c.Effect_btn.runAction(cc.scaleTo(.1,1))},c.node)},start:function(){}}),cc._RF.pop()},{}],FangDaJing:[function(c,i,t){"use strict";cc._RF.push(i,"b6520Px2ytPLJ45jvt3QmnN","FangDaJing"),cc.Class({extends:cc.Component,properties:{canvas:cc.Node,target:cc.Node},onLoad:function(){this.TuoDong();var c=this,i=this.node.parent;c.canvas.on(cc.Node.EventType.TOUCH_MOVE,function(t){var n=t.getTouches();if(n.length>=2){var o=n[0],e=n[1],s=o.getDelta(),u=e.getDelta(),a=i.convertToNodeSpaceAR(o.getLocation()),h=i.convertToNodeSpaceAR(e.getLocation()),J=a.sub(h),_=s.sub(u),r=1;Math.abs(J.x)>Math.abs(J.y)?((r=(J.x+_.x)/J.x*c.target.scale)>6&&(r=6),r<1&&(r=1)):((r=(J.y+_.y)/J.y*c.target.scale)>6&&(r=6),r<1&&(r=1)),c.target.scale=r<.1?.1:r}},c.node)},TuoDong:function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,function(c){this.opacity=255;var i=c.touch.getDelta();this.x+=i.x,this.x>810&&(this.x=810),this.x<-810&&(this.x=-810),this.y+=i.y,this.y>1440&&(this.y=1440),this.y<-1440&&(this.y=-1440)},this.node)}}),cc._RF.pop()},{}],LiuHai:[function(c,i,t){"use strict";cc._RF.push(i,"3347esRUr1N5oHdX5fgpSqF","LiuHai"),cc.Class({extends:cc.Component,properties:{ChuanShuoDianGu:cc.Node,ZuoZheJianJie:cc.Node,Mask_ZZJJ:cc.Node,JZD_ZZJJ:cc.Node,WZ_ZZJJ:cc.Node,HuaMianJieDu:cc.Node,Mask_HuaMianJieDu:cc.Node,JZD_HuaMianJieDu:cc.Node,WZ_HuaMianJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.HuaMianJieDu.active=!1,this.ChuanShuoDianGu.active=!1,this.isA=!1,this.isB=!1,this.is_CS=!1,this.is_XG=!1},ZuoZheOn:function(){this.ZuoZheJianJie.active=!0,this.JZD_ZZJJ.runAction(cc.moveTo(3,cc.p(0,-940))),this.Mask_ZZJJ.runAction(cc.moveTo(3,cc.p(0,-1420))),this.WZ_ZZJJ.runAction(cc.moveTo(3,cc.p(0,940))),this.isA=!0},ZuoZheOff:function(){this.ZuoZheJianJie.active=!1,this.JZD_ZZJJ.stopAllActions(),this.Mask_ZZJJ.stopAllActions(),this.WZ_ZZJJ.stopAllActions(),this.JZD_ZZJJ.position=cc.p(0,-10),this.Mask_ZZJJ.position=cc.p(0,-480),this.WZ_ZZJJ.position=cc.p(0,0),this.isA=!1},HuaMianOn:function(){this.HuaMianJieDu.active=!0,this.JZD_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,-910))),this.Mask_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,-1370))),this.WZ_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,910))),this.callBack=function(){this.Mask_HuaMianJieDu.getComponent(cc.Mask).enabled=!1},this.scheduleOnce(this.callBack,3),this.isB=!0},HuaMianOff:function(){this.unschedule(this.callBack),this.HuaMianJieDu.active=!1,this.Mask_HuaMianJieDu.getComponent(cc.Mask).enabled=!0,this.JZD_HuaMianJieDu.stopAllActions(),this.Mask_HuaMianJieDu.stopAllActions(),this.WZ_HuaMianJieDu.stopAllActions(),this.JZD_HuaMianJieDu.position=cc.p(0,0),this.Mask_HuaMianJieDu.position=cc.p(0,-460),this.WZ_HuaMianJieDu.position=cc.p(0,0),this.isB=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheOn(),this.HuaMianOff(),this.ChuanShuoDianGu.active=!1,this.is_CS=!1):this.ZuoZheOff()},onZuoZheJianJie_Close:function(){this.ZuoZheOff()},onHuaMianJieDu:function(){0==this.isB?(this.HuaMianOn(),this.ZuoZheOff(),this.ChuanShuoDianGu.active=!1,this.is_CS=!1):this.HuaMianOff()},onHuaMianJieDu_Close:function(){this.HuaMianOff()},onChuanShuoDianGu:function(){0==this.is_CS?(this.ChuanShuoDianGu.active=!0,this.is_CS=!0,this.ZuoZheOff(),this.HuaMianOff()):(this.ChuanShuoDianGu.active=!1,this.is_CS=!1)},OnJinChan:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u91d1\u87fe")})))},OnFuShi:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u670d\u9970")})))},OnZiZhi:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u7d2b\u829d")})))},OnHuLu:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u846b\u82a6")})))},OnXiangGuanZuoPin:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u5218\u6d77_\u76f8\u5173")})))},OnZuoPinJianShang:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u5218\u6d77_\u9274\u8d4f")})))}}),cc._RF.pop()},{}],LuoHan_JianJie:[function(c,i,t){"use strict";cc._RF.push(i,"8c4ddGu2ehEr4/fdgTtKsEb","LuoHan_JianJie"),cc.Class({extends:cc.Component,properties:{JJ_LH01:cc.Node,JJ_LH02:cc.Node,JJ_LH03:cc.Node,JJ_LH04:cc.Node},start:function(){this.JJ_LH01.active=!1,this.JJ_LH02.active=!1,this.JJ_LH03.active=!1,this.JJ_LH04.active=!1},LuoHan01:function(){this.JJ_LH01.active=!0},close_LuoHan01:function(){this.JJ_LH01.active=!1},LuoHan02:function(){this.JJ_LH02.active=!0},close_LuoHan02:function(){this.JJ_LH02.active=!1},LuoHan03:function(){this.JJ_LH03.active=!0},close_LuoHan03:function(){this.JJ_LH03.active=!1},LuoHan04:function(){this.JJ_LH04.active=!0},close_LuoHan04:function(){this.JJ_LH04.active=!1}}),cc._RF.pop()},{}],LuoHan:[function(c,i,t){"use strict";cc._RF.push(i,"9a019K8eK1Gg54eqXXQQsuh","LuoHan"),cc.Class({extends:cc.Component,properties:{btn_ZuoZheJianJie:cc.Button,btn_ZuoPinJianShang:cc.Button,btn_DongTaiJieDu:cc.Button,btn_XiangGuanZuoPin:cc.Button,ZuoZheJianJie:cc.Node,Mask_ZZJJ:cc.Node,JZD_ZZJJ:cc.Node,WZ_ZZJJ:cc.Node,HuaMianJieDu:cc.Node,Mask_HuaMianJieDu:cc.Node,JZD_HuaMianJieDu:cc.Node,WZ_HuaMianJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.HuaMianJieDu.active=!1,this.isA=!1,this.isB=!1},ZuoZheOn:function(){this.ZuoZheJianJie.active=!0,this.JZD_ZZJJ.runAction(cc.moveTo(3,cc.p(0,-810))),this.Mask_ZZJJ.runAction(cc.moveTo(3,cc.p(0,-1210))),this.WZ_ZZJJ.runAction(cc.moveTo(3,cc.p(0,805))),this.isB=!1,this.isA=!0},ZuoZheOff:function(){this.ZuoZheJianJie.active=!1,this.JZD_ZZJJ.stopAllActions(),this.Mask_ZZJJ.stopAllActions(),this.WZ_ZZJJ.stopAllActions(),this.JZD_ZZJJ.position=cc.p(0,-0),this.Mask_ZZJJ.position=cc.p(0,-400),this.WZ_ZZJJ.position=cc.p(0,0),this.isA=!1},ShuFaOn:function(){this.HuaMianJieDu.active=!0,this.JZD_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,-810))),this.Mask_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,-1210))),this.WZ_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,805))),this.isA=!1,this.isB=!0},ShuFaOff:function(){this.HuaMianJieDu.active=!1,this.JZD_HuaMianJieDu.stopAllActions(),this.Mask_HuaMianJieDu.stopAllActions(),this.WZ_HuaMianJieDu.stopAllActions(),this.JZD_HuaMianJieDu.position=cc.p(0,0),this.Mask_HuaMianJieDu.position=cc.p(0,-400),this.WZ_HuaMianJieDu.position=cc.p(0,0),this.isB=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheOn(),this.ShuFaOff()):this.ZuoZheOff()},onZuoZheJianJie_Close:function(){this.ZuoZheOff()},onHuaMianJieDu:function(){0==this.isB?(this.ShuFaOn(),this.ZuoZheOff()):this.ShuFaOff()},onHuaMianJieDu_Close:function(){this.ShuFaOff()},OnDongTaiJieDu:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u7f57\u6c49_\u52a8\u6001\u89e3\u8bfb")})))},OnXiangGuanZuoPin:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u7f57\u6c49_\u76f8\u5173")})))},OnJianShang:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u7f57\u6c49_\u9274\u8d4f")})))}}),cc._RF.pop()},{}],ShouShiSuoFang:[function(c,i,t){"use strict";cc._RF.push(i,"5e0c3ng/hBIkrZDZfbLG3SJ","ShouShiSuoFang"),cc.Class({extends:cc.Component,properties:{canvas:cc.Node,target:cc.Node},onLoad:function(){var c=this,i=this.node.parent;c.canvas.on(cc.Node.EventType.TOUCH_MOVE,function(t){var n=t.getTouches();if(n.length>=2){var o=n[0],e=n[1],s=o.getDelta(),u=e.getDelta(),a=i.convertToNodeSpaceAR(o.getLocation()),h=i.convertToNodeSpaceAR(e.getLocation()),J=a.sub(h),_=s.sub(u),r=1;r=Math.abs(J.x)>Math.abs(J.y)?(J.x+_.x)/J.x*c.target.scale:(J.y+_.y)/J.y*c.target.scale,c.target.scale=r<.1?.1:r}},c.node)}}),cc._RF.pop()},{}],ShouYe:[function(c,i,t){"use strict";cc._RF.push(i,"eeb5a1TYohPuK9xmF7oS2K/","ShouYe"),cc.Class({extends:cc.Component,properties:{btn_LiuHai:cc.Button,btn_ZiHua:cc.Button,btn_LuoHan:cc.Button},OnLiuHai:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u5218\u6d77")})))},OnZiHua:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u5b57\u753b")})))},OnLuoHan:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u7f57\u6c49")})))}}),cc._RF.pop()},{}],ShuFa:[function(c,i,t){"use strict";cc._RF.push(i,"d0638iAl7hA4bbw34IBQSAL","ShuFa"),cc.Class({extends:cc.Component,properties:{ZuoZheJianJie:cc.Node,Mask_ZZJJ:cc.Node,JZD_ZZJJ:cc.Node,WZ_ZZJJ:cc.Node,HuaMianJieDu:cc.Node,Mask_HuaMianJieDu:cc.Node,JZD_HuaMianJieDu:cc.Node,WZ_HuaMianJieDu:cc.Node},onLoad:function(){this.ZuoZheJianJie.active=!1,this.HuaMianJieDu.active=!1,this.isA=!1,this.isB=!1},ZuoZheOn:function(){this.ZuoZheJianJie.active=!0,this.JZD_ZZJJ.runAction(cc.moveTo(3,cc.p(0,-640))),this.Mask_ZZJJ.runAction(cc.moveTo(3,cc.p(0,-950))),this.WZ_ZZJJ.runAction(cc.moveTo(3,cc.p(0,625))),this.isB=!1,this.isA=!0},ZuoZheOff:function(){this.ZuoZheJianJie.active=!1,this.JZD_ZZJJ.stopAllActions(),this.Mask_ZZJJ.stopAllActions(),this.WZ_ZZJJ.stopAllActions(),this.JZD_ZZJJ.position=cc.p(0,-0),this.Mask_ZZJJ.position=cc.p(0,-320),this.WZ_ZZJJ.position=cc.p(0,0),this.isA=!1},ShuFaOn:function(){this.HuaMianJieDu.active=!0,this.JZD_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,-760))),this.Mask_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,-1140))),this.WZ_HuaMianJieDu.runAction(cc.moveTo(3,cc.p(0,755))),this.callBack=function(){this.Mask_HuaMianJieDu.getComponent(cc.Mask).enabled=!1},this.scheduleOnce(this.callBack,3),this.isA=!1,this.isB=!0},ShuFaOff:function(){this.HuaMianJieDu.active=!1,this.Mask_HuaMianJieDu.getComponent(cc.Mask).enabled=!0,this.JZD_HuaMianJieDu.stopAllActions(),this.Mask_HuaMianJieDu.stopAllActions(),this.WZ_HuaMianJieDu.stopAllActions(),this.JZD_HuaMianJieDu.position=cc.p(0,0),this.Mask_HuaMianJieDu.position=cc.p(0,-380),this.WZ_HuaMianJieDu.position=cc.p(0,0),this.isB=!1},onZuoZheJianJie:function(){0==this.isA?(this.ZuoZheOn(),this.ShuFaOff()):this.ZuoZheOff()},onZuoZheJianJie_Close:function(){this.ZuoZheOff()},onShuFaJieDu:function(){0==this.isB?(this.ShuFaOn(),this.ZuoZheOff()):this.ShuFaOff()},onShuFaJieDu_Close:function(){this.ShuFaOff()},OnShuFaYiWen:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u4e66\u6cd5_\u8bd1\u6587")})))},OnXiangGuan:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u4e66\u6cd5_\u76f8\u5173")})))},OnJianShang:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("\u4e66\u6cd5_\u9274\u8d4f")})))}}),cc._RF.pop()},{}],TouYing:[function(c,i,t){"use strict";cc._RF.push(i,"f3dd7zs3nZDgohc4LBO34mA","TouYing"),cc.Class({extends:cc.Component,properties:{sprite:{default:null,type:cc.Sprite},camera:{default:null,type:cc.Camera}},start:function(){var c=new cc.RenderTexture;c.initWithSize(cc.visibleRect.width,cc.visibleRect.height);var i=new cc.SpriteFrame;i.setTexture(c),this.sprite.spriteFrame=i,this.node.runAction(cc.flipY(!0)),this.camera.targetTexture=c}}),cc._RF.pop()},{}],audio:[function(c,i,t){"use strict";cc._RF.push(i,"1b71113ODxKEoLqctlaJtnj","audio"),cc.Class({extends:cc.Component,properties:{audio:{type:cc.AudioClip,default:null}},onLoad:function(){this.current=cc.audioEngine.play(this.audio,!0,1)},onDestroy:function(){cc.audioEngine.stopAll(this.current)}}),cc._RF.pop()},{}],"drag - ShuFa":[function(c,i,t){"use strict";cc._RF.push(i,"fd6b84TRC1McJZRux+EN4O9","drag - ShuFa"),cc.Class({extends:cc.Component,properties:{Node_FangDaJing:cc.Node},start:function(){this.Node_FangDaJing.active=!1,this.isF=!1,this.TuoDong()},TuoDong:function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,function(c){this.limit_X=960,this.limit_Y=400,this.opacity=255;var i=c.touch.getDelta();this.x+=i.x,this.x>this.limit_X&&(this.x=this.limit_X),this.x<-this.limit_X&&(this.x=-this.limit_X),this.y+=i.y,this.y>this.limit_Y&&(this.y=this.limit_Y),this.y<-this.limit_Y&&(this.y=-this.limit_Y),console.log(this.limit_X)},this.node)},OnFangDaJing:function(){0==this.isF?(this.Node_FangDaJing.active=!0,this.isF=!0):(this.Node_FangDaJing.active=!1,this.isF=!1)}}),cc._RF.pop()},{}],drag:[function(c,i,t){"use strict";cc._RF.push(i,"295caW7lVNJyrkkrp+syrkM","drag"),cc.Class({extends:cc.Component,properties:{Node_FangDaJing:cc.Node},start:function(){this.Node_FangDaJing.active=!1,this.isF=!1,this.TuoDong()},TuoDong:function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,function(c){this.limit_X=960,this.limit_Y=540,this.opacity=255;var i=c.touch.getDelta();this.x+=i.x,this.x>this.limit_X&&(this.x=this.limit_X),this.x<-this.limit_X&&(this.x=-this.limit_X),this.y+=i.y,this.y>this.limit_Y&&(this.y=this.limit_Y),this.y<-this.limit_Y&&(this.y=-this.limit_Y),console.log(this.limit_X)},this.node)},OnFangDaJing:function(){0==this.isF?(this.Node_FangDaJing.active=!0,this.isF=!0):(this.Node_FangDaJing.active=!1,this.isF=!1)}}),cc._RF.pop()},{}],video:[function(c,i,t){"use strict";cc._RF.push(i,"19e8doxvllId5F/R2mgmAW2","video"),cc.Class({extends:cc.Component,properties:{video_Player:cc.VideoPlayer},onLoad:function(){this.video_Player.play(),this.video_Player.loop=!0,console.log("\u64ad\u653e")}}),cc._RF.pop()},{}]},{},["Action_XuanZhuan","Animate_ShouShi","Back_Home","Back_LH","Back_LuoHan","Back_ShuFa","Effect_JuanZhou","Effect_mouseMove","FangDaJing","LiuHai","LuoHan","LuoHan_JianJie","ShouShiSuoFang","ShouYe","ShuFa","TouYing","audio","drag - ShuFa","drag","video"]);
var CLASS$=Laya.class,STATICATTR$=Laya.static,View=laya.ui.View,Dialog=laya.ui.Dialog,EffectAnimation=laya.display.EffectAnimation,Btn_aniUI=function(e){function n(){this.ani1=null,n.__super.call(this),this.effectData=ui.Btn_aniUI.uiView}CLASS$(n,"ui.Btn_aniUI",EffectAnimation);return n.uiView={type:"View",props:{y:200,x:300,anchorY:.5,anchorX:.5},child:[{type:"Button",props:{y:-109,x:-125,skin:"comp/button.png",label:"label",anchorY:.5,anchorX:.5},compId:2}],animations:[{nodes:[{target:2,keyframes:{scaleY:[{value:1,tweenMethod:"linearNone",tween:!0,target:2,key:"scaleY",index:0},{value:1.1,tweenMethod:"linearNone",tween:!0,target:2,key:"scaleY",index:5},{value:1,tweenMethod:"linearNone",tween:!0,target:2,key:"scaleY",index:10}],scaleX:[{value:1,tweenMethod:"linearNone",tween:!0,target:2,key:"scaleX",index:0},{value:1.1,tweenMethod:"linearNone",tween:!0,target:2,key:"scaleX",index:5},{value:1,tweenMethod:"linearNone",tween:!0,target:2,key:"scaleX",index:10}]}}],name:"ani1",id:1,frameRate:24,action:0}]},n}(),LiuChengUI=function(e){function n(){this.Ani_Yan=null,this.Img_Deng=null,this.btn_ZhuShui=null,this.btn_DianHuo=null,this.btn_PaiYan=null,this.btn_3D=null,this.ani_Water=null,this.img_mask=null,this.ani_Zhu=null,this.img_Zhu=null,this.Ani_Huo=null,this.img_Yan=null,n.__super.call(this)}CLASS$(n,"ui.LiuChengUI",View);return n.prototype.createChildren=function(){View.regComponent("EffectAnimation",laya.display.EffectAnimation),View.regComponent("ui.Btn_aniUI",ui.Btn_aniUI),laya.ui.Component.prototype.createChildren.call(this),this.createView(n.uiView)},n.uiView={type:"View",props:{y:568,x:320,width:640,height:1136,anchorY:.5,anchorX:.5},child:[{type:"Image",props:{y:568,x:320,var:"Img_Deng",skin:"comp/deng.png",scaleY:.5,scaleX:.5,anchorY:.5,anchorX:.5}},{type:"Button",props:{y:1026,x:113,width:80,var:"btn_ZhuShui",stateNum:1,skin:"comp/btn-注水.png",height:80,anchorY:.5,anchorX:.5},child:[{type:"Script",props:{playEvent:"mousedown",runtime:"ui.Btn_aniUI"}}]},{type:"Button",props:{y:1026,x:254,width:80,var:"btn_DianHuo",stateNum:1,skin:"comp/点灯.png",height:80,anchorY:.5,anchorX:.5},child:[{type:"Script",props:{playEvent:"mousedown",runtime:"ui.Btn_aniUI"}}]},{type:"Button",props:{y:1026,x:396,width:80,var:"btn_PaiYan",stateNum:1,skin:"comp/btn-排烟.png",height:80,anchorY:.5,anchorX:.5},child:[{type:"Script",props:{playEvent:"mousedown",runtime:"ui.Btn_aniUI"}}]},{type:"Button",props:{y:1026,x:537,width:80,var:"btn_3D",stateNum:1,skin:"comp/流程.png",rotation:180,height:80,anchorY:.5,anchorX:.5},child:[{type:"Script",props:{playEvent:"mousedown",runtime:"ui.Btn_aniUI"}}]},{type:"Animation",props:{y:750,x:200,var:"ani_Water",source:"Ani_Shui.ani",interval:50,autoPlay:!0},child:[{type:"Image",props:{y:-51,x:122,var:"img_mask",skin:"comp/imagemask.png",scaleY:.6,scaleX:.61,renderType:"mask",anchorY:.5,anchorX:.5}}]},{type:"Animation",props:{y:385,x:220,var:"ani_Zhu",source:"Ani_Shui.ani"},child:[{type:"Image",props:{y:231,x:93,var:"img_Zhu",skin:"comp/DaoShui.png",scaleY:.18,scaleX:.2,renderType:"mask"}}]},{type:"Animation",props:{y:497,x:274,visible:!1,var:"Ani_Huo",source:"Ani_Huo.ani",scaleY:.65,scaleX:.65,autoPlay:!0}},{type:"Image",props:{y:504,x:314,var:"img_Yan",skin:"comp/JianTou.png",rotation:90,anchorY:.5,anchorX:.5},compId:20}],animations:[{nodes:[{target:20,keyframes:{y:[{value:507,tweenMethod:"linearNone",tween:!0,target:20,key:"y",index:0},{value:426,tweenMethod:"linearNone",tween:!0,target:20,key:"y",index:5},{value:388,tweenMethod:"linearNone",tween:!0,target:20,key:"y",index:10},{value:384,tweenMethod:"linearNone",tween:!0,target:20,key:"y",index:15},{value:460,tweenMethod:"linearNone",tween:!0,target:20,key:"y",index:20},{value:566,tweenMethod:"linearNone",tween:!0,target:20,key:"y",index:25},{value:650,tweenMethod:"linearNone",tween:!0,target:20,key:"y",index:30},{value:679,tweenMethod:"linearNone",tween:!0,target:20,key:"y",index:35}],x:[{value:313,tweenMethod:"linearNone",tween:!0,target:20,key:"x",index:0},{value:310,tweenMethod:"linearNone",tween:!0,target:20,key:"x",index:5},{value:296,tweenMethod:"linearNone",tween:!0,target:20,key:"x",index:10},{value:247,tweenMethod:"linearNone",tween:!0,target:20,key:"x",index:15},{value:208,tweenMethod:"linearNone",tween:!0,target:20,key:"x",index:20},{value:208.5,tweenMethod:"linearNone",tween:!0,target:20,key:"x",index:25},{value:243,tweenMethod:"linearNone",tween:!0,target:20,key:"x",index:30},{value:283,tweenMethod:"linearNone",tween:!0,target:20,key:"x",index:35}],var:[{value:"Img_Yan",tweenMethod:"linearNone",tween:!1,target:20,key:"var",index:0}],rotation:[{value:90,tweenMethod:"linearNone",tween:!0,target:20,key:"rotation",index:0},{value:90,tweenMethod:"linearNone",tween:!0,target:20,key:"rotation",index:5},{value:33,tweenMethod:"linearNone",tween:!0,target:20,key:"rotation",index:10},{value:-27,tweenMethod:"linearNone",tween:!0,target:20,key:"rotation",index:15},{value:-84,tweenMethod:"linearNone",tween:!0,target:20,key:"rotation",index:20},{value:-99,tweenMethod:"linearNone",tween:!0,target:20,key:"rotation",index:25},{value:-135,tweenMethod:"linearNone",tween:!0,target:20,key:"rotation",index:30},{value:-144,tweenMethod:"linearNone",tween:!0,target:20,key:"rotation",index:35}],alpha:[{value:1,tweenMethod:"linearNone",tween:!0,target:20,key:"alpha",index:0},{value:1,tweenMethod:"linearNone",tween:!0,target:20,key:"alpha",index:25},{value:.9,tweenMethod:"linearNone",tween:!0,target:20,key:"alpha",index:30},{value:0,tweenMethod:"linearNone",tween:!0,target:20,key:"alpha",index:35}]}}],name:"Ani_Yan",id:1,frameRate:60,action:0}]},n}(),startUI=function(e){function n(){this.ani1=null,this.btn_Jian=null,this.btn_Mo=null,this.btn_Chai=null,this.img_Jian=null,this.btn_LiuCheng=null,n.__super.call(this)}CLASS$(n,"ui.startUI",View);return n.prototype.createChildren=function(){View.regComponent("EffectAnimation",laya.display.EffectAnimation),View.regComponent("ui.Btn_aniUI",ui.Btn_aniUI),laya.ui.Component.prototype.createChildren.call(this),this.createView(n.uiView)},n.uiView={type:"View",props:{width:640,height:1136},child:[{type:"Button",props:{y:1049,x:100,width:80,var:"btn_Jian",stateNum:1,skin:"comp/介绍1.png",name:"btn_Jian",height:80,bottom:47,anchorY:.5,anchorX:.5},child:[{type:"Script",props:{playEvent:"mousedown",runtime:"ui.Btn_aniUI"}}]},{type:"Button",props:{y:1049,x:247,width:80,var:"btn_Mo",stateNum:1,skin:"comp/点灯.png",height:80,bottom:50,anchorY:.5,anchorX:.5},child:[{type:"Script",props:{playEvent:"mousedown",runtime:"ui.Btn_aniUI"}}]},{type:"Button",props:{y:1049,x:393,width:80,var:"btn_Chai",stateNum:1,skin:"comp/拆分.png",height:80,bottom:50,anchorY:.5,anchorX:.5},child:[{type:"Script",props:{playEvent:"mousedown",runtime:"ui.Btn_aniUI"}}]},{type:"Image",props:{y:531,x:323,width:507,visible:!1,var:"img_Jian",skin:"comp/JieShao.jpg",scaleY:1,scaleX:1,height:451,anchorY:.5,anchorX:.5},compId:5},{type:"Button",props:{y:1049,x:540,width:80,var:"btn_LiuCheng",stateNum:1,skin:"comp/流程.png",height:80,bottom:50,anchorY:.5,anchorX:.5},child:[{type:"Script",props:{playEvent:"mousedown",runtime:"ui.Btn_aniUI"}}]}],animations:[{nodes:[{target:5,keyframes:{scaleY:[{value:.1,tweenMethod:"linearNone",tween:!0,target:5,key:"scaleY",index:0},{value:1,tweenMethod:"linearNone",tween:!0,target:5,key:"scaleY",index:24}],scaleX:[{value:.1,tweenMethod:"linearNone",tween:!0,target:5,key:"scaleX",index:0},{value:1,tweenMethod:"linearNone",tween:!0,target:5,key:"scaleX",index:24}]}}],name:"ani1",id:1,frameRate:24,action:1}]},n}();
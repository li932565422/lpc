function CameraMoveScript(){CameraMoveScript.super(this),this.lastMouseX=NaN,this.lastMouseY=NaN,this.yawPitchRoll=new Laya.Vector3,this.tempRotationZ=new Laya.Quaternion,this.isMouseDown=!1,this.rotaionSpeed=6e-5,this.mainCameraAnimation=null,this.scene=null}Laya.class(CameraMoveScript,"CameraMoveScript",Laya.Script),CameraMoveScript.prototype._initialize=function(a){CameraMoveScript.__super.prototype._initialize.call(this,a),Laya.stage.on("mousedown",this,this.mouseDown),Laya.stage.on("mouseup",this,this.mouseUp),Laya.stage.on("mouseout",this,this.mouseOut),this.camera=a},CameraMoveScript.prototype._update=function(a){CameraMoveScript.__super.prototype._update.call(this,a),this.updateCamera(a.elapsedTime)},CameraMoveScript.prototype.updateCamera=function(a){if(!isNaN(this.lastMouseX)&&!isNaN(this.lastMouseY)){this.owner.scene;if(Laya.KeyBoardManager.hasKeyDown(87)&&this.camera.moveForward(-.002*a),Laya.KeyBoardManager.hasKeyDown(83)&&this.camera.moveForward(.002*a),Laya.KeyBoardManager.hasKeyDown(65)&&this.camera.moveRight(-.002*a),Laya.KeyBoardManager.hasKeyDown(68)&&this.camera.moveRight(.002*a),Laya.KeyBoardManager.hasKeyDown(81)&&this.camera.moveVertical(.002*a),Laya.KeyBoardManager.hasKeyDown(69)&&this.camera.moveVertical(-.002*a),this.isMouseDown){var t=Laya.stage.mouseX-this.lastMouseX,e=Laya.stage.mouseY-this.lastMouseY,o=this.yawPitchRoll.elements;o[0]-=t*this.rotaionSpeed*a,o[1]-=e*this.rotaionSpeed*a,this.updateRotation()}}this.lastMouseX=Laya.stage.mouseX,this.lastMouseY=Laya.stage.mouseY},CameraMoveScript.prototype.updateRotation=function(){var a=this.yawPitchRoll.elements;Math.abs(a[1])<3&&(Laya.Quaternion.createFromYawPitchRoll(a[0],a[1],a[2],this.tempRotationZ),this.camera.transform.localRotation=this.tempRotationZ)},CameraMoveScript.prototype.mouseDown=function(a){this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll),this.lastMouseX=Laya.stage.mouseX,this.lastMouseY=Laya.stage.mouseY,this.isMouseDown=!0},CameraMoveScript.prototype.mouseUp=function(a){this.isMouseDown=!1},CameraMoveScript.prototype.mouseOut=function(a){this.isMouseDown=!1};
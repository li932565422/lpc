(function () {
    'use strict';

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class CameraMoveScript extends Laya.Script3D {
        constructor() {
            super();
            this._tempVector3 = new Laya.Vector3();
            this.yawPitchRoll = new Laya.Vector3();
            this.resultRotation = new Laya.Quaternion();
            this.tempRotationZ = new Laya.Quaternion();
            this.tempRotationX = new Laya.Quaternion();
            this.tempRotationY = new Laya.Quaternion();
            this.rotaionSpeed = 0.00006;
        }
        _updateRotation() {
            if (Math.abs(this.yawPitchRoll.y) < 1.50) {
                Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ);
                this.tempRotationZ.cloneTo(this.camera.transform.localRotation);
                this.camera.transform.localRotation = this.camera.transform.localRotation;
            }
        }
        onAwake() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.camera = this.owner;
        }
        onUpdate() {
            var elapsedTime = Laya.timer.delta;
            if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown) {
                var scene = this.owner.scene;
                Laya.KeyBoardManager.hasKeyDown(87) && this.moveForward(-0.01 * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(83) && this.moveForward(0.01 * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(65) && this.moveRight(-0.01 * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(68) && this.moveRight(0.01 * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(81) && this.moveVertical(0.01 * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(69) && this.moveVertical(-0.01 * elapsedTime);
                var offsetX = Laya.stage.mouseX - this.lastMouseX;
                var offsetY = Laya.stage.mouseY - this.lastMouseY;
                var yprElem = this.yawPitchRoll;
                yprElem.x -= offsetX * this.rotaionSpeed * elapsedTime;
                yprElem.y -= offsetY * this.rotaionSpeed * elapsedTime;
                this._updateRotation();
            }
            this.lastMouseX = Laya.stage.mouseX;
            this.lastMouseY = Laya.stage.mouseY;
        }
        onDestroy() {
            Laya.stage.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown);
            Laya.stage.off(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
        }
        mouseDown(e) {
            this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll);
            this.lastMouseX = Laya.stage.mouseX;
            this.lastMouseY = Laya.stage.mouseY;
            this.isMouseDown = true;
        }
        mouseUp(e) {
            this.isMouseDown = false;
        }
        mouseOut(e) {
            this.isMouseDown = false;
        }
        moveForward(distance) {
            this._tempVector3.x = this._tempVector3.y = 0;
            this._tempVector3.z = distance;
            this.camera.transform.translate(this._tempVector3);
        }
        moveRight(distance) {
            this._tempVector3.y = this._tempVector3.z = 0;
            this._tempVector3.x = distance;
            this.camera.transform.translate(this._tempVector3);
            console.log("11111");
        }
        moveVertical(distance) {
            this._tempVector3.x = this._tempVector3.z = 0;
            this._tempVector3.y = distance;
            this.camera.transform.translate(this._tempVector3, false);
        }
    }

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            var scene = Laya.stage.addChild(new Laya.Scene3D());
            scene.ambientColor = new Laya.Vector3(1, 1, 1);
            var cameraRoot = scene.addChild(new Laya.Sprite3D());
            cameraRoot.transform.translate(new Laya.Vector3(0, 0, 0));
            cameraRoot.addComponent(CameraMoveScript);
            var camera = (cameraRoot.addChild(new Laya.Camera(0, 0.1, 1000)));
            camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
            camera.transform.position = new Laya.Vector3(0, 0, 2);
            camera.transform.rotate(new Laya.Vector3(0, 0, 0), true, false);
            var directionLight = scene.addChild(new Laya.DirectionLight());
            directionLight.color = new Laya.Vector3(0.2, 0.2, 0.2);
            directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
            var Arr_fire = new Array(7);
            Laya.Sprite3D.load("res/Scene/Deng.lh", Laya.Handler.create(this, function (sp) {
                var Deng = scene.addChild(sp);
                Deng.transform.position = new Laya.Vector3(0, -2.5, 0);
                console.log(Deng.transform.position);
                for (let index = 0; index < 7; index++) {
                    Arr_fire[index] = Deng.getChildAt(0).getChildAt(0).getChildAt(1).getChildAt(index);
                    Arr_fire[index].active = false;
                }
            }));
            var mayVar = new Array();
            var isF = false;
            this.Btn_Fire.on(Laya.Event.CLICK, this, OnBtn_Fire);
            function OnBtn_Fire() {
                this.Btn_Fire.skin = "./res/img/xi_normal.png";
                if (isF == false) {
                    for (let index = 6; index >= 0; index--) {
                        mayVar[index] = setTimeout(function () {
                            Arr_fire[index].active = true;
                        }, (6 - index) * 1000);
                    }
                    isF = true;
                }
                else {
                    this.Btn_Fire.skin = "./res/img/ran_normal.png";
                    for (let index = 0; index < 7; index++) {
                        clearTimeout(mayVar[index]);
                        Arr_fire[index].active = false;
                    }
                    isF = false;
                }
            }
            SuoFang();
            function SuoFang() {
                var Event = Laya.Event;
                var lastDistance = 0;
                Laya.stage.on(Event.MOUSE_UP, this, onMouseUp);
                Laya.stage.on(Event.MOUSE_OUT, this, onMouseUp);
                Laya.stage.on(Event.MOUSE_DOWN, this, onMouseDown);
                function onMouseDown(e) {
                    var touches = e.touches;
                    if (touches && touches.length == 2) {
                        lastDistance = getDistance(touches);
                        Laya.stage.on(Event.MOUSE_MOVE, this, onMouseMove);
                    }
                    else {
                        return;
                    }
                    console.log("down");
                }
                function onMouseMove(e) {
                    var distance = getDistance(e.touches);
                    var factor = (distance - lastDistance) * 0.05;
                    zoom(factor);
                    lastDistance = distance;
                }
                function onMouseUp(e) {
                    Laya.stage.off(Event.MOUSE_MOVE, this, onMouseMove);
                }
                function getDistance(points) {
                    var distance = 0;
                    if (points && points.length == 2) {
                        var dx = points[0].stageX - points[1].stageX;
                        var dy = points[0].stageY - points[1].stageY;
                        distance = Math.sqrt(dx * dx + dy * dy);
                    }
                    return distance;
                }
                Laya.stage.on(Laya.Event.MOUSE_WHEEL, this, mouseWheel);
                function mouseWheel(e) {
                    zoom(e.delta);
                    console.log("wheel");
                }
                function zoom(delta) {
                    var factor1 = 0.1;
                    if (delta > 0) {
                        if (camera.transform.position.z >= 2) {
                            camera.transform.translate(new Laya.Vector3(0, 0, -delta * factor1));
                        }
                    }
                    else {
                        if (camera.transform.position.z <= 5) {
                            camera.transform.translate(new Laya.Vector3(0, 0, -delta * factor1));
                        }
                    }
                }
            }
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/GameUI.ts", GameUI);
        }
    }
    GameConfig.width = 1920;
    GameConfig.height = 1080;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());

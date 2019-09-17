/**
 * Created by Administrator on 2017/6/25 0025.
 */
//拆解
var buttonMove = true;
var buttonAnalyze = true;
var buttonDetails = true;
var buttonInstruct = true;
var mytime;

//自动旋转
function instructAnim(){
    mesh.rotation.y += 0.002;
}

//拆解
function move(){
    if(buttonMove){
        mytime = setInterval(function(){instructAnim()}, 0);
        buttonMove = false;
    }else{
        clearInterval(mytime);
        buttonMove = true;
    }

    //关闭解析
    if(!buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }
    //关闭细节
    if(!buttonDetails){
        document.getElementById('detailsInfo').style.display = "none";
        buttonDetails = true;
    }
}
//关闭自身
function closeAnalyze(){
    if(!buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }
}
//解析
function analyze(){
    if(buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "block";
        buttonAnalyze = false;
    }else{
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }

    //关闭旋转
    if(!buttonMove){
        clearInterval(mytime);
        buttonMove = true;
    }
    //关闭细节
    if(!buttonDetails){
        document.getElementById('detailsInfo').style.display = "none";
        buttonDetails = true;
    }
}

//细节
function details(){
    if(buttonDetails){
        document.getElementById('detailsInfo').style.display = "block";
        buttonDetails = false;
    }else{
        document.getElementById('detailsInfo').style.display = "none";
        buttonDetails = true;
    }
    //关闭旋转
    if(!buttonMove){
        clearInterval(mytime);
        buttonMove = true;
    }
    //关闭解析
    if(!buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }
}
//说明
function instruct(){
    //关闭旋转
    if(!buttonMove){
        clearInterval(mytime);
        buttonMove = true;
    }
    //拉近相机
    new TWEEN.Tween( camera.position)
        .to( { x: 0,y:0,z:80 }, 500 ).easing( TWEEN.Easing.Elastic.Out).start();

    //关闭解析
    if(!buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }
    //关闭细节
    if(!buttonDetails){
        document.getElementById('detailsInfo').style.display = "none";
        buttonDetails = true;
    }
}



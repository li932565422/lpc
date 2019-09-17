/**
 * Created by Administrator on 2017/6/25 0025.
 */
//���
var buttonMove = true;
var buttonAnalyze = true;
var buttonDetails = true;
var buttonInstruct = true;
var mytime;

//�Զ���ת
function instructAnim(){
    mesh.rotation.y += 0.002;
}

//���
function move(){
    if(buttonMove){
        mytime = setInterval(function(){instructAnim()}, 0);
        buttonMove = false;
    }else{
        clearInterval(mytime);
        buttonMove = true;
    }

    //�رս���
    if(!buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }
    //�ر�ϸ��
    if(!buttonDetails){
        document.getElementById('detailsInfo').style.display = "none";
        buttonDetails = true;
    }
}
//�ر�����
function closeAnalyze(){
    if(!buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }
}
//����
function analyze(){
    if(buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "block";
        buttonAnalyze = false;
    }else{
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }

    //�ر���ת
    if(!buttonMove){
        clearInterval(mytime);
        buttonMove = true;
    }
    //�ر�ϸ��
    if(!buttonDetails){
        document.getElementById('detailsInfo').style.display = "none";
        buttonDetails = true;
    }
}

//ϸ��
function details(){
    if(buttonDetails){
        document.getElementById('detailsInfo').style.display = "block";
        buttonDetails = false;
    }else{
        document.getElementById('detailsInfo').style.display = "none";
        buttonDetails = true;
    }
    //�ر���ת
    if(!buttonMove){
        clearInterval(mytime);
        buttonMove = true;
    }
    //�رս���
    if(!buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }
}
//˵��
function instruct(){
    //�ر���ת
    if(!buttonMove){
        clearInterval(mytime);
        buttonMove = true;
    }
    //�������
    new TWEEN.Tween( camera.position)
        .to( { x: 0,y:0,z:80 }, 500 ).easing( TWEEN.Easing.Elastic.Out).start();

    //�رս���
    if(!buttonAnalyze){
        document.getElementById('analyzeInfo').style.display = "none";
        buttonAnalyze = true;
    }
    //�ر�ϸ��
    if(!buttonDetails){
        document.getElementById('detailsInfo').style.display = "none";
        buttonDetails = true;
    }
}



$(window).load(function () {
    
    // 文物按钮
    var rotate = true

    function rotateFun(){
        mesh.rotation.y += 0.0005;  
    }
    $('.ww-btn1').click(function(){
        if(rotate){
            mytime = setInterval(function(){rotateFun()}, 0);
            rotate = !rotate
        }else{
            clearInterval(mytime)
            rotate = !rotate
        }
    })
    // 解析按钮
    $('.ww-btn2').click(function(){
        $('.ww-content').slideDown("slow");
    })
    $('.ww-close').click(function(){
        $('.ww-content').slideUp("slow");
    })

    // 获取文物解读的声音

    // 电脑版分享
    $('.ww-share').click(function(){
        $('.ww-shareList').fadeIn("slow")
        $('.ww-shareList').css('display','flex')
    }) 
    $('.ww-shareCl').click(function(){
        $('.ww-shareList').hide()
    })
    // 手机版分享
    $('.ww-share1').click(function(){
        $('.phoneShare').css('display','block')
    }) 
    $('.phoneShare').click(function(){
        $(this).css('display','none')
    })
})
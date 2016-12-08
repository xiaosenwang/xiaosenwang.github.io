/**
 * Created by Administrator on 2016/11/9 0009.
 */

//第一页
var digit=[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]];
var boxW=$('.box').width(); //box 盒子的宽
var winWidth=boxW-2;
var winheight=boxW/1.4;
var ballRadius=boxW/170;//小球半径
var left=5;  //每个数字左边距离
var topNum=30; //每个数字上边距离
var secondsNum=0; //下一次小球动作的时间

var onetime=new Date();
var day=onetime.getDate()+1;
var year=onetime.getFullYear();
var month=onetime.getMonth();
var getHours=onetime.getHours();
var getMinutes=onetime.getMinutes();
var getSeconds=onetime.getSeconds();



var endtime= new Date(year,month,day,getHours,getMinutes,getSeconds);//设置截止时间
var ball=[];
var  colorall=['#F2F1DC','#F6C2B4','#F46F74','#CD8964','#FBCD5D','#F8878D','green','#7F1523','#6DC4A2','#768149'];
function size(){
    $('body').css('font-size',$('.third_content').height()/16.5);
    $('.resume_font span').width($('.box').width()/1.6).height($('.box').width()/6);
    $('.six_round').width($('.six_content').width()/17).height($('.six_content').width()/17);
}


//页面加载

window.onload=function(){
    size();//数据尺寸
    imgAnimation();//轮播



    var canvas=document.querySelector("#canvas");
    var contx=canvas.getContext('2d');
    canvas.width=winWidth; canvas.height=winheight;
    //获取截止时间的秒数
    //console.log(secondsNum);
    secondsNum=gettime();
    setInterval(function(){
        initialize(contx);
        //console.log(secondsNum);
        ballAnimate()
    },50);
};



//小球 动画
function ballAnimate(){
    var nexttime = gettime(); //再次获取时间、与前面时间相比较 获取差值
    var nextHours=parseInt(nexttime/3600);
    var nextminutes=parseInt((nexttime-nextHours*3600)/60);
    var nextseconds=parseInt(nexttime%60);
    var hours=parseInt(secondsNum/3600);
    var minutes=parseInt((secondsNum-hours*3600)/60);
    var seconds=parseInt(secondsNum%60);
    if(secondsNum != nexttime){
        if( parseInt(nextHours/10) != parseInt(hours/10) ){
            addballs( left  , ballRadius , parseInt(nextHours/10) );
        }
        if( parseInt(nextHours%10) != parseInt(hours%10) ){
            addballs( left + 15*(ballRadius+1) , topNum , parseInt(nextHours/10) );
        }

        if( parseInt(nextminutes/10) != parseInt(minutes/10) ){
            addballs( left + 40*(ballRadius+1) , topNum , parseInt(nextminutes/10) );
        }
        if( parseInt(nextminutes%10) != parseInt(minutes%10) ){
            addballs( left + 55*(ballRadius+1) , topNum , parseInt(nextminutes%10) );
        }
        if( parseInt(nextseconds/10) != parseInt(seconds/10) ){
            addballs( left + 82*(ballRadius+1) , topNum , parseInt(nextseconds/10) );
        }
        if( parseInt(nextseconds%10) != parseInt(seconds%10) ){
            addballs( left + 98*(ballRadius+1) , topNum , parseInt(nextseconds%10) );
        }
        secondsNum=nexttime;    //下次时间 赋予当前时间
    }
    nextballanimate();
}
function nextballanimate() {
    for (var i = 0; i < ball.length; i++) {
        ball[i].x += ball[i].Xspeed;
        ball[i].y += ball[i].Yspeed;
        ball[i].Yspeed += ball[i].g;
        if (ball[i].y >= winheight - ballRadius) {
            ball[i].y = winheight - ballRadius;
            ball[i].Yspeed = -ball[i].Yspeed * 0.7;//*0.8
        }
    }

//判断小球是否在 canvas 的画布内 如果不在画布内的小球   则移出
    var ballnum = 0;  //ballnum++;
    for (var i = 0; i < ball.length; i++) {
        if (ball[i].x - ballRadius > 0 && ball[i].x - ballRadius < winWidth) {
            ball[ballnum++] = ball[i];
        }
    }
    while (ball.length > ballnum) {
        ball.pop();
    }
    //判断小球是否在 canvas 的画布内 如果不在画布内的小球   则移出
}
function addballs(x,y,num){
    for(var i=0; i<digit[num].length;i++){
        for (var j=0; j<digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                var aball={
                    x:x+j*2*(ballRadius+1)+(ballRadius+1),
                    y:y+i*2*(ballRadius+1)+(ballRadius+1),
                    g:1.5+Math.random(),
                    Xspeed:Math.pow(-1,Math.floor(Math.random()*1000))*4,
                    Yspeed:-5,
                    color:Randomcolor(),
                    r:ballRadius
                };
                ball.push(aball);
                // console.log(ball.length);
            }
        }
    }
}
function Randomcolor(){
    var num= Math.floor(Math.random()*10);
    var color= colorall[num];

    return color;
}
////随机 颜色
//function Randomcolor(){
//    var rgb='';
//    var r=Math.floor(Math.random()*200);
//    var g=Math.floor(Math.random()*200);
//    var b=Math.floor(Math.random()*200);
//    rgb='rgb('+r+','+g+','+b+')';
//    return rgb;
//}
//获取截止时间到现在时间的差值
function gettime(){
    var nowtime=new Date();
    //console.log(nowtime.getTime());
    var difValue=endtime.getTime()-nowtime.getTime();
    difValue=Math.round(difValue/1000);
    return difValue>0 ? difValue:0;
}
//初始化
function initialize(ctx){
    ctx.clearRect(0,0,winWidth,winheight);

    var hours=parseInt(secondsNum/3600);
    var minutes=parseInt((secondsNum-hours*3600)/60);
    var seconds=parseInt(secondsNum%60);
    //console.log(minutes);

    drawArc(left,topNum,parseInt(hours/10),ctx);
    drawArc(left+15*(ballRadius+1),topNum,parseInt(hours%10),ctx); //15
    drawArc(left+30*(ballRadius+1),topNum,10,ctx);                  //30
    drawArc(left+40*(ballRadius+1),topNum,parseInt(minutes/10),ctx);//42
    drawArc(left+55*(ballRadius+1),topNum,parseInt(minutes%10),ctx);//57
    drawArc(left+71*(ballRadius+1),topNum,10,ctx);                   //75
    drawArc(left+82*(ballRadius+1),topNum,parseInt(seconds/10),ctx); //86
    drawArc(left+98*(ballRadius+1),topNum,parseInt(seconds%10),ctx);//102

    for (var i=0; i<ball.length;i++){
        ctx.fillStyle=ball[i].color;
        ctx.beginPath();
        ctx.arc(ball[i].x,ball[i].y,ballRadius,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}
//画小圆
function drawArc(x,y,num,ctx){
    ctx.fillStyle='#821B53';
    for(var i=0; i<digit[num].length;i++){
        for (var j=0; j<digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                ctx.beginPath();
                ctx.arc(x+j*2*(ballRadius+1)+(ballRadius+1),y+i*2*(ballRadius+1)+(ballRadius+1),ballRadius,0,2*Math.PI);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}


//轮播图开始

function imgAnimation(){
    var six_mainW=$('#six_mian').width();
    var img_timer=null;var indexnum = 0;
    var img_ul=$('#six_mian .ul_img');
    var points=$('.ul_point li');

    img_ul.width(six_mainW*7).css('left',-six_mainW);//设置ul的宽
    $('#six_mian .ul_img li img').width(six_mainW);//设置图片的宽


    img_timer = setInterval(function(){
        indexnum++;
        animate(indexnum);

    },2000);
// 动画
    function animate(num){
        img_ul.animate({left: -num* six_mainW},1000,
            function(){
                if(parseInt(img_ul.css('left'))==-(6*six_mainW)){
                    img_ul.css('left',-six_mainW);
                    indexnum=1;
                }
                if(parseInt(img_ul.css('left')) == 0){
                    img_ul.css('left', -six_mainW*5);
                    indexnum=5;
                }
            });
        //console.log(indexnum);
        Point()
    }
//小圆点
    function Point(){
        var num=indexnum;
        for(var i=0; i<points.length; i++){
            points[i].classList.remove('active');
        }
        if(num >= 6 ){
            num = 1;
        }else if(num <= 0){
            num = 5;
        }
        points[num-1].classList.add('active');
    }

    //touchend 事件
    $('.ul_point li').on('touchend',function(){
        console.log($(this).index());
        animate($(this).index()+1);
        Point();

    });
    $('.ul_point').on('touchstart', function(e){
        clearInterval(img_timer);

    });

    $('.ul_point').on('touchend', function(e){
        img_timer = setInterval(function(){
            indexnum++;
            animate(indexnum);
        },2000);
    });

}
//轮播结束

function first_animat(){
    move.defaults={duration:2000};
    move('.head_img').rotate(360).set('opacity','1').end();
    move('.resume_font span').rotate(0).end();
    move('.resume_font h2 i').delay('1s').set('opacity','1').end();
    move('.foot_first_lin1').delay('3s').translate(0).end();move('.foot_first_lin2').delay('3s').translate(0).end();
    move('.first_p1').rotate(360).x(0).end();
    move('.first_p2').delay('0.8s').x(0).end();
    move('.first_p3').delay('1.5s').x(0).end();
}

function removefirst_animat(){
    move.defaults={duration:100};
    move('.head_img').rotate(-360).set('opacity','1').end();
    move('.resume_font span').rotate(-90).end();
    move('.resume_font h2 i').set('opacity','0').end();
    move('.foot_first_lin1').x(600).end();move('.foot_first_lin2').x(-600).end();
    move('.first_p1').x(800).end();move('.first_p2').x(-800).end();move('.first_p3').x(800).end();
}

//第二页
function two_animat(){
    move.defaults={duration:1500};
    move('.second_nav span:nth-child(1)').x(0).end();
    move('.second_nav span:nth-child(3)').x(0).end();
    move('.second_nav i').scale(1.2).end();
    move('.second_list .second_li1 div span').delay('0').set('opacity','1').y(0).end();
    move('.second_list .second_li2 div span').delay('1.5s').set('opacity','1').y(0).end();
    move('.second_list .second_li3 div span').delay('3s').set('opacity','1').y(0).end();
    move('.second_list .second_li4 div span').delay('4.5s').set('opacity','1').y(0).end();
    move('.second_list .second_li5 div span').delay('6s').set('opacity','1').y(0).end();

    move('.second_list .second_li1 div p i').delay('0').set('opacity','1').x(0).end();
    move('.second_list .second_li2 div p i').delay('1.5s').set('opacity','1').x(0).end();
    move('.second_list .second_li3 div p i').delay('3s').set('opacity','1').x(0).end();
    move('.second_list .second_li4 div p i').delay('4.5s').set('opacity','1').x(0).end();
    move('.second_list .second_li5 div p i').delay('6s').set('opacity','1').x(0).end();

    move('.second_list .second_li1 div p img').delay('0').set('opacity','1').x(0).end();
    move('.second_list .second_li2 div p img').delay('1.5s').set('opacity','1').x(0).end();
    move('.second_list .second_li3 div p img').delay('3s').set('opacity','1').x(0).end();
    move('.second_list .second_li4 div p img').delay('4.5s').set('opacity','1').x(0).end();
    move('.second_list .second_li5 div p img').delay('6s').set('opacity','1').x(0).end();
}

function removetwo_animat(){
    move.defaults={duration:400};
    move('.second_nav span:nth-child(1)').x(200).end();
    move('.second_nav span:nth-child(3)').x(-200).end();
    move('.second_nav i').scale(0).end();
    move('.second_list .second_li1 div span').delay('0').set('opacity','0').y(100).end();
    move('.second_list .second_li2 div span').delay('0').set('opacity','0').y(100).end();
    move('.second_list .second_li3 div span').delay('0').set('opacity','0').y(100).end();
    move('.second_list .second_li4 div span').delay('0').set('opacity','0').y(100).end();
    move('.second_list .second_li5 div span').delay('0').set('opacity','0').y(100).end();
    move('.second_list .second_li1 div p i').delay('0').set('opacity','0').x(-600).end();
    move('.second_list .second_li2 div p i').delay('0').set('opacity','0').x(-600).end();
    move('.second_list .second_li3 div p i').delay('0').set('opacity','0').x(-600).end();
    move('.second_list .second_li4 div p i').delay('0').set('opacity','0').x(-600).end();
    move('.second_list .second_li5 div p i').delay('0').set('opacity','0').x(-600).end();
    move('.second_list .second_li1 div p img').delay('0').set('opacity','0').x(600).end();
    move('.second_list .second_li2 div p img').delay('0').set('opacity','0').x(600).end();
    move('.second_list .second_li3 div p img').delay('0').set('opacity','0').x(600).end();
    move('.second_list .second_li4 div p img').delay('0').set('opacity','0').x(600).end();
    move('.second_list .second_li5 div p img').delay('0').set('opacity','0').x(600).end();
}

//第三页

function three_animat(){
    move.defaults={duration:1500};
    move('.third_img').set('opacity','1').rotate(0).end();
    move('.third_content').scale(1).end();
    move('.third_p').x(0).set('opacity','1').scale(1.2).end(function(){
        move('.third_p').duration(500).skew(1).end()
    });
    move('.third_content :nth-child(1)').delay('1s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(2)').delay('1.3s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(3)').delay('1.6s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(4)').delay('1.9s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(5)').delay('2.1s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(6)').delay('2.4s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(7)').delay('2.7s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(8)').delay('3s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(9)').delay('3.3s').set('opacity','1').y(0).end();
    move('.third_content :nth-child(10)').delay('3.6s').set('opacity','1').y(0).end();
}
function removethree_animat(){
    move.defaults={duration:400};
    move('.third_img').set('opacity','0').rotate(90).end();
    move('.third_content').scale(0).end();
    move('.third_p').x(-600).end();
    move('.third_content :nth-child(1)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(2)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(3)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(4)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(5)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(6)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(7)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(8)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(9)').delay('0').set('opacity','0').y(-100).end();
    move('.third_content :nth-child(10)').delay('0').set('opacity','0').y(-100).end();
}

//第四页
function four_animat(){
    move.defaults={duration:1500};
    move('.four_img').set('opacity','1').rotate(0).end();
    move('.four_pp').x(0).set('opacity','1').scale(1.2).end(function(){
        move('.four_pp').duration(500).skew(1).end()
    });
    move('.four_p1').delay('0').y(0).set('opacity','1').end();
    move('.four_p2').delay('1s').y(0).set('opacity','1').end();
    move('.four_p3').delay('2s').y(0).set('opacity','1').end();
    move('.four_p4').delay('3s').y(0).set('opacity','1').end();
    move('.four_p5').delay('4s').y(0).set('opacity','1').end();

    move('.four_light1').delay('0').x(0).set('opacity','1').end();
    move('.four_light2').delay('1s').x(0).set('opacity','1').end();
    move('.four_light3').delay('2s').x(0).set('opacity','1').end();
    move('.four_light4').delay('3s').x(0).set('opacity','1').end();
    move('.four_light5').delay('4s').x(0).set('opacity','1').end();

    move('.rang1').delay('0').x(0).set('opacity','1').end(function(){move('.range_i1').x(0).end();});
    move('.rang2').delay('1s').x(0).set('opacity','1').end(function(){move('.range_i2').x(0).end();});
    move('.rang3').delay('2s').x(0).set('opacity','1').end(function(){move('.range_i3').x(0).end();});
    move('.rang4').delay('3s').x(0).set('opacity','1').end(function(){move('.range_i4').x(0).end();});
    move('.rang5').delay('4s').x(0).set('opacity','1').end(function(){move('.range_i5').x(0).end();});

}
function removefour_animat(){
    move.defaults={duration:200};
    move('.four_img').set('opacity','0').rotate(90).end();
    move('.four_pp').x(-600).end();

    move('.four_p1').delay('0').y(100).set('opacity','1').end();
    move('.four_p2').delay('0').y(100).set('opacity','0').end();
    move('.four_p3').delay('0').y(100).set('opacity','0').end();
    move('.four_p4').delay('0').y(100).set('opacity','0').end();
    move('.four_p5').delay('0').y(100).set('opacity','0').end();

    move('.four_light1').delay('0').x(-400).set('opacity','0').end();
    move('.four_light2').delay('0').x(-400).set('opacity','0').end();
    move('.four_light3').delay('0').x(-400).set('opacity','0').end();
    move('.four_light4').delay('0').x(-400).set('opacity','0').end();
    move('.four_light5').delay('0').x(-400).set('opacity','0').end();

    move('.rang1').delay('0').x(800).set('opacity','0').end();move('.range_i1').x(-400).end();
    move('.rang2').delay('0').x(800).set('opacity','0').end();move('.range_i2').x(-400).end();
    move('.rang3').delay('0').x(800).set('opacity','0').end();move('.range_i3').x(-400).end();
    move('.rang4').delay('0').x(800).set('opacity','0').end();move('.range_i4').x(-400).end();
    move('.rang5').delay('0').x(800).set('opacity','0').end();move('.range_i5').x(-400).end();

}

//第五页

function five_animat(){
    move.defaults={duration:1500};
    move('.five_img').set('opacity','1').rotate(0).end();
    move('.five_pp').x(0).set('opacity','1').scale(1.2).end(function(){
        move('.five_pp').duration(500).skew(1).end()
    });

    move('.five_content img').set('opacity','1').y(0).end();

}
function removefive_animat(){
    move.defaults={duration:400};
    move('.five_img').set('opacity','0').rotate(90).end();
    move('.five_pp').x(-600).end();
    move('.five_content img').set('opacity','0').y(500).end();
}

//第六页
function six_animat(){
    move.defaults={duration:1500};
    move('.six_img').set('opacity','1').rotate(0).end();
    move('.six_pp').x(0).set('opacity','1').scale(1.2).end(function(){
        move('.six_pp').duration(500).skew(1).end()
    });
    move('.six_p1').set('opacity','1').y(0).end();move('.six_p2').set('opacity','1').y(0).end();
    move('.six_p3').set('opacity','1').y(0).end();move('.six_p4').set('opacity','1').y(0).end();
    move('.six_p5').set('opacity','1').y(0).end();move('.six_p6').set('opacity','1').y(0).end();
    move('.six_p7').set('opacity','1').y(0).end();move('.six_p8').set('opacity','1').y(0).end();
}
function removesix_animat(){
    move.defaults={duration:400};
    move('.six_img').set('opacity','0').rotate(90).end();
    move('.six_pp').x(-600).end();
    move('.six_p1').set('opacity','0').y(400).end();move('.six_p2').set('opacity','0').y(-400).end();
    move('.six_p3').set('opacity','0').y(400).end();move('.six_p4').set('opacity','0').y(-400).end();
    move('.six_p5').set('opacity','0').y(400).end();move('.six_p6').set('opacity','0').y(-400).end();
    move('.six_p7').set('opacity','0').y(400).end();move('.six_p8').set('opacity','0').y(-400).end();
}
//第七页

function seven_animat(){
    move.defaults={duration:1500};
    move('.seven_img').set('opacity','1').rotate(0).end();
    move('.seven_p').x(0).set('opacity','1').scale(1.2).end(function(){
        move('.seven_p').duration(500).skew(1).end()
    });
    move('.last_contact').set('opacity','1').rotate(360).end();

    move('.magin_top img:nth-child(1)').y(0).set('opacity','1').end();
    move('.magin_top img:nth-child(2)').y(0).set('opacity','1').end();
    move('.magin_top1 img:nth-child(1)').delay('1s').y(0).set('opacity','1').end();
    move('.magin_top1 img:nth-child(2)').delay('1s').y(0).set('opacity','1').end();

}
function removeseven_animat(){
    move.defaults={duration:400};
    move('.seven_img').set('opacity','0').rotate(90).end();
    move('.seven_p').x(-600).end();
    move('.last_contact').set('opacity','0').rotate(-360).end();

    move('.magin_top img:nth-child(1)').y(300).set('opacity','1').end();
    move('.magin_top img:nth-child(2)').y(300).set('opacity','1').end();
    move('.magin_top1 img:nth-child(1)').delay(0).y(300).set('opacity','1').end();
    move('.magin_top1 img:nth-child(2)').delay(0).y(300).set('opacity','1').end();
}
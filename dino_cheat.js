// 속도 변경(speed change)
Runner.instance_.setSpeed(숫자)

// 중력 변경(gravity change)
Runner.instance_.tRex.config.GRAVITY = 숫자

// 무적 모드(god mod)
Runner.instance_.gameOver = function(){};

// 자동 클리어(automatic clear)
var sec = setInterval(function(){
if (inc<100)inc=(inc+0.1)
},300);

var event = new Event('keydown');
var inc=-30;
event.keyCode = 32;//keys(Runner.keycodes.JUMP)[0];
event.which = event.keyCode;
event.altKey = false;
event.ctrlKey = true;
event.shiftKey = false;
event.metaKey = false;

var ctx=document.getElementsByClassName("runner-canvas")[0].getContext('2d');

var sec = setInterval(function(){
if (Math.max(...ctx.getImageData(120,125,50+inc,1).data)==255)  document.dispatchEvent(event);
if (Math.max(...ctx.getImageData(120,95,30+inc,1).data)==255) document.dispatchEvent(event);
if (Runner.instance_.crashed) {inc=-30; Runner.instance_.restart()};
if (Runner.instance_.paused) Runner.instance_.play();
},2);
    
var sec = setInterval(function(){
if (inc<100)inc=(inc+0.1)
},300);
    

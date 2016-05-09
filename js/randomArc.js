// canvas要素のDOMオブジェクトを取得
var canvas = document.getElementById("canvas1");
// 描画コンテキストを取得する
var context = canvas.getContext("2d");
		
var mouseX = 0;
var mouseY = 0;
var startTime;
var stopTime;
var startCheck = false;
var moveCheck = false;
var x;	
var y;
var w;
var d;
var a;
var b;
		
canvas.onclick = mouseClicked;
function mouseClicked(event){
	var rect = event.target.getBoundingClientRect();
	mouseX = event.clientX - rect.left;
	mouseY = event.clientY - rect.top;
	x_d = mouseX - x;
	y_d = mouseY - y;
	checkTouch =  Math.sqrt(x_d * x_d + y_d * y_d);
	if(startCheck==false){
		startTime = new Date();	
		startCheck = true;
		moveCheck = true;
		randomArc();
		console.log("start:" +  startTime);
	}else if(checkTouch < w && startCheck==true){
		stopTime = new Date();
		startCheck = false;
		console.log("stop:" +  stopTime);
		console.log("T=" + (stopTime - startTime));
		console.log("log2(D/W+1)=" + Math.log2(d/w+1));
		b=(stopTime - startTime - a) / Math.log2(d/w+1);
		console.log("b=" + b);
		console.log("a+b*log2(D/W+1)=" + (a+220*Math.log2(d/w+1)));
	}
}
		
canvas.onmousemove = mouseMoved;	
function mouseMoved(){
	if(moveCheck==true){
		movetime = new Date();
		a = movetime - startTime;
		moveCheck = false;
		console.log("a="+a);
	}
}		
		
function randomArc(){
	w = Math.random() * 80 + 20; 
	x = Math.random() * (canvas.width - 200) + 50;
	y  = Math.random() * (canvas.height - 200) + 50;
	x_d = mouseX - x;
	y_d = mouseY - y;
	d =  Math.sqrt(x_d * x_d + y_d * y_d);
	if(d<w){
			randomArc();
	}
}
		
function makeArc(_x, _y, _w){
	context.fillStyle = "rgb(250, 0, 0)";
	var ctx = canvas.getContext('2d');
 	ctx.beginPath();
 	ctx.arc(_x, _y, _w, 0, Math.PI *2, true);
  	ctx.fill();
}
	
function draw(){
	context.fillStyle = "rgb(240, 240, 240)";
	context.fillRect(0, 0, canvas.width, canvas.height);
	if(startCheck){
		makeArc(x,y,w);	
	}
}
setInterval(draw, 10);
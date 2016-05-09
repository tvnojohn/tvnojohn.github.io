// canvas要素のDOMオブジェクトを取得
var canvas2 = document.getElementById("canvas2");
// 描画コンテキストを取得する
var context2 = canvas2.getContext("2d");

function draw2(){
	context2.fillStyle = "rgb(0, 0, 0)";
  	context2.beginPath();
  	context2.moveTo(50, 50);
  	context2.lineTo(50, canvas2.height - 50);
  	context2.moveTo(50, canvas2.height - 50);
  	context2.lineTo(canvas2.width - 50, canvas2.height - 50);
  	context2.stroke();
  	context2.beginPath();
  	context2.fillText("0", 40 , canvas2.height -40 );
}

context2.fillStyle = "rgb(250, 250, 250)";
context2.fillRect(0, 0, canvas2.width, canvas2.height);

draw2();
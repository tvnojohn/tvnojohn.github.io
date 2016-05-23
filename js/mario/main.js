function init(){
	canvas = document.getElementById("canvas1");

	// 描画コンテキストを取得する
	ctx = canvas.getContext("2d");
	//loadFile("mario.txt");
	
	init_val();

	setInterval(draw, 10);
}

/*
function loadFile(fileName){
	var xmlHttpReq = createHttpRequest();
	xmlHttpReq.open('GET', fileName, true);
	xmlHttpReq.onreadystatechange = function(){
		if(xmlHttpReq.readyState == 4){
			paths = xmlHttpReq.responseText.replace(/[\n\r]/g,"<br />");
			var out = "<html>";
			out += paths
			out += "</html>";
			document.getElementById("out").innerHTML = out;
			load();
		}
	}
	xmlHttpReq.send(null);
}


function load(){
	
}
*/

mario_pic = [0,0,1,1,1,1,1,0,0,0
			,0,1,1,1,1,1,1,1,0,0
			,1,1,1,1,1,1,1,1,1,1
			,1,1,1,1,1,1,1,1,1,1
			,1,1,1,1,1,1,1,1,1,1
			,3,3,2,2,2,2,2,2,2,0
			,3,3,2,2,2,3,2,2,2,3
			,3,3,2,2,2,3,2,2,2,2
			,3,2,2,2,2,2,2,3,3,3
			,0,2,2,2,2,2,2,3,3,3
			,0,0,4,1,4,4,4,1,4,0
			,0,4,4,1,4,4,4,1,4,0
			,0,4,1,1,4,4,4,1,4,4
			,4,4,1,1,1,1,1,1,4,4
			,4,4,1,1,1,1,1,1,4,4
			,2,2,1,1,1,1,1,1,2,2
			,2,2,1,1,1,1,1,1,2,2
			,0,1,1,1,3,1,1,1,0,0
			,0,1,1,1,3,1,1,1,0,0
			,0,1,1,1,3,1,1,1,0,0];

kinoko_pic = [0,0,0,1,1,1,1,0,0,0
			 ,0,0,1,1,1,1,2,1,0,0
			 ,0,1,2,1,1,2,2,2,1,0
			 ,1,2,2,2,1,1,2,1,1,1
			 ,1,1,2,1,1,1,1,1,1,1
			 ,0,0,0,0,2,2,0,0,0,0
			 ,0,0,0,0,2,2,0,0,0,0
			 ,0,0,0,0,2,2,0,0,0,0
			 ,0,2,2,0,2,2,0,0,0,0
			 ,0,0,2,2,2,0,0,0,0,0];

function kinoko_str(_x, _y, _tf) {
	this.x = _x || -1;
	this.y = _y || -1;
	this.tf = _tf || true;
}

function init_val(){
	m_x = 40;
	m_y = 240;
	f_y = 240;
	dm_x = 0;
	dm_y = 0;
	dx=0;
	keyupcheck = true;
	mariosize = 1;
	kinokoA = new kinoko_str(100,260,true);
}

function grand(){
	ctx.fillStyle = "rgb(0, 255, 0)";
	ctx.fillRect(0, canvas.height-20, canvas.width, 20);
}

function kinoko(kinoko_inf,kinoko_mod){
	if(kinoko_inf.tf == true){
		for (var i = 0; i < kinoko_mod.length; i++) {
			switch(kinoko_mod[i]){
			case 1:
				ctx.fillStyle = "rgb(255,0,0)";
				ctx.fillRect(kinoko_inf.x+(i-parseInt(i/10)*10)*2, kinoko_inf.y + parseInt(i/10)*2, 2, 2);
				break;
			case 2:
				ctx.fillStyle = "rgb(255,235,215)";
				ctx.fillRect(kinoko_inf.x+(i-parseInt(i/10)*10)*2, kinoko_inf.y + parseInt(i/10)*2, 2, 2);
				break;
    		}
 	   }
	}
}

function mario(x, y,cara){
	for (var i = 0; i < cara.length; i++) {
		switch(cara[i]){
		case 1:
			ctx.fillStyle = "rgb(255,0,0)";
			ctx.fillRect(x+(i-parseInt(i/10)*10)*2, y + parseInt(i/10)*mariosize, 2, mariosize);
			break;
		case 2:
			ctx.fillStyle = "rgb(255,235,215)";
			ctx.fillRect(x+(i-parseInt(i/10)*10)*2, y + parseInt(i/10)*mariosize, 2, mariosize);
			break;
		case 3:
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillRect(x+(i-parseInt(i/10)*10)*2, y + parseInt(i/10)*mariosize, 2, mariosize);
			break;
		case 4:
			ctx.fillStyle = "rgb(0,0,255)";
			ctx.fillRect(x+(i-parseInt(i/10)*10)*2, y + parseInt(i/10)*mariosize, 2, mariosize);
			break;
		}
	}
}

document.onkeydown = typeCheck;

function typeCheck(){
	keyupcheck = false; 
	console.log(event.keyCode);
	switch(event.keyCode){
	case 68:
		dm_x = 0.5;
		dx = 1;
		break;
    case 65:
    	dm_x = 0.5;
    	dx = -1;
    	break;
    case 87:
    	if(dm_y==0){
    		dm_y = -4;
    	}
    		break;
	}
}

document.onkeyup = function(e){
	keyupcheck = true; 
}

//描画
function draw(){	
	ctx.fillStyle = "rgb(135, 206, 255)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	grand();
	f_y = canvas.height - 20 - 20*mariosize;

	m_x += dm_x * dx;
	m_y += dm_y;
	if(m_y<f_y){
		dm_y += 2/25;
	}
	else{
		dm_y = 0;
		m_y=f_y;
	}
	if(!keyupcheck){
		if(dm_x<3 && dx!=0){
			dm_x+=0.1;
		}
	}else{
		if(dm_x > 0){
			dm_x -=0.1;
		}
		else if(dm_x <= 0){
			dx = 0;
		}
	}

	if(m_x+20>kinokoA.x && m_x< kinokoA.x+20
		&& m_y+20>kinokoA.y && m_y< kinokoA.y+20
		){
		kinokoA.tf = false;
		mariosize = 2;
		console.log(kinokoA);
	}

	kinoko(kinokoA, kinoko_pic)

	mario(m_x, m_y, mario_pic);
}

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
			loadStage();
		}
	}
	xmlHttpReq.send(null);
}

function createHttpRequest(){
		var c = null;
		//for IE7, Firefox, Safari
		if(window.XMLHttpRequest){
			return new XMLHttpRequest();	
		} 
		return c;
}

function loadStage(){
	console.log(document.getElementById("out").innerHTML);
	var loadData = document.getElementById("out").innerHTML + "";
	var stageData = loadData.split("<br>");
	for(var i = 0; i<20; i++){
		if(stageData[i]){
			var blockData = stageData[i].split(",");
			block_data.data[i].x = blockData[0];
			block_data.data[i].y = blockData[1];
			block_data.data[i].hit = blockData[2];
			block_data.data[i].life = blockData[3];
			block_data.datacheck++;
			console.log(block_data.data[i]);
			console.log(x + "," + dx);
		}
		else{
			block_data.data[i].x = 0;
			block_data.data[i].y = 0;
			block_data.data[i].hit = 0;
			block_data.data[i].life = 0;	
		}
		//console.log(stageData[i]);
	}
}	
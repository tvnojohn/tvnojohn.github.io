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
		}
	}
	xmlHttpReq.send(null);
	loadStage();
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
	var stageData = loadData.split(",");
	if(stageData==""){
		loadStage();
	}
	console.log(stageData);
}	
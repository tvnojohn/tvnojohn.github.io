function loadFile(fileName){
	var loadData;
	var xmlHttpReq = createHttpRequest();
	xmlHttpReq.open('GET', fileName, true);
	xmlHttpReq.onreadystatechange = function(){
		if(xmlHttpReq.readyState == 4){
			loadData = xmlHttpReq.result;
			console.log(loadData);
			loadStage(loadData);
			/*paths = xmlHttpReq.responseText.replace(/[\n\r]/g,"<br />");
			var out = "<html>";
			out += paths
			out += "</html>";
			document.getElementById("out").innerHTML = out;*/
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

function loadStage(loadDatas){
	var stageData = loadDatas + "";
	console.log(stageData);
}	
function loadFile(fileName){
	var xmlHttpReq = createHttpRequest();
	xmlHttpReq.open('GET', fileName, true);
	xmlHttpReq.onreadystatechange = function(){
		if(xmlHttpReq.readyState == 4){
			paths = xmlHttpReq.responseText.split("\r\n");
			var out = "<html>";
			for(n=0;n<paths.length;n++){
				out += "<p>" + paths[n] + "</p>"+paths[n]+"<br>\n";
			}
			out += "</html>";
			document.getElementById("out").innerHTML = out;
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
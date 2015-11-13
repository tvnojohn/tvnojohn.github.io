function loadFile(fileName){
	var xmlHttpReq = createHttpRequest();
	xmlHttpReq.open('GET', fileName, true);
	xmlHttpReq.onreadystatechange = function(){
		if(xmlHttpReq.readyState == 4){
			alert(xmlHttpReq.responseText);	
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
function saveText(text){
	var storage = localstorage;
	if(typeof storage == "undefined")	return;
	console.log("save");
	storage.setItem("text", text);
}

function loadText(){
	var storage = localstorage;
	if(typeof storage == "undefined")	return;
	
	var text = storage.getItem("text");
	if(text) setText(text);
}

function applyButtonClick(){
	console.log("a");
	var text = "a";
	setText(text);			
	saveText(text);
}
			 
function setText(text){
	displayPanel.textContent = text;
}
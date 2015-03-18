var jpURL = new Array(
"http://b1012038.github.io/",
"http://b1012038.github.io/js/clock",
"http://b1012038.github.io/js/calc"
};

function selectNavi(){
	var num;
	
	num =document.navi.contents.selectedIndex;
	
	location.href = jpURL[num];
}
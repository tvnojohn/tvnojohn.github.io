/*
 * copyclipb.js  v1.1 (2012/11/16)
 * http://j73x.com/
 *
 * Copyright (c) 2009-2012 Jun Ogata
 */

//コピーする文字列が決まってる場合
function createCopyButton(target, str, label, width) {
	//パラメータ省略設定
	if (width == undefined) {
		width = 100;
	}
	if (label == undefined) {
		label = "COPY";
	}

	var flashvars = {
		label:encodeURIComponent(label),
		text:encodeURIComponent(str)
	};
	var params = {
		wmode:"transparent"
	};
	swfobject.embedSWF("copyclipb.swf", target, width, 22, "9.0.0", "", flashvars, params);
}

//テキストからコピーする場合
function createCopyButtonFromTextbox(target, txt, label, width) {
	//パラメータ省略設定
	if (width == undefined) {
		width = 100;
	}
	if (label == undefined) {
		label = "COPY";
	}

	var flashvars = {
		label: encodeURIComponent(label),
		text: encodeURIComponent(txt.val())
	};
	var params = {
		wmode:"transparent"
	};
	swfobject.embedSWF("copyclipb.swf", target, width, 22, "9.0.0", "", flashvars, params);

	//テキスト変更時のイベント
	$(txt).change(function(){
		var swf = thisMovie(target)
		swf.setCopyText(this.value);
	});
}

function thisMovie(movieName) {
	if (navigator.appName.indexOf("Microsoft") != -1) {
		return window[movieName]
	} else {
		return document[movieName]
	}
}

var getStyle = function(dom, attr){ 
  return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];//ie8使用currentStyle以上使用getComputeStyle，注意如果高度没写，在ie8下获取的高度为auto，所以必须用clientHeight获取，然后减掉padding
}

function resetFontsize(div,fontSize,h){
	var clientHeight = div.clientHeight;
	var paddingTop = Number(getStyle(div,"paddingTop").replace(/\s+|px/gi,""));
	var paddingBottom = Number(getStyle(div,"paddingBottom").replace(/\s+|px/gi,""));
	var height = clientHeight - paddingTop - paddingBottom;

	//getStyle(div,"height")
	var style = div.getAttribute("style");
	if(!(height <= h) && (fontSize >= 12)){
			div.style.fontSize = fontSize + "px"
		fontSize--;
		resetFontsize(div,fontSize,h);
	} else {
		return
	};
};

resetFontsize(document.getElementById("pc_toutiao1"),36,55);//dom节点，默认最大字号，dom的高度
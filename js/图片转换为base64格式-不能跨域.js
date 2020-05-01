function getUrlBase64(url, ext, callback) {
	var canvas = document.createElement("canvas"); //创建canvas DOM元素
	var ctx = canvas.getContext("2d");
	var img = new Image;
	img.crossOrigin = 'Anonymous';
	img.src = url;
	img.onload = function() {
		canvas.width = 615; //指定画板的宽度，自定义
		canvas.height = 400; //指定画板的高度,自定义
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height); //参数可自定义
		var dataURL = canvas.toDataURL("image/" + ext);
		callback.call(this, dataURL); //回掉函数获取Base64编码
		canvas = null;
	};
}

getUrlBase64("http://127.0.0.1:8020/web/img/1.jpg", "png", function (base64) {
	console.log(base64);//base64编码值
});
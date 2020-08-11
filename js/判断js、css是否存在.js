//判断css、js是否存在。
function isInclude(name){
    var js= /js$/i.test(name);
    var es=document.getElementsByTagName(js?'script':'link');
    for(var i=0;i<es.length;i++) 
    if(es[i][js?'src':'href'].indexOf(name)!=-1)return true;
    return false;
}
alert(isInclude("abc.js"));
alert(isInclude("efg.css"));

//添加jquery
var oHead = document.getElementsByTagName('HEAD').item(0);   
var oScript= document.createElement("script");   
oScript.type = "text/javascript";   
oScript.src="test.js";   
oHead.appendChild( oScript);  

//添加jquery
window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js" type="text/javascript"><\/script>')
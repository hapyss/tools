try {
    var urlhash = window.location.search;
    if (!urlhash.match("fromapp")){
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
            //pc跳h5 
            window.location="http://m.cqnews.net/index.html?appId=1&columnId=856";
        }else{
            //h5跳pc 
            //window.location="http://www.cqciig.com/index.htm";
        }
    }
}
catch(err){
}
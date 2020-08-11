var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true
});
var mySwiper2 = new Swiper('.swiper-container2',{
    paginationClickable: true,
    slidesPerView: 3,
    loop: true
});
$('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper2.swipePrev()
});
$('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper2.swipeNext()
});

/*var mySwiper3 = new Swiper('.swiper-container3',{
    slidesPerView: 2,
    centeredSlides: true,
    loop: true
});*/
var mySwiper3 = new Swiper('.swiper-container3',{
	autoplay: false,
	speed: 1000,
	autoplayDisableOnInteraction: false,
	loop: true,
	centeredSlides: true,
	slidesPerView: 2
});
/*var swiper3 = new Swiper('.swiper-container3',{
	autoplay: false,
	speed: 1000,
	autoplayDisableOnInteraction: false,
	loop: true,
	centeredSlides: true,
	slidesPerView: 2,
	pagination: '.swiper-pagination',
	paginationClickable: true,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
	onInit: function(swiper) {
		swiper.slides[2].className = "swiper-slide swiper-slide-active";
	},
	breakpoints: {
		668: {
			slidesPerView: 1,
		}
	}
});*/



(function(){
	var src = "./data/images/";
	var col = $(".wenyijilan .wyjlbox .wyjlcol li img");
	$(".wenyijilan .wyjlbox .wyjlcol li").each(function(index){
		$(this).click(function(){
			for(var i = 0; i < col.length; i++){
				col.eq(i).attr("src",src+"wyjl"+i+".png")
			}
			$(this).children("img").attr("src",src+"wyjl"+index+"_on.png")
			$(".wyjlnr").eq(index).show().siblings("ul.wyjlnr").hide();
		});
	});
})();
//高清图集
$(function(){
  var len = $("#pic_list li").length;
  var index = 0;
  var timer;
  if($("#num_list li"))
  {
    //for(i=0;i<len;i++)
    //{
      $("#num_list .lhTujiSmall ul").html($("#pic_list").html());
    //}
  }
  $("#num_list li i").remove();
  $("#num_list li a").removeAttr("href");
  //alert($("#num_list").html())
  
  $("#num_list li").click(function(){
    index = $("#num_list li").index(this);
    showPic(index);
  }).eq(0).click();
  
  $("#pic_list").hover(function(){
    clearInterval(timer);
  },function(){
    timer = setInterval(function(){
      showPic(index);
      index++;
      if(index==len){index=0;}
    },3000)
  }).trigger("mouseleave");
  function showPic(index){
    $("#num_list li").removeClass("active").eq(index).addClass("active");
    $("#pic_list li").eq(index).stop(true,true).fadeIn(500).siblings("li").fadeOut(500);
    //alert(index);
    var num1=$("#pic_list li").length-2;
    var num=(index-1)*-137;
    if(index>=2&&index<=num1){
    $(".lhTujiSmall ul").animate({marginLeft:num});
      }
    if(index<2){
      $(".lhTujiSmall ul").animate({marginLeft:0});
    }
    if(index>num1){
      $(".lhTujiSmall ul").animate({marginLeft:num+137});
    } 

  };
  $(".up").click(function(){
    if(index>0&&index<=$("#pic_list li").length){
    index=index-1;
    showPic(index);
    var num=(index-1)*-137;
  if(index!=0){
    $(".lhTujiSmall ul").animate({marginLeft:num});
  }
      }
      else{
      index=$("#pic_list li").length-1
      showPic(index);
      }

  })
  $(".down").click(function(){
    if(index<$("#pic_list li").length-1){
    index=index+1;
    showPic(index);
    }
    else{
      index=0;
      showPic(index);
      }
  })
});
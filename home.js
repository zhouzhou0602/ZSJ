//获取数据
//轮播图部分
$(".swiper-wrapper").load("home_temp.html",function(){
	$.ajax({
		url: "http://localhost:8080/banner_json",
		type: "get",
		dataType: "json",
		success: function(res){
			var htmlStr = baidu.template("bannerTemp",{data:res});
			$(".swiper-wrapper").html(htmlStr);
		}
	})
})
//轮播图
var mySwiper = new Swiper('.swiper-container', {
    autoplay: 1000, 
    autoplayDisableOnInteraction : false,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    pagination : '.swiper-pagination',
    paginationClickable :true,

})

//获取数据，菜单部分
$(".banner_nav_ul").load("home_temp.html",function(){
	$.ajax({
		url: "http://localhost:8080/menu_json",
		type: "get",
		dataType: "json",
		success: function(res){
			var htmlStr = baidu.template("menuTemp",{data:res});
			$(".banner_nav_ul").html(htmlStr);
		}
	})
})
// 菜单详情部分获取数据
$(".banner_nav_details").load("home_temp.html",function(){
    $.ajax({
        url:"http://localhost:8080/menu_json",
        type:"get",
        dataType:"json",
        success:function(res){
            var htmlStr=baidu.template("banner_Details_Template",{data:res});
            $(".banner_nav_details").html(htmlStr);
            var banner_li = $(".banner_nav_li");
            $(".banner_nav_li").mouseover(function(){
                $(".banner_nav_details").show();
                $("#"+$(this).attr("name")).show();                
                
            }).mouseout(function(){
                $(".banner_nav_serction").mouseover(function(){
                    $(this).show();
                    $(".banner_nav_details").show();
                }).mouseout(function(){
                    $(this).hide();
                    $(".banner_nav_details").show();
                });
                $(".banner_nav_serction").hide();
                $(".banner_nav_details").hide();
            });
        }
    });
})
//机酒自由行
$(".p_w_box").load("home_temp.html",function(){
    $.ajax({
        url:"http://localhost:8080/freeWalk_json",
        type:"get",
        dataType:"json",
        success:function(res){
            var htmlStr=baidu.template("freeWalk_Template",{data:res});
            $(".p_w_box").html(htmlStr);
            $(".p_w_cont").eq(0).show().siblings(".p_w_cont").hide();
            $(".p_w_menu li").eq(0).addClass("target");
            $(".p_w_menu li").mouseover(function(){
                var num = $(this).attr("targetname");
                $(this).addClass("target").siblings(".p_w_menu li").removeClass("target");
                $(".p_w_cont").eq(num).show().siblings(".p_w_cont").hide();
            });
        }
    });
})
$(".city_all").load("module/citywalk/city-walk-tem.html",function(){
	$.ajax({
		url: "http://localhost:8080/citywalk_json",
		type: "get",
		dataType: "json",
		success: function(res){
			var htmlStr = baidu.template("cityTemp",{data:res});
			console.log(res);
			$(".city_all").html(htmlStr);
		}
	})
})
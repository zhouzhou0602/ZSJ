var express = require("express"),
	app = express();
//静态文件托管
app.use(express.static("../ZSJ_zz"));
//默认是home页面
app.get("/",function(req,res){
	res.sendFile(__dirname+"/home.html");
});
app.get("/banner_json",function(req,res){
	res.sendFile(__dirname+"/data/index/banner.json");
});
app.get("/menu_json",function(req,res){
	res.sendFile(__dirname+"/data/index/menu.json");
});
app.get("/freeWalk_json",function(req,res){
	res.sendFile(__dirname+"/data/index/freeWalk.json");
});
app.get("/citywalk",function(req,res){
	res.sendFile(__dirname+"/module/citywalk/citywalk.html");
});
app.get("/citywalk_json",function(req,res){
	res.sendFile(__dirname+"/data/citywalk/cityWalkList.json");
});
app.listen(8080,function(){
	console.log("服务器开启")
});
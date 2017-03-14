// 使用http做客户端（模拟客户端发送http请求）
var http=require("http");
var obj={
		host:"localhost",
		port:8080,
		path:"/",
		method:"GET",
		headers:{
			"Content-Type":"application/x-www-form-urlencoded"
		}
	};
// 创建客户端
var req=http.request(obj,function(res){
	var chunks="";
	res.on("data",function(chunk){
		chunks+=chunk.toString();
	});
	res.on("end",function(){
		console.log(chunks);
	})
});
// 正式结束请求（发送请求）
req.end();
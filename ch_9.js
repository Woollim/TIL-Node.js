//간단 클라이언트 요청
var http = require("http");
var fs = require("fs");

var server = http.createServer();

server.on("request",function(req,res){
    res.writeHead(200,{"Content-Type" : "text/html; charset=utf8"});
    res.write("<h1>hello world</h1>");
    fs.readFile("ch_8.js",function(err,data){
        if(err) throw err;
        res.write("<h2>"+data+"</h2>");
        console.log(data)
        res.end();
    })
});

server.listen(3000,function(){
    console.log("server start!");
});
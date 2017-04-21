//서버 이벤트 처리
var http = require("http");

var server = http.createServer();

//서버 이벤트 설정
server.on("connection",function(socket){
    //여기서 socket은 클라이언트 정보를 담고 있음
    console.log(socket);
    console.log("클라이언트 서버 접속");
});// 클라이언트가 서버 접속시 실행되는 이벤트

server.on("request",function(req,res){
    console.log("클라이언트 요청");
    console.log(req);
}); // 클라이언트가 요청을 하면 실행되는 이벤트

server.on("close",function(){
    console.log("서버 종료");
}); //서버가 종료되면 실행

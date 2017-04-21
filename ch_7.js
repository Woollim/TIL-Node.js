//웹 서버 만들기
//node의 http모듈을 이용하여 제작
var http = require("http");

var server = http.createServer(); // 서버 생성
server.listen(3000,function(){ // 서버 시작
    console.log("server start");
});

setTimeout(function(){
    server.close(); // 서버 종료
},2000);
//서버에서 다른 웹사이트의 데이터 가져오기
var http = require("http");

var options = {
    host : "www.google.com",
    port : 80,
    path : "/"
};

var req = http.get(options,function(res){// 다른 웹서버에서 데이터를 파싱
    var resData = "";
    res.on("data",function(chunk){
        resData += chunk;// 데이터를 받을 때 실행되는 콜백함수 (chunk에는 파싱한 데이터)
    });

    res.on("end",function(){
        console.log(resData); // 파싱 종료시 콘솔에 데이터 출력
    });
});

req.on("error",function(err){
    if(err) throw err; // 에러 발생시 에러 출력
});

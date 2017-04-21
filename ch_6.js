//파일 다루기
var fs = require("fs");// 파일을 다루기 위한 모듈

fs.readFile("./ch_1.js","utf8",function(err,data){
    if(err) throw err; //에러 발생시 에러 표시
    console.log(data);// 읽어 들여온 데이터 표시
});

fs.writeFile("./hello.txt","hello world!! and hello node",function(err){
    if(err) throw err;
});


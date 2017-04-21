//모듈
//메인파일의 코드 중에서 독립적인 기능을 여러개의 파일로 분리 가능
var cal1 = require("./mo1"); // 모둘 불러옴
var cal2 = require("./mo2"); // 모듈 불러옴2

console.log(cal1.add(1,2));
console.log(cal2.add(1,2));

//외장, 내장 모듈
var nconf = require("nconf"); //외장 모듈 nconf 시스템 환경 변수 접근
console.log(nconf.get("OS"));



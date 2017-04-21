//노드의 기본 기능

//url 가지고 놀기
var urlAdd = "http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty";
//주소 문자열은 단순한 문자열이기에 내가 원하는 정보만을 정리하기가 어렵다.
var url = require("url");

var curUrlOb = url.parse(urlAdd); // 문자열을 url객체로 변환
console.log(curUrlOb);
var curUrlStr = url.format(curUrlOb); // url객체를 문자열로 변환
console.log(curUrlStr);

//query 속성은 요청 파라미터 정보
var querystring = require("querystring");
var para = querystring.parse(curUrlOb.query)//query에 관한 문자열을 주면 파라미터 객체로 만듬
console.log(para);
var paraString = querystring.stringify(para) // 피라미터 객체를 문자열로 변환
console.log(paraString);
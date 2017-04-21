// console.log
console.log("hello");
console.log(19);
console.log("%d",10);
console.log("%j",{name:"이병찬"});

//console 메소드
console.dir(function(a,b){return a+b}); //객체의 모든 속성을 출력
console.time("timeCheck"); // 시간 시작
for(var i=0;i<100000000;i++){

}
console.timeEnd("timeCheck"); // 시간 끝

//전역변수

console.log(__filename, __dirname);
//filename 파일의 전체path
//dirname 파일이 들어있는 폴더의 경로

//process
console.log(process.argv); // 프로세스 시작시 전달되는 파라미터
console.log(process.env); // 환경변수
// process.exit()

//forEach
process.argv.forEach(function(value,index){
    console.log(index,value);
});
// 이벤트
//노드는 비동기 방식으로 처리하기에 이벤트를 기반으로 움직임
//이벤트 = 한쪽에서 다른 쪽으로 어떠한 일이 발생했다고 알려주는 것

//EventEmitter : 노드에서 제공하는 이벤트 객체

process.on("exit",function(){
    console.log("이벤트 발생!!!");
});

process.hello = function(){console.log("!!!!")};

process.on("hello",function(){
    console.log("이벤트 발생2!!");
});
//process에는 EventEmitter가 이미 상속되어 있기에 EventEmitter의 메소드를 사용 가능
setTimeout(function(){
    process.hello();
    process.emit("hello");
    process.exit();
},200);
//process에 이미 exit라는 메소드가 있기에 아무런 설정 없이 사용가능
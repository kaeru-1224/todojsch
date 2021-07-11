const clock= document.querySelector("#clock");
//인터벌: 매 몇초마다 발생하는 일 
//setTime out: 위와 비슷하지만 결론적으로는 몇초있다가 실행!하도록 진행


//데이트 객체를 만들어서 거기서 매초마다 시간을 보여줌 
function getTimer(){
const date  =new Date();//<-- 오늘날짜 
const hours =String(date.getHours()).padStart(2,"0");
const minutes =String(date.getMinutes()).padStart(2,"0");
const seconds =String(date.getSeconds()).padStart(2,"0");
clock.innerText=`${hours}:${minutes}:${seconds}`;
};
//화면에 숫자를 바로 갱신해주기위해서 , 먼저 바로 실행후 메소드를 실행하도록 진행해줌 
getTimer();
setInterval(getTimer,1000);


//padStart:  string의 길이를 2로 만들어주는데,2줄이 아니면0을 더해줌
//즉 1개의 문자열의 경우, 문장의 시작에 원하는 길이만큼의 패딩을 넣어줌
//padStart(2,"0")이면 2줄인경우 그대로 두줄이 아닌경우 0을 넣어줌
//padENF는 끝에 추가 


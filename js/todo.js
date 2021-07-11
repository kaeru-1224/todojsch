const todoDoForm  =document.getElementById("todo-form")
//todoDoFrom이 input이 들어있는  form 전체를 데려오므로그안이서  input만 데려와도됨 
const toDoInput = todoDoForm.querySelector("input")
const  toDoList = document.getElementById("todo-list")


const TODOSKEY="todos";
let toDos=[];

function savetToDos(){
//값을 string으로 저장해줌 
    localStorage.setItem(TODOSKEY,JSON.stringify(toDos))

}


function deleteToDo(event){
    //왜  innertext가 아닌  ;li로ㅓ?그냥 삭제를전체로하면되니싸!
    //event.target로 이벤트가 발생하는 대상인 버튼을 찾고 버튼의 부모인 리스트를 찾아 삭제+
const li =event.target.parentElement;
li.remove();
toDos=toDos.filter((toDos) => toDos.id !== parseInt(li.id));
savetToDos()
}



function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span =document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText="🙅‍♀️";
    button.style.background="none";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button)
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
         event.preventDefault();
         const newTodo = toDoInput.value;
         toDoInput.value="";
         const newTodoObj={
             text:newTodo,
             id:Date.now(),

         };
         toDos.push(newTodoObj);
         paintToDo(newTodoObj);
         savetToDos();
}



todoDoForm.addEventListener("submit",handleToDoSubmit)




const savedToDos =localStorage.getItem(TODOSKEY);

if(savedToDos !==null){
    //string👉array
    const parseToDos=JSON.parse(savedToDos);
    //오류: 투두값을 빈 어레이에 담아서 이전 투두값이 사라진다
    //그러면 그것을 let으로 바꾸어 이전 투두값을 유지한상태로 push해주는 
    //함수를 이용 그래서 이전의 투두 값을  array 로 바꾼 상태로 복원해줌
    toDos=parseToDos;
    /*function sayHelo(item){console.log("rhis is the tun of "+ item)} 밑의 문장과 동일, arow funtion 이용*/
    /*parseToDos.forEach((item) => console.log("rhis is the tun of "+ item))*/
    parseToDos.forEach(paintToDo)  
};


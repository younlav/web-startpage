const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // const toDoinput = document.querySelector("#todo-form input"); 과 같음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //todo값 저장하기 --> localStorage에 넣을 예정, 🍀let으로 선언!!

/* localStorage에 todo 값 저장 후 화면에 나타내기 */
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/* todo list 삭제하기 : button을 클릭했을 때*/
function deleteToDo(event){
    // event값을 이용해 어떤 버튼을 클릭한 건지 체크 가능
    // console.log(event.target.parentElement.innerText); ---> 입력값❌ log에 찍힘
    const li = event.target.parentElement; //클릭된 li태그 가져옴
    // console.log(li.id);

    li.remove(); //클릭된 li 지우기

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //id를 숫자로 바꿔줘야함
    saveToDos(); // 한 번 더 불러주는 거 잊지 않기!
}


/* 입력받은 todo값을 list 태그 만들어서 옮긴뒤 html문서에 보이게 하기 */
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text; //span값을 입력받은 newtodo값으로 변경

    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", deleteToDo); //📣EventListener


    li.appendChild(span); //li에 span을 넣어 줌
    li.appendChild(button); //li에 button을 넣어줌
    
    toDoList.appendChild(li); //todo-list에 li를 넣어 줌
}

/* todo를 입력했을 때 */
function handleToDoSubmit(event){
    event.preventDefault(); //새로고침 방지
    const newTodo = toDoInput.value; //변수에 todo 값 백업;
    toDoInput.value = ""; //칸 비우기
    // toDos.push(newTodo); //입력받은 newTodo를 push
    // paintToDo(newTodo); 
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit); //📣EventListener

/* 각 요소에 적용할 function */
function sayHello(item){ /* item : 지금 처리 되고 있는 item 제공 */
    console.log("this is turn of ", item);
}

/* array 형태로 배열에 저장하기 */
const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if (savedToDos !== null) {//저장된 todo들이 있을 때, 없으면 null이라서 pass됨
    const parsedToDos = JSON.parse(savedToDos);
    // 이전 값을 덮어쓰지 않도록, array에 복원해 줌
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);

    // parseToDos.forEach((item) => console.log("this is turn of ", item));
}

// function sexyFilter(){
//     return true;
//     // return false;
// }
// [1,2,3,4,5].filter(sexyFilter);


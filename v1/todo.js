const toDoform = document.querySelector('.js-toDoForm'),
		toDoinput = toDoform.querySelector('input'),
		toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];

function filterFn(toDo){
	return toDo.id === 1;
}

function loadToDos(){
	const loaded_todos = localStorage.getItem(TODOS_LS);

	if(loaded_todos !=null){
		const parsedToDos = JSON.parse(loaded_todos);
		parsedToDos.forEach(function(toDo){
			showToDos(toDo.name);
		});
	} 
}

function safeToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
	toDoList.removeChild(li);

console.log(toDoList);

	const cleanToDos = toDos.filter(function(toDo){
		return toDo.id !== parseInt(li.id);
	});

	toDos = cleanToDos;
	safeToDos();
	
}

function showToDos(text) {
	const li = document.createElement('li');
	const delBtn = document.createElement('button');
	const span = document.createElement('span');
	const newId = toDos.length + 1;

	delBtn.innerHTML = 'x';
    delBtn.addEventListener('click', deleteToDo);
	span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObject = {
    	name: text,
    	id: newId
    };

    toDos.push(toDoObject);
    safeToDos();
}

function submitHandler(event){
	event.preventDefault();
	const currentValue = toDoinput.value;
	showToDos(currentValue);
	toDoinput.value = "";
}

function init() {
	loadToDos();
	toDoform.addEventListener('submit', submitHandler);

}


init();
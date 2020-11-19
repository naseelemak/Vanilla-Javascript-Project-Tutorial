//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  
  //Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //Create LI newTodo
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.append(newTodo);
  
  //CHECK MARK BUTTON completedButton
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  //TRASH BUTTON trashButton
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);

  //Clear todoInput value
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;

  //Delete TODO
  if(item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;

    //Fall animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }

  //Mark as complete
  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
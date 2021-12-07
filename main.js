let inputElement = document.querySelector("input");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");
let totalTaskElement = document.querySelector('#total-task');

let taskList = [
    'Buy groceries', 'Car service'
];

function deleteItem(e){
   let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = taskList.indexOf(task);
    if(index !== -1){
        taskList.splice(index, 1);
    }

    populateList();
}

function populateList(){

    listElement.innerHTML = '';

    taskList.forEach(function(item){
        let newItem = document.createElement('li');
        
        // Add new span for text 
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        //Add delete button
        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click', (e)=> deleteItem(e));

        //add Li to Ul 
        listElement.appendChild(newItem);
    });

    totalTaskElement.innerHTML = taskList.length;
}

populateList();

function whiteSpace(s){
    let stringWithOutSpace = s.trim();
    return stringWithOutSpace.length > 0;
}

function addTask(){
    if(inputElement.value && whiteSpace(inputElement.value) && !taskList.includes(inputElement.value)){
        taskList.push(inputElement.value);
        populateList();
    }

    inputElement.value = '';
}

formElement.addEventListener("submit", function(e){
    e.preventDefault();
    addTask();
});

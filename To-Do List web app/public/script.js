let newTask = document.body.querySelector(".main");
let content = document.body.querySelector(".content");

newTask.addEventListener("click",()=>{
    newTask.innerHTML = `<div class="task-creator">
    <textarea type="text" id="input" placeholder="Your new Task......." rows="1" required></textarea>
    <button id="submit-btn">Add Task</button>
    </div>`;
    var taskValue = document.body.querySelector("#input");
    var addTask = document.body.querySelector("#submit-btn");

    taskValue.addEventListener("click",(e)=>{
        e.stopPropagation();
    });

    addTask.addEventListener("click",(e)=>{
        e.stopPropagation();
        if(taskValue.value == ""){
            alert("task area is empty!");
        }
        content.innerHTML += `<div class="newTask">
        <input type="checkbox" id="Task" class="task">
        <label for="Task" class="task">${taskValue.value}</label>
        </div>`;
        // newTask.innerHTML = `<button id="new-task">New Task</button>`;
        newTask.innerHTML = `<p>+ Add New Task</p>`;
    });
});

let newCatg = document.body.querySelector("#svg-add");

newCatg.addEventListener("click",()=>{
    
})
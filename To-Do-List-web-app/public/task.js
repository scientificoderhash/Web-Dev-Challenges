function createNewTask() {
    let background = document.body.querySelector('.background');
    background.classList.remove("hidden");
    let align = document.body.querySelector('.align');
    align.innerHTML = `<form onsubmit="addNewTask(event)" class="newTask">
            <div id="formBar">
              <span style="text-decoration: underline;">New Task</span>
              <button type="button" id="discard" onclick="cancelTask()">X</button>
            </div>

            <label for="title">Title:-</label>
            <input type="text" name="title" id="title"> <br>

            <label for="description">Description:-</label>
            <textarea name="description" id="description"></textarea>

            <label for="date">Complete By:</label>
            <input type="date" name="date" id="date">

            <label for="priority">Priority:</label>
            <select name="priority" id="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select> <br>

            <label for="category">Category:</label>
            <select name="category" id="category">
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="study">Study</option>
            </select> <br>
            <!-- <label for="">Priority</label> //low, medium, high
          <label for="">Category</label> //work, personal, study -->

            <input type="submit" value="Done" id="addTaskButton">
          </form>`
}

function cancelTask() {
    let discard = document.body.querySelector('#discard');
    let title = document.body.querySelector('#title');
    let description = document.body.querySelector('#description');
    let background = document.body.querySelector('.background');

    discard.addEventListener('click', () => {
        title.value = "";
        description.value = "";
        background.classList.add("hidden")
    })
}

function closeForm() {
    document.body.querySelector('.background').classList.add("hidden")
}

function addNewTask(event) {
    event.preventDefault();
    let title = document.body.querySelector('#title');
    let description = document.body.querySelector('#description');
    let date = document.body.querySelector('#date');
    let category = document.body.querySelector('#category');
    const formData = {
        title: title.value,
        description: description.value,
        date: date.value,
        category: category.value
    }

    fetch('http://localhost:3000/newtask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to submit task');
            }
        })
        .then(data => {
            console.log('Task submitted successfully:', data);
            // Optionally, reset the form or update the UI
            const content = document.querySelector('.content');
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.setAttribute('data-id', data.id);
            taskDiv.innerHTML = `<div style="display: flex;">
              <input type="checkbox" name="checkbox" id="checkbox">
              <label for="checkbox" id="taskHead">
                ${data.title}
              </label>
              <svg width="25px" class="editTask" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <g id="Complete">
                    <g id="edit">
                      <g>
                        <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            <div id="deadline"><i>
                ${data.date}
              </i></div>
            <hr>
            <div id="taskDesc">
              ${data.description}
            </div>
            <button onclick="deleteTask(event)" class="deleteTask">Delete</button>
            <span class="categ">
              ${data.category}
            </span>`;
            content.appendChild(taskDiv);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Clear input fields after adding the task
    title.value = "";
    description.value = "";

    closeForm();
}

//edit Task
document.querySelector('.content').addEventListener('click', (e) => {
    if (e.target.classList.contains('editTask')){
        const taskDiv = e.target.closest('.task');
        const taskId = taskDiv.getAttribute('data-id');

        let background = document.body.querySelector('.background');
        let align = document.body.querySelector('.align');
        align.innerHTML = `<form onsubmit="editNewTask(event)" class="newTask">
            <div id="formBar">
              <span style="text-decoration: underline;">New Task</span>
              <button type="button" id="discard" onclick="cancelTask()">X</button>
            </div>

            <label for="title">Title:-</label>
            <input type="text" name="title" id="title"> <br>

            <label for="description">Description:-</label>
            <textarea name="description" id="description"></textarea>

            <label for="date">Complete By:</label>
            <input type="date" name="date" id="date">

            <label for="priority">Priority:</label>
            <select name="priority" id="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select> <br>

            <label for="category">Category:</label>
            <select name="category" id="category">
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="study">Study</option>
            </select> <br>
            <!-- <label for="">Priority</label> //low, medium, high
          <label for="">Category</label> //work, personal, study -->

            <input type="submit" value="Done" id="addTaskButton">
          </form>`;
        
        //task values
        let taskHead = document.body.querySelector('#taskHead').innerText;
        let taskDesc = document.body.querySelector('#taskDesc').innerText;
        let deadline = document.body.querySelector('#deadline').innerText;
        let categ = document.body.querySelector('.categ').innerText;
        //form values
        let title = document.body.querySelector('#title');
        let description = document.body.querySelector('#description');
        let date = document.body.querySelector('#date');
        let category = document.body.querySelector('#category');

        title.value = taskHead.trim();
        description.value = taskDesc.trim();
        date.value = deadline.trim();
        category.value = categ.trim();

        window.currentEditTaskId = taskId;

        background.classList.remove("hidden");
    }
})

function editNewTask(event) {
    event.preventDefault();
    let title = document.body.querySelector('#title');
    let description = document.body.querySelector('#description');
    let date = document.body.querySelector('#date');
    let category = document.body.querySelector('#category');

    const formData = {
        id: window.currentEditTaskId,
        title: title.value,
        description: description.value,
        date: date.value,
        category: category.value
    }

    fetch('http://localhost:3000/edittask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to submit task');
        }
    })
    .then(data => {
        //ui update
        let taskHead = document.body.querySelector('#taskHead');
        let taskDesc = document.body.querySelector('#taskDesc');
        let deadline = document.body.querySelector('#deadline');
        let categ = document.body.querySelector('.categ');
        taskHead.innerText = data.title;
        taskDesc.innerText = data.description;
        deadline.innerText = data.date;
        categ.innerText = data.category;
    })
    .catch(error => {
        console.error('Error:', error);
    });

    closeForm();
}

function deleteTask(event) {
    event.preventDefault();
    let taskDiv = event.target.closest('.task');
    let taskId = taskDiv.getAttribute('data-id');

    fetch('http://localhost:3000/deletetask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: taskId })
    })
    .then(response => {
        if (response.ok) {
            taskDiv.remove(); // Remove the task from the UI
        } else {
            throw new Error('Failed to delete task');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
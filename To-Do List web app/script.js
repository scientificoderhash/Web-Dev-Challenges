let newTask = document.body.querySelector(".main")
let submitTask = document.body.querySelector(".submit")

newTask.addEventListener("click",()=>{
    newTask.innerHTML = `<div class="task-creator">
    <textarea type="text" id="input" placeholder="Your new Task......." required></textarea><button id="submit-btn">Done</button>
</div>`

}, {once:true})

setTimeout(() => {
    submitTask.addEventListener("change", ()=>{
        let content = document.body.querySelector("#input").innerHTML

        
    })
}, 1000);
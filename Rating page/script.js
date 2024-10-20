let a = document.querySelector(".submit");
let b = document.body.firstElementChild
let c = document.querySelectorAll(".no");

c.forEach(e => {
    e.addEventListener("click", ()=>{
    e.style.backgroundColor = "orange"
    e.style.color = "black"

    a.addEventListener("click", ()=>{
        b.innerHTML = `<div class="container">
        <div class="thanks">
            <p>Thank You!</p>
        </div>
    
        <div class="message">
            <p>Thanks for your feedback. We appreciate it. Please do visit us again!</p>
        </div>
    </div>`
    });
    })
});
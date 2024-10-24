let a = document.body.querySelector(".Q-1");
let b = document.body.querySelector(".a");

let count = 1;
a.addEventListener("click",() => {
    if (count % 2 != 0) {
      b.classList.remove("hidden");
      count++;
    }else{
        b.classList.add("hidden");
        count++
    }
});

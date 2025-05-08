function addCategory() {
  const new_group = document.body.querySelector("#svg-add");
  const new_group_name = document.body.querySelector("#group-name")
  
  const gp = document.body.querySelectorAll(".gp");
  gp.forEach((e) => {
    e.style.display = "none";
  })

  const add_group = document.body.querySelector("#add_group");
  add_group.style.display = "block";

  add_group.focus();

  add_group.addEventListener("blur", () => {
    let group = add_group.value.trim();
    if(group){
      let li = document.createElement("li");
      li.textContent = group;
      document.body.querySelector("#all_groups").appendChild(li);
    }
    add_group.value = "";
    add_group.style.display = "none";

    gp.forEach((e) => {
      e.style.display = "block";
    })
  })
}

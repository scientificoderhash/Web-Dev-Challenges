function addCategory() {
  const new_group = document.body.querySelector("#svg-add");
  new_group.style.display = "none"
  const add_group = document.body.querySelector("#add_group");
  add_group.style.display = "block";

  add_group.addEventListener("blur", () => {
    let group = add_group.value.trim();
    if(group){
      let li = document.createElement("li");
      li.textContent = group;
      document.body.querySelector("#all_groups").appendChild(li);
    }
    add_group.value = "";
    add_group.style.display = "none";
    new_group.style.display = "block";
  })
}

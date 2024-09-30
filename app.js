let cont = document.querySelector(".cont");
let input = document.querySelector("#task");
let addBtn = document.querySelector(".addBtn");
addBtn.classList.add("bgBtn");
let container = document.querySelector(".container");
let totalTasks = 0;
let completedTasks = 0;
let taskCount = document.querySelector(".taskCount");
taskCount.innerText = `(${completedTasks}/${totalTasks})`;

cont.addEventListener("click",(event) => {
    if (event.target.classList.contains("addBtn")){
        if (input.value == "") {
            alert("Please enter the task and add");
        }
    else {
        totalTasks++;
        let newTask = document.createElement("div");
        newTask.classList.add("taskContainer");
        let divBtn = document.createElement("div");
        divBtn.classList.add("divBtn");
        divBtn.style.backgroundColor = "white";
        let task = document.createElement("span");
        task.classList.add("task");
        let span = document.createElement("span");
    span.classList.add("span");
        span.innerText = input.value;
        task.append(divBtn);
        task.append(span);
    container.append(newTask);
    newTask.append(task);
    let btnCont = document.createElement("span");
    btnCont.classList.add("btnCont");
    let editBtn = document.createElement("button");
    editBtn.classList.add("bgBtn");
    editBtn.classList.add("editBtn");
    editBtn.innerText = "Edit";
    let delBtn = document.createElement("button");
    delBtn.classList.add("bgBtn");
    delBtn.classList.add("delBtn");
    delBtn.id = "delBtn";
    delBtn.innerText = "Delete";
    btnCont.append(editBtn);
    btnCont.append(delBtn);
    newTask.append(btnCont);
        input.value = "";
        taskCount.innerText = `(${completedTasks}/${totalTasks})`;
    }
    }
})


container.addEventListener("click", (event) => {
    if (event.target.classList.contains("delBtn")) {
        totalTasks--;
        let son = event.target.parentElement;
        let taskToDelete = son.parentElement
        let holder = son.previousElementSibling;
        let holderChild = holder.children;
        if(holderChild[0].style.backgroundColor == "black") {
            completedTasks--;
        }
        container.removeChild(taskToDelete);
        taskCount.innerText = `(${completedTasks}/${totalTasks})`;
    }
});

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("divBtn")) {
        let bgChange = event.target;
        if(bgChange.style.backgroundColor == "white") {
            bgChange.style.backgroundColor = "black";
            let span = bgChange.nextElementSibling;
            span.style.textDecoration = "line-through";
            completedTasks++;
            taskCount.innerText = `(${completedTasks}/${totalTasks})`;
        }  
        else if (bgChange.style.backgroundColor == "black") {
            bgChange.style.backgroundColor = "white";
            let span = bgChange.nextElementSibling;
            span.style.textDecoration = "none";
            completedTasks--;
            taskCount.innerText = `(${completedTasks}/${totalTasks})`;
        }     
    }
});

let child;

container.addEventListener("click", (event) => {
if (event.target.classList.contains("editBtn")) {
    let one = event.target.parentElement;
    let beforeparent = one.previousElementSibling;
 child = beforeparent.children[1];
    input.value = child.innerText;
cont.removeChild(addBtn);
let update = document.createElement("button");
update.classList.add("bgBtn");
update.classList.add("updateBtn");
update.innerText = "Update";
cont.appendChild(update);
}
})

cont.addEventListener("click", (event) => {
    if(event.target.classList.contains("updateBtn")) {
        let update = event.target;
        child.innerText = input.value;
        cont.removeChild(update);
        input.value = "";
        addBtn = document.createElement("button");
        addBtn.innerText = "Add Task";
        addBtn.classList.add("bgBtn");
        addBtn.classList.add("addBtn");
        cont.append(addBtn);
    }
})


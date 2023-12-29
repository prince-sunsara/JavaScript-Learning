
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // refresh nai kre page ne after submit

    const newTodo = todoInput.value;
    const newList = document.createElement("li")
    const newListElements = `
    <span class="text">${newTodo}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newList.innerHTML = newListElements
    // console.log(newList);
    todoList.append(newList)
    todoInput.value = "";
});


todoList.addEventListener("click", (e) => {
    // // check if user clicked on done button
    // console.log(e.target.classList)
    if (e.target.classList.contains("done")){
        // console.log("done");
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = 'line-through';
    }
    if (e.target.classList.contains("remove")){
        // console.log("remove");
        const li = e.target.parentNode.parentNode;
        li.remove();
    }
});
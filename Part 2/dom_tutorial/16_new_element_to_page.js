/*
    ADD NEW ELEMENT TO PAGE
*/

// // // add new HTML elements to page

// // innerHTML to add html element
// const todoList = document.querySelector(".todo-list")
// // console.log(todoList);
// todoList.innerHTML += '<li>new Todo</li>'


// // when you should use it, when you should not
// if you want to change whole innerHTML then you should use it. else do not use it.



/*
    DOCUMENT.CREATEELEMENT()
        > append
        > prepend
        > remove

        this all add element inside target element
*/
// const todoList = document.querySelector(".todo-list")
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Todo 2");
// newTodoItem.textContent = "Todo 2";
// // newTodoItem.appendChild(newTodoItemText)

// // APPEND
// todoList.append(newTodoItem) // add in end

// // PREPEND
// // todoList.prepend(newTodoItem) // add in begins
// console.log(newTodoItem)

// // REMOVE
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove()



/*
    DOCUMENT.CREATEELEMENT()
        > before
        > after

        this all add element before/after target element
*/
// const todoList = document.querySelector(".todo-list")
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Todo 2";
// // BEFORE
// todoList.before(newTodoItem);
// // AFTER
// todoList.after(newTodoItem);
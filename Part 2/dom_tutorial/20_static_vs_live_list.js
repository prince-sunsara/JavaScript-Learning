/*
    STATIC LIST VS LIVE LIST
        > querySelectorAll gives static list
        > getElementsBySomething gives live list
*/
// // // QUERY SELECTOR
// const listItems = document.querySelectorAll(".todo-list li");
// console.log(listItems); /// NodeList(5) [li, li, li, li, li]

// const sixLi = document.createElement("li");
// sixLi.textContent = 'Item 6';

// const ul = document.querySelector(".todo-list");
// ul.append(sixLi)
// console.log(listItems); /// NodeList(5) [li, li, li, li, li]


// // // GET ELEMENT BY SOMETHING
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName('li');
// console.log(listItems); /// HTMLCollection(5) [li, li, li, li, li]

// const sixLi = document.createElement("li");
// sixLi.textContent = 'Item 6';

// ul.append(sixLi)
// console.log(listItems); /// HTMLCollection(6) [li, li, li, li, li, li]
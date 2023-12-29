/*
    HOW TO SELECT AN HTML ELEMENT FROM JAVASCRIPT

    1.) SELECT ELEMENT USING GET ELEMENT BY ID
        > only for ids
*/

// const mainHeading = document.getElementById("main-heading");
// // console.log(mainHeading); // return html tag
// console.dir(mainHeading); // return h2#main-heading object

/*
    2.) SELECT ELEMENT USING QUERY SELECTOR
        > it works for class, ids all
*/

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading)

// const header = document.querySelector(".header");
// console.log(header) // return html header tag


// console.log(document.querySelector("section.todo-section h2"));



/*
    2.) SELECT ELEMENT USING QUERY SELECTOR ALL
*/
// const navItems = document.querySelectorAll(".nav-item") // return array like object of given values
// console.log(navItems);

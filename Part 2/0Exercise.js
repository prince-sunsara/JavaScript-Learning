/*
    CLOSURE EXAMPLE 1:
        > create function which take x as argument and nd return another function which take a as argument and return a power x(a^x)
*/

// // const powerFun = x => a => a ** x;

// function powerFun(x) {
//     return function(a) {
//         return a ** x;
//     }
// }

// console.log("-------Square------");
// const square = powerFun(2);
// console.log(square(2))
// console.log(square(3))
// console.log(square(4))
// console.log(square(5))

// console.log("-------Cube------");
// const cube = powerFun(3);
// console.log(cube(2))
// console.log(cube(3))
// console.log(cube(4))
// console.log(cube(5))



/*
    CLOSURE EXAMPLE 2:
        > create closure function, call it, if you call it more then one time it shows other output
*/
// function func(){
//     let counter = 0;
//     return function(){
//         if(counter < 1){
//             console.log("Hi! you called me");
//             counter++;
//         } else {
//             console.log("You allready called me once.")
//         }
//     }
// }
// const f = func()
// f() // Hi! you called me
// f() // You allready called me once.



/*
    DOM EXAMPLE:
        > select h2 and go to its parent nd change background color
*/
// const h1 = document.querySelector("h1");
// // console.log(h1);
// h1.parentNode.style.backgroundColor = 'yellow';
// h1.parentNode.parentNode.style.backgroundColor = '#292929ff';



/*
    EVENT EXAMPLE:
        > when you click the button change the bg and color
*/
// const allButtons = document.querySelectorAll("button");
// allButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(e.currentTarget); 
//         e.currentTarget.style.color = '#333'
//         e.currentTarget.style.backgroundColor = 'yellow'
//     })
// });

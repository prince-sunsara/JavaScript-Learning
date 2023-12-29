/*
HOISTED:
    > Function declarations are hoisted
    > for function declaration, you can call function before it was declared,
    > for other like arrow function or function expression, you cannot call function before it was declared,
*/

// // function declaration
// hello();
// function hello(){
//     console.log("Hello");
// }

// for other
hello(); // Cannot access 'hello' before initialization
const hello = function(){
    console.log("Hello");
}
/*
    METHODS:
        > function inside object

    THIS:
        > default : global object (window)
        > object itself
*/
// const person = {
//     fname: 'prince',
//     age: 8,
//     about: function(){
//         console.log(`person name is ${this.fname} and age is ${this.age}`);
//         // console.log(`person name is xx and age is 9`);
//     }
// }
// person.about();

// function personInfo(){
//     console.log(`person name is ${this.fname} and person age is ${this.age}`);
// }
// const person1 = {
//     fname: 'prince',
//     age: 20,
//     about: personInfo
// }
// const person2 = {
//     fname: 'sapna',
//     age: 19,
//     about: personInfo
// }
// const person3= {
//     fname: 'princess',
//     age: 21,
//     about: personInfo
// }
// person2.about()
// person1.about()
// person3.about()



/*
    THIS KEYWORD, WINDOW OBJECT
*/

// // run using html
// console.log(this)
// console.log(window)
// console.log("window === this is",window === this) // true


// function myFunc(){
//     console.log(this); // return window object
// }

// this keyword direct window object use kre or problem ho usse accha strict mode apply krna chahiye
"use strict";
function myFunc(){
    console.log(this); // return undefine 
}
myFunc()
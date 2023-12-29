/*
    DON'T DO THIS MISTAKE
*/

// objects
// const user1 = {
//     fname: 'prince',
//     age: 20,
//     about: function(){
//         console.log(this.fname);
//     }
// }

// // don't do this 
// const myFunc = user1.about;
// console.log(myFunc);

// // do this 
// user1.about()
// const myFunc = user1.about.bind(user1);
// myFunc();


/*
    THIS INSIDE ARROW FUNCTIONS
        > arrow function does not have their own this
        > they take 'this' from surrounding
*/
// const user1 = {
//     fname: 'prince',
//     age: 20,
//     about: () => {
//         console.log(this); // window object
//         console.log(this.fname);
//     }
// }
// user1.about()



/*
    SHORT SYNTAX FOR METHODS
        > you can directly write method instead of using function keyword
        > bellow both have same things
*/
// const user1 = {
//     fname: 'prince',
//     age: 20,
//     about: function(){
//         console.log(this.fname);
//     }
// }

// const user1 = {
//     fname: 'prince',
//     age: 20,
//     about(){
//         console.log(this.fname);
//     }
// }
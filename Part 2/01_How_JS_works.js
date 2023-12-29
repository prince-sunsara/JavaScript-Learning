/*
    HOW JAVASCRIPT WORKS
        ● Global Execution context
        ● This and window in global execution context
        ● Hoisting
        ● Are let and const are hoisted ? What is a reference Error ?
        ● Function execution context
        ● Scope chain and lexical environment
        ● Intro to closures
        ● Closure example 1
        ● Closure Example 2
        ● Closure Example 3
*/

/*
    1.) Early error checking 
    2.) Determining appropriate scope for variable
*/

/*
    code compilation
        > tokenzing/lexing 
        > parsing 
        > code generation

    code execute
        > in JS code executes inside execution context
        > first execution context created is known as global execution context
        
        * global execution context
            > creation phase
            > code execution phase

        * function execution context
*/

/*
    NOTE: Javascript is synchronous programming language, but brower add asynchronous nature in it. it is also single threaded
*/

// // example1        // store as 
// console.log(this); // window object {}
// console.log(window); // window object {}
// console.log(fname); // undefine
// var fname = "prince"; 
// console.log(fname); // prince


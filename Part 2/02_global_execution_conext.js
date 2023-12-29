/*
    GLOABAL EXECUTION CONTEXT
            > creation phase
                > memroy is create
            > code execution phase
                > line by lin execution
*/

// // // EXAMPLE 
// console.log(this); // window object {}
// console.log(window); // window object {}
// console.log(myFunction); // return myFunction(){...}
// console.log(fullName); // undefine

// // // FUNCTION DECLARATION
// // function declaration : here function is stored in memory as it is
// function myFunction(){
//     console.log("This is my function");
// }

// var firstName = "Prince"
// var lasstName = "Sunsara"
// var fullName = firstName + " " + lasstName;
// console.log(fullName)




// // // // EXAMPLE 
// console.log(myFunction); // undefine

// // // FUNCTION EXPRESSION
// // function expression : variable is stored as undefine
// var myFunction = function(){
//     console.log("This is my function.");
// }
// console.log(myFunction); // function(){...}

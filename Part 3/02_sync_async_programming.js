/*
    SYNCHRONOUS PROGRAMMING VS ASYNCHRONOUS PROGRAMMING
        > javascript is synchronous and single threaded programming language

    SYNCHRONOUS PROGRAMMING:
        > step by step work
        > second line of code doesn't execute until first line of code got executed

    ASYNCHRONOUS PROGRAMMING:
        > work at same time
        > all the code execute at same time 
*/
// // this is example of synchronouse programming language
// console.log("script start")
// for(let i=0; i<10000; i++){
//     console.log("inside for loop");
// }
// console.log("script end")


// // this is example of asynchronouse programming language
console.log("script start")
function hello(){
    console.log("hello world")
}
setTimeout(hello, 1000)
console.log("script end")

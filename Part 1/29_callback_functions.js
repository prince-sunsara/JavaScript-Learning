/*
CALLBACK FUNCTIONS
    > function as a parameters
*/
// function myFunc1(){
//     console.log("This is callback function.")
// }

// function myFunc2(calledFunction){
//     console.log(calledFunction);
//     calledFunction()
// }

// myFunc2(myFunc1)

/*
FUNCTIONS RETURING FUNCTIONS
*/
function myFunc() {
    function hello() {
        return "Hello world";
    }
    return hello;
}
const ans = myFunc();
console.log(ans());
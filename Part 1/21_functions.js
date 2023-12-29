/*
FUNCTIONS IN JAVASCRIPT
    > made to do any task when it is called(invoke, run)
*/

// declare a function
function sing(){
    console.log("Happy Birthday Dear...")
}
sing();

// add two number
function add(a,b){
    // console.log(a+b);
    return a+b;
}
// add(1,2)
console.log(add(1,3));

// is even ? 
function isEven(num){
    // if(num%2 ===0){
    //     return true;
    // } else {
    //     return false
    // }

    // if(num%2 ===0){
    //     return true;
    // }
    // return false
    
    return num%2 ===0;
}
console.log(isEven(7))

// find first character
function fChar(s){
    return s[0];
}
console.log(fChar('Prince'));

// index of target if target is present in array
const arr = [1,2,3,4,5];
const target = 3;

function targetFind(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target){
            console.log(`${target} is present in array at index ${i}`)
        }
    }
}
targetFind(arr, target);
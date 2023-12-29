/*
ARROW FUNCTIONS
*/

// function num(a){
//     console.log(a)
// }

// for one input also for one line
const num = a => console.log(a);
num(9)

// function add(a,b){
//     return a+b;
// }

const add = (a,b) => {
    return a+b
}


const targetFind = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target){
            console.log(`${target} is present in array at index ${i}`)
        }
    }
}

const arr = [1,2,3,4,5];
const target = 3;
targetFind(arr, target)
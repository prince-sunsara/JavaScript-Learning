/*
ARRAYS IN JS:
    > arrays is a reference type
    > ordered collections of elements(items)
    > mutable
*/
let arr = ['prince', 10, true, 0.2]
console.log(typeof arr)
// console.log(arr)

// changing element (update)
arr[0] = 'radhe';
console.log(arr)

// check if it is array or not 
console.log(Array.isArray(arr)); // true

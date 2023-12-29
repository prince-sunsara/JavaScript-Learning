/*
ARRAY DESTRUCTURING
*/
const arr1 = ['val1', 'val2', 'val3'];

// let [a1, a2] = arr1;
// console.log('a1', a1)
// console.log('a2', a2)

// let [a1, ,a3] = arr1;
// console.log('a1', a1)
// console.log('a3', a3)

let [a1, ...newArr] = arr1;
console.log('a1', a1)
console.log(newArr)


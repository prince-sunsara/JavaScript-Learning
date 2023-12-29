/*
ARRAYS METHODS
*/
// let arr = ['prince', 'priya', 'pinky'];
// console.log(arr)

// // PUSH METHOD: add element last
// arr.push("Pooja")
// console.log(arr)


// // POP METHOD: remove last element
// arr.pop()
// console.log(arr)


// // UNSHIFT ARRAYS: add element first
// arr.unshift('Pooja')
// console.log(arr)


// // SHIFT ARRAYS: remove element at first
// console.log(arr.shift())


// let arr1 = [1,2]


// // CLONE ARRAYS
// let arr3 = arr1.slice(0);
// let arr3 = [].concat(arr1);

// // new way to clone : spread operator
// let arr3 = [...arr1];
// console.log(arr1 === arr3)


// // CONCATE ARRAYS
// let arr2 = [].concat(arr1);
// // let arr3 = [].concat(arr1, [3,4])
// // let arr3 = arr1.slice(0).concat([3.5])
// let arr3 = [...arr1, 3,4,5]
// let arr4 = [6,7]

// let arr5 = [...arr3, ...arr4]
// console.log(arr5)


// // LEANGTH PROPERTY
// console.log('length of arr5 is:',arr5.length)


// // FOR LOOPS IN ARRAYS
// let fruits = ['apple', 'banana', 'cherry', 'mango']
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Fruit ${i+1} is ${fruits[i]}`);   
// }


// // USE CONST FOR CREATING AN ARRAY
// const n = [1,2,3] // heap memeory [1,2,3] 0x11
// n.push(4); // array's method does not change address so you can implement methods
// // n = [1,2,3,4] // updating value like this affects address so you can't do this
// console.log(n)


// // NOTE: it is best to use const to declare array


// // WHILE LOOP IN ARRAYS
// const arr = ['mahadev', 'krishna', 'ram']
// let i = 0;
// while (i< arr.length) {
//     console.log(arr[i].toUpperCase())
//     i++
// }


// // FOR OF LOOP IN ARRAY : print element one by one
// const arr = ['mahadev', 'krishna', 'ram']
// for(let x of arr){
//     console.log(x)
// }


// // FOR IN LOOP IN ARRAY : print index one by one
const arr = ['mahadev', 'krishna', 'ram']
for(let x in arr){
    console.log(x, arr[x])
}
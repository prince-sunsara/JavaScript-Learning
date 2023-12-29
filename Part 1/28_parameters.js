/*
DEFAULT PARAMETERS
*/
// function add(a, b=0) {
//     console.log(a+b)
// }
// add(1,2)
// add(3)



/*
REST PARAMETERS
*/
// function myFunc(a, b, ...c) {
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myFunc(3,4,5,6,7,8,9)

// function add(...numbers) {
//     console.log(numbers);
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));



/*
PARAM DESTRUCTURING 
    > objects
    > react
*/
const person = {
    name: "prince",
    age: 21
}

function showDetails({name, age}) { 
    console.log(name);
    console.log(age);
}

showDetails(person)
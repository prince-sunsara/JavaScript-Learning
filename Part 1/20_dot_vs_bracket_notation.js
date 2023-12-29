/*
DOT VS BRACKET NOTATION

*/
const person = {
    name: 'Prince Sunsara',
    age: 20,
    city: 'Patan',
    'college name': "spce" // you can write key with space by using quotation
};

// console.log(person.college name); // cannot access like this
console.log(person["college name"]); // can access like this

const key = 'email';

// person.key = 'abc@gmail.com' // return key: 'abc@gmail.com'
// person['key'] = 'abc@gmail.com' // return key: 'abc@gmail.com'
person[key] = 'abc@gmail.com' // return email: 'abc@gmail.com'
console.log(person)
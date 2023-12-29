/*
ITERATE AN OBJECT
    > for in loop
    > Object.keys
*/
const person = {
    name: 'Prince Sunsara',
    age: 20,
    city: 'Patan'
};

// for(let key in person){
//     // console.log(key) // return all key
//     // console.log(person.key) // return undefine as it find for property 'key'
//     // console.log(person[key]) // return all values
//     console.log(`${key} : ${person[key]}`)
// }


// for(let key of Object.keys(person)){
//     console.log(person[key])
// }


/*
COMPUTED PROPERTIES
*/
// const key1 = "k1";
// const key2 = "k2";

// const val1 = 'v1';
// const val2 = 'v2';

// const obj = {
    //     key1: val1,
    //     key2: val2
// }
// console.log(obj) // { key1: 'v1', key2: 'v2' }

// const obj = {
//     [key1]: val1,
//     [key2]: val2
// }
// console.log(obj) // { k1: 'v1', k2: 'v2' }


/*
SPREAD OPERATOR
*/
// const arr = [..."0123456789"]
// console.log(arr)

const obj1 = {
    key1: "val1",
    key2: "val2"
}
const obj2 = {
    key3: "val3",
    key4: "val4"
}
const obj = { ...obj1, ...obj2 };
console.log('new object is:',obj);

/*
OBJECTS INSIDE ARRAYS
    > very usefull in real world applications
*/
const users = [
    {id:2, name:"Prince", gender: 'male'},
    {id:1, name:"Sapna", gender: 'female'}
]

for(let user of users){
    console.log(user.id)
}
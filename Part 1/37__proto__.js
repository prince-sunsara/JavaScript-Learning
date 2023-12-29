/*
    __PROTO__
        > The __proto__ property is a simple accessor property on Object.prototype consisting of a getter and setter function.
        > The __proto__ getter function exposes the value of the internal [[Prototype]] of an object.
        > The __proto__ setter allows the [[Prototype]] of an object to be mutated. The value provided must be an object or null. 
        > __proto__ is reference for one object to second object
*/


// const obj1 = {
//     key1: "val1",
//     key2: "val2",
// }
// // const obj2 = {
// //     key3: "val3"
// // }
// // print(obj2.key1) // it will return error

// // there is another way to create object 
// const obj2 = Object.create(obj1);
// console.log(obj2); // return empty object but you can also use keys from obj1
// console.log(obj2.key1);

// // // this is happened because of __proto__ 
// // // official ecmascript documentation __proto__ = [[prototype]]

// console.log(obj2.__proto__); // { key1: 'val1', key2: 'val2' }



const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >=18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;   
    return user;
}
const u1 = createUser('prince', 'sunsara', 'prince@gmail.com', 21, 'manund patan')
const u2 = createUser('S', 'T', 'st@gmail.com', 21, 'patan')
console.log(u2)
console.log(u2.about());
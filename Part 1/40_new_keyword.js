/*
    NEW KEYWORD:
    > create empty object
    > empty object's value is 'this' ( this = {} )
    > return empty object ( return this )
    > 
*/

// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.age = age;
//     return user;
// }
// createUser.prototype.about = () => {
//     console.log(this.firstName, this.age)
// }
// const u1 = createUser('prince', 'sunsara', 'prince@gmail.com', 21, 'manund patan')
// console.log(u1);
// console.log(u1.sing())

// constructor function
function CreateUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
CreateUser.prototype.about = function(){
    console.log(this.firstName, this.age)
}
const u1 = new CreateUser("prince",20)
// console.log(u1)
/*
    NOTE: in above example we do this Object.create(createUser.prototype) to create new prototype object but here you don't have to write this it's done by 'new' keyword

    NOTE: write each constructor function in capital (first leter) as it use 'new' keyword leter
*/
// console.log(u1.about())

// // keys in function
// for(let key in u1){
//     // console.log(key);

//     // it gives function's own property but not its prototype's property
//     if(u1.hasOwnProperty(key)){
//         console.log(key)
//     }
// }


// // // ARRAY
// let number = [1,2,3]
// console.log(number)

// arrays show all properties (push, pop etc.) like constructor function because of it create arrays like bellow 
// so here new do all that stuff
let number = new Array(1,2,3)
console.log(number);
console.log(Array.prototype); // all the prototype properties
console.log(Object.getPrototypeOf(number)) // prototype Array []
console.log(CreateUser.prototype) // prototype object {}

// const user1 = {
//     firstName: "prince",
//     lastName: "Sunsara",
//     email: "prince@gmail.com",
//     age: 21,
//     address: "Patan Gujarat 384260",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18: function(){
//         return this.age >=18;
//     }
// }


// // function (that function create object)
// // 2) add key value pair
// // 3) return object
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`
//     }
//     user.is18 = function(){
//         return this.age >=18;
//     }
//     return user;
// }
// const u1 = createUser('prince', 'sunsara', 'prince@gmail.com', 21, 'manund patan')
// console.log(u1);
// const is18 = u1.is18();
// console.log(is18);
// const about = u1.about();
// console.log(about);


// above code consume more memory so so we have to make less code instead of this
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >=18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;    
    return user;
}
const u1 = createUser('prince', 'sunsara', 'prince@gmail.com', 21, 'manund patan')
const u2 = createUser('S', 'T', 'st@gmail.com', 21, 'patan')
console.log(u2)
console.log(u2.about());
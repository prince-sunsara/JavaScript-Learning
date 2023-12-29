/*
    PROTOTYPE:
        > function provide free space (empty object {} ) which is called protytype
        > only functions provide prototype properties
*/
function hello(){
    console.log("Hello");
}
// const hello = {key:"val"}
// const hello = ["val"]

// console.log(hello.prototype); // {}

// if(hello.prototype){
//     console.log("there is prototype");
// } else{
//     console.log("there is no prototype");
// }

// hello.prototype.abc = 'abc';
// hello.prototype.xyz = 'xyz';
// hello.prototype.sing = function(){
//     return "ha ha ha ha ha ha ha";
// };
// console.log(hello.prototype);
// console.log(hello.prototype.sing()); 

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;   
    return user;
}
createUser.prototype.sing = () =>{
    return "I am singing"
}
const u1 = createUser('prince', 'sunsara', 'prince@gmail.com', 21, 'manund patan')
console.log(u1);
console.log(u1.sing())





/*
    NOTE:
        __proto__ --> is a reference to another object
        prototype --> is a object for pertucular function
*/
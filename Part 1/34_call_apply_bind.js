/*
    CALL:
        > call the function
        > also used for using any method in object1 for object2
        > .call(this:function, this: args)
        > user1.about.call(user2) // use about method from user1 for user2
*/
// function hello(){
//     console.log("Hello world!");
// }
// hello();
// hello.call() // same 

// const user1 = {
//     fname: "prince",
//     age: 21,
//     about: function(){
//         console.log(this.fname, this.age);
//     },
//     other: function(hobby, char){
//         console.log(hobby, char);
//     }
// }
// // console.log(user1);
// user1.about()
// user1.other('cricket', 'luffy')

// const user2 = {
//     fname: "radhe",
//     age: 20,
// }
// // console.log(user2);
// user1.about.call(user2)
// user1.other.call(user2, 'swordsman', 'zoro')



/*
    APPLY:
        > similar to call,
        > just you have to add other args as array(list)
*/
function about(hobby, char){
    console.log(this.fname + " is name " + this.age + " is age " + hobby + " and " + char);
}
const user1 = {
    fname: "radhe",
    age: 20,
}
// about.apply(user1, ["Swords", "Zoro"]);



/*
    BIND:
        > return functions,
*/
const func = about.bind(user1, "Swords", "Zoro");
func()
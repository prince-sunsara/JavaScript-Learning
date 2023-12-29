/*
    PROMISE IN JS
        > it promise to do something
        > it represent future value 
        > this is the feature of browser
*/

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// // // create promise
// // new Promise(executor)
// // here we produce promise
// const friedRicePromise = new Promise((resolve, reject) => {
//     if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
//         // resolve("Fried Rice");
//         resolve({value:'Fried Rice'});
//     } else{
//         reject("Coluldn't do it");
//     }
// });


// // now we have to consume promise
// friedRicePromise.then((myFriedRice) =>{
//     // when promise resolve
//     console.log("Yay! Let's it ",myFriedRice);
// }, (err) =>{
//     // when promise reject
//     console.log(err)
// });

// friedRicePromise.then((myFriedRice) =>{
//     console.log("Yay! Let's it ",myFriedRice);
// }).catch(err => console.log(err));



/*
    NOTE: Promise add hote hai microTask Queue mai
*/
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// 1
console.log("Script start");
// 2
const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
        resolve({value:'Fried Rice'});
    } else{
        reject("Coluldn't do it");
    }
});
// 3
friedRicePromise.then((myFriedRice) =>{
    console.log("Yay! Let's it ",myFriedRice);
}).catch(err => console.log(err));
// 4
setTimeout(()=>{
    console.log("I am settimeout");
},0)
// 5
for (let i = 0; i < 10000; i++) {
    console.log(i);
}
// 6
console.log("Script end");

// // // OUTPUT
// // first GEC run hoga usme se 2 object bnega or 
// // 3 or 4 ko browser smbhalega
// 1
// 5
// 6
// // yaha pe GEC khtm hoga or 

// // 3 ko microtask queue me store kiya jayega
// // 4 ko callback queue me store kiya jayega
// // priority : microtask queue > callback queue
// 3
// 4
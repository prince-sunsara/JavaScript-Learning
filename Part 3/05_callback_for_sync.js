/*
    CALLBACK:
        > function passed as parameter
*/

// function myFun(callback){
//     console.log("Function is doing some task 1");
//     callback()
// }
// function myFun2(){
//     console.log("Function is doing some task 2");
// }
// myFun(myFun2)

// function myFun(callback){
//     console.log("Function is doing some task 1");
//     callback();
// }
// myFun(() => {
//     console.log("Function is doing some task 2");
// })


/// ex2
// function getTwoNum(a,b,callback){
//     console.log(a + ' + ' + b);
//     if(typeof a=== 'number' && typeof b === 'number'){
//         callback(a,b);
//     }else{
//         console.log("Wrong datatype");
//     }
// }
// function addTwoNum(x,y){
//     console.log(x+y);
// }
// getTwoNum(4,5, addTwoNum)


/// ex2
function getTwoNum(a,b, onSuccess, onFailure){
    if(typeof a=== 'number' && typeof b === 'number'){
        console.log(a + ' + ' + b);
        onSuccess(a,b);
    }else{
        onFailure()
    }
}

getTwoNum(4,"5", (n1,n2) => {
    console.log(n1+n2);
}, () => {
    console.log("Wrong datatype");
});
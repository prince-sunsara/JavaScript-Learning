/*
    CLOSUREs
        > jab function kisi or function me se return hota he to wo uske sath us function ke variables bi leke return hota hai
        > it means inner function outer function ki chize sath leke return hota hai
*/

// // // function can return functions
// function outerFunction() {
//     function innerFunction() {
//         console.log("This is inner function.");
//     }
//     return innerFunction;
// }
// const ans = outerFunction()
// // console.log(ans);
// ans()


// function printFullName(fname, lname) {
//     function printName() {
//         console.log(fname +" "+lname);
//     }
//     return printName;
// }
// const ans = printFullName('prince', 'sunsara')
// // console.log(ans);
// ans()

/*
    NOTE: jab printName function return hoga tab apne lexical environment ke sath return hoga
        > LEXICAL ENVIRONMENT: printName function kaha pe present hai, here in printFullName
        > so here, printName function apne sath printFullName ke arguments leke return hoga
*/



// // // EXAMPLE1
// function hello(x){
//     const a = 'varA';
//     const b = 'varB';
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans = hello('arg');
// ans()
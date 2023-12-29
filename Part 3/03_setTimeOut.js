/*
    SETTIMEOUT(fun, timeDelay)
        > take function as input, second parameter as time 
        > time shows after how much time you want to execute your function
        > is is used to delay your function 
        > setTimeout provides by Browser's webApis
        > setTimeout also gives an id
*/

// console.log("script start")
// function hello(){
//     console.log("hello world")
// }
// setTimeout(hello, 1000)
// console.log("script end")



// below settmeout 0s pe execute hoga pr event loop use callback queue me stop kr lega until js callstack me se GEC ka sb code execute na krle 
// console.log("script start")
// setTimeout(()=>{
//     console.log("hello world")
// },0)
// for(let i=0;i<100;i++){
//     console.log("...")
// }
// console.log("script end");


// // setTimeout Id
// const id = setTimeout(()=>{
//     console.log("hello world")
// },0)
// console.log("setTimeout id is", id);



/*
    CLEARTIMEOUT:
        > if you want to clear you settimeout function(code) then you can use it
*/
console.log("script start");
const id = setTimeout(()=>{
    console.log("hello world")
},0)
for(let i=0;i<100;i++){
    console.log("...")
}
console.log("setTimeout id is", id);
clearTimeout(id);
console.log("script end"); // after this line, setTimeout function's code does not run

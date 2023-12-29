/*
    SETINTERVAL(FUN, TIME)
        > after each time, function will executed
        > after every TIME your function will run and give output
*/
console.log("script start")
setInterval(()=>{
    console.log(Math.random())
}, 1000)
console.log("script end");
// // output 
// script start
// script end
// 0.4199722066972451
// 0.4226878178283098
// 0.3052165850907038
// 0.5267927221941169
// 0.2008788565106019
// 0.21025913972148236
// 0.3050653080708883 ... and so on


/*
    CLEARINTERVAL:
        > if you want to clear you setInterval function(code) then you can use it
*/

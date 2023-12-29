/*
BLOCK SCOPE VS FUNCTION SCOPE
    > let and const are block scope
    > var is function scope
*/
{
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(c) // return value of c
console.log(b) // return error: b is not defined
console.log(a) // return error: a is not defined
/*
 Truthy and Falsy Values 
*/

// Falsy Values

// false
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)


// Truthy Values

// all ohter values excluding above are truthy

let firstName = "";
if (firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty!");
}
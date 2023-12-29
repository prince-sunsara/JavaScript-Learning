/* 
TYPE OF OPERATORS:
    data types (primitive data types)
    string 
    number 
    booleans 
    undefined
    null 
    BigInt
    Symbol
*/ 


// let age = 22; 
// let firstName = "harshit";
// // console.log(typeof age);


// CONVERT NUMBER TO STRING.
// // 22 -> "22"
// age = age + "";
// console.log(typeof(age)); "22"


// CONVERT STRING TO NUMBER. 
// let myStr = +"34";
// console.log(typeof myStr);

// let age = "18";
// age = Number(age); // number
// let age = 18;
// age = String(age); // string


/*
UNDEFINE TYPE 
*/
let myName; // cannot do this in const
console.log(typeof myName);

/*
NULL TYPE -> means nothing
*/
let myvariable = null;
console.log(myvariable);
console.log(typeof myvariable); // type is object and that is one bug in js

/* 
BIGINT TYPE  
*/ 
let myNum = BigInt(123)
// console.log(Number.MAX_SAFE_INTEGER); // max value stored in int 9007199254740991
let myNum2 = 122n;
console.log(myNum+myNum2); // you can do operation in same type bigint + bigint and cannot do it in different types

/* 
BOOLEAN & COMPARISON TYPE
    > true, false
    > == vs ===
    > != vs !==
*/

const a = 1;
const b = 2;
console.log(a>b)

// // == vs ===
// '==' only checks value
// '===' checks value and datatype
const x = "1";
const y = 1;
console.log(x==y);
console.log(x===y);
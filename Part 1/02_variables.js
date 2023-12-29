'use strict';
// strict mode which helps you to program strictly using rules

/*
INTRO TO VARIABLES:
    variables can store some information
    we can use that information later
    we can change that information later

RULES FOR NAMING VARIABLES:
    can not start with numbers
    you can use only underscore and doller symbol ( _, $ )
    cannot use space
    start with small letter and use camelCase
*/ 

/* VAR KEYWORD */
// you can declare it as many time you want
var firstName = "Harshit";
console.log(firstName);
// change value 
firstName = "Mohit";
console.log(firstName);

// block score vs function scope so use let

/* LET KEYWORD */
// can not declare again if it is already declared
let name = "prince"
console.log(name);

/* 
DECLARE CONSTANTS:
    can not change it once it declared and assign
*/
const pi = 3.14;
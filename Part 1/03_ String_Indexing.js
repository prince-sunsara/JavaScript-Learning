/*
STRING INDEXING
    sequence of characters

METHODS OF STRING:
    this methods gives you new object of that string
    
    trim() : remove extra spaces
    toUpperCase() : convert string to upperCase
    toLowerCase() : convert string to lowerCase
    slice() : it has two parameters start index (include) end index (exclude) it gives you perticular part of your string as per your need
*/

let firstName = "harshitdfjakldsfdf";

//  h    a   r   s   h   i   t 
//  0    1   2   3   4   5   6

// console.log(firstName[0]);
// length of string 
// firstName.length 

console.log(firstName.length);

console.log(firstName[firstName.length-2]);

// last Index : length - 1

let name = ' Prince '
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0, 6));
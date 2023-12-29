/*
    HOISTING:
        > Hoisting is JavaScript's default behavior of moving declarations to the top.
        > Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors 
        > this happens during the 1st phase (memory creation phase) of the Execution Context.
*/

// // FOR VAR : var fname is stored in memory as undefine
// console.log(fname);  // // : IT RETURNS UNDEFINE 
// var fname = 'prince';


// // FOR LET|CONST : let|const fname is stored in memory as uninitialize
console.log(fname); // // : CANNOT ACCESS 'fname' BEFORE INITIALIZATION
// let fname = 'prince';
const fname = 'prince';




/*
    TDZ(TDG): TEMPORAL DEAD ZONE
        > as you show bellow 
            console.log(fname);
            var fname = 'prince';
            console.log(fname);
        
        > here fname is stored in memory, its value is undefine, from undefine to stored value as 'prince', that much time is known as TDZ.
*/
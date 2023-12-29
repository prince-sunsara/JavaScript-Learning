/*
    LEXICAL ENVIRONMENT, SCOPE CHAIN
        > it means where is something written
        > it shows where is something present ( koi chiz kahan pe present hai)
        > for ex: myFun check for fname where its value is stored (here parent function)
        > for ex: myFun check for lname where its value is stored (global memory)
*/
const lname = 'Sunsara';
const printName = function(){
    const fname = 'Prince';
    function myFun(){
        console.log(fname);
        console.log(lname);
    }
    myFun()
}
printName();
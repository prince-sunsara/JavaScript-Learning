/*
    FUNCTION EXECUTION CONTEXT
        > (local) Memory creation phase
        > code execution phase


        STACK (CALL STACK) for GEC and FEC

            |       |
            |       |
            |       |
           -----------
            |  F    |
            |   E   |
            |    C  |   2nd in 1st  out
           -----------
            |  G    |
            |   E   |
            |    C  |   1st in 2nd  out
           -----------
*/


// line 1
let foo = 'foo';
// line 2
console.log(foo);
// line 3
function getGullName(fname, lname) {
    console.log(arguments);  // // [Arguments] { '0': 'prince', '1': 'Sunsara' }
    let myVar = 'var inside function'; // // first set as uninitialize but after line 4 execution set as its value
    console.log(myVar); 
    const fullName = fname + " " + lname; // // first set as uninitialize but after line 4 execution set as its value
    return fullName;
}
// line 4
const personName = getGullName("prince", "Sunsara");
// line 5
console.log(personName)




/*
    NOTE: ARRAYLIKE OBJECT
        > it has index, and lenght property like array
*/
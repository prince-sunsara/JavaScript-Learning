/*
LEXICAL SCOPE:
    > lexical scope checks for lexial Enviorenment
*/

const myVar = 10;

function func1(){
    // const myVar = 11;
    
    function func2() {
        // const myVar = 12;
        function func3() {
            const myVar = 13;
            console.log(myVar);
        }   
        console.log(myVar);
        func3();
    }
    console.log(myVar);
    func2();
}
func1();
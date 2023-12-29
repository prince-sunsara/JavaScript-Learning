/*
FUNCTIONS INSIDE FUNCTION
*/

const App = () => {
    console.log("This is app");
    const inFunction = () => {
        console.log("This is function inside function");
    }
    const add = (a,b) => {
        console.log(a+b);
    }

    inFunction()
}

App()
/*
NESTED IF-ELSE:

learn it with game:
generate one number and guess it unless you can't find correct one.
*/

let winningNumber = Math.floor(Math.random() * 20 )
console.log(winningNumber);

let userGuess = +prompt("Enter your Guess")


// if (winningNumber === userGuess) {
//     console.log("You won!");
// } else { 
//     console.log("Your guess is wrong!");
//     if (winningNumber > userGuess) {
//         console.log("Too low..");
//     } else {
//         console.log("Too high..")
//     }
// }

if (winningNumber === userGuess){
    console.log("You won!");
} else if (winningNumber > userGuess) {
    console.log("Too low..")
} else if (winningNumber < userGuess) {
    console.log("Too high..");
} else { 
    console.log("Your guess is wrong!");
}
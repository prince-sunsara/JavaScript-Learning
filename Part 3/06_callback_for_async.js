/*
    ASYNCHRONOUS PROGRAMMING
    
    CALLBACK
        > A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution.
*/

// const heading1 = document.querySelector(".heading1");
// setTimeout(() => {
//     heading1.textContent = 'Heading 1';
//     heading1.style.color = 'violet';
// }, 1000);


/*
    CALLBACK HELL || PYRAMID OF DOOM
        > callback hell generally refers to an ineffective way of writing code with asynchronous calls. It is also known as the Pyramid of Doom because it's look like pyramid.
        > The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed. It reduces code readability and maintenance.
*/

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');

// CALLBACK HELL
// setTimeout(() => {
//     heading1.textContent = 'Heading 1';
//     heading1.style.color = 'violet';
//     setTimeout(() => {
//         heading2.textContent = 'Heading 2';
//         heading2.style.color = 'purple';
//         setTimeout(() => {
//             heading3.textContent = 'Heading 3';
//             heading3.style.color = 'red';
//             setTimeout(() => {
//                 heading4.textContent = 'Heading 4';
//                 heading4.style.color = 'pink';
//                 setTimeout(() => {
//                     heading5.textContent = 'Heading 5';
//                     heading5.style.color = 'green';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

function changeTex(element, text,color, time, onSuccess,onFailure) {
    setTimeout(()=>{
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if(onSuccess){
                onSuccess();
            }
        } else{
            if (onFailure) {
                onFailure()
            }
        }
    }, time)
}
// changeTex(heading1, "one", "violet", 1000, ()=>{
//     changeTex(heading2, "two", "purple", 2000)
// });

// // PYRAMID OF DOOM
changeTex(heading1, "one", "violet", 1000, ()=>{
    changeTex(heading2, "two", "orange", 1000, ()=>{
        changeTex(heading3, "three", "blue", 1000, ()=>{
            changeTex(heading4, "four", "red", 1000, ()=>{
                changeTex(heading5, "five", "yellow", 1000, ()=>{
                    changeTex(heading6, "six", "gray", 1000, ()=>{
                        changeTex(heading7, "seven", "purple", 1000, ()=>{
                        }, ()=>{console.log("heading7 doesn't exist");});
                    }, ()=>{console.log("heading6 doesn't exist");});
                }, ()=>{console.log("heading5 doesn't exist");});
            }, ()=>{console.log("heading4 doesn't exist");});
        }, ()=>{console.log("heading3 doesn't exist");});
    }, ()=>{console.log("heading2 doesn't exist");});
}, ()=>{console.log("heading1 doesn't exist");});
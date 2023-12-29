/*
    EVENTS
        > any task like click, button press, mouse hover
        > For all Events : https://developer.mozilla.org/en-US/docs/Web/Events
        > there are three way to add events
            1.) adding html attribute for events like 'onclick="console.log(\"you clicked me\")"'
            2.) second way is select attribute in js file and set its property for event
            3.) using addEventListener
        
    MOUSE EVENTS
        > https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
        > Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.
*/

// // // second way : not good way
// const btn =  document.querySelector(".btn-headline")
// btn.onclick = () =>{
//     console.log("You Clicked on Button");
// }

// // // third way method ---> addEventListener
// const btn =  document.querySelector(".btn-headline");
// // function clickMe(){
// //     console.log("You clicked me!!");
// // }
// // btn.addEventListener("click", clickMe)

// btn.addEventListener("click", () => {
//     console.log("You clicked me!!"); 
// });


/*
    THIS INSIDE EVENETS
        1.) for Function Declaration | Expression
        > value of this inside events is always element which is targeted

        2.) for Arrow Function
        > value of this inside events is always element window object
*/
// const btn =  document.querySelector(".btn-headline");
// // Function Declaration
// function clickMe() {
//     console.log("You clicked me!!"); 
//     console.log("value of this : ", this);
// }
// btn.addEventListener("click", clickMe);

// // Function Expression
// btn.addEventListener("click", function() {
//     console.log("You clicked me!!"); 
//     console.log("value of this : ", this);
// });

// // Arrow Function
// btn.addEventListener("click", () => {
//     console.log("You clicked me!!"); 
//     console.log("value of this : ", this);
// });
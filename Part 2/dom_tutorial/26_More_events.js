/*
    KEYPRESS EVENT
        > koi bhi key press hui ho uski info 
        > it returns key which is pressed 
*/
// const body = document.body;
// body.addEventListener("keypress", (e)=>{
//     console.log(e.key); 
// });

/*
    MOUSEOVER | MOUSELEAVE EVENT
        > mouse related
*/
const btn = document.querySelector(".btn-headline");
btn.addEventListener("mouseover", ()=>{
    console.log("mouseover event occured");
})
btn.addEventListener("mouseleave", ()=>{
    console.log("mouseleaev event occured");
})

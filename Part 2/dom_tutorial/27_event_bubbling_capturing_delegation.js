
/*
    EVENT BUBBLING | EVENT PROPAGATION
        > kisi element pe click kro or uspe event lga hoga to wo to run hoga pr use parent, grandparent sbhi ka event run hoga
        > if i clicked child it gives me bellow output
            bubbling || child
            bubbling || parent
            bubbling || grandparent
            bubbling || body

*/
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// child.addEventListener("click", () => {
//     console.log('bubbling || child');
// })

// parent.addEventListener("click", () => {
//     console.log('bubbling || parent');
// })

// grandparent.addEventListener("click", () => {
//     console.log('bubbling || grandparent');
// })

// document.body.addEventListener("click", () => {
//     console.log('bubbling || body');
// })

/*
    EVENT CAPTURING
        > kisi element ko click krne pr phle ye dekhega ki uske grandparent, parent pe ko event he to wo run krega uske bad khud ka event run krega 
        > if i clicked child it gives me bellow output
            capturing || body
            capturing || grandparent
            capturing || parent
            capturing || child
*/
// child.addEventListener("click", () => {
//     console.log('capturing || child');
// }, true)

// parent.addEventListener("click", () => {
//     console.log('capturing || parent');
// }, true)

// grandparent.addEventListener("click", () => {
//     console.log('capturing || grandparent');
// }, true)

// document.body.addEventListener("click", () => {
//     console.log('capturing || body');
// }, true)

/*
    NOTE: hmesa phle capturing hogi fir bubbling
        > try to uncomment both code from capturing and bubbling
*/


/*
    EVENT DELAGATION
        > e.target
*/
grandparent.addEventListener("click", (e) => {
    console.log(e.target.textContent);
})

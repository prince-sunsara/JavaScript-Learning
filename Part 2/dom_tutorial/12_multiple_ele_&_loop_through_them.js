/*
    SELECT MULTIPLE ELEMENTS AND LOOP THROUGH THEM
        > array like object --> indexing, length properties

        > getElementBy(---)Name : this type of element selector return HTMLCollection
            > you cannot use forEach loop for this    
            
        > querySelector(All) : this type of element selector return NodeList
            > you can use forEach loop for this    

*/

// // // get multiple elements using getElements by class name
// const navItems = document.getElementsByClassName("nav-item"); // // HTMLCollection
// console.log(navItems);

// // // get multiple elements using getElements by tag name
// const aTag = document.getElementsByTagName("a"); // // HTMLCollection
// console.log(aTag);


// // // get multiple elements using querySelectorAll
// const navItems = document.querySelectorAll(".nav-item"); // // NodeList
// console.log(navItems);


/*
    FOR LOOP for HTMLCollection
        > simple for loop
        > for of loop
        > forEach : we cannot use forEach loop to iterate through HTMLCollection, if you want to do it you need to change HTMLCollection in array
*/

// // // // SIMPLE FOR LOOP
// const aTag = document.getElementsByTagName("a"); // // HTMLCollection
// for(let i = 0; i< aTag.length; i++){
//     console.log(aTag[i]);
//     // aTag[i].style.color = '#0af8fcff'
//     aTag[i].style.color = '#edf7faff'
// }


// // // FOR OF LOOP
// const navItems = document.getElementsByClassName(".nav-item"); // // HTMLCollection
// for(let navItem of navItems){
    //     // navItem.style.backgroundColor = '#6b0113ff'
//     navItem.style.backgroundColor = '#005c70ff'
//     navItem.style.fontWeight = 'bold'
//     navItem.style.padding = '0.2rem 0.8rem'
//     navItem.style.borderRadius = '0.3rem'
// }


// // // FOREACH : can't use it for HTMLCollection
// const navItems = document.getElementsByTagName("a"); // // HTMLCollection
// navItems.forEach((navItem) => {     // Uncaught TypeError: navItems.forEach is not a function
//     navItem.style.color = 'red';
// });

// // // if you have to use foreach for HTMLCollection you need to convert it into array
// let navItems = document.getElementsByTagName("a"); // // HTMLCollection
// navItems = Array.from(navItems);
// // console.log(navItems)
// navItems.forEach((navItem) => {
//     navItem.style.color = 'red'
// });



/*
    FOR LOOP for NodeList
        > simple for loop
        > for of loop
        > forEach
*/
let navItems = document.querySelectorAll("a");  // NodeList
// console.log(navItems);

// // // SIMPLE FOR LOOP
// for(let i = 0; i< navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.color = 'red'
// }


// // // // FOR OF LOOP
// for(let navItem of navItems){
//     navItem.style.backgroundColor = '#005c70ff'
//     navItem.style.fontWeight = 'bold'
//     navItem.style.padding = '0.2rem 0.8rem'
//     navItem.style.borderRadius = '0.3rem'
// }


// // // FOREACH LOOP : you can also do foreach after array.from method
// navItems.forEach((navItem) => {
//     navItem.style.color = 'yellow'
// });
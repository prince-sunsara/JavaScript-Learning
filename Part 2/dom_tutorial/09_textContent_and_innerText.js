/*
    CHANGE TEXT, TEXT CONTEXT AND INNERTEXT
*/
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
console.log(mainHeading.innerText);

mainHeading.textContent = "This is something else"
console.log(mainHeading.textContent);
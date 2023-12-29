/*
    FUNCTION THAT RETURNS PROMISES
*/
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
function ricePromise() {
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")) {
            resolve({ value: 'Fried Rice' });
        } else {
            reject("Coluldn't do it");
        }
    });
}
ricePromise().then((myFriedRice) => {
    console.log("Yay! Let's it ", myFriedRice);
}).catch(err => console.log(err));

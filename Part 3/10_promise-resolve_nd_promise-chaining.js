/*
    PROMISE.RESOLVE
        > creates a new resolved promise
        > take value (eg. x) and return promise whose value is x

    PROMISE CHAINING
        > chain of promises
*/

// // // promise.resolve
// const myPromise = Promise.resolve(5);
// myPromise.then(value=>{console.log(value)})


/*
    NOTE: then() it always returns promise
        > its benifits is that we can create chain of promises
*/

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    });
}
myPromise()
    .then(value => {
        console.log(value);
        value += 'bar';
        return value; /// it doesn't return value, it returns promise : return Promise.resolve(value)
    }).then(value => {
        console.log(value);
        value += 'mar';
        return value;
    }).then(value => {
        console.log(value);
    })
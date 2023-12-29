/*
    CONSUMING PROMISES WITH ASYNC and AWAIT
        > async always returns a promise
        > await wait untill resolve
*/

const URL = 'https://jsonplaceholder.typicode.com/posts';
// const URL = 'https://jsonplaceholder.typicode.com/postss';

// // for reference
// fetch(URL)
//     .then(response => return response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// // async likhne ke browser pura kam background me krega
async function getPosts() {
    const response = await fetch(URL);
    // console.log(response)
    if (!response.ok)
        throw new Error("Something is not okay!!")
    const data = await response.json()
    return data;
}
// console.log(getPosts()) // returns promise
getPosts()
    .then(data => console.log(data))
    .catch(err => console.log(err)) // network error
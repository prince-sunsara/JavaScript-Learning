/*
    FETCH APIs
        > fetch() return promise
*/

// const URL = 'https://jsonplaceholder.typicode.com/posts';
// fetch(URL)
//     .then(response => {
//         // console.log(response.json());
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })


/*
    ERROR HANDLING IN FETCH API
*/
// const URL = 'https://jsonplaceholder.typicode.com/postss';
// fetch(URL)
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             // this gives an error
//             throw new Error("Something is not okay!!")
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         // it work when network error : eg. TypeError: Failed to fetch
//         console.log(err);
//     })



// // // POST REQUEST
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url, {
    method: "POST",
    headers: {
        "content-type": 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title: 'Hello World!',
        body: 'prince',
        userId: 1,
    })
})
    .then(res => {
        if (res.ok)
            return res.json()
        else
            throw new Error("Something is not working")
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
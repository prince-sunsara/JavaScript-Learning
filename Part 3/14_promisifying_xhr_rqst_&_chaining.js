/*
    PROMISIFYING XHR REQUESTS AND CHAINING USING 'THEN' METHOD
*/
const URL = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject(new Error("Something went wrong."))
            }
        }
        xhr.onerror = () => {
            reject(new Error("Something went wrong."))
        }
        xhr.send()
    })
}
sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data);
        return data;
    })
    .then(data => {
        // console.log(data[3]);
        console.log(data);
    })
    .catch(err => console.log(err))
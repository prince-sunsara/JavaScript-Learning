/*
    XHR request Chaining
    XML HTTP REQUEST


    XMLHttpRequest: readyState property
      Value	 State	            Description
        0	UNSENT	            Client has been created. open() not called yet.
        1	OPENED	            open() has been called.
        2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
        3	LOADING	            Downloading; responseText holds partial data.
        4	DONE	            The operation is complete.

    
    HTTP status code
    1xx informational response – the request was received, continuing process
    2xx successful – the request was successfully received, understood, and accepted
    3xx redirection – further action needs to be taken in order to complete the request
    4xx client error – the request contains bad syntax or cannot be fulfilled
    5xx server error – the server failed to fulfil an apparently valid request
*/

// // JSON fake api
const URL = 'https://jsonplaceholder.typicode.com/posts';

// // object for xml http request
// const xhr = new XMLHttpRequest();
// // console.log(xhr);

// // open method
// // console.log(xhr.readyState); // 0
// xhr.open('GET', URL);
// // console.log(xhr.readyState); // 1

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         console.log(typeof xhr.response);  /// string
//         const response = xhr.response;
//         const data = JSON.parse(response); /// convert into js object
//         console.log(typeof data);
//         console.log(data);
//     }
// }

// // onload is execute only if readystatechange === 4
// xhr.onload = () => {
//     // console.log(xhr.readyState);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();


/*
    ERROR HANDLING
*/
const xhr = new XMLHttpRequest();
xhr.open('GET', URL)
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
    } else {
        console.log("Something went wrong!");
    }
};
// // this is for any internet error
xhr.onerror = () => {
    console.log("network error");
}
xhr.send();

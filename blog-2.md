<!-- How to handle asynchronous operations using async/await over callback/promise TypeScript. -->

Callbacks
Callbacks are those functions which are passed as arguments to another function and are executed when a particular task is completed.

function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 1000);
}

fetchData((result) => {
    console.log(result); // Output: Data fetched
});
Here in the above example, we have defined a fetchData() function which has a timeout of 1 second. That means the result will be rendered after 1 second.

Callback hell problem: It creates a problem when we have multiple asynchronous operations. There it forms a nested structure which becomes complicated and hard to read code.

Advantages of Callbacks

They are very simple to use and are widely supported.
Efficient when working with simple asynchronous operations.
Disadvantages of Callbacks

Quite complicated when dealing with multiple asynchronous operations which leads to callback hell.
Error handling is challenging task as the code becomes complicated and hard to understand.
Promises
Promises is a representation of completion or failure of any asynchronous operation. It allows chaining of multiple asynchronous operations. There are basically 3 states in promises i.e., resolve, pending and reject.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

fetchData()
    .then((result) => {
        console.log(result); // Output: Data fetched
    })
    .catch((error) => {
        console.error(error);
    });
In the above code, we have a fetchData() function which returns a promise. If the promise is resolved, the result will be displayed and if it is rejected then the catch block will be executed which will display the error.

Chaining Promise:

fetchData()
    .then((result) => {
        return processData(result);
    })
    .then((processedData) => {
        console.log(processedData);
    })
    .catch((error) => {
        console.error(error);
    });
In the above code, fetchData() function is either resolved or rejected. If the request is resolved, .then will be executed step-by-step. But is the request is rejected then the chain will be executed till it reaches the .catch block to display the error.

Advantages of Promises

Promises solves the main problem of callback hell by providing chaining. This makes code more readable and clean.
Error handling is improved with the help of promises as we can use .catch() for error handling in promises.
Disadvantages of Promises

It requires deep understanding of Promises API as it includes multiple properties and methods.
Async/Await
Async/await is a feature that is built on top of promises to make it better and efficient. It is more concise and provides a synchronous-like way to write asynchronous programs. await keyword is always used inside the async function scope.

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result); // Output: Data fetched
    } catch (error) {
        console.error(error);
    }
}

getData();
In the above code, fetchData() function returns a promise. getData() is a async function which contains a try catch block . We have result which waits for the fetchData() function to get the result. If the promise is resolved then the result will be displayed otherwise catch block will be executed.


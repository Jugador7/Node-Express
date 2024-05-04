//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.

let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved")
    },6000)
})

//Console log before calling promise

console.log("Before calling promise");

//Call the promise and wait fot it to be resolved and then print a message.

myPromise.then((successMessage) => {
    console.log("From callback " + successMessage)
})

//Console log after calling the promise
console.log("After calling promise");


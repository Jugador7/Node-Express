let prompt = require('prompt-sync')();
let fs = require('fs');

const methCall = new Promise((resolve, recject)=>{
  setTimeout(()=>
    {
      let filename = prompt ('What is the name of the file?');
      try{
        const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'});
        resolve(data);
      }catch(err){
        reject(err)
      }
    },3000);
});

console.log(methCall);

methCall.then(
  (data) => console.log(data),
  (err) => console.log("Error reading file")
)

//Se puede usar axios para manejar respuestas HTTP

//PROMISES: An object in JavaScript that acts as a placeholder for an asynchronous task that is yet to be completed. 
//It is the object that is returned from an asynchronous method. 
//When you define a promise object in your script, instead of returning a value immediately, it returns a promise. 
//The promise has three states, which are pending, fulfilled, and rejected.


//USE_CASE: Promises are used when the processing time of the function we invoke takes time like remote URL access, I/O operations file reading, etc.

let prompt = require('prompt-sync')();
let fs = require('fs');
const methCall = new Promise((resolve,reject)=>{
    let filename = prompt('What is the name of the file ?');
    try {
      const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'});
      resolve(data);
    } catch(err) {
      reject(err)
    }
});
console.log(methCall);
methCall.then(
  (data) => console.log(data),
  (err) => console.log("Error reading file")
);

object.on()	 //	It defines an event handler that the framework calls when an event occurs

http.request( options, function(response) {
 let buffer = ‘’;
 ...
 response.on('data', function(chunk) {
   buffer += chunk;
 });
 response.on('end', function() {
   console.log(buffer);
 });
}).end();



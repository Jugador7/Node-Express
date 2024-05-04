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

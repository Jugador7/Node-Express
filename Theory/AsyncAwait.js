//In the following code sample, we have created a Promise with a callback where we handle resolve and reject.

const axios = require('axios');
const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfEntries = resp.data.entries;
      listOfEntries.forEach((entry)=>{
        console.log(entry.Category);
      });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
console.log("Before connect URL")
connectToURL('https://api.publicapis.org/entries');
console.log("After connect URL")

//We will see how the same is accomplished with async/await.

const axios = require('axios');
const connectToURL = async (url) => {
    try {
        const response = await axios.get(url);
        const listOfEntries = response.data.entries;
        listOfEntries.forEach((entry) => {
            console.log(entry.Category);
        });
    } catch (error) {
        console.error(error.toString());
    }
}
console.log("Before connect URL");
connectToURL('https://api.publicapis.org/entries');
console.log("After connect URL");

//The best use of async/await can be realized when we have a scenario where some async methods have to happen in sequence. 
//Taking the same example as above, let's first get a list of all entries by and based on categories, send request to get the details of each entry in that category. 
//So, these two actions have to happen one after the other but asynchronously. 
//These can be accomplished with or without async/await. 
//But chaining actions is much cleaner with async await, as you can observe below. 
//In actual situations, the nesting can be multiple level and rendering the code difficult to read and maintain. In such situations, we could use async/await.

//The below code is done by nesting the second set of promises into the first.

const axios = require('axios');
/*
In the following code we try to get list of all entries from remote url and then based on that make request about 
each of the category. Finally print them all out. We are using axios get, which returns a promise. 
*/
const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfEntries = resp.data.entries;
      return listOfEntries.map((entry)=>{
          return entry.Category
      })
    }).then((categories)=>{
      let Categories = categories.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
        Categories.forEach((category)=>{
            const req = axios.get("https://api.publicapis.org/entries?Category="+category);
            req.then(resp=>{
                console.log(category+" - "+resp.data.count);
            }).catch(err => {
              
            })
        });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
connectToURL('https://api.publicapis.org/entries');

//The same objective is attained using async/await.

/*
In the following code we try to get list of all entries from remote url and then based on that make request about each of the 
category starting with 'A'. Finally print the API counts of the category. We are using axios get, which returns a promise. 
*/
const axios = require('axios');
async function connectToURL(url){
    const resp = await axios.get(url);
    let listOfEntries = resp.data.entries;
    let Categories = listOfEntries.map((entry)=>{
          return entry.Category
    });
    Categories = [...new Set(Categories)];
    Categories.forEach(async (Category)=>{
      if (Category.startsWith("A")) {
              try {
                const resp = await axios({
                  method: 'get',
                  url: "https://api.publicapis.org/entries?Category="+Category,
                  responseType: 'json'
                })
                console.log(Category+"   "+resp.data.count);
              } 
              catch(e) {
                console.log(e);
              }
      }
    });
}
connectToURL('https://api.publicapis.org/entries').catch(err => {
    console.log(err.toString())
});

//You can only await a promise inside an async method. This is because await blocks the thread. This will defeat the primary purpose. So the function within which an await is used HAS TO BE async.

//AXIOS PACKAGE: The axios package wraps promises around HTTP requests.  It returns a promise object. 

//EXAMPLE:

const axios = require('axios').default;
let url = "some remote url"
async function asyncCall() {
  console.log('calling');
  const result = await axios.get(url);
  console.log(result.data);
}
asyncCall();



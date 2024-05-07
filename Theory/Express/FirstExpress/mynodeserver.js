//3Create instance of the app object form the express framework

const express = require('express')
const app = express()
const port = 3000

//4Create route handler
app.get('/temperature/:location_code', function(request,response){
    let location = request.params.location_code;
    weather.current(location,function(error, temp_f){
           //... 
    });
});

//5start server on given number
let server = app.listen(port, function(){
    console.log('Listening on URL http://localhost:${port}');
})
weather.current (location, function(error, temp_f){
  if(error){
    console.error(error);
    return;
  }
  console.log(
    "The current weather reading is %s degrees.",
    temp_f
  );
});
response.end("...${temp_f}...")

//Passing an error object

exports.current = function (location, resultCallback){
  . . .
  http.request(options, function(response){
    let buffer = '';
    let result = '';

    response.on('data', function(chunk)){
      buffer += chunk;
    });

    response.on('end', function()){
      parseString(buffer, function (error, result){
        if(error){
          resultCallback(error);
          return;
        }

        resultCallback(null, result.current_observation.temp_f[0]);
        });
      });
    });
});


//Return a result with a callback

exports.current = function (location, resultCallback){
  let options = {
    host: 'w1.weather.gov',
    path: '/xml/current_obs/' + location + '.xml'
  };

  http.request(options, function(response){
    let buffer = '';
    response.on('data', function(chunk)){
      buffer+=chunk;
    });
    response.end('end', function(){
      parseString(buffer, function(error, result){
        ...
        resultCallback(null, result.current_observation.temp_f[0]);
      });
    });
  });.end()
}


                                                

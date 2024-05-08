//Ventajas de la autenticación basada en tokens:

//Escalable, flexible, seguro

const express = require("express");
const myapp = express();

myapp.get(("employees",(req,res))=>{
  return res
    .status(401)
    .json({message:"Please login to access this resource"}); 
});

myapp.listen(5000,()=>{
  console.log("API Server is localhost:5000");
})

//para ejecutar el API guarda el archivo y nombralo apiServer.js luego ejecuta:

//node apiServer.js

//Para verificar que el endpoint no puede ser accedido a menos que el usuario esté autorizado, ejecuta esta cURL

//curl -i localhost:5000/emplyee

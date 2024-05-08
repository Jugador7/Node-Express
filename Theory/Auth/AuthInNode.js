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
//curl -i localhost:5000/employee

//Para generar el JWT se usa el paquete jsonwebtoken npm
//npm isntall -save jsonwebtoken 
//poner este token en los requerimientos

const jsonwebtoken = require("jsonwebtoken";)

const JWT_SECRET = "aVeryVerySecretString";

//Definir método POST al API
myapp.use(express.json());
myapp.post("/signin",(req,res)=>{
  const{uname,pwd} = req.body;
})

//Retunr the JWT Token 

if(uname === "user" && pwd ==="password"){
  return res.json({
    token: jsonwebtoken.sign({user:"user"},JWT_SECRET),
  });
  return res
    .status(401)
    .json({message: "Invalid username and/or password"});
};

//Define GET API method

myapp.get("/employees",(req,res)=>{
  let tkn = req.header('Authorization');
  if(!tkn) return
    res.status(401).send("No Token");
    if(tkn.startsWith('Bearer')){
      tokenValue = tkn.slice(7, tkn.length).trimLeft();
});

//Verify JWT

const verificationStatus =>
  jsonwebtoken.verify(tokenValue, "aVeryVerySecretString");
    if(verificationStatus.user=== "user"){               
      return res.status(200).json({message: "Access Succesful to Employee Endpoint"});
    }
return res

//Listen
.
.status(401)
.json({message:"Please login to access this resource"});

myapp.listen(5000,()=>{
  console.log("API Server is localhost:5000");
});



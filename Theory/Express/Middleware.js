//Express maneja rutas y consultas. Puedo declarar una variable para usar el router. Router se usa para ramificar el manejo
//de consultas. 

let userRouter = express.Router()

//Luego indico que todo lo que tenga /user va para esa ruta

app.use("/user",userRouter)

userRouter.get("about/:id",(req,res) =>{
  res.send("Response about user " + req.params.id)
})

//Middleware incluye toodas las funciones que tienen acceso a los objetos de request y response. Se pueden encadenar

//Se categorizan en propósito, uso y recurso

//Hay cinco tipos de MiddleWare
//1. Nivel de aplicación (app.use (auth y sesión))
//2. Nivel de router (userRouter)
//3. Preconstruida (bueno para renderizar HTML, archivos estaticos, cookie parser o JSON). 
//4. Terceros (open-source, third-party o user-defined)
//5. Manejo de errores (para toda el app o para routers especificos)

//Template Rendering (habilidad para reproducir contenido dinámico en una plantilla HTML. Ej. app.set). 




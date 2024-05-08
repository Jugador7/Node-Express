//Express maneja rutas y consultas. Puedo declarar una variable para usar el router

let userRouter = express.Router()

//Luego indico que todo lo que tenga /user va para esa ruta

app.use("/user",userRouter)

userRouter.get("about/:id",(req,res) =>{
  res.send("Response about user " + req.params.id)
})

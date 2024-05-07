//Funciona como una API y para crear plantillas para reproducción del lado del servidor (SSR). Las plantillas usan los datos
  //para crear HTML, CSS y JS 
//Una API de Express monta una interfaz HTTP para interactuar con la capa de datos de la aplicación
//Los datos son enviados de vuelta al client en formato JSON usando una respuesta (objeto res)

//El método res.json(): notifica al cliente el tipo de contenido enviado y convierte los datos en formato JSON. 

//El método res.render(): Se usa para que el servido muestre la página.

//Express implementa una clase que se mapea en los recursos web. 
const app = express()

//Node.js trata las consultas HTTP a un nivel de red inferior. http.createServer (función) depende de la función de callback
  //para analizar a través del recurso web

//5 pasos de express
//1. Declarar la depdencia en el paquete de manifiesto del projecto de Node
  //crear paquete package.json (name, version, description, main, dependencies) poner la dependencia así:
    "dependencies":{"express":"4.x"}
//2. Ejecutar el comando npm para descargar modulos faltantes. Todo se guarda en node_modules
    npm install
//3. Importar el moduilo express y crear la aplicación Express.
//4. Crear nuevo route handler.
//5. Iniciar el servidor HTTP en cierto número de puerto. 





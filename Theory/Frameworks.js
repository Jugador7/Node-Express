//Node.js is not a framework.
//Node.js is a runtime environment that executes JS on a server. 

//Frameworks are skeletons on which an app is built, its the fundamental structure.

//Two approaches for building backends:

//1. MVC (modelo-vista-controlador)
//Patrón de arquitectura que divide una app en tres componentes. 
//MODELO: Gestiona los datos e interactua con la base de datos y maneja la lógica de negocio
//VISTA: Reproduce la presentación de los datos
//CONTROLADOR: Regula el flujo de los datos procesando los datos que entrega el usuario. 
//Usado para apps que requieren separar datos de la presentación y la manipulación. (KOA, DJANGO, Express y NestJS)

//2. Representational state transfer application programming interface (REST API)
//Permiten a múltiples servicios Web comunicarse entre sí. 
//APIs RESTful tienen ciertas restricciones: 
//El código del cliente y del servidor son independientes
//El cliente no necesita saber el estado del servidor y viceversa
//Comunicación a través de operaciones en recursos. Comunicación no depende de la implementación de la API

//EXPRESS:
//Popular, used primarily for routing and middleware. Small learning curve because it uses JS. MVC is easy to implement.
//Provides debugging mechanisms.
//PROs:
//Handles multiple operation requests concurrently. 
//Has HTTP helpers for handling HTTP requests
//Helps facilitate communication between client and server
//Provides HTTP headers to URLs to get needed data requested by the client. 


//KOA
//Diseñado por el mismo equipo de Express
//Más robusto para apps Web y APIs
//Usa funciones asyncronicas removiendo la necesidad de callbacks
//Mejora en el manejo de errores
//Bueno para apps de alto desempeño, demanda, complejidad y equipos grandes experimentados. 

Socket.io
//El mejor para apps que intercambian datos bidireccionales en tiempo real entre clientes y servidores. 
//Utiliza websockets en lugar de HTTP
//Funciona bien para aplicaciones como Chatrooms, texting, video conferencing y juegos de multijugador

Hapi.js
//Opensource
//Altamente seguro
//Muchos plugins preconstruídos por lo que no requiere de más middleware
//Bueno para desarrollar:
//Servidores Proxy
//API Servers
//HTTP proxy apps
//REST APIs

NestJS
//Apropiado para apps dinamicas, escalables de empresa
//Flexible
//Multitud de librerías
//Arqui MVC es fácil de implementar. 
//Construído en cima de Express y compatible con TypeScript
//Trabaja con Angular
//Combina orientación a objetos y programación funcional. 









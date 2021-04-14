const express = require('express');
var cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
       
        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();

    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body

        this.app.use(express.json());
        

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath, require("../routes/user"))
    }

    listen(){
        this.app.listen(this.PORT,()=> {
            console.log("Servidor corriendo el puerto:" + this.PORT);
        });
    }
}


module.exports =Server;

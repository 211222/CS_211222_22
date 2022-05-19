const express = require('express');                        //importa las instancias de express
const config = require('../config.js');                    //importa una instancia exterior
const user = require('./components/user/network.js');      //importo el network

const app=express();

//router
app.use('/api/user', user);

//Servidor
app.listen(config.api.port, () => {
    console.log('puerto escuchando en el puerto=>' ,config.api.port)
});


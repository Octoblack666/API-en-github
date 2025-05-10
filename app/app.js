
require('dotenv').config();


const express = require('express');
const config = require ('./config/config');

const app = express ();

app.set('port', config.app.port);

app.get('/', (req, res) => {

    res.send(`
        
        <!DOCTYPE html>
        <html>
            <head>
                <title>API en Github</title>
                <style>
                    body {
                        font-family: 'Segoe UI', sans-serif;
                        background-color:rgba(85, 79, 167, 0.91);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        margin: 0;
                    }
                    h1 {
                        color:rgba(255, 102, 0, 0.9);
                    }
                    p {
                        color:rgb(82, 2, 2);
                        font-size: 1.2rem;
                    }
                </style>
            </head>
            <body>
                <h1> ¡Bienvenido a nuestra API!</h1>
                <p>Esto solo es un toque creativo mi inge</p>
            </body>
        </html>

        `); 
});

module.exports = app;

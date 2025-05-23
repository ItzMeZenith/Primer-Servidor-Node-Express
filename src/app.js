import express from 'express'; // Importa el módulo express
import Time from './time.js'
const app = express(); // Crea una instancia de la aplicación Express

app.get('/', (req, res) => { // Ruta raíz
    res.send('Buenos dias'); // Respuesta al cliente
});

app.get('/hora', (req, res) => { // Ruta raíz
    res.send(Time());
});

app.get('/fecha-completa', (req, res) => { // Ruta raíz
    const date = new Date();
    res.send(`${date.toDateString()}, ${Time()}`);
});

export default app;
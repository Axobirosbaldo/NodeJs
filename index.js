const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.get('/login', (req, res) => {
    return res.send('Login');
});

app.get('/nome/:name', (req, res) => {
    return res.json({
        message: `Bem vindo, ${req.params.name}`
    });
});

app.listen(3000);
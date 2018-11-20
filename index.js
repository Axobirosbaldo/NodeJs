const express = require('express');

const app = express();

const logMiddleware = (req, res, next) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
    );
    
    req.appName = "GoNode";

    return next();
};

app.use(logMiddleware);

app.get('/', (req, res) => {
    return res.send(`Bem-vindo ao ${req.appName}, ${req.query.name}`);
});

app.get('/login', (req, res) => {
    return res.send('Login');
});

app.get('/nome/:name', (req, res) => {
    return res.json({
        message: `Bem vindo, ${req.params.name}`
    });
});

app.get('/nome', (req, res) => {
    return res.send(`Bem-vindo, ${req.query.name}`);
});

app.listen(3000);
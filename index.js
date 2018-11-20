const express = require('express');
const nunjucks = required('nunjucks');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

app.set('view engine', 'njk');

app.get('/', (req, res) => {
    return res.send(`Bem-vindo`);
});

app.listen(3000);
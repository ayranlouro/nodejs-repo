const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const port = 80;

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/welcome');
});

app.get('/list', (req, res) => {
    res.render('pages/list');
});

app.post('/list', (req, res) => {
    console.log(req.body)
    res.render('pages/list');
});

app.listen(port, () => {
    console.log('Service running on port 80...');
});

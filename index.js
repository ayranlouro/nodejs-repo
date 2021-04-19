const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/welcome');
});

app.listen(80, () => {
    console.log('Service running on port 80...');
});

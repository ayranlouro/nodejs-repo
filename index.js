const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 80;

mongoose.connect('mongodb://localhost/crud', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use("/static", express.static('./static'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/welcome');
});

app.get('/list', (req, res) => {
    res.render('pages/list');
});

// app.post('/list', (req, res) => {
//     var data = 'abc';
//     res.send('abc');
//     // res.render('pages/list', { data: data, error: false });
// });

app.listen(port, () => {
    console.log('Service running on port 80...');
});

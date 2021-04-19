const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Begnning');
});

app.listen(80, () => {
    console.log('Service running on port 80...');
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set EJS sebagai template engine
app.set('view engine', 'ejs');

// Middleware untuk menangani data form
app.use(bodyParser.urlencoded({ extended: true }));

// Route untuk menampilkan form
app.get('/', (req, res) => {
    res.render('form');
});

// Route untuk menangani data yang di-submit
app.post('/submit', (req, res) => {
    const { name, } = req.body;
    res.send(`Input : ${name}`);
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
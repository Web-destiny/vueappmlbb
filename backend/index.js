const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // ваш пользователь
    password: 'root', // ваш пароль
    database: 'vueappmagazin', // ваша база данных
    port: 3306, // ваш порт MySQL
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/catalog', (req, res) => {
    connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

app.post('/catalog', (req, res) => {
    const { name, price, description, category } = req.body;
    const query = 'INSERT INTO products (name, price, description, category) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, price, description, category], (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(201).json({ id: result.insertId });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

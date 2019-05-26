const express = require('express');
const bodyParser = require('body-parser');
const passwordHash = require('password-hash');
const Pool = require('pg').Pool
var cors = require('cors');

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'eve',
  password: 'password',
  port: 5432,
})

const port = 4000;
const app = express()

app.use(cors());
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true,}));

 
app.get('/', function (request, response) {
  response.json({ info : `eve API` });
})

 // Get all users
app.get('/users', (request, response) => {
  pool.query(`SELECT users.id, users.lastname, users.firstname, users.email, users.phone, roles.name AS "role" 
              FROM users 
              INNER JOIN roles ON users.id_role = roles.id ORDER BY id ASC`, 
  (error, results) => {
  if (error) throw error;

    response.status(200).json(results.rows)
  })
});

// Get user by id
app.get('/users/:id', (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) throw error;

    response.status(200).json(results.rows)
  })
});

// Register user
app.post('/register', (request, response) => {
  const { lastname, firstname, email, password, phone} = request.body;
  pool.query(
    'INSERT INTO users (lastname, firstname, email, password, phone, id_role) VALUES ($1, $2, $3, $4, $5, 1)', 
    [lastname, firstname, email, passwordHash.generate(password), phone], (error, results) => {
      if (error) throw error;

    response.status(201).send(`User added with ID: ${results.insertId}`);
  })
});

// Update user password
app.put('/users/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const { name, password } = request.body;
  
  pool.query(
    'UPDATE users SET name = $1, password = $2 WHERE id = $3',
    [name, passwordHash.generate(password) , id],
    (error, results) => {
      if (error) throw error;

      response.status(200).send(`User modified with ID: ${id}`)
    })
})

// Delete user
app.delete('/users/:id', (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) throw error;

    response.status(200).send(`User deleted with ID: ${id}`)
  })
});

app.get('/products', (request, response) => {
  pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
    if (error) throw error

    response.status(200).json(results.rows)
  })
});


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
})
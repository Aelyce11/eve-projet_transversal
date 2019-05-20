const express = require('express');
const bodyParser = require('body-parser');

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'eve',
  password: 'password',
  port: 5432,
})

const port = 4000;
const app = express()

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true,}));

 
app.get('/', function (request, response) {
  response.json({ info : `eve API` });
})

 // Get all users
app.get('/users', (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
});

// Get user by id
app.get('/users/:id', (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
});

// Post user
app.post('/users', (request, response) => {
  const { name, email, password, salt, address_1, address_2, phone} = request.body;
  pool.query(
    'INSERT INTO users (name, email, password, salt, address_1, address_2, phone, id_role) VALUES ($1, $2, $3, $4, $5, $6, $7, 1)', 
    [name, email, password, salt, address_1, address_2, phone], (error, results) => {
      if (error) {
        throw error;
      }

    response.status(201).send(`User added with ID: ${results.insertId}`);
  })
});

// Update user
app.put('/user/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const { name } = request.body;
  
  pool.query(
    'UPDATE users SET name = $1 WHERE id = $3',
    [name, id],
    (error, results) => {
      if (error) {
        throw error
      }

      response.status(200).send(`User modified with ID: ${id}`)
    })
})

// Delete user
app.delete('/users/:id', (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).send(`User deleted with ID: ${id}`)
  })
});



// Get all roles
app.get('/roles', (request, response) => {
  pool.query('SELECT * FROM roles', (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
});

// Get role by id
app.get('/roles/:id', (request, response) => {
  const id = (request.params.id);
  pool.query('SELECT * FROM roles WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).json(results.rows)
  })
});


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
})
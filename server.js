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

  
  pool.query(`SELECT users.*, roles.id AS "role_id", roles.name FROM users INNER JOIN roles ON users.id_role = roles.id ORDER BY users.id ASC`, 
  (error, results) => {
  if (error) throw error;
    var nrow = []

    for (let index = 0; index < results.rows.length; index++) {
      const row = results.rows[index];

      nrow.push({
        id: row['id'],
        lastname: row['firstname'],
        firstname: row['lastname'],
        email: row['email'],
        phone: row['phone'],
        id_role: row['id_role'],
        Roles: {
          id: row['role_id'],
          name: row['name']
        }
      })
    }
    response.status(200).json(nrow)
    console.log(results.rows)
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
  const { lastname, firstname, email, password } = request.body;
  pool.query(
    `INSERT INTO users (lastname, firstname, email, password, phone, id_role) VALUES ($1, $2, $3, $4, '' , 1)`, 
    [lastname, firstname, email, passwordHash.generate(password)], (error, results) => {
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

  pool.query(`
    SELECT products.*, images.path,product_category.name AS "category", product_vendor.name AS "vendor"
    FROM products
    INNER JOIN product_vendor ON products.id_vendor = product_vendor.id
    INNER JOIN product_category ON products.id_category = product_category.id
    INNER JOIN images ON products.id_image = images.id
  `, (error, results) => {
    if (error) throw error
    var nrow = []

    for (let index = 0; index < results.rows.length; index++) {
        const row = results.rows[index];

        nrow.push({
            id: row['id'],
            name: row['name'],
            description: row['description'],
            utilisation: row['utilisation'],
            absorbtion: row['absorbtion'],
            flow: row['flow'],
            volume: row['volume'],
            composition: row['composition'],
            made_id: row['made_id'],
            lifetime: row['lifetime'],
            sealing: row['sealing'],
            ecology: row['ecology'],
            price: row['price'],
            images: {
              id: row['id_image'],
              path: row['path'],
            },
            product_category: {
              id: row['id_category'],
              category: row['category'],
            },
            product_vendor: {
              id: row['id_vendor'],
              vendor: row['vendor'],
            },
            quantity: row['quantity'],
        })
    }
    response.status(200).json(nrow)
    console.log(nrow)
  })
});

app.post('/products', (request, response) => {
  const { title, vendor, category, path, desc, utilisation, absorbtion, flow, volume, composition, made_in, lifetime, sealing, ecology, price, quantity } = request.body;

  pool.query(`
  INSERT INTO products(products.title, products.id_vendor, products.id_category, images.path, products.description, products.utilisation, products.absorbtion, products.flow, products.volume, products.composition, products.made_in, products.lifetime, products.sealing, products.ecology, products.price, products.quantity) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
  INNER JOIN images ON products.id_image = images.id
  `,[title, vendor, category, `../../Pictures/products${path}`, desc, utilisation, absorbtion, flow, volume, composition, made_in, lifetime, sealing, ecology, price, quantity],
  (error, results) => {
    if (error) throw error;

    response.status(201).send(`Product added with ID: ${results.insertId}`);
  })
});

// app.get('/products/:id', (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
//     if (error) throw error;

//     response.status(200).json(results.rows)
// })


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
})
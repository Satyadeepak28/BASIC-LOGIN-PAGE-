//const express = require('express');
//const path = require('path');
//const bcrypt = require('bcrypt');

//const app = express();

//app.set('view engine', 'ejs');
//app.get("/", (req, res) => {
  //  res.render("login");
//});

//app.get("/signup", (req,res)=> {

  //  res.render("signup");
//});



//const port = 5000;
//app.listen(port, () => {
  //  console.log(`server running on port: ${port}`);
//});

// src/index.js
const express = require('express');
const app = express();
const path = require('path');

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware to handle POST requests
app.use(express.urlencoded({ extended: true }));

// Serve the login page
app.get('/login', (req, res) => {
  res.render('login');
});

// Serve the signup page
app.get('/signup', (req, res) => {
  res.render('signup');
});

// Serve the home page (root route)
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Handle the login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // You can add authentication logic here
  res.send(`Login successful for user: ${username}`);
});

// Handle the signup form submission
app.post('/signup', (req, res) => {
  const { username, password, confirmPassword } = req.body;
  // Add logic for creating a new user
  if (password !== confirmPassword) {
    res.send('Passwords do not match!');
  } else {
    res.send(`Signup successful for user: ${username}`);
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Here you can add your authentication logic, such as checking the username and password
  // For now, we're just sending a success message
  if (username === 'admin' && password === 'password123') {
    res.send(`Login successful for user: ${username}`);
  } else {
    res.send('Invalid credentials. Please try again.');
  }
});

import express from 'express';

const app = express()

const port = 5000;

app.get('/', (req, res) => {
  res.send('Home Page!')
});

app.get('/login', (req, res) => {
  res.send('Login Page!')
});

app.get('/register', (req, res) => {
  res.send('Register Page!')
});

app.listen(port, () => {
  console.log(`Development server listening on port ${port}`);
});
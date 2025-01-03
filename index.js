import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
  res.send('Home Page!');
});

app.get('/login', (req, res) => {
  res.send('Login Page!');
});

app.get('/register', (req, res) => {
  res.send('Register Page!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Development server listening on port ${port}`);
});

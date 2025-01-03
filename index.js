import express from 'express';
import 'dotenv/config';

const app = express();

// app.get('/', (req, res) => {
//   res.send('Home Page!');
// });

// get a list of 5 jokes

app.get('/jokes', (req, res) => {
  const jokes = [
    { id: 1, setup: "Why did the developer go broke?", punchline: "Because he used up all his cache." },
    { id: 2, setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs!" },
    { id: 3, setup: "How do you comfort a JavaScript bug?", punchline: "You console it." },
    { id: 4, setup: "Why was the JavaScript developer sad?", punchline: "Because he didn’t know how to 'null' his feelings." },
    { id: 5, setup: "Why don’t programmers like nature?", punchline: "It has too many bugs." }
  ];
  res.send(jokes);
});

// end a 5 list of jokes

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Development server listening on http://localhost:${port}`);
});
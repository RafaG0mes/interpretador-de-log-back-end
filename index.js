require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello-world', (req, res) =>{
    res.send('hello-world');
})

app.listen(3000, () => console.log('hello-world na porta 3000'));
const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
// app.use(cors());

app.get('/',(req, res)=>{
    res.send(`Hello, dumass. The server is working on PORT ${PORT}`);
})


app.listen(5000, ()=>{
    console.log (`App started on PORT ${PORT}`);
})
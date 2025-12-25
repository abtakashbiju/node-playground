const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const names = [];

app.get('/',(req, res)=>{
    res.send(`Hello, dumass. The server is working on PORT ${PORT}`);
})

app.post('/post', (req, res)=>{
    const data = req.body;
    console.log(data.name);
    res.status(200).json({
        confirmation: "Received",
        saved: data.name
    });
})


app.listen(5000, ()=>{
    console.log (`App started on PORT ${PORT}`);
})
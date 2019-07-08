const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api', (req, res) =>{
    res.send("TEST")
})


const PORT = 4000;
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
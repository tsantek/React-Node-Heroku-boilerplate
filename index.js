const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api', (req, res) =>{
    res.send("TEST")
})

if(process.env.NODE_ENV === "produciton"){
    app.use(express.static('client/build'));

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
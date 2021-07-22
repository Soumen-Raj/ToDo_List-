const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

dotenv.config({path: './config.env'});


// Linking the DataBAse or DB file 
require('./DB/connection');

// Linking the Route file
app.use(require('./Route/todoRoute'));

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send("Hello World from my server")
});

app.listen(PORT, ()=>{
    console.log(`My server is running successfully at port ${PORT}`)
});
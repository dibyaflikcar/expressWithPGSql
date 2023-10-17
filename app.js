const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const apiRouter = require('./src/routes/index');
const multer = require("multer");
  
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/public', express.static('public'));

app.use(cors());

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});


app.use('/api/', apiRouter);



app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Example app listening at http://localhost:${PORT}`)
    else 
        console.log("Error occurred, server can't start", error);
    }
);


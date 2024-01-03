const http = require('http');
const express = require('express'); 
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs');
app.set('views', 'templates');


app.use(routes);



const server = http.createServer(app);

mongoose.connect('mongodb+srv://mongo_haseeb:Pakistan998@Cluster-app.koj5sam.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected');
    server.listen(4000);
}).catch((err)=>{
    console.log(err);
});


 
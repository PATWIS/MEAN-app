// set up ==============================================

const express = require("express");

const mongoose = require("mongoose");
const port = process.env.PORT || 8080; 
const database = require('./config/database');
const bodyParser = require("body-parser");
const app = express();

// configuration =========================================
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded                               // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


const api = require("./app/routes");
app.use("/api", api);

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
}); 

app.listen(port);
console.log("Start server on port " +port);
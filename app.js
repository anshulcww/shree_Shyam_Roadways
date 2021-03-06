var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var Path = require('path');
var compression = require('compression');
const model=require('./api/model.js');
var port = process.env.PORT||5000;
/* const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shreeshyamroadways'; */
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://heroku_dn67chxs:root@ds147118.mlab.com:47118/heroku_dn67chxs';
const db = require('./api/dbconfig/db');
const http_IP = process.env.IP || '192.168.1.8';


app.use(compression({ level: 6 }));	//6 is default

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

// http.listen(port, "192.168.1.124", function () {
// 	console.log('up and running');
// });



http.listen(port, "0.0.0.0", function () {
    
    console.log('up and running');
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/getBooking', function(req, res){
    model.getUser;
});

db.connect(MONGODB_URI, (err) => {
    if (err) {
        console.log('unable to connect to mongo');
    }
    else {
       
        console.log("listening", http_IP);
    }
    
});

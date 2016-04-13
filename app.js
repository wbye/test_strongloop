var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var app = express();
var config = require("./config/Server");
var port = process.env.PORT||config.port;
var routes = require("./routes");
var compression = require('compression');
var db = mongoose.connect('mongodb://localhost:27017/test').connection;
var API = require("./api");
var runType = process.argv[2]||'dev';
var multer = require("multer");
var upload = multer({ dest: 'uploads/' });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("we connect!")
});
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views","./views");
app.set("view engine","jade");
routes(app);
API(app,upload);
if(port===config.port){
    if(runType.indexOf("prev")!==-1) {
        app.use(express.static(__dirname + '/preview'));
    }else if(runType.indexOf("pro")!==-1){
        app.use(express.static(__dirname + '/public'));
    }else{
        app.use(express.static(__dirname + '/src'));
    }
    app.use(express.static(__dirname + '/files'));
    app.use(express.static(__dirname + '/upload'));
};

app.listen(port,function(){
   console.log("node server run at "+port);
});






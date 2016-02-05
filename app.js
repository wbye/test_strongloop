var express = require("express");
var mongoose = require("mongoose");
var app = express();
var port = process.env.PORT||'8080';
var routes = require("./routes");
var Member = require("./model/member");
var db;

mongoose.connect('mongodb://localhost:27017/test');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("we connect!")
});
//设置视图目录
app.set("views","./views");
//设置模板引擎
app.set("view engine","jade");
//set static
if(port==='8080'){
    app.use(express.static(__dirname + '/src'));
    app.use(express.static(__dirname + '/files'));
    app.use(express.static(__dirname + '/uploads'));
}

routes(app);

//设置监听端口
app.listen(port,function(){
   console.log("node server run at "+port);
});






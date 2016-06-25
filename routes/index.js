var Member = require("./../model/member");
var Activity = require("./../model/activity");
var Config = require("./../config/StatusVar");
var apiVersion = require("./../config/Server").apiVersion;

module.exports = function (app) {
    app.get("/", function (req,res) {
        Member.find(function (err,members) {
            res.render("admin/member",{
                members:members,
                Config:JSON.stringify(Config)
            });
        });
    });

    app.get("/members", function (req,res) {
        Member.find(function (err,members) {
            res.render("admin/member",{
                members:members,
                Config:JSON.stringify(Config)
            });
        });
    });
    app.get("/members/add", function (req,res) {
        res.render("admin/addmember");
    });

    app.get("/checkSignature", function (req,res) {
        var token = 'wbyealiyun123';
        //微信加密签名
        var signature = req.query.signature;
        var timestamp = req.query.timestamp;
        var nonce = req.query.nonce;
        var echostr = req.query.echostr;
        var validateStr = [token,timestamp,nonce].sort().join('');
        var sha1 = require("crypto").createHash('sha1');

        validateStr = sha1.update(validateStr);
        validateStr = sha1.digest("hex");
        if(validateStr===signature){
            res.send(echostr);
        }else{
            res.send("who are you?");
        }
    });

    //通用正则匹配
    app.get(/^\/(\w+)(\/\w+)$/, function (req, res) {
        if(req.params!==apiVersion){
            res.render("web/"+req.params[0]+req.params[1],{});
        }
    });
    app.get("/24",function(req,res){
        res.render("web/24inshanghai")
    });
    app.get("/24inshanghai",function(req,res){
        res.render("web/24inshanghai")
    });
};
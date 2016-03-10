var Member = require("./../model/member");
var Config = require("./../config/StatusVar");

module.exports = function (app) {
    app.get("/", function (req,res) {
        Member.find({"enable":true},function (err,members) {
            res.render("web/dashboard",{
                members:members
            });
        });
    });
    app.get("/admin", function (req,res) {
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
    app.get("/admin/member", function (req,res) {
        res.render("admin/member");
    });
    app.get("/1.0/member", function (req,res) {
        Member.find({},function (err,members) {
            res.send(members);
        });
    });
    app.post("/1.0/member", function (req,res) {
        Member.create(req.body, function (err,member) {
            if(err){
                res.status(400).send({
                    msg:'error'
                });
            }else{
                res.status(200).send({
                    msg:'success'
                });
            }
        });
    });

    app.delete("/1.0/member/:id", function (req,res) {
        Member.findById(req.params.id, function (err,member) {
            if(err){
                res.status(400).send({
                    msg:'error'
                });
            }else{
                member.remove(function (err,product) {
                   res.status(200).send(product);
                });
            }
        });
    });
    app.put("/1.0/member/:id", function (req,res) {
        Member.findById(req.params.id, function (err,member) {
            if(err){
                res.status(400).send({
                    msg:'error'
                });
            }else{
                member.update(req.body,function (err,status) {
                    res.status(200).send(status);
                });
            }
        });
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

    app.get(/^\/(\w+)(\/\w+)$/, function (req, res) {
        res.render("web/"+req.params[0]+req.params[1],{});
    });

};
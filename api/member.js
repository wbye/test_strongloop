var Member = require("./../model/member");
var Uploader = require('express-uploader');

module.exports = function (app) {
    app.get("/1.0/member", function (req, res) {
        Member.find({}, function (err, members) {
            res.send(members);
        });
    });
    app.post("/1.0/member", function (req, res) {
        var member = new Member({
            name: req.body.name,
            gender: req.body.gender,
            enable: req.body.enable
        });

        member.save(req.body, function (err) {
            if (err) {
                res.status(400).send({
                    msg: 'error'
                });
            } else {
                res.status(200).send({
                    msg: 'success'
                });
            }
        });
    });
    app.delete("/1.0/member/:id", function (req, res) {
        Member.findById(req.params.id, function (err, member) {
            if (err) {
                res.status(400).send({
                    msg: 'error'
                });
            } else {
                member.remove(function (err, product) {
                    res.status(200).send(product);
                });
            }
        });
    });
    app.put("/1.0/member/:id", function (req, res) {
        Member.findById(req.params.id, function (err, member) {
            if (err) {
                res.status(400).send({
                    msg: 'error'
                });
            } else {
                member.name = req.body.name;
                member.gender = req.body.gender;
                member.enable = req.body.enable;

                member.save(function (err, status) {
                    res.status(200).send(status);
                });
            }
        });
    });
    app.post("/1.0/upload/avatar", function (req, res) {
        console.log(req.headers['content-type']);
        //console.log(req.body);
        //res.send(req.body);
        //console.log(req.file);
        //var form = new formidable.IncomingForm();
        //form.parse(req, function(err, fields, files) {
        //    res.send({yeah:"ok"});
        //    console.log(files);
        //    require("fs").writeFile(__dirname+"/../upload/avatar.jpg",files['upload-avatar'], function (err) {
        //        console.log(arguments);
        //    });
        //});


        //console.log(req);
        //require("fs").writeFile("/images/test.jpg",req.files, function (err) {
        //    console.log(arguments);
        //})
        //for(var i in req.body){
        //    console.log(i);
        //}

        var uploader = new Uploader({
            debug: true,
            validate: true,
            thumbnails: true,
            thumbToSubDir: true,
            tmpDir: __dirname + '/tmp',
            publicDir: __dirname + '/public',
            uploadDir: __dirname + '/public/files',
            uploadUrl: '/files/',
            thumbSizes: [140, [100, 100]]
        });
        uploader.uploadFile(req, function (data) {
            console.log(data);
            res.send(JSON.stringify(data), {'Content-Type': 'text/plain'}, 200);
        });
    });

}
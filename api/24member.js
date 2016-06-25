var TFMember = require("./../model/24member");
var _ = require('lodash');

module.exports = function (app,upload) {
    app.get("/1.0/24member", function (req,res) {
        var where = {};

        if(req.query.where){
            where = JSON.parse(req.query.where);
            _.each(where,function(value,key){
                var reg = new RegExp(value,'i');

                where[key] = reg;
            });
        } 
        TFMember.find(where,function (err,members) {
            res.send(members);
        });
    });
    app.post("/1.0/24member", function (req,res) {
        TFMember.create(req.body, function (err,member) {
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

    app.delete("/1.0/24member/:id", function (req,res) {
        TFMember.findById(req.params.id, function (err,member) {
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
    app.put("/1.0/24member/:id", function (req,res) {
        TFMember.findById(req.params.id, function (err,member) {
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
}
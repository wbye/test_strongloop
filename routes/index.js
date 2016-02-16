var Member = require("./../model/member");


module.exports = function (app) {
    app.get("/", function (req,res) {
        Member.find({"enable":1},function (err,members) {
            res.render("web/dashboard",{
                members:members
            });
        });
    });
    app.get("/admin", function (req,res) {
        Member.find(function (err,members) {
            res.render("admin/member",{
                members:members
            });
        });
    });
    app.get("/admin/member", function (req,res) {
        Member.find({},function (err,members) {
            res.render("admin/member",{
                members:members
            });
        });
    });

    app.post("/admin/member", function (req,res) {
        Member.create(req.body, function (err,member) {
            if(err){
                res.status(400).sendStatus("400");
            }else{
                res.status(200).sendStatus(200);
            }
        });
    });
};
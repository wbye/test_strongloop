var Member = require("./../model/member");

module.exports = function (app,upload) {
    app.get("/1.0/member", function (req, res) {
        Member.find({}, function (err, members) {
            res.send(members);
        });
    });
    app.post("/1.0/member", function (req, res) {
        var member = new Member({
            name: req.body.name,
            gender: req.body.gender,
            enable: req.body.enable,
            career : req.body.career
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
                member.email = req.body.email;
                member.career = req.body.career;

                member.save(function (err, status) {
                    res.status(200).send(status);
                });
            }
        });
    });
    app.post("/1.0/upload/avatar",upload.single('avatar'), function (req, res,next) {
        console.log(req.file);
    });
}
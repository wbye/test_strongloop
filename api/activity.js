var Activity = require("./../model/activity");

module.exports = function (app) {
    app.get("/1.0/activity", function (req, res) {
        Activity.find({},function (err,activities) {
            res.send(activities);
        });
    });
    app.put("/1.0/activity/:id", function (req,res) {
        Activity.findById(req.params.id, function (err,member) {
            var likes = member.likes;

            member.likes++;
            if(err){
                res.status(400).send({
                    msg:'error'
                });
            }else{
                member.update({likes:member.likes},function (err,status) {
                    res.status(200).send({likes:member.likes});
                });
            }
        });
    });
}
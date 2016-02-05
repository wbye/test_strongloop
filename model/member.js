var mongoose = require("mongoose");
var Member = mongoose.model("Member",{
    name:String,
    gender:Number
});

module.exports = Member;
var mongoose = require("mongoose");
var MemberSchema = new mongoose.Schema({
    name:String,
    gender:String,
    enable:Boolean,
    createAt:{
        type:Date,default:Date.now
    },
    updateAt:{
        type:Date,default:Date.now
    },
    email:String,
    career:String,
    desc:String
});
var Member = mongoose.model("Member",MemberSchema);

module.exports = Member;
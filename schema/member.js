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
    }
});

module.exports = MemberSchema;
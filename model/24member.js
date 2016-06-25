var mongoose = require("mongoose");
var mongooseSchema = new mongoose.Schema({
    name:String,
    phone:String,
    tencentNumber:String,
    address:String,
    createAt:{
        type:Date,default:Date.now
    },
    updateAt:{
        type:Date,default:Date.now
    }
});
var Member = mongoose.model("24Member",mongooseSchema);

module.exports = Member;
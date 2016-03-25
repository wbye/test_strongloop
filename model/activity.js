var mongoose = require("mongoose");
var ActivitySchema = new mongoose.Schema({
    name:String,
    likes:Number,
    pics:[String],
    title:String,
    tags:[String],
    time:String,
    cost:String,
    address:String,
    introduce:String
    //createAt:{
    //    type:Date,default:Date.now
    //},
    //updateAt:{
    //    type:Date,default:Date.now
    //}
});
var Activity = mongoose.model("Activity",ActivitySchema);

module.exports = Activity;
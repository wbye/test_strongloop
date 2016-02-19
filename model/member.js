var mongoose = require("mongoose");
var mongooseSchema = require('./../schema/member');
var Member = mongoose.model("Member",mongooseSchema);

module.exports = Member;
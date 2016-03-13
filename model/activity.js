var mongoose = require("mongoose");
var mongooseSchema = require('./../schema/activity');
var Activity = mongoose.model("Activity",mongooseSchema);

module.exports = Activity;
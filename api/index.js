var apiMember = require("./member");
var apiActivity = require("./activity");
var apiTFMember = require("./24member");
module.exports = function (app,upload) {
    apiMember(app,upload);
    apiActivity(app);
    apiTFMember(app);
};

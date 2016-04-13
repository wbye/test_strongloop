var apiMember = require("./member");
var apiActivity = require("./activity");

module.exports = function (app,upload) {
    apiMember(app,upload);
    apiActivity(app);
};

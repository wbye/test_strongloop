var apiMember = require("./member");
var apiActivity = require("./activity");

module.exports = function (app) {
    apiMember(app);
    apiActivity(app);
};

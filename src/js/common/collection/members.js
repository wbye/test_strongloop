define([
    'backbone',
    'common/model/member',
    'pace'
], function (Backbone, Member,pace) {
    var Members = Backbone.Collection.extend({
        model: Member,
        comparator:"createAt",
        url:"/1.0/member",
        sync: function () {
            pace.restart();
            Backbone.Model.prototype.sync.apply(this,arguments);
        }
    });

    return Members;
});
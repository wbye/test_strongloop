define([
    'backbone',
    'common/model/24member',
    'pace'
], function (Backbone, Member,pace) {
    var Members = Backbone.Collection.extend({
        model: Member,
        comparator:"-createAt",
        url:"/1.0/24member",
        sync: function () {
            pace.restart();
            Backbone.Model.prototype.sync.apply(this,arguments);
        }
    });

    return Members;
});
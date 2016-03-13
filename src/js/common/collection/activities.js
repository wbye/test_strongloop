define([
    'backbone',
    'common/model/activity',
    'pace'
], function (Backbone, Activity,pace) {
    var Activities = Backbone.Collection.extend({
        model: Activity,
        comparator:"createAt",
        url:"/1.0/activity",
        sync: function () {
            pace.restart();
            Backbone.Model.prototype.sync.apply(this,arguments);
        }
    });

    return Activities;
});
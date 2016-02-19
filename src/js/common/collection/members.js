define([
    'backbone',
    'common/model/member'
], function (Backbone, Member) {
    var Members = Backbone.Collection.extend({
        model: Member,
        comparator:"createAt",
        url:"/1.0/member"
    });

    return Members;
});
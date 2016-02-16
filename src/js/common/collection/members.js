define([
    'backbone',
    'common/model/member'
], function (Backbone, Member) {
    var Members = Backbone.Collection.extend({
        model: Member,
        comparator:"createAt"
    });

    return Members;
});
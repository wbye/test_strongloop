/**
 * Created by ywbshiwo on 16/2/16.
 */
define([
    'backbone',
    'pace'
], function (Backbone,pace) {
    var Member = Backbone.Model.extend({
        //默认属性
        idAttribute:"_id",
        defaults: {
            enable: true,
            gender: 0
        },
        toggle: function () {
            this.save({enable: !this.get("enable")});
        },
        urlRoot:'/1.0/member',
        sync: function () {
            pace.restart();
            Backbone.Model.prototype.sync.apply(this,arguments);
        }
    });

    return Member;
});
/**
 * Created by ywbshiwo on 16/2/16.
 */
define([
    'backbone'
], function (Backbone) {
    var Member = Backbone.Model.extend({
        //默认属性
        defaults: {
            enable: true,
            gender: 0
        },
        toggle: function () {
            this.save({enable: !this.get("enable")});
        },
        url:'/admin/member'
    });

    return Member;
});
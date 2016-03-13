/**
 * Created by ywbshiwo on 16/2/16.
 */
define([
    'backbone',
    'pace'
], function (Backbone,pace) {
    var Activity = Backbone.Model.extend({
        //默认属性
        idAttribute:"_id",
        defaults: {
            likes: 0,
            name:"",
            pics:[],
            title:"",
            tags:[],
            time:"",
            cost:"AA",
            address:'',
            introduce:'春天在哪里？在踏青里，在郊游里，在牛毛细雨中踏青里...'
        },
        urlRoot:'/1.0/activity',
        sync: function () {
            pace.restart();
            Backbone.Model.prototype.sync.apply(this,arguments);
        },
        initialize: function () {
        }
    });

    return Activity;
});
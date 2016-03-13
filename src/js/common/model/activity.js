/**
 * Created by ywbshiwo on 16/2/16.
 */
define([
    'backbone',
    'pace'
], function (Backbone,pace) {
    var Activity = Backbone.Model.extend({
        //Ĭ������
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
            introduce:'�����������̤����ڽ������ţëϸ����̤����...'
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
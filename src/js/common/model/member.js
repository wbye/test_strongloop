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
            gender: 0,
            name:"",
            career:"UI设计/前端开发",
            desc:"这家伙很懒，没写个人说明。",
            follows:"",
            avatarUrl:"/image/steve.jpg"
        },
        toggle: function () {
            this.save({enable: !this.get("enable")});
        },
        urlRoot:'/1.0/member',
        sync: function () {
            pace.restart();
            Backbone.Model.prototype.sync.apply(this,arguments);
        },
        validate: function(attributes){
            if(!attributes.name){
                return "名字必填";
            }
        },
        initialize: function () {
            this.on("invalid", function (model,error) {
                console.log(error);
            });
        }
    });

    return Member;
});
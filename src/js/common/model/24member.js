define([
    'backbone',
    'pace'
], function (Backbone,pace) {
    var Member = Backbone.Model.extend({
        //默认属性
        idAttribute:"_id",
        defaults: {
            name:"",
            phone:"",
            address:'',
            tencentNumber:''
        },
        urlRoot:'/1.0/24member',
        sync: function () {
            pace.restart();
            Backbone.Model.prototype.sync.apply(this,arguments);
        },
        validate: function(attributes){
            if(!attributes.name){
                return 'name';
            }
            if(!attributes.phone){
                return 'phone';
            }
        },
        initialize: function () {
            // this.on("invalid", function (model,error) {
            //     alert(error);
            // });
        }
    });

    return Member;
});
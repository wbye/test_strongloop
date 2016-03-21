define([
    'backbone',
    'pace'
], function (Backbone,pace) {
    var Avatar = Backbone.Model.extend({
        //默认属性
        //idAttribute:"_id",
        defaults: {
        },
        urlRoot:'/1.0/upload/avatar',
        sync: function () {
            pace.restart();
            Backbone.Model.prototype.sync.apply(this,arguments);
        },
        upload: function (data) {
            console.log(data);
            $.ajax({
                url: '/1.0/upload/avatar' ,
                type: 'POST',
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                success: function (returndata) {
                },
                error: function (returndata) {
                }
            });
            return ;
            this.sync("create",this,{
                url:"/1.0/upload/avatar",
                data:data,
                processData: false,
                contentType:false,
                //contentType: "multipart/form-data"
            })
        }
    });

    return Avatar;
});
define([
    'backbone',
    'tpl!./template.html',
    'jquery',
    'underscore'
], function (Backbone,template,jQuery,_) {
    return Backbone.View.extend({
        template:template,
        tagName:"div",
        className:"ui modal small",
        events: {
        },
        initialize: function () {
            this.listenTo(this.model,'invalid',this.showValidError);
        },
        render: function () {

            this.$el.html(this.template());
            this.prepareDialog();
            this.showDialog();
            
            return  this;
        },
        showValidError:function(model,msg,error){
            switch(msg){
                case "name":
                    this.$(".field.name-required").addClass("error");
                    break;
                case "phone":
                    this.$(".field.phone-required").addClass("error");
                    break;
            }            
        },
        removeValidError:function(){
            this.$(".field.error").removeClass("error");
        },
        setValue:function(info){
            var self = this;

            _.each(info,function(value,key){
                self.$el.find("input[name='"+key+"']").val(value);
            });
        },
        getValue: function () {
            var info = {};

            this.$("input[name]").each(function(){
                var name = $(this).attr("name");
                var value = $(this).val();

                info[name] = value; 
            });

            return info;
        },
        prepareDialog: function () {
            var self = this;
            
            //add
            this.$(".header").text('添加');
            this.$(".ui.button.approve").text('创建');
            
            //bind events
            this.$el.modal({
                //blurring: true,
                onApprove: function ($el) {
                    var info = self.getValue();

                    self.model.set(info);
                    self.model.save(null,{
                        success: function () {
                            if(self.collection){
                                self.collection.fetch();
                            }
                            self.$el.modal("hide");
                            console.log("success");
                        },
                        error: function () {
                            console.log("fail");
                        },
                        parse:false
                    });
                    //if(!self.model.isValid()){
                    //    alert("名字必填");
                    //    return false;
                    //}
                    return false;
                },
                onDeny: function ($el) {
                },
                onHidden:function(){
                }
            });

        },
        showDialog: function () {
            this.$el.modal("show").modal("refresh");
        },
        refreshDialog:function(){
            this.$el.modal("refresh");
        }
    });
});
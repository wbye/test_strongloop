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

        },
        render: function () {
            //console.log(this.model.toJSON());
            var tplInfo = this.model.toJSON();

            this.$el.html(this.template(tplInfo));
            this.$("select[name=gender]").val(tplInfo.gender);
            this.$("select[name=enable]").val(tplInfo.enable?'1':'0');
            this.prepareDialog();

            return  this;
        },
        getValue: function () {
            var name = this.$("input[name='member-name']").val();
            var gender = this.$("select[name=gender]").val();
            var enable = this.$("select[name=enable]").val();

            name = name.trim();
            if(name!==''){
                this.model.set("name",name);
            }
            this.model.set("gender",parseInt(gender));
            this.model.set("enable",parseInt(enable)?true:false);
        },
        prepareDialog: function () {
            var self = this;

            //judge edit or add
            if(this.model.get([this.model.idAttribute])){
                //edit
                this.$(".header").text('编辑');
                this.$(".ui.button.approve").text('保存');
            }else{
                //add
                this.$(".header").text('添加');
                this.$(".ui.button.approve").text('创建');
            }
            
            //bind events
            this.$el.modal({
                //blurring: true,
                onApprove: function ($el) {
                    self.getValue();
                    self.model.save(null,{
                        success: function () {
                            if(self.collection){
                                self.collection.fetch();
                            }
                            console.log("success");
                        },
                        error: function () {
                            console.log("fail");
                        },
                        parse:false
                    });

                    //return false;
                },
                onDeny: function ($el) {
                }
            });
            this.$el.find(".dropdown,select").dropdown();
        },
        showDialog: function () {
            this.$el.modal("show").modal("refresh");
        }
    });
});
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
            this.setValue(_.pick(tplInfo, 'enable', 'gender','name','career','email'));
            this.$el.find("select").dropdown();
            this.prepareDialog();

            return  this;
        },
        getValue: function () {
            var info = {};

            this.$("input,select").each(function (i, el) {
                if (el.name === 'createAt' || el.name === 'expiredAt') {
                    info[el.name] = $(el).val();
                } else {
                    info[el.name] = $(el).val();
                }
            });

            return info;

        },
        setValue: function (info) {
            var self = this;
            info = info || {};
            _.each(info, function (value, key, item) {

                console.log(value,key);
                if(key==='gender'||key==='career'){
                    self.$el.find("select[name=" + key + "]").val(value);
                }else if(key==='enable'){
                    self.$el.find("select[name=" + key + "]").val(value?"1":"0");
                }else{
                    self.$el.find("input[name=" + key + "]").val(value);
                }
            });
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
                    var info = self.getValue();

                    self.model.save(info,{
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
                        parse:false,
                    });
                    //if(!self.model.isValid()){
                    //    alert("名字必填");
                    //    return false;
                    //}
                    return false;
                },
                onDeny: function ($el) {
                }
            });
        },
        showDialog: function () {
            this.$el.modal("show").modal("refresh");
        }
    });
});
define([
    'backbone',
    'tpl!./template.html',
    'admin/member/dialog/view',
    'moment'
], function (Backbone,template,MemberDialogView,moment) {
    return Backbone.View.extend({
        tagName: "tr",
        template:template,
        events:{
            "click .button.edit":"handleEditClick",
            "click .button.delete":"handleDeleteClick"
        },
        initialize: function () {
            this.listenTo(this.model,"change",this.render);
            this.listenTo(this.model,"destroy",this.remove);
        },
        handleDeleteClick: function () {
            this.model.destroy();
        },
        handleEditClick: function () {
            var view = new MemberDialogView({
                model:this.model
            }).render();
            $("body").append(view.$el);

            view.$el.modal("show");
        },
        render: function () {
            var tplInfo = this.model.toJSON();
            var globalConfig = window.AppConfig;

            _.extend(tplInfo,{
                createAt: new moment(tplInfo.createAt).format("YYYY-MM-DD HH:MM:SS"),
                gender:globalConfig['Gender'][tplInfo.gender],
                enable:globalConfig['Enable'][tplInfo.enable],
            });
            this.$el.html(this.template(tplInfo));
            if(tplInfo.enable){
                console.log(tplInfo.enable);
                this.$("input[type=checkbox]").attr("checked","checked");
            }
            this.$el.find(".checkbox").checkbox();
            //render dropdown
            return this;
        }

    });
});
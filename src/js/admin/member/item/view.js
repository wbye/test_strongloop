define([
    'backbone',
    'tpl!./template.html',
    'tpl!./template_new.html',
    'admin/member/dialog/view',
    'moment',
    'semanticUI'
], function (Backbone,template,template_new,MemberDialogView,moment,semanticUI) {
    return Backbone.View.extend({
        tagName: "div",
        //template:template,
        template:template_new,
        className:"column",
        events:{
            "click .button.edit":"handleEditClick",
            "click .button.delete":"handleDeleteClick",
            "click .ui.toggle.checkbox":"handleClickEnable"
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
                joinAt: new moment(tplInfo.createAt).format("YYYY/MM/DD"),
                gender:globalConfig['Gender'][tplInfo.gender],
                enable:tplInfo.enable
                //enable:globalConfig['Enable'][tplInfo.enable?1:0],
            });
            this.$el.html(this.template(tplInfo));
            if(tplInfo.enable){
                this.$("input[type=checkbox]").attr("checked","checked");
            }
            this.$el.find(".checkbox").checkbox();
            //render dropdown
            return this;
        },
        handleClickEnable: function () {
            this.model.toggle();
        }
    });
});
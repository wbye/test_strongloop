define([
    'backbone',
    'tpl!./template_new.html',
    'admin/member/dialog/view',
    'moment',
    'semanticUI'
], function (Backbone,template,MemberDialogView,moment,semanticUI) {
    return Backbone.View.extend({
        tagName: "div",
        template:template,
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
                enable:tplInfo.enable,
                avatarUrl:tplInfo.gender==="0"?"/image/elyse.png":(tplInfo.gender==="1"?"/image/steve.jpg":"/image/jenny.jpg"),
                career:globalConfig['Career'][tplInfo.career]
            });
            this.$el.html(this.template(tplInfo));
            if(tplInfo.enable){
                this.$("input[type=checkbox]").attr("checked","checked");
            }
            this.$el.find(".checkbox").checkbox();
            this.$('.ui.card .image').dimmer({
                on: 'hover'
            });
            //render dropdown
            return this;
        },
        handleClickEnable: function () {
            this.model.toggle();
        }
    });
});
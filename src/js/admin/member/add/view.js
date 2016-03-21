define([
    'backbone',
    'common/model/avatar',
    'admin/member/avatar/view',
    'tpl!./template.html',
    'semanticUI'
], function (Backbone,Avatar,UploadAvatarView,template,semanticUI) {
    return Backbone.View.extend({
        template:template,
        render: function () {
            this.$el.html(this.template());
            //this.bindEvents();
            this.initUploadAvatarView();

            return this;
        },
        bindEvents: function () {
            this.initValidate();
            this.initUploadAvatarView();
            this.$(".ui.dropdown").dropdown();
        },
        initValidate: function () {

            this.$('.ui.form')
                .form({
                    fields: {
                        name     : 'empty',
                        gender   : 'empty',
                        username : 'empty',
                        password : ['minLength[6]', 'empty'],
                        skills   : ['minCount[2]', 'empty'],
                        terms    : 'checked'
                    }
                })
            ;
        },
        initUploadAvatarView: function () {
            new UploadAvatarView({
                el:this.$(".upload-warpper"),
                model:new Avatar(),
            }).render();
        }
    })
})
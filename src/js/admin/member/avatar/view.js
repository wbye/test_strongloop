define([
    'backbone',
    'tpl!./template.html'
], function (Backbone ,template) {
    return Backbone.View.extend({
        template: template,
        events: {
            "click .upload-icon-warpper": "handleClickUploadIcon",
            "change input[type=file]": "handleInputChange"
        },
        initialize: function () {
            //this.model
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        handleClickUploadIcon: function () {
            this.$("input[type=file]").trigger("click");
        },
        handleInputChange: function () {
            //var formData = new FormData(this.$("form"));

            this.$("form").submit();
            //formData.append("files",formData);
            //this.model.upload(formData);
        }
    });
});
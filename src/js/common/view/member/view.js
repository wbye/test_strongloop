define([
    'backbone',
    'tpl!./template.html'
], function (Backbone,template) {
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

        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            //render dropdown

            return this;
        }

    });
});
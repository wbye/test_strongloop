define([
    'backbone',
    'admin/member/item/view',
    'admin/member/dialog/view',
    'common/model/member',
    'tpl!./template_empty.html'
], function (Backbone,MemberItemView,MemberDialogView,Member,template_empty) {
    return Backbone.View.extend({
        template_empty:template_empty,
        tagName: "div",
        className:"ui four column grid",
        events:{
            "click #add-user":"handleAddClick"
        },
        handleAddClick: function () {
            var view = new MemberDialogView({
                model:new Member(),
                collection:this.collection
            }).render();
            $("body").append(view.$el);

            view.$el.modal("show");
        },
        initialize: function () {
            this.listenTo(this.collection,'add',this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.listenTo(this.collection, 'all', this.emptyCheck);
            this.collection.fetch();
        },
        render: function () {
            return this;
        },
        emptyCheck: function () {
            if(this.collection.length===0){
                //this.$el.html(this.template_empty());
            }else{
                //this.$el.remove();
            }
        },
        addOne: function(item) {

            var view = new MemberItemView({model: item});

            this.$el.append(view.render().el);
        },
        addAll: function() {
            this.collection.each(this.addOne, this);
        }
    });
});
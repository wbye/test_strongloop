define([
    'backbone',
    'tpl!./template.html',
    'tpl!./template_empty.html',
    'admin/member/item/view',
    'admin/member/dialog/view',
    'common/model/member',
], function (Backbone,template,template_empty,MemberItemView,MemberDialogView,Member) {
    return Backbone.View.extend({
        tagName: "table",
        template:template,
        template_empty:template_empty,
        className:"ui padded celled table",
        el:$(".member-list"),
        events:{
            "click #add-user":"handleAddClick"
        },
        handleAddClick: function () {
            var view = new MemberDialogView({
                model:new Member({
                    name:'',
                    enable:0,
                    gender:0
                }),
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
            this.$el.html(this.template());
        },
        emptyCheck: function () {
            if(this.collection.length===0){
                this.$("tbody").html(this.template_empty());
            }else{
                this.$("tbody tr.empty-data").remove();
            }
        },
        addOne: function(item) {

            var view = new MemberItemView({model: item});

            this.$("tbody").append(view.render().el);
        },
        addAll: function() {
            this.collection.each(this.addOne, this);
        }
    });
});
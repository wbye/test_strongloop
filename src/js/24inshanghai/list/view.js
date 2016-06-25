define([
    'backbone',
    'jquery',
    'tpl!./template.html',
    'tpl!./template_empty.html',
    '24inshanghai/dialog/view',
    'common/model/24member',
    '24inshanghai/list/item'
], function (Backbone,$,template,template_empty,MemberDialogView,Member,ListItem) {
    return Backbone.View.extend({
        tagName: "table",
        template:template,
        template_empty:template_empty,
        className:"ui padded celled table",
        el:$("#members-warpper"),
        initialize: function (option) {
            this.admin = option.admin||false;
            this.listenTo(this.collection,'add',this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.listenTo(this.collection, 'all', this.emptyCheck);
            this.collection.fetch({
                reset:true
            });
        },
        emptyCheck: function () {
            if(this.collection.length===0){
                this.$("tbody").html(this.template_empty());
                this.$(".empty-data td").attr("colspan",this.$("thead th").length);
            }else{
                this.$("tbody tr.empty-data").remove();
            }
        },
        addOne: function(item) {
            var view = new ListItem({
                model:item,
                admin:this.admin
            }).render();

            this.$("tbody").append(view.$el);
        },
        addAll: function() {
            this.$("tbody").html('');
            this.collection.each(this.addOne, this);
        }
    });
});
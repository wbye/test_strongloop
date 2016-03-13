define([
    'backbone',
    'activity/201603/choose/view',
], function (Backbone,ChooseView) {
    return Backbone.View.extend({
        el:$("#choose-list"),
        events:{

        },
        initialize: function () {
            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.collection.fetch();
        },
        render: function () {
            return this;
        },
        addOne: function(item,index) {
            var view = new ChooseView({model: item});

            this.$el.append(view.render().el);
        },
        addAll: function() {
            this.$el.html('');
            this.collection.each(this.addOne, this);
        }
    });
});
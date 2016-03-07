define([
    'swiper',
    'backbone',
    'tpl!./template.html'
], function (Swiper,Backbone,template) {
    return Backbone.View.extend({
        template:template,
        tagName:"div",
        className:"activity-choose-item",
        render: function () {
            this.$el.html(this.template());
            this.initSwiper();
            return this;
        },
        initSwiper: function () {
            var mySwiper = new Swiper(this.$('.swiper-container'), {
                speed: 400,
                pagination:this.$(".swiper-pagination"),
                slidesPerView: 'auto',
                paginationClickable: true
            });
        }
    });
})
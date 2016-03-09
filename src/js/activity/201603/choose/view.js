define([
    'swiper',
    'backbone',
    'tpl!./template.html',
    'tpl!./template_slide.html',
    'underscore'
], function (Swiper, Backbone, template,template_slide,_) {
    return Backbone.View.extend({
        template: template,
        tagName: "div",
        className: "activity-choose-item",
        initialize: function () {
            var self = this;

            this.on({
                "loading": function () {
                    self.setViewState('loading');
                },
                "error": function () {
                    self.setViewState('error');
                },
                "emptyview": function () {
                    self.setViewState('emptyview');
                },
                'complete': function () {
                    self.setViewState('complete');
                },
                "success": function () {
                    self.setViewState('success');
                }
            });

        },
        setViewState: function (state) {
            switch (state) {
                case "loading":
                    break;
                case "error":
                    break;
                case "emptyview":
                    break;
                case "complete":
                    break;
                case "success":
                    break;
                default:
                    break;
            }
            return this;
        },
        render: function () {
            this.$el.html(this.template());
            this.initSwiper();

            return this;
        },
        prepareImage: function () {
            var pics = [
                "/image/coleflower1.jpg",
                "/image/coleflower2.jpg",
                "/image/coleflower3.jpg",
            ];

            this.$(".swiper-wrapper").html(template_slide({items:pics}));
        },
        initSwiper: function () {
            var mySwiper;

            this.prepareImage();
            setTimeout(function () {
                mySwiper = new Swiper(this.$('.swiper-container'), {
                    speed: 400,
                    pagination: this.$(".swiper-pagination"),
                    paginationClickable: true
                });
            }.bind(this),0)
        }
    });
})
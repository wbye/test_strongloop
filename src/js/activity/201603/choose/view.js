define([
    'swiper',
    'backbone',
    'tpl!./template.html',
    'tpl!./template_2.html',
    'tpl!./template_slide.html',
    'underscore'
], function (Swiper, Backbone, template,template_2,template_slide,_) {
    return Backbone.View.extend({
        //template: template,
        template:template_2,
        tagName: "div",
        className: "activity-choose-item",
        initialize: function (options) {
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

            if(options.pics){
                this.pics = options.pics;
                this.preloadImageResource();
            }
            this.tplInfo = options||{};
        },
        preloadImageResource: function () {
            _.each(this.pics, function (item) {
                var image = new Image();

                image.src = item;
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
            this.$el.html(this.template(this.tplInfo));
            this.initSwiper();

            return this;
        },
        prepareSlideContent: function () {
            var pics = this.pics;

            this.$(".swiper-wrapper").html(template_slide({items:pics}));
        },
        initSwiper: function () {
            var mySwiper;

            this.prepareSlideContent();
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
define([
    'activity/201603/choose/view',
    'tpl!./template.html',
    'stackblur'
], function (ChooseView,template,StackBlur) {
    return ChooseView.extend({
        template:template,
        events:{
            "click .operation .vote":"handleClickVote",
        },
        handleLoadPreImage: function (e) {
            //var target =  $(e.currentTarget);
            //var canvasTag = target.siblings("canvas");
            //
            //this.userGaussFuzzy(target[0],canvasTag[0]);

            //开始加载实际大小图片
            var target =  $(e.currentTarget);
            var image = new Image();
            var realSrc = target.attr("data-src");

            image.src = realSrc;
            image.onload = function () {
                //加载完成
                target.parent(".swiper-slide").css("backgroundImage","url("+realSrc+")");
                target.fadeOut(200);
            }

        },
        userGaussFuzzy:function (imageTag,canvasTag) {
            StackBlur.image(imageTag, canvasTag, 50, false);
        },
        initialize: function () {
            this.listenTo(this.model,"change:likes",this.updateLikesNumber);
        },
        render: function () {
            ChooseView.prototype.render.apply(this,arguments);
            //preimage load
            this.$(".pre-image").load(this.handleLoadPreImage.bind(this));

            return this;
        }
    });
});
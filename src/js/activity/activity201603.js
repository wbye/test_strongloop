require([
    'underscore',
    'jquery',
    'semanticUI',
    'activity/201603/choose/view'
], function (_, $, semanticUI,ChooseView) {
    (new ChooseView({
        pics : [
            "/image/activity201603/coleflower1.jpg",
            "/image/activity201603/coleflower2.jpg",
            "/image/activity201603/coleflower3.jpg",
            "/image/activity201603/coleflower4.jpg"
        ]
    }).render().$el).appendTo($("#choose-list"));
    (new ChooseView({
        className:"activity-choose-item pic-pull-right",
        pics : [
            "/image/activity201603/coleflower1.jpg",
            "/image/activity201603/coleflower2.jpg",
            "/image/activity201603/coleflower3.jpg",
            "/image/activity201603/coleflower4.jpg"
        ]
    }).render().$el).appendTo($("#choose-list"));
    (new ChooseView({
        pics : [
            "/image/activity201603/coleflower1.jpg",
            "/image/activity201603/coleflower2.jpg",
            "/image/activity201603/coleflower3.jpg",
            "/image/activity201603/coleflower4.jpg"
        ]
    }).render().$el).appendTo($("#choose-list"));

});

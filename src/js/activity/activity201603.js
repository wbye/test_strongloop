require([
    'underscore',
    'jquery',
    'semanticUI',
    'activity/201603/choose/view'
], function (_, $, semanticUI,ChooseView) {
    (new ChooseView({
        pics : [
            "/image/coleflower1.jpg",
            "/image/coleflower2.jpg",
            "/image/coleflower3.jpg",
            "/image/coleflower4.jpg"
        ]
    }).render().$el).appendTo($("#choose-list"));
    (new ChooseView({
        className:"activity-choose-item pic-pull-right",
        pics : [
            "/image/coleflower1.jpg",
            "/image/coleflower2.jpg",
            "/image/coleflower3.jpg",
            "/image/coleflower4.jpg"
        ]
    }).render().$el).appendTo($("#choose-list"));
    (new ChooseView({
        pics : [
            "/image/coleflower1.jpg",
            "/image/coleflower2.jpg",
            "/image/coleflower3.jpg",
            "/image/coleflower4.jpg"
        ]
    }).render().$el).appendTo($("#choose-list"));

});

require([
    'underscore',
    'jquery',
    'semanticUI',
    'activity/201603/choose/view'
], function (_, $, semanticUI,ChooseView) {
    (new ChooseView().render().$el).appendTo($("#choose-list"));
    (new ChooseView({
        className:"activity-choose-item pic-pull-right"
    }).render().$el).appendTo($("#choose-list"));

});

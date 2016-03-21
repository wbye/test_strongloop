require([
    'underscore',
    //'pace',
    'jquery',
    'semanticUI',
    'common/model/member',
    'common/collection/members',
    'admin/member/item/view',
    'admin/member/list/view'
], function (_, $, semanticUI, Member, Members, MemberItemView, MemberListView) {
    //pace.start();

    var members = new Members();
    var memberListView = new MemberListView({
        collection: members
    }).render();

    memberListView.$el.appendTo($(".member-list"));

});

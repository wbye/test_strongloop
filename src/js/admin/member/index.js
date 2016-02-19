require([
    'underscore',
    'jquery',
    'semanticUI',
    'common/model/member',
    'common/collection/members',
    'admin/member/item/view',
    'admin/member/list/view',
    'admin/member/dialog/view'
], function (_, $, semanticUI, Member, Members, MemberItemView,MemberListView,MemberDilogView) {

    var members = new Members();
    var memberListView = new MemberListView({
        collection:members
    }).render();

});

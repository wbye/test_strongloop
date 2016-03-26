require([
    'jquery',
    'common/collection/members',
    'admin/member/list/view'
], function ( $, Members, MemberListView) {
    var members = new Members();
    var memberListView = new MemberListView({
        collection: members
    }).render();

    memberListView.$el.appendTo($(".member-list"));
});

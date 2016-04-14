require([
    'jquery',
    'common/collection/members',
    'admin/member/list/view',
    'admin/member/dialog/view',
    'common/model/member',
], function ( $, Members, MemberListView,MemberDialogView,Member) {
    var members = new Members();
    var memberListView = new MemberListView({
        collection: members,
    }).render();

    memberListView.$el.appendTo($(".member-list"));
    
    //bind click add
    $(".add-member").on("click", function () {
        var view = new MemberDialogView({
            model: new Member(),
            collection:members
        }).render();
        $("body").append(view.$el);

        view.$el.modal("show");
    });
});

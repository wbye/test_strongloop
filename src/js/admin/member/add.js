require([
    'admin/member/add/view'
], function (MemberAddView) {
    var addView = new MemberAddView({
        el:"#member-add-warpper"
    });

    addView.render();
});
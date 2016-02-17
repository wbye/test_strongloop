require([
    'underscore',
    'jquery',
    'semanticUI',
    'common/model/member',
    'common/view/member/view'
],function (_,$,semanticUI,Member,MemberView) {
    var tplAdd = _.template($("#add").html());

     $(".ui.table").append(new MemberView({
         model:new Member({
             id:"1001",
             name:"wbye222"
         })
     }).render().$el);
    //bind events
    $("#add-user").click(function () {
        $("#my-dialog").html(tplAdd()).modal({
            blurring:true,
            onApprove: function ($el) {
                var member = new Member({
                    "name":"wbye",
                    "enable":1
                });

                member.save();
                return false;
            },
            onDeny: function ($el) {
            }
        });
        $("#my-dialog").modal("show").modal("refresh");
        $("#my-dialog select").dropdown();
    });

});

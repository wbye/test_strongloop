require([
    'underscore',
    'jquery',
    'semanticUI',
    'common/model/member'
],function (_,$,semanticUI,Member) {
    var tplAdd = _.template($("#add").html());

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

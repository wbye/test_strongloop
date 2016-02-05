(function (global) {
    //bind events
    $("#add-user").click(function () {
        $("#my-dialog").modal({
            blurring:true
        }).modal("show");
    });
})(this);
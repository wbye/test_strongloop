$(document).ready(function () {
    // fix menu when passed
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');

    $('.ui.rating').rating({
        maxRating: 5
    }).rating("disable");

    // a jump to _blank
    $("#work_experience a[href]").attr("target", "_blank");

    $(".menu .item").click(function () {
        var target;

        if ($(this).hasClass("active")) {
            return;
        } else {
            target = $(this).attr("target");
            syncOtherMenu(target);
            $(window).scrollTo($(target), {
                duration: 200
            });
        }
    });
    function syncOtherMenu(target) {
        $("a[target=" + target + "]").addClass("active").siblings(".item").removeClass("active");
    }
    //change language
    $("#language .item").click(function (e) {
        var target = $(e.currentTarget);
        var language = target.attr("data-language");

        i18n.setLng(language,function () {
            $("html").i18n();
        });
    });

    //set language
    i18n.init({lng:'zh',fallbackLng: 'zh'}).done(function () {
        $("html").i18n();
    });
    //
    // {target:'',offset}
    //var menuInfo = [];
    //var addMenuSelected =  _.debounce(function () {
    //    updateMenuInfo()
    //},100);
    //
    //getMenuItems();
    //
    //$(window).scroll(function () {
    //    addMenuSelected();
    //});
    //
    //function updateMenuInfo(){
    //    $.each(menuInfo,function(i,item){
    //        console.log(item.offset().top);
    //        var scrollTop =$("body").scrollTop();
    //
    //        if(Math.abs(item.offset().top-scrollTop)<=100){
    //            syncOtherMenu(item.attr("id"));
    //            return false;
    //        }
    //    });
    //}
    //
    //function getMenuItems(){
    //
    //    $("#shortcut-introduce .ui.menu a.item[target]").each(function () {
    //        var tag = $(this).attr("target");
    //
    //        menuInfo.push($(tag));
    //    });
    //}
});
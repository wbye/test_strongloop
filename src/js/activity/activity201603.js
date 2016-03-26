require([
    'underscore',
    'jquery',
    'semanticUI',
    'activity/201603/choose/view',
    'common/collection/activities',
    'activity/201603/chooselist/view'
], function (_, $, semanticUI,ChooseView,Activities,ActivityListView) {
    var activites = new Activities();
    var activityListView = new ActivityListView({
        collection:activites
    });

    (function(){
        initDatabase();
        function initDatabase() {
            var dataBase;

            if(window.openDatabase){
                dataBase = getCurrentDatabase();
                if(!dataBase){
                    return;
                }
                dataBase.transaction(function (trans) {
                    trans.executeSql("create table if not exists Votes(uName text null,vote text null)", [], function (trans, result) {

                    }, function (trans, message) {

                    });
                });
            }
        }
        function getCurrentDatabase() {
            var dataBase;

            try{
                if (window.openDatabase) {
                    dataBase = window.openDatabase("vote", "1.0", "投票表", 1024 * 1024, function () {
                    });
                    return dataBase;
                }
            }catch (e){
                return null;
            }

            return null;
        }
    }());
});

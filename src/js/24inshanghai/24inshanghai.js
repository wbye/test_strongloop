require([
	'24inshanghai/list/view',
	'24inshanghai/dialog/view',
	'24inshanghai/toolbar/view',
	'common/model/24member',
	'common/collection/24members',
	'common/EventListener',
	'common/Storage',
	'jquery',
	'semanticUI',
],function(ListView,DialogView,ToolbarView,Member,Members,EventListener,Storage,$,semanticUI){
	var members = new Members();
	var admin = Storage.get("admin")||false;

	new ToolbarView({
		el:$("#header"),
		model:new Member(),
        collection: members
	});

	new ListView({
        collection: members,
        admin:admin
    });

	if(admin){
		$("#members-warpper").find("thead tr").append("<th width='200'>操作</th>");
	}
});
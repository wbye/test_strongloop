define([
	'backbone',
	'24inshanghai/dialog/view',
	'common/model/24member',
	'underscore'
],function(Backbone,DialogView,Member,_){
	return Backbone.View.extend({
		events:{
			"click .ui.button.add":"handleAdd",
			"keyup .ui.search input":"handleSearch"
		},
		initialize:function(){
			this.realSearch = this.realSearch();
		},
		realSearch:function(){
			var self = this;

			return _.debounce(function(){
				var  searchValue = $.trim(self.$(".ui.search input").val());
				var  where = {
					name:searchValue,
				};

				if(searchValue)	{
					self.collection.fetch({
						data:{
							where:JSON.stringify(where)
						},
						reset:true
					});	
				}else{
					self.collection.fetch({
						reset:true
					});
				}
				self.removeLoading();
			},300);
		},
		handleSearch:function(){
			this.addLoading();
			this.realSearch();
		},
		addLoading:function(){
			this.$(".ui.search").addClass("loading");
		},
		removeLoading:function(){
			self.$(".ui.search").removeClass("loading");
		},
		handleAdd:function(){
			var view = new DialogView({
		    	model:new Member(),
		    	collection:this.collection
		    }).render();
		    $("body").append(view.$el);
		    view.$el.modal("show");
		}
	});
});
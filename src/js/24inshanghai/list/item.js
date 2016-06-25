
define([
	'tpl!./template.html',
	'tpl!./template_admin.html',
	'backbone',
	'24inshanghai/dialog/syncView'
],function(template,templateAdmin,Backbone,DialogSyncView){
	
	return Backbone.View.extend({
		tagName:'tr',
		events:{
			"click .ui.button.edit":"handelClickEdit",
			"click .ui.button.remove":"handelClickRemove"
		},
		template:template,
		handelClickEdit:function(){
			var view = new DialogSyncView({
		    	model:this.model,
		    }).render();
		    $("body").append(view.$el);

		    view.$el.modal("show");
		},
		initialize:function(options){
			if(options.admin){
				this.template = templateAdmin;
			}
			this.listenTo(this.model,'all',this.render);
			this.listenTo(this.model,'remove',this.$el.remove)
		},
		render:function(options){
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		},
		handelClickRemove:function(){
			var del = confirm("确认删除？");
			
			if(del){
				this.model.destroy();
			}
		}
	});
})
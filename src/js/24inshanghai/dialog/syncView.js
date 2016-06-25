define([
    '24inshanghai/dialog/view'
], function (DialogView) {
    return DialogView.extend({
        render:function(){
            DialogView.prototype.render.call(this);
            this.setValue(this.model.toJSON());

            return this;
        },
        prepareDialog:function(){
            DialogView.prototype.prepareDialog.call(this);
            this.$(".header").text('编辑');
            this.$(".ui.button.approve").text('保存');
        }
    });
});
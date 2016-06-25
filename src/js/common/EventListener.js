define([
	'backbone',
	'underscore'
],function(Backbone,_){
	var EventListener = {};

	_.extend(EventListener, Backbone.Events);

	return EventListener;
});
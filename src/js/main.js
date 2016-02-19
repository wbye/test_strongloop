/**
 * Created by ywbshiwo on 16/2/16.
 */
var require  = {
    baseUrl: '/js',
    waitSeconds: 0,
    // urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        //lib
        jquery: 'lib/jquery/dist/jquery.min',
        underscore: 'lib/underscore/underscore-min',
        backbone: 'lib/backbone/backbone-min',
        tpl: 'lib/requirejs-tpl/tpl',
        text: 'lib/text/text',
        semanticUI:"lib/semantic/dist/semantic",
        moment:"lib/moment/moment"
    },
    shim: {
        jquery: {
            deps: [],
            exports: 'jQuery'
        },
        semanticUI:{
            deps:['jquery']
        }
    }
};
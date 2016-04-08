var gulp = require("gulp");
var runSequence = require("run-sequence");
var revReplace = require("gulp-rev-replace");
var util = require("./../util");
var config = require("./../config");

gulp.task('publish',['publish-copy-images','publish-compile-css','publish-compile-scripts'],function () {
});


gulp.task("publish-copy-images", function (done) {
    //copy images
    return util.copy(config.image.source,config.image.publishDir);
});

gulp.task("publish-compile-css", function () {
    return util.compileCss(config.css.source,config.css.publishDir);
});

gulp.task("publish-compile-scripts", function (done) {
    util.compileScript('publish',done);
});

//revision exist css
//gulp.task("revision-css",function(){
//    return util.revision(config.css.source,config.css.publishDir,'scss');
//});
//
//gulp.task("revision-js",function(){
//    return util.revision([config.js.source,'!src/js/lib/**/*.*'],config.js.publishDir,'js');
//});
//
//gulp.task("revision-image",function(){
//    return util.revision(config.image.source,config.image.publishDir,'image');
//});
//
//gulp.task("revision", ["revision-js", "revision-css","revision-image"], function(){});
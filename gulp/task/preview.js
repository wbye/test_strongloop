/*
 * preview
 *  不压缩，只合并文件 ，编译css复制文件
 */
var config = require("./../config");
var util = require("./../util");
var gulp = require("gulp");
var exec = require("child_process").exec;
var sass = require("gulp-sass");
var notify = require("gulp-notify");

gulp.task("preview", ['preview-compile-scripts', "preview-copy-images", "preview-compile-css"], function () {
});

gulp.task("preview-copy-images", function (done) {
    //copy images
    return util.copy(config.image.source,config.image.previewDir);
});

gulp.task("preview-compile-css", function () {
    return util.compileCss(config.css.source,config.css.previewDir);
});

gulp.task("preview-compile-scripts", function (done) {
    util.compileScript('preview',done);
});

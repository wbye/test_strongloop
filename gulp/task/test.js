/*
* 上线前测试用
*
*/

var gulp = require("gulp");
var exec = require("child_process").exec;

//只copy不压缩
gulp.task("test",['copy'], function () {

});
gulp.task("copy",['copy-js-lib','copy-js-else',"copy-locales","copy-images","copy-css",'copy-html'], function () {

});
gulp.task("copy-images", function (done) {
    //copy images
    return gulp.src("src/images/**/*.*").
        pipe(gulp.dest("public/images"));
});
gulp.task("copy-css", function (done) {
    //copy css
    return gulp.src("src/css/**/*.css").
        pipe(gulp.dest("public/css"));
});
gulp.task("copy-js-lib", function (done) {
    //override lib
    exec("cp -rf src/js/lib public/js", function (err) {
        if(err){
            console.log(err);
        }else{
            done();
        }
    });
});
gulp.task("copy-js-else", function () {
    //override lib
    return gulp.src(['!src/js/lib/**/*.*','src/js/**/*.js']).
        pipe(gulp.dest("public/js"));
});
gulp.task("copy-locales", function (done) {
    exec("cp -rf src/locales public", function (err) {
        if(err){
            console.log(err);
        }else{
            done();
        }
    });
});
gulp.task("copy-html", function (done) {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("public"));
});
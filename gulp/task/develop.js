var gulp =require('gulp');
var browserSync = require('browser-sync').create();
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var config = require('./../../config/Server');
var exec = require("child_process").exec;
var supervisor = require("gulp-supervisor");


// Static Server + watching scss/html files
gulp.task('serve', ['node','sass'], function() {

    //create server
    browserSync.init({
        //server:{
        //    "baseDir":"./app"
        //},
        proxy:"localhost:"+config.port
    });

    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch(["src/js/**/*.js","src/js/**/*.html"]).on('change', browserSync.reload);
});

/**
 * Compile with gulp-ruby-sass + source maps
 */
gulp.task('sass', function () {

    return   gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(notify("build sass file: <%= file.relative %>!"))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});


gulp.task('node', function (complete) {
    console.log(process.argv[3]);
    var runType = process.argv[3]||'--dev';
    supervisor("app.js",{
        args: [runType],
        watch: ["app",'routes','api'],
        ignore: ["tasks", "src", "node_modules", "public", "views"],
        pollInterval: 500,
        extensions: ["js"],
        exec: "node",
        debug: false,
        debugBrk: false,
        harmony: true,
        noRestartOn: "exit",
        forceWatch: true,
        quiet: false
    });
    complete();
});
var gulp =require('gulp');
var browserSync = require('browser-sync').create();
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var jade = require("gulp-jade");

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    //create server
    browserSync.init({
        //server:{
        //    "baseDir":"./app"
        //},
        proxy:"localhost:8080"
    });

    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch("src/js/**/*.jade",['jade']);
    gulp.watch(["src/js/**/*.js","views/**/*.jade","src/js/**/*.html"]).on('change', browserSync.reload);
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

gulp.task("jade", function () {
   return gulp.src('src/js/**/*.jade')
       .pipe(jade({
           pretty: true
       }))
       .pipe(gulp.dest("src/js/"));
});
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var runSequence = require("run-sequence");
var minifyCss = require("gulp-minify-css");
var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");

gulp.task('publish',['test'],function () {
    runSequence('revreplace');
});

gulp.task("revision-css",function(){
	return gulp.src('src/css/**/*.css')
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest('public/css'))
        .pipe(rev.manifest({
            merge:true
        }))
        .pipe(gulp.dest('./'));
});
gulp.task("revision-js",function(){
	return gulp.src(['src/js/**/*.js','!src/js/lib/**/*.*'])
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('public/js'))
        .pipe(rev.manifest({
            merge:true
        }))
        .pipe(gulp.dest('./'));
});
gulp.task("revision-image",function(){
	return gulp.src('src/images/**/*.*')
        .pipe(rev())
        .pipe(gulp.dest('public/images'))
        .pipe(rev.manifest({
            merge:true
        }))
        .pipe(gulp.dest('./'));
});
gulp.task("revreplace", ["revision-js", "revision-css","revision-image"], function(){
    var manifest = gulp.src("./rev-manifest.json");

    return gulp.src("src/index.html")
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest("public"));
});
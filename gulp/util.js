var gulp = require("gulp");
var exec = require("child_process").exec;
var config = require("./config");
var sass = require("gulp-sass");
var rev = require("gulp-rev");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var util = {};


//copy file,不区分文件类型
util.copy = function (sourceFiles, distDir) {

    return gulp.src(sourceFiles).
        pipe(gulp.dest(distDir));
};

util.compileCss = function (sourceFiles, distDir) {
    //copy css
    return gulp.src(sourceFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(distDir));
};

util.compileScript = function (type, done) {
    var command = "node r.js -o build.js";
    type = type || 'preview';

    if (type.indexOf("pro") !== -1 || type === 'preview') {
        //非产品，及preview
        command = command + " optimize='none' dir='./" + config.js.previewDir + "'";
    } else {
        //产品环境
        //不要改什么
    }
    exec(command, function (err) {
        if (err) {
            console.log(err);
        } else {
            done();
        }
    });
}

util.revision = function (sourceFiles, distDir, type) {
    var files = gulp.src(sourceFiles);
    if (type === 'existcss') {
        files = files.pipe(minifyCss());
    }else if(type==='scss'){
        files = files.pipe(sass().on('error', sass.logError)).pipe(minifyCss())
    } else if (type === 'js') {
        files = files.pipe(uglify());
    }

    return files.pipe(rev())
        .pipe(gulp.dest(distDir))
        .pipe(rev.manifest({
            merge: true
        }))
        .pipe(gulp.dest('./'));
};
module.exports = util;
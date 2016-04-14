({
    baseUrl: "./src/js",
    mainConfigFile: './src/js/main.js',
    dir: "./public/js",
    optimize: "uglify",
    optimizeCss: 'none',
    skipDirOptimize:true,
    removeCombined:true,
    preserveLicenseComments:false,
    modules: [{
        name: "activity/activity201603"
    }, {
        name: "admin/member/index"
    }]
})
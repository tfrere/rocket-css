module.exports = function (gulp, plugins, paths) {
    return function () {
	    gulp.src(paths.ressources.files)
	    .pipe(gulp.dest(paths.ressources.dest));
    };
};


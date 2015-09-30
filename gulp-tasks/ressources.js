module.exports = function (gulp, plugins, paths) {
    return function () {
	    gulp.src(paths.ressources.files)
	    .pipe(plugins.plumber())
	    .pipe(gulp.dest(paths.ressources.dest))
	    .pipe(plugins.livereload());
    };
};


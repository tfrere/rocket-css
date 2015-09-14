/* ## serve
================================================== */

module.exports = function (gulp, plugins, paths) {
    return function () {
        plugins.connect.server({
	        port:paths.serve.port,
	        root: paths.serve.root,
	        livereload: true
	    });
		gulp.src('').pipe(plugins.open({uri: 'http://localhost:' + paths.serve.port}));
    };
};


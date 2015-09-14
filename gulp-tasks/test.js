  var protractor = require("gulp-protractor").protractor;

module.exports = function (gulp, plugins, paths) {
    return function () {

		plugins.connect.server({
		    port:paths.serve.port,
		    root: paths.serve.root
		});

      gulp.src(["./src/tests/*.e2e.js"])
      .pipe(protractor({
          configFile: "protractor.config.js",
          args: ['--baseUrl', 'http://localhost:8000']
      }))
      .on('end', function(){plugins.connect.serverClose()})
      .on('error', function(e) { throw e });
    };
};

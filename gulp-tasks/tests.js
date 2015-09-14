  var protractor = require("gulp-protractor").protractor;

  gulp.task('tests', function() {
    gulp.src(["./src/tests/*.e2e.js"])
      .pipe(protractor({
          configFile: "protractor.config.js",
          args: ['--baseUrl', 'http://127.0.0.1:8000']
      }))
      .on('error', function(e) { throw e })
  });

var del           = require('del');

module.exports = function (gulp, plugins, paths) {
    return function () {
        return del([paths.clean.files] );
    };
};
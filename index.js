/// <reference path="./types.d.ts" />
"use strict";
var utils = require("loader-utils");
// We use a custom file since we need private functions
var gulp_typescript_angular_1 = require("./gulp-typescript-angular");
function loader(source) {
    this.cacheable();
    var options = utils.getOptions(this) || {};
    gulp_typescript_angular_1.setDefaultValue(options);
    var output = gulp_typescript_angular_1.transform(source, options);
    this.callback(null, output);
}
;
module.exports = loader;
//# sourceMappingURL=index.js.map
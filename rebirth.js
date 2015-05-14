"use strict";

var extend = require("util-extend");
var spawn  = require("child_process").spawn;

module.exports = function rebirth(opts) {
    opts = extend({
        cwd      : process.cwd,
        detached : true,
        stdio    : "inherit"
    }, opts);

    spawn(process.execPath, process.argv.slice(1), opts).unref();
    process.exit(0);
};

"use strict";

const extend = require("util-extend");
const spawn  = require("child_process").spawn;

module.exports = function rebirth(opts) {
  opts = extend({
    cwd      : process.cwd(),
    detached : true,
    env      : Object.assign(process.env, {REBORN: 1}),
    stdio    : "inherit"
  }, opts);

  spawn(process.execPath, process.argv.slice(1), opts).unref();
  process.exit(0);
};

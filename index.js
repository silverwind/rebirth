"use strict";

const spawn  = require("child_process").spawn;

module.exports = function rebirth(opts) {
  spawn(process.execPath, process.argv.slice(1), Object.assign({
    cwd      : process.cwd(),
    detached : true,
    env      : Object.assign(process.env, {REBORN: 1}),
    stdio    : "inherit"
  }, opts)).unref();
  process.exit(0);
};

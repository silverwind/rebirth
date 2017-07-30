"use strict";

const spawn = require("child_process").spawn;
const fs = require("fs");
const path = require("path");
const os = require("os");
const tempFile = path.join(os.tmpdir(), "rebirth-child");

const child = spawn("node", ["test-child.js"], {cwd: process.cwd()});
const pid = child.pid;

setTimeout(() => {
  fs.readFile(tempFile, "utf8", (err, newPid) => {
    if (err) return exit(err);
    fs.unlink(tempFile, err => {
      if (err) return exit(err);
      exit(pid !== newPid ? null : `PIDs don't match: ${pid}, ${newPid}`);
    });
  });
}, 1000);

function exit(err) {
  if (err) console.error(err);
  process.exit(err ? 1 : 0);
}

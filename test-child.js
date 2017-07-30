"use strict";

const rebirth = require(".");
const fs = require("fs");
const path = require("path");
const os = require("os");
const tempFile = path.join(os.tmpdir(), "rebirth-child");

setTimeout(() => {
  if (process.env.REBORN) {
    fs.writeFile(tempFile, process.pid, "utf8", () => {
      process.exit(0);
    });
  } else {
    rebirth();
  }
}, 100);

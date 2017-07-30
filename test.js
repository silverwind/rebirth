"use strict";

const rebirth = require(".");

if (process.env.REBORN === "1") {
  process.stdout.write("\nsuccessfully reborn");
  process.exit(0);
}

rebirth();

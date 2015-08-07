"use strict";

process.title = "phoenix";
console.log([
  "  _/|       |\\_",
  " /  |       |  \\",
  "|    \\     /    |",
  "|  \\ /     \\ /  |",
  "| \\  |     |  / |",
  "| \\ _\\_/^\\_/_ / |  I am (re)born with PID " + process.pid,
  "|    --\\//--    |",
  " \\_  \\     /  _/   Respawning in 10 seconds. Kill me with 'killall phoenix'",
  "   \\__  |  __/",
  "      \\ _ /",
  "     _/   \\_",
  "    / _/|\\_ \\",
  "     /  |  \\",
  "      / v \\",
].join("\n"));
setTimeout(require("./"), 10000);

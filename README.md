# rebirth
[![](https://img.shields.io/npm/v/rebirth.svg?style=flat)](https://www.npmjs.org/package/rebirth) [![](https://img.shields.io/npm/dm/rebirth.svg)](https://www.npmjs.org/package/rebirth) [![](https://api.travis-ci.org/silverwind/rebirth.svg?style=flat)](https://travis-ci.org/silverwind/rebirth)
> Restart a node process from within itself

Restarting is done by spawning a detached copy of the current process and subsequently ending the running process. The new child will be orphaned and parented to PID 1 (init/systemd/launchd).

## Installation
```
$ npm install --save rebirth
```

## Example
```js
const rebirth = require('rebirth');

rebirth();
// process restarts
```

#### Notes:
- To detect if a process was reborn, check if `process.env.REBORN` is `'1'`;
- Standard streams will be inherited by default. When running in a terminal, this means stdout/stderr will still print to that terminal after a restart. If you don't care about these streams, set `opts.stdio = 'ignore'`.

## API
### rebirth([options])
- `options` {Object} Takes the same options as [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).

© [silverwind](https://github.com/silverwind), distributed under BSD licence

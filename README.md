# rebirth [![NPM version](https://img.shields.io/npm/v/rebirth.svg?style=flat)](https://www.npmjs.org/package/rebirth) [![Dependency Status](http://img.shields.io/david/silverwind/rebirth.svg?style=flat)](https://david-dm.org/silverwind/rebirth)
> Restart a node process from within itself

The restarting is done by spawning a detached child of the current process and subsequently ending the running process. The new child will be orphaned and parented to PID 1 (init/systemd) on Unix.

#### Notes:
- The call to `rebirth()` should be conditional. Otherwise, the process can end up in a restart loop.
- Standard streams will be inherited by default. When running in a terminal, this means stdout/stderr will still print to that terminal after a restart. If you don't care about these streams, set `opts.stdio = 'ignore'`
- Does not yet work on Windows.

## Installation
```
$ npm install --save rebirth
```

## Example
```js
var rebirth = require('rebirth');

rebirth();
// process restarts completely
```

## API
### rebirth([options])
- `options` {Object} Options object. Takes any options accepted by `child_process.spawn`.


© 2015 [silverwind](https://github.com/silverwind), distributed under BSD licence

'use strict';

const core = require('./core-b5bce73a.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["my-component.cjs",[[1,"my-component"]]]], options);
});

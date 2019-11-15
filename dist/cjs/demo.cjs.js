'use strict';

const core = require('./core-aee25661.js');

core.patchBrowser().then(options => {
  core.globals();
  return core.bootstrapLazy([["my-component.cjs",[[1,"my-component"]]]], options);
});

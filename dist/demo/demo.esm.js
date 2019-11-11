import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-d5bb4096.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
});

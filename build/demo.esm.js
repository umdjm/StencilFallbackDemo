import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-4ff02c91.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
});

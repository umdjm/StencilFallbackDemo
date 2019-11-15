import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-7fbd3457.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
});

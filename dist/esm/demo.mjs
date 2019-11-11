import { p as patchBrowser, b as bootstrapLazy } from './core-b9616fb9.js';

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
});

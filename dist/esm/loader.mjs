import { a as patchEsm, g as globals, b as bootstrapLazy } from './core-7fbd3457.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    globals();
    bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
  });
};

export { defineCustomElements };

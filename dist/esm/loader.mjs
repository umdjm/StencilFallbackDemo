import { a as patchEsm, b as bootstrapLazy } from './core-b9616fb9.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-component",[[1,"my-component"]]]], options);
  });
};

export { defineCustomElements };

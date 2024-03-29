import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      baseUrl: '', 
      serviceWorker: null // disable service workers
    }
  ]
};

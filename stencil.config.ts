import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sten',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'data', dest: 'build/' },
        { src: 'assets', dest: 'assets/' },
      ]
    },
  ],
};

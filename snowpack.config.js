// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
const webpackConfig = require("./webpack.config");
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src": "/",
    "src/static": {static: true, url:"/static"}
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  plugins: [
   /*[ 
     '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          config.plugins.push(webpackConfig);
          return config;
        }      
      },
      ]*/
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};

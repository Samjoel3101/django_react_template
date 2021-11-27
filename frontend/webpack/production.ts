import * as webpack from 'webpack';

import { config as common } from './common';

// Change to true to debug production build times
const plugins = common.plugins || [];

const config: webpack.Configuration = {
  ...common,
  mode: 'production',
  plugins: plugins.concat([

  ]),
}

export default config;
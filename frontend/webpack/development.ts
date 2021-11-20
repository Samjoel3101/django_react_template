import * as webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import { config as common } from "./common";

const plugins = common.plugins || [];

const config: webpack.Configuration = {
    ...common,
    mode: "development",
    watch: true,
    stats: {
      errorDetails: true,
    },
    watchOptions: {
      aggregateTimeout: 100,
      poll: 1000,
    },
    plugins: plugins.concat([
      new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
          files: "./src/**/*",
        },
      }),
    ]),
};

export default config;

const path = require("path");
const webpack = require("webpack");

const dotenv = require('dotenv').config({path: './src/.env'})

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader',
            options: { url: false }
            },
        ] 
    },
    ],
    
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify('Production'),
      GOOGLE_CLIENT_ID: JSON.stringify(dotenv.parsed.REACT_APP_GOOGLE_CLIENT_ID)
    },
  }),
  ],
};

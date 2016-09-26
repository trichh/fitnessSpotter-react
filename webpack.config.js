// Requring packages
var webpack = require('webpack');
var path = require('path');
// debug if NODE_ENV isn't production
var debug = process.env.NODE_ENV !== "production";

module.exports = {
  // Watch ./react/main.js for any changes
  context: path.join(__dirname, "react"),
  // If NODE_ENV is debug use inline-sourcemap and don't minify
  // Otherwise use no dev tool at all
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./main.js",
  module: {
    // Any js file gets ran through babel-loader except node_modules
    // Transpiles react and es6
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  // Update ./public/assets/js/main.min.js when there are changes to the ./react/main.js file
  output: {
    path: __dirname + "/public/assets/js/",
    filename: "main.min.js"
  },
  // If NODE_ENV is debug use no plugins at all
  // If NODE_ENV is production remove duplicate code and minify file
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

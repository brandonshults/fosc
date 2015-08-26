'use strict';

import PATHS from '../project-constants/paths';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default function (jsAndJsxFiles) {
  var config = {
      output: {
        filename: '[name].js',
        path: PATHS.PUBLIC + '/js',
      },
      devtool: 'source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel',
          },
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap'),
          },
        ],
      },
      plugins: [new webpack.optimize.CommonsChunkPlugin('shared.js'), new ExtractTextPlugin('[name].css')],
    },
    entries = {};

  jsAndJsxFiles.forEach(function (file) {
    var name = file.split('.')[1].replace(/^\//, '');
    entries[name] = file;
  });

  config.entry = entries;

  return config;
}
'use strict';

import * as PATHS from '../project-constants/paths';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default function (jsAndJsxFiles) {
  var config = {
      output: {
        filename: '[name].js',
        path: PATHS.PUBLIC,
      },
      devtool: 'source-map',
      module: {
        preLoaders: [
          {
            test: /\.view.jsx?$/,
            loader: 'wrap?view',
          },
        ],
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
      plugins: [new webpack.optimize.CommonsChunkPlugin('shared.js'), new ExtractTextPlugin('[name].css'), new webpack.optimize.UglifyJsPlugin({minimize: true})],
      wrap: {
        view: {
          after: `
            /*************** This was added in a very filthy manner via webpack ***************/
            if (typeof __IS_NODE__ === 'undefined') {
              var Factory = React.createFactory(MainContentComponent),
                  props = JSON.parse(document.getElementById('initial-react-props').innerHTML);
              React.render(Factory(props), document.querySelector('main'));
            }
            /**********************************************************************************/`,
        },
      },
    },
    entries = {};

  // Outside of commons we want a js (and possibly css) bundle for every file.
  // Achieve this by creating entries that strip extensions like:
  // "resources/layout/default-shell/default": "./resources/layout/default-shell/default.shell.jsx"
  jsAndJsxFiles.forEach(function (file) {
    var name = file.split('.')[1].replace(/^\//, '');
    entries[name] = file;
  });

  config.entry = entries;

  return config;
}
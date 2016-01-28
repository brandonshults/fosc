'use strict';
import gulp from 'gulp';
import webpack from 'webpack';
import glob from 'multi-glob';
import path from 'path';
import slash from 'slash';
import * as PATHS from './fosc_modules/project-constants/paths';
import * as FILE_TYPES from './fosc_modules/project-constants/file-types';
import gutil from 'gulp-util';
import generateWebpackConfig from './generate-webpack-config';

gulp.task('default', ['webpack'], function (cb) {
  cb();
});

gulp.task('webpack', function(cb) {
  glob.glob([`./${slash(path.relative('.', PATHS.ROUTES) + '/**/*' + FILE_TYPES.VIEW)}`, `./${slash(path.relative('.', PATHS.LAYOUT) + '/**/*' + FILE_TYPES.SHELL)}`], function (err, jsAndJsxFiles) {
    let webpackConfig = generateWebpackConfig(jsAndJsxFiles);
    webpackConfig.watch = true;

    webpack(webpackConfig, function(webpackError, stats) {
      if (webpackError) {
        throw new gutil.PluginError('webpack', webpackError);
      }
      gutil.log('[webpack]', stats.toString({}));
    });
  });
});

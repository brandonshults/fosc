'use strict';
import gulp from 'gulp';
import webpack from 'webpack';
import glob from 'multi-glob';
import path from 'path';
import slash from 'slash';
import PATHS from './fosc_modules/project-constants/paths';
import FILE_TYPES from './fosc_modules/project-constants/file-types';
import gutil from 'gulp-util';
import generateWebpackConfig from './fosc_modules/project-utils/generate-webpack-config';

gulp.task('default', ['webpack'], function (cb) {
  cb();
});

gulp.task('webpack', function(cb) {
  glob.glob(['./' + slash(path.relative('.', PATHS.ROUTES) + '/**/*' + FILE_TYPES.VIEW), './' + slash(path.relative('.', PATHS.COMPONENTS) + '/**/*' + FILE_TYPES.SHELL)], function (err, jsAndJsxFiles) {
    let webpackConfig = generateWebpackConfig(jsAndJsxFiles);

    webpack(webpackConfig, function(webpackError, stats) {
      if (webpackError) {
        throw new gutil.PluginError('webpack', webpackError);
      }
      gutil.log('[webpack]', stats.toString({}));
      cb();
    });
  });
});

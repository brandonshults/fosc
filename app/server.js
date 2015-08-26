/**
 * This is a hook that is necessary until node can handle es6 on it's own.
 * For now we just use babel.
 *
 * Don't compile node_modules at the root, those come from npm and do their own thing,
 * but other node_modules files are ours
 */
'use strict';

require('babel/register')({
  ignore: '../modules/**/*',
});
require('./server.es6');

/**
 * Install necessary hooks and then launch the real server.
 * For now we just use babel.
 */
'use strict';

// Babel should ignore all vendor modules and scss imports.
require('babel-core/register')({
  ignore: ['./node_modules/**/*', '**/*.scss'],
});

// Node itself should ignore .scss imports.  Only our build process cares about them.  Dirty bit.
require.extensions['.scss'] = function() {
  return null;
};

global.__IS_NODE__ = true;

require('./server.es6');

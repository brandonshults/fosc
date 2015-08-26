'use strict';

import path from 'path';

let root = path.normalize(__dirname + '/../../../'),
  app = path.normalize(root + '/app'),
  frontendResources = path.normalize(app + '/frontend-resources');

export default Object.freeze({
  ROOT: root,
  APP: app,
  FOSC_MODULES: app + '/fosc_modules',
  ROUTES: path.normalize(app + '/routes'),
  COMPONENTS: path.normalize(app + '/components'),
  FRONTEND_RESOURCES: frontendResources,
  IMAGES: path.normalize(frontendResources + '/images'),
  PUBLIC: path.normalize(app + '/public'),
});

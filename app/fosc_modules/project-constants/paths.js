'use strict';

import path from 'path';

let root = path.normalize(__dirname + '/../../../'),
  app = path.normalize(root + '/app'),
  resources = path.normalize(app + '/resources');

export default Object.freeze({
  ROOT: root,
  APP: app,
  FOSC_MODULES: app + '/fosc_modules',
  ROUTES: path.normalize(app + '/routes'),
  RESOURCES: resources,
  COMPONENTS: path.normalize(resources + '/components'),
  IMAGES: path.normalize(resources + '/images'),
  LAYOUT: path.normalize(resources, '/layout'),
  PUBLIC: path.normalize(app + '/public'),
});

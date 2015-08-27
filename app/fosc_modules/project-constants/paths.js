'use strict';

import path from 'path';

let root = path.normalize(__dirname + '/../../../'),
  app = path.normalize(root + '/app'),
  resources = path.normalize(app + '/resources');

export const ROOT = root;
export const APP = app;
export const FOSC_MODULES = app + '/fosc_modules';
export const ROUTES = path.normalize(app + '/routes');
export const RESOURCES = resources;
export const COMPONENTS = path.normalize(resources + '/components');
export const IMAGES = path.normalize(resources + '/images');
export const LAYOUT = path.normalize(resources, '/layout');
export const PUBLIC = path.normalize(app + '/public');
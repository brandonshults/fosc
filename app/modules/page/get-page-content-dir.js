'use strict';
import url from 'url';
import path from 'path';
import PATHS from 'project-constants/paths';

export default (req) => {
  var route = url.parse(req.url).pathname;
  return path.normalize(PATHS.ROUTES + route + '/');
}

'use strict';

import path from 'path';
import * as PATHS from '../project-constants/paths';
import slash from 'slash';

export function getRelativeCssUrl(fileName) {
  return slash(`/public/${path.relative(PATHS.APP, fileName).replace(/\..*?$/, '.css')}`);
}

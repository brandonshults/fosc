'use strict';

import glob from 'glob';
import PATHS from 'project-constants/paths';
import FILE_TYPES from 'project-constants/file-types';

export default function () {
  glob([PATHS.ROUTES + '/**/*' + FILE_TYPES.VIEW, PATHS.COMPONENTS + '/**/*' + FILE_TYPES.SHELL], function (files) {
    console.log(files);
  });
}
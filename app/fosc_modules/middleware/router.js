/**
 * Determine which controller to use and set a reference to it in the response locals.
 * For now this is quite uninteresting, everything uses one controller.  One controller
 * may be enough for most things, but this router exists in case it isn't.
 */
'use strict';

import CONTROLLER from '../project-constants/response-locals';
import defaultController from './default-controller';

export default function (req, res, next) {
  res.locals[CONTROLLER] = defaultController;
  next();
}

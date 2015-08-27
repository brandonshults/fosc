/**
 * Create a basic-page out of the request, then set the page on res.locals for the next middleware.
 */
'use strict';

import BasicPage from '../page/basic-page';
import winston from 'winston';
import * as RESPONSE_LOCALS from '../project-constants/response-locals';

export default (req, res, next) => {
  let page = new BasicPage(req);

  return page.assemblePage()
      .then((assembledPage) => {
        res.locals[RESPONSE_LOCALS.PAGE] = assembledPage;
        return next();
      })
      .catch((err) => {
        winston.error(err);
        return next(new Error(err));
      });
}

'use strict';

import express from 'express';
import router from './fosc_modules/middleware/router';
import viewResolver from './fosc_modules/middleware/view-resolver'
import CONTROLLER from './fosc_modules/project-constants/response-locals';
import * as PATHS from './fosc_modules/project-constants/paths';
import favicon from 'serve-favicon';

var app = express();

app.use(favicon(PATHS.IMAGES + '/favicon.ico'));
app.use(router);

app.use(function (req, res, next) {
  res.locals[CONTROLLER](req, res, next);
});

app.use(viewResolver);

app.listen(8080);

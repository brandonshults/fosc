'use strict';

import express from 'express';
import router from './app/fosc_modules/middleware/router';
import viewResolver from './app/fosc_modules/middleware/view-resolver'
import RESPONSE_LOCALS from './app/fosc_modules/project-constants/response-locals';
import PATHS from './app/fosc_modules/project-constants/paths';
import favicon from 'serve-favicon';

var app = express();

app.use(favicon(PATHS.IMAGES + '/favicon.ico'));
app.use(router);

app.use(function (req, res, next) {
  res.locals[RESPONSE_LOCALS.CONTROLLER](req, res, next);
});

app.use(viewResolver);

app.listen(8080);

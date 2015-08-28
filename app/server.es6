'use strict';

import express from 'express';
import router from './fosc_modules/middleware/router';
import viewResolver from './fosc_modules/middleware/view-resolver'
import * as RESPONSE_LOCALS from './fosc_modules/project-constants/response-locals';
import * as PATHS from './fosc_modules/project-constants/paths';
import favicon from 'serve-favicon';

var app = express();

app.use(favicon(PATHS.IMAGES + '/favicon.ico'));
app.use('/public', express.static(PATHS.PUBLIC, {fallthrough: false}));

app.use(router);

app.use(function (req, res, next) {
  res.locals[RESPONSE_LOCALS.CONTROLLER](req, res, next);
});

app.use(viewResolver);

app.listen(8080);

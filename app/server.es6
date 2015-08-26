'use strict';

import express from 'express';
import router from 'middleware/router';
import viewResolver from 'middleware/view-resolver'
import RESPONSE_LOCALS from 'project-constants/response-locals';
import favicon from 'serve-favicon';

var app = express();

app.use(favicon(__dirname + '/frontend-resources/favicon.ico'));
app.use(router);

app.use(function (req, res, next) {
  res.locals[RESPONSE_LOCALS.CONTROLLER](req, res, next);
});

app.use(viewResolver);

app.listen(8080);

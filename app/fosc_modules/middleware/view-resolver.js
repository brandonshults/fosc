'use strict';

import * as RESPONSE_LOCALS from '../project-constants/response-locals';
import React from 'react';

export default function (req, res, next) {
  res.set('Content-Type', 'text/html');
  res.end(assembleView(res));
}

function assembleView(res) {
  let page = res.locals[RESPONSE_LOCALS.PAGE],
    ShellFactory = React.createFactory(page.shellComponent),
    shellComponentString = React.renderToStaticMarkup(ShellFactory(page.model)),
    Factory = React.createFactory(page.mainContentComponent),
    mainComponentString = React.renderToString(Factory(page.model));

  return new Buffer(`<!doctype html>${shellComponentString.replace(/<main><\/main>/, `<main>${mainComponentString}</main>`)}`);
}
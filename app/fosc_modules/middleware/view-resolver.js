'use strict';

import * as RESPONSE_LOCALS from '../project-constants/response-locals';
import React from 'react';

export default function (req, res, next) {
  res.set('Content-Type', 'text/html');
  res.end(assembleView(res));
}

function assembleView(res) {
  let page = res.locals[RESPONSE_LOCALS.PAGE],
    ContentComponent = page.mainContentComponent,
    ShellComponent = page.shellComponent,
    Factory = React.createFactory(composeComponents(ShellComponent, ContentComponent));
  return new Buffer('<!doctype html>' + React.renderToString(Factory(page.model)));
}

function composeComponents(ShellComponent, ContentComponent) {
  return class ComposedComponent extends React.Component {
    render() {
      return (
        <ShellComponent {...this.props}>
          <ContentComponent {...this.props} />
        </ShellComponent>
      )
    }
  }
}

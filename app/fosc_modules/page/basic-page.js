/**
 * A basic page is assembled by looking for a path under the pages directory that matches the request path.
 */
'use strict';

import getPageContentDir from './get-page-content-dir';
import ShellComponent from '../../resources/layout/default-shell/default.shell';
import findFileOfType from '../project-utils/find-file-of-type';
import * as FILE_TYPES from '../project-constants/file-types';
import url from '../project-utils/url';
import winston from 'winston';

export default class {
  constructor(req) {
    this.contentDir = getPageContentDir(req);
    this.model = undefined;
    this.mainContentComponent = undefined;
    this.shellComponent = undefined;
  }

  assemblePage() {
    return findFileOfType(this.contentDir, FILE_TYPES.VIEW)
      .then((viewFile) => {
        this.mainContentComponent = require(viewFile);

        return findFileOfType(this.contentDir, FILE_TYPES.MODEL)
          .then((modelFile) => {
            return require(modelFile);
          }, (err) => {
            winston.warn(err);
            return {};
          })
          .then((model) => {
            return url.getRelativeCssUrl(viewFile)
              .then((pageCssUrl) => {
                model.pageCssUrl = pageCssUrl;
              })
              .then(() => {
                return url.getRelativeJsUrl(viewFile);
              })
              .then((pageJsUrl) => {
                model.pageJsUrl = pageJsUrl;
                this.model = model;
                return model;
              })
          });
      }, winston.error)
      .then(() => {
        this.shellComponent = ShellComponent;
        return this;
      });
  }

  get mainContentComponent() {
    return this._mainContentComponent;
  }

  set mainContentComponent(MainContentComponent) {
    this._mainContentComponent = MainContentComponent;
  }

  get contentDir() {
    return this._srcDir;
  }

  set contentDir(srcDir) {
    this._srcDir = srcDir;
  }

  get model() {
    return this._model;
  }

  set model(model) {
    this._model = model;
  }

  get shellComponent() {
    return this._shellComponent;
  }

  set shellComponent(shell) {
    this._shellComponent = shell;
  }
}

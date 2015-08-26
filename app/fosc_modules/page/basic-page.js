/**
 * A basic page is assembled by looking for a path under the pages directory that matches the request path.
 */
'use strict';

import getPageContentDir from './get-page-content-dir';
import ShellComponent from '../../components/layout/default-shell/default.shell';
import findAndRequire from '../project-utils/find-and-require';
import FILE_TYPES from '../project-constants/file-types';
import winston from 'winston';

export default class {
  constructor(req) {
    this.contentDir = getPageContentDir(req);
    this.model = undefined;
    this.mainContentComponent = undefined;
    this.shellComponent = undefined;
  }

  assemblePage() {
    return findAndRequire(this.contentDir, FILE_TYPES.MODEL)
        .then((model) => {
          return this.model = model;
        }, winston.warn)
        .then(() => {
          return findAndRequire(this.contentDir, FILE_TYPES.VIEW);
        }, winston.error)
        .then((MainContentComponent) => {
          return this.mainContentComponent = MainContentComponent;
        })
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

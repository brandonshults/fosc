'use strict';

import path from 'path';
import * as PATHS from '../project-constants/paths';
import slash from 'slash';
import fs from 'fs';

export default {
  getRelativeCssUrl,
  getRelativeCssUrlSync,
  getRelativeJsUrl,
  getRelativeJsUrlSync,
}

function getUncheckedRelativeCssUrl(fileName) {
  return slash(`/public/${path.relative(PATHS.APP, fileName).replace(/\..*?$/, '.css')}`);
}

function getRelativeCssUrl(fileName) {
  return new Promise(function (resolve, reject) {
    var url = getUncheckedRelativeCssUrl(fileName);
    fs.stat(PATHS.APP + url, function (err, stat) {
      if (err) {
        resolve(undefined);
      } else {
        resolve(url);
      }
    })
  });
}

function getRelativeCssUrlSync(fileName) {
  var url = getUncheckedRelativeCssUrl(fileName);
  try {
    fs.statSync(PATHS.APP + url);
    return url;
  } catch(err) {
    return undefined;
  }
}

function getUncheckedRelativeJsUrl(fileName) {
  return slash(`/public/${path.relative(PATHS.APP, fileName).replace(/\..*?$/, '.js')}`);
}

function getRelativeJsUrl(fileName) {
  return new Promise(function (resolve, reject) {
    var url = getUncheckedRelativeJsUrl(fileName);
    fs.stat(PATHS.APP + url, function (err, stat) {
      if (err) {
        resolve(undefined);
      } else {
        resolve(url);
      }
    })
  });
}

function getRelativeJsUrlSync(fileName) {
  var url = getUncheckedRelativeJsUrl(fileName);
  try {
    fs.statSync(PATHS.APP + url);
    return url;
  } catch(err) {
    return undefined;
  }
}

'use strict';

import glob from 'multi-glob';
import winston from 'winston';

export default (directory, filePattern) => {
  return new Promise((resolve, reject) => {
    let globPattern = directory + '*' + filePattern;

    glob.glob(globPattern, (err, files) => {
      if (!err) {
        if (files.length > 1) {
          winston.error('Expected one file to match: ' + globPattern + ' but found ' + files.length + '.  Taking our chances and using the first one.');
        } else if (files.length !== 1) {
          return reject('Could not find a file that matches: ' + globPattern);
        }
        return resolve(require(files[0]));
      } else {
        return reject('Could not find a file that matches: ' + globPattern);
      }
    });
  });
}

'use strict';

export default new Promise((resolve, reject) => {
  return resolve({
    title: 'test',
    metaTags: [{name: 'description', content: 'test'}],
  });
});

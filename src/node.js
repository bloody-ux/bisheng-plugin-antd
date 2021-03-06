const path = require('path');
const processDoc = require('./process-doc');
const processDemo = require('./process-demo');

module.exports = (markdownData, { noPreview, babelConfig, pxtorem, staticPath = '../' }, isBuild) => {
  const isDemo = /\/demo$/i.test(path.dirname(markdownData.meta.filename));
  if (isDemo) {
    return processDemo({
      markdownData,
      isBuild,
      noPreview,
      babelConfig: babelConfig && JSON.parse(babelConfig),
      pxtorem,
      staticPath
    });
  }
  return processDoc(markdownData);
};

const { resolve } = require('path');
const webpackConfig = require('./tests/webpack.config.test.js');
process.env.CHROME_BIN = require('puppeteer').executablePath(); /* eslint-disable-line */

// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['progress', 'spec', 'coverage'],
    files: [
      'tests/rax.js',
      'tests/test.js'
    ],

    preprocessors: {
      './tests/test.js': ['webpack', 'sourcemap'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'html', subdir: '.' },
        { type: 'text' },
      ]
    }
  });
};

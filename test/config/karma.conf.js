const webpack = require('../../webpack.config')

delete webpack.entry

module.exports = function (config) {
  config.set({
    frameworks: [
      'mocha',
      'chai-sinon'
    ],

    basePath: '../../',
    files: [
      'test/config/mocha-globals.js',
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.js': ['webpack']
    },

    webpack,

    reporters: ['dots', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false
  })
}

// ucumDemo-conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ucumDemo-spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
};
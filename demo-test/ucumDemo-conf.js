// ucumDemo-conf.js
var port = 3003;
exports.config = {
  port: port,
  framework: 'jasmine',
  specs: ['ucumDemo-spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
};

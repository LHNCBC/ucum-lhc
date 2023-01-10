const { defineConfig } = require('cypress');
//const { config } = require('./package.json');

module.exports = defineConfig({
  videosFolder: 'demo-test/cypress/videos',
  video: false,
  screenshotsFolder: 'demo-test/cypress/screenshots',
  fixturesFolder: 'demo-test/cypress/fixtures',
  downloadsFolder: 'demo-test/cypress/downloads',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./demo-test/cypress/plugins/index.js')(on, config)
    },
    specPattern: 'demo-test/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'demo-test/cypress/support/index.js',
    //baseUrl: 'http://localhost:'+config.testPort
  },
});

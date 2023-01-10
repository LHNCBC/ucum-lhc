/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const path = require('path');
const fs = require('fs');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    /**
     *  Adds a logging function as a Cypress task.
     */
    // https://stackoverflow.com/a/52077306
    log (message) {
      console.log(message);
      return null;
    },

    /**
     *  Deletes a file from the download folder if the file exists there.
     * @param filename the filename, relative to the downloads folder.
     */
    deleteDownloadFile(filename) {
      if (/\.\./.test(filename)) {
        throw new Error('filename should be a relative path to a file in the downloads folder.');
      }
      const fullPath = path.join(config.downloadsFolder, filename);
      if (fs.existsSync(fullPath))
        fs.unlinkSync(fullPath);
      return null;
    },


    /**
     *  Checks that a file exists in the download folder, waiting a bit for it
     *  to arrive.
     * @param options.downloadFile the filename, relative to the downloads folder, of the downloaded file.
     * @param options.expectedFile the filename, relative to the fixtures
     *  folder, of the file containing the expected content of the downloads
     *  file.
     */
    checkForDownload(options) {
      let {downloadFile, expectedFile} = options;

      if (/\.\./.test(downloadFile)) {
        throw new Error('filename should be a relative path to a file in the downloads folder.');
      }
      const downloadFullPath = path.join(config.downloadsFolder, downloadFile);
      const expectedFullPath = path.join(config.fixturesFolder, '../..', expectedFile);
      const expectedContent = fs.readFileSync(expectedFullPath).toString();
      const rtnPromise = new Promise((resolve, reject) => {
        function fileTest() {
          if (fs.existsSync(downloadFullPath)) {
            const actualContent = fs.readFileSync(downloadFullPath).toString();
            if (expectedContent == actualContent)
              resolve(true);
            else {
              // Instead of rejecting, throw an exception so Cypress will show
              // the message.
              throw new Error('Expected download file content did not match the actual content');
            }
          }
          else
            setTimeout(fileTest, 1000);
        }
        fileTest();
      });
      return rtnPromise;
    }
  })
}

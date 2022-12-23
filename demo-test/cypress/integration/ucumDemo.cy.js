// Protractor tests

const path = require('path');
const fs = require('fs');
const EC = protractor.ExpectedConditions;
describe('UCUM Demo page tests', function(){
  browser.waitForAngularEnabled(false);

  it('should start out displaying the converter tab on request', function(){
    browser.get('http://localhost:3003/demo.html#converter');
    // verify that the converter tab page is initially active
    let ctab = element(by.id('conversion-link'));
    expect(ctab.isDisplayed()).toBe(true);
  });

  it('should have a title', function(){
    expect(browser.getTitle()).toEqual('UCUM-LHC Demo');
  });

  it('should start out displaying the validation tab by default', function(){
    browser.get('http://localhost:3003/demo.html');
    // verify that the validator tab page is initially active
    let vtab = element(by.id('validation-link'));
    expect(vtab.isDisplayed()).toBe(true);
  });

  describe('Validation', function() {
    it('should validate a unit', function() {
      browser.get('http://localhost:3003/demo.html');
      browser.wait(EC.visibilityOf($("#valString")), 2000);
      $('#valString').sendKeys('cm');
      browser.wait(EC.visibilityOf($("#searchResults")), 2000);
      $('#valString').sendKeys(protractor.Key.TAB);
      browser.wait(EC.textToBePresentInElement($('#validationString'),
        'cm (centimeter) is a valid unit expression.'), 2000);
    });
  });

  describe('Conversion', function() {
    it('should convert a unit', function() {
      browser.get('http://localhost:3003/demo.html#converter');
      browser.wait(EC.visibilityOf($("#convertFrom")), 2000);
      $('#convertFrom').sendKeys('m');
      $('#convertFrom').sendKeys(protractor.Key.TAB);
      $('#convertTo').sendKeys('cm');
      $('#convertTo').sendKeys(protractor.Key.TAB);
      browser.wait(EC.textToBePresentInElementValue($('#convertToNum'),
        '100'), 2000);
    });
  });

  describe('Batch validation', function() {
    it('should process a CSV file', function() {
      browser.get('http://localhost:3003/demo.html');
      browser.wait(EC.visibilityOf($("#valString")), 2000);

      var outputFile = path.join(require('os').tmpdir(), 'UnitStringValidations.csv');
      // Delete any existing copy of outputFile, so we can know when it has been
      // created.
      if (fs.existsSync(outputFile))
        fs.unlinkSync(outputFile);
      browser.wait(()=>{ return !fs.existsSync(outputFile) }, 2000);
      // Upload
      $('#inputfile').sendKeys(require('path').join(__dirname, 'batch-test-file.csv'));
      $('#colName').sendKeys('unit');
      $('#startValidation').click();
      let expected = fs.readFileSync(path.join(__dirname, 'batch-test-output.csv')).toString();
      // Wait for download to happen.
      browser.wait(()=>{ return fs.existsSync(outputFile) && fs.statSync(outputFile).size>0 }, 2000).then(function () {
        let actual = fs.readFileSync(outputFile).toString();
        // Adjust line endings
        actual = actual.replace(new RegExp(require('os').EOL, 'g'), "\n");
        expect(actual).toEqual(expected);
      });
    });
  });
});

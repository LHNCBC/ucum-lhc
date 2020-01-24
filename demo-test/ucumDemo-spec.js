// Protractor tests

var EC = protractor.ExpectedConditions;
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
      browser.wait(EC.visibilityOf($("#valString")), 5000);
      $('#valString').sendKeys('cm');
      browser.wait(EC.visibilityOf($("#searchResults")), 5000);
      $('#valString').sendKeys(protractor.Key.TAB);
      browser.wait(EC.textToBePresentInElement($('#validationString'),
        'cm (centimeter) is a valid unit expression.'), 5000);
    });
  });

  describe('Conversion', function() {
    it('should convert a unit', function() {
      browser.get('http://localhost:3003/demo.html#converter');
      browser.wait(EC.visibilityOf($("#convertFrom")), 5000);
      $('#convertFrom').sendKeys('m');
      $('#convertFrom').sendKeys(protractor.Key.TAB);
      $('#convertTo').sendKeys('cm');
      $('#convertTo').sendKeys(protractor.Key.TAB);
      browser.wait(EC.textToBePresentInElementValue($('#convertToNum'),
        '100'), 2000);
    });
  });

});

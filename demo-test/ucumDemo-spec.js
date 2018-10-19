// ucumDemo-spec.js
describe('UCUM Demo page tests', function(){
  browser.waitForAngularEnabled(false);

  it('should start out displaying the converter tab on request', function(){
    browser.get('http://ceb-lmericle-rh7:3003/demo.html#converter');
    // verify that the converter tab page is initially active
    let ctab = element(by.id('conversion-link'));
    expect(ctab.isDisplayed()).toBe(true);
  });

  it('should have a title', function(){
    expect(browser.getTitle()).toEqual('UCUM-LHC Demo');
  });

  it('should start out displaying the validation tab by default', function(){
    browser.get('http://ceb-lmericle-rh7:3003/demo.html');
    // verify that the validator tab page is initially active
    let vtab = element(by.id('validation-link'));
    expect(vtab.isDisplayed()).toBe(true);
  });

});
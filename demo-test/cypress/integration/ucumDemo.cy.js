const path = require('path');

describe('UCUM Demo page tests', function(){

  it('should start out displaying the converter tab on request', function(){
    cy.visit('docs/demo.html#converter');
    // verify that the converter tab page is initially active
    cy.get('#conversion-link').should('be.visible');
  });

  it('should have a title', function(){
    cy.title().should('equal', 'UCUM-LHC Demo');
  });

  it('should start out displaying the validation tab by default', function(){
    cy.visit('docs/demo.html');
    // verify that the validator tab page is initially active
    cy.get('.tab.nav.nav-tabs li:first-child').should('have.class', 'active');
  });


  describe('Validation', function() {
    it('should validate a unit', function() {
      cy.visit('docs/demo.html');
      cy.get("#valString").should('be.visible').type('cm');
      cy.get("#searchResults").should('be.visible');
      cy.get('#valString').type('{enter}');
      // Note the double space following the unit.  Not sure why that is there,
      // but it was there before this update.
      cy.get('#validationString').should('have.text', 'cm (centimeter)  is a valid unit expression.');
    });
  });

  describe('Conversion', function() {
    it('should convert a unit', function() {
      cy.visit('docs/demo.html#converter');
      cy.get("#convertFrom").should('be.visible');
      cy.get('#convertFrom').type('m{enter}');
      cy.get('#convertTo').type('cm{enter}');
      cy.get('#convertToNum').should('have.value', '100');
    });
  });

  describe('Batch validation', function() {
    it('should process a CSV file', function() {
      cy.visit('docs/demo.html');
      cy.get("#valString").should('be.visible');
      let outputFileName = 'UnitStringValidations.csv';
      // Delete any existing copy of outputFile, so we can know when it has been
      // created.
      cy.task('deleteDownloadFile', outputFileName);
      // Upload
      cy.get('#inputfile').selectFile('demo-test/batch-test-file.csv');
      cy.get('#colName').type('unit');
      cy.get('#startValidation').click();
      // Wait for download to happen.
      cy.task('checkForDownload', {downloadFile: outputFileName, expectedFile: 'batch-test-output.csv'});
    });
  });
});

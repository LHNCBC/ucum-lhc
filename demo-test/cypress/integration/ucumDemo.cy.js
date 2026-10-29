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
    cy.get('.tab.nav.nav-tabs li:first-child a').should('have.class', 'active');
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

    it('should preserve error message on second validation', function() {
      cy.visit('docs/demo.html');
      cy.get("#valString").should('be.visible').type('acr').type('{enter}');
      cy.get('#validationString').should('contain.text', 'acr is not a valid UCUM code.');
      cy.get("#valString").clear().type('/acr').type('{enter}');
      cy.get('#validationString').should('contain.text', 'acr is not a valid UCUM code.');
      cy.get("#valString").clear().type('{enter}');
      cy.get('#validationString').should('be.empty');
    });
  });

  describe('Conversion', function() {
    /**
     * Opens the converter tab with its initial state ("from" and "to"
     * numbers set to 1, no units, no molecular weight or charge).
     * cy.visit() does not reload the page if the URL (including the hash)
     * has not changed, so the page is reloaded explicitly to discard the
     * state left by previous tests (testIsolation is false).
     */
    function openFreshConverter() {
      cy.visit('docs/demo.html#converter');
      cy.reload();
      cy.get('#convertFrom').should('be.visible');
    }

    /**
     * Enters a unit code into a converter unit field.  Waits for the
     * autocompleter's search results before pressing Enter, so that the list
     * does not open after the code is entered and cover other fields (such as
     * the molecular weight and charge fields).
     * @param {string} fieldSelector the selector of the unit field.
     * @param {string} unitCode the unit code to enter.
     */
    function enterUnit(fieldSelector, unitCode) {
      cy.get(fieldSelector).type(unitCode);
      cy.get('#searchResults').should('be.visible');
      cy.get(fieldSelector).type('{enter}');
      cy.get('#searchResults').should('not.be.visible');
    }

    /**
     * Replaces the value of an input field and presses Enter.
     * @param {string} fieldSelector the selector of the input field.
     * @param {string} value the new value.
     */
    function replaceValue(fieldSelector, value) {
      cy.get(fieldSelector).clear();
      cy.get(fieldSelector).type(value + '{enter}');
    }

    /**
     * Opens a fresh converter and enters the units of a conversion that
     * requires an option (molecular weight or charge), so that the option's
     * field is displayed.
     * @param {Object} testCase an object with the "from" unit code (from),
     *  the "to" unit code (to), and the selector of the option's field
     *  (field).
     */
    function setUpOptionConversion(testCase) {
      openFreshConverter();
      enterUnit('#convertFrom', testCase.from);
      enterUnit('#convertTo', testCase.to);
      cy.get(testCase.field).should('be.visible');
    }

    it('should convert a unit', function() {
      cy.visit('docs/demo.html#converter');
      cy.get("#convertFrom").should('be.visible');
      cy.get('#convertFrom').type('m{enter}');
      cy.get('#convertTo').type('cm{enter}');
      cy.get('#convertToNum').should('have.value', '100');
    });

    it('should show the weight and charge fields if needed', function() {
      cy.visit('docs/demo.html#converter');
      cy.get('#convertToNum').clear();
      cy.get('#convertFromNum').clear().type('1');
      cy.get('#convertFrom').clear().type('eq2.mol.g3{enter}');
      cy.get('#convertTo').clear().type('eq.mol3.g2{enter}');
      cy.get('#moleWeight').should('be.visible');
      cy.get('#moleWeight').type('1{enter}');
      cy.get('#charge').should('be.visible');
      cy.get('#charge').type('1{enter}');
      cy.get('#convertToNum').should('have.value', '1');
    });

    [
      {name: 'molecular weight', from: 'g',
        to: 'mol', otherTo: 'kg', field: '#moleWeight', validValue: '2',
        result: '0.5', resultFor3: '1.5', reverseResultFor3: '6',
        rangeMsg: 'The molecular weight must be a finite number greater than 0.',
        extraInvalidValues: []},
      {name: 'charge', from: 'mol', to: 'eq',
        otherTo: 'mmol', field: '#charge', validValue: '2', result: '2',
        resultFor3: '6', reverseResultFor3: '1.5',
        rangeMsg: 'The charge must be a positive integer.',
        extraInvalidValues: ['1.5']}
    ].forEach(function(testCase) {
      const rangeMsg = testCase.rangeMsg;
      const invalidValues = [
        {value: '0', msg: rangeMsg},
        {value: '-1', msg: rangeMsg},
        {value: '1e400', msg: rangeMsg},
        {value: 'Infinity', msg: '"Infinity" is not a valid number.'},
        {value: 'abc', msg: '"abc" is not a valid number.'},
        // Accepted by Number() (as 16) but not a decimal number.
        {value: '0x10', msg: '"0x10" is not a valid number.'}
      ].concat(testCase.extraInvalidValues.map(
        value => ({value: value, msg: rangeMsg})
      ));
      // Each value is followed by a valid one, which restores the result, so
      // the values are checked in one test without reloading the page.
      it(`should show a message for each invalid ${testCase.name}`,
        function() {
          setUpOptionConversion(testCase);
          // Get a valid result first, so that clearing a stale result is
          // tested.
          cy.get(testCase.field).type(testCase.validValue + '{enter}');
          cy.get('#convertToNum').should('have.value', testCase.result);
          invalidValues.forEach(function(invalid) {
            cy.log(`Invalid value: ${invalid.value}`);
            replaceValue(testCase.field, invalid.value);
            cy.get('#convMsg').should('have.text', invalid.msg);
            cy.get(testCase.field).should('have.class', 'invalid');
            cy.get('#convertToNum').should('have.value', '');
            replaceValue(testCase.field, testCase.validValue);
            cy.get('#convMsg').should('be.empty');
            cy.get(testCase.field).should('not.have.class', 'invalid');
            cy.get('#convertToNum').should('have.value', testCase.result);
          });
        });

      [
        {value: '-1', msg: rangeMsg},
        // ucum-lhc would accept "0x10" as 16, so this checks that the demo
        // itself prevents the conversion.
        {value: '0x10', msg: '"0x10" is not a valid number.'}
      ].forEach(function(invalid) {
        // Changing the "to" number reverses the direction of the conversion,
        // which must be kept once the invalid value is corrected.
        [
          {changedField: '#convertFromNum', resultField: '#convertToNum',
            result: testCase.resultFor3},
          {changedField: '#convertToNum', resultField: '#convertFromNum',
            result: testCase.reverseResultFor3}
        ].forEach(function(direction) {
          it(`should not convert with an invalid ${testCase.name} ` +
            `(${invalid.value}) when ${direction.changedField} is changed`,
            function() {
              setUpOptionConversion(testCase);
              cy.get(testCase.field).type(invalid.value + '{enter}');
              cy.get('#convMsg').should('have.text', invalid.msg);
              cy.get(testCase.field).should('have.class', 'invalid');
              // The invalid value left in the field is reported again when
              // another field triggers a conversion.
              replaceValue(direction.changedField, '3');
              cy.get('#convMsg').should('have.text', invalid.msg);
              cy.get(testCase.field).should('have.class', 'invalid');
              cy.get(direction.resultField).should('have.value', '');
              replaceValue(testCase.field, testCase.validValue);
              cy.get('#convMsg').should('be.empty');
              cy.get(testCase.field).should('not.have.class', 'invalid');
              cy.get(direction.changedField).should('have.value', '3');
              cy.get(direction.resultField)
                .should('have.value', direction.result);
            });
        });
      });

      it(`should remove the highlighting of the ${testCase.name} field when ` +
        'it is reset', function() {
        setUpOptionConversion(testCase);
        cy.get(testCase.field).type('-1{enter}');
        cy.get(testCase.field).should('have.class', 'invalid');
        cy.get('#convertTo').clear();
        enterUnit('#convertTo', testCase.otherTo);
        cy.get(testCase.field).should('not.be.visible');
        cy.get('#convertTo').clear();
        enterUnit('#convertTo', testCase.to);
        cy.get(testCase.field).should('be.visible')
          .and('have.value', '')
          .and('not.have.class', 'invalid');
      });

    });

    // When both option fields are displayed, an invalid value left in one of
    // them is reported when the other one is changed.
    it('should report an invalid molecular weight when a valid charge is ' +
      'entered', function() {
      setUpOptionConversion({from: 'g', to: 'eq', field: '#moleWeight'});
      cy.get('#charge').should('be.visible');
      replaceValue('#moleWeight', '-1');
      replaceValue('#charge', '2');
      cy.get('#convMsg').should('have.text',
        'The molecular weight must be a finite number greater than 0.');
      cy.get('#moleWeight').should('have.class', 'invalid');
      cy.get('#charge').should('not.have.class', 'invalid');
      cy.get('#convertToNum').should('have.value', '');
      replaceValue('#moleWeight', '2');
      cy.get('#convMsg').should('be.empty');
      cy.get('#moleWeight').should('not.have.class', 'invalid');
      cy.get('#convertToNum').should('have.value', '1');
    });

    [
      {field: '#convertFromNum', resultField: '#convertToNum',
        validValue: '1', result: '100', otherValue: '300', otherResult: '3'},
      {field: '#convertToNum', resultField: '#convertFromNum',
        validValue: '100', result: '1', otherValue: '3', otherResult: '300'}
    ].forEach(function(testCase) {
      it(`should show a message for each invalid number in ${testCase.field}`,
        function() {
          openFreshConverter();
          enterUnit('#convertFrom', 'm');
          enterUnit('#convertTo', 'cm');
          cy.get('#convertToNum').should('have.value', '100');
          ['Infinity', '1e400', 'abc', '12abc', '0x10', '1e'].forEach(
            function(invalidValue) {
              cy.log(`Invalid value: ${invalidValue}`);
              replaceValue(testCase.field, invalidValue);
              cy.get('#convMsg').should('have.text',
                `"${invalidValue}" is not a valid number.`);
              cy.get(testCase.field).should('have.class', 'invalid');
              cy.get(testCase.resultField).should('have.value', '');
              replaceValue(testCase.field, testCase.validValue);
              cy.get('#convMsg').should('be.empty');
              cy.get(testCase.field).should('not.have.class', 'invalid');
              cy.get(testCase.resultField)
                .should('have.value', testCase.result);
            });
        });

      it(`should remove the highlighting of ${testCase.field} when it is ` +
        'filled with a conversion result', function() {
        openFreshConverter();
        enterUnit('#convertFrom', 'm');
        enterUnit('#convertTo', 'cm');
        cy.get('#convertToNum').should('have.value', '100');
        replaceValue(testCase.field, 'abc');
        cy.get(testCase.field).should('have.class', 'invalid');
        replaceValue(testCase.resultField, testCase.otherValue);
        cy.get('#convMsg').should('be.empty');
        cy.get(testCase.field).should('have.value', testCase.otherResult)
          .and('not.have.class', 'invalid');
      });
    });

    // A number is checked as soon as it is entered, and an invalid number
    // prevents a conversion after both units have been entered.
    it('should report an invalid number before the units are entered and ' +
      'not convert it', function() {
      openFreshConverter();
      replaceValue('#convertFromNum', 'abc');
      cy.get('#convMsg').should('have.text', '"abc" is not a valid number.');
      cy.get('#convertFromNum').should('have.class', 'invalid');
      enterUnit('#convertFrom', 'm');
      enterUnit('#convertTo', 'cm');
      // Validating a unit clears the message, but the field stays
      // highlighted and no conversion is performed.
      cy.get('#convertFromNum').should('have.class', 'invalid');
      cy.get('#convertToNum').should('have.value', '');
    });

    it('should accept a number with an exponent', function() {
      openFreshConverter();
      enterUnit('#convertFrom', 'm');
      enterUnit('#convertTo', 'cm');
      replaceValue('#convertFromNum', '1.5e2');
      cy.get('#convMsg').should('be.empty');
      cy.get('#convertFromNum').should('not.have.class', 'invalid');
      cy.get('#convertToNum').should('have.value', '15000');
    });

    // The "to" number is cleared by the program when the first unit is
    // entered, so it must not be used as the source of a later conversion.
    it('should not convert from a number field cleared by the program',
      function() {
        openFreshConverter();
        enterUnit('#convertFrom', 'm');
        cy.get('#convertToNum').should('have.value', '');
        cy.get('#convertFromNum').clear().blur();
        enterUnit('#convertTo', 'cm');
        cy.get('#convertFrom').clear().blur();
        enterUnit('#convertFrom', 'm');
        cy.get('#convMsg').should('be.empty');
        cy.get('#convertToNum').should('have.value', '')
          .and('not.have.class', 'invalid');
        cy.get('#convertFromNum').should('have.value', '');
        // Entering a number converts it as usual.
        replaceValue('#convertFromNum', '2');
        cy.get('#convertToNum').should('have.value', '200');
      });

    it('should show a message for a non-finite conversion result', function() {
      openFreshConverter();
      replaceValue('#convertFromNum', '-1');
      enterUnit('#convertFrom', 'W');
      enterUnit('#convertTo', 'B[W]');
      cy.get('#convMsg').should('contain.text',
        'the result is not a finite number');
      cy.get('#convertToNum').should('have.value', '');
    });

    // [p'diop] conversions failed with a TypeError before ucum-lhc 8.0.1.
    ['%[slope]', "[p'diop]"].forEach(function(toUnit) {
      it(`should convert degrees to ${toUnit}`, function() {
        openFreshConverter();
        replaceValue('#convertFromNum', '45');
        enterUnit('#convertFrom', 'deg');
        enterUnit('#convertTo', toUnit);
        cy.get('#convertToNum').should('have.value', '100');
      });
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

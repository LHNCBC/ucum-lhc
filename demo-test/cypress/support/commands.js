// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

// Type in a search box and wait until search queries are finished.
// (Copied from lforms)
Cypress.Commands.add(
  'typeAndWait',
  { prevSubject: 'optional' },
  (subject, term) => {
    // Intercept the last query which would contain '={term}'.
    cy.intercept('GET', '*=' + term + '**').as('lastSearchQuery');
    cy.wrap(subject).type(term);
    cy.wait('@lastSearchQuery');
    // It's guaranteed that the queries have returned. But there was still a slight
    // chance that the next Cypress command catches some element before the application
    // finishes updating DOM.
    cy.wait(100);
  }
);

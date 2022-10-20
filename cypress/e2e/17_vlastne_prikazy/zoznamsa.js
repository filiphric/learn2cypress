/// <reference types="cypress" />





it('prihlasenie pomocou custom commandu', () => {


  cy.loginUser('lukas@lukas.sk', 'lukas')

  cy
    .visit('/')

  
});
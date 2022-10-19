/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/63760359330'); // doplň si adresu svojho boardu
   

});

// ⚠️ pred začiatkom testovania si prosím vytvor dva zoznamy
// použi príkaz .contains()
it('pridanie položky do druhého zoznamu', () => {

  cy.get('.List_addTask')
  .eq(1)
  .click()

  cy.get('[data-id="62020800607"] > .TextArea')
  .click()
  .type('test task{enter}')

})

it.only('nastavenie timeoutu', () => {

  cy.get('.List', {timeout: 300000})
  .should('have.length','2')

})
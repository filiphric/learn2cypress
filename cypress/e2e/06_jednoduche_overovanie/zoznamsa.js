/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/63760359330'); // doplň si adresu svojho boardu

})

it('vytvorenie listu', () => {

  cy.get('.CreateList_title')
   .click()
    
   cy.get('.CreateList_input')
   .click()
   .type('newlist{enter}')


})

it('overenie poctu listov', () => {

cy.get('.List')
.should('have.length', '2')


})

it('odstranenie listu', () => {

  cy.get('[data-id="36534120566"] > .dropdown > .options')
  .click()

  cy.get('[data-id="36534120566"] > .dropdown > #myDropdown > .delete')
  .click()
})

it('overenie odskrtnutia', () => {

  cy.get('.checkmark')
  .uncheck({force: true})

  cy.get('.checkmark')
  .should('not.be.checked')


})

it('overenie názvu listu', () => {

 cy.get('.List > .Input')
 .should('have.value','new list')

})

it.only('overenie textu na pridanie tasku (add card)', () => {

  cy.get('.CreateList_title')
  .should('contain.text', 'Add a list...')
})
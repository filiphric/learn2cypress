/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353')

})

it('vytvorenie tasku', () => {

  cy
    .contains('Add a card')
    .click();

  cy
    .get('[data-id="newTaskTitle"]')
    .type('buy milk{enter}')

  cy
    .get('.Task')
    .should('be.visible')


})

it('overenie poctu taskov', () => {

  cy
    .contains('Add a card')
    .click();

  cy
    .get('[data-id="newTaskTitle"]')
    .type('wash dishes{enter}')

  cy
    .get('.Task')
    .should('have.length', 2)

})

it('overenie zaskrtnutia', () => {

  cy
    .get('.Task input')
    .check()

  cy
    .get('.Task label')
    .should('have.class', 'completed')

    cy
    .get('.Task input')
    .should('be.checked')


})

it('overenie názvu listu', () => {

  cy
    .get('.boardDetail_title')
    .should('have.value', 'new board')
  
})
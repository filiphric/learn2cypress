/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/');

});

it.only('nacitanie zoznamu boardov', () => {

  cy
    .get('.board_item')
    .should('have.length', 0)

})

it('vytvorenie noveho boardu', () => {

  cy
    .get('#new-board')
    .click()

  cy
    .get('.board_addBoard')
    .type('nova zahrada')
  
  cy
    .contains('Save')
    .click()

})
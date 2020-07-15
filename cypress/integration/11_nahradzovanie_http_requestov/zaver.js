/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

  cy
    .route('/api/boards', [])
    .as('boardList')

  cy
    .visit('/');

});

it.only('prazdny zoznam boardov', () => {

})

it('chybova hlaska pri vytvoreni boardu', () => {

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
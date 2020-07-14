/// <reference types="cypress" />

it('oznacovanie elementov', () => {

  cy
    .visit('/');

  cy
    .get('.board_newItem')

  cy
    .get('#new-board')

  cy
    .get('[data-cy="create-board"]')

  cy
    .contains('My new board')

  cy
    .get('.board_title')

  cy
    .get('.board_item .board_title')

  cy
    .get('#new-board .board_title')

})
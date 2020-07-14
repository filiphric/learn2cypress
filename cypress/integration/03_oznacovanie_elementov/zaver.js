/// <reference types="cypress" />

it('oznacovanie elementov', () => {

  cy
    .visit('/');

  // create new
  cy
    .get('.board_newItem')

  cy
    .get('#new-board')

  cy
    .get('[data-cy="create-board"]')


  // heading
  cy
    .contains('My new board')

  cy
    .get('.board_title')

  cy
    .get('.board_item .board_title')
  
  cy
    .get('.board_newItem .board_title')

})
/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

  // cy
  //   .route('/api/boards', 'fx:twoBoards')
  //   .as('boardList')

  cy
    .route({
      method: 'POST',
      url: '/api/tasks',
      response: 'error occurred',
      status: 500
    })

  cy
    .visit('/');

});

it('zoznam dvoch boardov z fixture', () => {

})

it('zoznam boardov s hviezdickou z fixture', () => {

})

it.only('chyba pri vytvoreni tasku', () => {

  cy
    .get('.board_item')
    .eq(0)
    .click()

  cy
    .contains('Add a card')
    .click()

  cy
    .get('.List .TextArea')
    .type('chlieb{enter}')

  cy
    .get('#errorMessage')
    .should('be.visible')
    .should('contain.text', 'There was an error creating task')

})
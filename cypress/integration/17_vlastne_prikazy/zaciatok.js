/// <reference types="cypress" />

beforeEach(() => {

  cy
    .request('DELETE', '/api/tasks')

})

it('vytvorenie noveho tasku', () => {

  cy
    .visit('/board/11613338823')

  cy
    .contains('Add a card')
    .click()

  cy
    .get('[data-id="newTaskTitle"]')
    .type('vymyslieť názov{enter}')
  
});
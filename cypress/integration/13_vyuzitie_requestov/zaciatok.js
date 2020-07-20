/// <reference types="cypress" />

beforeEach( () => {

  cy
    .request('POST', '/api/reset')

  cy
    .request('POST', '/api/boards', {
      name: 'novy board'
    }).then( board => {

      Cypress.env('board', board.body)

    })

})

it('otvorenie novovytvoreneho boardu', () => {

   cy
    .visit('/board/' + Cypress.env('board')['id']);

  cy
    .get('.boardDetail_title')
    .should('have.value', Cypress.env('board')['name'])

})
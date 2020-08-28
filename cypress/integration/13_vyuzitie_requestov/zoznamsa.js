/// <reference types="cypress" />

beforeEach( () => {

  cy
    .request('POST', '/api/reset')

  cy
    .request('POST', '/api/boards', {
      name: 'novy board'
    }).then( boards => {
      Cypress.env('board', boards.body )
    })

})

it('vytvorenie zoznamu novovytvorenom boarde', () => {

  cy
    .visit('/board/' + Cypress.env('board')['id']);

})
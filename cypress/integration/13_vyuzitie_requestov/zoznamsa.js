/// <reference types="cypress" />

beforeEach( () => {

  cy
    .request('POST', '/api/reset')

  cy
    .request('POST', '/api/boards', {
      name: 'board vytvoreny cez api'
    }).then( boards => {
      Cypress.env('board', boards.body )
    })

})

it('vytvorenie zoznamu v tasku novovytvoreneho boardu', () => {

  cy
    .visit('/boards/' + Cypress.env('board')['id']);
    
})
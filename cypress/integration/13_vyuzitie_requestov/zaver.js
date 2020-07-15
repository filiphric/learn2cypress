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

it('otvorenie novovytvoreneho boardu', () => {

  cy
    .visit('/boards/' + Cypress.env('board')['id']);

  cy
    .get('.board_item .board_title')
    .should('contains.text', Cypress.env('board')['name'])
    
})
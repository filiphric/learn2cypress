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
    .request({
      method: 'POST',
      url: '/api/lists',
      body: {
        title: 'novy list'
      }
    })

  cy
    .visit('/board/' + Cypress.env('board')['id']);
    
})
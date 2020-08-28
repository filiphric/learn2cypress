/// <reference types="cypress" />

beforeEach( () => {

  cy
    .request('POST', '/api/reset')

  cy
    .request('POST', '/api/boards', {
      name: 'board vytvoreny cez api'
    })

})

it('otvorenie novovytvoreneho boardu', () => {

   cy
    .visit('/')

})
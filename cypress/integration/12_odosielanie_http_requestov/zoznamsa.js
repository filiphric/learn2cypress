/// <reference types="cypress" />

const boardName = 'stary board'

beforeEach( () => {

  cy
    .request('POST', '/api/reset')

  cy
    .request('POST', '/api/boards', {
      name: boardName
    })
  
})

it('vytvorenie boardu cez api a overenie', () => {

  cy
    .visit('/')

  cy
    .contains(boardName)

})
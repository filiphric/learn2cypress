/// <reference types="cypress" />

it('otvorenie novovytvoreneho boardu', () => {

  cy
    .request('POST', '/api/boards', {
      name: 'board vytvoreny cez api'
    })

  cy
    .visit('/');
    
})
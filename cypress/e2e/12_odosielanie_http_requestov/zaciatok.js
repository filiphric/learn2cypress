/// <reference types="cypress" />

it('vytvorenie boardu', () => {

  cy
    .visit('/');

})

describe('aplikacia v zresetovanom stave', () => {

  it('vytvorenie noveho boardu', () => {

    cy
      .visit('/')

    cy
      .get('#new-board')
      .click()

    cy
      .get('.board_addBoard')
      .type('novy projekt{enter}')

  })

})

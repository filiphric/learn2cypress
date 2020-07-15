/// <reference types="cypress" />

beforeEach( () => {
  
  cy
    .server()

  cy
    .route('/api/boards')
    .as('boardList')

  cy
    .route('POST', '/api/boards')
    .as('createBoard')

  cy
    .visit('/');

});

it('nacitanie zoznamu boardov', () => {
    
  cy
    .wait('@boardList')

  cy
    .get('.board_item')
    .should('have.length', 0)

})

it('vytvorenie noveho boardu', () => {

  cy
    .get('#new-board')
    .click()

  cy
    .get('.board_addBoard')
    .type('nova zahrada')
  
  cy
    .contains('Save')
    .click()

  cy
    .wait('@createBoard').then( board => {

      expect(board.status).to.eq(201)
      expect(board.request.body.name).to.eq('nova zahrada')
      expect(board.response.body.name).to.eq('nova zahrada')
      expect(board.response.body.starred).to.be.false

    })

})
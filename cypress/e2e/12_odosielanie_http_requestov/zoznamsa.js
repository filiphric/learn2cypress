/// <reference types="cypress" />

beforeEach( () => {

    
  cy.request('DELETE', '/api/boards')

  cy.request('POST', '/api/boards',{

  name:'newboard'
    


  })



  
  
  // pred začiatkom testu vymaž všetky boardy




})

it('vytvorenie boardu cez api a overenie', () => {

  cy
    .visit('/')
    cy.get('.board_title')
    .should('contain.text', 'newboard')


    cy.get('.board')
    .should('have.length', '2')
})
/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

  cy
    .route({
      method: 'POST', 
      url: '/api/tasks'
    })
    .as('createTask')

  cy
    .route({
      method: 'DELETE', 
      url: '/api/lists/*'
    })
    .as('deleteList')

  cy
    .route({
      method: 'PATCH', 
      url: '/api/tasks/*'
    })
    .as('editTask')

  cy
    .visit('/board/25619573353');

});

it('vytvorenie tasku', () => {

  cy
    .contains('Add a card')
    .click()

  cy
    .get('.List .TextArea')
    .type('banány{enter}')

  cy
    .wait('@createTask')
    .its('status')
    .should('eq', 201)

})

it('odstránenie zoznamu', () => {

  cy
    .get('.List .dropdown')
    .click();

  cy
    .contains('Delete list')
    .click()

  cy
    .wait('@deleteList')
  
})

it.only('zaskrtnutie tasku', () => {

  cy
    .get('.Task input')
    .check()
  
  cy
    .wait('@editTask')
    .then( task => {

      expect(task.status).to.eq(200)
      expect(task.request.body.completed).to.be.true
      expect(task.response.body.completed).to.be.true

    })

})
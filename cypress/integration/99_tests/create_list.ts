beforeEach(() => {

  cy
    .request('POST', '/reset')

  cy
    .request('POST', '/boards', {
      name: "new"
    })
    .then(board => {
      Cypress.env('board', board.body)
    })

  cy
    .server()

  cy
    .route('POST', '/api/lists').as('createList')

});

it('should be able to create board', () => {

  const listName = 'new list'

  cy
    .visit(`/board/${Cypress.env('board').id}`)

  cy
    .get('.CreateList_title')
    .click();

  cy
    .get('.CreateList input')
    .type(`${listName}{enter}`)

  cy
    .wait('@createList')
    .its('status')
    .should('eq', 201)

  cy
    .get('.List')
    .should('be.visible')

  cy
    .get('.taskTitle')
    .should('have.value', listName)

})
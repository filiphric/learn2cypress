beforeEach(() => {

  cy
    .request('POST', '/reset')

  cy
    .server()

  cy
    .route('POST', '/api/boards').as('createBoard')

});

it('should be able to create board', () => {

  cy
    .visit('/')

  cy
    .get('#new-board')
    .click();

  cy
    .get('#new-board input')
    .type('nový board{enter}');

  cy
    .wait('@createBoard')
    .its('status')
    .should('eq', 201)

  cy
    .url()
    .should('match', /\/board\/\d{11}/g)

  cy
    .get('.boardDetail')
    .should('be.visible')

})
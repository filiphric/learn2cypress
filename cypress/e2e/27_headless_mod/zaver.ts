beforeEach(() => {

  cy
    .request('POST', '/reset')

});

it('vytvorenie boardu, zoznamu a tasku', () => {

  cy
    .visit('/')

  cy
    .get('#new-board')
    .click();

  cy
    .get('#new-board input')
    .type('nový board{enter}');

  cy
    .url()
    .should('contain', '/board/')

  cy
    .get('.CreateList')
    .click()

  cy
    .get('.CreateList_input')
    .type('nový zoznam{enter}')

  cy
    .get('.List')
    .should('be.visible')

  cy
    .screenshot('meno')

  cy
    .contains('Add a card...')
    .click()

  cy
    .get('[data-id="newTaskTitle"]')
    .type('kúpiť mlieko{enter}')

  cy
    .get('.Task')
    .should('have.length', 2)

})
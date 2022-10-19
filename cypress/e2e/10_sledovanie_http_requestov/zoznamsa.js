/// <reference types="cypress" />

beforeEach( () => {

cy.server()
cy.route('POST', '/api/tasks')
.as('createTask')




cy.route('DELETE', '/api/lists/*')
.as('deleteList')



cy.route('PATCH', '/api/tasks/*')
.as('marktask')

  cy
    .visit('/board/13886828327'); // doplň si adresu svojho boardu

});

it('vytvorenie tasku', () => {


cy.get('.List_addTask')
.click()

cy.get('[data-id="newTaskTitle"]')
.click()
.type('newtask3{enter}')

cy.wait('@createTask')
.its('response.body.title')
.should('eq', 'newtask3')


  // vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení. pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

})

it('odstránenie zoznamu', () => {

  cy.get('[data-id="6610562564"] > .dropdown > .options > path')
.click()

cy.get('[data-id="6610562564"] > .dropdown > #myDropdown > .delete')
.click()

cy.wait('@deleteList')


  // manuálne si vytvor nový zoznam a pomocou testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu

})

it.only('zaskrtnutie tasku', () => {

  cy.get(':nth-child(1) > .container > .checkmark')

  .click()

  cy.wait('@marktask').then(marking=>{
  expect(marking.response.body.title).to.eq('newtask3')
  expect(marking.response.body.completed).to.eq(true )
  expect(marking.status).to.eq(200)


  })
  // pomocou testu si zaškrtni task v zozname a odsleduj si request, ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request. skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu

})
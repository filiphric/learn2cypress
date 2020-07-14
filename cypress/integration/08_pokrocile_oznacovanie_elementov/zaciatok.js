/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353')

});

it('oznacenie tasku pomocou poradia', () => {

  cy
    .get('.Task')

})

it('vyfiltrovanie názvov tasku', () => {

  cy
    .get('.Task_title')

})

it('označenie tasku v zozname', () => {

  cy
    .get('.List_tasks')

})

it('označenie zoznamu tasku', () => {

  cy
    .get('.Task')

})
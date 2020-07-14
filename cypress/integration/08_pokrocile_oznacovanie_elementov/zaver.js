/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353')

});

it('oznacenie tasku pomocou poradia', () => {

  cy
    .get('.Task')
    .last()

})

it('vyfiltrovanie názvov tasku', () => {

  cy
    .get('.Task_title')
    .not('.completed')

})

it('označenie tasku v zozname', () => {

  cy
    .get('.List_tasks')
    .children()

})

it('označenie zoznamu tasku', () => {

  cy
    .get('.Task')
    .parents('.List')

})
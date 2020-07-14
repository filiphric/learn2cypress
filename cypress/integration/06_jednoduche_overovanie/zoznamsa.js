/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353')
  
})

it('vytvorenie listu', () => {

  cy
    .get('.CreateList_title')
    .click();
  
  cy
    .get('.CreateList input')
    .type('new list{enter}')

  cy
    .get('.List')
    .should('be.visible')

})

it('overenie poctu listov', () => {

  cy
    .get('.CreateList_title')
    .click();
  
  cy
    .get('.CreateList input')
    .type('nákup{enter}')

  cy
    .get('.List')
    .should('have.length', 2)

})

it('odstranenie listu', () => {

  cy
    .get('[data-id="49476421418"] .dropdown')
    .click()

  cy
    .get('[data-id="49476421418"] .delete')
    .click()

  cy
    .get('.List')
    .should('have.length', 1)

})

it('overenie odskrtnutia', () => {

  cy
    .get('.Task .checkmark')
    .should('be.checked')

  cy
    .get('.Task label')
    .should('have.class', 'completed')

  cy
    .get('.Task .checkmark')
    .uncheck()

  cy
    .get('.Task .checkmark')
    .should('not.be.checked')

  cy
    .get('.Task label')
    .should('not.have.class', 'completed')

})

it('overenie názvu listu', () => {

  cy
    .get('.taskTitle')
    .should('have.value', 'new list')
  
})

it.only('overenie textu na pridanie tasku (add card)', () => {

  cy
    .get('.List_addTask')
    .should('contain.text', 'Add a card...')
  
})
/// <reference types="cypress" />

/* 
  vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
*/

// úloha #1: vytvor si nový zoznam na boarde
it('vytvorenie nového zoznamu', () => {

  cy
    .visit('/board/25619573353')

  cy
    .get('.CreateList')
    .click()

  cy
    .get('.CreateList_input')
    .type('new list{enter}')
  
});

// úloha #2: vytvor si nový task v zozname
it('vytvorenie nového tasku', () => {

  cy
    .visit('/board/25619573353')

  cy
    .contains('Add a card...')
    .click()

  cy
    .get('[data-id="newTaskTitle"]')
    .type('buy milk{enter}')
  
});

// úloha #3: zaškrtni task ako vybavený
it('označenie tasku', () => {

  cy
    .visit('/board/25619573353')

  cy
    .get('.checkmark')
    .check()

});

// úloha #4: odškrtni task ako nevybavený
it.only('odznačenie tasku', () => {

  cy
    .visit('/board/25619573353')

  cy
    .get('.checkmark')
    .uncheck()
  
});
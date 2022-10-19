/// <reference types="cypress" />

it('vytvorenie nového boardu', () => {

  cy
    .visit('/');

  cy
    .get('#new-board')
    .click();

  cy
    .get('#new-board input')
    .type('new board{enter}');
  
});

it('označenie boardu hviezdičkou', () => {

  cy
    .visit('/');

  cy
    .get('.Star')
    .click({force: true})
  
});

it('označenie tasku', () => {

  cy
    .visit('/board/82425010767');

  cy
    .get('.Task input')
    .check();
  
});
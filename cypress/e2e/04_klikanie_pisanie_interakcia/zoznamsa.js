/// <reference types="cypress" />

/*
  vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
*/

beforeEach(()=>{


cy.visit('/board/63760359330')

})


// úloha #1: vytvor si nový zoznam na boarde
it('vytvorenie nového zoznamu', () => {


  cy.get('.CreateList_title')
  .click()
   
  cy.get('.CreateList_input')
  .click()
  .type('new list{enter}')
});

// úloha #2: vytvor si nový task v zozname
it('vytvorenie nového tasku', () => {

cy.get('.List_addTask')
.click()
cy.get('.List > .TextArea')
.click({force: true})
.type('new task{enter}')


});

// úloha #3: zaškrtni task ako vybavený
it('označenie tasku', () => {

cy.get('.checkmark')
.check({force: true} )

});

// úloha #4: odškrtni task ako nevybavený
it('odznačenie tasku', () => {

  cy.get('.checkmark')
  .uncheck({force: true} )




});
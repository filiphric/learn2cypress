/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

  cy
    .route('/api/boards', 'fx:twoBoards')
    .as('boardList')



    cy.route('POST', '/api/lists')
    .as('err')

   

    cy.route({
     method:'POST', 
     url:'/api/tasks', 
     response:'error ocured', 
      status:'500'
      



    })
    .as('createTask')


  cy
    .visit('/');



});

it('zoznam dvoch boardov z fixture', () => {



  // použi súbor twoBoards.json z fixtures foldra. do tohto it() bloku nemusíš nič písať. stačí, že zmeníš .route() príkaz v beforeEach bloku

})

it('zoznam boardov s hviezdickou z fixture', () => {

  // ak sa Ti podarilo splniť predošlú úlohu, stačí si vyfiltrovať tento test a zmeniť dáta v súbore twoBoards.json po uložení testu a súboru twoBoards.json by si mal/a vidieť správny výsledok

})

it.only('chyba pri vytvoreni tasku', () => {

cy.get('[data-cy="create-board"]')
.click()

cy.get('.board_addBoard')
.click()
.type('newboard{enter}')


cy.get('.CreateList')
.click()

cy.get('.CreateList_input')
.click()
.type('newlist{enter}')

cy.get('.List_addTask')
.click()

cy.get('[data-id="newTaskTitle"]')
.click()
.type('newtask{enter}')

cy.wait('@createTask')

cy.get('[id="errorMessage"]')

.should('contain.text','There was an error creating task')
.should('be.visible')
  // pridaj si ďalší .route() príkaz, ktorým si odchytíš api volanie, ktoré sa robí pri vytvorení tasku. nahraď odpoveď tak, aby zo servra prišiel chybový status kód. dôležitá poznámka: pri nahradzovaní odpovede je parameter „response“ povinný

})
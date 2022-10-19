


beforeEach(()=>{

   cy.request('DELETE', '/api/boards')

    cy.visit('/')



})


it('vytvaranie+oznacovanie',()=>{


    //create board//
    cy.get('.board_newItem')
    .click()
    
    cy.get('.board_addBoard')
    .click()
    .type('newboard{enter}')
    cy.get('.CreateList_title')
    .click( )

    cy.get('.CreateList_input')
    .click()
    .type('newlist{enter}')

    //create two task//
    cy.get('.List_addTask')
    .click()

    cy.get('[data-id="newTaskTitle"]')
    .type('newtask{enter}')


    cy.get('.List_addTask')
    .click()

    cy.get('[data-id="newTaskTitle"]')
    .type('newtask1{enter}')
    //check task//


    cy.get('.checkmark')
    .eq(1)
    .check({force: true})

    //checking checkmark//


    cy.get('.Task input')
    .eq(0)
     .should('be.checked')

     cy.get('.Task input')
    .eq(1)
     .should('not.be.checked')

    //checking the name of board//

    cy.get('.boardDetail_title')
    .should('have.value', 'newboard')
    



    })












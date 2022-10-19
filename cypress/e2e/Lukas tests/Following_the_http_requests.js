


beforeEach(()=>{

    cy.request('DELETE', '/api/lists')


 cy.server()
 cy.route('POST', '/api/lists')
 .as('createList')


 cy.visit('/board/54620911285')


})


it.only('create list',()=>{

    

   cy.get('.CreateList_title')
   .click()

   cy.get('.CreateList_input')
   .click()
   .type('newlist{enter}')


   cy.wait('@createList').then ( list => {

   expect(list.response.body.title).to.eq('newlist')
   expect(list.status).to.eq(201)




   })
})

    










beforeEach(()=>{


cy.server()
cy.route('/api/boards', 'fx:fakeboards')


})






    it.only('create fake board',()=>{



        cy.visit('/')




})


let retries = 0
let maxretries = 7



Cypress.Commands.add('checklistlength',()=>{


  cy.request({
    method:'GET', 
    url:'/api/boards/*',
    headers:{
     
     accept: 'application/json, text/plain, */*',
 
    }}).then(board=>{

      if (board.body.lists.length===4) {

      return
    }
      if (retries === maxretries){
     throw new Error('lists lenght was never 4')
      }

      else{

        cy.wait(1000)

        .checklistlength()

        retries++

      }    })

})





it('štyri zoznamy', () => {




  cy
    .visit('/board/42588298911')

  cy.checklistlength()

})
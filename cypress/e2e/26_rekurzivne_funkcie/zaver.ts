let retries = 0
let maxretries = 7



Cypress.Commands.add('checklistlenght',()=>{

  cy.request({
    method:'GET',
    url:'/api/boards/*',
    headers:{
    
      accept: 'application/json, text/plain, */*',
    
    
    
    }}).then(board=>{

      if  (board.body.lists.lenght===4)
      {

        return
      }

        if (retries ===maxretries)

        return
    {
      throw new Error ('never was created 4 lists')

      } 

      else 

     {
      cy.checklistlenght()

         
      }   
    }})


  
it('',()=>{





cy.checklistlenght()


  cy.visit('/board/42588298911')



})
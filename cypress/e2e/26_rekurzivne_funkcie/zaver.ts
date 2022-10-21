let retries = 0
let maxretries= 7



Cypress.Commands.add('checklistlenght',()=>{

cy.request({
  
  method:'GET', 
  url:'/api/boards/*',
  headers:{
  

    Accept: 'application/json, text/plain, */*',

}}).then(board=>{

  if (board.body.lists.lenght===4) 
  
  {
return
  } if (retries===maxretries)
  {
 throw new Error ('list lenght never reached four')

}else
{
cy.wait(1000)
cy.checklistlenght()
retries++

}



})

})

it('štyri zoznamy', () => {
  

  cy.checklistlenght()

  
  cy.visit('/board/42588298911')

})
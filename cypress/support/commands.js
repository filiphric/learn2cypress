Cypress.Commands.add('addTask', (name) => {

  cy
    .contains('Add a card')
    .click()

  cy
    .get('[data-id="newTaskTitle"]')
    .type(name + '{enter}')

})

Cypress.Commands.add('loginUser',(email, password)=>{



  cy.request({
  
  method:'POST', 
  url:'/login',
  body:{
  email:email,
  password:password
  
  
  
  
  }}).then(user=>{
  cy.setCookie('trello_token', user.body.accessToken)
  
  
  
  })
  
  
  })
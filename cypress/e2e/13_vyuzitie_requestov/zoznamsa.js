/// <reference types="cypress" />

beforeEach( () => {


  cy.request('DELETE', '/api/boards')
  
  cy.request('POST', '/api/boards',{

   name:'newboard'


  }).then(board=>{
  Cypress.env('board', board.body)


  })

})

it('vytvorenie zoznamu novovytvorenom boarde', () => {

  cy.request({

   method:'POST', 
   url:'/api/lists',
   body:{
    title:'newlist',
    boardId:Cypress.env('board')['id']
   


   }



  })
  
  
  cy.visit('/board/'+ Cypress.env('board')['id'])


})
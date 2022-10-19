/// <reference types="cypress" />

it('overenie user id', () => {

cy.request({
method:'GET',
url:'/api/boards',
headers:{


  accept: 'application/json, text/plain, */*',

  authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a2FzQGx1a2FzLnNrIiwiaWF0IjoxNjY2MTgzMzk3LCJleHAiOjE2NjYxODY5OTcsInN1YiI6IjEifQ.miTjhLd4h0-U6VK6-pg0acw2CRfva-x3xn8ApeCxyUg'


}}).then(board=>{
let newboard = Cypress._.find(board.body,{name:'newboard'})
expect(newboard.user).to.eq(0)

let myboard= Cypress._.find(board.body,{name:'myboard'})
expect(myboard.user).to.eq(1)

expect(board.body).have.length('2')

})

cy.request({
  method:'GET',
  url:'/api/boards',
  headers:{
  
  
    accept: 'application/json, text/plain, */*',
  
  }





}).then(board=>{
  let newboard = Cypress._.find(board.body,{name:'newboard'})
  expect(newboard.user).to.eq(0)
  expect(board.body).have.length('1')
  

cy.visit('/')


})
})
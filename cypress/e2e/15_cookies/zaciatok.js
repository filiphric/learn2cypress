/// <reference types="cypress" />

it('nastavovanie cookies', () => {

cy.setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1a2FzQGx1a2FzLnNrIiwiaWF0IjoxNjY2MTgzMjI0LCJleHAiOjE2NjYxODY4MjQsInN1YiI6IjEifQ.j3ppBaNKNhB39b8kxccovFlM014q7LQvXI7wFpezAhQ')


  cy
    .visit('/')
    
})
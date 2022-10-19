/// <reference types="cypress" />

Cypress.Cookies.defaults({
  whitelist: 'trello_token'
})

it('nastavovanie cookies', () => {

  // cy
  //   .setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwQGZpbGlwaHJpYy5zayIsImlhdCI6MTU5NDgxOTQ5NSwiZXhwIjoxNTk0ODIzMDk1LCJzdWIiOiIxIn0.rSl9pMkf_fnnQ6p1HjnwURya6sV9X9E4A4UwNjqaFYQ')

  cy
    .visit('/')

    
})
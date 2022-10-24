/// <reference types="cypress" />

it('autorizacia', () => {

  cy
    .visit('/')

  cy
    .request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwQGZpbGlwaHJpYy5zayIsImlhdCI6MTU5NDgxOTQ5NSwiZXhwIjoxNTk0ODIzMDk1LCJzdWIiOiIxIn0.rSl9pMkf_fnnQ6p1HjnwURya6sV9X9E4A4UwNjqaFYQ'
      }
    })
  
});
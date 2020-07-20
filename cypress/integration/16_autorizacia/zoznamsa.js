/// <reference types="cypress" />

it('overenie user id', () => {

  cy
    .visit('/')

  cy
    .request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization: '' // dopln autorizaciu
      }
    }).then( boards => {

    })
  
  cy
    .request({
      method: 'GET', 
      url: '/api/boards',
      headers: {
        accept: 'application/json, text/plain, */*',
      }
    }).then( boards => {
      
    })
  
});
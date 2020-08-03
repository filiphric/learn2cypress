beforeEach(() => {
  
  cy
    .request('DELETE', '/api/users');

});

it('odoslanie welcome emailu', () => {

  cy
    .visit('/');

  cy
    .contains('Log in')
    .click()

  cy
    .get('.LoginModule')
    .should('be.visible')

  cy
    .contains('Sign up here')
    .click()

  cy
    .get('#signupEmail')
    .type('filip@filiphric.sk')

  cy
    .get('#signupPassword')
    .type('aaaa')

  cy
    .get('.emails_title input')
    .check()
  
});
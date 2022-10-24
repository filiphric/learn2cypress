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
    .type('deep-state.eaek6hyy@mailosaur.io')

  cy
    .get('#signupPassword')
    .type('aaaa')

  cy
    .get('.emails_title input')
    .check()

  cy
    .contains('.Button', 'Sign up')
    .click()

  cy
    .request({
      method: 'POST',
      url: 'https://mailosaur.com/api/messages/await?server=eaek6hyy',
      headers: {
        authorization: 'Basic ' + Buffer.from('fP6cnhAz2s5ji95').toString('base64')
      },
      body: {
        sentTo: 'deep-state.eaek6hyy@mailosaur.io'
      }
    }).then( message => {

      expect(message.body.html.links[0].href).to.eq('https://www.youtube.com/channel/UCDOCAVIhSh5VpJMEfdak1OA')
    })  
  
});
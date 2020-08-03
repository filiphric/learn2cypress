beforeEach(() => {
  
  cy
    .request('POST', '/api/reset');

});

it('zaciatok testu v cistom stave', () => {

  cy
    .visit('/')
  
});
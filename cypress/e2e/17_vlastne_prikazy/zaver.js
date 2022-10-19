/// <reference types="cypress" />

beforeEach(() => {

  cy
    .request('DELETE', '/api/tasks')

})

it('vytvorenie noveho tasku', () => {

  cy
    .visit('/board/1863861524')

  cy
    .addTask('vymyslieť názov')
  
});
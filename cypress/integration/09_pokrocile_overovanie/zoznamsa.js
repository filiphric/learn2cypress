/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('over vsetky zaskrtnute tasky', () => {

  cy
    .get('.Task label').should( checkboxes => {

      expect(checkboxes[0]).to.have.class('completed')
      expect(checkboxes[1]).to.not.have.class('completed')

    })

})
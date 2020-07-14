/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('v zozname je mlieko', () => {

  cy
    .contains('mlieko')

  cy
    .get('[data-id="81447763519"]')
    .contains('mlieko')
  
});

it('v druhom zozname je mlieko', () => {

  cy
    .get('[data-id="81447763519"]')
    .find('.Task')
    .eq(2)
    .should('contain.text', 'mlieko')
  
});

it('v druhom zozname je len jeden task', () => {
  
  cy
    .get('[data-id="81447763519"] .Task')
    .should('have.length', 2)

});
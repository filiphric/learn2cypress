/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('overenie textu prveho tasku', () => {

  cy
    .get('.Task')
    .should('contain.text', 'chlieb')


});

it('overenie textov vsetkych taskov', () => {

});

it('task s textom „syr“ je na poslednej pozicii (riesenie 1)', () => {

  cy
    .get('.Task')
    .last()
    .should('contain.text', 'syr');

});

it('task s textom „mlieko“ je na poslednej pozícii (riesenie 2)', () => {

});


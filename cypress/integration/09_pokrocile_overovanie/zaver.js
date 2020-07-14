/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('overenie textu prveho tasku', () => {

  cy
    .get('.Task').then( items => {

      expect(items).to.contain.text('mlieko');
        
    });   
  
});

it('overenie textov vsetkych taskov', () => {

  cy
    .get('.Task')
    .then( items => {

      expect(items[0]).to.contain.text('mlieko');
      expect(items[1]).to.contain.text('chlieb');
        
    });
  
});

it('task s textom „chlieb“ je na poslednej pozicii (riesenie 1)', () => {

  cy
    .get('.Task')
    .should('have.length', 3)
    .last()
    .should('contain.text', 'syr');
  
});

it('task s textom „chlieb“ je na prvej pozícii  (riesenie 2)', () => {

  cy
    .get('.Task')
    .should( items => {

      expect(items[0]).to.contain.text('chlieb');
      expect(items[1]).to.contain.text('mlieko');
        
    });
  
});


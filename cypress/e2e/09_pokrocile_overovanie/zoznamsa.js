/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/13886828327'); // doplň si adresu svojho boardu

});

it('over vsetky zaskrtnute tasky', () => {

  cy.get(':nth-child(3) > .container > .checkmark')
  .click({force: true})


  cy.get('.Task label').then( task=>{

   expect(task[0]).to.not.have.class('completed')
   expect(task[1]).to.not.have.class('completed')
   expect(task[2]).to.have.class('completed')

  })

    



  })




  // 1. zaškrtni si jeden z taskov
  // 2. použi príkaz .then() a over obidva tasky v zozname naraz
  // 3. skús jeden z taskov odškrtnúť tak, aby test neprechádzal
  // 4. použi príkaz .should() a task znova zaškrtni, aby Ti test prešiel počas toho ako test beží
  


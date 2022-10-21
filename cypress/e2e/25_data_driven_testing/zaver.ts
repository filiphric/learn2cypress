
const lists = [
{
  names:'karol',
  tasks:['1','2', '3'],
},

{
  names:'peter',
  tasks:['1','2'],
},
{
  names:'jano',
  tasks:['1'],
}]



lists.forEach ((list, index)=> {







it('skontrolovat${list, name}',()=>{


  cy.visit('/board/42588298911')

  cy.get('.List')
  .eq(index)
  .find('.Task')
  .should('have.length', list.tasks.length) 
})


})
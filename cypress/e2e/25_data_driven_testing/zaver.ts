const lists = [
  {
    name: 'to do',
    tasks: ['odpáliť raketu', 'pobaliť jedlo', 'tlačová správa']
  },
  {
    name: 'in progress',
    tasks: ['pripraviť astronautov', 'nastaviť odpočítavanie']
  },
  {
    name: 'completed',
    tasks: ['natankovať raketu']
  }
]

lists.forEach((list, index) => {

  it(`skontrolovať ${list.name} zoznam`, () => {

    cy
      .visit('/board/30828651503')

    cy
      .get('.List')
      .eq(index)
      .find('.Task')
      .should('have.length', list.tasks.length)

  });

})
it('drag and drop', () => {

  cy
    .visit('/board/56410438668')
    

    cy
    .get('.List_tasks')
    .eq(0)
    .as('first')

  cy
    .get('.List_tasks')
    .eq(1)
    .as('second')

  cy
    .get('.Task')
    .drag('@second')




  })
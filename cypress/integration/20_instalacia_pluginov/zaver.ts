it('drag and drop', () => {

  cy
    .visit('/board/57843319424')

  cy
    .get('.List_tasks')
    .eq(0)
    .as('list1')

  cy
    .get('.List_tasks')
    .eq(1)
    .as('list2')

  cy
    .get('.Task')
    .drag('@list2')
  
});
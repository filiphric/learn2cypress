beforeEach(() => {

  cy
    .request('POST', '/reset')

  cy
    .request('POST', '/boards', {
      name: "new"
    }).then(board => {

      Cypress.env('board', board.body)

      cy
        .request('POST', '/lists', {
          boardId: board.body.id,
          title: "new list"
        }).then(list => {
          Cypress.env('list', list.body)
        })

    })

  cy
    .server()

  cy
    .route('POST', '/api/tasks').as('createTask')

});

it('should be able to create task', () => {

  const taskName = 'new task'

  cy
    .visit(`/board/${Cypress.env('board').id}`)

  cy
    .contains('Add a card')
    .click();

  cy
    .get('[data-id="newTaskTitle"]')
    .type(`${taskName}{enter}`)

  cy
    .wait('@createTask')
    .then(task => {
      expect(task.status).to.eq(201)
      expect(task.response.body.boardId).to.eq(Cypress.env('board').id)
      expect(task.response.body.completed).to.be.false
      expect(task.response.body.created).to.eq(Cypress.moment().format('YYYY-MM-DD'))
      expect(task.response.body.deadline).to.eq(Cypress.moment().add(3, 'days').format('YYYY-MM-DD'))
      expect(task.response.body.id).to.exist
      expect(task.response.body.listId).to.eq(Cypress.env('list').id)
      expect(task.response.body.title).to.eq(taskName)
    })

  cy
    .get('.Task .Task_title')
    .should('contain.text', taskName)

})
/// <reference types="cypress" />

describe('testovanie casu pomocou momentjs', () => {

  beforeEach( () => {
    
    cy
      .server()

    cy
      .route('POST', '/api/tasks')
      .as('createTask')

    cy
      .request('DELETE', '/api/tasks')

    cy
      .visit('/board/17104542717')

  })

  it('vytvoreny task obsahuje datum vytvorenia', () => {

    cy
      .contains('Add a card...')
      .click()

    cy
      .get('.List .TextArea')
      .type('chlieb{enter}')

    cy
      .wait('@createTask')
      .then( task => {
        expect(task.response.body.created).to.eq(Cypress.moment().format('YYYY-MM-DD'))
      })

  })
  
})

const tasks = ['chlieb', 'mlieko', 'pivo', 'syr']

describe.only('testovanie taskov pomocou lodash', () => {

  beforeEach( () => {

    cy
      .server()

    cy
      .route('/api/boards/*')
      .as('boardDetails')
    
    cy
      .request('DELETE', '/api/tasks')
    
    tasks.forEach( task => {

      cy
        .request('POST', '/api/tasks', { 
          title: task, 
          listId: 2779856862,
          boardId: 17104542717
        })

    })

    cy
      .visit('/board/17104542717')

  })

  it('nazvy taskov v liste', () => {

    cy
      .wait('@boardDetails')
      .then( board => {

        let taskNames = Cypress._.map(board.response.body.tasks, 'title')

        expect(taskNames).to.deep.eq(tasks)

      })

  })
  
})
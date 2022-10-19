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
      .visit('/board/')

  })

  it('vytvoreny task ma deadline o 3 dni', () => {

    cy
      .contains('Add a card...')
      .click()

    cy
      .get('.List .TextArea')
      .type('chlieb{enter}')

    cy
      .wait('@createTask')
      .then( task => {


      })

  })
  
})

const tasks = ['chlieb', 'mlieko', 'pivo', 'syr']

describe('testovanie taskov pomocou lodash', () => {

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
          listId: null,
          boardId: null
        })

    })

    // ⚠️ dopln id boardu
    cy
      .visit('/board/')

  })

  it('nazov druheho tasku v liste', () => {

    cy
      .wait('@boardDetails')
      .then( board => {

        let taskIndex = ''

        expect(taskIndex).to.eq(1)

      })

  })
  
})
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
      .visit('/board/39290872571')

  })

  it('vytvoreny task obsahuje cas vytvorenia', () => {

    cy
      .contains('Add a card...')
      .click()

    cy
      .get('.List .TextArea')
      .type('chlieb{enter}')

    cy
      .wait('@createTask')

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
          listId: 53986843421,
          boardId: 39290872571
        })

    })

    cy
      .visit('/board/39290872571')

  })

  it('nazvy taskov v liste', () => {

    cy
      .wait('@boardDetails')

  })
  
})
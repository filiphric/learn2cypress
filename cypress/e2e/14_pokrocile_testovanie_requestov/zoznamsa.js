/// <reference types="cypress" />

const tasks = ['chlieb', 'mlieko', 'pivo', 'syr']



  beforeEach( () => {

    cy.server()
    cy.route('/api/boards/*')
    .as('boarddetails')

    cy.request('DELETE', '/api/tasks')

    
    tasks.forEach(task=>{




    
    
    cy.request({
      method:'POST',
      url:'/api/tasks',
      body:{
        title:task,
        boardId:45051089223,
        listId:63727221515

 }})
     
  })
})

  it('nazov druheho tasku v liste', () => {

cy.visit('/board/45051089223')
cy.wait('@boarddetails').then(task=>{
let Taskindex = Cypress._.findIndex(task.response.body.tasks,{title:'pivo'})
expect(Taskindex).to.eq(2)



})

  })
let retries = 0
let maxRetries = 3

Cypress.Commands.add('checkListLength', () => {

  cy
    .request({
      method: 'GET',
      url: '/boards/30828651503',
      headers: {
        accept: 'application/json, text/plain, */*'
      }
    }).then( board => {

      if (board.body.lists.length === 4) {
        return
      } 

      if (retries === maxRetries) {
        throw new Error ('List never reached length of 4')
      }
      
      cy
        .wait(1000)
        .checkListLength()

      retries++

    })

})

it('štyri zoznamy', () => {

  cy
    .visit('/board/40825871598')

  cy
    .checkListLength()

})
const logo = "cypressLogo.png"

it('upload obrazku', () => {

  cy
    .visit('/board/5865296938')

  cy
    .get('.Task')
    .click()

  cy
    .get('[type="file"]')
    .attachFile(logo)
  
});
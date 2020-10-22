
describe('user can create a contact', () => {
  beforeEach('test', () => {
    cy.visit('http://localhost:3001') 
    cy.get('#add-contact').click()
    cy.get('#name').type('Pumpkin')
    cy.get('#email').type('pumpkin@gmail.com')
    cy.get('#phone').type('076 045 0403')
    cy.get('#company').type('Noah Trading Company')
    cy.get('#notes').type('Best friend')
    cy.get('#twitter').type('@pumpkin0430')
    cy.get('#submit').click()
  })

  it('displays a name of the new contact', () => {
    cy.get('#contact-list').should('contain', 'Pumpkin')
  })

  it('displays the phone number of the new contact', () => {
    cy.get('#contact-list').should('contain', '076 045 0403')
  })
})
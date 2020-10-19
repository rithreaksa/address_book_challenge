
describe('user can create a contact', () => {
  it('test', () => {
    cy.visit('http://localhost:3001') 
    cy.get('#add-contact').click()
  })
})
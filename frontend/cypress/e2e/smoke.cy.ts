describe('empty spec', () => {
  it('Page content loads', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Welcome')

    cy.visit('http://localhost:3000/my-courses')
    cy.contains('Current Courses')
    cy.contains('Previous Courses')

    cy.visit('http://localhost:3000/login')
    cy.contains('Login with Google')
  })
})
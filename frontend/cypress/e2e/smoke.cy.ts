describe('empty spec', () => {
  it('Page content loads', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Management')

    cy.visit('http://localhost:3000/my-courses')
    cy.contains('Current Courses')
    cy.contains('Previous Courses')

    cy.visit('http://localhost:3000/login')
    cy.contains('Login with Google')
  })
  it('Can click courses in TERMS', () => {
    cy.visit('http://localhost:3000/terms')
    cy.contains('1A').click()
    cy.url().should('include', '/1A')
    cy.contains('CHE 102').click()
    cy.url().should('include', '/course/CHE%20102')
  })
})
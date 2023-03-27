describe('empty spec', () => {
  it('Page content loads', () => {
    cy.visit('http://localhost:3000')
    cy.contains("WHAT'S MANAGEMENT ENGINEERING?")
    cy.contains("WHAT IS THIS APPLICATION?")

    cy.visit('http://localhost:3000/my-courses')
    cy.contains('Current Courses')
    cy.contains('Previous Courses')

    cy.visit('http://localhost:3000/login')
    cy.contains('Login with Google')
  })

  it('Can click courses in COURSE INFO', () => {
    cy.visit('http://localhost:3000/search-courses')
  
  })


  it('Can click courses in TERMS', () => {
    cy.visit('http://localhost:3000/terms')
 
  })

})
describe('empty spec', () => {
  it('Page content loads', () => {
    cy.visit('http://localhost:3000')
    cy.contains("WHAT'S MANAGEMENT ENGINEERING?")
    cy.contains("WHAT IS THIS APPLICATION?")

    cy.visit('http://localhost:3000/login')
    cy.contains('Login with Google')
  })

  it('Can click courses in PLAN COURSES', () => {
    cy.visit('http://localhost:3000/plan-courses')
  
  })

  it('Can click courses in COURSE INFO', () => {
    cy.visit('http://localhost:3000/search-courses')
  
  })
Ç

  it('Can click courses in TERMS', () => {
    cy.visit('http://localhost:3000/terms')
    cy.contains('1A')
 
  })

})
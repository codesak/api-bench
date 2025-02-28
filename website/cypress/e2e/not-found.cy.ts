describe('404', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/404',);
    cy.url().should('eq', 'http://localhost:8080/404',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/404',);
    cy.title().should('eq', '404 NOT FOUND | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/404',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', '404 Not Found',);
  },);
},);

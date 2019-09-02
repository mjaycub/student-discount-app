describe("Cypress", () => {
    it("is working", () => {
      expect(true).to.equal(true);
    });
  
    it("visits the app", () => {
      cy.visit('/admin');
    });

    it('get the document object', () => {
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })

    it("shows the table of college data", () => {
        cy.get(".collegeDataTable");
      });
  });
  
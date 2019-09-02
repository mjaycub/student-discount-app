describe("Cypress", () => {
    it("is working", () => {
      expect(true).to.equal(true);
    });
  
    it("visits the app", () => {
      cy.visit('/');
    });

    it("redirects if college doesn't exist", () => {
        cy.visit('/college/fakecollegenotindb')
        .then(() => {
            cy.location('pathname').should('eq', '/college')
        })
      });
  
    it('get the document object', () => {
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
  });
  
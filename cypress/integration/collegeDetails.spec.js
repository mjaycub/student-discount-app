describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("visits the college details view", () => {
    cy.visit("/college/usc");
  });

  it("get the document object", () => {
    cy.document()
      .should("have.property", "charset")
      .and("eq", "UTF-8");
  });

  it("displays the name of the college", () => {
    cy.get("#collegeNameHeader").contains("Usc");
  });
});

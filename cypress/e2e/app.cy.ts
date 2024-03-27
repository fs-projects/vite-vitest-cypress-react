describe("App Component", () => {
  it("renders the app component", () => {
    cy.visit("http://localhost:5173");
    cy.get("h1").contains("Vite-Vitest-Cypress-ReactTestingLibrary");
    cy.get('[data-testid="counter"]').should("exist");
  });
});
describe("Counter", () => {
  it("has an initial count of 0", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testid="counter"]').contains("count is 0");
  });
});
describe("Counter", () => {
  it("increments the count when the button is clicked", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testid="counter"]').contains("count is 0");
    cy.get('[data-testid="counter"] button').click();
    cy.get('[data-testid="counter"]').contains("count is 1");
    cy.get('[data-testid="counter"] button').click();
    cy.get('[data-testid="counter"]').contains("count is 2");
  });
});
describe("Counter", () => {
  it("increments the count multiple times", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testid="counter"]').contains("count is 0");
    cy.get('[data-testid="counter"] button').click().click().click();
    cy.get('[data-testid="counter"]').contains("count is 3");
  });
});

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://qventus-take-home-app.vercel.app/");
  });
  it("displays the example requirement messages by default", () => {
    cy.get('[data-cy="label"]').should("have.length", 4);

    cy.get('[data-cy="label"]').first().should("have.text", "Has a number 0-9");
    cy.get('[data-cy="label"]')
      .last()
      .should("have.text", "No consecutive letters");
  });
  // Happy paths
  it("typing a password with a number and consecutive letter should have a checkmark", () => {
    cy.get('[data-cy="password"]').type("1ab").should("have.value", "1ab");
    cy.get('[data-cy="checkmark"]').should("have.length", 1);
  });
  it("typing a password with a number and no consecutive letter should have 2 checkmarks", () => {
    cy.get('[data-cy="password"]').type("1a3").should("have.value", "1a3");
    cy.get('[data-cy="checkmark"]').should("have.length", 2);
  });
  it("typing a password with a number, no consecutive letter, special character should have 3 checkmarks", () => {
    cy.get('[data-cy="password"]').type("1a3*").should("have.value", "1a3*");
    cy.get('[data-cy="checkmark"]').should("have.length", 3);
  });
  it("typing a password with a number, no consecutive letter, special character and uppercase letter should have 4 checkmarks", () => {
    cy.get('[data-cy="password"]').type("1a3*B").should("have.value", "1a3*B");
    cy.get('[data-cy="checkmark"]').should("have.length", 4);
  });

  it("clicking the toggle password button should be able change between text and password types", () => {
    cy.get('[data-cy="password"]').type("1abc").should("have.value", "1abc");
    cy.get('[data-cy="button"]').click();

    cy.get('[data-cy="password"]').should("have.attr", "type", "text");
    cy.get('[data-cy="button"]').click();

    cy.get('[data-cy="password"]').should("have.attr", "type", "password");
  });
});

/// <reference types="cypress" />

describe("login flow", () => {
  it("successful login", () => {
    cy.visit("/login");

    cy.get("#email").type("fernando_0135@hotmail.com");

    cy.get("#password").type("12345678");

    cy.get("form > .sc-dkPtRN > .btn-lg").click();
    cy.get("form > .sc-dkPtRN > .btn-lg").click();

    /* cy.get("#mui-1").type("userId");

    cy.get("#mui-2").type("123456");

    cy.get('.css-1jn6b6o > [data-testid="buttonComponent"]').click();

    cy.get(".MuiAlert-message").should("have.text", "Successful!"); */
  });
});

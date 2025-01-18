import saucedemoPage from "../../support/pageObject/saucedemoPage"

describe('Saucedemo Login Scenarios', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('login success - positive', () => {
    cy.loginSaucedemo('standard_user', 'secret_sauce')
    //cy.get('#user-name').type('standard_user')
    //cy.get('#password').type('secret_sauce')
    //cy.get('#login-button').click()
    cy.get('[data-test="title"]').should('contain.text', 'Products')
    //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    saucedemoPage.addBackpack()
    //cy.get('[data-test="shopping-cart-link"]').should('contain.text','1')
    saucedemoPage.verifyCart('1')
    //cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    saucedemoPage.removeBackpack()
    cy.get('[data-test="shopping-cart-link"]').should('not.contain.text','1')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    //cy.get('[data-test="shopping-cart-link"]').should('contain.text','2')
    saucedemoPage.verifyCart('2')
    cy.url().should('include', '/cart.html')
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Bike Light')
  })
})
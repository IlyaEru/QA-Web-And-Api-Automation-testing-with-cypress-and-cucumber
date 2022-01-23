/// <reference types="cypress" />
import { onHomePage } from "../support/pageObjects/homePage"
import { onShopPage } from "../support/pageObjects/shopPage"
import { onCheckoutPage } from "../support/pageObjects/checkoutPage"


describe('Test Demo Page Objects', () => {
    let data;
    beforeEach(function () {
        cy.fixture('example').then((fixtureData) => {
            data = fixtureData

        })
    })
    it('Test Case', () => {
        cy.visit(Cypress.env("url"))
        onHomePage.getEditBox().type(data.name)
        onHomePage.getGender().select(data.gender)
        onHomePage.getTwoWayDataBinding().should('have.value', data.name)
        onHomePage.getEditBox().should('have.attr', 'minlength', '2')
        onHomePage.getEntrepreneaur().should('be.disabled')
        onHomePage.getShopTab().click()

        data.productName.forEach((product) => {
            cy.selectProduct(product)
        })
        onShopPage.getCheckOutButton().click()
        onCheckoutPage.verifyTotalCost()
        onCheckoutPage.getCheckoutButton().click()
        onCheckoutPage.getCountryTextBox().type('aust')
        cy.wait(4000)
        cy.contains('Austria').click()
        onCheckoutPage.getTermsCheckbox().check({force: true})
        onCheckoutPage.getPurchaseButton().click()
        onCheckoutPage.verifyAllertMessage()
    })
})
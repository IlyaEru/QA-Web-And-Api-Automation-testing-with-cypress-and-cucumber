/// <reference types="Cypress" />
import { onHomePage } from "../../../support/pageObjects/homePage"
import { onShopPage } from "../../../support/pageObjects/shopPage"
import { onCheckoutPage } from "../../../support/pageObjects/checkoutPage"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
let data;
Given('I open ECommerce Page,', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})
When('I add items to Cart', function(){
    onHomePage.getShopTab().click()

    data.productName.forEach((product) => {
        cy.selectProduct(product)
    })
    onShopPage.getCheckOutButton().click()
})
And('Validate the total prices', () => {
    onCheckoutPage.verifyTotalCost()
    onCheckoutPage.getCheckoutButton().click()
})
Then('select the country submit and verify Thankyou alert',() => {
    onCheckoutPage.getCountryTextBox().type('aust')
    cy.wait(4000)
    cy.contains('Austria').click()
    onCheckoutPage.getTermsCheckbox().check({force: true})
    onCheckoutPage.getPurchaseButton().click()
    onCheckoutPage.verifyAllertMessage()
})
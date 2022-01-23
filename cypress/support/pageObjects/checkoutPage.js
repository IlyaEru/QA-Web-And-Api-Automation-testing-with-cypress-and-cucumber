export class CheckoutPage {
    verifyTotalCost() {
        let sum = 0;
        let displayedTotal
        cy.get('tr td:nth-child(4) strong').each((price) => {
            sum += Number(price.text().trim().split(' ')[1])
        })
        cy.get('h3 strong').then((price) => {
            displayedTotal = +price.text().trim().split(' ')[1]
        }).then(() => {
            expect(sum).to.equal(displayedTotal)
        })
    }
    getCheckoutButton(){
        return cy.get('.btn-success')
    }
    getCountryTextBox(){
        return cy.get('#country')
    }
    getTermsCheckbox(){
        return cy.get('#checkbox2')
    }
    getPurchaseButton(){
        return cy.get('[type="submit"]')
    }
    verifyAllertMessage(){
        cy.get('.alert').then((alertMessage) => {
            expect(alertMessage.text()).to.include('Thank you! Your order will be delivered in next few weeks')
        })
    }
}

export const onCheckoutPage = new CheckoutPage()
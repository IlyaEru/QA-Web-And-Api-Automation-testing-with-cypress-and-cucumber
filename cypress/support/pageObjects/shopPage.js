export class shopPage {
    getCheckOutButton()
    {
        return cy.get('.btn-primary')
    }
}

export const onShopPage = new shopPage()
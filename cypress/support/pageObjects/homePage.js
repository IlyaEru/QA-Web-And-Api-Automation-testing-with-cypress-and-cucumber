export class HomePage {
    getEditBox() {
        return cy.get('form input[name="name"]')
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')

    }
    getGender() {
        return cy.get('select')
    }

    getEntrepreneaur() {
        return cy.get('#inlineRadio3')
    }
    getShopTab() {
        return cy.contains('Shop')
    }
}

export const onHomePage = new HomePage()
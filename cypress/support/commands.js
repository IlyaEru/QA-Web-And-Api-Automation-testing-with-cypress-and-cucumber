// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('selectProduct', (productName, amount = 1) => {
    cy.get('.card').each((productCard) => {
        cy.wrap(productCard).find('h4').then((name) => {
            if (name.text().trim() === productName) {
                cy.log(name.text())
                for (let i = 0; i < amount; i++) {
                    cy.wrap(productCard).find('button').click()

                }
            }
        })

    })
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

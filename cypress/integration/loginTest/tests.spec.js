/// <reference types="cypress" />


describe('Fill valid login and password, add then delete item', () => {
    before('visit app', () => {
        cy.visit('/');
        cy.title().should('include', 'Swag Labs')
        cy.url("/").should('eq', 'https://www.saucedemo.com/')
    })

    it('Login with valid credentials', () => {
        const userName = 'standard_user';
        const password = 'secret_sauce';
        cy.get('#user-name').type(`${userName}{enter}`)
        cy.get('#password').type(`${password}{enter}`)
        cy.get('#login-button').click()
        cy.url("/").should('include', 'inventory.html')
        cy.get('[data-test="product_sort_container"]').should('be.visible').select('Name (Z to A)');
        cy.get('[data-test="product_sort_container"]')
            .should('have.value', 'za')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').scrollIntoView()
        cy.get('#inventory_container > div > div:nth-child(6) ').should('contain', 'streamlined Sly Pack that melds uncompromising style')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#remove-sauce-labs-backpack').should('contain', 'Remove')
        cy.get('#shopping_cart_container > a')
            .scrollIntoView()
            .should('contain', '1')
            .should('be.visible')
            .click()
        cy.url("/").should('include', 'cart.html')
        cy.get('.cart_list')
            .should('exist')
            .should('contain', 'streamlined Sly Pack that melds uncompromising style')
        cy.get('.inventory_item_price')
            .should(($total) => {
                expect($total).to.contain('$', '29.99')
            })
        cy.get('.cart_list').should('have.length', 1)
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.cart_list').should('not.contain', 'streamlined Sly Pack that melds uncompromising style')
        cy.get('#react-burger-menu-btn').click()
        cy.wait(2000)
        cy.get('#logout_sidebar_link')
            .should('contain', 'Logout')
            .click()
        cy.url("/").should('eq', 'https://www.saucedemo.com/')
        cy.title().should('include', 'Swag Labs')
        cy.get('.bot_column')
            .should('be.visible')
    })
})
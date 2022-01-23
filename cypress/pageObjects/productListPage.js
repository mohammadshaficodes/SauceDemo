export class ProductListPage {
    sortProducts() {
        return cy.get('[data-test="product_sort_container"]')
    }
    cartButton() {
        return cy.get('.shopping_cart_link')
    }
    sortLoHi() {
        return cy.get('select').select('Price (low to high)')
    }
    cheapestProduct() {
        return cy.get('.btn_inventory').first()
    }
    dearestProduct() {
        return cy.get('.btn_inventory').last()
    }
}
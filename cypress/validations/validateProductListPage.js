import { ProductListPage } from "../pageObjects/productListPage.js"

const PRODUCT_LIST_PAGE = new ProductListPage();

export const validateCartButton = () => {
    PRODUCT_LIST_PAGE.cartButton().should('exist');
};



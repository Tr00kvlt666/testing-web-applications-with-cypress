
describe('Тестирование корректной работы сайта', function () {
   it('Проверка перехода на страницу', function () {
        cy.visit('http://www.saucedemo.com/');
         })


   it('Проверка корректной авторизации', function () {
        cy.visit('http://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();       
         })
        
    it('Простая покупка', function () {
        cy.visit('http://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
        cy.get('#shopping_cart_container').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Ildar');
        cy.get('[data-test="lastName"]').type('Khazipov');
        cy.get('[data-test="postalCode"]').type('1234567');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="back-to-products"]').click();
         })
         

})

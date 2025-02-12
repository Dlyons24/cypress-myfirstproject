describe("Login and Logout Test", () => {
    
    beforeEach(() => {
        cy.visit("https://ecommerce-playground.lambdatest.io/");
    });

    afterEach(() => {
        cy.visit("https://ecommerce-playground.lambdatest.io/");
    });

    it("should log in and log out successfully", () => {
        cy.findByRole("button", { name: /My account/i }).click();
        cy.get('input[name="email"]').type(Cypress.env('email')); 
        cy.get('input[name="password"]').type(Cypress.env('password'), { log: false }); // Hide password in logs
        cy.get('input[type="submit"][value="Login"]').click();
        cy.contains("My Account").should("be.visible"); // Verify login success (adjust according to UI feedback)
        cy.contains('.list-group-item', 'Logout').click();
        cy.get('h1.page-title').should('be.visible');

    });
});


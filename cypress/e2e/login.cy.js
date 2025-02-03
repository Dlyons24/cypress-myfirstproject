

describe("Login Test", () => {
    it("should log in successfully", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/");
        cy.findByRole("button", { name: /My account/i }).click();
        cy.get('input[name="email"]').type('customer@practicesoftwaretesting.com'); //refactor email call from env
        cy.get('input[name="password"]').type('Cypresstest1'); //refactor password. call from env
        cy.get('input[type="submit"]').click();
    });
  });

describe("Login Test", () => {
    it("should log out successfully", () => {
        //create logout command here 
    });
});
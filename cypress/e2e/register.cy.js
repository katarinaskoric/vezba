
 describe("gallery test", () => {
    it("register test", () => {
     cy.visit ("https://gallery-app.vivifyideas.com/register");
     cy.get(".nav-link").eq(2).click();
     cy.url().should("contain","/register");
     cy.get("#first-name").type("Katarina");
     cy.get("#last-name").type("Skoric");
     cy.get("#email").type("rina.ns@hotmail.com");
     cy.get("#password").type("katarina27");
     cy.get("#password-confirmation").type("katarina27");
     cy.get(":checkbox").check();
     cy.get("button").click();
    });
   });


   
 describe("register test", () => {
   it("taken email", () => {
    cy.visit ("https://gallery-app.vivifyideas.com/register");
    cy.get(".nav-link").eq(2).click();
    cy.url().should("contain","/register");
    cy.get("#first-name").type("Katarina");
    cy.get("#last-name").type("Skoric");
    cy.get("#email").type("rina.ns@hotmail.com");
    cy.get("#password").type("katarina27");
    cy.get("#password-confirmation").type("katarina27");
    cy.get(":checkbox").check();
    cy.get("button").click();
   });
  });


  describe("register test", () => {
   it("incorrect password", () => {
    cy.visit ("https://gallery-app.vivifyideas.com/register");
    cy.get(".nav-link").eq(2).click();
    cy.url().should("contain","/register");
    cy.get("#first-name").type("Katarina");
    cy.get("#last-name").type("Skoric");
    cy.get("#email").type("rina.ns@hotmail.com");
    cy.get("#password").type("katarina");
    cy.get("#password-confirmation").type("");
    cy.get(":checkbox").check();
    cy.get("button").click();
   });
  });

  

  describe("register test", () => {
   it("empty first string", () => {
    cy.visit ("https://gallery-app.vivifyideas.com/register");
    cy.get(".nav-link").eq(2).click();
    cy.url().should("contain","/register");
    cy.get("#first-name").type("");
    cy.get("#last-name").type("Skoric");
    cy.get("#email").type("rina.ns@hotmail.com");
    cy.get("#password").type("katarina27");
    cy.get("#password-confirmation").type("katarina27");
    cy.get(":checkbox").check();
    cy.get("button").click();
   });
  });

  
  describe("register test", () => {
   it("empty the second string", () => {
    cy.visit ("https://gallery-app.vivifyideas.com/register");
    cy.get(".nav-link").eq(2).click();
    cy.url().should("contain","/register");
    cy.get("#first-name").type("Katarina");
    cy.get("#last-name").type("");
    cy.get("#email").type("rina.ns@hotmail.com");
    cy.get("#password").type("katarina27");
    cy.get("#password-confirmation").type("katarina27");
    cy.get(":checkbox").check();
    cy.get("button").click();
   });
  });

  describe("register test",() => {
  it("8 less than characters", () => {
   cy.visit ("https://gallery-app.vivifyideas.com/register");
   cy.get(".nav-link").get(2).click();
   cy.url().should("contain","register");
   cy.get("#first-name").type("Katarina");
   cy.get("#last-name").type("Skoric");
   cy.get("#email").type("rina.ns@hotmail.com");
   cy.get("#password").type("kata");
   cy.get("#password-confiration").type("kata");
   cy.get(":checkbox").check();
   cy.get("button").click();

});
});




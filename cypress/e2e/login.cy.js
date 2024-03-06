import {Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps";

Given("I am on the home Page",()=>{
  cy.visit("https://www.mytek.tn");
})

When("I tap in the search bar",(datatable)=>{
  datatable.hashes().forEach(element => {
    cy.get('[name="q"]').type(element.product)
  });
})

Then("Click on search button",()=>{
  cy.get('[title=Chercher]').click()
})
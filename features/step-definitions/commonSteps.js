import { Given, When } from "@wdio/cucumber-framework";
import { HomePage } from "../pages/index";

Given("I am on the Demoblaze page", async () => {
  await HomePage.open();
});

When("I click Cart to see the shopping cart", async () => {
  await HomePage.navbarComponent.clickCartButton();
});
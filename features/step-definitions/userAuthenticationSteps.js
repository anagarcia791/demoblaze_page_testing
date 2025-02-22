import { When, Then } from "@wdio/cucumber-framework";
import { HomePage } from "../pages/index";
import { logger } from "../../utils/logger";
import assert from "assert";

When("I click login button", async () => {
  await HomePage.navbarComponent.clickLoginButton();
});

When("I enter {string} and {string}", async (username, password) => {
  await HomePage.loginComponent.setUsernameInput(username);
  await HomePage.loginComponent.setPasswordInput(password);
});

When("I click submit login button", async () => {
  await HomePage.loginComponent.clickSubmitLoginButton();
});

Then("I see user with logged in session", async () => {
  assert(
    await HomePage.navbarComponent.isLoggedUserIdentifierDisplayed(),
    "user logged in not displayed"
  );

  assert(
    await HomePage.navbarComponent.isLogoutButtonDisplayed(),
    "logout button not displayed"
  );

  logger.info("Logged in user validated");
});

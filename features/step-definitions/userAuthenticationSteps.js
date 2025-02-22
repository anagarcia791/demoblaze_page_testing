import { When, Then } from "@wdio/cucumber-framework";
import { HomePage } from "../pages/index";
import { CommonActions } from "../../helpers/index.js";
import assert from "assert";

When("I click login button", async () => {
  await HomePage.clickLoginButton();
});

When("I enter {string} and {string}", async (username, password) => {
  await HomePage.loginComponent.setUsernameInput(username);
  await HomePage.loginComponent.setPasswordInput(password);
  await CommonActions.getWait(3000);
});

When("I click submit login button", async () => {
  await HomePage.loginComponent.clickSubmitLoginButton();
  await CommonActions.getWait(3000);
});

Then("I see user with logged in session", async () => {
  assert(
    await HomePage.isLoggedUserIdentifierDisplayed(),
    "user logged in not displayed"
  );

  assert(
    await HomePage.isLogoutButtonDisplayed(),
    "logout button not displayed"
  );
});

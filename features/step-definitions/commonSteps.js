import { Given } from "@wdio/cucumber-framework";
import { HomePage } from "../pages/index";

Given("I am on the Demoblaze page", async () => {
  await HomePage.open();
});

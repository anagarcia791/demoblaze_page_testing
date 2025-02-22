import { CommonActions } from "../../helpers/index";
import BasePage from "./BasePage";
import { LoginComponent } from "./components/index";

/**
 * POM for Home Page.
 */
class HomePage extends BasePage {
  constructor() {
    super(" ");
    this.loginComponent = new LoginComponent();
  }

  /**
   * Locators
   */
  get #loginButton() {
    return $("#login2");
  }

  get #loggedUserIdentifier() {
    return $("#nameofuser");
  }

  get #logoutButton() {
    return $("#logout2");
  }

  /**
   * Methods
   */
  async clickLoginButton() {
    await CommonActions.click(this.#loginButton);
  }

  async isLoggedUserIdentifierDisplayed() {
    return await this.#loggedUserIdentifier.isDisplayed();
  }

  async isLogoutButtonDisplayed() {
    return await this.#logoutButton.isDisplayed();
  }
}

export default new HomePage();

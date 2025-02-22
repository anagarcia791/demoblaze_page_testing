import { CommonActions } from "../../../helpers/index";

/**
 * POM for Navbar
 */
class NavbarComponent {
  /**
   * Locators
   */
  get #homeButton() {
    return $("//a[@class='nav-link'][text()='Home ']");
  }

  get #cartButton() {
    return $("//a[@class='nav-link'][text()='Cart']");
  }

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
  async clickHomeButton() {
    await CommonActions.click(this.#homeButton);
  }

  async clickCartButton() {
    await CommonActions.click(this.#cartButton);
  }

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

export default NavbarComponent;

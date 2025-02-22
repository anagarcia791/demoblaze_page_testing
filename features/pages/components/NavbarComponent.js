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
    await CommonActions.isElementDisplayed(this.#cartButton, {
      timeout: 6000,
    });

    await CommonActions.click(this.#cartButton);
    await CommonActions.getWait(3000);
  }

  async clickLoginButton() {
    await CommonActions.click(this.#loginButton);
    await CommonActions.getWait(2000);
  }

  async isLoggedUserIdentifierDisplayed() {
    return await CommonActions.isElementDisplayed(this.#loggedUserIdentifier);
  }

  async isLogoutButtonDisplayed() {
    return await CommonActions.isElementDisplayed(this.#logoutButton);
  }
}

export default NavbarComponent;

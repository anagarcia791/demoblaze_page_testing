import { CommonActions } from "../../../../helpers/index";

/**
 * POM for Login component of Home Page.
 */
class LoginComponent {
  /**
   * Locators
   */
  get #usernameInput() {
    return $("#loginusername");
  }

  get #passwordInput() {
    return $("#loginpassword");
  }

  get #submitLoginButton() {
    return $("#logInModal .btn-primary");
  }

  /**
   * Methods
   */
  async setUsernameInput(valueToSet) {
    CommonActions.sendKeys(this.#usernameInput, valueToSet);
  }

  async setPasswordInput(valueToSet) {
    CommonActions.sendKeys(this.#passwordInput, valueToSet);
  }

  async clickSubmitLoginButton() {
    await CommonActions.click(this.#submitLoginButton);
  }
}

export default LoginComponent;

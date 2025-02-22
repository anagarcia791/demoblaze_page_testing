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
    await CommonActions.sendKeys(this.#usernameInput, valueToSet);
    await CommonActions.getWait(1000);
  }

  async setPasswordInput(valueToSet) {
    CommonActions.sendKeys(this.#passwordInput, valueToSet);
    await CommonActions.getWait(1000);
  }

  async clickSubmitLoginButton() {
    await CommonActions.click(this.#submitLoginButton);
    await CommonActions.getWait(2000);
  }
}

export default LoginComponent;

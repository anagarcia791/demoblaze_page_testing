import { CommonActions, Utils } from "../../helpers/index";
import BasePage from "./BasePage";
import {
  NavbarComponent,
  LoginComponent,
  CategoriesComponent,
} from "./components/index";

/**
 * POM for Home Page.
 */
class HomePage extends BasePage {
  constructor() {
    super(" ");
    this.navbarComponent = new NavbarComponent();
    this.loginComponent = new LoginComponent();
    this.categoriesComponent = new CategoriesComponent();
  }

  /**
   * Locators
   */
  get #availableProducts() {
    return $$(".card-title");
  }

  /**
   * Methods
   */
  async clickAnyProduct() {
    const productsDisplayed = await CommonActions.isElementDisplayed(
      this.#availableProducts[0],
      {
        timeout: 8000,
      }
    );

    if (productsDisplayed) {
      const productToClick = await this.#availableProducts;
      const randomPosition = Utils.getRandomNumber(productToClick.length);
      await CommonActions.click(productToClick[randomPosition - 1]);
    }
    
    await CommonActions.getWait(3000);
  }
}

export default new HomePage();

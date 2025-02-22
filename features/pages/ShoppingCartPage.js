import { CommonActions } from "../../helpers/index";
import BasePage from "./BasePage";

/**
 * POM for Shopping Cart Page.
 */
class ShoppingCartPage extends BasePage {
  constructor() {
    super(" ");
  }

  /**
   * Locators
   */
  get #productsInCart() {
    return $$(".success");
  }

  get #productsDetailInCart() {
    return $$(".success td");
  }

  /**
   * Methods
   */
  async getAmountOfProductsInCart() {
    const productsInCartDisplayed = await CommonActions.isElementDisplayed(
      this.#productsInCart[0],
      {
        timeout: 8000,
      }
    );

    if (productsInCartDisplayed) {
      const productsInCart = await this.#productsInCart;
      return productsInCart.length;
    }
    
    return 0;
  }
}

export default new ShoppingCartPage();

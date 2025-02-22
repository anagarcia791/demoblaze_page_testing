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
    if (await await this.#productsInCart[0].isDisplayed()) {
      const productsInCart = await this.#productsInCart;
      return productsInCart.length;
    }
  }
}

export default new ShoppingCartPage();

import { CommonActions, ArraysValidations, Utils } from "../../helpers/index";
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

  async checkIfProductMatchesWithAddedPreviously(productTitle, productPrice) {
    const productsDetail = await this.#productsDetailInCart.map(
      async (element) => {
        return await CommonActions.getElementText(element);
      }
    );

    productPrice = Utils.extractNumberFromText(productPrice);

    return ArraysValidations.someItemsContains(productsDetail, [
      productTitle,
      productPrice.toString(),
    ]);
  }
}

export default new ShoppingCartPage();

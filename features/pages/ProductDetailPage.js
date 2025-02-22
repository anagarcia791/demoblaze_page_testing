import { CommonActions } from "../../helpers/index";
import BasePage from "./BasePage";

/**
 * POM for Product Detail Page.
 */
class ProductDetailPage extends BasePage {
  constructor() {
    super(" ");
  }

  /**
   * Locators
   */
  get #productTitle() {
    return $("h2.name");
  }

  get #productPrice() {
    return $("h3.price-container");
  }

  get #addToCartButton(){
    return $(".btn-success");
  }

  /**
   * Methods
   */
  async getProductTitle() {
    if (await this.#productTitle.isDisplayed()) {
      return await this.#productTitle.getText();
    }
  }

  async getProductPrice() {
    return await this.#productPrice.getText();
  }

  async clickAddToCartButton() {
    await CommonActions.click(this.#addToCartButton);
    await CommonActions.getWait(3000);
  }
}

export default new ProductDetailPage();

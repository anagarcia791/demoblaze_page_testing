import { CommonActions } from "../../../../helpers/index";

/**
 * POM for Categories component of Home Page.
 */
class CategoriesComponent {
  /**
   * Locators
   */
  get #laptopsCategory() {
    return $("//a[@id='itemc'][text()='Laptops']");
  }

  /**
   * Methods
   */
  async clickLaptopsCategory() {
    await CommonActions.click(this.#laptopsCategory);
  }
}

export default CategoriesComponent;

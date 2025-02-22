import { When, Then } from "@wdio/cucumber-framework";
import { HomePage, ProductDetailPage, ShoppingCartPage } from "../pages/index";
import assert from "assert";

When("I click Laptops Category", async () => {
  await HomePage.categoriesComponent.clickLaptopsCategory();
});

When("I select any of the available products", async () => {
  await HomePage.clickAnyProduct();
  const productTitle = await ProductDetailPage.getProductTitle();
  const productPrice = await ProductDetailPage.getProductPrice();
  await browser.sharedStore.set("productTitle", productTitle);
  await browser.sharedStore.set("productPrice", productPrice);
});

When("I add product to the shopping cart", async () => {
  await ProductDetailPage.clickAddToCartButton();
});

Then("Shopping cart page with one product added is displayed", async () => {
  assert(
    (await ShoppingCartPage.getAmountOfProductsInCart()) === 1,
    "shopping cart should have one product added"
  );

  const storedProductTitle = await browser.sharedStore.get("productTitle");
  const storedProductPrice = await browser.sharedStore.get("productPrice");

  assert(
    await ShoppingCartPage.checkIfProductMatchesWithAddedPreviously(
      storedProductTitle,
      storedProductPrice
    ),
    "product does not matches with the product selected randomly"
  );
});

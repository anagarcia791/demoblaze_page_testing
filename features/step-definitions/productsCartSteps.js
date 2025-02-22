import { When } from "@wdio/cucumber-framework";
import { HomePage, ProductDetailPage } from "../pages/index";

When("I click Laptops Category", async () => {
  await HomePage.categoriesComponent.clickLaptopsCategory();
});

When("I select any of the available products", async () => {
  await HomePage.clickAnyProduct();
  const productTitle = await ProductDetailPage.getProductTitle();
  const productPrice = await ProductDetailPage.getProductPrice();
  await browser.sharedStore.set('productTitle', productTitle);
  await browser.sharedStore.set('productPrice', productPrice);
});

When("I add product to the shopping cart", async () => {
  await ProductDetailPage.clickAddToCartButton();
});




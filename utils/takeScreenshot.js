import allure from "@wdio/allure-reporter";

export const takeScreenshot = async function () {
  const screenshot = await browser.takeScreenshot();
  allure.addAttachment(
    "Screenshot",
    Buffer.from(screenshot, "base64"),
    "image/png"
  );
};

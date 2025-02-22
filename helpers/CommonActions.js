/**
 * Class for trigger common actions in the web page
 */
class CommonActions {
  async getWait(seconds) {
    await browser.pause(seconds);
  }

  async click(elementToClick) {
    await elementToClick.click();
  }

  async sendKeys(elementToFill, value) {
    await elementToFill.setValue(value);
  }

  async isElementDisplayed(element, options = {}) {
    return await element.isDisplayed(options);
  }

  async getElementText(element) {
    return await element.getText();
  }
}

export default new CommonActions();

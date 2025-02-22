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
}

export default new CommonActions();

/**
 * Base structure of POM for website pages.
 */
class BasePage {
  path = undefined;

  constructor(path) {
    this.path = path;
  }

  open() {
    return browser.url(`${this.path}`);
  }
}

export default BasePage;

/**
 * Class for util methods
 */
class UtilMethods {
  getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber + 1);
  }

  extractNumberFromText(text) {
    const match = text.match(/\d+/);
    return match ? parseInt(match[0], 10) : undefined;
  }
}

export default new UtilMethods();

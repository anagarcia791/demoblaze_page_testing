/**
 * Class to check arrays
 */
class ArraysValidations {
  someItemsContains(listToCheck, expectedItem) {
    return listToCheck.some((item) => expectedItem.includes(item));
  }
}

export default new ArraysValidations();

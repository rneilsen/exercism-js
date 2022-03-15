// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const stringValue = String(value);
  const length = stringValue.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (stringValue[i] !== stringValue[length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input) {
    if (Number(input) && Number(input) !== 0) {
      return "";
    }
    return "Must be a number besides 0";
  }
  return "Required field";
}

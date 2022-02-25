// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const VEHICLES_REQUIRING_LICENCES = ["car", "truck"];
const responseFormat = (vehicle) => `${vehicle} is clearly the better choice.`;

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return VEHICLES_REQUIRING_LICENCES.includes(kind);
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return responseFormat(option1);
  } else {
    return responseFormat(option2);
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let discountMultiplier;
  if (age < 3) {
    discountMultiplier = 0.8;
  } else if (age <= 10) {
    discountMultiplier = 0.7;
  } else {
    discountMultiplier = 0.5;
  }
  return discountMultiplier * originalPrice;
}

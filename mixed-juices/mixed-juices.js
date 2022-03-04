// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const DRINK_MIXING_TIMES = {
  "Pure Strawberry Joy": 0.5,
  Energizer: 1.5,
  "Green Garden": 1.5,
  "Tropical Island": 3,
  "All or Nothing": 5,
};

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export const timeToMixJuice = (name) => DRINK_MIXING_TIMES[name] ?? 2.5;

const LIME_WEDGES_PER_SIZE = { small: 6, medium: 8, large: 10 };

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesCut = 0;
  let limesCopy = [...limes];

  while (wedgesCut < wedgesNeeded && limesCopy.length > 0) {
    const nextLime = limesCopy.shift();
    limesCut++;
    wedgesCut += LIME_WEDGES_PER_SIZE[nextLime];
  }
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  while (timeLeft > 0 && i < orders.length) {
    timeLeft -= timeToMixJuice(orders[i]);
    i++;
  }
  return orders.slice(i);
}

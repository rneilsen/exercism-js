/// <reference path="./global.d.ts" />
// @ts-check

const DEFAULT_LAYER_PREPARATION_TIME = 2;
const INGREDIENT_QUANTITIES_PER_LAYER = { noodles: 50, sauce: 0.2 };
const STANDARD_SERVES_PER_RECIPE = 2;

export function cookingStatus(timeRemaining) {
  switch (timeRemaining) {
    case undefined:
      return "You forgot to set the timer.";
    case 0:
      return "Lasagna is done.";
    default:
      return "Not done, please wait.";
  }
}

export function preparationTime(layers, avgTime) {
  return layers.length * (avgTime ?? DEFAULT_LAYER_PREPARATION_TIME);
}

function arrayTally(array) {
  let tally = {};
  for (let item of array) {
    tally[item] = (tally[item] ?? 0) + 1;
  }
  return tally;
}

export function quantities(layers) {
  let requiredQuantities = {};
  const layerTally = arrayTally(layers);
  for (let ingredient in INGREDIENT_QUANTITIES_PER_LAYER) {
    requiredQuantities[ingredient] =
      INGREDIENT_QUANTITIES_PER_LAYER[ingredient] *
      (layerTally[ingredient] ?? 0);
  }
  return requiredQuantities;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1));
}

export function scaleRecipe(recipe, people) {
  let newRecipe = {};
  const scaleFactor = people / STANDARD_SERVES_PER_RECIPE;
  for (let ingredient in recipe) {
    newRecipe[ingredient] = scaleFactor * recipe[ingredient];
  }
  return newRecipe;
}

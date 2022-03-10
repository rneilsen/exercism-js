/// <reference path="./global.d.ts" />
// @ts-check

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
  return layers.length * (avgTime ?? 2);
}

const arrayCount = (array, value) =>
  array.filter((item) => item === value).length;

export function quantities(layers) {
  return {
    noodles: 50 * arrayCount(layers, "noodles"),
    sauce: 0.2 * arrayCount(layers, "sauce"),
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1));
}

export function scaleRecipe(recipe, people) {
  let newRecipe = {};
  const scaleFactor = people / 2;
  for (let ingredient in recipe) {
    newRecipe[ingredient] = scaleFactor * recipe[ingredient];
  }
  return newRecipe;
}

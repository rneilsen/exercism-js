export const classify = (number) => {
  if (number <= 0) {
    throw "Classification is only possible for natural numbers.";
  }
  let aliquotSum = 0;
  for (let i = 0; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      aliquotSum += i;
    }
  }
  if (aliquotSum < number) {
    return "deficient";
  } else if (aliquotSum > number) {
    return "abundant";
  } else {
    return "perfect";
  }
};

function getDivisors(number, divisor) {
  if (number % divisor !== 0) {
    return [];
  }
  let n = divisor;
  let factors = [];
  while (n < number) {
    if (number % n === 0) factors.push(n);
    n += divisor;
  }
  return factors;
}

export const classify = (number) => {
  if (number <= 0 || !Number.isInteger(number)) {
    throw "Classification is only possible for natural numbers.";
  }
  if (number === 1) {
    return "deficient"; /* have to handle 1 as special case */
  }

  let factors = new Set([
    1,
    ...getDivisors(number, 2),
    ...getDivisors(number, 3),
  ]);
  for (let i = 6; i < number / 2 + 1; i += 6) {
    // apart from 2 and 3, all primes are of the form (6k +/- 1)
    if (!factors.has(i - 1)) {
      for (let item of getDivisors(number, i - 1)) {
        factors.add(item);
      }
    }
    if (!factors.has(i + 1)) {
      for (let item of getDivisors(number, i + 1)) {
        factors.add(item);
      }
    }
  }

  let aliquotSum = 0;
  for (let item of factors) aliquotSum += item;

  if (aliquotSum < number) {
    return "deficient";
  } else if (aliquotSum > number) {
    return "abundant";
  } else {
    return "perfect";
  }
};

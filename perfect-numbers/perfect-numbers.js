function getOddMultiplesThatDivide(base, target) {
  // return all odd multiples of base that divide target
  if (target % base !== 0) {
    return [];
  }
  let n = base;
  let factors = [];
  while (n < target) {
    if (target % n === 0) factors.push(n);
    n += 2 * base;
  }
  return factors;
}

function calcAliquotSum(number) {
  if (number === 1) return 0;

  let aliquotSum = 1; // 1 is a factor of everything

  // hardcode summing of even factors to reduce memory load
  let n = 2;
  while (n <= number / 2) {
    if (number % n === 0) aliquotSum += n;
    n += 2;
  }

  let oddFactors = new Set([...getOddMultiplesThatDivide(3, number)]);

  for (let i = 6; i < number / 2 + 1; i += 6) {
    // apart from 2 and 3, all primes are of the form (6k +/- 1)
    if (!oddFactors.has(i - 1)) {
      for (let item of getOddMultiplesThatDivide(i - 1, number)) {
        oddFactors.add(item);
      }
    }
    if (!oddFactors.has(i + 1)) {
      for (let item of getOddMultiplesThatDivide(i + 1, number)) {
        oddFactors.add(item);
      }
    }
  }

  for (let item of oddFactors) aliquotSum += item;
  return aliquotSum;
}

export const classify = (number) => {
  if (number <= 0 || !Number.isInteger(number)) {
    throw "Classification is only possible for natural numbers.";
  }

  const aliquotSum = calcAliquotSum(number);

  if (aliquotSum < number) {
    return "deficient";
  } else if (aliquotSum > number) {
    return "abundant";
  } else {
    return "perfect";
  }
};

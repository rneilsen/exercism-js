//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let newDate = new Date(date);
  newDate.setUTCSeconds(date.getUTCSeconds() + 10 ** 9);
  return newDate;
};

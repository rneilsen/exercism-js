//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (input) => {
  function splitIntoWords(word) {
    const wordRegex = /([a-z]+'[a-z]|[a-z]+|[0-9]+)/g;
    return word.toLowerCase().match(wordRegex);
  }

  let wordCounts = {};
  const currentCount = (someWord) => wordCounts[someWord] ?? 0;

  let words = splitIntoWords(input);
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordCounts[word] = currentCount(word) + 1;
  }

  return wordCounts;
};

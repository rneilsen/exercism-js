function splitIntoWords(word) {
  const wordRegex = /\w+('\w+)?/g;
  return word.toLowerCase().match(wordRegex);
}

export const countWords = (input) => {
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

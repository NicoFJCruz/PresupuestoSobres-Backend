const capitalizeWord = (word) => {
  const lowerCaseWord = word.toLowerCase();
  const capitalizedWord =
    lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);

  return capitalizedWord;
};

module.exports = {
  capitalizeWord,
};

const isLengthValid = (str, maxLength) => str.length <= maxLength;

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\s|[.,;!?:"'-]/g, '');

  return str === str.split('').reverse().join('');
};

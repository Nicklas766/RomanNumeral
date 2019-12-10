export const romanToArabic = (numString) => {
  const SYMBOL_TO_NUM = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let prevChar;

  return numString.split('').reduce((count, char) => {
    const oneLessSymbol = SYMBOL_TO_NUM[prevChar + char];
    const num = oneLessSymbol ? (oneLessSymbol - SYMBOL_TO_NUM[prevChar]) : SYMBOL_TO_NUM[char];
    prevChar = char;

    return count + num;
  }, 0);
};


export const canBeConvertedToRoman = (num) => Number.isInteger(num) && num > 0;

const arabicToRomanByPosition = (number, position) => {
  const SYMBOL_AT_POSITION = {
    2: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    1: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    0: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  };

  if (position >= 3) {
    return 'M'.repeat(number * (10 ** (position - 3)));
  }

  return SYMBOL_AT_POSITION[position][number];
};

export const arabicToRoman = (number) => {
  if (number > 0) {
    const numArr = [...number.toString()].map(Number).reverse();

    return numArr.reduce((acc, num, index) => arabicToRomanByPosition(num, index) + acc, '');
  }

  return 'error';
};

export default { romanToArabic, arabicToRoman, canBeConvertedToRoman };

import { canBeConvertedToRoman, romanToArabic, arabicToRoman } from './numeralConverter';

describe('#canBeConvertedToRoman(num)', () => {
  describe('see if an arabic number can be converted to roman', () => {
    test('-1 should return false', () => {
      expect(canBeConvertedToRoman(-1)).toEqual(false);
    });

    test('0 should return false', () => {
      expect(canBeConvertedToRoman(0)).toEqual(false);
    });

    test('1 should return true', () => {
      expect(canBeConvertedToRoman(1)).toEqual(true);
    });

    test('1776 should return true', () => {
      expect(canBeConvertedToRoman(1776)).toEqual(true);
    });

    test('0.25 should return false', () => {
      expect(canBeConvertedToRoman(0.25)).toEqual(false);
    });

    test('1.11 should return false', () => {
      expect(canBeConvertedToRoman(1.11)).toEqual(false);
    });
  });
});

describe('#arabicToRoman(num)', () => {
  describe('see if a conversion from arabic numeral to roman is correct - provided test data', () => {
    test('-1 should return error', () => {
      expect(arabicToRoman(-1)).toEqual('error');
    });

    test('0 should return error', () => {
      expect(arabicToRoman(0)).toEqual('error');
    });

    test('1 should return I', () => {
      expect(arabicToRoman(1)).toEqual('I');
    });

    test('5 should return V', () => {
      expect(arabicToRoman(5)).toEqual('V');
    });

    test('15 should return XV', () => {
      expect(arabicToRoman(15)).toEqual('XV');
    });

    test('42 should return XLII', () => {
      expect(arabicToRoman(42)).toEqual('XLII');
    });

    test('9 should return IX', () => {
      expect(arabicToRoman(9)).toEqual('IX');
    });

    test('94 should return XCIV', () => {
      expect(arabicToRoman(94)).toEqual('XCIV');
    });

    test('1776 should return MDCCLXXVI', () => {
      expect(arabicToRoman(1776)).toEqual('MDCCLXXVI');
    });
  });

  describe('see if a conversion from arabic numeral to roman is correct - special cases', () => {
    test('1001 should return MI', () => {
      expect(arabicToRoman(1001)).toEqual('MI');
    });

    test('1400 should return MCD', () => {
      expect(arabicToRoman(1400)).toEqual('MCD');
    });

    test('10000 should return a string containing 10 M chars', () => {
      expect(arabicToRoman(10000)).toEqual('M'.repeat(10));
    });

    test('100000 should return a string containing 100 M chars', () => {
      expect(arabicToRoman(100000)).toEqual('M'.repeat(100));
    });

    test('1001776 should return a string containing 1000 M chars + MDCCLXXVI', () => {
      expect(arabicToRoman(1001776)).toEqual(`${'M'.repeat(1000)}MDCCLXXVI`);
    });
  });
});

describe('#romanToArabic(num)', () => {
  describe('see if a conversion from roman numeral to arabic is correct - provided test data', () => {
    test('M should return 1000', () => {
      expect(romanToArabic('M')).toEqual(1000);
    });

    test('I should return 1', () => {
      expect(romanToArabic('I')).toEqual(1);
    });

    test('V should return 5', () => {
      expect(romanToArabic('V')).toEqual(5);
    });

    test('XV should return 15', () => {
      expect(romanToArabic('XV')).toEqual(15);
    });

    test('XLII should return 42', () => {
      expect(romanToArabic('XLII')).toEqual(42);
    });

    test('IX should return 9', () => {
      expect(romanToArabic('IX')).toEqual(9);
    });

    test('XCIV should return 94', () => {
      expect(romanToArabic('XCIV')).toEqual(94);
    });

    test('MDCCLXXVI should return 1776', () => {
      expect(romanToArabic('MDCCLXXVI')).toEqual(1776);
    });

    test('MCD should return 1400', () => {
      expect(romanToArabic('MCD')).toEqual(1400);
    });

    test('1. wrong symbols should return NaN', () => {
      expect(romanToArabic('hello')).toEqual(NaN);
    });

    test('2. wrong symbols should return NaN', () => {
      expect(romanToArabic('MDCCW')).toEqual(NaN);
    });
  });


  describe('see if a conversion from roman numeral to arabic is correct - special cases', () => {
    test('MI should return 1001', () => {
      expect(romanToArabic('MI')).toEqual(1001);
    });

    test('MCD should return 1400', () => {
      expect(romanToArabic('MCD')).toEqual(1400);
    });

    test('MMMMMMMMMM should return 10000', () => {
      expect(romanToArabic('M'.repeat(10))).toEqual(10000);
    });

    test('100 M chars should return 100000', () => {
      expect(romanToArabic('M'.repeat(100))).toEqual(100000);
    });

    test('1000 M chars + MDCCLXXVI should return 1001776', () => {
      expect(romanToArabic(`${'M'.repeat(1000)}MDCCLXXVI`)).toEqual(1001776);
    });
  });
});

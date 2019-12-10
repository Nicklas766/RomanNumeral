# Roman Numerals
Nicklas Envall

This project solves the main challenge and also one extra material challenge (opposite direction). The project is created from scratch with NPM (npm init). Jest and ESlint (follows Airbnb's style guide) is used for testing.

Installing dependencies:
```
npm install
```
Then you can run the following commands, (for more commands please look in `package.json`):
```
npm test      // run static and unit testing
npm run jest  // unit
npm runt lint // static 
```

### Documentation:
The functions `canBeConvertedToRoman` and `arabicToRoman` are intended to be used together to achieve cleaner code, like:
```language-javascript
if (canBeConvertedToRoman(num)) {
    // do something with arabicToRoman(num);
} else {
    // do something else (throw error?)
}
```

`romanToArabic` returns NaN if the passed string is invalid:
```language-javascript
romanToArabic('I'); // 1
romanToArabic('no'); // NaN
```

### Note from the author:
I started by creating the environment described above. Then created a test (red phase). Then I tried to find a solution (green phase) by reading the [wikipedia article](https://en.wikipedia.org/wiki/Roman_numerals), my initial thought was to use [positional notation](https://en.wikipedia.org/wiki/Positional_notation), but I noticed that that would not work. I studied the pattern and found a solution which is based on knowing that it's base-10 followed by using the digit's position in the entire number and the digit to figure out its corresponding symbol with an object like:

```
2: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
1: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
0: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
```
Then I refactored the code to make my code less complex and better. After completing the solution for the "main problem" (`canBeConvertedToRoman` and `arabicToRoman`), I googled to see other solutions to compare them to mine. This is why the extra material solution (`romanToArabic`) is quite similar to the ones available online.

#### Extra note:
In the `arabicToRoman` function I would've liked to do the following:

```language-javascript
export const arabicToRoman = (number) => {
    const numArr = [...number.toString()].map(Number).reverse();

    return numArr.reduce((acc, num, index) => arabicToRomanByPosition(num, index) + acc, '');
};
```
But to pass the following two test cases `-1 === error` and `0 === error` I added a `if (number > 0) { ... } return 'error'`.


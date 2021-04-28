//used for convert numbers to roman array string
const ascRomanArray = [
  { num: 1, letter: "I" },
  { num: 4, letter: "IV" },
  { num: 5, letter: "V" },
  { num: 9, letter: "IX" },
  { num: 10, letter: "X" },
  { num: 40, letter: "XL" },
  { num: 50, letter: "L" },
  { num: 90, letter: "XC" },
  { num: 100, letter: "C" },
  { num: 400, letter: "CD" },
  { num: 500, letter: "D" },
  { num: 900, letter: "XM" },
  { num: 1000, letter: "M" },
]

//used for convert roman string to numbers
const ascRomanArray2 = [
  { num: 1, letter: "I" },
  { num: 5, letter: "V" },
  { num: 4, letter: "IV" },
  { num: 10, letter: "X" },
  { num: 9, letter: "IX" },
  { num: 50, letter: "L" },
  { num: 40, letter: "XL" },
  { num: 100, letter: "C" },
  { num: 90, letter: "XC" },
  { num: 500, letter: "D" },
  { num: 400, letter: "CD" },
  { num: 1000, letter: "M" },
  { num: 900, letter: "XM" },
]

const descRomanArray = ascRomanArray.reverse();
const descRomanArray2 = ascRomanArray2.reverse();


export function numeralToRoman(n) {
  let romanStr = ""
  for (let roman of descRomanArray) {
    while (n / roman.num >= 1) {
      romanStr += roman.letter
      n -= roman.num
    }
  }
  return romanStr
}

export function romanToNumeral(str) {
  let numeral = 0
  while (str) {
    for (let roman of descRomanArray2) {
      if (str.includes(roman.letter)) {
        numeral += roman.num
        str = str.replace(roman.letter, '');
      }
    }
  }
  return numeral
}

// test //

// // print 100 Roman to Numeral
// for (let n = 1; n <= 100; n++) {
//   console.log(romanToNumeral(numeralToRoman(n)))
// }

// //print 100 numeral to roman
// for (let n = 1; n <= 100; n++) {
//   console.log(n, numeralToRoman(n))
// }


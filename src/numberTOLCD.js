const baseNumber = {
  top: {
    left: 0,
    middle: 1,
    right: 0,
  },
  middle: {
    left: 1,
    middle: 1,
    right: 1,
  },
  bottom: {
    left: 1,
    middle: 1,
    right: 1,
  }
}
const baseNumber0 = { top: { left: 0, middle: 0, right: 0, }, middle: { left: 0, middle: 0, right: 0, }, bottom: { left: 0, middle: 0, right: 0, } }

let one = JSON.parse(JSON.stringify(baseNumber0))
one.bottom.right = 1
one.middle.right = 1

let two = JSON.parse(JSON.stringify(baseNumber))
two.middle.left = 0
two.bottom.right = 0

let three = JSON.parse(JSON.stringify(baseNumber))
three.middle.left = 0
three.bottom.left = 0

let four = JSON.parse(JSON.stringify(baseNumber))
four.top.middle = 0
four.bottom.left = 0
four.bottom.middle = 0

let five = JSON.parse(JSON.stringify(baseNumber))
five.middle.right = 0
five.bottom.left = 0

let six = JSON.parse(JSON.stringify(baseNumber))
six.middle.right = 0

let seven = JSON.parse(JSON.stringify(baseNumber0))
seven.top.middle = 1
seven.middle.right = 1
seven.bottom.right = 1

let height = JSON.parse(JSON.stringify(baseNumber))

let nine = JSON.parse(JSON.stringify(baseNumber))
nine.bottom.left = 0


const digitNumbers = [one, two, three, four, five, six, seven, height, nine]




function numberToLCD(numbers, width = 1, height = 1) {
  numbers = numbers.split("")
  let stringLCD = ""
  for (let key in baseNumber) {
    for (let num of numbers) {
      for (const [sideName, NumberOfBars] of Object.entries(digitNumbers[num - 1][key])) {
        if (NumberOfBars !== 0) {
          if ((sideName === "middle")) {
            // for (let i = 0; i < width; i++) {
            stringLCD += "_"
            // }
          } else {
            stringLCD += "|"
          }
        } else {
          stringLCD += "\ "
        }
      }
    }
    stringLCD += "\n"
  }
  return stringLCD
}


console.log(numberToLCD("123456789", 3))
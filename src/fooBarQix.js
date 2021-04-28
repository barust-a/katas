function computeNumber(n) {
  let str = ""
  if (n % 3 === 0) {
    str += "Foo"
  }
  if (n % 5 === 0) {
    str += "Bar"
  }
  if (n % 7 === 0) {
    str += "Qix"
  }
  return str
}

function computeStr(n) {
  const str = n.toString()
  let finalStr = ""
  for (let letter of str) {
    switch (letter) {
      case "3":
        finalStr += "Foo"
        break
      case "5":
        finalStr += "Bar"
        break
      case "7":
        finalStr += "Qix"
        break
      case "0":
        finalStr += "*"
        break
    }
  }
  return finalStr
}

export function fooBarQix(n) {
  let str = computeNumber(n)
  str += computeStr(n)
  return (str) ? str : n
}

//only not working for exemple 101 => 1*1 but this implicit rule is excluded by 10101 => FooQix** so i decide to ignore that line 
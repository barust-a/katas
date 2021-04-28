export function wordWrap(str, columnNumbers) {
  let charsCounter = 0
  let finalStr = ""
  const arrayStr = str.split(" ")

  for (let i = 0; i < arrayStr.length; i++) {
    charsCounter += arrayStr[i].length
    if (charsCounter < columnNumbers) {
      finalStr += arrayStr[i] + " "
      charsCounter++
    } else {
      charsCounter = 0
      finalStr.trimEnd() //remove last space
      finalStr += "\n"
      i--
    }
  }
  return finalStr.trimEnd()
}

// console.log(wordWrap("bonjour je m'appelle qqch et je me porte à merveille", 30))
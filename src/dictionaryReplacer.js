function dictionaryReplacer(str, objectDict) {
  for (const key in objectDict) {
    str = str.replace("\$"+key+"\$", objectDict[key])
  }
  return str
}

// console.log(dictionaryReplacer("\$temp\$ here comes the \$name\$", {temp: "temporary", name: "henry"}))

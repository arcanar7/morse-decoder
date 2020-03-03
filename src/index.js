const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
}

function decode(expr) {
  let result = []

  for (let item of expr.match(/.{1,10}/g)) {
    if (item === "**********") result.push(" ")
    else {
      let enc_word = []
      const ARRAY_WORD = parseInt(item)
        .toString()
        .match(/.{1,2}/g)
      for (let word of ARRAY_WORD) {
        if (word === "10") enc_word.push(".")
        if (word === "11") enc_word.push("-")
      }
      result.push(MORSE_TABLE[enc_word.join("")])
    }
  }

  return result.join("")
}

module.exports = {
  decode
}

import assert from "assert"
import { wordWrap } from "../src/wordWrap.js"
import { expect } from "chai"

describe('test de wordWrap', function () {
  it('should return a string with well placed line break',
    () => {
      const test = wordWrap("bonjour je m'appelle qqch et je me porte à merveille", 30)
      expect(test).equal("bonjour je m'appelle qqch et \nje me porte à merveille")
    })

});
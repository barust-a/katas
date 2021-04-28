import assert from "assert"
import { fizzBuzz } from "../src/fizzBuzz.js"
import { expect } from "chai"

describe('test de fizzBuzz', function () {
  it('should return fizz when mutiple of 3',
    () => {
      const test = fizzBuzz(3)
      expect(test).equal("Fizz")
    })

    it('should return Buzz when mutiple of 5',
    () => {
      const test = fizzBuzz(5)
      expect(test).equal("Buzz")
    })
    
});
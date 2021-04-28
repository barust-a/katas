import { fooBarQix } from "../src/fooBarQix.js"
import { expect } from "chai"

describe('test de fooBarQix', function () {
  it('test for 33',
    () => {
      const test = fooBarQix(33)
      expect(test).equal("FooFooFoo")
    })

    it('test for 53',
    () => {
      const test = fooBarQix(53)
      expect(test).equal("BarFoo")
    })


    it('test for 303',
    () => {
      const test = fooBarQix(303)
      expect(test).equal("FooFoo*Foo")
    })

    it('test for 10101',
    () => {
      const test = fooBarQix(10101)
      expect(test).equal("FooQix**")
    })
    
});
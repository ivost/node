"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_1 = require("./greeter");
const chai = require("chai");
const expect = chai.expect;
describe('My greeter class spec', () => {
    it('should greet', () => {
        let greeter = new greeter_1.Greeter("world");
        expect(greeter.greet()).to.equal("Hello, world");
    });
});
//# sourceMappingURL=greeter.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const greeter_1 = require("./greeter");
const chai = require("chai");
const expect = chai.expect;
describe('My math library', () => {
    it('should be able to add things correctly', () => {
        expect(math_1.MyMath.add(3, 4)).to.equal(7);
    });
    it('should greet', () => {
        let greeter = new greeter_1.Greeter("world");
        greeter.greet();
    });
});
//# sourceMappingURL=math.spec.js.map
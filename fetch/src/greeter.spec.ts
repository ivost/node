import { Greeter } from './greeter';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('My greeter class spec', () => {

  it('should greet' , () => {
	let greeter = new Greeter("world");
	expect(greeter.greet()).to.equal("Hello, world");
  });

});
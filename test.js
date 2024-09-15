// test.js
const chai = require('chai');
const expect = chai.expect;
const add = require('./script.js');

describe('add', () => {
  it('powinien dodać poprawnie dwie liczby', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('powinien dać poprawny wynik dla liczb ujemnych', () => {
    const result = add(-1, 1);
    expect(result).to.equal(0);
  });
});
//uruchomienie testu mocha - npx mocha test.js
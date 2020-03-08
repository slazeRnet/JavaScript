function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

let test1 = 1;
let test2 ="a";
let test3 ="ab";

describe('isOddOrEven', function () {
    it('with a number parameter, should return undefined', function () {
        expect(isOddOrEven(13)).to.equal(undefined, "Function did not return the correct result!");
    });
    // it('with a object parameter, should return undefined', function () {
    //     isOddOrEven({name: 'pesho'}).should.equal(undefined, "Function did not return the correct result!");
    // });
    it('with an even length string should return "even"', function () {
        assert.equal(isOddOrEven("roar"), "even", "Function did not return correct result!");
    });
    it('with an odd length string, should return "odd"', function () {
        expect(isOddOrEven("pesho")).to.equal("odd", "Function did not return correct result!");
    });
    it('with multiple consecutive checks, should return correct values', function () {
        expect(isOddOrEven("cat")).to.equal('odd', "Function did not return correct result!");
        expect(isOddOrEven("alabala")).to.equal("odd", "Function did not return correct result!");
        expect(isOddOrEven("is it even")).to.equal("even", "Function did not return correct result!");
    });
});

// mocha ./02-even-or-odd.js
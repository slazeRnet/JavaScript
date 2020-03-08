function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe("lookupChar", function(){
    it("expected to return undefined if first parameter is not string", function(){
        expect(lookupChar(1, 0)).to.equal(undefined, "The function did not return the correct result!");
    });
    it("expected to return undefined ", function(){
        expect(lookupChar("test", 2)).to.be.an('string', "The function did not return the correct result!");
    });
    it("expected to return undefined ", function(){
        expect(lookupChar("test", 3.2)).to.equal(undefined, "The function did not return the correct result!");
    });
    it("expected to return undefined if secound parameter is not int", function(){
        expect(lookupChar("test", "0")).to.equal(undefined, "The function did not return the correct result!");
    });
    it("expected to return incorrect index if there is incompatibility between index and string length", function(){
        expect(lookupChar("test", 5)).to.equal("Incorrect index", "The function did not return the correct result!");
        expect(lookupChar("test", 4)).to.equal("Incorrect index", "The function did not return the correct result!");
        expect(lookupChar("test", -1)).to.equal("Incorrect index", "The function did not return the correct result!");
    });
    it("expected to return the char at the given inde", function(){
        expect(lookupChar("test", 0)).to.equal('t', "The function did not return the correct result!");
        expect(lookupChar("test", 3)).to.equal('t', "The function did not return the correct result!");
    });
});
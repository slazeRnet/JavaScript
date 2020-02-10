let assert = require('chai').assert;
let arr = [1,2,3,4];

describe("Array", function(){
    it("if not found return -1", function(){
        let result = arr.indexOf(9);
        assert.equal(result, -1);
    });
});
    // run this test by typing in the terminal:
    //mocha ./unit-testing.js




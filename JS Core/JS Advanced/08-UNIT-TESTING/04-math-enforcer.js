//math-enforcer
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe("mathEnforcer", function(){
    describe("addFive", function(){
        it("expected to return 10", function(){
            expect(mathEnforcer.addFive(5)).to.equal(10, "Wrong math !");
        });
        
        it("expected to return undefined", function(){
            expect(mathEnforcer.addFive("5")).to.equal(undefined, "Wrong datatype !");
        });
        it("expected to return 10 int", function(){
            let value = mathEnforcer.addFive(5);
           assert.isNumber(value, "Wrong data type !");
        });
        it("testing negative - expected to retutn -1", function(){
            expect(mathEnforcer.addFive(-6)).to.equal(-1, "Wrong math !");
        });
        it("testing negative - expected to retutn -1 int", function(){
            let value = mathEnforcer.addFive(-6);
            assert.isNumber(value, "Wrong data type !");
        });
        it("testing floatint point - expected to retutn -6.66 float", function(){
            let value = mathEnforcer.addFive(-11.66);
            assert.isNumber(value, "Wrong data type !");
        });
        it("testing floating point - expected to retutn -6.66", function(){
            expect(mathEnforcer.addFive(-11.66)).to.be.closeTo(-6.66, 0.01);
        });

    });
    describe("subtractTen", function(){
        it("expected to return 10", function(){
            expect(mathEnforcer.subtractTen(20)).to.equal(10, "Wrong math !");
        });
        it("expected to return 10", function(){
            expect(mathEnforcer.subtractTen("20")).to.equal(undefined, "Wrong data type !");
        });
        it("expected to return 10 int", function(){
            let value = mathEnforcer.subtractTen(20);
           assert.isNumber(value, "Wrong data type !");
        });
        it("testing negative - expected to retutn -11", function(){
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11, "Wrong math !");
        });
        it("testing negative - expected to retutn -11 int", function(){
            let value = mathEnforcer.subtractTen(-1);
            assert.isNumber(value, "Wrong data type !");
        });
        it("testing floatint point - expected to retutn -16.66 float", function(){
            let value = mathEnforcer.subtractTen(-6.66);
            assert.isNumber(value, "Wrong data type !");
        });
        it("testing floating point - expected to retutn -16.66", function(){
            expect(mathEnforcer.subtractTen(-6.66)).to.be.closeTo(-16.66, 0.01);
        });

    });
    describe("sum", function(){
        it("expected to return 10", function(){
            expect(mathEnforcer.sum(5, 5)).to.equal(10, "Wrong math !");
        });
        it("expected to return undefined", function(){
            expect(mathEnforcer.sum("5", 5)).to.equal(undefined, "Wrong data type !");
        });
        it("expected to return undefined", function(){
            expect(mathEnforcer.sum(5, "5")).to.equal(undefined, "Wrong data type !");
        });
        it("expected to return 10 int", function(){
            let value = mathEnforcer.sum(5,5);
           assert.isNumber(value, "Wrong data type !");
        });
        it("testing negative - expected to retutn -11", function(){
            expect(mathEnforcer.sum(-21, 10)).to.equal(-11, "Wrong math !");
        });
        it("testing negative - expected to retutn -11 int", function(){
            let value = mathEnforcer.sum(-21, 10);
            assert.isNumber(value, "Wrong data type !");
        });
        it("testing negative - expected to retutn -11", function(){
            expect(mathEnforcer.sum(-10, -1)).to.equal(-11, "Wrong math !");
        });
        it("testing floatint point - expected to retutn -3.33 float", function(){
            let value = mathEnforcer.sum(-6.66, 9.99);
            assert.isNumber(value, "Wrong data type !");
        });
        it("testing floating point - expected to retutn -3.33", function(){
            let value1 = mathEnforcer.sum(-6.66, 9.99);
            let value2 = mathEnforcer.sum(6.66, 9.99)
            let value3 = mathEnforcer.sum(6.66, -9.99);
            expect(value1).to.be.closeTo(3.33, 0.01);
            expect(value2).to.be.closeTo(16.65, 0.01);
            expect(value3).to.be.closeTo(-3.33, 0.01);

        });
    });
});

class PaymentPackage {
    constructor(name, value) {
      this.name = name;
      this.value = value;
      this.VAT = 20;      // Default value    
      this.active = true; // Default value
    }
  
    get name() {
      return this._name;
    }
  
    set name(newValue) {
      if (typeof newValue !== 'string') {
        throw new Error('Name must be a non-empty string');
      }
      if (newValue.length === 0) {
        throw new Error('Name must be a non-empty string');
      }
      this._name = newValue;
    }
  
    get value() {
      return this._value;
    }
  
    set value(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('Value must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('Value must be a non-negative number');
      }
      this._value = newValue;
    }
  
    get VAT() {
      return this._VAT;
    }
  
    set VAT(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('VAT must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('VAT must be a non-negative number');
      }
      this._VAT = newValue;
    }
  
    get active() {
      return this._active;
    }
  
    set active(newValue) {
      if (typeof newValue !== 'boolean') {
        throw new Error('Active status must be a boolean');
      }
      this._active = newValue;
    }
  
    toString() {
      const output = [
        `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${this.value}`,
        `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
      ];
      return output.join('\n');
    }
  }
  
  let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe("PaymentPackage", function(){
    describe("constructor", function(){
        it("initiating PaymentPackage with 2 undefined parameters ", function(){
            let undefined = new PaymentPackage("P", 1);
            expect(undefined.name).to.equal("P", "name must equal P");
            expect(undefined.value).to.equal(1, "value must equal 1");
        });
        it("initiating PaymentPackage with wrong parameters - expecting error ", function(){
            expect(function(){
                new PaymentPackage()
            }).to.throw(Error, "Name must be a non-empty string");
            expect(function(){
                new PaymentPackage("P")
            }).to.throw(Error, "Value must be a non-negative number");
            expect(function(){
                new PaymentPackage("P", -0.1)
            }).to.throw(Error, "Value must be a non-negative number");
        });
        it("Default value check after initialization ", function(){
            let package =  new PaymentPackage("Pack", 10);   
            expect(package.value).to.equal(10, "value must equal 10");
            expect(package.VAT).to.equal(20, "value must equal 10");
            expect(package.active).to.equal(true, "value must equal 10");
        });

    });
    describe("name", function(){
        it("wrong name param initialization returns error", function(){
            expect(function(){
                new PaymentPackage("", 1)
            }).to.throw(Error, "Name must be a non-empty string");
        });
        it("is the param name the same after initialization", function(){
            let p =  new PaymentPackage("Pack", 1);
            expect(
               p.name
            ).to.equal("Pack", "name needs to be the same");
        });
        it("testing the change name functionality", function(){
            let p =  new PaymentPackage("Pack", 1);
            p.name = "new";
            expect(
               p.name
            ).to.equal("new", "name needs to be the same");
        });
    });
    describe("value", function(){
        it("wrong value param initialization returns error", function(){
            expect(function(){
                new PaymentPackage("", {})
            }).to.throw(Error, "Name must be a non-empty string");
        });
        it("is the param name the same after initialization", function(){
            let p =  new PaymentPackage("Pack", 0);
            expect(
               p.value
            ).to.equal(0, "value needs to be the same");
        });
        it("testing the change name functionality", function(){
            let p =  new PaymentPackage("Pack", 1);
            p.value = 100,000;
            expect(
               p.value
            ).to.equal(100,000, "name needs to be the same");
        });
    });
    describe("VAT", function(){
        let p = new PaymentPackage("Pack", 100);
        it("negative VAT is expected to return error", function(){
            expect(function(){
                p.VAT = -1;
            }).to.throw(Error, "VAT must be a non-negative number");
        });
        it("undefined VAT is expected to return error", function(){
            expect(function(){
                p.VAT = undefined;
            }).to.throw(Error, "VAT must be a non-negative number");
        });
        it("multiple VAT changes tsting", function(){
            let p =  new PaymentPackage("Pack", 1);
            p.VAT = 100;
            expect(
               p.VAT
            ).to.equal(100, "VAT needs to be the same as initialized");
            p.VAT = 1,000,000;
            expect(
               p.VAT
            ).to.equal(1,000,000, "VAT needs to be the same as initialized");
            p.VAT =0;
            expect(
               p.VAT
            ).to.equal(0, "VAT needs to be the same as initialized");
        });
    });
    describe("active", function(){
        //Active status must be a boolean
        it("testing active property it needs to be bool", function(){
            let p = new PaymentPackage("1", 1);
            expect(function(){
                p.active = undefined;
            }).to.throw(Error, "Active status must be a boolean");
            expect(function(){
                p.active = "true";
            }).to.throw(Error, "Active status must be a boolean");
        });
        it("testing active after initialization", function(){
            let p =  new PaymentPackage("Pack", 1);
            expect(
               p.active
            ).to.equal(true, "true is the default value");
            p.active = false;
            expect(
                p.active
             ).to.equal(false, "false is the expected value");
        });
    });
    describe("toString", function(){
        it("expecting toString to renturn the values", function(){
            let p =  new PaymentPackage("Pack", 1);
            let str = p.toString();
            let expected = [
                `Package: Pack`,
                `- Value (excl. VAT): 1`,
                `- Value (VAT 20%): 1.2`
            ];
            let result =  expected.join('\n');
            expect(
               str
            ).to.equal(result, "expected 3 lines of output of the toString() method");
        });
    });
});
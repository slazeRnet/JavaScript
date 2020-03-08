let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
class StringBuilder {
    constructor(string) {
      if (string !== undefined) {
        StringBuilder._vrfyParam(string);
        this._stringArray = Array.from(string);
      } else {
        this._stringArray = [];
      }
    }
  
    append(string) {
      StringBuilder._vrfyParam(string);
      for(let i = 0; i < string.length; i++) {
        this._stringArray.push(string[i]);
      }
    }
  
    prepend(string) {
      StringBuilder._vrfyParam(string);
      for(let i = string.length - 1; i >= 0; i--) {
        this._stringArray.unshift(string[i]);
      }
    }
  
    insertAt(string, startIndex) {
      StringBuilder._vrfyParam(string);
      this._stringArray.splice(startIndex, 0, ...string);
    }
  
    remove(startIndex, length) {
      this._stringArray.splice(startIndex, length);
    }
  
    static _vrfyParam(param) {
      if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }
  
    toString() {
      return this._stringArray.join('');
    }
  }

describe("stringBuilder", function() {
    describe("constructor", function() {
        it("expected to return test char array", function() {
           let param = "hello";
           let sb = new StringBuilder('hello');
           expect(JSON.stringify(sb._stringArray)).to.equal(JSON.stringify([ 'h', 'e', 'l', 'l', 'o' ]));
        });
        it("expected to have and empty inicialized array", function() {
            let sb = new StringBuilder();
            expect(JSON.stringify(sb._stringArray)).to.equal(JSON.stringify([]));
         });
        it("expected to throw type error", function() {
            let param = 1;
            expect(function () {
                new StringBuilder(param
                )}).to.throw(TypeError, 'Argument must be string'); //
         });
         it("expected to create empty array with undefined param", function() {
            let param = undefined;
            expect(JSON.stringify(new StringBuilder(param)._stringArray)).to.equal(JSON.stringify([]));
         });
    });
    describe("append string", function() {
        it("expected to append the char array with the chars in the string", function() {
            let sb = new StringBuilder('hello');
            sb.append('ab');
            expect(sb.toString())
            .to.equal('helloab' );
            expect(sb._stringArray.length)
            .to.equal(7);
        });
        it("expected to throw an exception when given object", function() {
            let sb = new StringBuilder('hello');
            let obj = 7.77;
            expect(function(){
                sb.append(obj)
            }).to.throw(TypeError, 'Argument must be string');//
        });
    });
    describe("prepend", function() {
        it("expected to prepend the array when string is the parameter", function() {
            let sb = new StringBuilder('hello');
            sb.prepend('ab');
            expect(sb.toString())
            .to.equal( 'abhello');
            expect(sb._stringArray.length)
            .to.equal(7);
        });
        it("expected to throw an exception when given object", function() {
            let sb = new StringBuilder('hello');
            let obj = {
                string: 'a'
            };
            expect(function(){
                sb.prepend(obj)
            }).to.throw(TypeError, 'Argument must be string');//
        });
    });
    describe("insertAt", function() {
        it("expected to insert 2 chars at index 0", function() {
            let sb = new StringBuilder('hello');
            sb.insertAt('ab', 0);
            expect(sb.toString())
            .to.equal( 'abhello');
            expect(sb._stringArray.length)
            .to.equal(7);
        });
        it("expected to insert 2 chars at index 4", function() {
            let sb = new StringBuilder('hello');
            sb.insertAt('ab', 5);
            expect(sb.toString())
            .to.equal( 'helloab');
            expect(sb._stringArray.length)
            .to.equal(7);
        });
        it("expected to throw an exception when given object", function() {
            let sb = new StringBuilder('hello');
            let obj = {
                string: 'a'
            };
            expect(function(){
                sb.insertAt(obj)
            }).to.throw(TypeError, 'Argument must be string');//
        });
        // TODO: …
    });
    describe("remove", function() {
        it("expected to remove 2 chars on index 0, and must have a lenght of 3", function() {
            let sb = new StringBuilder('hello');
            sb.remove(0, 2);
            expect(sb.toString())
            .to.equal( 'llo');
            expect(sb._stringArray.length)
            .to.equal(3);
        });
        it("expected to remove 2 chars on index 3, and must have a lenght of 3", function() {
            let sb = new StringBuilder('hello');
            sb.remove(3, 2);
            expect(sb.toString())
            .to.equal( 'hel');
            expect(sb._stringArray.length)
            .to.equal(3);
        });
        // TODO: …
    });
    describe("toString", function() {
        it("return string representation of the array", function() {
            let sb = new StringBuilder('hello');
            expect(sb.toString())
            .to.equal( 'hello');
        });
    });
                        
});
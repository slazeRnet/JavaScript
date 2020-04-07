let Parser = require("./solution.js");
let assert = require("chai").assert;
let expect = require('chai').expect;
let should = require('chai').should;
let test;
describe("Parser", () => {
    let parser;
    beforeEach(() =>{
            parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            assert.deepEqual(parser.addEntries("Steven:tech-support Edd:administrator"), 'Entries added!');
            assert.deepEqual(JSON.stringify(parser.data),`[{"Nancy":"architect"},{"John":"developer"},{"Kate":"HR"},{"Steven":"tech-support"},{"Edd":"administrator"}]`);
              assert.deepEqual(parser.removeEntry("Kate"), 'Removed correctly!');
                assert.deepEqual(JSON.stringify(parser.data),`[{"Nancy":"architect"},{"John":"developer"},{"Steven":"tech-support"},{"Edd":"administrator"}]`);
            assert.deepEqual(parser.print(),`id|name|position
0|Nancy|architect
1|John|developer
2|Steven|tech-support
3|Edd|administrator`);
    });
    describe("constructor", () => {
        it('should initialise correctly', () =>{
            let parser1 = new Parser('[{"Nancy":"architect"},{"John":"developer"},{"Kate":"HR"}]');
            //assert.deepEqual(JSON.stringify(parser1._data), '[{"Nancy":"architect"},{"John":"developer"},{"Kate":"HR"}]');
            assert.isArray(parser1._log);
        });
    });
});
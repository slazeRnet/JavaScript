let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;
let Console = require('./05-c-sharp-console.js');

describe('Console', function(){
let text1 = ['Hello {0}, the date is {1}, {2}', 'Admin', '01/01/1990', '20:30'];
let sample1;
beforeEach(() =>{
//sample1
});

    it('placeholder testing', function(){

        let result = JSON.stringify([ '{0}', '{1}', '{2}' ]);
        let actual = JSON.stringify(text1[0].match(Console.placeholder).sort(function (a, b) {
            a = Number(a.substring(1, a.length - 1));
            b = Number(b.substring(1, b.length - 1));
            return a - b;
          }));
        assert.deepEqual(actual, result, 'Incorect match');

    });
    it('simple string tesing', function(){

        let result = '1234567890';
        let actual = Console.writeLine('1234567890');
        assert.deepEqual(actual, result, 'expected to return the sting as it was parsed');

    });
    it('object tesing', function(){

        let obj = {a: 20, 1:'abc', 2:'123', 3:{0:1, 1:2, 2:3 }};
        let result = JSON.stringify(obj);
        let actual = Console.writeLine(obj);
        assert.deepEqual(actual, result, 'expected to return stringified object');

    });
    it('expected to replace each placeholder with its corresponding parameter', function(){

        let result = 'Hello Admin, the date is 01/01/1990, 20:30';
        let actual = Console.writeLine(text1[0], text1[1], text1[2], text1[3]);
        assert.deepEqual(actual, result,
             'expected to return string with the correct replacement of its placeholder');

    });


    describe('cases in which the console should throw Error', () =>{
        it('in case of more than 2 args the first should be string', function() {

            let message = 'No string format given!';
            let text = 1;
            let param1 = 'string';
            assert.throws(() => {
                Console.writeLine(text, param1);
            }, message);

        });
        it('in case of more than 2 args but the 1st is object', function() {

            let message = 'No string format given!';
            let text = {};
            let param1 = 1;
            assert.throws(() => {
                Console.writeLine(text, param1);
            }, message);

        });
        it('in case the number of placeholders does not correspond to the number of params - throw Error',
        function() {

            let message = 'Incorrect amount of parameters given!';
            let text = text1[0];
            let param1 = 1;
            
            assert.throws(() => {
                Console.writeLine(text, param1, param1);
            }, message);

            assert.throws(() => {
                Console.writeLine(text, param1, param1, param1, param1);
            }, message);

        });
        it('throw and error if there is placeholder which is not within the prams range', function() {

            let message = 'Incorrect placeholders given!';
            let text =  'Hello {0}, the date is {1}, {3}';
            let param1 = 'string';
            assert.throws(() => {
                Console.writeLine(text, param1, param1, param1);
            }, message);

        });
    });
});
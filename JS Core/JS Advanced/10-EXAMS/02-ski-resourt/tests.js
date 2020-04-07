let SkiResort = require('./solution');
let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe("Skiresort", function() {
    let stringifyCompare = (a, b) => assert.deepEqual(JSON.stringify(a), JSON.stringify(b));
    let skiResort;
    let rn = 'Resort Name'
    beforeEach(function(){
        skiResort = new SkiResort(rn);
    })
    describe("created with one parameter", function() {
        it("when created with string", function(){
        assert.deepEqual(skiResort.name, rn);
        assert.deepEqual(skiResort.voters, 0);
        stringifyCompare(skiResort.hotels, []);
         });
    });

    describe("bestHotel method", function() {
        it("no voter case", function(){
         assert.deepEqual(skiResort.bestHotel, 'No votes yet')
        });
        it(" voter case", function(){
           // skiResort.build("")
           // assert.deepEqual
        });
    });
    describe("build() method", function() {
        it("should trow if there is no name", function(){
         assert.throws(() => {skiResort.build('', 1)})
         //assert.throws(() => {skiResort.build('hello', 'hello')})
        });
        it("should trow if beds are less than 1", function(){
            assert.throws(() => {skiResort.build('Hotel', 0)});
            assert.throws(() => {skiResort.build('')});
            assert.throws(() => {skiResort.build('', -1)});
           });
        it("addin ghotel should work and correctly and return string ", function(){
            assert.deepEqual(skiResort.build('New Hotel', 10), 'Successfully built new hotel - New Hotel')
            console.log(skiResort.hotels);
            
            stringifyCompare(skiResort.hotels, [{"name":"New Hotel","beds":10,"points":0}]);
        });
    });

    describe('test leave func', function(){
        it('should throw an error if wrong input', function(){
            assert.throws(() => {skiResort.book()});
            assert.throws(() => {skiResort.book('Hello', 1)});
            assert.throws(() => {skiResort.book('', 1)});
        });
        it('should throw an error if wrong input', function(){
            skiResort.build('Name', 10)
            assert.throws(() => {skiResort.book('Name', 11)});
        });
        it('should throw an error if wrong input', function(){
            skiResort.build('Name', 10)
            assert.deepEqual(skiResort.book('Name', 10), 'Successfully booked');
        });
        it('testing if the hotel decrements the beds', function(){
            skiResort.build('Name', 10)
            skiResort.book('Name', 10)
          stringifyCompare(skiResort.hotels, [{"name":"Name","beds":0,"points":0}]);
        });
    });
    describe('test booking', function(){
        it('should throw with wrong params', function(){
            assert.throws(() => {skiResort.leave('', 10, 10)});
            assert.throws(() => {skiResort.book('', 1, 10)});
            assert.throws(() => {skiResort.book('Name', 0, 10)});
            assert.deepEqual(skiResort.build('Name', 10), 'Successfully built new hotel - Name')
            assert.deepEqual(skiResort.book('Name', 10), 'Successfully booked')
            assert.throws(() => {skiResort.book('Name', 11, 10)});
        });
        it('should return success message', function(){
            assert.deepEqual(skiResort.build('Name', 10), 'Successfully built new hotel - Name');
            assert.deepEqual(skiResort.book('Name', 10), 'Successfully booked');
            assert.deepEqual(skiResort.leave('Name', 11, 10), '11 people left Name hotel');
        });
    });
    describe('test leave', function(){
        it('leave method with wrong params', function(){
            assert.throws(() => {skiResort.leave()});
            assert.throws(() => {skiResort.leave('', 1, 10)});
            assert.throws(() => {skiResort.leave('Name', 0, 10)});
            
        });
        it('should return success message', function(){
            assert.deepEqual(skiResort.build('Name', 10), 'Successfully built new hotel - Name');
            assert.deepEqual(skiResort.leave('Name', 10), '10 people left Name hotel');

        });
    });
    describe('advanced logic', function(){
        it('should return success message', function(){
            assert.deepEqual(skiResort.build("Sun", 10), 'Successfully built new hotel - Sun');
            assert.deepEqual(skiResort.build("Avenue", 5), 'Successfully built new hotel - Avenue');
            assert.deepEqual(skiResort.book('Sun', 5), 'Successfully booked');
            assert.deepEqual(skiResort.book('Avenue', 5), 'Successfully booked');
            assert.deepEqual(skiResort.leave('Sun', 3, 2), '3 people left Sun hotel');
            assert.deepEqual(skiResort.leave('Avenue', 3, 3), '3 people left Avenue hotel');
            assert.deepEqual(skiResort.book('Avenue', 3), 'Successfully booked');
            assert.deepEqual(skiResort.leave('Avenue', 3, 0.5), '3 people left Avenue hotel');
            assert.deepEqual(skiResort.averageGrade(), 'Average grade: 1.83');
            assert.deepEqual(skiResort.bestHotel, 'Best hotel is Avenue with grade 10.5. Available beds: 3');

        });
    });
});


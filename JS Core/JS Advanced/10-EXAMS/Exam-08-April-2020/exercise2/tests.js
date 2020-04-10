let { Repository } = require("./solution.js");
let assert = require("chai").assert;
let expect = require('chai').expect;
let should = require('chai').should;

describe("Test for Repository", function () {
    let sampleProps = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    let repo1 = new Repository(sampleProps);
    let entity1 = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    let entity2 = {
        name: 'Stamat',
        age: 29,
        birthday: new Date(1991, 0, 21)
    };
    // repository.add(anotherEntity); // should throw an Error
    let entity3 = {
        name: 'Stamat',
        age: 29,
        birthday: new Date(1991, 0, 21)
    };
    describe("constructor testing", function () {
        it("count must be zero", function () {
            let expected = 0;
            assert.deepEqual(repo1.count, expected, 'expected 0');
        });
        it("add some entries and count must be 1", function () {
            assert.equal(repo1.add(entity1), 0, 'must return 0'); // Returns 0
            let expected = 1;
            assert.deepEqual(repo1.count, 1, 'expected 1');
        });

    });
    describe("add()", function () {
        it("  throws error", function () {
            assert.throws(() => {
                repo1.add({
                    name1: 'Gosho',
                    age: 22,
                    birthday: new Date(1998, 0, 7)
                })
            }, `Property name is missing from the entity!`)

            assert.throws(() => {
                assert.throws(() => {
                    repo1.add({
                        name: 'Gosho',
                        age: 22
                    })
                }, new Error(`Property name is missing from the entity!`))
            //     assert.throws(() => {
            //         repo1.add({
            //             name: 'Gosho',
            //             age: 22,
            //         birthday: new Date(1998, 0, 7),
            //         tothrow: new Date(1998, 0, 7)
            //     })
            // }, new Error(`Property name is missing from the entity!`))

            assert.throws(() => {
                repo1.add({
                    name: 0,
                    age: 22,
                birthday: new Date(1998, 0, 7),
            })
        }, new Error(`Property name is not of correct type!`))
        });
    });

    it(' it should be validated against the props object ', function() {
        repo1.add(entity1);
        repo1.add(entity2);
        assert.deepEqual(repo1.add(entity3), 3);
    })

    });

    describe('getId()', function() {
        it('must throw error if id doesnt exist', function() {
            repo1.add(entity1);
            repo1.add(entity2);
            repo1.add(entity3);
            assert.throws(() => {
                repo1.getId(7)
            },`Entity with id: 7 does not exist!`);
         })
        it('id must be returned', function() {
            repo1.add(entity1);
            repo1.add(entity2);
            repo1.add(entity3);
            let expect = '{"name":"Pesho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}';
            assert.deepEqual(JSON.stringify(repo1.getId(1)), expect);
         })
    })
    describe('update()', function() {
        it('must throw error if id doesnt exist', function() {
            assert.throws(() => {
                repo1.update(10, {name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)})
            }, `Entity with id: 10 does not exist!`);
         })
    })
    // TODO: …
});

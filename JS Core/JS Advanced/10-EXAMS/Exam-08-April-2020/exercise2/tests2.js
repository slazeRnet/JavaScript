let { Repository } = require("./solution.js");
let assert = require("chai").assert;
let expect = require('chai').expect;
let should = require('chai').should;

describe("Test for Repository", function () {
    describe("Test for Repository", function () {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        //Initialize the repository
        let repository = new Repository(properties);
        // Add two entities
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        // Initialize props object
        it('must pass', () => {

            assert.deepEqual(repository.add(entity), 0); // Returns 0
            assert.deepEqual(repository.add(entity), 1); // Returns1 

            assert.deepEqual(JSON.stringify(repository.getId(0)),
                JSON.stringify({ "name": "Pesho", "age": 22, "birthday": "1998-01-06T22:00:00.000Z" }));
            // {"name":"Pesho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
            assert.deepEqual(JSON.stringify(repository.getId(1)),
                JSON.stringify({ "name": "Pesho", "age": 22, "birthday": "1998-01-06T22:00:00.000Z" }));
            // {"name":"Pesho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
            //Update an entity
            entity = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.deepEqual(repository.update(1, entity), undefined);
            assert.deepEqual(JSON.stringify(repository.getId(1)),
                JSON.stringify({ "name": "Gosho", "age": 22, "birthday": "1998-01-06T22:00:00.000Z" }));
            // {"name":"Gosho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
            // Delete an entity
            assert.deepEqual(repository.del(0), undefined);
            assert.deepEqual(repository.count, 1); // Returns 1
            
        })
                it('throw fafa', () => {
                    let anotherEntity = {
                        name1: 'Stamat',
                        age: 29,
                        birthday: new Date(1991, 0, 21)
                    };
    
                    assert.throws(() => {
                        repository.add(anotherEntity)
                    }, `Property name is missing from the entity!`); // should throw an Error
    
                })
                it('thr324234ow', () => {
    
    
                   let  anotherEntity = {
                        name: 'Stamat',
                        age: 29,
                        birthday: 1991
                    };
                    assert.throws( () => {
                        repository.add(anotherEntity)
                    }, `Property birthday is not of correct type!`); // should throw a TypeError
                    
                })
                it('throw1', () => {
    
                    assert.throws( () => {
                        repository.del(-1)
                    }, `Entity with id: -1 does not exist!`); // should throw Error for invalid id
    
    
                })
    });

});

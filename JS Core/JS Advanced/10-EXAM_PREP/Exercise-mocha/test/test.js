let user = require('../class.js');
let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe("Parser", () => {
    let user1
    beforeEach(function(){
        // user1 = new User('admin', '123', 'admin@web.com' );

    })
    describe("constructor", () => {
        it('should initialise correctly', (done) =>{
            let user2 = new User('admin', '123', 'admin@web.com' );
            assert.equal(user2.newPost('topic', 'content'), {topic:'topic', content:'content'});
        });
    });
});

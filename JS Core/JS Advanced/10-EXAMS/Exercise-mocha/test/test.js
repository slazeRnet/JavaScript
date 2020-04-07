let User = require('../class.js');
let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe("Parser", () => {
    let user1
    beforeEach(function(){
        // user1 = new User('admin', '123', 'admin@web.com' );

    })
    describe("constructor", () => {
        it('should initialise correctly', () =>{
            let user2 = new User('admin', '123', 'admin@web.com' );
            assert.equal(JSON.stringify(user2.newPost('topic', 'content')),
             JSON.stringify({ topic: 'topic', content: 'content' }));
        });
    });
});

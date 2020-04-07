let ChristmasMovies = require('./02. Christmas Movies_Resources');
let assert = require('chai').assert;
let should = require('chai').should;
let expect = require('chai').expect;

describe("ChristmasMovie", function() {
    describe("testing constructor", function() {
        it("movieCollection", function() {
            let cm = new ChristmasMovies();
            assert.isArray(cm.movieCollection);
            assert.deepEqual(cm.movieCollection.length, 0);

        });
        it("watched", function() {
            let cm = new ChristmasMovies();
            assert.deepEqual(JSON.stringify(cm.watched), '{}');
            
        });
        it("actors", function() {
            let cm = new ChristmasMovies();
            assert.isArray(cm.actors);
            assert.deepEqual(cm.actors.length, 0);
            
        });
     });
     describe("buyMovie()", function() {
        it("expect to throw an error", function() {
            let cm = new ChristmasMovies();
            cm.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            assert.throws(function (){
                cm.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            }, Error, `You already own Home Alone 2 in your collection!`)

        });
        it("buy movie and test collection", function() {
            let cm = new ChristmasMovies();
            assert.deepEqual(cm.buyMovie(
                'Last Christmas', ['Madison Ingoldsby',
                 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']),
                  'You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');

             assert.deepEqual(JSON.stringify(cm.movieCollection),
              JSON.stringify([{"name":"Last Christmas","actors":["Madison Ingoldsby","Emma Thompson","Boris Isakovic"]}]));
        });
     });
     describe("discardMovie()", function() {
        it("expect to throw an error", function() {
            let cm = new ChristmasMovies();
            cm.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            assert.throws(function (){
                cm.discardMovie('non');
            }, Error, `non is not at your collection!`);
            assert.throws(function (){
                cm.discardMovie('Home Alone 2');
            }, Error, `Home Alone 2 is not watched!`);

        });
        it("buy movie and discard it", function() {

            let cm = new ChristmasMovies();

            assert.deepEqual(cm.buyMovie('Last Christmas', ['Madison Ingoldsby',
                 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']),
                  'You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
             cm.watchMovie('Last Christmas'); 

             assert.deepEqual( cm.movieCollection.length, 1 );

             assert.deepEqual( cm.discardMovie('Last Christmas'), 'You just threw away Last Christmas!' );

             assert.deepEqual( cm.movieCollection.length, 0 );
        });
     });
     describe('watch movie', function(){
        it('throws error if movie not present in the collection', function(){

            let cm = new ChristmasMovies();

            assert.throws(() => {cm.watchMovie('non')}, Error, 'No such movie in your collection!');
        });
        it('throws error if movie not present in the collection', function(){

            let cm = new ChristmasMovies();
            cm.buyMovie('movie', ['act']);
            cm.watchMovie('movie');
            cm.discardMovie('movie');
            assert.throws(() => {cm.watchMovie('movie') }, Error, 'No such movie in your collection!');

        });
        it('after evry time a movie is watch the coutner should increase', function(){

            let cm = new ChristmasMovies();
            let movie = 'movie';
            cm.buyMovie(movie, ['act']);
            cm.watchMovie(movie);
            assert.deepEqual(cm.watched[movie], 1);    
            cm.watchMovie(movie);
            assert.deepEqual(cm.watched[movie], 2); 
            cm.watchMovie(movie);
            assert.deepEqual(cm.watched[movie], 3);
            cm.discardMovie(movie); 
            assert.deepEqual(cm.watched[movie], undefined);
        });
     });
     describe('test favorite movie', function(){
        it('throws error if no movie watched', function(){

            let cm = new ChristmasMovies();
             cm.buyMovie('a', ['a']);
            assert.throws(() => {cm.favouriteMovie()}, Error, 'You have not watched a movie yet this year');
        });
        it('throws error if movie not present in the collection', function(){
            let cm = new ChristmasMovies();

             cm.buyMovie('a', ['a']);
             cm.buyMovie('b', ['b']);

             cm.watchMovie('a');

             assert.deepEqual(cm.favouriteMovie(), 'Your favourite movie is a and you have watched it 1 times!');

             cm.watchMovie('b');
             cm.watchMovie('b');

             assert.deepEqual(cm.favouriteMovie(), 'Your favourite movie is b and you have watched it 2 times!');

             cm.discardMovie('b');

             assert.deepEqual(cm.favouriteMovie(), 'Your favourite movie is a and you have watched it 1 times!');
        });
        
     });
     describe('test most stared actor', function(){
        it('throws error if no movie watched', function(){

            let cm = new ChristmasMovies();

            assert.throws(() => {cm.mostStarredActor()}, Error, 'You have not watched a movie yet this year');
        });
        it('assert that the most stared actor functionality is working', function(){

            let cm = new ChristmasMovies();

             cm.buyMovie('a', ['a']);
             cm.buyMovie('b', ['b']);

             cm.watchMovie('a');

             assert.deepEqual(cm.mostStarredActor(),
              `The most starred actor is a and starred in 1 movies!`);
             cm.watchMovie('b');
             cm.watchMovie('b');

             assert.deepEqual(cm.mostStarredActor(), `The most starred actor is a and starred in 1 movies!`);

             cm.discardMovie('a');

             assert.deepEqual(cm.mostStarredActor(), `The most starred actor is b and starred in 1 movies!`);
        });
        
     });
     describe('simple logic testing', function(){
        it('assert that the entire class is working properly', function(){

            let christmas = new ChristmasMovies();
            assert.deepEqual(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']),
             'You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            assert.deepEqual(christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']),
             'You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!');
            assert.deepEqual(christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']),
             'You just got Last Christmas to your collection in which Emilia Clarke, Henry Golding are taking part!');
            assert.deepEqual(christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']),
             'You just got The Grinch to your collection in which Benedict Cumberbatch, Pharrell Williams are taking part!');

            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('Last Christmas');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('Last Christmas');
            assert.deepEqual(christmas.discardMovie('The Grinch'), 'You just threw away The Grinch!')
            assert.deepEqual(christmas.favouriteMovie(),
             'Your favourite movie is Home Alone and you have watched it 3 times!');
            assert.deepEqual(christmas.mostStarredActor(),
             'The most starred actor is Macaulay Culkin and starred in 2 movies!')
        });
        
     });
});

let PizzaUni = require('./02. PizzUni.js');
let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe('PizzaUni', () => {
    let pizzaUniSample1;

    beforeEach(() =>{
        pizzaUniSample1 = new PizzaUni();
    });
    describe('constructor', () => {
        it('test registeredUsers should be an array', () =>{
            assert.isArray(pizzaUniSample1.registeredUsers);
            assert.deepEqual(pizzaUniSample1.registeredUsers.length, 0);

        });
        it('test avaliableProducs should be json object', () =>{
            assert.deepEqual(JSON.stringify(pizzaUniSample1.availableProducts), JSON.stringify({
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            }));
        });
        it('test orders should be an array', () =>{
            assert.isArray(pizzaUniSample1.orders);
            assert.deepEqual(pizzaUniSample1.orders.length, 0);
        });
    });
    describe('test registerUser', () => {
        it('error handling check', () => {
            pizzaUniSample1.registerUser("User1");
            assert.throws(() => {pizzaUniSample1.registerUser("User1")},
             `This email address (User1) is already being used!`);

        });

        it("should register 2 users successfully", () =>{
            pizzaUniSample1.registerUser("User1");
            pizzaUniSample1.registerUser("User2");
            assert.deepEqual(pizzaUniSample1.registeredUsers.length, 2);
        });
    });
    describe('test makeAnOrder', () => {
        it('error handling check', () => {
            pizzaUniSample1.registerUser("User1");
            assert.throws(() => {pizzaUniSample1.makeAnOrder("User1", "Non")},
             `You must order at least 1 Pizza to finish the order.`);
             assert.throws(() => {pizzaUniSample1.makeAnOrder("Non", "Italian Style")},
             `You must be registered to make orders!`);

        });

        it("should return the id  order successfully", () =>{
            pizzaUniSample1.registerUser("User1");
            assert.deepEqual(pizzaUniSample1.makeAnOrder("User1", "Italian Style", "Water"), 0);
        });
        it("should add the order to orders successfully", () =>{
            pizzaUniSample1.registerUser("User1");
            assert.deepEqual(pizzaUniSample1.makeAnOrder("User1", "Italian Style", "Water"), 0);
            assert.deepEqual(pizzaUniSample1.makeAnOrder("User1", "Italian Style", "Fanta"), 1);
            assert.deepEqual(pizzaUniSample1.makeAnOrder("User1", "Italian Style", "Coca-cola"), 2);
            assert.deepEqual(JSON.stringify(pizzaUniSample1.orders),
             '[{"orderedPizza":"Italian Style","orderedDrink":"Water","email":"User1","status":"pending"},{"orderedPizza":"Italian Style","orderedDrink":"Fanta","email":"User1","status":"pending"},{"orderedPizza":"Italian Style","email":"User1","status":"pending"}]');
        });
    });
    describe('test detailsAboutMyOrder', () => {

        it("should return the status of  order successfully", () =>{
            pizzaUniSample1.registerUser("User1");
            pizzaUniSample1.makeAnOrder("User1", "Italian Style", "Water");
            assert.deepEqual(pizzaUniSample1.detailsAboutMyOrder(0), 'Status of your order: pending');
            assert.deepEqual(JSON.stringify(pizzaUniSample1.completeOrder()),
             '{"orderedPizza":"Italian Style","orderedDrink":"Water","email":"User1","status":"completed"}');
        });
        it("should do nothing", () =>{
            pizzaUniSample1.registerUser("User1");
            assert.deepEqual(JSON.stringify(pizzaUniSample1.completeOrder()),
             undefined);
           
        });
    });
});
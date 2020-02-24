let PizzaUni = require('./02. PizzUni.js');
let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe("PizaUni …", function() {
    let stringifyJSON = (a, b) => assert.deepEqual(JSON.stringify(a), JSON.stringify(b));
    let pizza;
    let pizza1;

    beforeEach(() => {
        pizza1 = new PizzaUni();
        pizza = new PizzaUni();
stringifyJSON(pizza.registerUser('User1'), { email: 'User1', orderHistory: [] });
stringifyJSON(pizza.registerUser('User2'), { email: 'User2', orderHistory: [] });
stringifyJSON(pizza.makeAnOrder('User1', 'Italian Style', 'Fanta'), 0);
stringifyJSON(pizza.makeAnOrder('User1', 'Italian Style', 'Fanta'), 1);
stringifyJSON(pizza.completeOrder(), 
{
    orderedPizza: 'Italian Style',
    orderedDrink: 'Fanta',
    email: 'User1',
    status: 'completed'
  });
stringifyJSON(pizza.doesTheUserExist('User2'), { email: 'User2', orderHistory: [] });
stringifyJSON(pizza.doesTheUserExist('User1'),{
    email: 'User1',
    orderHistory: [
      { orderedPizza: 'Italian Style', orderedDrink: 'Fanta' },
      { orderedPizza: 'Italian Style', orderedDrink: 'Fanta' }
    ]
  });
stringifyJSON(pizza.doesTheUserExist('Non'), undefined);
stringifyJSON(pizza.detailsAboutMyOrder(0), 'Status of your order: completed');
stringifyJSON(pizza.detailsAboutMyOrder(1), 'Status of your order: pending');
stringifyJSON(pizza.registeredUsers, [{"email":"User1","orderHistory":[{"orderedPizza":"Italian Style",
"orderedDrink":"Fanta"},{"orderedPizza":"Italian Style","orderedDrink":"Fanta"}]},
{"email":"User2","orderHistory":[]}])

    });

    describe("constructor", function() {
        it("correct", function() {
            stringifyJSON(pizza1.registeredUsers, []);
            stringifyJSON(pizza1.availableProducts.pizzas, ['Italian Style', 'Barbeque Classic', 'Classic Margherita']);
            stringifyJSON(pizza1.availableProducts.drinks, ['Coca-Cola', 'Fanta', 'Water']);
            stringifyJSON(pizza1.orders, []);
        });
     });
     describe("registerUser", function() {
        it("error taken", function() {
            pizza1.registerUser("Taken");
           assert.throws(function(){ pizza1.registerUser("Taken")});//.to.throw(Error, 'This email address (Taken) is already being used!');
        });
        it("correct", function() {
            let return1 = pizza1.registerUser("Taken");
            stringifyJSON(return1 , { email: 'Taken', orderHistory: [] });
            stringifyJSON(pizza1.registeredUsers , [{"email":"Taken","orderHistory":[]}]);
        });
     });
     describe("makeAnOrder", function() {
        it("error taken", function() {
            pizza1.registerUser("Taken");
           assert.throws(function(){ pizza1.makeAnOrder("NotExists", 'Italian Style', 'Fanta')}); //.to.throw(Error, 'You must be registered to make orders!');
           assert.throws(function(){ pizza1.makeAnOrder("Taken", 0, 'Fanta')}); //.to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
        });
        it("correct", function() {
            let return1 = pizza1.registerUser("Taken");
            pizza1.registerUser('Test1');
            pizza1.makeAnOrder('Test1', 'Italian Style', 'Fanta');
            stringifyJSON(return1 , { email: 'Taken', orderHistory: [] });
            assert.deepEqual(pizza1.makeAnOrder('Test1', 'Italian Style', 'Fanta'), 1);
            assert.deepEqual(pizza1.makeAnOrder('Test1', 'Barbeque Classic', 'Coca-Cola'), 2);
            assert.deepEqual(pizza1.makeAnOrder('Test1', 'Classic Margherita', 'Water'), 3);
            stringifyJSON(pizza1.orders, [{"orderedPizza":"Italian Style","orderedDrink":"Fanta",
            "email":"Test1","status":"pending"},{"orderedPizza":"Italian Style",
            "orderedDrink":"Fanta","email":"Test1","status":"pending"},
            {"orderedPizza":"Barbeque Classic","orderedDrink":"Coca-Cola","email":"Test1","status":"pending"},
            {"orderedPizza":"Classic Margherita","orderedDrink":"Water","email":"Test1","status":"pending"}]);
        });
     });
     describe("detailsAboutMyOrder", function() {
        it("error taken", function() {
            pizza1.registerUser("Test1");
            pizza1.makeAnOrder('Test1', 'Italian Style', 'Fanta');
            stringifyJSON(pizza1.detailsAboutMyOrder(), undefined);
            stringifyJSON(pizza1.detailsAboutMyOrder(-1), undefined);
            stringifyJSON(pizza1.detailsAboutMyOrder(1), undefined);
        });
        it("correct", function() {
            pizza1.registerUser("Test1");
            pizza1.makeAnOrder('Test1', 'Italian Style', 'Fanta');
            assert.deepEqual(pizza1.detailsAboutMyOrder(0), 'Status of your order: pending');
           stringifyJSON(pizza1.completeOrder(0), {
            orderedPizza: 'Italian Style',
            orderedDrink: 'Fanta',
            email: 'Test1',
            status: 'completed'
            });
        pizza1.makeAnOrder('Test1', 'Italian Style', 'Fanta');
        pizza1.makeAnOrder('Test1', 'Italian Style', 'Fanta');
        assert.deepEqual(pizza1.detailsAboutMyOrder(0), 'Status of your order: completed');
        });
    });
        describe("doesThisUserExists", function() {
            it("error taken", function() {
                pizza1.registerUser("Test1");
                pizza1.registerUser("1");
                assert.throws(() => {pizza1.registerUser("1")});
            });
            it("correct", function() {
                pizza1.registerUser("Test1");
                pizza1.registerUser("1");
                stringifyJSON(pizza1.doesTheUserExist("1"), { email: '1', orderHistory: [] });
                stringifyJSON(pizza1.doesTheUserExist("Test1"),  { email: 'Test1', orderHistory: [] });
                stringifyJSON(pizza1.doesTheUserExist("Test2"),  undefined);
                
            });
                
        });
});

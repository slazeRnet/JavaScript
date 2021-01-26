function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  const cheese = new Food('feta', 5);
  const fun = new Toy('robot', 40);

  console.log(cheese); //Food { name: 'feta', price: 5, category: 'food' }
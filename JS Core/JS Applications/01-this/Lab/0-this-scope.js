function outer() {
    const inner = () => console.log(this);
    inner();
  }
  const obj = {
    name: 'Peter',
    func: outer
  };
  obj.func(); // Object {name: "Peter"}
  